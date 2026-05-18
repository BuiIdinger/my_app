<template>
  <div class="relative z-[6] overflow-hidden">
    <SectionBlend class="mx-auto" />
    <SectionBlend class="mx-auto rotate-180" />

    <!--
    <div class="bg-[#ffbfd3] py-[200px] px-[1.5rem] relative overflow-hidden">
      <div class="max-w-[106rem] mx-auto relative z-[3] flex flex-col items-center gap-y-[20px]">
          <star_cluster class="hidden lg:absolute w-[182px] h-[162px] left-[-260px] top-[300px]" />
          <star_cluster class="hidden lg:absolute w-[182px] h-[162px] right-[-260px] rotate-[80deg]" />
          <all_them_here class="hidden lg:absolute left-[-210px] bottom-[-200px] w-[330px]" />

        <h1 class="bg-[#fff0fb] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                     px-[20px] max-w-[530px] w-full rounded-[26px] text-[49px] font-bold">
          Collections
        </h1>

        <div class="bg-[#fff0fb] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                      rounded-[26px] p-[1.5rem] max-w-fit">
          <BaseTrafficLight />

          <div class="flex flex-wrap justify-center gap-[40px] my-[60px]">
            <Collection title="Something" image_src="/plushie-one.png" />
            <Collection title="Something" image_src="/plushie-one.png" />
            <Collection title="Something" image_src="/plushie-one.png" />
            <Collection title="Something" image_src="/plushie-one.png" />
          </div>
        </div>
      </div>
    </div> -->

<!--    -->
  </div>
</template>

<script setup lang="ts">
import BaseTrafficLight from "~/components/base/TrafficLight.vue";
import Collection from "./Collection.vue";
import SectionBlend from "./SectionBlend.vue";
</script>