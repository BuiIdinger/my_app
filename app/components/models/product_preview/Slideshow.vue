<template>
  <div
    v-if="ProductPreview.active_product.value"
    class="flex flex-col gap-y-[24px] relative"
  >
    <!--
      :)
    -->
    <BaseSmiley class="absolute top-[-15px] right-[-15px] lg:top-[-25px] lg:right-[-25px] w-[72px] h-[72px] lg:w-[100px] lg:h-[100px] rotate-[20deg]" />

    <!-- Slideshow of product -->
    <nuxt-img
      :src="ProductPreview.active_product.value.slideshow_images_url.at(0)"
      class="border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
             px-[40px] py-[20px] border-black font-black text-[20px] h-auto
             flex-shrink-0 max-h-[700px] w-full object-contain"
    />

    <!-- Slideshow controls -->

<!--    <div class="h-[78px] flex items-center justify-end">-->
<!--      <div class="flex justify-end gap-x-[20px]">-->
<!--        <SlideshowButton arrow_alignment="left" />-->
<!--        <SlideshowButton arrow_alignment="right" />-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import BaseSmiley from "~/components/base/Smiley.vue";
import SlideshowButton from "./SlideshowButtons.vue"
import * as ProductPreview from "~/src/models/ProductPreview";
import * as Cart from "~/src/Cart";
</script>