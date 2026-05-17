import * as VueUse from "@vueuse/core";
import { ref, computed } from "vue";

const is_visible = ref<boolean>(true);

export const show = (): void => {
  VueUse.set(is_visible, true);
}

export const hide = (): void => {
  VueUse.set(is_visible, false);
}

export const status: ComputedRef<boolean> = computed((): boolean => {
  return is_visible.value;
})