![CodeBattle](<svg width="1400" height="420" viewBox="0 0 1400 420"
     xmlns="http://www.w3.org/2000/svg">

  <!-- DEFINITIONS -->
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000"/>
      <stop offset="100%" stop-color="#120000"/>
    </linearGradient>

    <!-- Red Glow -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Red Wave Gradient -->
    <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff1a1a" stop-opacity="0"/>
      <stop offset="50%" stop-color="#ff1a1a" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#ff1a1a" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- BACKGROUND -->
  <rect width="1400" height="420" rx="28" fill="url(#bg)"/>

  <!-- CODE TEXT (LEFT) -->
  <text x="60" y="110" fill="#ff1a1a55" font-size="22" font-family="monospace">
    &lt;div class="battle"&gt;
  </text>
  <text x="60" y="140" fill="#ff1a1a55" font-size="22" font-family="monospace">
    fight.solve.repeat();
  </text>
  <text x="60" y="170" fill="#ff1a1a55" font-size="22" font-family="monospace">
    &lt;/div&gt;
  </text>

  <!-- CENTER TITLE -->
  <text x="700" y="210"
        text-anchor="middle"
        font-size="72"
        font-weight="800"
        fill="#ffffff"
        font-family="Poppins, Arial, sans-serif"
        filter="url(#glow)">
    CodeBattle
  </text>

  <!-- SUBTITLE -->
  <text x="700" y="255"
        text-anchor="middle"
        font-size="30"
        fill="#ff1a1a"
        font-family="Inter, Arial, sans-serif">
    Real-Time Competitive Coding
  </text>

  <!-- TECH STACK -->
  <text x="700" y="295"
        text-anchor="middle"
        font-size="22"
        fill="#ffffffcc"
        font-family="monospace">
    HTML • CSS • JavaScript
  </text>

  <!-- RED WAVE -->
  <path d="M0 330 C 300 300, 600 360, 900 330 S 1200 300, 1400 330"
        stroke="url(#wave)"
        stroke-width="6"
        fill="none"/>

  <!-- LEFT LOGO (REACT ATOM STYLE) -->
  <g transform="translate(980,140) scale(1.1)" stroke="#ff1a1a" fill="none" filter="url(#glow)">
    <ellipse cx="0" cy="0" rx="38" ry="14" stroke-width="3"/>
    <ellipse cx="0" cy="0" rx="38" ry="14" stroke-width="3" transform="rotate(60)"/>
    <ellipse cx="0" cy="0" rx="38" ry="14" stroke-width="3" transform="rotate(-60)"/>
    <circle cx="0" cy="0" r="6" fill="#ff1a1a"/>
  </g>

  <!-- RIGHT LOGO (CODE MONITOR) -->
  <g transform="translate(1100,120)" stroke="#ff1a1a" stroke-width="4" fill="none" filter="url(#glow)">
    <rect x="0" y="0" rx="10" ry="10" width="120" height="80"/>
    <text x="60" y="52" text-anchor="middle" font-size="34" fill="#ff1a1a"
          font-family="monospace">&lt;/&gt;</text>
    <line x1="45" y1="88" x2="75" y2="88"/>
    <line x1="60" y1="88" x2="60" y2="105"/>
  </g>

  <!-- NAME & ROLE -->
  <text x="1160" y="245"
        text-anchor="middle"
        font-size="32"
        fill="#ffffff"
        font-weight="600"
        font-family="Inter, Arial, sans-serif">
    Abdul Moid
  </text>

  <text x="1160" y="278"
        text-anchor="middle"
        font-size="20"
        fill="#ff1a1a"
        font-family="Inter, Arial, sans-serif">
    Frontend Developer
  </text>

</svg>
)
