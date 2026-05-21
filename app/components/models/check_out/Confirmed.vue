<template>
  <div>
    <div class="font-black text-[34px] lg:text-[50px] leading-none">
      <h1>Pre-order Confirmed</h1>
    </div>

    <div class="w-full">
      <div class="font-bold text-[24px] text-center py-[80px] w-[75%] mx-auto">
        <p>Your pre-order has been confirmed, please check your email in 1-5 minutes for more additional on payment, and pick up.</p>
      </div>

      <button
        @click.prevent="CheckOut.close(); CheckOut.set_page(CheckOut.Page.Details)"
        class="w-full bg-[#fff757] border-[4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[22px]
               px-[40px] py-[10px] border-black font-black duration-300 text-[20px] lg:text-[30px]"
      >
        Okay
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as CheckOut from "~/src/models/CheckOut";
</script>
