<template>
  <div class="m-[10px]">
    <button class="
    bg-[#0693e3] border-b-[4px] border-[#8ed1fc]/50 font-bold uppercase text-[15px]
      rounded-[12px] px-[20px] py-[14px] text-white active:scale-[.98] active:opacity-95
      active:text-opacity-35 duration-300 w-full select-none"
    >
      qweqwe
      {{ props.text }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string,
  omit_background: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  omit_background: false,
});
</script>