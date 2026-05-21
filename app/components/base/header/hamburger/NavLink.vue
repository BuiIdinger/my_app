<template>
  <component
    :is="underlying_component"
    :to="props.href.to"
    :external="props.href.external"
    class="hover:scale-[.99] hover:opacity-60 duration-300 w-fit"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Link {
  to: string,
  external?: boolean,
}

interface Props {
  href?: Link,
}

const props = withDefaults(defineProps<Props>(), {
  href: () => ({
    to: "#",
    external: false,
  }),
});

const underlying_component = computed(() => {
  return props.href ? resolveComponent("NuxtLink") : "button";
});
</script>