<script setup>
import { computed } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
});

const resolvedSrc = computed(() => {
  if (!props.src.startsWith("/")) return props.src;
  return `${import.meta.env.BASE_URL}${props.src.slice(1)}`;
});
</script>

<template>
  <img :src="resolvedSrc" :alt="alt" />
</template>
