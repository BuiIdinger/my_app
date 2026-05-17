<template>
  <LoadingScreen v-if="LoadingScreenCode.is_visible.value" />

  <div v-else>
    <div class="fixed inset-0 z-[5] w-full h-full bg-[url('/grid.svg')] bg-repeat bg-[length:48px_48px] opacity-5 pointer-events-none" />

    <BaseHeader />
    <Notification />
    <BaseHamburgerMenu />
    <ModelsProductPreview />
    <ModelsContactUs />
    <ModelsCheckOut />
    <Cart />
    <div class="min-h-[100vh] min-w-[100vw]">
      <slot />
    </div>
    <BaseFooter />
    </div>
</template>

<script setup lang="ts">
import Cart from "~/components/cart/Cart.vue";
import BaseHeader from "~/components/base/header/Header.vue";
import BaseFooter from "~/components/base/footer/Footer.vue";
import LoadingScreen from "~/components/loading-screen/LoadingScreen.vue";
import BaseHamburgerMenu from "~/components/base/header/Hamburger.vue";
import ModelsProductPreview from "~/components/models/product_preview/ProductPreview.vue";
import ModelsContactUs from "~/components/models/contact_us/ContactUs.vue";
import ModelsCheckOut from "~/components/models/check_out/CheckOut.vue";
import Notification from "~/components/Notification.vue";
import * as LoadingScreenCode from "~/src/LoadingScreen";
</script>
