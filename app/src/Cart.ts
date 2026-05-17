import { ref, computed } from "vue";
import type { Product } from "~/src/Product";
import * as CheckOut from "~/src/models/CheckOut";

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

const filler_products: Product[] = [];

const cart_products = ref<Product[]>(filler_products);

export const contents = computed(() => {
  return cart_products.value;
});

export const is_contents_empty = (): boolean => {
  return contents.value.length === 0;
}

export const add = (product: Product): void => {
  cart_products.value.push(product);
}

export const remove = (index: number): void => {
  cart_products.value.splice(index, 1);
}

export const check_out = (): void => {
  if (is_contents_empty()) {
    return;
  }

  close();
  CheckOut.open();
}
