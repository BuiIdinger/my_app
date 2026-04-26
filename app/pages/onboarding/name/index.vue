<template>
  <div class="w-dvw h-dvh flex justify-center items-center">

    <div class="flex flex-col gap-y-[30px] w-full max-w-[400px] px-[20px]">

      <!--
      <div class="flex flex-col gap-y-[24px] mb-[20px]">
        <div class="justify-center opacity-70 text-[44px] leading-tight text-wrap max-w-[200px] font-bold">
          <p>Lets get to know you</p>
        </div>
      </div> -->

      <div class="text-center font-bold text-[20px]">
        <h1>A couple details about you</h1>
      </div>

      <div class="flex flex-col gap-y-[10px]">
        <base_input placeholder="First name" />
        <base_input placeholder="Last name" />
      </div>

      <div class="flex flex-col gap-y-[10px]">
        <base_button
          text="Continue"
          link_href="/onboarding/email_and_password"
        />
        <base_button omit_background text="I already have an account" />
      </div>

      <!--
      <div class="opacity-35 text-[14px] text-center absolute bottom-[25px]">
        <p>By signing in to { &m_app->app_name }, you agree to our <b>Terms</b> and <b>Privacy Policy</b>.</p>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import base_button from "~/components/base/button.vue";
import base_input from "~/components/base/input.vue";
</script>