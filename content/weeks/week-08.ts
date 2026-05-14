import type { Lesson } from "../types";

const W = 8;

const lessons: Lesson[] = [
  {
    id: "w08-l01",
    weekId: W,
    order: 1,
    title: "Gold as a macro asset — what really drives it",
    summary: "Three drivers do 90% of the work: real yields, the dollar, and central bank buying. Forget jewellery — this is the financial gold story.",
    minutes: 7,
    body: [
      {
        kind: "p",
        text: "Gold is the oldest financial asset. It's been money for ~5,000 years and a store of value for longer. But as a market today, gold's price is driven by three modern macro factors, not by jewellery demand.",
      },
      {
        kind: "h2",
        text: "Driver 1: Real yields",
      },
      {
        kind: "p",
        text: "Gold pays no coupon. No dividend. Just sits there. So its 'cost' is the opportunity cost of holding it instead of an interest-bearing asset. The cleanest measure of that is the 10-year US Treasury real yield — the yield on TIPS (Treasury Inflation-Protected Securities).",
      },
      {
        kind: "p",
        text: "When real yields are high (say 2-3%), you can earn meaningful real return by holding US Treasuries. Gold competes poorly. When real yields are low or negative, gold becomes attractive — you're not giving up much yield, and gold has unique properties (inflation hedge, currency hedge).",
      },
      {
        kind: "table",
        headers: ["10Y TIPS real yield", "Gold environment"],
        rows: [
          ["< -1% (deeply negative)", "Gold rockets — 2020-2021 saw this and gold ran to $2,070"],
          ["-0.5% to 0.5%", "Gold supportive"],
          ["0.5% to 2%", "Gold range-bound or weak"],
          ["> 2% (real yield premium)", "Strong gold headwind — 2022 saw this and gold fell"],
        ],
      },
      {
        kind: "h2",
        text: "Driver 2: The US dollar",
      },
      {
        kind: "p",
        text: "Gold is priced in USD globally. When the dollar gets stronger (DXY rises), you need fewer dollars to buy the same physical gold — gold price in USD falls. When the dollar weakens, gold rises.",
      },
      {
        kind: "p",
        text: "The DXY-gold correlation has been ~-0.7 over the past two decades. Most days, gold's move tracks the opposite of DXY's move.",
      },
      {
        kind: "h2",
        text: "Driver 3: Central bank buying",
      },
      {
        kind: "p",
        text: "Since 2010, central banks (especially emerging market ones — China, India, Russia, Turkey, Poland) have been net buyers of gold. Adding to their reserves. The amounts are substantial — global central banks bought ~1,000 tonnes of gold in 2022 and 2023 each, the highest ever.",
      },
      {
        kind: "p",
        text: "Why? Diversification away from US dollar reserves, especially after Russian central bank reserves were frozen post-Ukraine invasion. Many EM central banks woke up to the political risk of holding too many dollars and started accumulating gold instead.",
      },
      {
        kind: "p",
        text: "This is part of what made gold relatively resilient even when real yields were high in 2022-23. Without central bank buying, gold likely would have fallen below $1,600/oz instead of holding $1,800-2,000.",
      },
      {
        kind: "analogy",
        title: "The asset that does nothing — by design",
        text: "Stocks are productive — they own businesses generating profit. Bonds are productive — they generate interest. Gold does nothing. That's the point. Its value comes from what it isn't — not a government's currency, not a company's stock, not anyone's liability. In a world where governments can devalue currencies and companies can fail, the asset that does nothing has its own utility.",
      },
      {
        kind: "h2",
        text: "Why gold rallies in crises",
      },
      {
        kind: "p",
        text: "During major financial stress (2008-09, 2020 COVID, banking crises), gold tends to rise — sometimes dramatically. The mechanism:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Crisis → central banks cut rates and inject liquidity → real yields collapse → gold positive",
          "Crisis → fear of currency debasement → safe-haven demand → gold positive",
          "Crisis → central banks shift reserves to gold → demand support → gold positive",
        ],
      },
      {
        kind: "p",
        text: "The exception: short-term acute crises (March 2020 first wave) where gold initially sells off because everyone needs cash to meet margin calls. Gold then rallies once the immediate liquidity squeeze passes.",
      },
      {
        kind: "h2",
        text: "Gold in INR",
      },
      {
        kind: "p",
        text: "For an Indian investor, gold returns are gold in USD plus rupee depreciation. Gold ran roughly 100% in USD terms from 2018-2024; but in INR terms it ran ~150% because the rupee weakened concurrently. Indian gold investors are implicitly long USD as well.",
      },
      {
        kind: "p",
        text: "Long-term, Indian gold returns have averaged ~9-11% per year — beating FDs by 3-4 percentage points after tax. Not the highest-returning asset, but the lowest-correlation diversifier most retail can access.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Three drivers: real US yields (inverse), US dollar/DXY (inverse), central bank buying.",
          "Negative real yields = gold's best friend. Positive real yields = headwind.",
          "Central banks have been heavy net buyers since 2010, especially post-2022.",
          "Gold in INR adds rupee depreciation benefit, averaging ~9-11% long-term.",
          "Diversification value: low correlation with equities, hedges currency and inflation.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Which environment is most bullish for gold?",
        options: [
          "Strong dollar, rising real yields",
          "Negative real yields, weakening dollar, central bank buying",
          "Stable everything",
          "High Indian inflation only",
        ],
        correctIndex: 1,
        explanation: "All three classic drivers aligned: low/negative real yields remove the opportunity cost, weak dollar boosts the USD-denominated price, central bank demand supports it.",
      },
      {
        id: "q2",
        prompt: "Why have global central banks been buying record amounts of gold since 2022?",
        options: [
          "Random portfolio rebalancing",
          "Diversification away from USD reserves after sanctions showed political risk of holding too many dollars (Russian reserve freeze)",
          "Gold mining shortages",
          "Tax efficiency",
        ],
        correctIndex: 1,
        explanation: "EM central banks have been actively reducing USD reserve concentration in favor of gold post-2022 — a structural shift in global reserve composition.",
      },
    ],
  },
  {
    id: "w08-l02",
    weekId: W,
    order: 2,
    title: "Indian gold — the world's most emotional asset",
    summary: "India is the world's #2 gold consumer. Why physical gold dominates and what the household holdings actually total.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Indian households hold roughly 25,000 tonnes of gold — more than what's in most central banks combined. That's bigger than the US Federal Reserve's gold holdings (8,000 tonnes), bigger than Germany's, France's, Italy's combined. It's the world's largest privately held gold stockpile.",
      },
      {
        kind: "h2",
        text: "Why Indians love gold",
      },
      {
        kind: "list",
        items: [
          "**Cultural** — weddings, festivals, religious ceremonies all involve gold gifting",
          "**Inflation hedge** — generations of high Indian inflation made gold a trusted store of value",
          "**Distrust of paper** — older generations remember bank failures, demonetisation, financial repression",
          "**Easy to gift, easy to convert** — gold is portable and accepted everywhere",
          "**Tax-free wealth** — gold transactions are largely off-the-books, allowing intergenerational wealth transfer outside the formal tax system",
        ],
      },
      {
        kind: "h2",
        text: "Forms of Indian gold ownership",
      },
      {
        kind: "table",
        headers: ["Form", "% of Indian gold holdings (rough)", "Notes"],
        rows: [
          ["Jewellery", "~85%", "Has 'making charges' overhead; meant for use, not pure investment"],
          ["Coins / bars", "~10%", "Bought from banks or jewellers; varying purity"],
          ["Sovereign Gold Bonds (SGB)", "~3%", "Best for pure investment — coupon + capital appreciation + LTCG-free"],
          ["Gold ETFs / mutual funds", "~1.5%", "Liquid, no storage, demat-based"],
          ["Digital gold (Paytm, Phonepe)", "<0.5%", "Convenient but adds platform risk"],
        ],
      },
      {
        kind: "h2",
        text: "Making charges — the hidden cost of jewellery",
      },
      {
        kind: "p",
        text: "When you buy a 22-karat gold chain, you pay: gold value + making charges + GST. Making charges are typically 8-15% of gold value, sometimes much more for ornate work. When you sell, you get only the gold value back (sometimes a small premium). The 8-15% making charge is a sunk cost.",
      },
      {
        kind: "p",
        text: "For pure investment purposes, this is a terrible structure — you've lost 10-15% the moment you buy. Jewellery has its own value for use, but think of it as 'gold + craftsmanship' (the craftsmanship being a sunk cost), not as 'investment gold'.",
      },
      {
        kind: "h2",
        text: "Sovereign Gold Bonds — the best Indian gold investment",
      },
      {
        kind: "p",
        text: "{{sgb|SGBs}} are gold-denominated government bonds issued by the RBI in tranches. Key features:",
      },
      {
        kind: "list",
        items: [
          "**Denominated in grams** of gold — your holding tracks the gold price",
          "**2.5% annual coupon** paid semi-annually — yes, on top of capital appreciation",
          "**8-year tenure** — but tradable on NSE/BSE after 5 years and a small premium",
          "**LTCG-exempt on maturity** — if you hold to the 8-year maturity, the entire capital gain is tax-free",
          "**No making charges, no storage cost, no purity concerns**",
        ],
      },
      {
        kind: "p",
        text: "Compare to physical gold:",
      },
      {
        kind: "list",
        items: [
          "Physical: 8-15% making charges, storage cost (locker fees), purity risk, theft risk",
          "SGB: 0 cost overhead, 2.5% coupon, government-backed, LTCG-free at maturity",
        ],
      },
      {
        kind: "p",
        text: "SGB is strictly better than physical gold for investment purposes. Many Indian households still buy physical gold out of habit, but financially-aware investors should prefer SGB.",
      },
      {
        kind: "callout",
        tone: "money",
        title: "SGB tranches",
        text: "RBI typically issues 2-4 SGB tranches per year — each open for a week. Subscription happens through banks, post offices, brokers. Issue price is the average market price of gold in the week before issuance, with a ₹50/gram discount for online subscribers. Each tranche stays open briefly — watch for the announcements (usually appear on RBI website and brokers' apps).",
      },
      {
        kind: "h2",
        text: "Gold ETFs and mutual funds",
      },
      {
        kind: "p",
        text: "Gold ETFs (Nippon India Gold ETF, ICICI Prudential Gold ETF, etc.) trade on NSE during market hours. Each unit represents ~1 gram of gold (approximately). Expense ratios: 0.4-0.8%.",
      },
      {
        kind: "p",
        text: "Pros vs SGB: more liquid (intraday trading), no minimum holding period. Cons: no coupon, has annual expense ratio, taxed like other capital gains (12.5% LTCG above ₹1.25L exemption from Budget 2024).",
      },
      {
        kind: "p",
        text: "For long-term investors: SGB is better. For tactical exposure or short-term gold trading: Gold ETF.",
      },
      {
        kind: "h2",
        text: "Allocation guidelines",
      },
      {
        kind: "p",
        text: "How much gold should you hold? Traditional financial advice: 5-15% of total portfolio. Indian household reality: often 30-50% of household wealth is in physical gold, especially older generations.",
      },
      {
        kind: "p",
        text: "Realistic suggestion for a modern Indian investor:",
      },
      {
        kind: "list",
        items: [
          "Inherited family jewellery: keep, treat as cultural asset, don't count as investment",
          "Investment gold target: 5-10% of investable financial assets",
          "Vehicle: SGB primarily, with optional Gold ETF supplement for liquidity",
          "Avoid digital gold platforms (Paytm Gold, etc.) — added platform risk for no benefit",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Indian households hold ~25,000 tonnes of gold — the world's largest private stockpile.",
          "85% is jewellery; only ~5% is in 'efficient' investment forms (SGB, ETFs).",
          "Making charges on jewellery are 8-15%+ — sunk cost on day of purchase.",
          "SGB is strictly dominant over physical gold for investment: 2.5% coupon, LTCG-free at maturity, no making charges.",
          "Target 5-10% of investable financial assets in gold, primarily via SGB.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why are Sovereign Gold Bonds (SGBs) financially superior to physical gold for investment purposes?",
        options: [
          "They're not — physical gold is better",
          "SGBs offer 2.5% annual coupon on top of gold price appreciation, no making charges, LTCG-free at 8-year maturity, no storage costs",
          "SGBs are guaranteed to outperform gold price",
          "SGBs are physical and digital",
        ],
        correctIndex: 1,
        explanation: "SGBs add a 2.5% coupon, eliminate making charges (~8-15%), eliminate storage cost, and offer LTCG-free returns at maturity — a strictly better structure than physical gold for investment.",
      },
      {
        id: "q2",
        prompt: "Approximately how much of Indian household gold is in 'efficient investment forms' (SGB, ETFs, mutual funds)?",
        options: ["~50%", "~25%", "~5%", "~90%"],
        correctIndex: 2,
        explanation: "Around 85% is jewellery. Coins/bars are another 10%. Only ~5% is in SGB/ETF/MF — the financially efficient forms.",
      },
    ],
  },
  {
    id: "w08-l03",
    weekId: W,
    order: 3,
    title: "Silver — the volatile cousin",
    summary: "Silver is gold's louder, less reliable sibling. When to pay attention and when to ignore.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "Silver is often discussed alongside gold but trades very differently. It's roughly 80% industrial and 20% monetary/investment, vs gold which is ~10% industrial and 90% monetary/investment. This dual nature makes silver more volatile and less predictable than gold.",
      },
      {
        kind: "h2",
        text: "The gold-silver ratio",
      },
      {
        kind: "p",
        text: "Gold/silver ratio tells you how many ounces of silver equal one ounce of gold. Historically the ratio has ranged from 15 (silver more valued) to 100 (gold more valued). The 2024 ratio sits around 85-90.",
      },
      {
        kind: "table",
        headers: ["Ratio", "Interpretation"],
        rows: [
          ["< 50", "Silver relatively expensive vs gold"],
          ["50-70", "Historical normal"],
          ["70-90", "Silver relatively cheap"],
          ["> 90", "Silver very cheap — often catches up later"],
        ],
      },
      {
        kind: "p",
        text: "When the ratio is at extreme highs (90+), silver has historically rallied to bring the ratio down. The 1980 spike, 2010-11 silver run, and the 2020-21 'Silver Squeeze' all happened from high ratio starting points. The trade isn't reliable — silver can stay 'cheap' for years — but ratio is one useful indicator.",
      },
      {
        kind: "h2",
        text: "Industrial demand",
      },
      {
        kind: "p",
        text: "Silver has unique industrial uses: solar panels (silver paste for cells), electronics (best electrical conductor), medical (antimicrobial), photography (declining), and increasingly batteries and 5G antennas. Solar demand alone has doubled silver's industrial consumption in the past decade.",
      },
      {
        kind: "p",
        text: "If you're bullish on solar and clean energy long-term, silver is an indirect play.",
      },
      {
        kind: "h2",
        text: "Volatility",
      },
      {
        kind: "p",
        text: "Silver's annualised volatility is roughly 30-35% — much higher than gold's ~15-18%. On a single day, silver can move 5-7% while gold moves 1-2%. The same drivers (real yields, dollar) affect both, but silver amplifies the moves due to lower liquidity and industrial uncertainty.",
      },
      {
        kind: "analogy",
        title: "The hyper child of a calm family",
        text: "Gold is the calm older sibling — moves slowly, predictably, with reason. Silver is the hyperactive younger one — same DNA (precious metal), same triggers (rates, dollar), but exaggerates every reaction by 2x. Sometimes that's profitable. Sometimes you wish silver would just sit still.",
      },
      {
        kind: "h2",
        text: "How to hold silver in India",
      },
      {
        kind: "list",
        items: [
          "**MCX silver futures** — directly traded, but leveraged and complex. Tax: business income.",
          "**Silver ETFs** — ICICI Prudential, Nippon India, others launched in 2022-23. Buy on NSE.",
          "**Silver coins / bars** — physical, similar overhead issues as gold (purity, storage, making charges).",
          "**Silver mining stocks** — Indian options limited; global names available via international funds.",
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "Silver is not a 'better gold'",
        text: "Silver gets pitched as 'gold's cheaper alternative'. It's a different asset class — more industrial, more volatile, less correlated with classic monetary drivers. Don't substitute silver for gold in a portfolio. If you want silver exposure, treat it as a separate, smaller (2-5%), more speculative position.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Silver is ~80% industrial, 20% monetary — opposite of gold's mix.",
          "Silver is much more volatile than gold (30-35% vs 15-18% annualised).",
          "Gold-silver ratio above 90 has historically preceded silver rallies (but unreliable).",
          "Industrial demand from solar panels is a structural tailwind.",
          "Hold via Silver ETF or MCX futures; not a substitute for gold.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does silver have higher volatility than gold?",
        options: [
          "Lower trading volume only",
          "Silver is ~80% industrial demand, less liquidity, and more uncertain end-use — amplifies macro moves",
          "Government regulations",
          "Better hedging available",
        ],
        correctIndex: 1,
        explanation: "Silver's industrial-heavy mix and lower liquidity amplify gold's drivers (real yields, dollar) by roughly 2x in volatility.",
      },
      {
        id: "q2",
        prompt: "What does a gold-silver ratio of 95 typically suggest?",
        options: [
          "Silver is very expensive",
          "Silver is relatively cheap vs gold — historically preceded silver rallies, though unreliable",
          "Gold is going to fall",
          "Stable equilibrium",
        ],
        correctIndex: 1,
        explanation: "High ratio = silver cheap relative to gold. Silver has historically caught up from high ratio starts (1980, 2010-11, 2020-21) — but the trade is unreliable and can take years.",
      },
    ],
  },
  {
    id: "w08-l04",
    weekId: W,
    order: 4,
    title: "Dr. Copper and industrial metals",
    summary: "Copper, aluminium, nickel, zinc — the metals that signal economic cycles and feed Indian heavy industry.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "If gold is the monetary metal, copper is the industrial one. Used in everything from electrical wiring to construction to EVs. Copper's price reflects real-world economic demand — which is why traders call it 'Dr. Copper': it has a PhD in economics.",
      },
      {
        kind: "h2",
        text: "Why copper signals growth",
      },
      {
        kind: "p",
        text: "Copper is in the early supply chain of:",
      },
      {
        kind: "list",
        items: [
          "Electrical infrastructure (transmission, distribution, motors)",
          "Construction (wiring, plumbing)",
          "Manufacturing (electronics, machinery)",
          "Electric vehicles (each EV uses ~80 kg of copper, vs ~20 kg for an ICE car)",
          "Renewable energy (solar panels, wind turbines, grid infrastructure)",
        ],
      },
      {
        kind: "p",
        text: "When global growth accelerates, copper demand rises ahead of GDP. When growth slows, copper falls early. The lead time is typically 2-3 months — copper turning down often precedes a slowdown in PMIs and GDP.",
      },
      {
        kind: "h2",
        text: "China — the dominant consumer",
      },
      {
        kind: "p",
        text: "China consumes ~55% of global copper. Chinese property sector and infrastructure construction are the biggest single demand drivers. When Chinese property is weak (2022-24), copper drifts. When Chinese stimulus is announced, copper rallies fast.",
      },
      {
        kind: "p",
        text: "Watching the China property indicator (housing starts, new construction) is one of the best leading signals for copper. Bloomberg's China property activity index is widely tracked.",
      },
      {
        kind: "h2",
        text: "The EV / energy transition tailwind",
      },
      {
        kind: "p",
        text: "Long-term, copper demand has a structural tailwind:",
      },
      {
        kind: "list",
        items: [
          "Each EV uses 3-4x the copper of an ICE car",
          "Global electricity grid needs massive upgrades for renewables",
          "Data center buildout (AI capex) requires copper for power and cabling",
          "Estimates: global copper demand could double by 2040",
        ],
      },
      {
        kind: "p",
        text: "Supply is constrained — new copper mines take 10+ years from discovery to production. This supply-demand gap could keep copper prices structurally elevated through the 2030s.",
      },
      {
        kind: "h2",
        text: "Other industrial metals",
      },
      {
        kind: "table",
        headers: ["Metal", "Main uses", "What drives it"],
        rows: [
          ["Aluminium", "Cans, construction, autos, aerospace", "Energy prices (smelting is electricity-intensive), Chinese supply"],
          ["Nickel", "Stainless steel, EV batteries", "Indonesian supply, Chinese demand, battery chemistry shifts"],
          ["Zinc", "Galvanizing steel, batteries", "Construction cycle"],
          ["Lithium", "EV batteries (primary)", "EV adoption pace, lithium supply expansion"],
          ["Cobalt", "Batteries (declining as chemistry shifts)", "DRC supply (Congo), battery chemistry"],
        ],
      },
      {
        kind: "h2",
        text: "Indian metal stocks",
      },
      {
        kind: "p",
        text: "Indian metal stocks broadly track global commodity prices but with some India-specific twists (domestic demand, government policy):",
      },
      {
        kind: "list",
        items: [
          "**Hindalco** (aluminium + copper) — Aditya Birla group, large-cap, integrated",
          "**Vedanta** (zinc, aluminium, oil & gas, iron ore) — diversified miner, structural debt concerns",
          "**Tata Steel** — steel-focused, also exposed to coal (input), iron ore",
          "**JSW Steel** — second-largest Indian steel producer",
          "**NMDC** — iron ore PSU; pure-play commodity exposure",
          "**Hindustan Zinc** (subsidiary of Vedanta) — world's largest zinc miner",
          "**Coal India** — coal PSU; despite the energy transition narrative, coal stays in demand for India's near-term power needs",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Metal stocks are highly cyclical",
        text: "Indian metal stocks have ranges of 50%+ from peak to trough through cycles. Tata Steel went from ₹1,500 to ₹400 (-73%) during 2018-20, then back to ₹1,500+ during 2021. Buying near cycle bottoms and selling near tops is theoretically lucrative but practically very hard — the cycle timing eludes most investors.",
      },
      {
        kind: "h2",
        text: "How to play metals",
      },
      {
        kind: "list",
        items: [
          "**Direct stocks**: Hindalco, Tata Steel, JSW Steel for diversified exposure; NMDC for pure iron ore",
          "**ETFs**: ICICI Prudential Nifty Metal ETF tracks the Nifty Metal index",
          "**Avoid Indian commodity futures** unless you have deep knowledge — these markets are thin and volatile",
        ],
      },
      {
        kind: "keyTakeaways",
        items: [
          "Copper is 'Dr. Copper' — leads global economic cycles by 2-3 months.",
          "China consumes ~55% of global copper; Chinese property is the key indicator.",
          "EV and energy transition are structural copper demand tailwinds.",
          "Other industrial metals (aluminium, nickel, zinc) have specific stories.",
          "Indian metal stocks are highly cyclical — 50%+ ranges peak to trough.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why is copper called 'Dr. Copper'?",
        options: [
          "A famous economist named it",
          "Copper has a PhD in economics — its price tends to lead global economic cycles by 2-3 months",
          "Trader nickname",
          "Random naming",
        ],
        correctIndex: 1,
        explanation: "Copper demand reflects real-world industrial activity. Its turning points often precede broader economic data (PMI, GDP) by a quarter or so.",
      },
      {
        id: "q2",
        prompt: "Why does the EV transition support a structural copper demand tailwind?",
        options: [
          "EVs don't use copper",
          "Each EV uses 3-4x the copper of an ICE car; combined with grid upgrades and renewables, copper demand could double by 2040",
          "EVs use silver only",
          "Copper is decorative in EVs",
        ],
        correctIndex: 1,
        explanation: "EV motors, batteries, charging infrastructure, and the broader electrification of energy all require copper. Forecasts suggest a structural demand-supply gap through the 2030s.",
      },
    ],
  },
  {
    id: "w08-l05",
    weekId: W,
    order: 5,
    title: "Coal and energy commodities for India",
    summary: "India's energy mix is still coal-heavy. Why this contradicts the green narrative and what it means for investors.",
    minutes: 5,
    body: [
      {
        kind: "p",
        text: "India's electricity mix is roughly 70% coal-based as of 2024. Despite massive renewable energy growth (solar capacity doubled in 5 years), coal remains the dominant source of Indian power and will be for at least another decade. Understanding this matters because coal-related stocks (Coal India, NTPC, Tata Power) are a significant part of the Indian equity universe.",
      },
      {
        kind: "h2",
        text: "Why coal isn't going away in India",
      },
      {
        kind: "list",
        items: [
          "**Growth in absolute power demand** — India's electricity consumption is growing ~5-7% per year. Even with renewables expanding, coal output also has to grow just to keep up.",
          "**Existing infrastructure** — thermal power plants worth lakhs of crore have decades of operating life remaining",
          "**Cost** — Indian coal-fired power is still cheaper per unit than renewables once you include storage and backup",
          "**Baseload reliability** — coal provides 24/7 power; solar/wind are intermittent",
          "**Domestic supply** — India has the 5th-largest coal reserves globally; energy security argument",
        ],
      },
      {
        kind: "h2",
        text: "Coal India — the dominant player",
      },
      {
        kind: "p",
        text: "Coal India is the world's largest coal mining company, producing ~80% of India's coal. State-owned, listed on NSE/BSE.",
      },
      {
        kind: "p",
        text: "The investment case has been controversial:",
      },
      {
        kind: "list",
        items: [
          "**Bullish view**: Predictable cash flow, monopoly position, growing absolute demand, 8%+ dividend yield",
          "**Bearish view**: Structural decline narrative, ESG concerns from foreign investors, energy transition risk, government policy unpredictability",
        ],
      },
      {
        kind: "p",
        text: "Coal India has been one of the best-performing PSU stocks in 2022-24 — up 200%+ — as the bullish view played out and absolute demand growth continued.",
      },
      {
        kind: "h2",
        text: "Other energy commodity stocks",
      },
      {
        kind: "list",
        items: [
          "**NTPC** — largest power generator, mostly coal-based but rapidly adding renewables",
          "**Power Grid** — transmission monopoly, more defensive",
          "**Tata Power** — diversified across coal, renewables, distribution",
          "**Adani Power** — large private generator, commodity-sensitive",
          "**JSPL** — power + steel + iron ore integrated",
        ],
      },
      {
        kind: "h2",
        text: "Natural gas — the bridge fuel",
      },
      {
        kind: "p",
        text: "Natural gas plays a smaller but growing role in India's energy mix. Imports come mostly as LNG (liquefied natural gas). Major Indian gas plays:",
      },
      {
        kind: "list",
        items: [
          "**Petronet LNG** — imports and regasifies LNG",
          "**GAIL** — gas transmission and distribution monopoly",
          "**Gujarat State Petronet** — regional gas pipeline operator",
          "**City Gas Distribution** (IGL, Mahanagar Gas, Gujarat Gas) — already covered in Week 7",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "The Indian energy transition is real but slow",
        text: "Despite all the headlines, India's energy transition is at least 15-20 years from completion. In the meantime, both coal and renewables grow. This isn't a 'coal stocks die' story — it's 'coal slowly loses share even as it grows in absolute terms'. Investment outlook for coal stocks: not a structural growth story, but not collapsing either. Treat as cyclical, dividend-paying, with policy risk.",
      },
      {
        kind: "h2",
        text: "Renewables — the structural growth side",
      },
      {
        kind: "p",
        text: "If coal is the cyclical-dividend side, renewables are the growth side. Indian renewable energy companies have been a stock-market favourite:",
      },
      {
        kind: "list",
        items: [
          "**Adani Green Energy** — largest renewable player, big moves on Adani group news",
          "**Tata Power Renewable** — part of Tata Power",
          "**JSW Energy** — diversifying into renewables",
          "**Suzlon** — wind turbine manufacturer, recently revived after years of distress",
          "**NTPC Green Energy** — newly listed (2024), pure-play renewable subsidiary of NTPC",
        ],
      },
      {
        kind: "p",
        text: "Renewable stocks trade at premium valuations (high P/E, often loss-making or low-margin) on growth expectations. The risk is execution — many companies have announced ambitious capacity targets that may take longer to deliver.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "India's electricity is still ~70% coal. Energy transition is slow.",
          "Coal India: world's largest coal miner, controversial but high dividend yield + 200% rally 2022-24.",
          "Coal demand keeps growing in absolute terms even as renewables expand.",
          "Renewables (Adani Green, Tata Power, etc.) are the growth play, but valuations reflect this.",
          "Diversified power utility (Power Grid, NTPC) is more defensive than pure coal or pure renewable.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Roughly what percentage of India's electricity comes from coal in 2024?",
        options: ["~30%", "~50%", "~70%", "~95%"],
        correctIndex: 2,
        explanation: "Around 70% of India's installed electricity capacity is coal-based. Renewables have grown rapidly but the energy transition is a 15-20 year process.",
      },
      {
        id: "q2",
        prompt: "Why has Coal India outperformed despite the global energy transition narrative?",
        options: [
          "ESG funds bought it",
          "Indian coal demand continues to grow in absolute terms due to electricity demand growth, providing predictable cash flow + high dividend yield",
          "Government subsidies",
          "Random luck",
        ],
        correctIndex: 1,
        explanation: "India's absolute power demand growth means coal needs to grow even as its share declines. Stable cash flows + 8%+ dividend yield made Coal India a re-rated PSU favorite.",
      },
    ],
  },
  {
    id: "w08-l06",
    weekId: W,
    order: 6,
    title: "Putting commodities in your portfolio",
    summary: "How much, in what form, and when. A practical framework for the commodity slice of an Indian portfolio.",
    minutes: 6,
    body: [
      {
        kind: "p",
        text: "Commodities — gold, silver, industrial metals, energy — should occupy 5-15% of most well-constructed portfolios. They add diversification, inflation hedging, and capture growth that doesn't always show up in equity. But the wrong implementation can be expensive.",
      },
      {
        kind: "diagram",
        diagram: "risk-return-scatter",
        caption: "Where each Indian asset class sits on the risk-return spectrum. Commodities and equity are higher-risk/higher-return; debt is the stabilizer.",
      },
      {
        kind: "h2",
        text: "Why commodities deserve a slice",
      },
      {
        kind: "list",
        items: [
          "**Low correlation with equities** — Indian equity has 0.0-0.2 correlation with gold over rolling 10-year windows. Adds real diversification.",
          "**Inflation hedge** — when inflation rises, equity multiples often compress while commodities can rise. Commodities don't always work as inflation hedges in the short term but tend to over multi-year periods.",
          "**Currency hedge** — most commodities are USD-priced; INR depreciation lifts INR returns.",
          "**Distinct return drivers** — commodities respond to OPEC, weather, geopolitics — drivers that don't move equity directly.",
        ],
      },
      {
        kind: "h2",
        text: "A reasonable allocation framework",
      },
      {
        kind: "table",
        headers: ["Asset class", "% of total portfolio", "Vehicle"],
        rows: [
          ["Indian equity", "55-70%", "Nifty 50 + Midcap index funds, some active funds"],
          ["International equity", "10-20%", "US Nasdaq 100 or S&P 500 fund"],
          ["Indian debt", "10-20%", "Liquid funds for emergency; long-duration funds for term"],
          ["Gold", "5-10%", "SGB primarily, gold ETF secondary"],
          ["Silver / industrial metals", "0-3%", "Optional satellite via Silver ETF or metal stocks"],
          ["Crypto", "0-3%", "Optional, BTC + ETH only via legal exchanges"],
        ],
      },
      {
        kind: "p",
        text: "Tweak the ratios for your age, risk tolerance, and goals. Younger investors can lean more equity (75%+). Approaching retirement, shift toward debt and gold (40%+).",
      },
      {
        kind: "h2",
        text: "Avoiding common mistakes",
      },
      {
        kind: "list",
        items: [
          "**Don't time commodity entries** — they're cyclical and unpredictable. SIP your gold allocation steadily.",
          "**Don't substitute commodities for equity** — commodities lack the compounding power of equity over long periods.",
          "**Don't chase specific commodities** — buying lithium ETFs at the peak in 2022 was painful; structural stories take years to play out.",
          "**Don't ignore tax** — international commodity ETFs lose the favourable equity tax treatment.",
          "**Don't double up on gold** — if you have inherited family gold, count it as part of your allocation.",
        ],
      },
      {
        kind: "h2",
        text: "Rebalancing",
      },
      {
        kind: "p",
        text: "Once your target allocation is set, rebalance annually. If gold has rallied to 12% of your portfolio (up from 8% target), sell down to target and rotate into underweight asset classes. This forces 'sell high, buy low' behavior mechanically.",
      },
      {
        kind: "p",
        text: "Most investors fail at rebalancing because they're reluctant to sell their winners. Setting a calendar reminder (e.g., 1st January every year) helps make it automatic.",
      },
      {
        kind: "analogy",
        title: "The chess board",
        text: "Allocation is your opening position. Rebalancing is your middle game — small, regular adjustments that compound. Most retail investors play the opening well (allocate sensibly), then forget the rest of the game. The middle game (10 years of disciplined rebalancing) is what actually wins.",
      },
      {
        kind: "h2",
        text: "Common Indian portfolio mistakes",
      },
      {
        kind: "list",
        items: [
          "**Too much gold** — many Indian households are 30-50% gold; sub-optimal for long-term return",
          "**Too much real estate** — illiquid, often poor real returns after maintenance/property tax",
          "**Zero international exposure** — Indian middle class is heavily underweight global equity",
          "**Heavy F&O speculation as 'investing'** — F&O is mostly capital destruction for retail",
          "**FD as a primary investment** — see Week 2 lesson on real returns",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "A 5-line plan",
        text: "60% Indian equity (Nifty 50 + Nifty Midcap 150 index funds, 60-40 between them). 20% international (Nasdaq 100 or S&P 500 fund). 10% debt (liquid + medium-duration mix). 8% gold (mostly SGB). 2% optional (crypto/silver/specific themes). Rebalance annually. That's it for 90% of working Indians.",
      },
      {
        kind: "keyTakeaways",
        items: [
          "Commodities deserve 5-15% of most portfolios — diversification, inflation/currency hedge.",
          "Default: 5-10% gold via SGB; small optional silver/metal slice.",
          "SIP your commodity allocation; don't try to time entry.",
          "Rebalance annually to enforce discipline.",
          "Avoid common Indian mistakes: gold-heavy, real-estate-heavy, F&O speculation as investing.",
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What's a reasonable target gold allocation for a typical Indian working investor (not counting inherited jewellery)?",
        options: ["0%", "5-10% via SGB primarily", "30-50%", "100%"],
        correctIndex: 1,
        explanation: "5-10% gold via SGB provides diversification and inflation hedge without sacrificing too much long-term equity compounding.",
      },
      {
        id: "q2",
        prompt: "Why is rebalancing annually important?",
        options: [
          "It's required by law",
          "Forces 'sell high, buy low' behavior mechanically — selling winners that have grown beyond target and adding to underweights",
          "It saves taxes",
          "Annual rebalancing is irrelevant",
        ],
        correctIndex: 1,
        explanation: "Rebalancing maintains your risk profile and forces counter-cyclical behavior. Most retail investors fail to rebalance because they don't want to sell winners.",
      },
    ],
  },
];

export const WEEK_08_LESSONS = lessons;
