<template>
  <BaseModel
    v-model:visible="HamburgerModel.status.value"
    :variant="BaseModelLogic.Variant.AlignedFixedRightTopDownMaxWidth"
  >
    <BaseGrid />

    <!--
      :)
    -->
    <BaseThrobber class="absolute right-[25px] bottom-[25px] hover:scale-[.85] duration-300 w-[100px]
                       h-[100px] md:w-[140px] md:h-[140px] rotate-[15deg] animate-float z-[10]" />

    <!-- Close Button -->
    <CrossGlyph
      v-on:click.prevent="HamburgerModel.close()"
      class="fixed flex right-[24px] top-[24px] w-[24px] h-auto fill-black cursor-pointer z-[10]"
    />

    <!-- Nav Links -->
    <div
      class="mt-[60px] ml-[30px] flex flex-col leading-none text-[30px] lg:text-[38px] md:text-[58px] font-bold
             gap-[34px]"
    >

      <NavLink
        v-on:click.prevent="HamburgerModel.close()"
        :href="{
          to: '/',
          external: false
        }"
      >
        Home
      </NavLink>

      <NavLink
        v-on:click.prevent="HamburgerModel.close()"
        :href="{
          to: '/shop-all',
          external: false
        }"
      >
        Shop All
      </NavLink>

      <NavLink v-on:click.prevent="HamburgerModel.close(); ContactUsModel.open()">
        Contact Us
      </NavLink>
    </div>
  </BaseModel>
</template>

<script setup lang="ts">
import BaseThrobber from "~/components/base/Throbber.vue";
import CrossGlyph from "~/components/svg_glyphs/cross.vue";
import BaseModel from "~/components/models/BaseModel.vue";
import BaseGrid from "~/components/base/Grid.vue";
import NavLink from "./NavLink.vue";
import * as HamburgerModel from "~/src/models/Hamburger";
import * as BaseModelLogic from "~/src/BaseModel";
import * as ContactUsModel from "~/src/models/ContactUs";
</script>