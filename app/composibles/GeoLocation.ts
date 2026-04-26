import type { Position } from "@capacitor/geolocation"
import { Geolocation } from "@capacitor/geolocation"
import { ref, computed } from "vue"

const location = ref<Position | null>(null);
let watcher_id: null | string = null;

const on_location_update = (position: Position | null, error: any): void => {
  if (error) {
    console.error("Error watching position:", error);
    return;
  }
  if (!position || !position.coords) {
    console.error("Position is null");
    return;
  }

  location.value = position;
}

export const init = async (): Promise<void> => {
  try {
    const permission: any = await Geolocation.requestPermissions();
    if (permission.location !== "granted") {
      return;
    }
  } catch (e) {
    console.error("Location permission error");
    return;
  }

  watcher_id = await Geolocation.watchPosition(
    {
      enableHighAccuracy: true,
      timeout: 3000
    },
    (position, err) => {
      on_location_update(position, err);
    }
  );
}

export const exit = async (): Promise<void> => {
  if (watcher_id !== null) {
    await Geolocation.clearWatch({ id: watcher_id });
  }
}

export const geo_location = computed(() => {
  return location.value;
})