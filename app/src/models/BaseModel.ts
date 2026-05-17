import * as VueUse from "@vueuse/core";
import { ref } from "vue";

const internal_has_current_owner = ref<boolean>(false);

export const claim_ownership = (): void => {
  VueUse.set(internal_has_current_owner, true);
}

export const release_ownership = (): void => {
  VueUse.set(internal_has_current_owner, false);
}

export const has_owner = (): boolean => {
  return VueUse.get(internal_has_current_owner);
}