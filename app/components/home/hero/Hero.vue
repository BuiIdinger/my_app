<template>
  <div class="relative mt-[7rem] pb-[14rem] lg:mt-[16.5rem] mx-[1.5rem]
    mb-[-20rem]
    max-[600px]:mb-[-24rem]
    max-[1000px]:mb-[-30rem]
    max-[1550px]:mb-[-40rem]
    min-[2800px]:mb-[-30rem]
    min-[3800px]:mb-[-35rem]
    min-[4500px]:mb-[-40rem]
    min-[5100px]:mb-[-48rem]
    min-[6400px]:mb-[-55rem]
    min-[7000px]:mb-[-60rem]
    min-[8000px]:mb-[-70rem]
    min-[9000px]:mb-[-78rem]
    min-[10000px]:mb-[-86rem]
  ">
    <div class="max-w-[106rem] max-[1550px]:items-center max-[1550px]:text-center mx-auto flex flex-col gap-y-[1.5rem]
      lg:gap-y-[2.5rem] relative">

      <BaseStarCluster class="absolute h-auto z-[10] rotate-[70deg] animate-float
        w-[100px] left-[p-9rem] top-[6rem]
        max-[1024px]:hidden
        max-[2000px]:w-[164px] max-[2000px]:left-[2rem] max-[2000px]:top-[-10.5rem]
        min-[2000px]:w-[182px] min-[2000px]:left-[-9rem] min-[2000px]:top-[-12rem]
      "/>

      <BaseStarCluster class="absolute h-auto z-[10] rotate-[70deg] animate-float
        w-[100px] left-[p-9rem] top-[6rem]
        max-[447px]:w-[80px] max-[447px]:right-[0.4rem] max-[447px]:top-[29rem]
        max-[500px]:w-[100px] max-[500px]:right-[0.4rem] max-[500px]:top-[26rem]
        max-[650px]:w-[100px] max-[650px]:right-[1rem] max-[650px]:top-[23rem]
        max-[1024px]:w-[142px] max-[1024px]:right-[2.8rem] max-[1024px]:top-[19rem]
        max-[1550px]:w-[200px] max-[1550px]:right-[9rem] max-[1550px]:top-[35rem]
        max-[1730px]:w-[164px] max-[1730px]:right-[0.4rem] max-[1730px]:top-[1rem]
        min-[1730px]:w-[182px] min-[1730px]:right-[2rem] min-[1730px]:top-[1rem]
      "/>

      <BaseSmiley class="absolute h-auto z-[10] rotate-[40deg] animate-float
        w-[77px] top-[9rem] right-[2rem]
        max-[1024px]:hidden
        max-[1551px]:w-[144px] max-[1551px]:right-[3rem] max-[1551px]:top-[-4rem]
        min-[1551px]:w-[164px] min-[1551px]:left-[40rem] min-[1551px]:top-[-8rem]
      "/>

      <!-- Title -->
      <h1 class="relative z-[10] text-[3.55rem] lg:text-[6rem] font-black hyphens-auto leading-[0.9] tracking-tight max-w-[50rem]">
        Handcrafted Plushies, One Plushie at a Time.
      </h1>

      <!-- Description -->
      <p class="relative z-[10] font-bold text-[1.15rem] lg:text-[1.8rem] max-w-[55rem]">
        Meet the world’s softest upcycled companions. Our artisanal sock plushies are stitched with personality, extra squish, and a whole lot of heart—perfect for gifting or keeping all to yourself.
      </p>

      <!-- Buttons -->
      <div class="relative z-[10] flex flex-wrap gap-[1rem]">
        <BaseButton
          text="Shop the Collection"
          link_href="/shop-all"
        />
      </div>

      <!-- Plushies hero image -->
      <nuxt-img
        src="/products/combined.png"
        alt="Plushies!"
        format="webp"
        width="870px"
        height="auto"
        class="min-[1550px]:absolute min-[1730px]:right-0 right-[-10rem] bottom-[-18rem] z-[6] touch-none select-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/base/Button.vue";
import BaseStarCluster from "~/components/base/StarCluster.vue";
import BaseSmiley from "~/components/base/Smiley.vue";
import Arrow from "./Arrow.vue";
</script>