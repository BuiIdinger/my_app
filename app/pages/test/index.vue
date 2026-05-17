<template>
<!--  <div class="fixed z-[998] top-0 bottom-0 left-0 right-0 bg-black opacity-30" />-->

  <div class="flex flex-col gap-[20px] m-[400px]">
    <button
      @click.prevent="ProductPreviewModel.open"
      class="bg-green-500 py-[20px]">product preview open</button>

    <button
      @click.prevent="Cart.open"
      class="bg-green-500 py-[20px]">cart open with filler data</button>

    <button class="bg-green-500 py-[20px]">goon</button>

    <button class="bg-green-500 py-[20px]">send test packet</button>
  </div>

  <div class="flex mx-auto p-[200px]">
    <ProductPreview />
  </div>
</template>

<script setup lang="ts">
import ProductPreview from "~/components/models/product_preview/ProductPreview.vue";
import * as ProductPreviewModel from "~/src/models/ProductPreview";
import * as Cart from "~/src/Cart";
</script>