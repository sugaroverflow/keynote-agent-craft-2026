<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  replacement: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    default: "",
  },
  ratio: {
    type: String,
    default: "16 / 9",
  },
  tone: {
    type: String,
    default: "pink",
  },
  fit: {
    type: String,
    default: "cover",
  },
});

const resolvedSrc = computed(() => {
  if (!props.src || !props.src.startsWith("/")) return props.src;
  return `${import.meta.env.BASE_URL}${props.src.slice(1)}`;
});
</script>

<template>
  <figure
    class="sb-placeholder"
    :class="[`tone-${tone}`]"
    :style="{ '--sb-ratio': ratio }"
  >
    <img
      v-if="src"
      :src="resolvedSrc"
      :alt="label"
      :style="{ objectFit: fit }"
    />
    <div class="sb-placeholder-noise" aria-hidden="true"></div>
    <figcaption>
      <span class="sb-placeholder-label">{{ label }}</span>
      <span class="sb-placeholder-replace">{{ replacement }}</span>
    </figcaption>
  </figure>
</template>
