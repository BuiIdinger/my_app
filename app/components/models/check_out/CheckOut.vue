<template>
  <BaseModel
    :visible="VueUse.get(CheckOut.status)"
    :claim_scroll_lock_ownership="true"
    @close="CheckOut.close()"
    :persistence="should_stay_persistence"
    max_width="800px"
    width="800px"
    height="520px"
  >
    <Transition
      name="content"
      mode="out-in"
    >
      <Details :key="1" v-if="VueUse.get(CheckOut.page) === CheckOut.Page.Details" />
      <Confirmed :key="2" v-else-if="VueUse.get(CheckOut.page) === CheckOut.Page.Confirmed" />
      <Loading :key="3" v-else />
    </Transition>
  </BaseModel>
</template>

<script setup lang="ts">
import BaseModel from "~/components/models/BaseModel.vue";
import Details from "./Details.vue";
import Confirmed from "./Confirmed.vue";
import Loading from "./Loading.vue";
import * as CheckOut from "~/src/models/CheckOut";
import * as VueUse from "@vueuse/core";

const should_stay_persistence = computed((): boolean => {
  return VueUse.get(CheckOut.page) === CheckOut.Page.Loading;
});
</script>

<style scoped lang="css">
.content-enter-active,
.content-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
  transform: scale(80%);
}
</style>