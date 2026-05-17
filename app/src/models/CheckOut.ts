import { computed, ref } from "vue";
import * as VueUse from "@vueuse/core";
import * as Cart from "~/src/Cart";

export enum Page {
  Details,
  Loading,
  Confirmed,
}

export const error_message = ref<string | null>(null);

const internal_current_page = ref<Page>(Page.Details);
const is_model_open = ref<boolean>(false);
export const email_address = ref<string>("");

export const open = (): void => {
  VueUse.set(is_model_open, true);
}
export const close = (): void => {
  VueUse.set(is_model_open, false);
}
export const invert = (): void => {
  VueUse.set(is_model_open, VueUse.get(!is_model_open.value));
}
export const status: ComputedRef<boolean> = computed((): boolean => {
  return VueUse.get(is_model_open);
});

export const page: ComputedRef<Page> = computed((): Page => {
  return VueUse.get(internal_current_page);
});

export const set_page = (page: Page): void => {
  VueUse.set(internal_current_page, page);
}

export const check_out = async (): Promise<void> => {
  if (VueUse.get(email_address) === "") {
    VueUse.set(error_message, "Email address cannot be empty");
    return;
  }
  if (VueUse.get(email_address).indexOf("@bdsc.school.nz") === -1) {
    VueUse.set(error_message, "Email address must end in @bdsc.school.nz");
    return;
  }

  set_page(Page.Loading);

  try {
    const response: any = await $fetch("/api/payout", {
      method: "POST",
      body: {
        email: email_address.value,
        products: Cart.contents.value,
      }
    });

    if (!response) {
      set_page(Page.Details);
      return;
    }

    console.log(response.success);
    console.log(response.data.message)

  } catch (error: any) {
    set_page(Page.Details);
    console.error('Server Error:', error.data?.statusMessage || error.message)
  }

  set_page(Page.Confirmed);
}
