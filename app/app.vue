<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage
      class="touch-none select-none w-dvw h-dvh"
      @touchstart=""
      @touchend=""
    />
  </NuxtLayout>
</template>


<script setup lang="ts">
import * as GeoLocation from "~/composibles/GeoLocation";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  GeoLocation.init();
});

onUnmounted(() => {
  GeoLocation.exit();
});
</script>

<style lang="css">
input, textarea, button, select, a {
  -webkit-tap-highlight-color: transparent;
}
</style>