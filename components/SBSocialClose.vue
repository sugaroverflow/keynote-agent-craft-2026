<script setup>
const withBase = (src) => {
  if (!src.startsWith("/")) return src;
  return `${import.meta.env.BASE_URL}${src.slice(1)}`;
};
</script>

<template>
  <div class="social-close">
    <div class="social-left">
      <img :src="withBase('/placeholders/sparkle-qr.png')" alt="Sparkle Bureaucracy QR placeholder" />
      <div>
        <span class="social-url">Sparkle Bureaucracy</span>
        <p>An experiment lab for agent systems.</p>
      </div>
    </div>
    <div class="social-right">
      <img :src="withBase('/assets/screenshots/headshot-khalidfatima.png')" alt="Fatima Sarah Khalid" />
      <div class="social-copy">
        <h3>Thank you so much.</h3>
        <p>@sugaroverflow on all the things</p>
        <div class="social-icons" aria-label="social links">
          <span>in</span>
          <span>x</span>
          <span>bsky</span>
          <span>m</span>
        </div>
      </div>
    </div>
  </div>
</template>
