<template>
  <div>
    <div class="font-black text-[34px] lg:text-[50px] leading-none">
      <h1>Pre-Order</h1>
    </div>

    <div class="pt-[50px] w-full flex flex-col gap-y-[30px]">
      <BaseInput
        v-model:input_value="CheckOut.email_address.value"
        placeholder="Email address (@my.bdsc.school.nz)"
        input_mode="email"
        :error_message="CheckOut.error_message.value"
      />

      <button
        @click.prevent="CheckOut.check_out()"
        class="w-full bg-[#fff757] border-[4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
                   px-[40px] py-[10px] border-black font-black duration-300 text-[20px] lg:text-[30px]"
      >
        Confirm Pre-Order
      </button>
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
import BaseInput from "~/components/base/Input";
</script>