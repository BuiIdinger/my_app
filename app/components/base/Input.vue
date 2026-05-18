<template>
  <div>
    <component
      v-on:input="value = ($event.target as HTMLInputElement | HTMLTextAreaElement).value"
      :is="underlying_element"
      :value="value"
      :placeholder="props.placeholder"
      :style="has_error"
      class="px-[14px] lg:px-[28px] py-[10px] appearance-none border-[4px]
              rounded-[20px] font-black text-[18px] lg:text-[24px] bg-transparent placeholder-black
              placeholder-opacity-45 w-full leading-normal
              scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    />

    <p
      v-if="props.error_message"
      class="text-[#db2e3a] mt-[18px] mx-[4px] font-black"
    >{{ props.error_message }}</p>
  </div>
</template>

<script setup lang="ts">
import * as BaseInput from "~/src/BaseInput";

type InputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

interface Props {
  mode: InputMode,
  placeholder: string | null,
  error_message?: string | null,
  underlying_element?: BaseInput.UnderlyingElement,
}

const props = withDefaults(defineProps<Props>(), {
  mode: "text",
  placeholder: null,
  error_message: null,
  underlying_element: BaseInput.UnderlyingElement.Input,
});

const value = defineModel<string | null>("value", {
  default: null,
  required: true,
});

const underlying_element = computed((): string => {
  return props.underlying_element === BaseInput.UnderlyingElement.Input ? "input" : "textarea";
})

const has_error = computed(() => ({
  boxShadow: props.error_message === null ?  "8px 8px 0px 0px rgba(0,0,0,1)" : "8px 8px 0px 0px rgba(219,46,58,1)",
  borderColor: props.error_message === null ? "#000000" : "#db2e3a",
}));
</script>