<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogSiteName: "Flufflings",
  author: "Shayden Seymour",
  creator: "Shayden Seymour",
  publisher: "The Buildinger Company",
  applicationName: "Flufflings",
});

useHead({
  titleTemplate: "%s | Flufflings",
  title: "The Unknown",

  htmlAttrs: {
    lang: "en",
  },
});
</script>