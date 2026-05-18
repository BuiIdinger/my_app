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

    <BaseButton
      :variant="BaseButtonLogic.Variant.YellowBackgroundBordered"
      :text="`Add To Cart | ${formatted_price}`"
      v-on:click.prevent="ProductPreview.purchase(product)"
    />
  </div>
</template>

<script setup lang="ts">
import * as Format from "~/src/Format";
import * as ProductPreview from "~/src/models/ProductPreview";
import * as BaseButtonLogic from "~/src/BaseButton";
import BaseButton from "~/components/base/Button.vue";
import type { Product } from "~/src/Product";
import { computed } from "vue";

const props = defineProps<{
  product: Product,
}>();

const formatted_price = computed(() => {
  return Format.price(props.product.price);
});
</script>