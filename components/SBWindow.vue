<script setup>
defineProps({
  title: {
    type: String,
    default: "window",
  },
  tone: {
    type: String,
    default: "teal",
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="sb-window" :class="[`tone-${tone}`, { compact }]">
    <div class="sb-window-chrome">
      <div class="sb-window-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span class="sb-window-title">{{ title }}</span>
    </div>
    <div class="sb-window-body">
      <slot />
    </div>
  </section>
</template>
