<template>
  <BaseModel v-model:visible="ProductPreview.status.value">
    <div
      v-if="ProductPreview.active_product.value"
      class="flex flex-col md:flex-row gap-[12px] lg:gap-[24px]"
    >

      <!-- Product slideshow -->
      <Slideshow class="flex lg:hidden w-full" />

      <!-- Product information -->
      <Details
        :product="ProductPreview.active_product.value"
        class="flex lg:max-w-[50%]"
      />

      <!-- Product slideshow -->
      <Slideshow class="hidden lg:max-w-[50%] w-full lg:block" />
    </div>
  </BaseModel>
</template>

<script setup lang="ts">
import BaseModel from "~/components/models/BaseModel.vue";
import Slideshow from "./Slideshow.vue";
import Details from "./Details.vue";
import * as ProductPreview from "~/src/models/ProductPreview";
</script>
