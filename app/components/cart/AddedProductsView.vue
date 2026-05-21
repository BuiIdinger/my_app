<template>
  <div
    v-for="(product, index) in Use.get(Cart.contents)"
    :key="product.id"
    class="bg-[#fff757] p-[20px] rounded-[20px] border-[4px] border-black
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-shrink-0"
  >
    <div class="flex items-center gap-[20px]">
      <!-- Product headshot image -->
      <nuxt-img
        v-on:click.prevent="open_product_preview(product)"
        :src="product.headshot_image_url"
        width="87"
        height="87"
        format="webp"
        class="rounded-full w-[60px] h-[60px] lg:w-[87px] lg:h-[87px] border-[4px] border-black flex-shrink-0
               cursor-pointer duration-300 hover:scale-[.95] hover:opacity-75"
      />

      <!-- Product name -->
      <div
        v-on:click.prevent="open_product_preview(product)"
        class="font-black text-[20px] lg:text-[24px] cursor-pointer duration-300 hover:scale-[.95] hover:opacity-75"
      >
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
        <button
          v-on:click.prevent="open_product_preview(product)"
          class="bg-[#fff757] border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  rounded-[15px] px-[20px] py-[5px] border-black flex items-center justify-center
                  hover:scale-[.95] duration-300 hover:opacity-75"
        >
          <ChevronLeftTwo class="w-[20px] h-auto fill-black" />
        </button>
        <button
          v-on:click.prevent="Cart.remove(index)"
          class="bg-[#fff757] border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          rounded-[15px] px-[20px] py-[5px] border-black flex items-center justify-center
          hover:scale-[.95] duration-300 hover:opacity-75"
        >
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
import type { Product } from "~/src/Product";

const open_product_preview = (product: Product): void => {
  ProductPreview.open(product, true);
  Cart.close()
}
</script>