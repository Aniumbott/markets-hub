"use client";

export function BidAskDiagram() {
  return (
    <svg viewBox="0 0 600 220" className="w-full max-w-xl mx-auto" role="img" aria-label="Bid-ask spread diagram">
      <defs>
        <linearGradient id="bidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--up)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--up)" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="askGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--down)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--down)" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Bid side bars */}
      <rect x="20" y="40" width="220" height="22" rx="3" fill="url(#bidGrad)" />
      <rect x="20" y="70" width="160" height="22" rx="3" fill="url(#bidGrad)" opacity="0.7" />
      <rect x="20" y="100" width="190" height="22" rx="3" fill="url(#bidGrad)" opacity="0.7" />
      <rect x="20" y="130" width="120" height="22" rx="3" fill="url(#bidGrad)" opacity="0.5" />
      <rect x="20" y="160" width="80" height="22" rx="3" fill="url(#bidGrad)" opacity="0.4" />

      {/* Ask side bars */}
      <rect x="360" y="40" width="220" height="22" rx="3" fill="url(#askGrad)" />
      <rect x="420" y="70" width="160" height="22" rx="3" fill="url(#askGrad)" opacity="0.7" />
      <rect x="390" y="100" width="190" height="22" rx="3" fill="url(#askGrad)" opacity="0.7" />
      <rect x="460" y="130" width="120" height="22" rx="3" fill="url(#askGrad)" opacity="0.5" />
      <rect x="500" y="160" width="80" height="22" rx="3" fill="url(#askGrad)" opacity="0.4" />

      {/* Bid labels */}
      <text x="245" y="56" textAnchor="end" className="fill-[var(--ink)] font-sans" fontSize="12" fontFamily="monospace">₹1,620.10</text>
      <text x="245" y="86" textAnchor="end" className="fill-[var(--ink-2)] font-sans" fontSize="11" fontFamily="monospace">₹1,620.05</text>
      <text x="245" y="116" textAnchor="end" className="fill-[var(--ink-2)] font-sans" fontSize="11" fontFamily="monospace">₹1,620.00</text>
      <text x="245" y="146" textAnchor="end" className="fill-[var(--ink-3)] font-sans" fontSize="11" fontFamily="monospace">₹1,619.95</text>
      <text x="245" y="176" textAnchor="end" className="fill-[var(--ink-3)] font-sans" fontSize="11" fontFamily="monospace">₹1,619.90</text>

      {/* Ask labels */}
      <text x="355" y="56" textAnchor="start" className="fill-[var(--ink)] font-sans" fontSize="12" fontFamily="monospace">₹1,620.20</text>
      <text x="355" y="86" textAnchor="start" className="fill-[var(--ink-2)] font-sans" fontSize="11" fontFamily="monospace">₹1,620.25</text>
      <text x="355" y="116" textAnchor="start" className="fill-[var(--ink-2)] font-sans" fontSize="11" fontFamily="monospace">₹1,620.30</text>
      <text x="355" y="146" textAnchor="start" className="fill-[var(--ink-3)] font-sans" fontSize="11" fontFamily="monospace">₹1,620.35</text>
      <text x="355" y="176" textAnchor="start" className="fill-[var(--ink-3)] font-sans" fontSize="11" fontFamily="monospace">₹1,620.40</text>

      {/* Headers */}
      <text x="20" y="28" className="fill-[var(--up)] font-sans" fontSize="11" fontWeight="600">BIDS (buyers)</text>
      <text x="580" y="28" textAnchor="end" className="fill-[var(--down)] font-sans" fontSize="11" fontWeight="600">ASKS (sellers)</text>

      {/* Spread highlight */}
      <line x1="265" y1="35" x2="265" y2="190" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="335" y1="35" x2="335" y2="190" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
      <rect x="265" y="35" width="70" height="155" fill="var(--accent)" fillOpacity="0.08" />
      <text x="300" y="105" textAnchor="middle" className="fill-[var(--accent)] font-sans" fontSize="11" fontWeight="600">SPREAD</text>
      <text x="300" y="120" textAnchor="middle" className="fill-[var(--accent)] font-sans" fontSize="10">10 paise</text>

      {/* Best bid/ask arrows */}
      <text x="125" y="208" textAnchor="middle" className="fill-[var(--ink-3)] font-sans" fontSize="10">best bid →</text>
      <text x="475" y="208" textAnchor="middle" className="fill-[var(--ink-3)] font-sans" fontSize="10">← best ask</text>
    </svg>
  );
}
