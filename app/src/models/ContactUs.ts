import * as VueUse from "@vueuse/core";
import * as Notification from "~/src/Notification";
import { computed, ref } from "vue";

interface FormData {
  email: string | null;
  message_content: string | null;
}

export const form_data = reactive<FormData>({
  email: null,
  message_content: null,
});

enum Page {
  Loading,
  Form,
}

const active_page = ref<Page>(Page.Form);

export const set_page = (page: Page): void => {
  VueUse.set(active_page, page);
}

export const page = computed((): Page => {
  return VueUse.get(active_page);
});

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
  set(newValue: boolean): void {
    is_model_open.value = newValue;
  }
});

export const submit = async (): Promise<void> => {
  /// Don't submit if content is null or empty
  if (form_data.email === null || form_data.message_content === null ||
      form_data.email === "" || form_data.message_content === "") {
    Notification.open("Cannot submit. Some fields are missing");
    return;
  }

  set_page(Page.Loading);

  try {
    const response: any = await $fetch("/api/contact", {
      method: "POST",
      body: {
        content: VueUse.get(content_input),
        email: VueUse.get(email_input),
      }
    });

    if (response?.success === true) {
      Notification.open("Please wait 1-3 days for a response.");
      close();
    } else {
      Notification.open("Failed to submit form, please try again later");
    }
  } catch (error: any) {
    Notification.open("Failed to submit form, please try again later");
    set_page(Page.Form);
  }
}