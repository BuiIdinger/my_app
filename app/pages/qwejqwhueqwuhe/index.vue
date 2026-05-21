<template>
  <div class="m-[200px]">
    <div class="font-bold text-[30px]">
      <h1>orders</h1>
    </div>

    <div
    v-for="(product, index) in Use.get(products)"
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
          class="rounded-full w-[60px] h-[60px] lg:w-[87px] lg:h-[87px] border-[4px] border-black flex-shrink-0
                 cursor-pointer duration-300 hover:scale-[.95] hover:opacity-75"
        />

        <!-- Product name -->
        <div
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
            class="bg-[#fff757] border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    rounded-[15px] px-[20px] py-[5px] border-black flex items-center justify-center
                    hover:scale-[.95] duration-300 hover:opacity-75"
          >
            <ChevronLeftTwo class="w-[20px] h-auto fill-black" />
          </button>
          <button
            class="bg-[#fff757] border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            rounded-[15px] px-[20px] py-[5px] border-black flex items-center justify-center
            hover:scale-[.95] duration-300 hover:opacity-75"
          >
            <TrashCanGlyph class="w-[20px] h-auto fill-black" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Notification from "~/src/Notification";
import type { Product } from "~/src/Product"
import { ref, onMounted } from "vue";
import * as Use from "@vueuse/core";
import * as Format from "~/src/Format";
import TrashCanGlyph from "~/components/svg_glyphs/TrashCan.vue";
import ChevronLeftTwo from "~/components/svg_glyphs/ChevronLeftTwo.vue";

const products = ref<Product[] | null>(null);

onMounted(async () => {

  try {
    const response: any = await $fetch("/api/pre_order", {
      method: "POST",
      body: {
        token: "eSu3Ufu94u4yKvS2USj9qjCZM02jefL8W3UWLvCCvxxrW7F4rrC0BV7FmSf4KpcNNyc2EPWiCRyVhadSVLN3vjAyuxzV8rexGy5a",
      }
    });

    if (response?.success === true) {
      products.value = response?.products;
    } else {
      Notification.open("Failed to fetch orders, please try again later");
    }
  } catch (error: any) {
    Notification.open("Failed to fetch orders, please try again later");
  }
});
</script>