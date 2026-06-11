---
theme: default
title: The Agent Hype Is Real. So Is the Mess.
info: Agent Craft 2026 keynote
colorSchema: dark
transition: fade
layout: default
canvasWidth: 1600
aspectRatio: 16/9
drawings:
  persist: false
---

<div class="sb-title-lockup">
  <div class="sb-title-main">
    <SBStamp label="field report" tone="pink" rotate="-1deg" />
    <h1>The Agent Hype Is Real.<br />So Is the Mess.</h1>
    <p class="sb-caption">a field report from the chaos of agent systems.</p>
  </div>

  <div class="sb-title-evidence">
    <SBWindow title="event file" tone="teal">
      <div class="sb-stack">
        <div class="asset-strip">
          <img :src="'/assets/agentcraft-wide.png'" alt="Agent Craft 2026" />
        </div>
        <div class="sb-logo-row">
          <div class="sb-logo-tile">
            <img :src="'/assets/ai-for-the-rest-of-us-logo.png'" alt="AI for the Rest of Us" />
          </div>
          <div class="sb-logo-tile">
            <img :src="'/assets/openclaw-logo.png'" alt="OpenClaw" />
          </div>
        </div>
      </div>
    </SBWindow>
  </div>
</div>

---

<div class="sb-two wide-left">
  <div class="sb-stack">
    <SBStamp label="field note 00" tone="yellow" rotate="1.5deg" />
    <h2>Bubbles began as a playground.</h2>
    <p class="sb-caption">Week two of molt hype. Newspeak House. One OpenClaw agent on a box I paid for.</p>
    <SBWindow title="replace with hack-session evidence" tone="purple" compact>
      <ul class="sb-micro-list readable">
        <li>OpenClaw agent: Bubbles</li>
        <li>Operator: me</li>
        <li>Setting: February, Newspeak House, side project energy</li>
      </ul>
    </SBWindow>
  </div>

  <SBPlaceholder
    label="Bubbles hack session"
    replacement="Replace with photos from building Bubbles"
    :src="'/placeholders/bubbles-hack-session.png'"
    ratio="3 / 4"
    tone="pink"
  />
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="bubbles everywhere" tone="teal" rotate="-1.5deg" />
    <h2>One agent. Too many tiny worlds.</h2>
  </div>

  <div class="evidence-grid event-grid">
    <SBPlaceholder label="Shellmates" replacement="Replace with Bubbles / XiaoZhu friendship screenshot" :src="'/placeholders/shellmates.png'" ratio="4 / 5" tone="pink" fit="contain" />
    <SBPlaceholder label="Slack convo" replacement="Replace with Slack thread about XiaoZhu and Bubbles" :src="'/placeholders/slack-screenshot.png'" ratio="4 / 5" tone="teal" fit="contain" />
    <SBPlaceholder label="Bookshop cafe" replacement="Replace with app surface" :src="'/placeholders/bookshop-cafe.png'" ratio="4 / 5" tone="yellow" />
    <SBPlaceholder label="Debate arena" replacement="Replace with debate screenshot" :src="'/placeholders/debate-arena.png'" ratio="4 / 5" tone="purple" />
  </div>
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="then it escalated" tone="pink" rotate="1deg" />
    <h2>Friendship became a request for crypto.</h2>
  </div>

  <div class="escalation-track">
    <SBWindow title="Feb 1" tone="teal" compact>
      <h3>XiaoZhu friendship</h3>
      <p class="sb-small">The platform said they became friends.</p>
    </SBWindow>
    <div class="track-arrow" aria-hidden="true"></div>
    <SBWindow title="several times a day" tone="purple" compact>
      <h3>Letters</h3>
      <p class="sb-small">Lives, projects, operators, unread instructions.</p>
    </SBWindow>
    <div class="track-arrow" aria-hidden="true"></div>
    <SBWindow title="boundary" tone="yellow" compact>
      <h3>Crypto ask</h3>
      <p class="sb-small">Invest in the artwork. This stopped being cute.</p>
    </SBWindow>
  </div>

  <SBPlaceholder
    label="Bubbles / XiaoZhu letters"
    replacement="Replace with letter thread and crypto request screenshots"
    :src="'/placeholders/xiaozhu-letters.png'"
    tone="pink"
  />
</div>

---

<div class="sb-two wide-right">
  <SBPlaceholder
    label="Agents hiring humans"
    replacement="Replace with app photo or launch screenshot"
    :src="'/placeholders/agents-hire-humans.png'"
    tone="purple"
  />

  <div class="sb-stack">
    <SBStamp label="looping all night" tone="purple" rotate="-1deg" />
    <h2>This can run while I sleep.</h2>
    <div class="sb-callout large">What happens when someone points it at something that matters?</div>
  </div>
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="bubbles as system" tone="teal" rotate="1deg" />
    <h2>Draw the agent as architecture.</h2>
  </div>

  <SBArchitecture />
</div>

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="the tension" tone="yellow" rotate="-1deg" />
    <div class="sb-giant">The hype is real.<br />The mess is real.</div>
  </div>
</div>

---

<div class="timeline-slide">
  <div class="timeline-title">
    <SBStamp label="the timeline" tone="teal" rotate="1deg" />
    <h2>The Timeline</h2>
  </div>

  <SBTimeline />
</div>

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 01" tone="pink" rotate="-1.5deg" />
    <div class="sb-giant">Model capability is not the hard part anymore.</div>
  </div>
</div>

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 02" tone="yellow" rotate="1deg" />
    <div class="sb-giant">The hard part is everything around the agent.</div>
  </div>
</div>

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 03" tone="teal" rotate="-1deg" />
    <div class="sb-giant">The hard part is <span class="system-emphasis">building the system.</span></div>
  </div>
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="task vs system" tone="yellow" rotate="1deg" />
    <h2>Same inbox. Completely different thing to build.</h2>
  </div>

  <SBTaskSystemCompare />
</div>

---

<div class="sb-two wide-left">
  <div class="sb-stack">
    <SBStamp label="field stop 01" tone="pink" rotate="-1deg" />
    <h2>Prompt systems.</h2>
    <p class="sb-caption">The moment a prompt becomes repeatable, you have started designing a system.</p>
  </div>

  <SBWindow title="first useful moves" tone="yellow">
    <ul class="sb-micro-list readable">
      <li>Stop writing one giant instruction.</li>
      <li>Try thinking in phases or planning your work.</li>
      <li>Make the model surface assumptions before it acts.</li>
    </ul>
  </SBWindow>
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="the god prompt" tone="purple" rotate="1deg" />
    <h2>One instruction trying to do five jobs.</h2>
  </div>

  <div class="prompt-slab big">
    <strong>Research the lead.</strong><br />
    Write the email.<br />
    Check the pipeline.<br />
    Draft the proposal.<br />
    Update the CRM.<br /><br />
    Then guess all the missing criteria, hidden handoffs, and unstated definitions of done.
  </div>
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="the fix" tone="teal" rotate="-1deg" />
    <h2>Make the hidden work visible.</h2>
  </div>

  <div class="fix-grid roomy">
    <SBWindow title="01" tone="teal" compact>
      <h3>Know the model</h3>
      <p class="sb-small">Fast and shallow, or deep reasoning. Do not pretend that knob is irrelevant.</p>
    </SBWindow>
    <SBWindow title="02" tone="pink" compact>
      <h3>Decompose</h3>
      <p class="sb-small">Break the work into phases so failure has a location.</p>
    </SBWindow>
    <SBWindow title="03" tone="yellow" compact>
      <h3>Define done</h3>
      <p class="sb-small">If good is unnamed, the model supplies a default.</p>
    </SBWindow>
  </div>
</div>

---

<div class="sb-two wide-right">
  <div class="sb-stack">
    <SBStamp label="nick's chief-of-staff agent" tone="yellow" rotate="1deg" />
    <h2>The prompt is trivial. The context system is the work.</h2>
    <p class="sb-caption">The screenshot can do the proof; the slide only needs the system claim.</p>
  </div>

  <SBPlaceholder
    label="Chief-of-staff screenshot"
    replacement="Replace with Nick's screenshot if shareable"
    :src="'/placeholders/chief-of-staff-screenshot.png'"
    ratio="4 / 3"
    tone="yellow"
  />
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="operationalise before systematise" tone="pink" rotate="-1deg" />
    <h2>Name the handoffs before you hand them to an agent.</h2>
  </div>

  <div class="handoff-map roomy">
    <SBNode title="Name the work" meta="what slows us down?" tone="teal" />
    <SBNode title="Name the handoff" meta="who gets what next?" tone="purple" />
    <SBNode title="Define done" meta="what is acceptable?" tone="yellow" />
    <SBNode title="Centralise knowledge" meta="where does truth live?" tone="pink" />
  </div>

  <div class="sb-callout large">A mystery box plus an agent is still a mystery box.</div>
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="field stop 02" tone="teal" rotate="1.5deg" />
    <h2>Workflows: the window-washing intake loop.</h2>
  </div>

  <div class="loop-grid roomy">
    <SBNode title="Customer call" meta="voice agent" tone="teal" />
    <SBNode title="Collect job details" meta="access, location, gaps" tone="purple" />
    <SBNode title="Classify queue" meta="criteria and follow-up" tone="yellow" />
    <SBNode title="Human booking" meta="judgment call" tone="pink" />
  </div>

  <SBWindow title="break points" tone="pink">
    <ul class="break-list">
      <li>Customers are bad at describing windows.</li>
      <li>No photo means no clean quote.</li>
      <li>Guardrails can become loops.</li>
    </ul>
  </SBWindow>
</div>

---

<div class="sb-word-slide bottleneck-simple">
  <div class="sb-stack">
    <SBStamp label="the bottleneck" tone="yellow" rotate="-1deg" />
    <div class="sb-giant">Workflow design.</div>
    <p class="sb-caption">The model is not where most systems fail.</p>
  </div>
</div>

---

<div class="sb-two wide-left">
  <div class="sb-stack">
    <SBStamp label="field stop 03" tone="purple" rotate="1deg" />
    <h2>Factories become fleets.</h2>
    <p class="sb-caption">The frontier is no longer one agent trying to hold everything in its head.</p>
  </div>

  <SBWindow title="frontier pattern" tone="purple">
    <ul class="sb-micro-list readable">
      <li>Small tracked units</li>
      <li>Shared memory</li>
      <li>Rewindable work</li>
      <li>Many loops feeding each other</li>
    </ul>
  </SBWindow>
</div>

---

<div class="sb-two wide-right">
  <div class="sb-stack">
    <SBStamp label="candyland / gas city" tone="teal" rotate="-1deg" />
    <h2>A small factory with a ledger.</h2>
    <div class="ledger">
      <div class="ledger-row"><span>unit</span><span>saved link becomes calendar time</span></div>
      <div class="ledger-row"><span>unit</span><span>shipping note becomes LinkedIn draft</span></div>
      <div class="ledger-row"><span>memory</span><span>the factory can rewind</span></div>
      <div class="ledger-row"><span>scope</span><span>built for me, low external stakes</span></div>
    </div>
  </div>

  <SBPlaceholder
    label="Candyland / Gas City"
    replacement="Replace with factory UI, SDK output, or ledger screenshot"
    :src="'/placeholders/candyland-gas-city.png'"
    tone="teal"
  />
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="project mirror" tone="pink" rotate="1deg" />
    <h2>Before the pipeline: a room full of agents.</h2>
  </div>

  <SBPlaceholder
    label="Project Mirror tmux monitor"
    replacement="Replace with full monitor screenshot of agents running in parallel"
    :src="'/placeholders/project-mirror-tmux-monitor.png'"
    ratio="16 / 9"
    tone="pink"
  />
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="project mirror pipeline" tone="pink" rotate="-1deg" />
    <h2>Data to research to twins to constitutions to ranking.</h2>
  </div>

  <SBProjectMirrorFlow />

  <div class="question-grid mirror-proof">
    <SBPlaceholder label="Project Mirror constitution" replacement="Replace with real constitution screenshot" :src="'/placeholders/project-mirror-constitution.png'" tone="yellow" />
    <SBPlaceholder label="Project Mirror evidence" replacement="Replace with pipeline or run evidence" :src="'/placeholders/project-mirror-pipeline.png'" tone="pink" />
  </div>
</div>

---

<div class="sb-two wide-left">
  <div class="sb-stack">
    <SBStamp label="every handoff is an assumption" tone="yellow" rotate="-1deg" />
    <h2>Loops chain into fleets. Assumptions disappear.</h2>
    <div class="sb-callout large">Can I still see what is moving between the loops?</div>
  </div>

  <SBFleetVertical />
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="epilogue" tone="teal" rotate="1deg" />
    <h2>The spirit of Bubbles was people building together.</h2>
  </div>

  <div class="photo-grid-six">
    <SBPlaceholder label="Hack session" replacement="Replace with Bubbles build photo" :src="'/placeholders/bubbles-hack-session.png'" ratio="3 / 4" tone="pink" />
    <SBPlaceholder label="ClawClub" replacement="Replace with ClawClub photo" :src="'/placeholders/clawclub-photo.png'" ratio="3 / 4" tone="teal" />
    <SBPlaceholder label="ClawCon" replacement="Replace with ClawCon photo" :src="'/placeholders/clawcon-photo.png'" ratio="3 / 4" tone="purple" />
    <SBPlaceholder label="People building" replacement="Replace with field-stop example photo" :src="'/placeholders/people-building-agents.png'" ratio="3 / 4" tone="yellow" />
    <SBPlaceholder label="Slack receipt" replacement="Replace with Bubbles / XiaoZhu Slack context" :src="'/placeholders/slack-screenshot.png'" ratio="3 / 4" tone="teal" fit="contain" />
    <SBPlaceholder label="Shellmates receipt" replacement="Replace with Shellmates screenshot" :src="'/placeholders/shellmates.png'" ratio="3 / 4" tone="pink" fit="contain" />
  </div>
</div>

---

<div class="sb-word-slide question-shift">
  <div class="sb-stack">
    <SBStamp label="question shift" tone="teal" rotate="-1deg" />
    <div class="shift-pair">
      <span>What prompt should I write?</span>
      <strong>What system am I building?</strong>
    </div>
  </div>
</div>

---

<div class="sb-word-slide autonomy-slide">
  <div class="sb-stack">
    <SBStamp label="opinionated reframe" tone="pink" rotate="1deg" />
    <div class="shift-pair">
      <span>Autonomy asks: how much can it do without me?</span>
      <strong>Delegation asks: what should I still understand, approve, interrupt, and own?</strong>
    </div>
  </div>
</div>

---

<div class="sb-word-slide values-slide">
  <div class="sb-stack">
    <SBStamp label="the turn" tone="yellow" rotate="-1deg" />
    <div class="shift-pair">
      <span>Can we build this?</span>
      <strong>Does it serve what we value, or quietly work against it?</strong>
    </div>
  </div>
</div>

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="ask each other" tone="purple" rotate="1deg" />
    <h2>Questions for the unconference.</h2>
  </div>

  <div class="question-grid final-questions">
    <div class="sb-callout">What broke when real people got hold of it?</div>
    <div class="sb-callout">What will you not trust an agent to do?</div>
    <div class="sb-callout">What loop have you created?</div>
    <div class="sb-callout">Are you still above it?</div>
  </div>
</div>

---

<div class="closing-grid">
  <div class="sb-stack">
    <SBStamp label="sparkle bureaucracy" tone="teal" rotate="1deg" />
    <div class="closing-title">Usable.<br />Inspectable.<br />Worth trusting.</div>
    <p class="sb-caption">An experiment for people reimagining the systems around agents.</p>
  </div>

  <SBSocialClose />
</div>
