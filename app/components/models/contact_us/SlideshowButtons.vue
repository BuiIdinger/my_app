<template>
  <button
    class="bg-[#fff757] border-[4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      rounded-[22px] px-[40px] py-[10px] border-black font-black text-[30px]">
    <ArrowGlyph
      :class="rotation_style"
      class="w-[50px] h-auto"
    />
  </button>
</template>

<script setup lang="ts">
import ArrowGlyph from "~/components/svg_glyphs/arrow.vue";
import { computed } from "vue";

const props = defineProps<{
  arrow_alignment: "left" | "right",
}>();

const rotation_style = computed(() => {
  return props.arrow_alignment === "left" ?
    "rotate-[0deg]" : "rotate-[180deg]"
});
</script>