<template>
  <button
    @click.prevent="ProductPreview.open(props.product)"
    class="flex flex-col flex-grow flex-shrink basis-[400px]
            gap-y-[24px]
            transition-all duration-300 ease-out
            hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]
            cursor-pointer max-w-[340px]"
  >
    <div
      class="bg-[#fff757] px-[10px] py-[14px] rounded-[31px]
             border-black border-[4px] h-full min-h-[340px]
             shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
             lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
             flex justify-center items-center"
    >
      <nuxt-img
        format="webp"
        :alt="props.product.name + ' headshot image (preview)'"
        :src="props.product.headshot_image_url"
        class="h-full w-full object-cover"
      />
    </div>

    <div
      class="bg-[#fff757] py-[8px] rounded-[21px] border-black border-[4px]
               shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[24px]
               lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:text-[27px]
               truncate font-black flex justify-center items-center"
    >
      <p>{{ props.product.name }}</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import * as ProductPreview from "~/src/models/ProductPreview";
import type { Product } from "~/src/Product";

interface Props {
  product: Product,
}

const props = withDefaults(defineProps<Props>(), {
});
</script>