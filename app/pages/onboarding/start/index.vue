<template>
  <div class="w-full min-h-dvh flex flex-col p-[20px] relative">

    <div class="flex-grow flex flex-col justify-center items-center gap-y-[32px]">
      <div>
        <nuxt-img src="/bird.png" class="w-[140px] h-[140px] object-contain" />
      </div>

      <div class="font-semibold opacity-50 text-center">
        <p>Always free, only on duolingo.</p>
      </div>
    </div>

    <div class="w-full space-y-2">
      <base_button
        text="Continue with email"
        link_href="/onboarding/name"
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
</script>