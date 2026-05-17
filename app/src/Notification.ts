import { ref, computed } from "vue";
import * as VueUse from "@vueuse/core";

const is_visible = ref<boolean>(false);
const set_content = ref<string>("");

export const open = (content: string): void => {
  VueUse.set(is_visible, true);
  VueUse.set(set_content, content);

  VueUse.useTimeoutFn((): void => {
    close();
  }, 1750);
}

export const close = (): void => {
  VueUse.set(is_visible, false);
}

export const invert = (): void => {
  VueUse.set(is_visible, VueUse.get(!is_visible));
}

export const status: ComputedRef<boolean> = computed((): boolean => {
  return is_visible.value;
});

export const content: ComputedRef<string> = computed((): string => {
  return set_content.value;
});