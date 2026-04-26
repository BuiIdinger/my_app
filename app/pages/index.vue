<template>
  <div class="w-dvw h-dvh relative">
    <base_button
      text="On boarding process"
      link_href="/onboarding/start"
    />

    <base_input
      placeholder="Hi"
    />
  </div>

  <div v-if="GeoLocation.geo_location.value">
    <div>
      <p>longitude: {{ GeoLocation.geo_location.value.coords.longitude }}</p>
      <p>latitude: {{ GeoLocation.geo_location.value.coords.latitude }}</p>
      <p>speed: {{ GeoLocation.geo_location.value.coords.speed }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import base_button from "~/components/base/button.vue";
import base_input from "~/components/base/input.vue";
import * as GeoLocation from "~/composibles/GeoLocation"
</script>