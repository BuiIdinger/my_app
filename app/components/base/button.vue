<template>
  <component
    :is="props.link_href ? NuxtLink : 'button'"
    :class="conditional_class"
    v-bind="props.link_href ? { to: props.link_href } : {}"
    class="font-bold uppercase text-[14.5px] rounded-[12px] px-[20px] py-[15px] flex items-center
           justify-center text-center hover:bg-opacity-85 w-full select-none cursor-pointer"
    >
    {{ props.text }}
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent, withDefaults, defineProps } from "vue";

interface Props {
  /// Text to display on button
  text: string,
  /// Omit background (transparent), and only display the text
  omit_background?: boolean,
  /// Link button to where
  link_href?: string,
}

const NuxtLink = resolveComponent("NuxtLink");

const props = withDefaults(defineProps<Props>(), {
  omit_background: false,
});

const conditional_class = computed(() => {
  return props.omit_background ?
    "bg-transparent text-[#0693e3] active:opacity-50" :
    "bg-[#0693e3] border-[#8ed1fc]/50 border-b-[4px] text-white active:border-transparent active:translate-y-[4px]";
});
</script>