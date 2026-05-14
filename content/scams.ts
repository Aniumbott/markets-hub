import type { Scam } from "./types";

export const SCAMS: Scam[] = [
  {
    slug: "ponzi",
    name: "Ponzi schemes",
    oneLiner: "Returns to early investors paid from new investors' money. Collapses inevitably.",
    howItWorks:
      "Promoter promises unrealistic returns (15-40% guaranteed). Early investors get paid from later investors' deposits, not from actual business profits. Word spreads, more money flows in. Eventually the inflow can't sustain payouts and the scheme collapses, often suddenly. The last 60-80% of investors lose most of their money.",
    redFlags: [
      "Guaranteed returns of 15%+ per year",
      "Returns 'unaffected by market conditions'",
      "Operator dodges questions about the underlying strategy or business",
      "Pressure to invest quickly before 'opportunity closes'",
      "Returns paid via cheques/cash, not regulated bank flows",
      "Withdrawals get harder as the scheme grows",
      "Promoter has charismatic lifestyle disproportionate to declared income",
    ],
    realIndianExamples: [
      {
        name: "Saradha Chit Fund",
        year: "2013",
        description: "West Bengal-based chit fund operator promising 12-25% returns. Collapsed; ~17 lakh small investors lost ~₹2,500 crore. Sparked major political scandal.",
      },
      {
        name: "Speak Asia",
        year: "2011",
        description: "Online survey company promising members weekly payouts for filling surveys. Multi-level marketing structure; collapsed when new sign-ups slowed. ~24 lakh members lost ~₹2,200 crore.",
      },
      {
        name: "PACL (Pearls Agro)",
        year: "1996-2014",
        description: "Real estate scheme promising land allotment + returns. Collapsed slowly over years; SEBI ordered refund of ~₹49,100 crore to ~5 crore investors. Most still unrecovered as of 2024.",
      },
    ],
    howToProtect: [
      "Be suspicious of any 'guaranteed' return above 10-12%",
      "Verify with SEBI: only SEBI-regulated entities can solicit public investments in India",
      "Check the regulatory registration before investing (mutual fund / PMS / AIF / RIA — all SEBI-licensed)",
      "If you don't understand the underlying business, you don't understand the risk",
      "Real businesses have audited financials; ask for them",
    ],
  },
  {
    slug: "pump-and-dump",
    name: "Pump and dump",
    oneLiner: "Coordinated buying to inflate a stock's price; then operators sell to retail at the peak.",
    howItWorks:
      "Operators accumulate a small-cap or penny stock quietly. Then they create buzz — fake news, Telegram tips, fabricated rumors, paid 'analysts' on social media. Retail FOMO buys at peak prices. Operators sell their accumulated holdings into retail demand. Stock crashes 50-80% as the buying pressure disappears. Retail is left holding the bag.",
    redFlags: [
      "Stock has run 100%+ in weeks/months for no clear fundamental reason",
      "Heavy volume in a previously illiquid name",
      "Tips circulating on Telegram, WhatsApp, paid YouTube",
      "Vague claims about 'next 10-bagger', 'multi-bagger ahead'",
      "Promoter actions inconsistent with stated optimism (selling, pledging)",
      "Trading halted at upper circuits frequently",
      "Stock price moves on rumors with no SEBI disclosures",
    ],
    realIndianExamples: [
      {
        name: "GTL Infrastructure (2010)",
        year: "2010",
        description: "Ran from ₹250 to ₹450 in months on telecom infra buzz. Crashed to ₹3 over the next 2 years. Promoter pledge unwinds and operational issues exposed.",
      },
      {
        name: "Sintex Industries (2017-19)",
        year: "2017-19",
        description: "Sustained pump from ₹70 to ₹125 on storage tank business optimism. Demerger and debt issues revealed; stock crashed to single digits.",
      },
      {
        name: "Various penny stocks (ongoing)",
        year: "Ongoing",
        description: "Sub-₹50 stocks with no fundamental story get pumped via social media channels regularly. Retail loses billions cumulatively every year.",
      },
    ],
    howToProtect: [
      "Avoid sub-₹50 stocks with low volume and no analyst coverage",
      "Don't follow Telegram/WhatsApp stock tips",
      "Check promoter pledging on Screener.in — high pledging is a red flag",
      "If a stock is up 100%+ recently with no major business event, ask why",
      "SEBI maintains a 'list of warnings' about specific operators on its website",
    ],
  },
  {
    slug: "fake-exchanges",
    name: "Fake exchange / broker scams",
    oneLiner: "Fake trading platforms that show paper profits then disappear with deposits.",
    howItWorks:
      "Scammers run websites mimicking real brokers. Offer 'demo' accounts that show fake profits. Once retail deposits real money, the platform shows continued 'profits'. When retail tries to withdraw, the platform invents reasons to block withdrawal — 'tax payment first', 'compliance review', etc. Eventually the website disappears.",
    redFlags: [
      "Broker not registered with SEBI (check at sebi.gov.in/intermediaries)",
      "Returns 'guaranteed' to be high",
      "Offers leverage above SEBI norms",
      "Payments to personal accounts or crypto wallets",
      "WhatsApp/Telegram-based onboarding",
      "Pressure to deposit larger amounts to 'unlock features'",
      "Website looks similar to real brokers but URLs differ slightly",
    ],
    realIndianExamples: [
      {
        name: "OctaFX, IQ Option style platforms",
        year: "Ongoing",
        description: "Offshore broker websites marketing to Indian residents. Forex trading is restricted for Indians; these platforms operate illegally. Multiple ED investigations.",
      },
      {
        name: "Anugrah Stock Broking",
        year: "2020",
        description: "Real SEBI-registered broker collapsed after illegal client fund usage. ~₹530 crore in client securities affected. Highlighted need for direct depository verification.",
      },
    ],
    howToProtect: [
      "Verify broker SEBI registration before opening an account",
      "Check holdings directly with CDSL/NSDL (not just the broker app)",
      "Use only major Indian regulated brokers (Zerodha, Groww, Upstox, ICICI Direct, HDFC Securities)",
      "Never deposit to a personal bank account",
      "If forex trading is offered to an Indian resident, it's a scam",
    ],
  },
  {
    slug: "fake-investment-advisors",
    name: "Unregistered investment advisors / tipsters",
    oneLiner: "Telegram, WhatsApp, YouTube 'gurus' selling stock tips and signal services — often illegal.",
    howItWorks:
      "Self-proclaimed market expert offers 'signal services' via Telegram or WhatsApp. Charges ₹2,000-₹50,000 monthly. Promises 'multi-bagger' picks, 'sure-shot intraday calls', 'F&O signals with 90% accuracy'. Reality: most are not SEBI-registered, take payments without disclosure of conflicts of interest, push high-risk trades, and disappear after a bad call. Some operate front-running schemes (buying before sending tips).",
    redFlags: [
      "Not SEBI-registered as Research Analyst (RA) or Investment Advisor (RIA)",
      "Claims of 80%+ accuracy without verification",
      "Pushes intraday or F&O trades regularly",
      "Charges flat fees rather than performance-based",
      "Shows 'profit screenshots' as proof (easily fabricated)",
      "Pushes urgency: 'this call is closing in 5 minutes'",
      "Multi-level pricing for 'premium' access",
    ],
    realIndianExamples: [
      {
        name: "Various Telegram operators",
        year: "Ongoing",
        description: "SEBI has issued warnings and prosecuted multiple Telegram-based tipster operations. Most retail subscribers lose money over time.",
      },
      {
        name: "Big Bull P R Sundar (2022)",
        year: "2022",
        description: "Popular YouTube options trader; SEBI banned for 1 year for unregistered advisory services. Highlighted that even prominent finance YouTubers can run afoul of rules.",
      },
    ],
    howToProtect: [
      "Verify SEBI RIA/RA registration on sebi.gov.in",
      "Be skeptical of accuracy claims — verify against publicly available track record",
      "Treat 'sure thing' calls as red flags by definition",
      "If F&O tips push you to trade frequently, the tipster benefits from your costs, not your profits",
      "Learn enough yourself to evaluate calls independently — the goal isn't to follow tips",
    ],
  },
  {
    slug: "crypto-rug-pulls",
    name: "Crypto rug pulls",
    oneLiner: "New token launches that take investor money and disappear.",
    howItWorks:
      "Anonymous developers create a new token. Build hype via social media, Discord, paid influencers. Token launches at low price; price pumps on hype and small float. Once retail piles in, developers either (a) drain the liquidity pool, (b) sell their pre-mined tokens, or (c) simply disappear. The token's price collapses 95-99%. Investors are left with worthless tokens.",
    redFlags: [
      "Anonymous developers (no identifiable team)",
      "Aggressive influencer marketing right at launch",
      "Heavy concentration of token supply in few wallets",
      "No audit of smart contract code",
      "Roadmap promises but no working product",
      "Heavy emphasis on price action over utility",
      "Frequent pressure on Discord/Telegram to 'hold' (suggesting they want you locked in)",
    ],
    realIndianExamples: [
      {
        name: "Squid Game token (2021)",
        year: "2021",
        description: "Inspired by Netflix show; rugged for ~$3.4M after pumping 75,000% in days. Affected global retail including Indian holders.",
      },
      {
        name: "Numerous Indian-launched memecoins",
        year: "Ongoing",
        description: "Multiple Telegram-promoted Indian-launched tokens have rugged. Some involve fake Indian sports/cricket branding.",
      },
    ],
    howToProtect: [
      "Stick to Bitcoin and Ethereum as the long-term core",
      "Avoid memecoins and unknown tokens",
      "Use only regulated Indian exchanges (CoinDCX, WazirX, Mudrex)",
      "Never custody on a new platform without proven track record",
      "If a friend's 'sure-shot crypto' is being heavily promoted, it's almost certainly a scam",
    ],
  },
  {
    slug: "fake-ipo-allotment",
    name: "Fake IPO allotment scams",
    oneLiner: "Scammers claim to 'guarantee' IPO allotment for a fee.",
    howItWorks:
      "Caller (often spoofing a real brokerage name) tells you 'we can ensure your IPO allotment in oversubscribed IPOs for a fee'. They ask you to share UPI ID, OTPs, or transfer money to specific accounts. Once you pay, no allotment happens (because IPO allotment is random and government-controlled). Some scams compromise your demat account to sell shares.",
    redFlags: [
      "Anyone claims to guarantee IPO allotment",
      "Cold calls or unsolicited WhatsApp messages",
      "Pressure to act before IPO closes",
      "Requests for OTPs or UPI auto-debit access",
      "Payment to personal bank accounts",
      "Offers 'special allotment' that isn't a standard category",
    ],
    realIndianExamples: [
      {
        name: "Multiple recent IPOs",
        year: "Ongoing",
        description: "LIC IPO, Adani Wilmar IPO, Paytm IPO all saw waves of fake allotment scam calls. Police complaints filed; many retail lost money.",
      },
    ],
    howToProtect: [
      "IPO allotment is random; no one can 'guarantee' it",
      "Apply only through official channels (your registered broker app)",
      "Never share OTPs with anyone (including 'broker support staff')",
      "Never grant UPI auto-debit access to unknown payees",
      "Hang up on unsolicited calls about IPOs",
    ],
  },
  {
    slug: "circular-trading",
    name: "Circular trading / wash sales",
    oneLiner: "Operators create artificial trading volume to lure retail into manipulated stocks.",
    howItWorks:
      "Operators control multiple accounts (via fronts or proxies). They trade the same stock between their own accounts, generating volume that retail mistakes for genuine demand. The stock price moves up on apparent volume; retail FOMO buys. Once retail volume picks up, operators dump their actual holdings. Stock crashes.",
    redFlags: [
      "Stock with low free float but unusual volume",
      "Promoter holding very high (>70%) with limited free float",
      "Volume concentrated in small group of trading IDs",
      "Price moves up without corresponding business news",
      "Frequent block deals at the same price level",
    ],
    realIndianExamples: [
      {
        name: "Various small-cap penny stocks",
        year: "Ongoing",
        description: "SEBI regularly takes action against circular trading operators. Affected stocks include various sub-₹50 names.",
      },
    ],
    howToProtect: [
      "Check free float (Screener.in) — avoid stocks with very low free float (<10%)",
      "Be cautious of stocks with sudden volume spikes after long quiet periods",
      "Compare order book depth — circular trading often creates narrow, manipulable depth",
      "Stay away from sub-₹50 stocks without analyst coverage",
    ],
  },
  {
    slug: "front-running",
    name: "Front-running by 'gurus'",
    oneLiner: "Tipsters buy a stock, recommend it to followers, then sell into the resulting demand.",
    howItWorks:
      "A 'guru' (sometimes a SEBI-registered RA, sometimes not) accumulates a position in a small-cap stock. Once positioned, they publicly recommend it to their followers. Retail buys, pushing the price up. The 'guru' sells into the demand they created. Followers are left holding at peak prices.",
    redFlags: [
      "Recommender doesn't disclose positions",
      "Recommendations tend to be in small/mid caps where small flows can move prices",
      "Stock immediately runs up 10-30% on the announcement, then drifts down for months",
      "No transparent track record",
      "Recommender benefits from 'subscription fees' as well as price action",
    ],
    realIndianExamples: [
      {
        name: "Various social media operators",
        year: "Ongoing",
        description: "SEBI has prosecuted multiple cases. Hemant Ghai (PR Sundar related case, 2022), various Twitter accounts, Telegram operators.",
      },
    ],
    howToProtect: [
      "Be skeptical of 'gurus' who don't disclose positions before recommending",
      "Cross-check recommendations against fundamentals — if a tip is the only reason to buy, don't buy",
      "If a stock pops on a tweet then drifts down for weeks, you saw front-running",
      "Develop your own thesis; use tips as starting points for research, not as buy signals",
    ],
  },
];

export function getScam(slug: string): Scam | undefined {
  return SCAMS.find((s) => s.slug === slug);
}
