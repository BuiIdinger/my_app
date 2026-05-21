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
        v-if="props.visible && props.variant === BaseModel.Variant.Centered"
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
            @click="close()"
            class="w-fit mb-[20px] lg:mb-[40px]"
          />

          <!-- Content -->
          <slot />
        </div>
      </div>
    </Transition>

    <Transition
      name="cart"
      mode="out-in"
    >
      <div
        v-if="props.visible && props.variant === BaseModel.Variant.AlignedFixedRightTopDownMaxWidth"
        class="fixed inset-0 z-[999] flex justify-center items-center bg-black/20"
      >
        <div
          ref="model"
          class="cart-panel rounded-none lg:rounded-l-[33px] p-[20px] lg:p-[40px]
                 lg:border-y-[4px] lg:border-l-[4px] border-black
                 overflow-y-auto overflow-x-hidden h-full top-0 bottom-0 bg-white absolute
                 w-full left-0 right-0 lg:w-[700px] lg:left-auto lg:right-0"
        >
          <BaseTrafficLight
            v-on:click.prevent="close()"
            class="w-fit mb-[20px] lg:mb-[40px] left-[20px] top-[20px] lg:left-[40px] lg:top-[40px] absolute
                   z-[10] cursor-pointer"
          />

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
import * as BaseModel from "~/src/BaseModel";
import { useTemplateRef } from "vue";

const visible = defineModel<boolean>("visible", { default: false });

interface Props {
  visible: boolean,
  variant?: BaseModel.Variant,
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
  variant: BaseModel.Variant.Centered,
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

const close = (): void => {
  VueUse.set(visible, false);
}

VueUse.onClickOutside(useTemplateRef("model"), event => {
  if (!props.persistence) {
    close();
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


.cart-enter-active,
.cart-leave-active {
  transition: opacity 0.3s ease;
}

.cart-enter-from,
.cart-leave-to {
  opacity: 0;
}

.cart-enter-active .cart-panel,
.cart-leave-active .cart-panel {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cart-enter-from .cart-panel,
.cart-leave-to .cart-panel {
  transform: translateX(100%);
}
</style>