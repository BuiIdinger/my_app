<template>
  <div class="w-dvw h-dvh relative">

    <div
    class="flex flex-col gap-y-[32px] justify-center items-center
      w-full h-full absolute"
    >
      <div>
        <h1>Your name</h1>
      </div>
      <div>
        <nuxt-img src="/bird.png" class="w-[140px] h-[140px] object-contain" />
      </div>

      <div class="font-semibold opacity-50">
        <p>Always free, only on duolingo.</p>
      </div>

    </div>

    <div class="absolute bottom-[25px] left-0 right-0">
      <base_button
      @click.prevent="on_click"
      text="Continue with email"
      />
      <base_button
      text="I already have an account"
      omit_background
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import base_button from "~/components/base/button.vue";
import brandmark_variant_two from "~/components/brandmarks/variant_two.vue";

const on_click = (): void => {
  console.warn("clicked");
}
</script>