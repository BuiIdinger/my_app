<template>
  <div class="flex flex-col gap-y-[24px] relative">
    <!--
      :)
    -->
    <BaseSmiley class="absolute top-[-25px] right-[-25px] w-[100px] h-[100px] rotate-[45deg]" />

    <!-- Slideshow of product -->
    <nuxt-img
      src="/plushie-two.png"
      format="webp"
      width="full"
      height="full"
      class="border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
             px-[40px] py-[20px] border-black font-black text-[20px] h-auto
            flex-shrink-0"
    />

    <!-- Slideshow controls -->
    <div class="flex justify-end gap-x-[20px]">
      <SlideshowButton arrow_alignment="left" />
      <SlideshowButton arrow_alignment="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSmiley from "~/components/base/Smiley.vue";
import SlideshowButton from "./SlideshowButtons.vue"
</script>