<template>
  <div class="flex flex-col justify-between gap-y-[24px]">
    <!-- Quick description about the product -->
    <div class="border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
                p-[40px] border-black font-black text-[28px]"
    >
      <p>{{ description }}</p>
    </div>

    <!-- Legal information for product -->
    <ul class="border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
              p-[40px] border-black font-black text-[25px]"
    >
      <li v-for="legal_detail in legal_details">{{ legal_detail }}</li>
    </ul>

    <!-- Add to cart button -->
    <button class="bg-[#fff757] border-[4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
              px-[40px] py-[10px] border-black font-black text-[30px]"
    >
      Add To Cart | {{ props.price }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  description: string,
  legal_details: string[],
  price: number,
}>();
</script>