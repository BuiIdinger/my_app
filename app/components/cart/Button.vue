<template>
  <button
    v-on:click.prevent="Cart.open()"
    class="flex border-[3.2px] bg-white border-black rounded-full justify-between h-[44px] cursor-pointer
           hover:translate-y-[4px] duration-300 flex-shrink-0
           items-center px-[20px] font-bold text-[16px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
    <CartGlyph class="w-[30px] h-auto fill-black" />
  </button>
</template>

<script setup lang="ts">
import CartGlyph from "~/components/svg_glyphs/Cart.vue";
import * as Cart from "~/src/Cart";
</script>