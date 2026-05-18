<template>
  <div>
    <div class="font-black text-[34px] lg:text-[50px] leading-none">
      <h1>Place Pre-Order</h1>
    </div>

    <div class="pt-[50px] w-full flex flex-col gap-y-[30px]">
      <BaseInput
        v-model:value="CheckOut.form_data.email_address"
        :underlying_element="BaseInputLogic.UnderlyingElement.Input"
        placeholder="Email address (@my.bdsc.school.nz)"
        mode="email"
      />

      <BaseButton
        :variant="BaseButtonLogic.Variant.YellowBackgroundBordered"
        text="Confirm Pre-Order"
        v-on:click.prevent="CheckOut.check_out()"
      />
    </div>

    <!-- Border -->
    <div class="border-t-black border-t-[1px] border-opacity-30 my-[30px]" />

    <!-- Legal -->
    <div class="opacity-50 font-bold text-center text-[12px] lg:text-[16px]">
      <p>By clicking "Confirm Pre-Order", you acknowledge & adhere to the
        <nuxt-link
          to="/terms-and-conditions"
          @click.prevent="CheckOut.close()"
        >Terms of Conditions</nuxt-link>
        &
        <nuxt-link
          to="/privacy-policy"
          @click.prevent="CheckOut.close()"
        >Privacy Policy</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as CheckOut from "~/src/models/CheckOut";
import BaseButton from "~/components/base/Button.vue";
import BaseInput from "~/components/base/Input";
import * as BaseButtonLogic from "~/src/BaseButton";
import * as BaseInputLogic from "~/src/BaseInput";
</script>