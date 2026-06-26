<script setup>
const withBase = (src) => {
  if (!src.startsWith("/")) return src;
  return `${import.meta.env.BASE_URL}${src.slice(1)}`;
};
</script>

<template>
  <div class="social-close">
    <section class="social-thanks">
      <h2>THANK YOU!</h2>
      <img class="social-avatar" :src="withBase('/assets/screenshots/headshot-khalidfatima.png')" alt="Fatima Sarah Khalid" />
      <div class="social-copy">
        <p class="social-handle">@sugaroverflow</p>
        <p>on all the socials</p>
        <div class="social-icons" aria-label="social links">
          <span>in</span>
          <span>x</span>
          <span>bsky</span>
          <span>m</span>
        </div>
      </div>
      <p class="agent-made-caption">my agent made these slides.</p>
    </section>

    <section class="social-lab">
      <p>Sparkle Bureaucracy is a network of people using AI to explore optimistic organisational and service futures.</p>
      <a class="social-url" href="https://www.sparklebureaucracy.org/">sparklebureaucracy.org</a>
      <div class="social-qr-frame">
        <img :src="withBase('/assets/sparkle-bureaucracy-qr.svg')" alt="QR code for sparklebureaucracy.org" />
      </div>
    </section>
  </div>
</template>
