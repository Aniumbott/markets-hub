import type { SimulatorScenario } from "./types";

export const SCENARIOS: SimulatorScenario[] = [
  // -----------------------------------------------------------------------
  // Scenario 1: Fed raises rates by 50 bps
  // -----------------------------------------------------------------------
  {
    slug: "fed-rate-hike",
    title: "Fed raises rates by 50 bps unexpectedly",
    trigger: "FOMC delivers a surprise 50 bps hike when markets expected only 25 bps. Powell sounds hawkish in the press conference.",
    premise:
      "A hot CPI print and resilient labor market push the Fed to act more aggressively than expected. The dot plot is revised to show fewer cuts in 2025. This is a textbook hawkish surprise.",
    steps: [
      // Wave 1: Immediate (minutes)
      [
        {
          id: "us-10y-up",
          label: "US 10Y yield jumps 15-20 bps",
          detail: "The benchmark global rate immediately reprices. Bond holders take losses; new bond buyers wait.",
          tone: "up",
          marketHint: "US 10Y",
        },
        {
          id: "dxy-rallies",
          label: "DXY rallies 1-1.5%",
          detail: "Higher US rates make the dollar more attractive relative to other currencies — everyone wants dollar yield.",
          tone: "up",
          marketHint: "DXY",
        },
        {
          id: "spx-down",
          label: "S&P 500 sells off 1-2%",
          detail: "Higher discount rates compress equity valuations. Growth stocks (Nasdaq) sell off more than value.",
          tone: "down",
          marketHint: "S&P 500",
        },
        {
          id: "gold-down",
          label: "Gold drops 1-2%",
          detail: "Real yields rise; gold pays no coupon and competes with higher real bond yields.",
          tone: "down",
          marketHint: "Gold",
        },
      ],
      // Wave 2: Asian session next day
      [
        {
          id: "asia-gap-down",
          label: "Asian equities gap down 1-2%",
          detail: "Nikkei, Hang Seng, KOSPI all open weak. Indian pre-market signals point to a red open.",
          tone: "down",
          marketHint: "Nikkei / Hang Seng",
        },
        {
          id: "inr-weakens",
          label: "USD/INR rises 30-50 paise",
          detail: "Dollar strength + foreign capital flow concerns push the rupee weaker. RBI may intervene.",
          tone: "up",
          marketHint: "USD/INR",
        },
        {
          id: "nifty-down",
          label: "Nifty opens -1.5%, drifts lower",
          detail: "Global risk-off + INR weakness + FII selling pressure stacks together.",
          tone: "down",
          marketHint: "Nifty 50",
        },
      ],
      // Wave 3: Days following
      [
        {
          id: "fii-outflow",
          label: "FII outflow of ₹3,000-8,000 cr",
          detail: "Foreign portfolio managers reduce EM equity exposure. India is a 'risk asset' for them despite our domestic story.",
          tone: "down",
          marketHint: "FII flows",
        },
        {
          id: "it-stocks-mixed",
          label: "Indian IT stocks: mixed",
          detail: "INR weakness helps IT exporters (revenue is in USD), but US recession fears hurt order books. Net often slightly positive for Indian IT.",
          tone: "neutral",
          marketHint: "Nifty IT",
        },
        {
          id: "rate-sensitive-down",
          label: "Auto, real estate, NBFC stocks: -2-3%",
          detail: "Higher rates eventually feed into Indian rates too. Loan growth slows. Rate-sensitive sectors get sold.",
          tone: "down",
          marketHint: "Auto / Real Estate / NBFC",
        },
        {
          id: "rbi-pressure",
          label: "RBI face pressure to consider hiking",
          detail: "Rate differential narrowing → currency pressure → imported inflation. Even if RBI doesn't hike, the next MPC tone becomes more hawkish.",
          tone: "up",
          marketHint: "RBI",
        },
      ],
    ],
    takeaways: [
      "The Fed sets the global risk-free rate. Every other asset reprices in cascade — fast.",
      "Indian markets feel the Fed's move within hours, not days.",
      "Sector rotation: rate-sensitive (auto, real estate, NBFC) suffers; defensive (FMCG, pharma) and dollar-earners (IT) hold up better.",
      "Watch DXY and USD/INR more than the Nifty headline — they tell you whether the shock is fading or not.",
    ],
  },

  // -----------------------------------------------------------------------
  // Scenario 2: Brent crude spikes to $120
  // -----------------------------------------------------------------------
  {
    slug: "crude-spike-120",
    title: "Brent crude spikes to $120/barrel on geopolitical shock",
    trigger: "Middle East escalation threatens 20% of global oil supply. Brent jumps from $85 to $120 in a week.",
    premise:
      "A regional conflict triggers fears of disruption to Strait of Hormuz or Red Sea shipping. Oil markets price in supply uncertainty. India, importing 85% of its oil, is uniquely exposed.",
    steps: [
      // Wave 1: Commodity reaction
      [
        {
          id: "brent-spike",
          label: "Brent jumps from $85 to $120 (+41%)",
          detail: "Oil futures gap up overnight. Backwardation steepens — near-term contracts most expensive.",
          tone: "up",
          marketHint: "Brent crude",
        },
        {
          id: "gold-up",
          label: "Gold rallies 3-5%",
          detail: "Geopolitical risk + inflation fears drive haven demand. Gold becomes the cleanest hedge.",
          tone: "up",
          marketHint: "Gold",
        },
        {
          id: "defensive-bonds",
          label: "US Treasuries: mixed",
          detail: "Pure haven bid up vs inflation fears down. Yields often modestly higher as inflation dominates.",
          tone: "neutral",
          marketHint: "US 10Y",
        },
      ],
      // Wave 2: Currency and India-specific
      [
        {
          id: "inr-weakens-hard",
          label: "USD/INR rises 70 paise to ₹1/USD",
          detail: "India's oil import bill suddenly spikes. Current account deficit widens. Rupee under heavy pressure.",
          tone: "up",
          marketHint: "USD/INR",
        },
        {
          id: "current-account",
          label: "Current account deficit forecast widens",
          detail: "Every $10/barrel spike adds ~$15 billion to India's annual import bill. CAD goes from 1.2% to 2%+ of GDP.",
          tone: "up",
          marketHint: "CAD",
        },
        {
          id: "rbi-intervention",
          label: "RBI sells dollars to defend rupee",
          detail: "Forex reserves draw down to limit volatility. Limits to how much they'll spend defending a specific level.",
          tone: "down",
          marketHint: "Forex reserves",
        },
      ],
      // Wave 3: Indian sector and equity
      [
        {
          id: "nifty-down-2",
          label: "Nifty falls 2-3% on the week",
          detail: "Oil import bill, inflation fears, sector damage in OMCs, paint companies, airlines.",
          tone: "down",
          marketHint: "Nifty 50",
        },
        {
          id: "omc-crater",
          label: "OMCs (IOC, BPCL, HPCL): -8-12%",
          detail: "Marketing margins crushed as raw material costs spike before retail prices can be raised. Pure pain for state-owned oil marketers.",
          tone: "down",
          marketHint: "Oil Marketing Cos",
        },
        {
          id: "paint-cement-down",
          label: "Paints, cement, tyres: -5-7%",
          detail: "Crude is the input for paints (binders/solvents), cement (fuel), tyres (synthetic rubber). Margins compress.",
          tone: "down",
          marketHint: "Asian Paints / UltraTech",
        },
        {
          id: "ongc-up",
          label: "Upstream producers (ONGC, Reliance): +5-8%",
          detail: "Higher crude price = higher realisation per barrel. Reliance also benefits from refining margins (GRMs).",
          tone: "up",
          marketHint: "ONGC / Reliance",
        },
        {
          id: "airlines-down",
          label: "Airlines (IndiGo, SpiceJet): -7-10%",
          detail: "Jet fuel (ATF) is ~40% of airline operating cost. Spike in crude crushes margins. Fares can't be raised instantly.",
          tone: "down",
          marketHint: "IndiGo",
        },
      ],
      // Wave 4: Macro feedback
      [
        {
          id: "cpi-up",
          label: "Indian CPI ticks up 30-50 bps",
          detail: "Direct: fuel and food (food transport costs more). Indirect: every input that requires shipping or plastics.",
          tone: "up",
          marketHint: "CPI",
        },
        {
          id: "rbi-hawkish",
          label: "RBI shifts to hawkish stance",
          detail: "Even if no immediate hike, the MPC tone changes. Rate cuts (if any were planned) get pushed out.",
          tone: "up",
          marketHint: "MPC",
        },
        {
          id: "g-sec-up",
          label: "10Y G-Sec yield rises 15-20 bps",
          detail: "Higher inflation expectations + hawkish RBI = higher bond yields. Bond prices fall.",
          tone: "up",
          marketHint: "10Y G-Sec",
        },
      ],
    ],
    takeaways: [
      "Oil is upstream of everything in India — currency, inflation, sector earnings, current account.",
      "Sectoral impact is mixed: upstream wins, downstream and consumer industries lose.",
      "Watch the current account deficit projections — that's the link to currency stress.",
      "Oil spikes can take months to fully play out in CPI — the inflation effect is gradual but persistent.",
      "Gold is the cleanest hedge for an oil-led geopolitical shock.",
    ],
  },

  // -----------------------------------------------------------------------
  // Scenario 3: FII outflow of ₹10,000 cr in a day
  // -----------------------------------------------------------------------
  {
    slug: "fii-mega-outflow",
    title: "FIIs sell ₹10,000 crore of Indian equity in a single day",
    trigger: "Global risk-off triggers a chunky day of foreign selling. ₹10,000 cr is large — usually associated with broader EM stress.",
    premise:
      "FIIs (foreign institutional investors) own ~18-20% of NSE listed market cap. A heavy single-day outflow happens during EM-wide risk-off — global VIX spikes, dollar strengthens, EM currencies weaken in chorus.",
    steps: [
      // Wave 1: Immediate
      [
        {
          id: "nifty-gap-down",
          label: "Nifty gaps down 1-1.5%",
          detail: "Selling pressure visible from the open. Index heavyweights (Reliance, HDFC Bank, ICICI, Infosys, TCS) — most held by FIIs — lead lower.",
          tone: "down",
          marketHint: "Nifty 50",
        },
        {
          id: "bank-nifty-worse",
          label: "Bank Nifty: -2-3%",
          detail: "Private banks are FII darlings. They get sold first and hardest in any FII reduction.",
          tone: "down",
          marketHint: "Bank Nifty",
        },
        {
          id: "inr-down",
          label: "USD/INR rises 25-40 paise",
          detail: "FII selling = dollar demand. RBI usually intervenes to smooth, not stop, the move.",
          tone: "up",
          marketHint: "USD/INR",
        },
      ],
      // Wave 2: Sector and breadth
      [
        {
          id: "midcaps-down",
          label: "Mid and small caps: -2-4%",
          detail: "FII ownership in mid/small is patchier but the risk-off filters through. Breadth turns ugly.",
          tone: "down",
          marketHint: "Nifty Midcap 100",
        },
        {
          id: "vix-up",
          label: "India VIX jumps 15-25%",
          detail: "Volatility spikes from 12 to 15-18 area. Hedging demand spikes; option premiums fatten.",
          tone: "up",
          marketHint: "India VIX",
        },
        {
          id: "fmcg-defensive",
          label: "Defensives hold up — FMCG, pharma flat or +",
          detail: "Money rotates to lower-beta names. ITC, HUL, Nestle, Sun Pharma may even be green on a red day.",
          tone: "neutral",
          marketHint: "Nifty FMCG / Pharma",
        },
      ],
      // Wave 3: Domestic offset
      [
        {
          id: "dii-buys",
          label: "DIIs buy ₹6,000-9,000 cr",
          detail: "Mutual funds with ₹25,000 cr/month of SIP inflows have to deploy. They buy what FIIs sell, often partly offsetting the move.",
          tone: "up",
          marketHint: "DII flows",
        },
        {
          id: "rbi-fx",
          label: "RBI sells $1-2 billion to smooth USD/INR",
          detail: "Forex reserves draw down modestly. RBI doesn't usually defend a specific level but limits one-day moves.",
          tone: "down",
          marketHint: "Forex reserves",
        },
      ],
      // Wave 4: The morning after
      [
        {
          id: "recovery-attempt",
          label: "Next day: partial recovery (-1% to +0.5%)",
          detail: "If global tape stabilizes, Indian markets often bounce 50-70% of the prior day's loss. DII demand + short covering.",
          tone: "up",
          marketHint: "Nifty 50",
        },
        {
          id: "narrative-shift",
          label: "Narrative: 'India still domestic-driven'",
          detail: "If recovery is clean, FII selling becomes a non-event for the medium-term Indian story. DII flow is structural.",
          tone: "neutral",
          marketHint: "Sentiment",
        },
        {
          id: "watch-rupee",
          label: "Watch USD/INR — if it doesn't stabilize, second-day pressure",
          detail: "Currency is the truer signal than Nifty. If INR keeps weakening, FIIs may sell more on day 2 — feedback loop.",
          tone: "up",
          marketHint: "USD/INR",
        },
      ],
    ],
    takeaways: [
      "FII outflows of ₹10,000+ cr in a single day are heavy but no longer market-breaking — DII flows partially absorb.",
      "The first stocks hit are the most-held FII names: large-cap private banks, IT majors, blue-chip exporters.",
      "USD/INR is the cleaner stress indicator than Nifty during FII risk-off events.",
      "October 2024 saw multiple ₹10K+ outflow days; the cumulative monthly outflow was ₹1.14 lakh cr — the largest ever — yet Nifty only fell ~6%, thanks to DII offset.",
      "If you're a long-term investor, FII outflow days often present better entry levels for the same fundamentals.",
    ],
  },

  // -----------------------------------------------------------------------
  // Scenario 4: RBI cuts rates by 50 bps unexpectedly
  // -----------------------------------------------------------------------
  {
    slug: "rbi-rate-cut",
    title: "RBI cuts repo rate by 50 bps unexpectedly",
    trigger: "MPC delivers surprise 50 bps cut when consensus expected only 25 bps. CPI moderating, growth slowing.",
    premise:
      "Indian CPI has been trending toward 4% target for three consecutive months. PMI moderating. RBI decides to front-load the cutting cycle. The market expected 25 bps; got 50 bps with a dovish stance shift.",
    steps: [
      // Wave 1: Immediate
      [
        {
          id: "g-sec-rally",
          label: "Indian 10Y G-Sec yield drops 15-25 bps",
          detail: "Bond market repricing for faster cutting cycle. Yield from 6.85% toward 6.65%.",
          tone: "down",
          marketHint: "10Y G-Sec yield",
        },
        {
          id: "nifty-up",
          label: "Nifty rallies 1-1.5% intraday",
          detail: "Lower discount rates = higher equity valuations. Risk-on across cyclicals.",
          tone: "up",
          marketHint: "Nifty 50",
        },
        {
          id: "bank-nifty-mixed",
          label: "Bank Nifty: mixed",
          detail: "Lower rates compress NIM (margin headwind) but boost loan demand and growth. Net effect varies by bank.",
          tone: "neutral",
          marketHint: "Bank Nifty",
        },
        {
          id: "inr-weakens",
          label: "USD/INR rises 20-30 paise",
          detail: "Rate differential vs Fed narrows; FII bond flows may slow; modest INR weakening.",
          tone: "up",
          marketHint: "USD/INR",
        },
      ],
      // Wave 2: Days following
      [
        {
          id: "rate-sensitive-up",
          label: "Auto, Real Estate, NBFC: +3-5% over the week",
          detail: "Rate-sensitive sectors love cuts. EMI affordability rises, loan demand returns.",
          tone: "up",
          marketHint: "Auto / Real Estate / NBFC",
        },
        {
          id: "longduration-gilt-rally",
          label: "Long-duration gilt funds rally 2-3%",
          detail: "Duration × yield decline = capital gain. Gilt fund holders benefit.",
          tone: "up",
          marketHint: "Gilt funds",
        },
        {
          id: "fd-rates-fall",
          label: "Banks cut FD rates within 1-2 weeks",
          detail: "Lower deposit costs transmitted from MCLR cuts. Existing FDs unaffected; new FDs at lower rates.",
          tone: "down",
          marketHint: "FD rates",
        },
      ],
      // Wave 3: Multi-month
      [
        {
          id: "fii-tactical-positive",
          label: "FII tactical positive on India bonds",
          detail: "Falling Indian yields make Indian government bonds attractive. FII bond inflows of ₹5,000-15,000 cr/month possible.",
          tone: "up",
          marketHint: "FII bond inflows",
        },
        {
          id: "home-emi-reduces",
          label: "Floating home loan EMIs reset lower over 6 months",
          detail: "External Benchmark Lending Rate (EBLR) recalibrates. ₹50 lakh loan saves ~₹1,500-3,000/month.",
          tone: "down",
          marketHint: "Home loans",
        },
        {
          id: "small-caps-outperform",
          label: "Mid and small caps lead the rally over 1-3 months",
          detail: "Rate cuts most help higher-leverage businesses and growth stocks. Small/mid caps tend to outperform large caps in cutting cycles.",
          tone: "up",
          marketHint: "Nifty Midcap / Smallcap",
        },
      ],
    ],
    takeaways: [
      "Rate cuts are typically positive for Indian equity and bonds, modest negative for INR.",
      "Rate-sensitive sectors (auto, real estate, NBFC) lead the rally.",
      "Banks have mixed reactions — NIM headwind offset by loan demand.",
      "Long-duration gilt funds benefit immediately from yield decline × duration.",
      "FD rates fall within weeks; home loan EMIs reset over 3-6 months.",
    ],
  },

  // -----------------------------------------------------------------------
  // Scenario 5: Major geopolitical shock (war / terror event)
  // -----------------------------------------------------------------------
  {
    slug: "geopolitical-war-shock",
    title: "Major geopolitical event — regional war or escalation",
    trigger: "Sudden escalation between major powers or in critical region. Markets reprice for prolonged conflict, oil supply disruption, sanctions risk.",
    premise:
      "A geopolitical event of meaningful magnitude — Russia-Ukraine type, Middle East major war, China-Taiwan escalation. Markets immediately price in commodity disruption, financial sanctions, and global risk-off.",
    steps: [
      // Wave 1: Within hours
      [
        {
          id: "oil-spike-geo",
          label: "Brent crude spikes $15-30/barrel",
          detail: "Supply disruption fears dominate. Risk premium added immediately.",
          tone: "up",
          marketHint: "Brent crude",
        },
        {
          id: "gold-rally-geo",
          label: "Gold rallies 3-7%",
          detail: "Classic safe-haven demand. Geopolitical risk + potential inflation acceleration.",
          tone: "up",
          marketHint: "Gold",
        },
        {
          id: "dxy-haven-bid",
          label: "DXY rallies 1-2%",
          detail: "Flight to dollar as global haven asset.",
          tone: "up",
          marketHint: "DXY",
        },
        {
          id: "us10y-haven",
          label: "US 10Y yield falls 10-20 bps",
          detail: "Haven bid for Treasuries. Even though inflation fears rise, the haven flow dominates short-term.",
          tone: "down",
          marketHint: "US 10Y yield",
        },
        {
          id: "vix-spike-geo",
          label: "VIX spikes 30-50%",
          detail: "Global vol explodes. India VIX follows from 12-15 area to 20-25.",
          tone: "up",
          marketHint: "VIX / India VIX",
        },
      ],
      // Wave 2: Days following
      [
        {
          id: "equity-selloff-global",
          label: "Global equities sell off 3-7%",
          detail: "S&P, Nasdaq, Nikkei all down. EM hit hardest. Indian markets gap down 2-4%.",
          tone: "down",
          marketHint: "Global equities",
        },
        {
          id: "defense-stocks-rally",
          label: "Defense and aerospace stocks rally 5-15%",
          detail: "Sustained higher defense spending priced in. Indian beneficiaries: BEL, HAL, Bharat Forge.",
          tone: "up",
          marketHint: "Defense stocks (BEL, HAL)",
        },
        {
          id: "indian-oil-impact",
          label: "Indian OMCs (IOC, BPCL, HPCL): -5-8%",
          detail: "Margin compression on rising input crude prices that retail prices can't fully absorb.",
          tone: "down",
          marketHint: "OMCs",
        },
        {
          id: "indian-upstream-up",
          label: "Indian upstream (ONGC, Reliance) rally 4-7%",
          detail: "Higher crude realizations boost upstream earnings.",
          tone: "up",
          marketHint: "ONGC / Reliance",
        },
      ],
      // Wave 3: Multi-week
      [
        {
          id: "inr-pressure",
          label: "USD/INR rises 50-100 paise",
          detail: "Oil import pressure + DXY strength + FII outflows.",
          tone: "up",
          marketHint: "USD/INR",
        },
        {
          id: "indian-cpi-pressure",
          label: "Indian CPI ticks up 30-60 bps over 2-3 months",
          detail: "Imported inflation from energy and transport costs. RBI may delay rate cuts.",
          tone: "up",
          marketHint: "Indian CPI",
        },
        {
          id: "central-bank-buying-gold",
          label: "Central banks accelerate gold buying",
          detail: "Reserve diversification away from USD accelerates. EM CBs (China, India, Saudi) add gold.",
          tone: "up",
          marketHint: "Central bank gold buying",
        },
      ],
    ],
    takeaways: [
      "Geopolitical shocks have predictable patterns: oil up, gold up, dollar up, equities down, vol up.",
      "Defense stocks rally on sustained higher spending expectations.",
      "Indian impact: OMC pain, upstream gain, INR pressure, CPI risk.",
      "Most geopolitical shocks resolve within weeks-months; market recovery follows.",
      "Maintain 5-10% gold allocation as standing geopolitical hedge — works without trying to predict events.",
    ],
  },

  // -----------------------------------------------------------------------
  // Scenario 6: China stimulus surprise
  // -----------------------------------------------------------------------
  {
    slug: "china-stimulus",
    title: "China announces major economic stimulus package",
    trigger: "PBoC + Ministry of Finance announce coordinated stimulus: rate cuts, RRR cuts, property sector support, infrastructure spending. Markets reprice China growth.",
    premise:
      "China property sector remains under pressure, growth slowing toward 4%. Government announces coordinated package: 30 bps PBoC rate cut, 50 bps RRR cut, 2 trillion yuan special bond issuance, property buying incentives. Markets reposition globally.",
    steps: [
      // Wave 1: Immediate
      [
        {
          id: "hang-seng-rally",
          label: "Hang Seng rallies 6-12%",
          detail: "Chinese equity gap up. Tech (Alibaba, Tencent) and property names lead.",
          tone: "up",
          marketHint: "Hang Seng",
        },
        {
          id: "copper-spike",
          label: "Copper spikes 5-8%",
          detail: "Chinese infrastructure stimulus = copper demand resumption.",
          tone: "up",
          marketHint: "Copper",
        },
        {
          id: "industrial-metals-rally",
          label: "Aluminum, iron ore rally 3-7%",
          detail: "Global manufacturing demand expectations rise.",
          tone: "up",
          marketHint: "Industrial metals",
        },
        {
          id: "yuan-strengthens",
          label: "Chinese yuan strengthens 0.5-1%",
          detail: "Capital inflows + improved growth outlook.",
          tone: "down",
          marketHint: "USD/CNY",
        },
      ],
      // Wave 2: Indian context
      [
        {
          id: "fii-rotation-india-out",
          label: "Some FII rotation from India to China",
          detail: "EM allocators rebalance to cheaper, newly-stimulated China. Indian FII outflows possible (₹3,000-8,000 cr).",
          tone: "down",
          marketHint: "FII flows",
        },
        {
          id: "indian-metals-rally",
          label: "Indian metal stocks (Tata Steel, JSW, Hindalco) rally 5-10%",
          detail: "Global metal price tailwind translates to Indian producers.",
          tone: "up",
          marketHint: "Nifty Metal",
        },
        {
          id: "nifty-mixed",
          label: "Nifty: mixed (-0.5% to +0.5%)",
          detail: "FII outflow concerns vs metal sector tailwind = roughly flat day for the index.",
          tone: "neutral",
          marketHint: "Nifty 50",
        },
        {
          id: "indian-it-flat-mixed",
          label: "Indian IT: flat or slightly negative",
          detail: "China stimulus doesn't directly help Indian IT exporters; possibly negative if INR strengthens vs USD.",
          tone: "neutral",
          marketHint: "Nifty IT",
        },
      ],
      // Wave 3: Multi-month
      [
        {
          id: "commodity-supercycle-talk",
          label: "Commodity supercycle narrative gains traction",
          detail: "Brent and metals stay elevated; Indian energy and metals continue outperformance.",
          tone: "up",
          marketHint: "Commodities",
        },
        {
          id: "global-em-rally",
          label: "EM equity rally — including India",
          detail: "Even with FII rotation toward China, broader EM-risk-on flow lifts Indian markets after the initial shake-out.",
          tone: "up",
          marketHint: "MSCI EM",
        },
        {
          id: "indian-realty-cement-mixed",
          label: "Indian cement and real estate: mixed",
          detail: "Global commodity tailwind vs higher input costs for cement makers. Realty stable.",
          tone: "neutral",
          marketHint: "Cement / Realty",
        },
      ],
    ],
    takeaways: [
      "China stimulus is a tailwind for global commodities — Indian metal stocks benefit directly.",
      "Initial reaction: FII rotation from India to China. Net effect varies.",
      "Beyond initial rotation, broader EM risk-on flow can lift Indian markets too.",
      "Watch Hang Seng + copper as paired signals when China policy news lands.",
      "Indian IT often gets little or negative impact — different demand drivers.",
    ],
  },

  // -----------------------------------------------------------------------
  // Scenario 7: US data shock — weak NFP / recession scare
  // -----------------------------------------------------------------------
  {
    slug: "us-recession-scare",
    title: "US data shock — weak NFP triggers recession scare",
    trigger: "US jobs report missing badly (50k jobs added vs 175k expected), unemployment rate jumps, Sahm rule recession indicator triggered. Markets shift to recession pricing.",
    premise:
      "After Fed's hold at 5.25-5.50%, US data weakens sharply. NFP misses big, ISM PMI drops below 48, jobless claims surge. Markets price in aggressive Fed cuts and recession risk.",
    steps: [
      // Wave 1: Immediate (Fri 6 PM IST)
      [
        {
          id: "us10y-recession",
          label: "US 10Y yield falls 25-40 bps",
          detail: "Bond market prices in aggressive Fed cuts.",
          tone: "down",
          marketHint: "US 10Y",
        },
        {
          id: "dxy-drops",
          label: "DXY drops 1-1.5%",
          detail: "Lower expected Fed rates = weaker dollar.",
          tone: "down",
          marketHint: "DXY",
        },
        {
          id: "spx-volatile",
          label: "S&P 500: volatile — initially down, then mixed",
          detail: "Bad news for growth but rate-cut hopes provide partial support.",
          tone: "neutral",
          marketHint: "S&P 500",
        },
        {
          id: "gold-rally-us-data",
          label: "Gold rallies 1-3%",
          detail: "Lower real yields + dollar weakness combine.",
          tone: "up",
          marketHint: "Gold",
        },
      ],
      // Wave 2: Monday Indian session
      [
        {
          id: "nifty-gap-down",
          label: "Nifty gaps down 1-2%",
          detail: "Recession-fear-driven global risk-off. Indian markets follow.",
          tone: "down",
          marketHint: "Nifty 50",
        },
        {
          id: "indian-it-down",
          label: "Indian IT (TCS, Infosys) down 2-4%",
          detail: "Heavy US revenue exposure; recession = budget cuts at US clients.",
          tone: "down",
          marketHint: "Nifty IT",
        },
        {
          id: "indian-bonds-rally",
          label: "Indian 10Y G-Sec yield falls 5-15 bps",
          detail: "Global yields fall, Indian yields follow. RBI cutting expectations strengthen.",
          tone: "down",
          marketHint: "10Y G-Sec",
        },
        {
          id: "inr-mixed",
          label: "USD/INR: mixed (slight INR strength from DXY weakness)",
          detail: "DXY weakness supports INR; offset by FII outflows from risk-off. Often relatively stable.",
          tone: "neutral",
          marketHint: "USD/INR",
        },
      ],
      // Wave 3: Multi-week
      [
        {
          id: "defensives-outperform-us-data",
          label: "Defensives (FMCG, pharma) outperform",
          detail: "Rotation to defensive sectors as recession concerns build. Nifty FMCG and Pharma may turn green even on broader red days.",
          tone: "up",
          marketHint: "Nifty FMCG / Pharma",
        },
        {
          id: "cyclicals-down-us-data",
          label: "Cyclicals (banks, autos, metals) drift lower",
          detail: "Sector rotation away from cyclicals; recession concerns weigh.",
          tone: "down",
          marketHint: "Cyclicals",
        },
        {
          id: "fed-cuts-pricing",
          label: "Markets price in 100-150 bps of Fed cuts in next 12 months",
          detail: "Fed funds futures shift dramatically toward cutting cycle.",
          tone: "down",
          marketHint: "Fed funds futures",
        },
      ],
    ],
    takeaways: [
      "US recession scares hit Indian markets within hours via FII outflows + sentiment.",
      "Indian IT services particularly vulnerable to US recession fears (US client revenue).",
      "Defensives (FMCG, pharma) outperform during recession-fear environments.",
      "Bonds rally globally as Fed-cut expectations build.",
      "USD/INR often less affected than other EM currencies — DXY weakness offsets risk-off.",
    ],
  },

  // -----------------------------------------------------------------------
  // Scenario 8: Gold spike on combined haven demand
  // -----------------------------------------------------------------------
  {
    slug: "gold-spike",
    title: "Gold spikes from $2,500 to $3,000+ — multi-driver rally",
    trigger: "Combination of: Fed cuts accelerating, geopolitical tensions rising, central bank buying surging. Gold breaks decisively above $3,000.",
    premise:
      "Multiple tailwinds align: Fed cuts faster than expected, Middle East escalation, China and emerging market central banks accelerating gold purchases, dollar weakness. Gold breaks key psychological levels and rallies 20%+.",
    steps: [
      // Wave 1: Immediate
      [
        {
          id: "gold-breakout",
          label: "Gold breaks $3,000 → $3,200+",
          detail: "Multi-month rally consolidates with breakout above key resistance. Technical buyers join.",
          tone: "up",
          marketHint: "Gold (USD)",
        },
        {
          id: "silver-rally-with-gold",
          label: "Silver rallies even harder (+25-40%)",
          detail: "Silver as higher-beta gold proxy. Industrial demand + monetary demand combine.",
          tone: "up",
          marketHint: "Silver",
        },
        {
          id: "gold-stocks-rally",
          label: "Gold mining stocks rally 30-60%",
          detail: "Operating leverage to gold price = amplified earnings. NEM, ABX, etc. rally hard.",
          tone: "up",
          marketHint: "Gold miners",
        },
        {
          id: "dxy-weakens-gold",
          label: "DXY weakens 2-4%",
          detail: "Gold strength is partly dollar weakness story.",
          tone: "down",
          marketHint: "DXY",
        },
      ],
      // Wave 2: Indian context
      [
        {
          id: "sgb-premium",
          label: "SGBs trade at premium to gold price",
          detail: "Demand surge during gold rally; SGBs trade 2-5% above implied gold price.",
          tone: "up",
          marketHint: "SGB / Gold ETF",
        },
        {
          id: "indian-gold-stocks",
          label: "Indian jewelry / gold-related stocks: mixed",
          detail: "Titan, Kalyan Jewellers face mixed reactions — gold price rise good for stock value, bad for unit volume as consumers wait for prices to drop.",
          tone: "neutral",
          marketHint: "Titan / Kalyan",
        },
        {
          id: "indian-gold-import-bill",
          label: "Indian gold import bill rises sharply",
          detail: "Higher prices + steady demand = larger import bill. Modest pressure on CAD.",
          tone: "up",
          marketHint: "Gold imports",
        },
      ],
      // Wave 3: Multi-month
      [
        {
          id: "miners-megarally",
          label: "Gold mining sector ETF (GDX) outperforms by 30%+",
          detail: "Leveraged gold play; profit margins balloon at higher gold prices.",
          tone: "up",
          marketHint: "Gold mining ETF",
        },
        {
          id: "central-bank-buying-amplifies",
          label: "Central bank buying accelerates further",
          detail: "Self-reinforcing: gold rally validates the diversification thesis. China, Saudi, others buy more.",
          tone: "up",
          marketHint: "CB gold purchases",
        },
        {
          id: "equity-rotation",
          label: "Equity rotation toward materials and miners",
          detail: "Gold's strong move pulls capital toward broader materials sector.",
          tone: "up",
          marketHint: "Materials sector",
        },
      ],
    ],
    takeaways: [
      "Gold spikes often combine multiple drivers (Fed cuts + geopolitics + CB buying + dollar weakness).",
      "Silver and gold mining stocks outperform gold itself in rallies (higher beta).",
      "Indian retail benefits via SGBs and Gold ETF allocations.",
      "Indian jewelry retailers have mixed reaction — value up but demand softens.",
      "Maintain 5-10% gold allocation as standing position; trim if it grows beyond 12%.",
    ],
  },
];

export function getScenario(slug: string): SimulatorScenario | undefined {
  return SCENARIOS.find((s) => s.slug === slug);
}
