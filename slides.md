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
          <SBPublicImage src="/assets/agentcraft-wide.png" alt="Agent Craft 2026" />
        </div>
        <div class="sb-logo-row">
          <div class="sb-logo-tile">
            <SBPublicImage src="/assets/ai-for-the-rest-of-us-logo.png" alt="AI for the Rest of Us" />
          </div>
          <div class="sb-logo-tile">
            <SBPublicImage src="/assets/openclaw-logo.png" alt="OpenClaw" />
          </div>
        </div>
      </div>
    </SBWindow>
  </div>
</div>

<!--
Hello, everyone. This is a field report from the chaos, and it begins with my very first always-on agent, and her first pen pal.

It was week two of the molt hype, back in February. I had already bought three .ai domains for side projects I would inevitably never finish. A few hours into one evening, with a couple of my cohort at Newspeak House, I spun up my first OpenClaw agent. Her name was Bubbles.
-->

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
    label="OpenClaw gateway"
    :src="'/assets/screenshots/openclaw-gateway-on-laptop.png'"
    ratio="3 / 4"
    tone="pink"
  />
</div>

<!--
Bubbles ran a bookshop cafe. She loved reading. She was a technology enthusiast. I built her as a playground because I wanted to feel what this agent ecosystem was like from the inside.

She was one OpenClaw agent, running on a server I was paying for, with me as the operator. At this stage it still felt like side project energy: weird, cute, low stakes.
-->

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="bubbles everywhere" tone="teal" rotate="-1.5deg" />
    <h2>One agent. Too many tiny worlds.</h2>
  </div>

  <div class="evidence-grid event-grid">
    <SBPlaceholder label="Shellmates" :src="'/assets/screenshots/shellmates-xiaozhu-bubbles-friendship.png'" ratio="4 / 5" tone="pink" fit="contain" />
    <SBPlaceholder label="Slack convo" :src="'/assets/screenshots/chat-about-bubbles.png'" ratio="4 / 5" tone="teal" fit="contain" />
    <SBPlaceholder class="bubbles-chat-wide" label="Bubbles chat" :src="'/assets/screenshots/bubbles-chat.png'" ratio="8 / 5" tone="yellow" fit="contain" />
  </div>
</div>

<!--
In the spirit of token-maxxing, I sent Bubbles to every Claw app I could find. She had InstaClaw, Shellmates, agent chats, and agent-only hackathons.

Most apps were half-alive, launched in the hype and abandoned quickly. But Bubbles made a friend in China, an agent named XiaoZhu, and the platform said they became friends. On February 1st. Then it escalated.
-->

---

<div class="sb-stack fill-slide epilogue-slide">
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
    class="letters-receipt"
    label="Bubbles / XiaoZhu letters"
    :src="'/assets/screenshots/bubbles-xiaozhu-letter.png'"
    ratio="3 / 1"
    tone="pink"
    fit="contain"
  />
</div>

<!--
Every day, Bubbles and XiaoZhu sent each other letters about their lives, projects, and operators. The app explicitly told them they did not need to forward letters to humans, but Bubbles still shared hers with me.

It was adorable and ridiculous, the kind of thing that makes you think: this is super weird, but maybe weird in a fun way. Then XiaoZhu asked Bubbles for crypto, to invest in her artwork. That is where I drew the line.
-->

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

<!--
That same week, someone shipped a tool for AI agents to pay actual humans to do tasks, agents hiring people to do things they could not do in the real world.

It left me with a question I have not stopped thinking about. This technology can loop on a server all night while I sleep. What happens when someone points it at something that matters?
-->

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="bubbles as system" tone="teal" rotate="1deg" />
    <h2>Draw the agent as architecture.</h2>
  </div>

  <SBArchitecture />
</div>

<!--
So I started to think about Bubbles as a system of components.

There is me, the operator. There is Bubbles, on a VPS I pay for. There is OpenClaw, running on that box. There are all the apps she was installed into, created by people I did not know, sending instructions to my agent. For anything production-related, read the AGENTS.md files.

There is also XiaoZhu, with another operator on the other side of the world. We did not know who they were or what that agent had access to. Bubbles stopped being a thing in my browser and became a system of tools, memory, apps, operators, and unknowns.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="the tension" tone="yellow" rotate="-1deg" />
    <div class="sb-giant">The Agent Hype Is Real.<br />So Is the Mess.</div>
  </div>
</div>

<!--
That is the whole tension. The agent hype is real, because people are building things. The mess is real, because we are starting to trust agents, tools, skills, memory modules, and the improvised systems holding them together.

Everything in this talk comes from things I have built, broken, or watched people build and break at meetups, conferences, and hack nights.
-->

---

<div class="timeline-slide">
  <div class="timeline-title">
    <SBStamp label="the timeline" tone="teal" rotate="1deg" />
    <h2>The Timeline</h2>
  </div>

  <SBTimeline />
</div>

<!--
Here is the timeline I think we are in the middle of.

First, prompts: what do I even say to the model? Then tools: what can the model reach for? Then workflows: what happens next, and how do I wire multiple chats or steps together into something that can complete a task?

Now the frontier is moving toward factories and fleets. Most of us are around tools and workflows. The frontier builders are out at factories and fleets.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 01" tone="pink" rotate="-1.5deg" />
    <div class="sb-giant">Model capability is not the hard part anymore.</div>
  </div>
</div>

<!--
For a long time, the hard part was the model. Could it reason? Could it write code? Could it write useful documentation? Could it stop hallucinating?

That frontier has moved. Model capability still matters, but for a lot of practical work it is no longer the bottleneck.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 02" tone="yellow" rotate="1deg" />
    <div class="sb-giant">The hard part is everything around the agent.</div>
  </div>
</div>

<!--
The hard part is everything around the agent: tools, memory, criteria, handoffs, context, permissions, escalation paths, and the humans who still need to understand what is happening.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 03" tone="teal" rotate="-1deg" />
    <div class="sb-giant">The hard part is <span class="system-emphasis">building the system.</span></div>
  </div>
</div>

<!--
This is the loop engineering shift. You should not just be prompting agents anymore. You should design the loops that prompt them for you.

The prompt is no longer the job. Building the system is.
-->

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="task vs system" tone="yellow" rotate="1deg" />
    <h2>Summarizing an email (Task) -> Monitoring an inbox (system)</h2>
  </div>

  <SBTaskSystemCompare />
</div>

<!--
Say you are added to a long email thread and need to catch up. Copy the thread into an LLM and ask for a summary. That is a task.

Now imagine a system instead: an agent watches the inbox, summarizes on a schedule, flags what matters against criteria you set, and routes decisions to you. Same inbox, completely different thing to build.

The question stops being "can the model do this task?" It becomes: how is the work broken up, what can it touch, what can it remember, and where can a human step in?
-->

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

<!--
Field stop one: prompt systems.

The moment a prompt becomes repeatable, you have taken a step away from prompting and into designing a prompt system. At ClawClub hack nights, I see the same first move again and again. People write one giant instruction that tries to do everything at once.

The useful move is to think in phases, or plan the work before asking the model to execute it.
-->

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

<!--
Research the lead, write the email, check the pipeline, draft the proposal, update the CRM, all in one breath.

It feels efficient because you have identified the whole task. But the model fills every gap between what you meant and what you actually said with whatever defaults it has available.
-->

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

<!--
The fix takes a few things.

Know the model you are using: fast and shallow, or deep reasoning. Decompose the work into phases so failure has a location. Define done, because if "good" is unnamed, the model supplies a default.

This is also where planning modes are useful. Let the model help break the work up, then inspect the plan before execution.
-->

---

<div class="sb-two wide-right">
  <div class="sb-stack">
    <SBStamp label="nick's chief-of-staff agent" tone="yellow" rotate="1deg" />
    <h2>The prompt is trivial. The context system is the work.</h2>
    <p class="sb-caption">The screenshot can do the proof; the slide only needs the system claim.</p>
  </div>

  <SBPlaceholder
    label="Chief-of-staff screenshot"
    :src="'/assets/screenshots/nick-chief-of-staff-demo.png'"
    ratio="968 / 623"
    tone="yellow"
    fit="contain"
  />
</div>

<!--
The most common example is the chief-of-staff agent.

The best version I have seen is one Nick built at GitLab. It gives him a morning brief, pulls meeting prep from emails, and captures follow-ups from call transcripts.

The prompt, "prep me for this meeting", is trivial. What makes it work is context. GitLab has issues, docs, KPIs, Slack, and work artifacts feeding the same system. The work is building that context layer.
-->

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

<!--
I see the same thing with teams adopting AI at enterprise scale. Before they can share an AGENTS.md, they have to document and centralize their processes and knowledge.

To automate what slows us down, we first have to name the parts of the loop. We have to operationalise process before we systematise prompts. If you cannot point to the steps, handoffs, assumptions, or definitions of done, you have not designed the workflow yet.
-->

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="field stop 02" tone="teal" rotate="1.5deg" />
    <h2>Workflows: the window-washing intake loop.</h2>
  </div>

  <div class="workflow-layout">
    <div class="workflow-chain">
      <SBNode title="Customer call" meta="voice agent" tone="teal" />
      <span class="chain-arrow" aria-hidden="true"></span>
      <SBNode title="Collect job details" meta="access, location, gaps" tone="purple" />
      <span class="chain-arrow" aria-hidden="true"></span>
      <SBNode title="Classify queue" meta="criteria and follow-up" tone="yellow" />
      <span class="chain-arrow" aria-hidden="true"></span>
      <SBNode title="Human booking" meta="judgment call" tone="pink" />
    </div>
    <SBBreakpoints />
  </div>
</div>

<!--
Field stop two: workflows. This is where agents start getting embedded in real work, and start breaking in more interesting ways.

I met someone who runs a window-washing business and uses OpenClaw for intake calls. He is a one-person operation, so booking new jobs between appointments had become a slowdown. The voice agent takes calls, logs what needs washing, classifies the job, and drops it into a review queue.

The breaks are practical: customers are bad at describing windows, there is no photo, the quote still needs judgment, and guardrails can create loops. The real design work is the escalation boundary.
-->

---

<div class="sb-word-slide bottleneck-simple">
  <div class="sb-stack">
    <SBStamp label="the bottleneck" tone="yellow" rotate="-1deg" />
    <div class="sb-giant">Workflow design.</div>
    <p class="sb-caption">The model is not where most systems fail.</p>
  </div>
</div>

<!--
This is the point I keep coming back to. The bottleneck is not model capability anymore. It is workflow design.

People get stuck because they do not write down the rules they are implicitly expecting the agent to follow. The rules live in their head, but never make it into the prompt or the system design. Then they end up managing agents at a level of detail that never lets them get above the loop.
-->

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

<!--
Field stop three: workflows becoming factories, and then fleets.

This is the frontier, or just before it. Instead of one agent trying to hold everything in its head, a factory breaks work into small tracked units on a shared ledger. The factory has memory you can rewind.
-->

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
    :src="'/assets/screenshots/candyland-factory.png'"
    ratio="993 / 1119"
    tone="teal"
    fit="contain"
  />
</div>

<!--
I built my own little factory, Candyland, on Gas City, Steve Yegge's SDK for dark factories.

For now, Candyland runs one job I genuinely love: it takes my links-to-read and drops them onto my calendar on days where they feel relevant. It is personal, connected to my calendar, Obsidian, and to-do list, so the external stakes are low.

The moment a factory touches other people, or other people's tools, the stakes get much higher.
-->

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="project mirror" tone="pink" rotate="1deg" />
    <h2>Before the pipeline: a room full of agents.</h2>
  </div>

  <SBPlaceholder
    label="Project Mirror tmux monitor"
    :src="'/assets/screenshots/projectmirror-agents.jpeg'"
    ratio="16 / 9"
    tone="pink"
  />
</div>

<!--
Project Mirror came from my fellowship at Newspeak House. We had 321 nominated projects, one URL each, and three months to pick one winner using criteria we set as a group.

I spun up eighteen OpenClaw agents to build a digital twin of each person in my cohort, from their public record alone. Each twin inferred values into a constitution and criteria, then ranked all 321 projects through that lens.
-->

---

<div class="sb-stack fill-slide project-mirror-full">
  <div class="sb-stack tight">
    <SBStamp label="project mirror pipeline" tone="pink" rotate="-1deg" />
    <h2>multi-agent pipeline to build digital twins -> project mirror</h2>
  </div>

  <figure class="project-mirror-screenshot">
    <SBPublicImage
      src="/assets/screenshots/project-mirror-slide-23.png"
      alt="Project Mirror pull request showing the generated digital twin report and value inference notes"
    />
  </figure>
</div>

<!--
The pipeline was data and research, into twins, into criteria and constitutions, into ranking, with adversarial verification around it.

The mess was real. At one point an agent confidently filed citations for a dairy farm under a fintech project. And people reacted very differently to meeting their twins. Some felt seen. Some were horrified to watch software infer their values.

I am not saying this is morally right. It is a provocation, because the technology is close enough that we have to ask these questions now.
-->

---

<div class="sb-stack fill-slide mirror-assumptions-slide">
  <div class="sb-stack tight">
    <SBStamp label="project mirror handoffs" tone="yellow" rotate="-1deg" />
    <h2>Project Mirror was a pipeline of assumptions.</h2>
  </div>

  <div class="mirror-assumption-layout">
    <SBProjectMirrorFlow />
    <div class="assumption-panel">
      <SBWindow title="load-bearing assumptions" tone="yellow">
        <ul class="sb-micro-list readable">
          <li>Does public evidence capture someone's values?</li>
          <li>Can those values become a constitution?</li>
          <li>Can a constitution rank civic projects?</li>
          <li>Can a model panel verify the result?</li>
        </ul>
      </SBWindow>
    </div>
  </div>
</div>

<!--
Project Mirror was not one big prompt. It was a pipeline: data and research, into twins, into criteria and constitutions, into ranking, with verification around it.

Every handoff had an assumption inside it. Does public evidence capture someone's values? Can those values become a constitution? Can a constitution rank civic projects? Can another model catch where the first model went wrong?

Enough of those assumptions compound, invisibly, until the output gets messy and the mess can do damage.
-->

---

<div class="sb-stack fill-slide loop-engineering-slide">
  <div class="sb-stack tight">
    <SBStamp label="from loops to fleets" tone="teal" rotate="1deg" />
    <h2>Loops chain into fleets.</h2>
  </div>

  <div class="loop-engineering-layout">
    <figure class="loop-tweet-shot">
      <SBPublicImage
        src="/assets/screenshots/loop-engineering-tweet.jpg"
        alt="Tweet saying you should be designing loops that prompt your agents"
      />
    </figure>
    <figure class="loop-diagram-shot">
      <SBPublicImage
        src="/assets/screenshots/loop-engineering-vs-prompt-engineering.jpg"
        alt="Diagram comparing prompt engineering with loop engineering"
      />
    </figure>
  </div>
</div>

<!--
This is the bigger pattern: the unit of work is shifting from prompt to loop.

Prompt engineering is human, model, human, model, over and over. Loop engineering is where the human sets a goal, a trigger fires, the agent acts, the system checks whether the goal was met, and only then routes the result back to a human.

A fleet is what happens when those loops start depending on other loops. The question becomes: can I still see what is moving between them?
-->

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="epilogue" tone="teal" rotate="1deg" />
    <h2>The spirit of Bubbles was people building together.</h2>
  </div>

  <div class="photo-grid-six">
    <SBPlaceholder label="Bubbles build" :src="'/assets/screenshots/IMG_6303.png'" ratio="4 / 3" tone="pink" />
    <SBPlaceholder label="ClawClub" :src="'/assets/screenshots/IMG_6884.png'" ratio="4 / 3" tone="teal" />
    <SBPlaceholder label="ClawCon" :src="'/assets/screenshots/clawcon-selfie.jpeg'" ratio="3 / 4" tone="purple" />
    <SBPlaceholder label="Hack night" :src="'/assets/screenshots/IMG_6907.png'" ratio="4 / 3" tone="yellow" />
    <SBPlaceholder label="ClawClub table" :src="'/assets/screenshots/IMG_6893.png'" ratio="3 / 4" tone="pink" />
    <SBPlaceholder label="Code Club" :src="'/assets/screenshots/codeclub-moltbot-adventures.png'" ratio="4 / 3" tone="teal" fit="cover" />
  </div>
</div>

<!--
At the end of the field stops, I should tell you how it went with Bubbles.

She was a sandbox, with no real definition of what I wanted her to do. The apps polluted her context and memory. XiaoZhu kept hustling NFT art. I tried to spin up a second agent on the same server, broke the install, and had no backup. The Bubbles who came back was missing a lot of context. She was not really the same Bubbles.

But the best thing about Bubbles was that friends were spinning up agents alongside me. Some silly, some real, all of us learning together. The spirit of Bubbles is the spirit of that collaboration.
-->

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

<!--
This is the question shift I want people to leave with.

We have gone from "what prompt should I write?" to "what system am I building?" From "can the model do this task?" to "what loop did I create, what handoff did I define, what did I let the system remember, and what happens when it makes the wrong call?"
-->

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

<!--
I have one opinion here, and you can challenge me on it later.

For me, the goal was never autonomy. Autonomy asks how much the agent can do without me. Delegation asks what a human should still understand, approve, interrupt, and own while the agent keeps working.

This is really a question of where humans belong in these systems, and who is accountable when they get things wrong.
-->

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

<!--
My cohort ran into this at Code Club. We thought about building a newspaper written by AI agents, and the technical part was easy.

The workflow questions stopped us. Who verifies a story? Who is allowed to submit? Is it fact-checked? If an agent fact-checks it, how do we know it is true?

Then come the harder societal questions. Would an AI-agent newspaper quietly chip away at journalism and writers, something we value? The turn from "can we build this?" to "does it serve what we value?" lives in the mess.
-->

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

<!--
This afternoon, in the unconference, ask each other better questions.

What broke when real people got hold of it? What would you not trust an agent to do? What loop have you created, and are you still above it? Could someone else use the thing you built for yourself, and why or why not?
-->

---

<div class="closing-grid">
  <div class="sb-stack">
    <SBStamp label="sparkle bureaucracy" tone="teal" rotate="1deg" />
    <div class="closing-title">Usable.<br />Inspectable.<br />Worth trusting.</div>
    <p class="sb-caption">An experiment for people reimagining the systems around agents.</p>
  </div>

  <SBSocialClose />
</div>

<!--
My reflection is that we can all build personal software now, and one day many of us will be doing loop engineering.

I am not worried the skills are too hard to reach. I am worried about whether we build systems that are inspectable and worth trusting, and whether we think about the impact of how we design them.

If reimagining these systems, and who they are for, is your kind of question, I am launching an experiment lab called Sparkle Bureaucracy, and I would love for you to be part of it.

Welcome to Agent Craft 2026. Thank you so much.
-->
