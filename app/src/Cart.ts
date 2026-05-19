import { ref, computed, type ComputedRef } from "vue";
import type { Product } from "~/src/Product";
import * as CheckOut from "~/src/models/CheckOut";
import * as Notification from "~/src/Notification";

const STORAGE_KEY = "buildinger-belleeeee";

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

const save_cart = (): void => {
  console.debug("saving newly updated cart");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart_products.value));
}

const get_initial_cart = (): Product[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    console.debug("got existing saved cart");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    Notification.open("Failed to load existing saved cart");
    return [];
  }
}

const cart_products = ref<Product[]>(get_initial_cart());

export const contents = computed(() => {
  return cart_products.value;
});

export const is_contents_empty = (): boolean => {
  return contents.value.length === 0;
}

export const add = (product: Product): void => {
  cart_products.value.push(product);
  save_cart();
}

export const delete_cart = (): void => {
  cart_products.value = [];
  save_cart();
}

export const remove = (index: number): void => {
  cart_products.value.splice(index, 1);
  save_cart();
}

export const check_out = (): void => {
  if (is_contents_empty()) {
    return;
  }

  close();
  CheckOut.open();
}
