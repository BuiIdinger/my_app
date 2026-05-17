<template>
  <Transition name="header" mode="out-in">
    <header
      v-if="VueUse.get(Header.status)"
      class="fixed top-0 left-0 right-0 flex gap-x-[40px] justify-between items-center p-[1.5rem] z-50"
    >
      <BaseTrafficLight />

      <nav class="hidden lg:flex border-[3.2px] border-black bg-white rounded-full justify-between h-[44px]
            items-center px-[20px] font-bold text-[16px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[924px]
            w-full hover:scale-[.97] duration-300">
        <div class="flex gap-x-[26px]">
          <!-- Brandmark href to index -->
          <nuxt-link
            to="/"
            class="h-[25px] w-[25px] rounded-full bg-green-500 p-[10px]"
          />

          <nuxt-link
            to="/shop-all"
            class="cursor-pointer"
          >
            <p>Shop All</p>
          </nuxt-link>


          <div class="cursor-not-allowed opacity-25">
            <p>Sustainability / Mission</p>
          </div>
        </div>

        <div class="flex gap-x-[26px]">
          <div class="cursor-not-allowed opacity-25">
            <p>How It's Made</p>
          </div>

          <button
            @click.prevent="ContactUs.open()"
            class="cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </nav>

      <div class="flex gap-x-[20px]">
        <CartButton />

        <div
          @click.prevent="HamburgerMenu.open"
          class="flex lg:hidden flex-shrink-0 justify-center items-center border-[3.2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                bg-white min-w-[44px] h-[44px] cursor-pointer hover:scale-[.95] duration-300 overflow-hidden"
        >
          <HamburgerMenuGlyph class="m-[2px] w-[20px] h-[20px] flex-shrink-0 whitespace-nowrap" />
        </div>
      </div>


    </header>
  </Transition>
</template>

<script setup lang="ts">
import BaseTrafficLight from "~/components/base/TrafficLight.vue";
import HamburgerMenuGlyph from "~/components/svg_glyphs/hamburger.vue";
import CartButton from "~/components/cart/Button.vue";
import * as HamburgerMenu from "~/src/models/Hamburger";
import * as ContactUs from "~/src/models/ContactUs";
import * as Header from "~/src/Header";
import * as VueUse from "@vueuse/core";
</script>

<style scoped lang="css">
.header-enter-active,
.header-leave-active {
  transition: opacity 0.3s ease, transform 0.7s ease;
}

.header-enter-from,
.header-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>