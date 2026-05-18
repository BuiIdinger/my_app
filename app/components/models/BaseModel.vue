<template>
  <Teleport to="body">
    <BackdropOverlay
      :claim_scroll_lock_ownership="props.claim_scroll_lock_ownership"
      v-if="props.visible"
    />

    <Transition
      name="model"
      mode="out-in"
    >
      <div
        v-if="props.visible"
        class="fixed inset-0 z-[999] flex justify-center items-center"
      >
        <div
          ref="model"
          :style="dynamic_style_class"
          class="m-[30px] rounded-[33px] p-[20px] lg:p-[40px] border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                 w-full overflow-y-auto overflow-x-hidden"
        >
          <!-- Traffic Light -->
          <BaseTrafficLight
            @click="close_model()"
            class="w-fit mb-[20px] lg:mb-[40px]"
          />

          <!-- Content -->
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import BackdropOverlay from "~/components/models/BackdropOverlay.vue";
import BaseTrafficLight from "~/components/base/TrafficLight.vue";
import * as VueUse from "@vueuse/core";
import { useTemplateRef } from "vue";

const visible = defineModel<boolean>("visible", { default: false });

interface Props {
  visible: boolean,
  persistence?: boolean,
  claim_scroll_lock_ownership?: boolean,
  background_color?: string,
  max_height?: string,
  max_width?: string,
  width?: string,
  height?: string,
}

const props = withDefaults(defineProps<Props>(), {
  persistence: false,
  claim_scroll_lock_ownership: false,
  max_height: "calc(100dvh - 60px)",
  max_width: "fit-content",
  background_color: "#fff0fb",
  width: "fit-content",
  height: "fit-content",
});

const dynamic_style_class = computed(() => ({
  maxHeight: props.max_height,
  maxWidth: props.max_width,
  width: props.width,
  height: props.height,
  backgroundColor: props.background_color,
}));

const close_model = (): void => {
  VueUse.set(visible, false);
}

VueUse.onClickOutside(useTemplateRef("model"), event => {
  if (!props.persistence) {
    close_model();
  }
});
</script>

<style scoped lang="css">
.model-enter-active,
.model-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.model-enter-from,
.model-leave-to {
  transform: scale(90%);
  opacity: 0;
}
</style>