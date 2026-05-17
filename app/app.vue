<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
/*
class=""
@touchstart=""
@touchend="" */
input, textarea, button, select, a {
  -webkit-tap-highlight-color: transparent;
}

body {
  overflow-x: hidden;
}

.onboarding-enter-active,
.onboarding-leave-active {
  transition: all 0.3s ease-out;
}

.onboarding-enter-from {
  opacity: 0;
  transform: translateX(30px); /* Slide in from right */
}

.onboarding-leave-to {
  opacity: 0;
  transform: translateX(-30px); /* Slide out to left */
}
</style>