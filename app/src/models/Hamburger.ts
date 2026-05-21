import { ref, computed } from "vue";

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

export const status: WritableComputedRef<boolean> = computed<boolean>({
  get(): boolean {
    return is_model_open.value;
  },
  set(new_value: boolean): void {
    is_model_open.value = new_value;
  }
});