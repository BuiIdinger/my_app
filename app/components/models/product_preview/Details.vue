<template>
  <div class="flex flex-col justify-between gap-y-[24px] text-[19px] lg:text-[28px]">

    <!-- Quick description about the product -->
    <div class="border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
                p-[20px] lg:p-[40px] border-black font-black h-full"
    >
      <p>{{ props.product.description }}</p>
    </div>

    <!-- Legal information for product -->
    <ul class="border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
               p-[20px] lg:p-[40px] border-black font-black"
    >
      <li v-for="legal_detail in props.product.legal_information">{{ legal_detail }}</li>
    </ul>

    <!-- Add to cart button -->
    <button
      @click.prevent="ProductPreview.purchase(product)"
      class="bg-[#fff757] border-[4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
              px-[40px] py-[10px] border-black font-black duration-300 hover:scale-[.95]
              hover:opacity-90 active:scale-[.80]"
    >
      Add To Cart | {{ formatted_price }}
    </button>
  </div>
</template>

<script setup lang="ts">
import * as Format from "~/src/Format";
import * as Cart from "~/src/Cart";
import * as ProductPreview from "~/src/models/ProductPreview";
import type { Product } from "~/src/Product";
import { computed } from "vue";

const props = defineProps<{
  product: Product,
}>();

const formatted_price = computed(() => {
  return Format.price(props.product.price);
});
</script>