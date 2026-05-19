<template>
  <!--

    Hero

  -->
  <div class="flex flex-col justify-center gap-y-[10px] lg:gap-y-[20px] items-center py-[9rem] lg:py-[20rem]
    max-w-[2012px] mx-auto px-[1rem] text-center relative">

    <BaseStarCluster class="h-auto rotate-[-21deg] absolute z-[10] animate-float
      max-w-[190px] bottom-[20rem] left-[5rem]
      max-[1500px]:max-w-[190px] max-[1500px]:bottom-[9rem] max-[1500px]:left-[5rem]
      max-[1050px]:max-w-[80px] max-[1050px]:bottom-[2.4rem] max-[1050px]:left-[3rem]
    "/>

    <BaseStarCluster class="h-auto rotate-[-21deg] absolute z-[10] animate-float
      max-w-[190px] top-[24rem] right-[5rem]
      max-[1500px]:max-w-[190px] max-[1500px]:top-[9rem] max-[1500px]:right-[5rem]
      max-[1050px]:max-w-[80px] max-[1050px]:top-[2.4rem] max-[1050px]:right-[7rem]
    "/>

    <!-- Title -->
    <div class="text-[50px] lg:text-[97px] font-black">
      <h1>Shop the collection</h1>
    </div>

    <!-- Sub-title -->
    <div class="text-[18px] lg:text-[30px] font-black max-w-[736px] leading-snug">
      <h2>
        Shop from our wide collections of unique handcrafted plushies.
        Every single one of our

<!--        <span class="bg-[#ffbfd3] px-[8px] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mx-1 inline-block">-->
          plushies is made entirely out of socks
<!--        </span>-->

        to give them that extra cozy, quirky feel.
      </h2>
    </div>
  </div>


  <!--

    Collections

  -->
  <SpikeGlyph class="rotate-0" />
  <div class="w-full bg-[#ffbfd3]">
    <div class="w-full relative max-w-[1786px] mx-auto z-[10] px-[1rem] py-[8rem] lg:py-[12rem]">
      <!-- Crown -->
      <crown_glyph class="hidden lg:block absolute left-[-17rem] top-[6rem] w-[8rem] lg:w-[10rem] h-auto rotate-[-9deg]" />

      <!-- Actual content -->
      <div class="
        bg-[#fff0fb] rounded-[28px]
        border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        lg:border-[8px] lg:border-black lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-[20px] lg:p-[30px]
      ">

        <!-- Top Level -->
        <div class="flex w-full">
          <TrafficLight class="mb-[20px] lg:mb-[30px]" />

<!--          <div class="flex justify-center flex-wrap gap-[14px] lg:gap-[24px]">-->
<!--            <selection title="Lorem ipsum" />-->
<!--            <selection title="Lorem ipsum" />-->
<!--            <selection title="Lorem ipsum" />-->
<!--            <selection title="Lorem ipsum" />-->
<!--          </div>-->
        </div>

<!--        <div class="-->
<!--          flex justify-between-->
<!--          m-[0px] py-[2rem]-->
<!--          lg:m-[60px] lg:py-[2rem]-->
<!--        ">-->
<!--          <hero_arrow class="max-w-[559px] h-auto" />-->
<!--          <hero_arrow class="max-w-[559px] h-auto" />-->
<!--        </div>-->

        <div class="flex flex-wrap justify-center gap-[20px] lg:gap-[65px]">
          <ProductCard
            v-for="product in get(Products.products)"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
  <SpikeGlyph class="rotate-[180deg]" />

</template>

<script setup lang="ts">
import BaseStarCluster from "~/components/base/StarCluster.vue";
import crown_glyph from "~/components/svg_glyphs/crown.vue";
import TrafficLight from "~/components/base/TrafficLight.vue";
import ProductCard from "~/components/shop_all/card.vue";
import SpikeGlyph from "~/components/svg_glyphs/Spike";
import * as ProductPreview from "~/src/models/ProductPreview";
import * as Products from "~/src/Product";
import { get } from "@vueuse/core";
</script>