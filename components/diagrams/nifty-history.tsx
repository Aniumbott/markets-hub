"use client";

// Illustrative Nifty 50 data points over 25 years
const POINTS = [
  { year: 2000, value: 1500, label: "Dotcom bust starts" },
  { year: 2002, value: 1000, label: "" },
  { year: 2004, value: 1900, label: "" },
  { year: 2007, value: 6200, label: "China commodity boom" },
  { year: 2008, value: 2700, label: "Global Financial Crisis" },
  { year: 2010, value: 6100, label: "" },
  { year: 2013, value: 5900, label: "Taper tantrum" },
  { year: 2014, value: 8300, label: "Modi rally begins" },
  { year: 2016, value: 7900, label: "Demonetisation Nov" },
  { year: 2017, value: 10500, label: "" },
  { year: 2018, value: 10100, label: "" },
  { year: 2019, value: 12100, label: "" },
  { year: 2020, value: 7600, label: "COVID crash" },
  { year: 2021, value: 18400, label: "Recovery high" },
  { year: 2022, value: 15700, label: "Fed hike cycle" },
  { year: 2023, value: 20000, label: "" },
  { year: 2024, value: 26000, label: "All-time highs" },
];

const EVENTS = POINTS.filter((p) => p.label);

export function NiftyHistoryDiagram() {
  const W = 700;
  const H = 320;
  const padX = 50;
  const padY = 40;
  const plotW = W - padX * 2;
  const plotH = H - padY * 2;

  const minYear = POINTS[0].year;
  const maxYear = POINTS[POINTS.length - 1].year;
  const maxVal = Math.max(...POINTS.map((p) => p.value));

  const xFor = (year: number) =>
    padX + ((year - minYear) / (maxYear - minYear)) * plotW;
  const yFor = (val: number) => padY + plotH - (val / maxVal) * plotH;

  const pathD = POINTS.map(
    (p, i) => `${i === 0 ? "M" : "L"} ${xFor(p.year)} ${yFor(p.value)}`
  ).join(" ");

  return (
    <figure className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        Nifty 50 — 25-year journey (illustrative)
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Nifty 50 historical chart">
        {/* gridlines */}
        {[0, 5000, 10000, 15000, 20000, 25000].map((y) => (
          <g key={y}>
            <line
              x1={padX}
              x2={W - padX}
              y1={yFor(y)}
              y2={yFor(y)}
              stroke="var(--border)"
              strokeDasharray="2 4"
              strokeWidth="0.5"
            />
            <text
              x={padX - 8}
              y={yFor(y) + 4}
              textAnchor="end"
              className="fill-[var(--ink-3)] font-sans"
              fontSize="9"
            >
              {y.toLocaleString("en-IN")}
            </text>
          </g>
        ))}

        {/* x labels */}
        {[2000, 2005, 2010, 2015, 2020, 2024].map((year) => (
          <text
            key={year}
            x={xFor(year)}
            y={H - 18}
            textAnchor="middle"
            className="fill-[var(--ink-3)] font-sans"
            fontSize="9"
          >
            {year}
          </text>
        ))}

        {/* Path with gradient fill */}
        <defs>
          <linearGradient id="niftyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`${pathD} L ${xFor(maxYear)} ${yFor(0)} L ${xFor(minYear)} ${yFor(0)} Z`}
          fill="url(#niftyGrad)"
        />
        <path
          d={pathD}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Event markers */}
        {EVENTS.map((e, i) => (
          <g key={i}>
            <circle
              cx={xFor(e.year)}
              cy={yFor(e.value)}
              r="3.5"
              fill="var(--surface)"
              stroke="var(--down)"
              strokeWidth="2"
            />
            <text
              x={xFor(e.year)}
              y={yFor(e.value) - 8}
              textAnchor="middle"
              className="fill-[var(--ink-2)] font-sans"
              fontSize="8.5"
              fontWeight="500"
            >
              {e.label}
            </text>
          </g>
        ))}
      </svg>

      <p className="mt-2 text-center text-xs italic text-ink-3 font-sans not-italic">
        From ~1,500 to 26,000 — nearly 17x in 24 years (despite ~5 major drawdowns). Stay invested through the chaos.
      </p>
    </figure>
  );
}
