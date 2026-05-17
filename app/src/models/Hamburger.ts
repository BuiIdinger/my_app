import { ref, computed } from "vue";

const menu_is_open = ref<boolean>(false);

export const open = (): void => {
  menu_is_open.value = true;
}

export const close = (): void => {
  menu_is_open.value = false;
}

export const invert = (): void => {
  menu_is_open.value = !menu_is_open.value;
}

export const status: ComputedRef<boolean> = computed(() => {
  return menu_is_open.value;
});