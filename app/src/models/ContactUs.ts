import { computed, ref } from "vue";

const is_model_open = ref<boolean>(false);

export const open = (): void => {
  is_model_open.value = true;
}
export const close = (): void => {
  is_model_open.value = false;
}
export const invert = (): void => {
  is_model_open.value = !is_model_open.value;
}
export const status: ComputedRef<boolean> = computed(() => {
  return is_model_open.value;
});