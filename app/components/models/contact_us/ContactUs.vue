<template>
  <BaseModel v-model:visible="ContactUs.status.value">
    <Transition
      name="content"
      mode="out-in"
    >
      <div class="w-[840px] max-w-full">
        <!-- Title -->
        <div class="font-black text-[50px]">
          <h1>Contact Us</h1>
        </div>

        <!-- Inputs -->
        <div class="my-[40px] flex flex-col gap-y-[24px]">
          <BaseInput
            v-model:value="ContactUs.form_data.email"
            placeholder="Email Address (@my.bdsc.school.nz)"
            mode="email"
          />

          <BaseInput
            v-model:value="ContactUs.form_data.message_content"
            placeholder="Message Content"
            mode="text"
            :underlying_element="BaseInputLogic.UnderlyingElement.TextArea"
          />
        </div>

        <BaseButton
          :variant="BaseButtonLogic.Variant.YellowBackgroundBordered"
          text="Submit"
          v-on:click.prevent="ContactUs.submit()"
        />
      </div>
    </Transition>
  </BaseModel>
</template>

<script setup lang="ts">
import BaseInput from "~/components/base/Input.vue";
import * as BaseInputLogic from "~/src/BaseInput";
import BaseButton from "~/components/base/Button.vue";
import * as BaseButtonLogic from "~/src/BaseButton";
import BaseModel from "~/components/models/BaseModel.vue";
import * as ContactUs from "~/src/models/ContactUs";
import * as VueUse from "@vueuse/core";
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