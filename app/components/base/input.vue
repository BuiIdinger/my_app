<template>
  <input
    :placeholder="props.placeholder"
    class="font-bold text-[16px] rounded-[12px] px-[20px] py-[14px] focus:outline-none
            focus:ring-0 w-full cursor-pointer text-black active:border-[#13abf2]
            focus:border-[#13abf2]
            border-[#e3e3e3] border-[3px] bg-[#f2f2f2] appearance-none"
  />
  <!--
  <component
  :is="props.link_href ? NuxtLink : 'button'"
  :class="conditional_class"
  v-bind="props.link_href ? { to: props.link_href } : {}"

    {{ props.text }}
  </component> -->
</template>

<script setup lang="ts">
import { computed, withDefaults, defineProps } from "vue";

interface Props {
  /// Text to display as a placeholder
  placeholder: string,
}

const props = withDefaults(defineProps<Props>(), {});
</script>