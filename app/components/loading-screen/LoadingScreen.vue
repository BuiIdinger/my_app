<template>
  <Transition name="fade" mode="in-out">
    <div
      v-if="!get(LoadingScreen.is_visible)"
      class="w-[100vw] h-[100vh] bg-[#fff0fb] flex justify-center items-center
            fixed z-[1000] top-0 left-0 right-0 bottom-0 select-none cursor-default"
    >
      <div class="fixed inset-0 z-[2] w-full h-full bg-[url('/grid.svg')] bg-repeat bg-[length:48px_48px] opacity-5" />
      <svg class="w-[100px] h-auto absolute z-[3] animate-spin" id="uuid-d398061e-2172-41b8-9788-09ae31cb7523" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 689.52 689.52"><g id="uuid-8ea95584-3bc7-49b2-90b7-6266d6c565b7"><circle cx="344.76" cy="344.76" r="338" style="fill:#fff757; stroke:#000; stroke-miterlimit:10; stroke-width:13.52px;"/><ellipse cx="265.76" cy="257.76" rx="31" ry="77"/><ellipse cx="422.76" cy="257.76" rx="31" ry="77"/><path d="M544.9222,459.919c-11.6565,18.3888-32.3657,46.2299-65.823,71.0592-20.504,15.216-66.4411,49.3067-132.644,49.9279-68.3306.6412-116.1294-34.7696-136.5903-49.9279-33.3814-24.7295-54.088-52.5228-65.823-71.0592" style="fill:none; stroke:#000; stroke-miterlimit:10; stroke-width:27.0415px;"/></g></svg>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useScrollLock, get, set, watchOnce } from "@vueuse/core";
import * as LoadingScreen from "~/src/LoadingScreen";
import { onMounted } from "vue";

const is_scroll_locked = useScrollLock(typeof document !== "undefined" ? document.body : null);

onMounted(() => {
  set(is_scroll_locked, true);
});

watchOnce(LoadingScreen.is_visible, () => {
  set(is_scroll_locked, false);
});
</script>

<style scoped lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(97%);
  opacity: 0;
}
</style>