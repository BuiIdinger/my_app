<template>
  <div class="bg-[#fff757] py-[14px] rounded-[20px] border-black font-bold border-[4px]
    text-[18px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full px-[20px]
    lg:text-[25px] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:w-fit lg:px-[65px]
  ">
    <p>{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
}

const props = withDefaults(defineProps<Props>(), {
});
</script>