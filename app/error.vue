<template>
  <NuxtLayout name="default">
    <div class="flex flex-col gap-y-[40px] justify-center items-center min-h-[100vh] leading-none">
      <div class="flex flex-col gap-y-[12px] text-center">
        <!-- Error Code -->
        <div
          v-if="props.error && props.error.status"
          class="font-black text-[160px]"
        >
          <h1>{{ props.error.status }}</h1>
        </div>

        <!-- Message -->
        <div
          class="font-semibold text-[30px] opacity-75 max-w-[200px] flex justify-center mx-auto"
          v-if="props.error && props.error.message"
        >
          <p>{{ props.error.message }}</p>
        </div>
      </div>

      <!-- Navigation Controls -->
      <BaseButton
        v-on:click.prevent="go_back_home()"
        text="← Go Back Home"
        :variant="Button.Variant.WhiteBackgroundBordered"
        class="relative z-10"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import BaseButton from "~/components/base/Button.vue";
import * as Button from "~/src/BaseButton";

const props = defineProps({
  error: Object,
});

const go_back_home = () => clearError({ redirect: "/" })
</script>