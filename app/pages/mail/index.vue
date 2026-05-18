<script setup lang="ts">
import * as Use from "@vueuse/core";
import * as Cart from "~/src/Cart";
import * as Format from "~/src/Format";
</script>
<template>
  <div class="m-[200px] bg-[#fff0fb] rounded-[100px] border-[4px] border-black
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full border-b-0 relative z-[999] overflow-hidden
  ">

    <div class="w-full bg-[#fff0fb]">
      <div class="p-[74px] font-bold flex items-center h-full text-[120px]">
        <h1>Fluffings</h1>
      </div>
    </div>
<!--    <div class="mb-[40px]">-->
<!--      <div class="text-[50px] font-black">-->
<!--        <h1>Your Pre-Order has been confirmed</h1>-->
<!--      </div>-->
<!--      <div class="text-[32px] font-medium">-->
<!--        <p>Thanks for shopping at Flufflings.</p>-->
<!--      </div>-->
<!--    </div>-->



    <div class="px-[74px] pb-[74px]">
      <div class="text-[50px] font-black">
        <h1>Your order</h1>
      </div>

      <!-- Order -->
      <div class="flex-1 pr-[10px] flex flex-col gap-y-[20px] my-[60px]">
        <div
          v-for="(product, index) in Use.get(Cart.contents)"
          :key="index"
          class="bg-[#fff757] p-[20px] rounded-[20px] border-[4px] border-black
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-shrink-0"
        >
          <div class="flex items-center gap-[20px]">
            <nuxt-img
              :src="product.headshot_image_url"
              width="87"
              height="87"
              format="webp"
              class="rounded-full w-[60px] h-[60px] lg:w-[87px] lg:h-[87px] border-[4px] border-black flex-shrink-0"
            />
            <div class="font-black text-[20px] lg:text-[26px]">
              <p>{{ product.name }}</p>
            </div>
          </div>

          <div class="flex justify-between items-center mt-4">
            <div class="font-black text-[20px] lg:text-[26px]">
              <p>{{ Format.price(product.price) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-[50px] font-black">
        <h1>Questions & Answers</h1>
      </div>

      <div class="mt-[44px] bg-[#fff757] p-[30px] rounded-[22px] border-[4px] border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-[10px]">
        <div class="font-bold text-[34px]">
          <h1>How to pick up?</h1>
        </div>
        <div class="font-semibold text-[20px]">
          <p>Pick ups are available on market day one (27<sup>th</sup> May), come find our booth during the market day and ask to pickup an order.</p>
        </div>
      </div>


      <div class="mt-[44px] bg-[#fff757] p-[30px] rounded-[22px] border-[4px] border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-[10px]">
        <div class="font-bold text-[34px]">
          <h1>How to pick up?</h1>
        </div>
        <div class="font-semibold text-[20px]">
          <p>Pick ups are available on market day one (27<sup>th</sup> May), come find our booth during the market day and ask to pickup an order.</p>
        </div>
      </div>

      <div class="mt-[44px] bg-[#fff757] p-[30px] rounded-[22px] border-[4px] border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-[10px]">
        <div class="font-bold text-[34px]">
          <h1>Payment</h1>
        </div>
        <div class="font-semibold text-[20px]">
          <p>We accept cash & card for payment. Payment is completed on pickup on market day.</p>
        </div>
      </div>

      <div class="mt-[44px] bg-[#fff757] p-[30px] rounded-[22px] border-[4px] border-black
          shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-[10px]">
        <div class="font-bold text-[34px]">
          <h1>Returns & Refunds</h1>
        </div>
        <div class="font-semibold text-[20px]">
          <p>All sales are final once you leave the market booth. If there is an issue with your order, please bring it back to our booth before the market closes so we can sort it out for you!</p>
        </div>
      </div>

      <div class="mt-[44px] bg-[#fff757] p-[30px] rounded-[22px] border-[4px] border-black
         shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-[10px]">
        <div class="font-bold text-[34px]">
          <h1>Need help?</h1>
        </div>
        <div class="font-semibold text-[20px]">
          <p>Shoot us a DM on Instagram @flufflings_bdsc.</p>
        </div>
      </div>
    </div>
  </div>
</template>