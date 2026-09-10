export function RahatVisual() {
  return (
    <div className="project-visual map-visual" aria-hidden="true">
      <div className="map-label">Bengaluru evacuation graph</div>
      <div className="map-node node-a" />
      <div className="map-node node-b" />
      <div className="map-node node-c" />
      <div className="map-node node-d" />
      <svg viewBox="0 0 560 360" className="absolute inset-0 h-full w-full">
        <path className="soft-road" d="M46 244 C132 206 154 112 254 132 C340 149 336 68 474 84" />
        <path className="soft-road" d="M96 82 C176 146 236 224 348 210 C426 202 464 264 518 318" />
        <path className="route-line" d="M62 260 C154 220 190 162 264 154 C350 144 378 104 488 92" />
      </svg>
      <div className="risk-panel">
        <span>risk</span>
        <strong>0.82</strong>
      </div>
      <div className="approval-panel">pending review</div>
    </div>
  );
}

export function OsProVisual() {
  const rows = [
    ["P1", "span 5 / span 8", "bg-green"],
    ["P2", "span 3 / span 5", "bg-vermilion"],
    ["P3", "span 7 / span 4", "bg-ink dark:bg-ivory"],
  ];

  return (
    <div className="project-visual scheduler-visual" aria-hidden="true">
      <div className="visual-kicker">round robin preview</div>
      <div className="scheduler-grid">
        {rows.map(([label, column, color]) => (
          <div className="scheduler-row" key={label}>
            <span>{label}</span>
            <div className="timeline">
              <div className={`process-bar ${color}`} style={{ gridColumn: column }} />
            </div>
          </div>
        ))}
      </div>
      <div className="memory-strip">
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} className={index % 3 === 0 ? "active" : ""} />
        ))}
      </div>
    </div>
  );
}

export function SchemaVisual() {
  return (
    <div className="project-visual schema-visual" aria-hidden="true">
      <div className="fd-chip chip-a">A, B -&gt; C</div>
      <div className="fd-chip chip-b">C -&gt; D</div>
      <div className="fd-chip chip-c">D -&gt; E</div>
      <svg viewBox="0 0 560 360" className="absolute inset-0 h-full w-full">
        <path className="schema-link" d="M122 102 C196 80 252 116 310 168" />
        <path className="schema-link" d="M322 184 C372 224 406 230 466 270" />
        <path className="schema-link muted" d="M142 260 C238 228 292 248 392 118" />
      </svg>
      <div className="schema-tree">
        <span>1NF</span>
        <span>2NF</span>
        <span>3NF</span>
        <span>BCNF</span>
      </div>
    </div>
  );
}
