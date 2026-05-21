<template>
  <BaseModel
    v-model:visible="Cart.status.value"
    :variant="BaseModelLogic.Variant.AlignedFixedRightTopDownMaxWidth"
  >
    <div class="h-[calc(100vh-40px)] lg:h-[calc(100vh-80px)] max-h-full flex flex-col justify-between min-h-0
                relative">

      <!-- Close Button -->
      <CrossGlyph
        v-on:click.prevent="Cart.close()"
        class="w-[24px] h-auto absolute top-0 right-0 fill-black cursor-pointer z-10 duration-300 hover:scale-[.95]
               hover:opacity-50"
      />

      <div class="pb-[10px] pr-[14px] flex-1 overflow-y-auto min-h-0 mt-[60px] mb-[20px] custom-scrollbar flex
                  flex-col gap-y-[20px]">
        <NoProductsAdded v-if="Use.get(Cart.contents).length === 0" />
        <AddedProductsView v-else />
      </div>

      <div class="flex-shrink-0 mt-auto w-full">
        <div class="my-[20px] border-t-black border-t-[1px] opacity-30" />

        <div class="font-black text-[20px] lg:text-[30px] flex justify-between items-end mb-[24px]">
          <p>Cart Total</p>
          <p>{{ Format.price(VueUse.get(total_price)) }}</p>
        </div>

        <BaseButton
          v-on:click.prevent="Cart.check_out"
          :variant="BaseButtonLogic.Variant.YellowBackgroundBordered"
          text="Place Pre-Order"
        />
      </div>
    </div>
  </BaseModel>
</template>

<script setup lang="ts">
import CrossGlyph from "~/components/svg_glyphs/cross.vue";
import NoProductsAdded from "~/components/cart/NoProductsAdded.vue";
import BaseModel from "~/components/models/BaseModel.vue";
import BaseButton from "~/components/base/Button.vue";
import AddedProductsView from "~/components/cart/AddedProductsView.vue";
import * as Use from "@vueuse/core";
import * as Cart from "~/src/Cart";
import * as Format from "~/src/Format";
import * as VueUse from "@vueuse/core";
import * as BaseModelLogic from "~/src/BaseModel";
import * as BaseButtonLogic from "~/src/BaseButton";
import { computed } from "vue";
/// Dim the checkout button if no items exist in the
/// users cart
const checkout_button_enabled = computed(() => {
  return Cart.is_contents_empty() ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer hover:scale-[.98]";
});

const total_price = computed<number>(() => {
  return Cart.contents.value.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
});
</script>

<style scoped lang="css">
.cart-enter-active,
.cart-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.cart-enter-from,
.cart-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 9999px;
}
</style>