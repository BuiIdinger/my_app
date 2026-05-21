<template>
  <Hero />
  <Collections />
</template>

<script setup lang="ts">
import Collections from "~/components/home/collection/Collections.vue";
import Hero from "~/components/home/hero/Hero.vue";

useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "Home page of Flufflings.",
  ogDescription: "Home page of Flufflings.",
});
</script>