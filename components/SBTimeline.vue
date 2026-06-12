<template>
  <div class="timeline-wrap">
    <div class="timeline-spine" aria-hidden="true"></div>
    <div class="you-are-here">
      <div class="pin-icon" aria-hidden="true"></div>
      <span>you are here</span>
    </div>
    <div class="timeline-centered">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>Prompts</h3>
        <p>What do I say so the model does useful work?</p>
      </div>
      <div class="timeline-item active">
        <div class="timeline-dot"></div>
        <h3>Tools</h3>
        <p>What can the model reach, change, or call?</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>Workflows</h3>
        <p>What happens next when one step finishes?</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>Factories</h3>
        <p>How do we track small units of work?</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <h3>Fleets</h3>
        <p>What happens when many loops depend on each other?</p>
      </div>
    </div>
  </div>
</template>
