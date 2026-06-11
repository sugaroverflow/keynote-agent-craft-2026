<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  tone: {
    type: String,
    default: "pink",
  },
  rotate: {
    type: String,
    default: "-2deg",
  },
  small: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span
    class="sb-stamp"
    :class="[`tone-${tone}`, { small }]"
    :style="{ transform: `rotate(${rotate})` }"
  >
    {{ label }}
  </span>
</template>
