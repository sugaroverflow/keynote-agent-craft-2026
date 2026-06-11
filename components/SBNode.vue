<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  meta: {
    type: String,
    default: "",
  },
  tone: {
    type: String,
    default: "teal",
  },
  dim: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="sb-node" :class="[`tone-${tone}`, { dim }]">
    <span class="sb-node-title">{{ title }}</span>
    <span v-if="meta" class="sb-node-meta">{{ meta }}</span>
  </div>
</template>
