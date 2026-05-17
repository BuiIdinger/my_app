<template>
  <Teleport to="body">
    <Transition
      name="notification"
      mode="out-in"
    >
      <div
        v-if="VueUse.get(Notification.status)"
        @click.prevent="Notification.close()"
        class="fixed top-[25px] left-0 right-0 z-[999] mx-auto flex justify-center items-center cursor-pointer"
      >
        <div
          ref="model"
          class="bg-[#fff0fb] rounded-full border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  font-black text-[17px] p-[14px] px-[44px] lg:text-[20px] lg:p-[24px] lg:px-[60px]"
        >
          <p>{{ VueUse.get(Notification.content) }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import * as VueUse from "@vueuse/core";
import * as Notification from "~/src/Notification";
import * as Header from "~/src/Header";
import { watch } from "vue";

watch(Notification.status, (new_value, old_value) => {
  if (new_value) {
    Header.hide();
  } else {
    Header.show();
  }
});
</script>

<style scoped lang="css">
.notification-enter-active,
.notification-leave-active {
  transition: opacity 0.3s ease, transform 0.7s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>