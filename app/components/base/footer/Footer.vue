<template>
  <div class="mx-[14px] lg:mx-[40px] pt-[200px] lg:pt-[300px] relative z-[10]">
    <button class="flex items-center border-[3.2px] bg-white border-black rounded-full
        cursor-pointer hover:translate-y-[4px] duration-300 mx-auto py-[14px] px-[40px]
        font-bold text-[16px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:opacity-60">
      Lorem ipsum
    </button>

    <!-- Footer -->
    <footer class="max-w-[1024px] mx-auto bg-[#fff757] border-[4px] border-black
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-t-[100px] mt-[30px] border-b-0
      px-[40px] lg:px-[60px] pt-[60px] pb-[20px] relative">

      <!-- Hearts -->
      <div class="hidden min-[1300px]:block absolute right-[-180px] top-[-250px] pr-[50px] hover:scale-[.85] duration-300">
        <BaseHearts class="w-[300px] h-[300px]" />
      </div>

      <!-- Smiley face -->
      <div class="hidden lg:block lg:absolute right-[35px] lg:top-[35px] bottom-[100px] hover:scale-[.85] duration-300">
        <BaseSmiley class="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rotate-[15deg] animate-float" />
      </div>

      <!-- Nav Links -->
      <nav class="flex flex-col leading-none text-[30px] lg:text-[38px] font-bold
        gap-[17px]">
        <nuxt-link to="/" class="hover:scale-[.90] hover:opacity-60 duration-300 w-fit">
          Home
        </nuxt-link>
        <nuxt-link to="/shop-all" class="hover:scale-[.90] hover:opacity-60 duration-300 w-fit">
          Shop All
        </nuxt-link>

        <div class="cursor-not-allowed opacity-25 hover:scale-[.90] duration-300 w-fit">
          Sustainability / Mission
        </div>
        <div class="cursor-not-allowed opacity-25 hover:scale-[.90] duration-300 w-fit">
          Contact Us
        </div>
        <div class="cursor-not-allowed opacity-25 hover:scale-[.90] duration-300 w-fit">
          How It's Made
        </div>
        <div class="cursor-not-allowed opacity-25 hover:scale-[.90] duration-300 w-fit">
          About Us
        </div>

        <nuxt-link to="/terms-and-conditions" class="hover:scale-[.90] hover:opacity-60 duration-300 w-fit">
          Terms of Conditions
        </nuxt-link>

        <nuxt-link to="/privacy-policy" class="hover:scale-[.90] hover:opacity-60 duration-300 w-fit">
          Privacy Policy
        </nuxt-link>


      </nav>

      <!-- Border seperator -->
      <div class="border-t-[2px] opacity-25 border-black my-[30px]" />

      <!-- Bottom section -->
      <div class="flex justify-between opacity-20 font-bold">
        <p>Copyright © Fluffings. All rights reserved. </p>
        <p>SS → | TBC</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseSmiley from "~/components/base/Smiley.vue";
import BaseHearts from "~/components/base/Hearts.vue";
</script>