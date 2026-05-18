<template>
  <BackdropOverlay :claim_scroll_lock_ownership="true" v-if="Use.get(Cart.status)" />

  <Transition name="cart" mode="out-in">
    <div
      ref="model"
      v-if="Use.get(Cart.status)"
      class="lg:w-[700px] w-full fixed right-0 top-0 bottom-0 bg-[#fff0fb]
             lg:border-l-[8px] border-black z-[999] p-[20px] lg:p-[60px] flex flex-col"
    >

<!--      <BaseSmiley class="absolute right-[25px] bottom-[140px] hover:scale-[.85] duration-300 w-[100px]-->
<!--                       h-[100px] md:w-[140px] md:h-[140px] rotate-[15deg] animate-float z-[10] pointer-events-none" />-->

      <div class="w-full flex justify-end mb-[20px]">
        <CrossGlyph
          @click="Cart.close()"
          class="w-[24px] h-auto fill-black cursor-pointer"
        />
      </div>


      <div class="flex-1 overflow-y-auto pr-[10px] custom-scrollbar flex flex-col gap-y-[20px]">
        <NoProductsAdded v-if="Use.get(Cart.contents).length === 0" />

        <div
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

      <!-- Bottom -->
      <div class="mt-auto">
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
  </Transition>
</template>

<script setup lang="ts">
import CrossGlyph from "~/components/svg_glyphs/cross.vue";
import BackdropOverlay from "~/components/models/BackdropOverlay.vue";
import TrashCanGlyph from "~/components/svg_glyphs/TrashCan.vue";
import ChevronLeftTwo from "~/components/svg_glyphs/ChevronLeftTwo.vue";
import NoProductsAdded from "~/components/cart/NoProductsAdded.vue";
import * as Use from "@vueuse/core";
import * as Cart from "~/src/Cart";
import * as ProductPreview from "~/src/models/ProductPreview";
import * as Format from "~/src/Format";
import { computed, useTemplateRef } from "vue";
import * as VueUse from "@vueuse/core";

/// Allow closing model after click outside of model target area
const target = useTemplateRef("model");
Use.onClickOutside(target, event => {
  Cart.close();
});

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

/* Optional: smooth scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
</style>