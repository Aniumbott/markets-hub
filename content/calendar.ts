export interface MonthlyEvent {
  name: string;
  cadence: string;
  when: string;
  marketImpact: "high" | "medium" | "low";
  why: string;
  watchFor: string;
}

export const MONTHLY_EVENTS: MonthlyEvent[] = [
  {
    name: "US Non-Farm Payrolls (NFP)",
    cadence: "Monthly",
    when: "First Friday, 6:00 PM IST",
    marketImpact: "high",
    why: "The cleanest read on US labour market strength. Strong NFP makes the Fed less likely to cut, which moves the dollar, bond yields, and indirectly the rupee and Nifty within minutes.",
    watchFor: "Headline jobs vs expectation, unemployment rate, average hourly earnings YoY.",
  },
  {
    name: "US CPI",
    cadence: "Monthly",
    when: "Around the 10th-15th of the month, 6:00 PM IST",
    marketImpact: "high",
    why: "The most-watched inflation print globally. Above-expected CPI is hawkish for the Fed; below is dovish. Moves DXY, US 10Y, gold, and Nasdaq the most.",
    watchFor: "Headline CPI YoY and MoM, core CPI YoY (the cleaner trend).",
  },
  {
    name: "US ISM Manufacturing & Services PMI",
    cadence: "Monthly",
    when: "First and third business days of the month",
    marketImpact: "medium",
    why: "Above 50 = expansion. Sharp drops signal slowdown risk. Recession scares often start here before NFP.",
    watchFor: "Headline above/below 50, prices-paid sub-component (inflation signal).",
  },
  {
    name: "FOMC meeting (US Fed)",
    cadence: "Every 6 weeks",
    when: "8 times per year, mostly Wednesdays 11:30 PM IST",
    marketImpact: "high",
    why: "The single most influential rate decision globally. Even if rates are unchanged, dot plot (quarterly) and Powell's tone move markets within seconds.",
    watchFor: "Statement language drift, dot plot changes, press conference Q&A tone.",
  },
  {
    name: "RBI MPC meeting",
    cadence: "Every 2 months",
    when: "6 times per year, usually Friday 10:00 AM IST",
    marketImpact: "high",
    why: "Sets the repo rate and policy stance. Drives Indian bond yields immediately and equities indirectly. Stance shifts ('accommodative' to 'neutral') matter as much as rate moves.",
    watchFor: "Repo rate decision, stance, GDP and CPI forecasts, Governor's tone.",
  },
  {
    name: "India CPI",
    cadence: "Monthly",
    when: "12th of each month, 5:30 PM IST",
    marketImpact: "medium",
    why: "Determines the RBI's room to cut. Food inflation drives Indian CPI more than core; spikes can pause rate cuts entirely.",
    watchFor: "Headline CPI vs RBI's 4% target band, food vs core split.",
  },
  {
    name: "OPEC+ meeting",
    cadence: "Every 6 weeks roughly",
    when: "Periodic, usually announced 2-3 weeks ahead",
    marketImpact: "high",
    why: "Decides global oil production quotas. Cuts push crude higher; increases lower. Affects India's import bill and inflation directly.",
    watchFor: "Production cut/increase magnitude, OPEC+ compliance, Saudi-Russia alignment.",
  },
  {
    name: "FII/DII daily flow data (India)",
    cadence: "Daily",
    when: "Around 6:30 PM IST after market close",
    marketImpact: "low",
    why: "Day-to-day capital flow into Indian equities. Single days rarely move markets next day, but the running multi-week trend does.",
    watchFor: "Cash market FII (provisional) and DII numbers — both in ₹ crore.",
  },
  {
    name: "Earnings season (US — Q reports)",
    cadence: "Quarterly",
    when: "Starts in mid-Jan, mid-Apr, mid-Jul, mid-Oct (~6 weeks each)",
    marketImpact: "high",
    why: "How Mag-7 (Apple, Microsoft, Nvidia, etc.) prints sets the global equity mood. Bad guidance → global selloff.",
    watchFor: "Revenue and EPS beats/misses, but guidance is everything. Watch Nvidia earnings closely.",
  },
  {
    name: "Earnings season (India — Q reports)",
    cadence: "Quarterly",
    when: "Starts in mid-Jul, mid-Oct, mid-Jan, mid-Apr (~6 weeks each)",
    marketImpact: "medium",
    why: "Indian quarterly results drive stock-specific moves. Index banks (HDFC, ICICI), IT (TCS, Infy) and Reliance set the index tone.",
    watchFor: "Revenue growth YoY, margin trends, management commentary.",
  },
  {
    name: "Indian Budget",
    cadence: "Annual",
    when: "1st February, 11:00 AM IST",
    marketImpact: "high",
    why: "Sets tax rules, capex plans, and fiscal deficit. STT, LTCG, dividend tax changes ripple through markets all year. Budget day intraday is famously volatile.",
    watchFor: "Capex allocations, fiscal deficit target, sectoral tax changes, F&O / capital gains rules.",
  },
  {
    name: "Bank of Japan rate decision",
    cadence: "Monthly",
    when: "Usually mid-month, varies by month",
    marketImpact: "medium",
    why: "BoJ moves are rare but seismic — the yen is the global carry funding currency. A surprise hike can trigger carry-trade unwinds (see August 2024).",
    watchFor: "Policy rate, YCC (yield curve control) changes, Governor's tone.",
  },
];
