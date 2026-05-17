import { computed } from "vue";

export const price = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NZD"
  }).format(price);
}