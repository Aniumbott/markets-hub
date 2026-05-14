"use client";

const ASSETS = ["Nifty", "S&P 500", "Nasdaq", "Gold", "Brent", "USD/INR", "10Y G-Sec", "Bitcoin"];

// Approximate long-run correlations (illustrative)
const CORR = [
  [1.00,  0.55,  0.50,  0.10, -0.20, -0.30,  0.20,  0.40],
  [0.55,  1.00,  0.90,  0.05, -0.10, -0.45,  0.15,  0.50],
  [0.50,  0.90,  1.00, -0.05, -0.15, -0.45,  0.10,  0.60],
  [0.10,  0.05, -0.05,  1.00,  0.30, -0.40,  0.25, -0.10],
  [-0.20,-0.10,-0.15,  0.30,  1.00,  0.30, -0.05, -0.05],
  [-0.30,-0.45,-0.45, -0.40,  0.30,  1.00, -0.20, -0.35],
  [0.20,  0.15,  0.10,  0.25, -0.05, -0.20,  1.00,  0.05],
  [0.40,  0.50,  0.60, -0.10, -0.05, -0.35,  0.05,  1.00],
];

function colorFor(v: number) {
  // -1 (red) → 0 (neutral) → +1 (green)
  if (v >= 0) {
    const intensity = Math.min(v, 1);
    return `rgba(34, 197, 94, ${intensity * 0.7})`;
  } else {
    const intensity = Math.min(-v, 1);
    return `rgba(220, 38, 38, ${intensity * 0.7})`;
  }
}

export function CorrelationMatrixDiagram() {
  return (
    <figure className="mx-auto max-w-2xl rounded-xl border border-border bg-surface p-5 not-italic">
      <div className="mb-3 font-sans text-sm font-medium text-ink">
        Cross-asset correlation matrix (long-run, illustrative)
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center font-mono text-[10px]">
          <thead>
            <tr>
              <th className="p-1.5" />
              {ASSETS.map((a) => (
                <th key={a} className="p-1.5 text-[9px] font-semibold text-ink-2">
                  {a}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ASSETS.map((row, i) => (
              <tr key={row}>
                <td className="p-1.5 text-right text-[9px] font-semibold text-ink-2">{row}</td>
                {ASSETS.map((col, j) => {
                  const v = CORR[i][j];
                  const isDiagonal = i === j;
                  return (
                    <td
                      key={j}
                      className="border border-border p-1.5"
                      style={{
                        backgroundColor: isDiagonal
                          ? "var(--surface-2)"
                          : colorFor(v),
                      }}
                    >
                      <span className={isDiagonal ? "text-ink-3" : "text-ink-2"}>
                        {v.toFixed(2)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 font-sans text-[10px] text-ink-3">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded" style={{ background: "rgba(220, 38, 38, 0.6)" }} />
          Negative
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded" style={{ background: "var(--surface-2)" }} />
          Zero
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded" style={{ background: "rgba(34, 197, 94, 0.6)" }} />
          Positive
        </span>
      </div>

      <p className="mt-2 text-center text-xs italic text-ink-3 font-sans not-italic">
        In stress, correlations all snap toward +1 (everything sells off together).
      </p>
    </figure>
  );
}
