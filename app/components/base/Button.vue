<template>
  <component
    v-if="props.variant === BaseButton.Variant.WhiteBackgroundBordered"
    v-on:click.prevent="emit('click', $event)"
    :is="component_type"
    :to="props.href"
    class="border-[3.2px] bg-white border-black rounded-full flex justify-center
           items-center px-[30px] lg:px-[38px] py-[14px] lg:py-[16px] font-black
           text-[14px] lg:text-[16px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
           cursor-pointer select-none hover:translate-y-[4px] active:scale-[.95] hover:opacity-50 duration-300"
  >
    {{ text }}
  </component>

  <component
    v-else-if="props.variant === BaseButton.Variant.YellowBackgroundBordered"
    v-on:click.prevent="emit('click', $event)"
    :is="component_type"
    :to="props.href"
    class="bg-[#fff757] border-[3.2px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex text-center justify-center rounded-[22px]
          px-[40px] py-[10px] border-black font-black duration-300 text-[20px] lg:text-[30px]
          hover:opacity-50 hover:translate-y-[4px] active:scale-[.95] cursor-pointer w-full select-none"
    >
      {{ text }}
  </component>
</template>

<script setup lang="ts">
import * as BaseButton from "~/src/BaseButton";
import { computed } from "vue";

interface Props {
  text: string,
  variant: BaseButton.Variant,
  href?: string | null,
}

const props = withDefaults(defineProps<Props>(), {
  href: null,
});

const emit = defineEmits<{
  click: [event: MouseEvent],
}>();

const component_type = computed((): any => {
  return props.href ? resolveComponent("NuxtLink") : "button";
});
</script>