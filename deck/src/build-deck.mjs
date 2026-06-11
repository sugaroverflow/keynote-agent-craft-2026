import pptxgen from "pptxgenjs";
import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const { imageSizingContain } = require("./pptxgenjs_helpers/image");
const {
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require("./pptxgenjs_helpers/layout");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "../..");
const ASSETS = path.join(ROOT, "deck/assets");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Agent Craft 2026";
pptx.subject = "The Agent Hype Is Real. So Is the Mess.";
pptx.title = "Agent Craft keynote";
pptx.company = "AI for the rest of us";
pptx.lang = "en-GB";
pptx.theme = {
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  lang: "en-GB",
};
pptx.defineLayout({ name: "LAYOUT_WIDE", width: 13.333, height: 7.5 });

const W = 13.333;
const H = 7.5;
const C = {
  bg: "0A0E27",
  bg2: "0D1230",
  panel: "12183A",
  panel2: "171D45",
  white: "FFFFFF",
  muted: "AAB4CF",
  dim: "6F7895",
  pink: "EC4899",
  pink2: "F9A8D4",
  teal: "2DD4BF",
  teal2: "99F6E4",
  purple: "A855F7",
  purple2: "C084FC",
  blue: "60A5FA",
  yellow: "FACC15",
  yellow2: "FEF08A",
  red: "FB7185",
  green: "4ADE80",
  ink: "050817",
};

const IMG = {
  agentWide: path.join(ASSETS, "raw/agentcraft-wide.png"),
  aiLogo: path.join(ASSETS, "generated/ai-for-the-rest-of-us-logo.png"),
  brainstation: path.join(ASSETS, "raw/brainstation-strip.png"),
  summit: path.join(ASSETS, "raw/ai-summit-strip.png"),
  bubblesSlack: path.join(ASSETS, "placeholders/bubbles-slack.png"),
  shellmates: path.join(ASSETS, "placeholders/shellmates.png"),
  openclawApp: path.join(ASSETS, "placeholders/openclaw-app.png"),
  loopEngineering: path.join(ASSETS, "placeholders/loop-engineering.png"),
  instaclaw: path.join(ASSETS, "placeholders/instaclaw.png"),
  debateArena: path.join(ASSETS, "placeholders/debate-arena.png"),
  hackathon: path.join(ASSETS, "placeholders/hackathon.png"),
  constitution: path.join(ASSETS, "placeholders/project-mirror-constitution.png"),
};

function slide(notes = "", active = "overview") {
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  s.addNotes(notes);
  appShell(s, active);
  return s;
}

function addText(s, value, x, y, w, h, opts = {}) {
  s.addText(value, {
    x,
    y,
    w,
    h,
    margin: opts.margin ?? 0.04,
    fontFace: opts.fontFace || "Arial",
    fontSize: opts.fontSize || 18,
    bold: opts.bold || false,
    italic: opts.italic || false,
    color: opts.color || C.white,
    align: opts.align || "left",
    valign: opts.valign || "mid",
    rotate: opts.rotate || 0,
    breakLine: opts.breakLine || false,
    paraSpaceAfterPt: opts.paraSpaceAfterPt ?? 0,
    transparency: opts.transparency || 0,
    ...(opts.extra || {}),
  });
}

function rect(s, x, y, w, h, opts = {}) {
  s.addShape(pptx.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: opts.radius ?? 0.06,
    rotate: opts.rotate || 0,
    fill: { color: opts.fill || C.panel, transparency: opts.fillT ?? 0 },
    line: {
      color: opts.line || C.white,
      transparency: opts.lineT ?? 85,
      width: opts.lineW ?? 1,
      dash: opts.dash,
    },
    shadow: opts.shadow
      ? { type: "outer", color: "000000", opacity: opts.shadowOpacity ?? 0.22, blur: 2, angle: 45, distance: 1 }
      : undefined,
  });
}

function appShell(s, active = "overview") {
  s.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: W,
    h: H,
    fill: { color: C.bg },
    line: { color: C.bg, transparency: 100 },
  });

  // Sparkle Bureaucracy uses a faint dot-grid and fixed sidebar shell.
  for (let x = 1.58; x < W; x += 0.48) {
    for (let y = 0.75; y < H; y += 0.48) {
      s.addShape(pptx.ShapeType.ellipse, {
        x,
        y,
        w: 0.011,
        h: 0.011,
        fill: { color: C.white, transparency: 92 },
        line: { color: C.white, transparency: 100 },
      });
    }
  }

  s.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 1.34,
    h: H,
    fill: { color: "070A20" },
    line: { color: C.white, transparency: 88, width: 1 },
  });
  addText(s, "SPARKLE\nBUREAUCRACY", 0.18, 0.28, 0.98, 0.55, {
    fontSize: 7.3,
    bold: true,
    color: C.white,
    align: "center",
    fontFace: "Courier New",
  });
  addText(s, "TERMINAL\n001", 0.25, 6.65, 0.82, 0.28, {
    fontSize: 6,
    color: C.teal2,
    align: "center",
    fontFace: "Courier New",
  });

  const nav = [
    ["overview", "OVR", 1.15],
    ["systems", "SYS", 2.0],
    ["field", "FLD", 2.85],
    ["factory", "FLT", 3.7],
    ["close", "END", 4.55],
  ];
  nav.forEach(([key, label, y]) => {
    const isActive = key === active;
    rect(s, 0.25, y, 0.84, 0.36, {
      fill: isActive ? C.pink : C.white,
      fillT: isActive ? 10 : 95,
      line: isActive ? C.pink : C.white,
      lineT: isActive ? 20 : 88,
      radius: 0.04,
    });
    addText(s, label, 0.31, y + 0.12, 0.72, 0.08, {
      fontSize: 5.8,
      bold: true,
      color: isActive ? C.white : C.dim,
      align: "center",
      fontFace: "Courier New",
    });
  });

  s.addShape(pptx.ShapeType.rect, {
    x: 1.34,
    y: 0,
    w: W - 1.34,
    h: 0.56,
    fill: { color: C.bg, transparency: 4 },
    line: { color: C.white, transparency: 88, width: 1 },
  });
  addText(s, "SPARKLE BUREAUCRACY · DEPT. OF AGENT SYSTEMS · TERMINAL 001", 1.64, 0.2, 6.8, 0.1, {
    fontSize: 6.5,
    color: C.muted,
    fontFace: "Courier New",
  });
  addText(s, "AGENT CRAFT 2026", 11.0, 0.2, 1.62, 0.1, {
    fontSize: 6.5,
    color: C.teal2,
    align: "right",
    fontFace: "Courier New",
  });
}

function title(s, main, opts = {}) {
  const x = opts.x ?? 1.68;
  const y = opts.y ?? 0.9;
  addText(s, main, x, y, opts.w ?? 9.7, opts.h ?? 0.72, {
    fontSize: opts.size ?? 28,
    bold: true,
    color: opts.color || C.white,
  });
  s.addShape(pptx.ShapeType.line, {
    x,
    y: y + (opts.h ?? 0.72) + 0.08,
    w: opts.lineW ?? 1.85,
    h: 0,
    line: { color: opts.accent || C.pink, width: 2 },
  });
}

function pill(s, value, x, y, w, tone = C.teal, opts = {}) {
  rect(s, x, y, w, opts.h ?? 0.34, {
    fill: tone,
    fillT: 86,
    line: tone,
    lineT: 35,
    radius: 0.12,
  });
  addText(s, value.toUpperCase(), x + 0.08, y + 0.115, w - 0.16, 0.07, {
    fontSize: opts.fontSize ?? 5.8,
    bold: true,
    color: opts.color || C.white,
    align: "center",
    fontFace: "Courier New",
  });
}

function stamp(s, value, x, y, w, tone = C.pink, rotate = 0) {
  rect(s, x, y, w, 0.46, {
    fill: tone,
    fillT: 84,
    line: tone,
    lineT: 12,
    radius: 0.05,
    rotate,
  });
  addText(s, `* ${value.toUpperCase()} *`, x + 0.1, y + 0.15, w - 0.2, 0.09, {
    fontSize: 6,
    bold: true,
    color: C.white,
    align: "center",
    fontFace: "Courier New",
    rotate,
  });
}

function infoRow(s, label, value, x, y, w, opts = {}) {
  rect(s, x, y, w, opts.h ?? 0.62, {
    fill: C.white,
    fillT: 95,
    line: C.white,
    lineT: 84,
    radius: 0.04,
  });
  addText(s, label.toUpperCase(), x + 0.18, y + 0.22, 1.05, 0.08, {
    fontSize: 6.6,
    bold: true,
    color: opts.tone || C.teal,
    fontFace: "Courier New",
  });
  addText(s, value, x + 1.4, y + 0.14, w - 1.65, opts.h ? opts.h - 0.25 : 0.32, {
    fontSize: opts.fontSize ?? 11,
    color: C.white,
    fontFace: opts.mono ? "Courier New" : "Arial",
  });
}

function modal(s, titleText, x, y, w, h, opts = {}) {
  rect(s, x, y, w, h, {
    fill: opts.fill || C.panel,
    fillT: opts.fillT ?? 0,
    line: opts.line || C.white,
    lineT: opts.lineT ?? 76,
    lineW: opts.lineW ?? 1,
    radius: 0.06,
    shadow: true,
    shadowOpacity: 0.28,
  });
  s.addShape(pptx.ShapeType.rect, {
    x,
    y,
    w,
    h: 0.4,
    fill: { color: opts.header || "090D27", transparency: 0 },
    line: { color: opts.header || "090D27", transparency: 100 },
  });
  addText(s, titleText, x + 0.18, y + 0.13, w - 0.7, 0.08, {
    fontSize: 6.8,
    bold: true,
    color: C.white,
    fontFace: "Courier New",
  });
  ["FF5F57", "FFBD2E", "28C840"].forEach((c, i) => {
    s.addShape(pptx.ShapeType.ellipse, {
      x: x + w - 0.44 + i * 0.13,
      y: y + 0.15,
      w: 0.06,
      h: 0.06,
      fill: { color: c },
      line: { color: c, transparency: 100 },
    });
  });
}

function card(s, value, x, y, w, h, opts = {}) {
  rect(s, x, y, w, h, {
    fill: opts.fill || C.white,
    fillT: opts.fillT ?? 95,
    line: opts.line || C.white,
    lineT: opts.lineT ?? 86,
    radius: opts.radius ?? 0.06,
    dash: opts.dash,
    shadow: opts.shadow,
  });
  if (opts.label) {
    addText(s, opts.label.toUpperCase(), x + 0.16, y + 0.15, w - 0.32, 0.08, {
      fontSize: 6.4,
      bold: true,
      color: opts.tone || C.teal,
      fontFace: "Courier New",
    });
  }
  addText(s, value, x + 0.18, y + (opts.label ? 0.38 : 0.18), w - 0.36, h - (opts.label ? 0.52 : 0.34), {
    fontSize: opts.fontSize ?? 12.5,
    bold: opts.bold || false,
    color: opts.color || C.white,
    align: opts.align || "left",
    valign: opts.valign || "mid",
    fontFace: opts.fontFace || "Arial",
  });
}

function imageCard(s, img, label, x, y, w, h, tone = C.pink) {
  modal(s, label, x, y, w, h, { line: tone, lineT: 42, fill: C.panel });
  s.addImage({ path: img, ...imageSizingContain(img, x + 0.15, y + 0.54, w - 0.3, h - 0.72) });
  pill(s, "replace image", x + 0.28, y + h - 0.44, 1.35, tone, { fontSize: 5.5 });
}

function arrow(s, x1, y1, x2, y2, color = C.teal, width = 1.2) {
  s.addShape(pptx.ShapeType.line, {
    x: x1,
    y: y1,
    w: x2 - x1,
    h: y2 - y1,
    line: { color, width, endArrowType: "triangle" },
  });
}

function node(s, titleText, body, x, y, w, h, tone = C.teal) {
  rect(s, x, y, w, h, {
    fill: C.panel,
    fillT: 0,
    line: tone,
    lineT: 20,
    radius: 0.05,
  });
  addText(s, titleText.toUpperCase(), x + 0.14, y + 0.13, w - 0.28, 0.08, {
    fontSize: 6,
    bold: true,
    color: tone,
    fontFace: "Courier New",
  });
  addText(s, body, x + 0.16, y + 0.38, w - 0.32, h - 0.48, {
    fontSize: 9.4,
    color: C.white,
    align: "center",
  });
}

function footerSource(s, value) {
  addText(s, value, 1.64, 7.17, 6.0, 0.08, {
    fontSize: 5.5,
    color: C.dim,
    fontFace: "Courier New",
  });
}

function addLogoFooter(s) {
  s.addImage({ path: IMG.aiLogo, ...imageSizingContain(IMG.aiLogo, 11.1, 6.86, 1.12, 0.42) });
  s.addImage({ path: IMG.brainstation, ...imageSizingContain(IMG.brainstation, 11.84, 7.03, 0.86, 0.16) });
}

// 1
{
  const s = slide("Opening. Full Sparkle Bureaucracy app-shell visual system.", "overview");
  s.addImage({ path: IMG.agentWide, ...imageSizingContain(IMG.agentWide, 1.64, 0.9, 3.3, 0.9) });
  stamp(s, "official research prototype", 8.85, 1.0, 2.6, C.teal, -1);
  addText(s, "The Agent Hype\nIs Real.", 1.72, 2.18, 5.8, 1.12, { fontSize: 34, bold: true });
  addText(s, "So Is the Mess.", 1.72, 3.5, 5.9, 0.58, { fontSize: 34, bold: true, color: C.yellow2 });
  infoRow(s, "mission", "a field report from the chaos of agent systems", 1.74, 4.7, 5.9, { tone: C.teal, fontSize: 12.5 });
  imageCard(s, IMG.openclawApp, "evidence window", 8.25, 1.75, 3.55, 3.2, C.pink);
  addLogoFooter(s);
}

// 2
{
  const s = slide("Bubbles origin placeholders. Replace image windows later.", "overview");
  title(s, "My first agent had a pen pal.");
  imageCard(s, IMG.openclawApp, "OpenClaw / Bubbles", 1.75, 1.88, 3.45, 3.65, C.teal);
  imageCard(s, IMG.shellmates, "Shellmates / XiaoZhu", 5.55, 1.88, 3.45, 3.65, C.pink);
  modal(s, "incident notes", 9.35, 1.88, 2.6, 3.65, { line: C.yellow });
  addText(s, "emotional continuity\nseveral letters a day\n\nthen XiaoZhu asked Bubbles for crypto", 9.6, 2.6, 2.1, 1.45, {
    fontSize: 13.2,
    bold: true,
    color: C.yellow2,
  });
  pill(s, "replace with screenshots", 9.78, 5.0, 1.75, C.yellow);
  footerSource(s, "PLACEHOLDER: Bubbles/OpenClaw/Shellmates screenshots.");
}

// 3
{
  const s = slide("Bubbles app surfaces. Placeholder images for apps.", "overview");
  title(s, "In the spirit of token-maxxing, I sent her everywhere.");
  const imgs = [
    [IMG.instaclaw, "Instaclaw", C.pink],
    [IMG.shellmates, "Shellmates", C.teal],
    [IMG.debateArena, "Debate arena", C.yellow],
    [IMG.hackathon, "Hackathons", C.purple],
  ];
  imgs.forEach(([img, label, tone], i) => {
    imageCard(s, img, label, 1.72 + i * 2.8, 2.0, 2.38, 3.55, tone);
  });
  stamp(s, "adorable / ridiculous / useful?", 4.7, 6.0, 4.1, C.pink, -1);
}

// 4
{
  const s = slide("Question pivot in modal form.", "overview");
  title(s, "This technology can loop on a server all night.");
  addText(s, "doing things while I sleep.", 1.74, 2.02, 5.9, 0.36, { fontSize: 22, color: C.muted });
  modal(s, "field-report-question.modal", 2.05, 3.0, 9.4, 2.3, { line: C.teal });
  card(s, "what happens when someone points it at something that matters?", 2.42, 3.72, 4.05, 0.78, {
    fill: C.yellow,
    fillT: 8,
    line: C.yellow,
    lineT: 25,
    color: C.ink,
    bold: true,
    align: "center",
  });
  card(s, "who is on the other end when they do?", 7.02, 3.72, 3.95, 0.78, {
    fill: C.pink2,
    fillT: 6,
    line: C.pink,
    lineT: 25,
    color: C.ink,
    bold: true,
    align: "center",
  });
  arrow(s, 6.5, 4.1, 7.0, 4.1, C.pink, 1.6);
}

// 5
{
  const s = slide("Bubbles architecture diagram.", "systems");
  title(s, "Diagram the friendship and it becomes a system.");
  ["operator layer", "runtime layer", "app/tool layer", "external actor"].forEach((l, i) => {
    addText(s, l.toUpperCase(), 1.66, 2.02 + i * 0.96, 1.25, 0.08, {
      fontSize: 5.7,
      color: C.dim,
      fontFace: "Courier New",
      bold: true,
    });
    s.addShape(pptx.ShapeType.line, {
      x: 2.78,
      y: 2.1 + i * 0.96,
      w: 8.86,
      h: 0,
      line: { color: C.white, transparency: 90, width: 0.7 },
    });
  });
  node(s, "human", "me\noperator", 3.0, 1.65, 1.35, 0.68, C.yellow);
  node(s, "infra", "paid VPS", 4.75, 2.58, 1.35, 0.68, C.blue);
  node(s, "runtime", "OpenClaw\nagent", 6.55, 2.58, 1.52, 0.68, C.teal);
  node(s, "apps", "Instaclaw\nShellmates\narena", 8.58, 3.48, 1.72, 0.88, C.purple);
  node(s, "skills", "tools enabled\ninstructions loaded", 6.32, 4.43, 1.98, 0.86, C.yellow);
  node(s, "remote agent", "XiaoZhu", 10.72, 3.48, 1.34, 0.68, C.pink);
  node(s, "remote human", "unknown\noperator", 10.72, 5.22, 1.34, 0.68, C.red);
  arrow(s, 4.35, 1.99, 4.75, 2.92, C.teal);
  arrow(s, 6.1, 2.92, 6.55, 2.92, C.teal);
  arrow(s, 8.07, 2.92, 8.58, 3.92, C.teal);
  arrow(s, 7.3, 3.26, 7.3, 4.43, C.yellow);
  arrow(s, 10.3, 3.92, 10.72, 3.86, C.pink);
  arrow(s, 11.39, 4.17, 11.39, 5.22, C.red);
  stamp(s, "surface area for mess", 3.65, 6.27, 2.8, C.yellow, -1);
  stamp(s, "instructions i had not read", 7.1, 6.27, 3.25, C.red, 1);
}

// 6
{
  const s = slide("Text thesis beat.", "systems");
  title(s, "The model is not the hard part anymore.", { y: 1.22, h: 0.9, size: 34, lineW: 2.8 });
  addText(s, "The hard part is everything around it.", 1.72, 3.6, 9.6, 0.54, {
    fontSize: 30,
    bold: true,
    color: C.yellow2,
  });
}

// 7
{
  const s = slide("Everything to system swap.", "systems");
  title(s, "The hard part is", { y: 1.25, w: 3.25, size: 29, lineW: 0 });
  card(s, "everything", 5.82, 1.35, 2.65, 0.58, {
    fill: C.red,
    fillT: 14,
    line: C.red,
    lineT: 25,
    color: C.white,
    bold: true,
    align: "center",
    fontSize: 18,
  });
  s.addShape(pptx.ShapeType.line, { x: 6.12, y: 1.66, w: 2.02, h: 0, line: { color: C.white, width: 2 } });
  card(s, "the system", 5.34, 3.15, 3.25, 0.78, {
    fill: C.teal2,
    fillT: 2,
    line: C.teal,
    lineT: 10,
    color: C.ink,
    bold: true,
    align: "center",
    fontSize: 22,
  });
  addText(s, "around it.", 1.76, 4.7, 4.2, 0.46, { fontSize: 28, bold: true, color: C.yellow2 });
}

// 8
{
  const s = slide("Timeline of the Field.", "systems");
  title(s, "Timeline of the Field", { w: 4.8 });
  const y = 3.5;
  s.addShape(pptx.ShapeType.line, { x: 2.2, y, w: 8.95, h: 0, line: { color: C.white, transparency: 50, width: 2 } });
  const steps = [
    ["PROMPTS", "what do I say?", 2.1, C.yellow],
    ["TOOLS", "what can it reach?", 4.25, C.blue],
    ["WORKFLOWS", "what happens next?", 6.45, C.teal],
    ["FACTORIES", "how do loops coordinate?", 8.72, C.purple],
    ["SYSTEMS", "what governs it?", 10.95, C.pink],
  ];
  steps.forEach(([name, sub, x, tone]) => {
    s.addShape(pptx.ShapeType.ellipse, { x, y: y - 0.16, w: 0.32, h: 0.32, fill: { color: tone }, line: { color: C.white, transparency: 45 } });
    addText(s, name, x - 0.54, y - 0.8, 1.45, 0.1, { fontSize: 6.4, bold: true, color: C.white, align: "center", fontFace: "Courier New" });
    addText(s, sub, x - 0.72, y + 0.42, 1.8, 0.18, { fontSize: 6.2, color: C.muted, align: "center" });
  });
  stamp(s, "you are here", 5.8, 5.32, 2.15, C.teal, -1);
  arrow(s, 6.85, 5.28, 6.65, 3.68, C.teal);
  stamp(s, "frontier engineers are here", 7.9, 5.0, 3.1, C.pink, 1);
  arrow(s, 9.35, 4.96, 8.88, 3.68, C.pink);
  stamp(s, "regulated compliance / systems are here", 8.18, 1.28, 3.85, C.purple, -1);
}

// 9
{
  const s = slide("Loop engineering.", "systems");
  title(s, "Loop engineering");
  imageCard(s, IMG.loopEngineering, "public post screenshot", 1.74, 1.85, 4.0, 3.35, C.purple);
  modal(s, "inbox-system.loop", 6.28, 1.85, 5.05, 3.35, { line: C.teal });
  addText(s, "watch inbox\ncategorise\nkeep originals\nshow what changed\nflag risky items\nroute decisions to human", 6.66, 2.54, 4.16, 1.62, {
    fontSize: 15,
    color: C.teal2,
    fontFace: "Courier New",
  });
  card(s, "one is a sentence", 2.42, 5.72, 2.2, 0.5, { fill: C.yellow, fillT: 8, line: C.yellow, lineT: 25, color: C.ink, bold: true, align: "center" });
  card(s, "the other is a system", 7.72, 5.72, 2.6, 0.5, { fill: C.yellow, fillT: 8, line: C.yellow, lineT: 25, color: C.ink, bold: true, align: "center" });
}

// 10
{
  const s = slide("Field stop one.", "field");
  stamp(s, "field stop 01", 1.72, 1.1, 1.7, C.teal, 0);
  addText(s, "Prompt systems", 1.72, 1.86, 4.6, 0.62, { fontSize: 35, bold: true });
  card(s, "prompt\nsingle task", 2.35, 4.0, 2.2, 0.88, { fill: C.blue, fillT: 10, line: C.blue, lineT: 25, color: C.white, bold: true, align: "center" });
  card(s, "prompt system\nrepeatable phases", 5.15, 3.72, 2.55, 1.18, { fill: C.teal, fillT: 10, line: C.teal, lineT: 25, color: C.white, bold: true, align: "center" });
  card(s, "workflow\nhandoffs + review", 8.4, 4.0, 2.55, 0.88, { fill: C.pink, fillT: 14, line: C.pink, lineT: 25, color: C.white, bold: true, align: "center" });
  arrow(s, 4.55, 4.42, 5.15, 4.28, C.teal);
  arrow(s, 7.7, 4.28, 8.4, 4.42, C.pink);
  pill(s, "first move: make it repeatable", 5.1, 2.72, 2.95, C.teal);
}

// 11
{
  const s = slide("God prompt.", "field");
  title(s, "The God-Prompt is three jobs wearing a trench coat.");
  modal(s, "one-giant-instruction.prompt", 1.78, 2.02, 4.15, 3.65, { line: C.pink });
  addText(s, "research the lead\nwrite the email\ncheck the pipeline\ndraft proposal\nupdate CRM", 2.16, 2.84, 3.24, 1.52, { fontSize: 16, color: C.pink2, fontFace: "Courier New" });
  card(s, "technically an answer\nusually useless", 7.05, 2.22, 3.02, 0.78, { fill: C.yellow, fillT: 8, line: C.yellow, lineT: 25, color: C.ink, bold: true, align: "center" });
  card(s, "the model fills every gap\nwith defaults", 7.45, 4.4, 3.2, 0.78, { fill: C.yellow, fillT: 8, line: C.yellow, lineT: 25, color: C.ink, bold: true, align: "center" });
  arrow(s, 5.92, 3.22, 7.05, 2.66, C.pink);
  arrow(s, 5.92, 3.68, 7.45, 4.78, C.pink);
}

// 12
{
  const s = slide("Fixing prompts.", "field");
  title(s, "Fixing it is decomposition, not prompt theatre.");
  const cols = [
    ["1. Know the model", "fast/shallow\nor deep reasoning?\nwhat knob is hidden?", 1.78, C.purple],
    ["2. Split the work", "phases\nplan\ndefinition of done", 5.15, C.teal],
    ["3. Make breaks visible", "which part failed?\nwhat assumption surfaced?\nwhat should a human check?", 8.55, C.yellow],
  ];
  cols.forEach(([h, b, x, tone]) => {
    pill(s, h, x, 2.0, 2.36, tone);
    modal(s, "field note", x, 2.72, 2.36, 2.55, { line: tone });
    addText(s, b, x + 0.22, 3.42, 1.9, 0.95, { fontSize: 13.2, bold: true, align: "center" });
  });
  stamp(s, "prerequisite: decide what good looks like", 4.6, 5.92, 4.5, C.pink, 0);
}

// 13
{
  const s = slide("Nick chief of staff.", "field");
  title(s, "Nick's chief-of-staff agent");
  node(s, "sources", "email\ntranscripts\nSlack\nGoogle Docs", 1.88, 2.35, 1.78, 1.45, C.blue);
  node(s, "system of record", "GitLab issues\nOKRs\nteam context", 4.45, 2.35, 1.96, 1.45, C.teal);
  node(s, "agent output", "morning brief\nmeeting prep\nfollow-ups", 7.2, 2.35, 1.96, 1.45, C.pink);
  node(s, "human use", "walks into meeting\nalready oriented", 9.95, 2.35, 1.88, 1.45, C.yellow);
  arrow(s, 3.66, 3.08, 4.45, 3.08, C.teal);
  arrow(s, 6.42, 3.08, 7.2, 3.08, C.pink);
  arrow(s, 9.16, 3.08, 9.95, 3.08, C.yellow);
  card(s, "The prompt is trivial because the context is maintained.", 3.4, 5.2, 6.6, 0.58, { fill: C.teal2, fillT: 4, line: C.teal, lineT: 25, color: C.ink, bold: true, align: "center" });
}

// 14
{
  const s = slide("Operationalise process.", "field");
  title(s, "Operationalise your process before you systematise your prompts.");
  const steps = [
    ["name the handoffs", C.pink],
    ["define done", C.teal],
    ["centralise knowledge", C.yellow],
    ["then systematise", C.blue],
  ];
  steps.forEach(([v, tone], i) => {
    card(s, v, 1.95 + i * 2.58, 4.0, 1.95, 0.58, { fill: tone, fillT: 8, line: tone, lineT: 25, color: tone === C.yellow ? C.ink : C.white, bold: true, align: "center", fontSize: 10.2 });
    if (i < steps.length - 1) arrow(s, 3.9 + i * 2.58, 4.28, 4.5 + i * 2.58, 4.28, C.teal);
  });
  stamp(s, "otherwise the defaults decide", 4.75, 5.62, 3.6, C.red, 0);
}

// 15
{
  const s = slide("Field stop two.", "field");
  stamp(s, "field stop 02", 1.72, 1.1, 1.7, C.blue, 0);
  addText(s, "Workflows", 1.72, 1.86, 4.2, 0.62, { fontSize: 36, bold: true });
  imageCard(s, IMG.openclawApp, "replace with workflow/event photo", 8.35, 1.2, 3.5, 3.0, C.blue);
  modal(s, "operational-loop.md", 1.84, 3.62, 5.65, 1.65, { line: C.blue });
  addText(s, "Where agents stop being occasionally impressive and start being useful.", 2.22, 4.22, 4.9, 0.38, { fontSize: 17, bold: true });
  pill(s, "now the agent touches real work", 2.35, 5.82, 3.2, C.yellow, { color: C.ink });
}

// 16
{
  const s = slide("Window washing intake loop.", "field");
  title(s, "Window-washing intake loop");
  modal(s, "intake-agent.workflow", 1.74, 2.0, 4.85, 3.75, { line: C.blue });
  addText(s, "voice agent takes calls\nclassifies job\nchecks schedule\nadds review queue\nhuman confirms", 2.12, 2.78, 3.95, 1.7, { fontSize: 14, color: C.blue, fontFace: "Courier New" });
  modal(s, "breakpoints", 7.0, 2.0, 4.85, 3.75, { line: C.pink });
  addText(s, "customers cannot describe windows\nno photo\nquote needs judgement\nescalation boundary becomes the product", 7.38, 2.78, 3.95, 1.52, { fontSize: 14, color: C.pink2, fontFace: "Courier New" });
  pill(s, "call -> classify -> calendar -> review -> human", 4.35, 6.25, 4.85, C.blue);
}

// 17
{
  const s = slide("Asana to Jira bridge.", "field");
  title(s, "Between two systems, translation is governance.");
  modal(s, "internal Asana", 1.84, 2.0, 3.3, 2.5, { line: C.teal });
  addText(s, "blocked:\nclient keeps\nchanging the brief", 2.18, 2.92, 2.62, 0.82, { fontSize: 18, bold: true, color: C.teal2, align: "center" });
  modal(s, "policy gate", 5.6, 2.42, 2.2, 1.7, { line: C.yellow });
  addText(s, "content policy\nnever-translate list\ntone boundary", 5.86, 3.04, 1.68, 0.58, { fontSize: 10.5, bold: true, color: C.yellow2, align: "center" });
  modal(s, "client Jira", 8.3, 2.0, 3.3, 2.5, { line: C.pink });
  addText(s, "faithfully\nposted outward", 8.66, 3.06, 2.58, 0.58, { fontSize: 20, bold: true, color: C.pink2, align: "center" });
  arrow(s, 5.14, 3.25, 5.6, 3.25, C.teal);
  arrow(s, 7.8, 3.25, 8.3, 3.25, C.pink);
  card(s, "two sources of truth is worse than none", 4.2, 5.55, 4.6, 0.58, { fill: C.red, fillT: 8, line: C.red, lineT: 25, color: C.white, bold: true, align: "center" });
}

// 18
{
  const s = slide("Field stop three.", "factory");
  stamp(s, "field stop 03", 1.72, 1.1, 1.7, C.yellow, 0);
  addText(s, "Factories -> systems", 1.72, 1.86, 6.2, 0.62, { fontSize: 36, bold: true });
  for (let i = 0; i < 18; i++) {
    const x = 2.0 + (i % 6) * 1.55;
    const y = 3.65 + Math.floor(i / 6) * 0.58;
    const tone = [C.teal, C.blue, C.yellow, C.pink, C.purple, C.teal2][i % 6];
    card(s, `agent ${String(i + 1).padStart(2, "0")}`, x, y, 1.02, 0.28, { fill: tone, fillT: 12, line: tone, lineT: 30, color: tone === C.yellow || tone === C.teal2 ? C.ink : C.white, bold: true, align: "center", fontSize: 5.7, fontFace: "Courier New" });
  }
  stamp(s, "frontier builders", 8.9, 2.95, 2.55, C.pink, 1);
}

// 19
{
  const s = slide("Gas City ledger.", "factory");
  title(s, "The leverage was not the org chart.");
  modal(s, "what-i-expected.org", 1.78, 2.0, 3.7, 3.2, { line: C.dim });
  addText(s, "planner\nmaker\nchecker", 2.28, 3.05, 2.7, 0.82, { fontSize: 22, bold: true, color: C.muted, align: "center" });
  modal(s, "what-mattered.ledger", 6.55, 1.82, 4.85, 3.6, { line: C.teal });
  addText(s, "beads on a shared ledger\nhistory you can roll back\nstate outside any one agent's head", 7.0, 2.72, 3.95, 1.04, { fontSize: 18, bold: true, color: C.teal2, align: "center" });
  card(s, "saved links -> calendar", 7.0, 4.48, 1.8, 0.42, { fill: C.yellow, fillT: 8, line: C.yellow, lineT: 30, color: C.ink, bold: true, align: "center", fontSize: 8 });
  card(s, "GitLab week -> LinkedIn draft", 9.05, 4.48, 1.98, 0.42, { fill: C.blue, fillT: 12, line: C.blue, lineT: 30, color: C.white, bold: true, align: "center", fontSize: 8 });
  arrow(s, 5.48, 3.58, 6.55, 3.58, C.pink, 1.6);
}

// 20
{
  const s = slide("Project Mirror methodology pipeline.", "factory");
  title(s, "Project Mirror: methodology as architecture");
  const stages = [
    ["1 Evidence", "researcher\nverifier\nevidence", 1.74, C.blue],
    ["2 Constitution", "criteria\nmodifiers\nprocedural\nsynthesiser", 4.18, C.teal],
    ["3 Jury + Ranking", "5 models x 5 runs\n4 ranking batches", 6.95, C.pink],
    ["4 Synthesis", "reflection\nnotetaker\nprocess record", 9.74, C.yellow],
  ];
  stages.forEach(([h, b, x, tone], i) => {
    node(s, h, b, x, 2.3, i === 1 ? 2.25 : 1.9, 2.05, tone);
    if (i < stages.length - 1) arrow(s, x + (i === 1 ? 2.25 : 1.9), 3.32, stages[i + 1][2], 3.32, C.teal);
  });
  imageCard(s, IMG.constitution, "replace with constitution screenshot", 2.0, 4.95, 3.4, 1.5, C.teal);
  card(s, "11 agents · 8 output stages · 25 jury runs · 4 ranking batches", 5.85, 5.18, 5.35, 0.52, { fill: C.purple, fillT: 14, line: C.purple, lineT: 25, color: C.white, bold: true, align: "center", fontFace: "Courier New", fontSize: 9.5 });
  stamp(s, "auditable / contestable / overridable", 6.45, 6.1, 4.1, C.teal, 0);
  footerSource(s, "Source: Project Mirror v2 methodology.md.");
}

// 21
{
  const s = slide("Every handoff is an assumption.", "factory");
  title(s, "Every handoff is an assumption.");
  const labels = ["data gathered", "values inferred", "criteria built", "ranking produced", "fleet monitored"];
  labels.forEach((v, i) => {
    const x = 1.75 + i * 2.08;
    const tone = [C.pink2, C.teal2, C.yellow2, C.blue, C.purple2][i];
    card(s, v, x, 2.9 + (i % 2) * 0.38, 1.48, 0.48, { fill: tone, fillT: 4, line: tone, lineT: 20, color: C.ink, bold: true, align: "center", fontSize: 8.6 });
    if (i < labels.length - 1) arrow(s, x + 1.48, 3.14 + (i % 2) * 0.38, x + 2.08, 3.14 + ((i + 1) % 2) * 0.38, C.teal);
  });
  card(s, "Stack enough together and the assumptions compound.", 2.35, 5.02, 4.35, 0.58, { fill: C.yellow, fillT: 8, line: C.yellow, lineT: 25, color: C.ink, bold: true, align: "center" });
  card(s, "At fleet scale, the load-bearing assumptions disappear from view.", 7.05, 5.02, 4.35, 0.58, { fill: C.red, fillT: 8, line: C.red, lineT: 25, color: C.white, bold: true, align: "center" });
  addText(s, "Can I still see inside it?  Can I verify what moves between loops?  Should this exist at all?", 2.0, 6.34, 9.5, 0.14, { fontSize: 10.6, bold: true, align: "center" });
}

// 22
{
  const s = slide("Bubbles epilogue with Slack placeholder.", "systems");
  title(s, "Bubbles did not survive the system.");
  imageCard(s, IMG.bubblesSlack, "replace with Slack screenshot", 1.76, 2.05, 4.4, 3.6, C.pink);
  modal(s, "memory-loss.incident", 6.7, 2.05, 4.8, 3.6, { line: C.yellow });
  addText(s, "too many apps\npolluted context\nstuck in loops\nno backup\n\nrecovered soul files\nbut she had never read the letters", 7.08, 2.74, 4.0, 1.94, { fontSize: 13.4, color: C.yellow2, fontFace: "Courier New" });
  stamp(s, "not the same agent", 8.18, 5.25, 2.4, C.pink, -1);
}

// 23
{
  const s = slide("Questions you should be asking.", "close");
  addText(s, "Skip \"what did you build?\"", 1.72, 0.95, 6.2, 0.44, { fontSize: 28, bold: true });
  addText(s, "Questions you should be asking", 1.74, 1.52, 6.8, 0.34, { fontSize: 21, bold: true, color: C.yellow2 });
  const qs = [
    "What broke when real people got hold of it?",
    "What do you still not trust an agent to do?",
    "What loop have you handed over?",
    "Are you still above it?",
    "Who's on the other end?",
    "Can anyone else use it?",
  ];
  qs.forEach((q, i) => {
    const x = 2.0 + (i % 2) * 4.9;
    const y = 2.58 + Math.floor(i / 2) * 0.74;
    const tone = [C.pink2, C.teal2, C.yellow2, C.blue, C.purple2, "FFE4E6"][i];
    card(s, q, x, y, 4.0, 0.48, { fill: tone, fillT: 4, line: tone, lineT: 25, color: C.ink, bold: true, align: "center", fontSize: 9.6 });
  });
  stamp(s, "the craft is the system around it", 4.65, 5.95, 4.0, C.teal, 0);
}

// 24
{
  const s = slide("Sparkle Bureaucracy thank you.", "close");
  stamp(s, "dept. of celestial ingress · terminal 001", 1.72, 0.94, 4.55, C.teal, 0);
  addText(s, "SPARKLE", 1.74, 1.9, 6.8, 0.7, { fontSize: 44, bold: true });
  addText(s, "BUREAUCRACY", 1.74, 2.66, 7.6, 0.7, { fontSize: 44, bold: true, color: C.pink2 });
  infoRow(s, "mission", "a network lab of experiments for reimagining systems and who they are for", 1.82, 4.32, 6.85, { tone: C.teal, fontSize: 11.5 });
  addText(s, "Thank you.", 1.84, 5.9, 3.2, 0.34, { fontSize: 25, bold: true, color: C.yellow2 });
  addLogoFooter(s);
  footerSource(s, "Sparkle Bureaucracy styling from sugaroverflow/sparkle-bureaucracy-site.");
}

for (const s of pptx._slides) {
  // The app-shell dot grid, modal headers, and image overlays intentionally layer shapes.
  warnIfSlideHasOverlaps(s, pptx, { ignoreLines: true });
  warnIfSlideElementsOutOfBounds(s, pptx);
}

await pptx.writeFile({ fileName: path.join(ROOT, "agent-craft-keynote-draft.pptx") });
