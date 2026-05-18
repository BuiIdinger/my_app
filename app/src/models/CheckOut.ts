import { computed, ref } from "vue";
import * as VueUse from "@vueuse/core";
import * as Cart from "~/src/Cart";
import * as Notification from "~/src/Notification";

export interface FormData {
  email_address: string | null,
}

export const form_data: FormData = reactive({
  email_address: null,
});

export enum Page {
  Details,
  Loading,
  Confirmed,
}

const internal_current_page = ref<Page>(Page.Details);
const is_model_open = ref<boolean>(false);

export const open = (): void => {
  VueUse.set(is_model_open, true);
}
export const close = (): void => {
  VueUse.set(is_model_open, false);
}
export const invert = (): void => {
  VueUse.set(is_model_open, VueUse.get(!is_model_open.value));
}
export const status: WritableComputedRef<boolean> = computed<boolean>({
  get(): boolean {
    return is_model_open.value;
  },
  set(newValue: boolean): void {
    is_model_open.value = newValue;
  }
});

export const page: ComputedRef<Page> = computed((): Page => {
  return VueUse.get(internal_current_page);
});

export const set_page = (page: Page): void => {
  VueUse.set(internal_current_page, page);
}

export const check_out = async (): Promise<void> => {
  if (form_data.email_address === null || form_data.email_address === "") {
    Notification.open("Email address cannot be empty");
    return;
  }
  if (form_data.email_address.indexOf("@my.bdsc.school.nz") === -1) {
    Notification.open("Email address must end in @my.bdsc.school.nz");
    return;
  }

  set_page(Page.Loading);

  try {
    const response: any = await $fetch("/api/pre_order", {
      method: "POST",
      body: {
        email: form_data.email_address,
        products: Cart.contents.value,
      }
    });

    if (response?.success === true) {
      form_data.email_address = null;
      set_page(Page.Confirmed);
      Cart.delete_cart();
    } else {
      Notification.open("Failed to pre-order, please try again later");
      set_page(Page.Details);
    }
  } catch (error: any) {
    Notification.open("Failed to pre-order, please try again later");
    set_page(Page.Details);
    console.error('Server Error:', error.data?.statusMessage || error.message)
  }
}
