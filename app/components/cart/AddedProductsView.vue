<template>
  <div
    v-else
    v-for="product in Use.get(Cart.contents)"
    :key="product.id"
    class="bg-[#fff757] p-[20px] rounded-[20px] border-[4px] border-black
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-shrink-0"
  >
    <div class="flex items-center gap-[20px]">
      <!-- Product headshot image -->
      <nuxt-img
        :src="product.headshot_image_url"
        width="87"
        height="87"
        format="webp"
        class="rounded-full w-[60px] h-[60px] lg:w-[87px] lg:h-[87px] border-[4px] border-black flex-shrink-0"
      />

      <!-- Product name -->
      <div class="font-black text-[20px] lg:text-[24px]">
        <p>{{ product.name }}</p>
      </div>
    </div>

    <div class="flex justify-between items-center mt-4">
      <!-- Price -->
      <div class="font-black text-[26px]">
        <p>{{ Format.price(product.price) }}</p>
      </div>

      <!-- Nav buttons for slideshow -->
      <div class="flex gap-x-[15px]">
        <button @click.prevent="ProductPreview.open(product, true); Cart.close();" class="cart-action-btn">
          <ChevronLeftTwo class="w-[20px] h-auto fill-black" />
        </button>
        <button @click.prevent="Cart.remove(product)" class="cart-action-btn">
          <TrashCanGlyph class="w-[20px] h-auto fill-black" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Use from "@vueuse/core";
import * as Cart from "~/src/Cart";
import * as ProductPreview from "~/src/models/ProductPreview";
import * as Format from "~/src/Format";
import ChevronLeftTwo from "~/components/svg_glyphs/ChevronLeftTwo.vue";
import TrashCanGlyph from "~/components/svg_glyphs/TrashCan.vue";
</script>