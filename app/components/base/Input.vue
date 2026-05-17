<template>
  <div>
    <input
      @input="emit('update:input_value', ($event.target as HTMLInputElement).value)"
      :value="input_value"
      :inputmode="props.input_mode"
      :placeholder="props.placeholder"
      :style="has_error"
      class="px-[14px] lg:px-[28px] py-[10px] appearance-none border-[4px]
              rounded-[20px] font-black text-[18px] lg:text-[24px] bg-transparent placeholder-black
              placeholder-opacity-45 w-full leading-normal
              overflow-x-scroll whitespace-nowrap scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    />

    <p
      v-if="props.error_message"
      class="text-[#db2e3a] mt-[18px] mx-[4px] font-black"
    >{{ props.error_message }}</p>
  </div>
</template>

<script setup lang="ts">
type InputMode = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";

interface Props {
  input_value: string,
  input_mode: InputMode,
  placeholder: string,
  error_message?: string | null,
}

const props = withDefaults(defineProps<Props>(), {
  input_value: "",
  input_mode: "text",
  placeholder: "",
  error_message: null,
});

const emit = defineEmits<{
  (e: "update:input_value", value: string): void,
}>();

const has_error = computed(() => ({
  boxShadow: props.error_message === null ?  "8px 8px 0px 0px rgba(0,0,0,1)" : "8px 8px 0px 0px rgba(219,46,58,1)",
  borderColor: props.error_message === null ? "#000000" : "#db2e3a",
}));
</script>