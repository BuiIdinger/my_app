<template>
  <Transition name="hamburger" mode="out-in">
    <div
      v-if="HamburgerModel.status.value === true"
      class="fixed z-[9999] top-0 bottom-0 left-0 right-0 bg-[#fff0fb] w-full h-full p-[30px]"
    >
      <div class="pointer-events-none fixed inset-0 z-[5] w-full h-full bg-[url('/grid.svg')] bg-repeat bg-[length:48px_48px] opacity-5" />

      <BaseSmiley class="absolute right-[25px] bottom-[25px] hover:scale-[.85] duration-300 w-[100px]
                          h-[100px] md:w-[140px] md:h-[140px] rotate-[15deg] animate-float z-[10]" />
      <CrossGlpyh
        @click.prevent="HamburgerModel.close"
        class="fixed flex right-[24px] top-[24px] w-[24px] h-auto fill-black cursor-pointer z-[10]"
      />

      <!-- Nav Links -->
      <div
        class="flex flex-col leading-none text-[30px] lg:text-[38px] md:text-[58px] font-bold
               gap-[34px]"
      >
        <nuxt-link
          @click.prevent="HamburgerModel.close"
          to="/"
          class="hover:scale-[.99] hover:opacity-60 duration-300 w-fit"
        >
          Home
        </nuxt-link>
        <nuxt-link
          @click.prevent="HamburgerModel.close"
          to="/shop-all"
          class="hover:scale-[.99] hover:opacity-60 duration-300 w-fit"
        >
          Shop All
        </nuxt-link>

<!--        <div class="hover:scale-[.99] hover:opacity-60 duration-300 w-fit opacity-25">-->
<!--          Sustainability / Mission-->
<!--        </div>-->
<!--        <div class="hover:scale-[.99] hover:opacity-60 duration-300 w-fit opacity-25">-->
<!--          Contact Us-->
<!--        </div>-->
<!--        <div class="hover:scale-[.99] hover:opacity-60 duration-300 w-fit opacity-25">-->
<!--          How It’s Made-->
<!--        </div>-->
<!--        <div class="hover:scale-[.99] hover:opacity-60 duration-300 w-fit opacity-25">-->
<!--          About Us-->
<!--        </div>-->
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import BaseSmiley from "~/components/base/Smiley.vue";
import CrossGlpyh from "~/components/svg_glyphs/cross.vue";
import * as HamburgerModel from "~/src/models/Hamburger";
</script>

<style scoped lang="css">
.hamburger-enter-active,
.hamburger-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-enter-from,
.hamburger-leave-to {
  transform: scale(90%);
  opacity: 0;
}

.animate-float {
  animation: float-subtle 7s ease-in-out infinite;
}

@keyframes float-subtle {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(10px, -15px) rotate(17deg);
  }
  66% {
    transform: translate(-8px, 8px) rotate(14deg);
  }
}
</style>