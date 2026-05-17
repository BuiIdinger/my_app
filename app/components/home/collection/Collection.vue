<template>
  <div class="flex flex-col items-center gap-y-[20px] hover:opacity-80 duration-150
    cursor-pointer active:scale-[80%] hover:scale-[105%]
  ">
    <div class="bg-[#fff757] border-black border-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      rounded-full w-[100px] h-[100px] lg:w-[256px] lg:h-[256px] flex items-center justify-center [clip-path:inset(-100%_0px_0px_0px_round_0px_0px_128px_128px)]
    ">
      <nuxt-img :src="props.image_src" class="flex-shrink-0" />
    </div>

    <div class="bg-[#fff757] py-[4px] px-[14px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[4px]
      text-[18px] lg:text-[30px] font-bold text-center
      lg:px-[40px]

">
      <p>{{ props.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  image_src: string,
}>();
</script>