<template>
  <Teleport to="body">
    <div class="fixed top-0 bottom-0 left-0 right-0 z-[995] bg-black opacity-45" />
    <div class="fixed inset-0 z-[996] w-full h-full bg-[url('/grid.svg')] bg-repeat bg-[length:48px_48px] opacity-5 pointer-events-none" />
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import * as BaseModel from "~/src/models/BaseModel";
import * as VueUse from "@vueuse/core";

const is_scroll_locked = VueUse.useScrollLock(typeof document !== "undefined" ? document.body : null);

interface Props {
  claim_scroll_lock_ownership?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  claim_scroll_lock_ownership: false,
});

onMounted(() => {
  if (!BaseModel.has_owner()) {
    VueUse.set(is_scroll_locked, true);
  }

  if (props.claim_scroll_lock_ownership) {
    BaseModel.claim_ownership();
  }
});

onUnmounted(() => {
  /// Only unlock the scroll lock after all models, have been
  /// closed, as we might have additional models open
  if (props.claim_scroll_lock_ownership) {
    VueUse.set(is_scroll_locked, false);
    BaseModel.release_ownership();
  }

  /// If there's no claimed owner, unlock the scroll
  if (!BaseModel.has_owner()) {
    VueUse.set(is_scroll_locked, false);
  }
});
</script>