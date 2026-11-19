// InkMaker Lab — le edizioni mostrate sul sito (pagina principale e pagina di installazione).
// status: "soon" = in arrivo (pulsanti spenti), "ready" = installabile.
// Per pubblicare un'edizione: status "ready", i file in firmware/<id>-<lingua>/ e i due manifest-<id>-<lingua>.json.
window.IM_DEVICES = [
  { id: "x3", name: "Xteink X3", status: "ready" },
  { id: "x4", name: "Xteink X4", status: "soon" }
];
window.IM_EDITIONS = [
  { id: "dungeon", name: "Dungeon", status: "soon", art: "img/drago.png",
    line: "Every book is a boss to beat. Pick a dragon, a dinosaur or an owl, name it and watch it grow as you read, while a sarcastic System AI keeps the score." },
  { id: "cats", name: "Cats", status: "soon", art: "img/gatto.png",
    line: "Pick your cat: grey, tabby, or black and white. It talks to you in first person, judges your reading and naps next to a ball of yarn." },
  { id: "garden", name: "Garden", status: "soon", art: "img/pianta.png",
    line: "A little plant in a terracotta pot that grows as you read. A calm almanac voice, a garden shed page with weather and small chores, and it never tells you off." },
  { id: "copilot", name: "Copilot", status: "soon", art: "svg:core",
    line: "An on-board instrument, white on black: a big dial with your book and its arrival time, and a dry, polite assistant you name yourself." },
  { id: "desktop", name: "Desktop", status: "soon", art: "svg:disk",
    line: "An old computer desktop: striped windows, a floppy disk with a face, and the reader's menus in a menu bar on top." },
  { id: "arcade", name: "Arcade", status: "soon", art: "img/arcade_ninja.png",
    line: "Your book is a platform level and a small ninja runs to the flag as you read. Plus Star Run, a mini-game of a hundred levels where reading earns you lives." }
];
window.IM_ART = {
  core: '<svg viewBox="0 0 150 150" role="img" aria-label=""><circle cx="75" cy="75" r="68" fill="none" stroke="#141414" stroke-width="3" stroke-dasharray="6 5"/><circle cx="75" cy="75" r="56" fill="none" stroke="#141414" stroke-width="10" stroke-dasharray="246 106" transform="rotate(-90 75 75)"/><circle cx="75" cy="75" r="40" fill="none" stroke="#141414" stroke-width="2"/><polygon points="75,49 97.5,62 97.5,88 75,101 52.5,88 52.5,62" fill="none" stroke="#141414" stroke-width="5"/><rect x="67" y="67" width="16" height="16" fill="#141414"/></svg>',
  disk: '<svg viewBox="0 0 118 124" role="img" aria-label=""><path d="M4 4 H98 L114 20 V120 H4 Z" fill="#FBFAF6" stroke="#141414" stroke-width="4"/><rect x="26" y="4" width="52" height="34" fill="#141414"/><rect x="58" y="9" width="12" height="24" fill="#FBFAF6"/><rect x="18" y="54" width="82" height="58" fill="#FBFAF6" stroke="#141414" stroke-width="3"/><rect x="40" y="68" width="6" height="12" fill="#141414"/><rect x="72" y="68" width="6" height="12" fill="#141414"/><path d="M40 92 Q59 106 78 92" fill="none" stroke="#141414" stroke-width="4" stroke-linecap="round"/></svg>',
  level: '<svg viewBox="0 0 160 124" role="img" aria-label=""><g fill="none" stroke="#141414" stroke-width="3"><path d="M18 34 q8 -14 22 -8 q10 -10 22 0 q12 -2 12 10 H18 Z" fill="#FBFAF6"/><rect x="58" y="58" width="22" height="22" fill="#FBFAF6"/><rect x="80" y="58" width="22" height="22" fill="#FBFAF6"/><path d="M0 104 H160 V124 H0 Z" fill="#141414"/><path d="M136 104 V30"/><path d="M136 32 L112 42 L136 52 Z" fill="#141414"/></g><circle cx="69" cy="42" r="8" fill="#FBFAF6" stroke="#141414" stroke-width="3"/><path d="M69 37 V47" stroke="#141414" stroke-width="3"/><g fill="#141414"><rect x="64" y="64" width="4" height="4"/><rect x="72" y="72" width="4" height="4"/><rect x="86" y="64" width="4" height="4"/><rect x="94" y="72" width="4" height="4"/><rect x="26" y="88" width="14" height="16"/><rect x="29" y="80" width="8" height="8"/></g></svg>'
};
