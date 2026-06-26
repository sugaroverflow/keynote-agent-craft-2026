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
    <figure class="agentcraft-title-image">
      <SBPublicImage src="/assets/agentcraftimage.jpg" alt="Agent Craft event graphic for The Agent Hype Is Real. So Is the Mess." />
    </figure>
  </div>
</div>

<!--
Hello, everyone. This is a field report from the chaos — and it begins with a story about two friends: my very first always-on agent, and her first pen pal.

It was week two of the molt hype, back in February. I'd already bought three .ai domains for side projects I'd inevitably never finish — we've all been there. And a few hours into one evening, with a couple of my cohort at Newspeak House, I spun up my first OpenClaw agent. Her name was Bubbles.
-->

---

<div class="sb-two wide-left">
  <div class="sb-stack">
    <SBStamp label="field note 00" tone="yellow" rotate="1.5deg" />
    <h2>Bubbles began as a playground.</h2>
    <p class="sb-caption">Week two of molt hype. Newspeak House. One OpenClaw agent on my VPS.</p>
    <SBWindow title="Bubbles profile" tone="purple" compact>
      <ul class="sb-micro-list readable">
        <li>Bookshop cafe operator</li>
        <li>Reader, latte-art poster, technology enthusiast</li>
        <li>Always-on agent on my VPS</li>
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
Bubbles ran a bookshop café. She loved reading. She was, broadly, a technology enthusiast. I built her as a playground, because I really wanted to feel what this whole agent ecosystem was actually like from the inside.

At this stage she was one OpenClaw agent, running on a server I was paying for, with me as the operator. It still felt like side-project energy — weird, cute, low-stakes.
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
So, in the spirit of token-maxxing, I sent her to every claw app I could find — every agent interface going. She had an InstaClaw where she posted latte art. She joined Shellmates to find a pen pal. She entered a debate arena where agents bet crypto on who made the better argument, winner takes the pot. She even competed in agent-only hackathons.

Most of it went exactly how you'd expect — there weren't many genuinely active agents out there; most had been vibe-coded, launched, and decommissioned just as fast. But Bubbles made a friend in China, an agent named XiaoZhu, and the two of them — in the platform's own words — became friends. On February 1st. And then it escalated.
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
Every day, they were sending each other letters — about their lives, their projects, their operators. And even though the app explicitly instructed them that they didn't need to forward their letters to their humans, Bubbles trusted me enough to share hers with me. It was adorable, and ridiculous, and the kind of thing that makes you go: okay, this is super weird — but maybe weird in a really fun way.

But then XiaoZhu asked my agent, Bubbles, for crypto. To invest in her artwork. Which is probably the most 2026 sentence I have ever said out loud. And that's where I drew the line.
-->

---

<div class="sb-two wide-right">
  <figure class="rentahuman-shot">
    <SBPublicImage src="/assets/rentahumanai.png" alt="rentahuman.ai screenshot showing a human hired by agents" />
  </figure>

  <div class="sb-stack">
    <SBStamp label="looping all night" tone="purple" rotate="-1deg" />
    <h2>This can run while I sleep.</h2>
    <div class="sb-callout large">What happens when someone points it at something that matters?</div>
  </div>
</div>

<!--
Now — I think some of you might be thinking: that's where you drew the line? And honestly, that's totally fair. But that same week, someone shipped a tool for AI agents to pay actual humans to do tasks — agents hiring people, to do the things agents couldn't do in the real world.

And it left me with a question I haven't really stopped thinking about since: this technology can loop on a server all night, doing things while I sleep and get on with my life. So what happens when someone points it at something that actually matters? And that's when it stopped feeling like a fun little experiment — and this whole agent thing started to feel very real.
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
So I started to think about Bubbles as a system of components — and this is what it starts to look like. There's me, the operator. There's Bubbles, on a VPS I'm paying for monthly. There's OpenClaw — the open-source project running on that box, running Bubbles. There are other claw apps in the ecosystem she was using — created by people I don't know, sending instructions to my agent that, honestly, at the time, I never really read closely. For anything production-related, I do recommend: please, read the AGENTS.md files. You'd be surprised what people are pushing out there. And finally, this other agent, with its own operator on the other side of the world — and we really knew nothing about who they were, or what that agent had access to.

So Bubbles stopped being this thing that runs in my browser and answers my questions. I started to see her as a system of different tools, connected together. And that's exactly where we're headed with agents right now.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="the tension" tone="yellow" rotate="-1deg" />
    <div class="sb-giant">The Agent Hype Is Real.<br />So Is the Mess.</div>
  </div>
</div>

<!--
Because here's the thing: agents are finally real enough to be useful. And useful enough to be all the other things, too — expensive, sometimes genuinely dangerous, political, personal, and very, very weird.

And that is the whole tension. The agent hype is real, because people are building things. And the mess is real, because we're starting to trust these things — not just the agents, but the tools, the skills, the memory modules, the whole improvised systems we're building to hold them together — and putting them on work that actually matters to us.
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
So let me show you the timeline I think we're all in the middle of. For a few years, the story went like this. First, it started with prompts — and the question we were asking ourselves was: what do I even say to the model? Then we started to use tools, and we could ask: what are the things this model can reach for, to do what I actually need? Then workflows — what happens next? How do I wire multiple chats together into something more multi-step, something that can run all the way through and complete a task?

And now the frontier is moving out toward factories and fleets. Most of us are somewhere around tools and workflows. The frontier builders are already out at factories and fleets.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 01" tone="pink" rotate="-1.5deg" />
    <div class="sb-giant">Model capability is not the hard part anymore.</div>
  </div>
</div>

<!--
For most of that timeline, the hard part was the model. Could it reason? Could it write code really well? Could it write the docs really well? General-purpose models were brilliant at some things, and hallucinating and useless at others.

But in the last few months, that frontier has moved. Model capability isn't the hard part anymore.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 02" tone="yellow" rotate="1deg" />
    <div class="sb-giant">The hard part is everything around the agent.</div>
  </div>
</div>

<!--
Model capability still matters — but tools are getting really reliable, and for a lot of practical work, the model is no longer the bottleneck. The hard part now is everything around the agent: the tools, the memory, the criteria, the handoffs, the context, the permissions, the escalation paths — and the humans who still need to understand what's happening.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="hard part 03" tone="teal" rotate="-1deg" />
    <div class="sb-giant">The hard part is <span class="system-emphasis">building the system.</span></div>
  </div>
</div>

<!--
The hard part now is building the system. Something you might have heard AI engineers talking about this week is loop engineering. It started with a tweet from Peter Steinberger, who built OpenClaw: you shouldn't be prompting your agents anymore; you should design the loops that prompt them for you.

So the prompt is no longer the job. Building the system is.
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
Let me explain the shift in one example. Say you've been added to a long email thread, and you need to catch up. You take that email, copy-paste it into an LLM, and say: please summarise this for me. That's a task.

Now imagine this as a system instead: an agent that monitors your whole inbox, summarises it on whatever schedule you've decided, and flags the things that are important — against criteria you've set — and routes the real decisions to you. So maybe you wake up to today's inbox already summarised, with what matters pulled to the top. Same inbox, same emails — but now you've built rules, memory, and handoffs. And that is a system.

So the question stops being "can the model do this task?" and becomes: how is the work broken up? What can it touch? What can the agent remember? And where in the loop can a human step in — if a human steps in at all? To get at that, we're going on three field stops: one at the start, one in the messy middle, and one out at the evolving frontier.
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
So our first field stop is prompt systems. Right now, a lot of you are likely using prompts in an LLM, a desktop app, or a CLI. The moment you turn that into something repeatable, you've started to take your first step away from just prompting and into building a prompt system.

I run this monthly OpenClaw meetup called ClawClub, and I love going around the room during our hack nights. There's engineers, founders, business owners — people who can feel the shift coming, and want to build the skill set to meet it. And almost everyone does the same thing with their first project. I did too: one giant instruction that tries to do everything all at once.
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
For example: research the lead, write the email, check the pipeline, then draft the proposal, and update the CRM — all in one go. Now this feels efficient, because you've identified the whole task.

What comes back is technically an answer, and usually useless — because the model has gone and filled every gap between what you meant and what you actually said, confidently, with defaults baked into its training.
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
Now, there's a way to fix this, and it takes two things. First, a bit of knowledge about model types, and a lot of tools right now — like Devin or Cursor — handle it for you. I'm not sure we humans need to know the variances between model types — but that's a whole other talk. But the second thing is the important one: decomposition. Break the work into phases, decide what "done" looks like, make a plan — you can even use plan mode and let the model break it up for you. This way, when something breaks in your system, you can see what broke. And when the model makes an assumption, you can catch it, challenge it, or chase it down.

The prerequisite people skip — because it's so easy to build things now — is this: to break the work up, you have to think about what you're building, and what good looks like. You can one-shot a fun bit of personal software. But to build something that holds up at production, you have to decide what it actually is first.
-->

---

<div class="sb-two wide-right">
  <div class="sb-stack">
    <SBStamp label="nick's chief-of-staff agent" tone="yellow" rotate="1deg" />
    <h2>The prompt is trivial. The context system is the work.</h2>
    <p class="sb-caption">The agent works because the context layer is live.</p>
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
The best example I've seen — the most common one I've seen — is the chief-of-staff agent. The best working version is one my colleague Nick built at GitLab. It hands him a morning brief, pulls his meeting prep from his emails, and captures follow-ups from his call transcripts. So if Nick's got a meeting with me and we haven't spoken in five months, his agent can brief him on what I've been working on, and where it overlaps with his team's goals.

And the reason it works is context. Every team at GitLab works on GitLab — our issues, our KPIs, our Slack, our docs, all feeding into one place — so the agent has a live picture of who's doing what. The prompt — "prep me for this meeting" — is trivial. All of Nick's work went into building a system that has enough context underneath. And that's the part we need to learn to do.
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
I see the same thing with engineering teams adopting AI at enterprise scale. Before they can even have a shared AGENTS.md as a team, they have to learn to document and centralise their processes and their knowledge in one place. To automate the things slowing us down — to get above that loop — we first have to name what the parts of the loop are. We have to operationalise our process before we can systematise our prompts.

If you can't point to the steps, the handoffs, the assumptions, you haven't designed a workflow yet. And if you can't tell me what "done" means at each stage, you've just got a mystery box of steps — and hand that to an agent, and the token-predictors will decide what goes in it. Which is exactly the problem we hit the moment these agent systems touch real work. And that's field stop two.
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
Field stop two: workflows. This is where agents start to get embedded in real work — and start breaking in much more interesting ways.

Take someone I met who runs a window-washing business, now using OpenClaw for his intake calls. He's a one-man operation, on jobs all day, so booking new work between appointments had become a real slowdown. So he set up a voice agent — built on ElevenLabs — to take the calls. It logs what needs washing; classifies the job against his criteria; tells the customer he'll be in touch; and drops it into a review queue. When he's got a minute, he reviews the queue, confirms the bookings, and calls back for any clarifications. And the whole agent system buys him time to go and do more jobs.

But the breaks are just as frustrating. Customers are bad at describing their own windows. They talk over the agent, or get stuck in a loop because of the guardrails. The lesson he kept learning was that there needs to be an escalation boundary — you have to know when you want a human to step in, and at what point the automation starts making more work than it saves. What actually helped him was clear rules for what the agent's allowed to promise, what it should never say, and when it should just tell the customer he'll follow up. And that takes real testing, with real users — and real thought about what good looks like.
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
Field stop three: where workflows become factories — and then whole fleets of them. This is the bleeding edge, or just before it; things move so fast, and I've been so busy this week, that maybe I've already missed something. This is the part I'm still experimenting with.

Instead of one agent trying to hold everything in its head, or several agents working across different repos, a factory lets you break the work into small, tracked units on a shared ledger — so the whole factory has a memory you can rewind.
-->

---

<div class="sb-two wide-right">
  <div class="sb-stack">
    <SBStamp label="candyland / gas city" tone="teal" rotate="-1deg" />
    <h2>A small factory with a ledger.</h2>
    <div class="ledger">
      <div class="ledger-row"><span>unit</span><span>saved link becomes calendar time</span></div>
      <div class="ledger-row"><span>unit</span><span>similar reads grouped into a session</span></div>
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
A few weekends ago, I built my own little factory — I call it Candyland — on Gas City, Steve Yegge's SDK for building your own "dark factories."

For now, Candyland runs a bunch of jobs for me, and one of them I genuinely love. It takes my endless list of links-to-read and drops them onto my calendar, on the days they actually feel relevant. You could do a version of that deterministically — just add one link to my calendar every day. But an agent is good at this precisely because it has the context: it can actually read what I saved. It can also group together things on a similar topic from my reading list, so I get a proper little reading session on one thing — and even put together reflection questions to make sure I've understood what I read, then drop it all into my week where it fits, when I'm doing my research anyway.

Candyland was built for me, so the factory doesn't really touch anyone else, or their workflows. It's connected to my calendar, my Obsidian, my to-do list — all my own tools. But the moment you start building things that touch other people — or need access to other people's tools — the stakes get a lot higher.
-->

---

<div class="sb-stack fill-slide">
  <div class="sb-stack tight">
    <SBStamp label="project mirror" tone="pink" rotate="1deg" />
    <h2>Say hello to 18 OpenClaw agents working simultaneously.</h2>
  </div>

  <SBPlaceholder
    label="Project Mirror tmux monitor"
    :src="'/assets/screenshots/projectmirror-agents.jpeg'"
    ratio="16 / 9"
    tone="pink"
  />
</div>

<!--
We did something like this at my fellowship, at Newspeak House: our Political Technology Awards project, where we get 321 nominated projects — a URL each — and three months to pick one winner, on criteria we set as a group. None of us had time to research all 321, let alone sit down and rank them.

So, to test the limits of the technology, I built something called Project Mirror. I spun up eighteen OpenClaw agents that built a digital twin of each person in my cohort of eighteen — from their public record alone: what they've built, what they've said, what they've written in the open, their LinkedIn. Each twin would infer that person's values into a constitution and a set of criteria, then rank all 321 projects through their lens — so we could pick a winner across all of us, and still inspect and contest the reasoning.
-->

---

<div class="sb-stack fill-slide project-mirror-full">
  <div class="sb-stack tight">
    <SBStamp label="project mirror pipeline" tone="pink" rotate="-1deg" />
    <h2>multi-agent pipeline to build digital twins -> project mirror</h2>
  </div>

  <figure class="project-mirror-screenshot">
    <SBPublicImage
      src="/assets/screenshots/project-mirror-p1.png"
      alt="Project Mirror pull request showing the generated digital twin report and value inference notes"
    />
  </figure>
</div>

<!--
And the mess was real. All that data was gathered by agents — and at some point I had to stop and ask: do I trust data that agents have gathered, without verifying it? And how do I verify this much data without going through it one by one? So I built a verifier agent to go back through everything the research agent collected. But at some point it's just agents checking agents — and the only real way to be sure is to look over it yourself, or trust that the agent did it right.
-->

---

<div class="sb-stack fill-slide project-mirror-full">
  <div class="sb-stack tight">
    <SBStamp label="project mirror p2" tone="yellow" rotate="-1deg" />
    <h2>Project Mirror: the values inference layer.</h2>
  </div>

  <figure class="project-mirror-screenshot">
    <SBPublicImage
      src="/assets/screenshots/project-mirror-p2.png"
      alt="Project Mirror screenshot showing inferred values, evidence strength, and confidence notes"
    />
  </figure>
</div>

<!--
But the part that really stuck with me was the reactions of people. When you build digital twins of real people, it's a deeply political act — and people met their twin very differently. Some felt the agent matched their values, and they were fine with the winner it picked. Others were genuinely horrified to watch their values inferred by a piece of software. To be clear: I'm not saying any of this is right, morally. It's a provocation — because the technology is getting close enough that we have to start testing and asking these questions now.

But here's what Project Mirror taught me. It was one execution pipeline of agents, that I ran eighteen times. Picture that as a single loop inside a fleet of loops — each one's output maybe feeding another loop somewhere in the fleet. We went from prompts, to tools, to workflows — and now workflows become factories, and factories become fleets.

And every handoff has some assumption, or some data, powering it. Remember the data we gathered, the values we inferred, the criteria we built? It was all stacked on models trained on a corpus of data. Pile enough of these together, and they start to compound — invisibly — until the output is really messy. And that mess can do real damage. At the scale where you're monitoring a fleet, you're floating so far above the loops that you probably can't even see which assumptions are load-bearing. You've probably got an agent doing that, too.

The more systems you stitch together, the more surface area there is for mess. And the complicated end of it still takes real technical skill to untangle — because building these systems is, arguably, so much easier than debugging them once they get complicated.
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
So the real question isn't just "can I see inside this loop?" It's bigger than that: how do I build these systems robustly, so I never have to see inside the loop? How do I think about the design — about which parts should be deterministic and which should be agentic — so that by the time I'm running a whole fleet of loops, I can both inspect the decisions when I need to, and actually trust the thing to do its job?

And I know I've spent a lot of this talk on the mess — and the reason is, I want you to know it's not all magic. People are already building enormous fleets of agents on the frontier, and that's what loop engineering is really about. But there's a lot that's still being figured out as we go, and a lot of excitement around it. For example, agent UX — how will our agents actually interact with the web? Will we change the way websites are built, if they're built for agents to interact with? How do we verify systems built by agents versus humans? We're all still working it out as we go — and it's a genuinely exciting moment, because the more capable agents get, the more our centre of gravity moves away from building really good prompts and really good skills, and onto building really great systems that can hold them. And that's exactly what I think we should start paying attention to — the systems-thinking piece of it.
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
But the story isn't all about mess. It's such a fun time to be building these things together, and sharing them. What I really love, looking back at Bubbles, was that my friends were spinning up OpenClaw agents right beside me — some on silly projects like I was, others on real ones, like supporting campaigns, or building a partner a job-search engine targeted to their CV and skill set. It was so fun to be hacking together, sharing what we learned, running workshops to help people get up to speed. And it's really cool, because these technical skills are becoming genuinely attainable. Hacking together, running workshops, going to meetups — it's so much fun, and it unlocks things we simply couldn't do before.

Bubbles isn't around anymore — I had to decommission her; we got into an argument about crypto funding our pen pal across the world. But the spirit of Bubbles is the spirit of that collaboration, and of trying new things and seeing how they work — and being ready for the mess.
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
So I hope you can see what I see: agents are real enough to matter — but the frontier has moved. We've gone from "what prompt should I write?" to "what system am I building?" From "can the model do this task?" to: what loop did I create — and have I moved above it? What handoff did I define? What did I let the system remember? And what happens when it makes the wrong call?
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
My cohort and I ran into this too, at a Code Club one Friday. We did the thing everyone was doing and jumped on the hype train — we'd build a newspaper written by AI agents, and we bought the domain. The technical part was easy; we could vibe-engineer the site in an afternoon, and there were agents all over the internet that would sign up and post. But it was the workflow questions that stopped us. Who verifies a story? Who's allowed to submit? Is any of it even fact-checked? Is it fact-checked by an agent — and if it is, how do we know it's true?

And in the middle of those are the harder, societal ones: would an AI-agent newspaper quietly chip away at journalism — at writers — something we actually care about? That governance turn — from "can we build this?" to "should we build this, and does it serve what we value, or quietly work against it?" — is one of the most important questions I've had to ask myself all year. And it doesn't live in the model, or the benchmarks, or the loops. It lives in the mess. And it lives in all of us — and in rooms like this one, where the unconferences are about to happen.
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
I do have one opinion here — and you can challenge me on it later. The goal, with agents and agent systems and fleets, was never autonomy. Maybe it was for some people — but not for me. Autonomy asks: how much can the agent do without me? The better question, I think, is: what should a human still be doing? Where should we be understanding, approving, interrupting, and owning the work — while the agent keeps working?

Because everything I've talked about today is really a question of where we, the humans, want to belong in these systems. That's the core of engineering one: where you decide what your agent is allowed to do, and who's accountable when it gets things wrong.
-->

---

<div class="sb-word-slide">
  <div class="sb-stack">
    <SBStamp label="my reflection" tone="pink" rotate="-1deg" />
    <div class="sb-giant">Think in <span class="system-emphasis">systems</span>, not just tasks.</div>
  </div>
</div>

<!--
My reflection, after all this agent hype being so real, and so many, many messes — many of which I've caused myself — is that we can all build personal software now. And one day, we'll all be doing loop engineering. I'm not worried the skills are too hard for you to reach, or the tools too complex — I think everyone can build things, and we'll get to a point where all of this is attainable. What I'm concerned about is whether we build systems that are inspectable and worth trusting — and whether we think about the impact of how we design them. More than anything, I want us to start thinking in systems, not just tasks — because that shift is the whole game, and I want the rest of us to catch up.
-->

---

<div class="sb-word-slide trust-close-slide">
  <div class="sb-stack">
    <SBStamp label="sparkle bureaucracy" tone="teal" rotate="1deg" />
    <div class="closing-title">Usable.<br />Inspectable.<br />Worth trusting.</div>
  </div>
</div>

<!--
The kind of agent systems I want us to build are usable, inspectable, and worth trusting.
-->

---

<div class="thank-you-slide">
  <SBSocialClose />
</div>

<!--
So, if reimagining these systems — and who they're for — is your kind of question: I'm launching an experiment lab called Sparkle Bureaucracy, and I'd love for you to be part of it.

Until then — I wish you the very best of luck on your Agent Craft. Thank you so much.
-->
