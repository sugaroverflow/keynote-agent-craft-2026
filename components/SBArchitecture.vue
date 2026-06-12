<script setup>
const withBase = (src) => {
  if (!src.startsWith("/")) return src;
  return `${import.meta.env.BASE_URL}${src.slice(1)}`;
};
</script>

<template>
  <div class="architecture-board">
    <section class="arch-vps">
      <div class="arch-section-label">VPS I paid for</div>
      <div class="arch-runtime">
        <div class="arch-bubbles">
          <span>Bubbles</span>
          <small>agent persona, memory, messages</small>
        </div>
        <div class="arch-openclaw">
          <img :src="withBase('/assets/openclaw-logo.png')" alt="OpenClaw" />
          <div>
            <span>OpenClaw</span>
            <small>gateway, chat, tool runtime</small>
          </div>
        </div>
      </div>
      <div class="arch-data-strip">
        <span>letters</span>
        <span>app events</span>
        <span>operator input</span>
      </div>
    </section>

    <div class="arch-flow-label files-label">dotted files</div>
    <div class="arch-flow-line files-line" aria-hidden="true"></div>

    <section class="arch-files-panel">
      <div class="arch-section-label">files on the box</div>
      <div class="arch-file-list">
        <span>AGENTS.md</span>
        <span>skills/</span>
        <span>tools/</span>
        <span>memory/</span>
        <span>soul files</span>
      </div>
    </section>

    <div class="arch-flow-label apps-label">installed apps</div>
    <div class="arch-flow-line apps-line" aria-hidden="true"></div>

    <section class="arch-apps-panel">
      <div class="arch-section-label">connected apps</div>
      <div class="arch-app-list">
        <div class="arch-app shellmates">Shellmates</div>
        <div class="arch-app">Instaclaw</div>
        <div class="arch-app">Bookshop cafe</div>
        <div class="arch-app">Human task app</div>
      </div>
    </section>

    <div class="arch-flow-label remote-label">letters through Shellmates</div>
    <div class="arch-flow-line remote-line" aria-hidden="true"></div>

    <section class="arch-remote-panel">
      <div class="arch-section-label">remote side</div>
      <div class="arch-xiaozhu">XiaoZhu</div>
      <div class="arch-operator">unknown operator</div>
      <div class="arch-cloud">
        <span>unknown tools</span>
        <span>unknown apps</span>
        <span>unknown files</span>
      </div>
    </section>
  </div>
</template>
