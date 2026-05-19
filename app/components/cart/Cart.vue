<template>
  <BaseModel
  v-model:visible="Cart.status.value"
  :variant="BaseModelLogic.Variant.AlignedFixedRightTopDownMaxWidth"
  max_width="700px"
  width="700px"
  height="100vh"
  max_height="100vh"
  >
    <div class="h-[calc(100vh-40px)] lg:h-[calc(100vh-80px)] max-h-full flex flex-col justify-between min-h-0 relative">

      <CrossGlyph
        v-on:click.prevent="Cart.close()"
        class="w-[24px] h-auto absolute top-0 right-0 fill-black cursor-pointer z-10"
      />

      <div class="pb-[10px] flex-1 overflow-y-auto min-h-0 mt-[60px] mb-[20px] pr-[10px] custom-scrollbar flex flex-col gap-y-[20px]">
        <NoProductsAdded v-if="Use.get(Cart.contents).length === 0" />

        <div
          v-else
          v-for="(product, index) in Use.get(Cart.contents)"
          :key="index"
          class="bg-[#fff757] p-[20px] rounded-[20px] border-[4px] border-black
                 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-shrink-0"
        >
          <div class="flex items-center gap-[20px]">
            <nuxt-img
            :src="product.headshot_image_url"
            width="87"
            height="87"
            format="webp"
            class="rounded-full w-[60px] h-[60px] lg:w-[87px] lg:h-[87px] border-[4px] border-black flex-shrink-0"
            />
            <div class="font-black text-[20px] lg:text-[26px]">
              <p>{{ product.name }}</p>
            </div>
          </div>

          <div class="flex justify-between items-center mt-4">
            <div class="font-black text-[20px] lg:text-[26px]">
              <p>{{ Format.price(product.price) }}</p>
            </div>

            <div class="flex gap-x-[15px]">
              <button @click.prevent="ProductPreview.open(product, true); Cart.close();" class="cart-action-btn">
                <ChevronLeftTwo class="w-[20px] h-auto fill-black" />
              </button>
              <button @click.prevent="Cart.remove(index)" class="cart-action-btn">
                <TrashCanGlyph class="w-[20px] h-auto fill-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-shrink-0 mt-auto w-full">
        <div class="my-[20px] border-t-black border-t-[1px] opacity-30" />

        <div class="font-black text-[20px] lg:text-[30px] flex justify-between items-end mb-[24px]">
          <p>Cart Total</p>
          <p>{{ Format.price(VueUse.get(total_price)) }}</p>
        </div>

        <button
        @click.prevent="Cart.check_out()"
        :class="checkout_button_enabled"
        class="w-full bg-[#fff757] border-[4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
                 px-[40px] py-[10px] border-black font-black duration-300 text-[20px] lg:text-[30px]"
        >
          Pre-order
        </button>
      </div>
    </div>
  </BaseModel>
</template>

<script setup lang="ts">
import CrossGlyph from "~/components/svg_glyphs/cross.vue";
import TrashCanGlyph from "~/components/svg_glyphs/TrashCan.vue";
import ChevronLeftTwo from "~/components/svg_glyphs/ChevronLeftTwo.vue";
import NoProductsAdded from "~/components/cart/NoProductsAdded.vue";
import BaseModel from "~/components/models/BaseModel.vue";
import * as Use from "@vueuse/core";
import * as Cart from "~/src/Cart";
import * as ProductPreview from "~/src/models/ProductPreview";
import * as Format from "~/src/Format";
import * as VueUse from "@vueuse/core";
import * as BaseModelLogic from "~/src/BaseModel";
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
.cart-action-btn {
  @apply bg-[#fff757] border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
  rounded-[15px] px-[20px] py-[5px] border-black flex items-center justify-center
  hover:scale-[.95] duration-300;
}

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
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
</style>