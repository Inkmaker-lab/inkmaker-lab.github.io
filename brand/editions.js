// InkMaker Lab — le edizioni mostrate sul sito (pagina principale e pagina di installazione).
// status: "soon" = in arrivo (pulsanti spenti), "ready" = installabile.
// Per pubblicare un'edizione: status "ready", i file in firmware/<id>-<lingua>/ e i due manifest-<id>-<lingua>.json.
window.IM_DEVICES = [
  { id: "x3", name: "Xteink X3", status: "ready" },
  { id: "x4", name: "Xteink X4", status: "soon" }
];
window.IM_EDITIONS = [
  { id: "dungeon", name: "Dungeon", status: "soon", art: "img/drago.png",
    line: "Every book is a boss to beat. A sarcastic System AI keeps the score, and a pet grows as you read." },
  { id: "cats", name: "Cats", status: "soon", art: "img/gatto.png",
    line: "You live with a cat now. It talks, it judges your reading, and it sleeps next to a ball of yarn." },
  { id: "garden", name: "Garden", status: "soon", art: "img/pianta.png",
    line: "Your reading grows a plant. Calm, gentle, and it never tells you off." },
  { id: "copilot", name: "Copilot", status: "soon", art: "svg:core",
    line: "A dry, polite assistant you name yourself, and an energy core that charges with every page." },
  { id: "desktop", name: "Desktop", status: "soon", art: "svg:disk",
    line: "An 80s computer desktop: striped windows, a disk with a face, and very serious alert boxes." },
  { id: "arcade", name: "Arcade", status: "soon", art: "svg:level",
    line: "Your book as a platform level. Blocks, coins, clouds, and a flag at the end." }
];
window.IM_ART = {
  core: '<svg viewBox="0 0 150 150" role="img" aria-label=""><circle cx="75" cy="75" r="68" fill="none" stroke="#141414" stroke-width="3" stroke-dasharray="6 5"/><circle cx="75" cy="75" r="56" fill="none" stroke="#141414" stroke-width="10" stroke-dasharray="246 106" transform="rotate(-90 75 75)"/><circle cx="75" cy="75" r="40" fill="none" stroke="#141414" stroke-width="2"/><polygon points="75,49 97.5,62 97.5,88 75,101 52.5,88 52.5,62" fill="none" stroke="#141414" stroke-width="5"/><rect x="67" y="67" width="16" height="16" fill="#141414"/></svg>',
  disk: '<svg viewBox="0 0 118 124" role="img" aria-label=""><path d="M4 4 H98 L114 20 V120 H4 Z" fill="#FBFAF6" stroke="#141414" stroke-width="4"/><rect x="26" y="4" width="52" height="34" fill="#141414"/><rect x="58" y="9" width="12" height="24" fill="#FBFAF6"/><rect x="18" y="54" width="82" height="58" fill="#FBFAF6" stroke="#141414" stroke-width="3"/><rect x="40" y="68" width="6" height="12" fill="#141414"/><rect x="72" y="68" width="6" height="12" fill="#141414"/><path d="M40 92 Q59 106 78 92" fill="none" stroke="#141414" stroke-width="4" stroke-linecap="round"/></svg>',
  level: '<svg viewBox="0 0 160 124" role="img" aria-label=""><g fill="none" stroke="#141414" stroke-width="3"><path d="M18 34 q8 -14 22 -8 q10 -10 22 0 q12 -2 12 10 H18 Z" fill="#FBFAF6"/><rect x="58" y="58" width="22" height="22" fill="#FBFAF6"/><rect x="80" y="58" width="22" height="22" fill="#FBFAF6"/><path d="M0 104 H160 V124 H0 Z" fill="#141414"/><path d="M136 104 V30"/><path d="M136 32 L112 42 L136 52 Z" fill="#141414"/></g><circle cx="69" cy="42" r="8" fill="#FBFAF6" stroke="#141414" stroke-width="3"/><path d="M69 37 V47" stroke="#141414" stroke-width="3"/><g fill="#141414"><rect x="64" y="64" width="4" height="4"/><rect x="72" y="72" width="4" height="4"/><rect x="86" y="64" width="4" height="4"/><rect x="94" y="72" width="4" height="4"/><rect x="26" y="88" width="14" height="16"/><rect x="29" y="80" width="8" height="8"/></g></svg>'
};
