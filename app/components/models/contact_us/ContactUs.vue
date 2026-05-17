<template>
  <BackdropOverlay v-if="get(ContactUs.status)" />

  <Transition name="hamburger" mode="out-in">
    <div
      v-if="get(ContactUs.status)"
      class="fixed top-0 bottom-0 left-0 right-0 z-[999] mx-auto flex justify-center items-center"
    >
      <div
        ref="model"
        class="bg-[#fff0fb] rounded-[33px] p-[40px] border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <TrafficLight
          @click="ContactUs.close()"
          class="mb-[40px] w-fit"
        />

        <div>
          <div class="font-black text-[50px]">
            <h1>Contact Us</h1>
          </div>

          <div class="py-[20px]">

            <input
              class="px-[28px] py-[20px] appearance-none border-[8px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full rounded-[26px]
                font-black text-[29px] border-black"
              placeholder="Name"
            />
          </div>

        </div>

        <div class="flex gap-x-[24px] w-[1172px]">

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import TrafficLight from "~/components/base/TrafficLight.vue";
import BackdropOverlay from "~/components/models/BackdropOverlay.vue";
import Slideshow from "./Slideshow.vue";
import Details from "./Details.vue";
import * as ContactUs from "~/src/models/ContactUs";
import { useTemplateRef } from "vue";
import { onClickOutside, get } from "@vueuse/core";

const target = useTemplateRef("model");

onClickOutside(target, event => {
  ContactUs.close();
});
</script>

<style scoped lang="css">
.hamburger-enter-active,
.hamburger-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-enter-from,
.hamburger-leave-to {
  transform: scale(90%);
  opacity: 0;
}
</style>