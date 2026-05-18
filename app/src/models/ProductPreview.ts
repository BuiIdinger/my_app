import { computed, ref } from "vue";
import { set, get } from "@vueuse/core";
import * as Cart from "~/src/Cart";
import type { Product } from "~/src/Product";
import * as Notification from "~/src/Notification";

const is_model_open = ref<boolean>(false);
const should_open_cart_after = ref<boolean>(false);
const current_active_product = ref<Product | null>(null);

export const open = (product: Product, open_cart_after: boolean = false): void => {
  is_model_open.value = true;
  current_active_product.value = product;
  // set(current_active_product, product);
  set(should_open_cart_after, open_cart_after);
}
export const close = (): void => {
  is_model_open.value = false;
  if (get(should_open_cart_after) === true) {
    Cart.open();
    should_open_cart_after.value = false;
  }
}
export const invert = (): void => {
  is_model_open.value = !is_model_open.value;
  if (get(should_open_cart_after) === true) {
    Cart.open();
    should_open_cart_after.value = false;
  }
}
export const status: WritableComputedRef<boolean> = computed<boolean>({
  get(): boolean {
    return is_model_open.value;
  },
  set(new_value: boolean): void {
    is_model_open.value = new_value;

    /// Check if we need to open the cart model after
    if (get(should_open_cart_after) === true) {
      Cart.open();
      should_open_cart_after.value = false;
    }
  }
});

export const active_product: ComputedRef<Product | null> = computed(() => {
  return current_active_product.value;
});

export const purchase = (product: Product): void => {
  Cart.add(product);
  close();
  Notification.open("Added to cart");
}