<template>
  <component
  :is="isLink ? 'NuxtLink' : 'button'"
  ref="buttonRef"
  v-bind="componentProps"
  class="border-[3.2px] bg-white border-black rounded-full flex justify-center
           items-center px-[30px] lg:px-[38px] py-[14px] lg:py-[16px] font-black
           text-[14px] lg:text-[16px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
           cursor-pointer select-none"
  >
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { computed, useTemplateRef, watchEffect, useAttrs } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import { gsap } from 'gsap'

/**
 * 1. Component Config & Types
 */
defineOptions({
  inheritAttrs: false // We handle attrs manually via componentProps
})

interface Props {
  text: string
  linkHref?: string
}

const props = defineProps<Props>()
const attrs = useAttrs()

/**
 * 2. Component Logic
 */
const isLink = computed(() => !!props.linkHref)

const componentProps = computed(() => ({
  ...(isLink.value ? { to: props.linkHref } : { type: 'button' }),
  ...attrs
}))

const buttonRef = useTemplateRef<HTMLElement | any>('buttonRef')

const {
  elementX,
  elementY,
  elementWidth,
  elementHeight,
  isOutside
} = useMouseInElement(buttonRef)

watchEffect(() => {
  const el = buttonRef.value?.$el ?? buttonRef.value
  if (!el) return

  if (isOutside.value) {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)"
    })
  } else {
    // Follow mouse
    const centerX = elementWidth.value / 2
    const centerY = elementHeight.value / 2

    const moveX = (elementX.value - centerX) * 0.35
    const moveY = (elementY.value - centerY) * 0.35

    gsap.to(el, {
      x: moveX,
      y: moveY,
      duration: 0.4,
      ease: "power2.out"
    })
  }
})
</script>