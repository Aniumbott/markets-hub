import type { Week, Lesson } from "./types";
import { WEEK_03_LESSONS } from "./weeks/week-03";
import { WEEK_04_LESSONS } from "./weeks/week-04";
import { WEEK_05_LESSONS } from "./weeks/week-05";
import { WEEK_06_LESSONS } from "./weeks/week-06";
import { WEEK_07_LESSONS } from "./weeks/week-07";
import { WEEK_08_LESSONS } from "./weeks/week-08";
import { WEEK_09_LESSONS } from "./weeks/week-09";
import { WEEK_10_LESSONS } from "./weeks/week-10";
import { WEEK_11_LESSONS } from "./weeks/week-11";
import { WEEK_12_LESSONS } from "./weeks/week-12";
import { WEEK_13_LESSONS } from "./weeks/week-13";
import { WEEK_14_LESSONS } from "./weeks/week-14";
import { WEEK_15_LESSONS } from "./weeks/week-15";
import { WEEK_16_LESSONS } from "./weeks/week-16";

// -----------------------------------------------------------------------
// WEEK 1 — What is a market, really?
// -----------------------------------------------------------------------

const w1l1: Lesson = {
  id: "w01-l01",
  weekId: 1,
  order: 1,
  title: "The mandi metaphor: every market is the same machine",
  summary: "Why a vegetable mandi, the NSE order book, and a kabaadi-walla buying scrap are all running the same algorithm.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "Walk into the Dadar vegetable mandi at 5 in the morning. A truck of tomatoes from Nashik arrives. Within minutes, ten wholesalers are shouting prices. Some buy. Some walk away. By 6 AM, the entire truckload has cleared at a single price band — say ₹22 to ₹24 per kg. That price wasn't decided by the farmer. It wasn't decided by the buyers. It emerged from their arguing.",
    },
    {
      kind: "p",
      text: "That, in one paragraph, is what a {{market|market}} does. It's a {{price-discovery|price-discovery}} machine. Buyers and sellers show up with different opinions about what something is worth, they argue with their wallets, and a clearing price comes out the other end. Nothing else.",
    },
    {
      kind: "h2",
      text: "The form changes; the function doesn't",
    },
    {
      kind: "p",
      text: "Strip away the differences and the NSE, the Dadar mandi, OLX, and the IPL player auction are running the same algorithm:",
    },
    {
      kind: "list",
      items: [
        "Multiple buyers, each with their own valuation in mind",
        "Multiple sellers, each with their own reservation price",
        "Some way for them to find each other (a venue, an app, a phone)",
        "Some way to settle the deal (cash, demat, escrow)",
        "A continuous tug-of-war that updates the price as new information arrives",
      ],
    },
    {
      kind: "p",
      text: "When a Mumbai Indians player goes to auction, the price reflects every team's view of his value combined with the budget constraint each has left. If three teams want him, the price spikes. If one team has a big budget and the others have already filled their slots, the price collapses. Same dance happens every microsecond on the NSE for a share of HDFC Bank.",
    },
    {
      kind: "analogy",
      title: "Why this matters for you",
      text: "When you check the price of Reliance on your phone, you're seeing the verdict of millions of arguments happening in real time. The price isn't 'what Reliance is worth'. It's what the marginal buyer and the marginal seller agreed on for the last trade. Tomorrow they'll argue again.",
    },
    {
      kind: "h2",
      text: "Three things the price tells you (and three it doesn't)",
    },
    {
      kind: "p",
      text: "The current price is information, but it's specific information. It tells you:",
    },
    {
      kind: "list",
      items: [
        "What people who actually transacted recently agreed on",
        "Where the marginal buyer is willing to step in",
        "Where the marginal seller is willing to let go",
      ],
    },
    {
      kind: "p",
      text: "It does not tell you:",
    },
    {
      kind: "list",
      items: [
        "What the asset is 'really' worth (that's {{valuation|valuation}}, a separate exercise)",
        "What will happen next (price is the past, not the future)",
        "What everyone thinks — only the marginal buyer and seller, who together represent a tiny slice of opinion",
      ],
    },
    {
      kind: "callout",
      tone: "info",
      title: "The 'marginal' point",
      text: "If 99% of HDFC Bank shareholders refuse to sell at ₹1,620 and 1% are willing, the price is set by that 1% transacting with the 1% of new buyers willing to pay ₹1,620. The price is a tail-of-the-distribution thing, not a vote of the majority.",
    },
    {
      kind: "h2",
      text: "Where this idea breaks (a little)",
    },
    {
      kind: "p",
      text: "The pure mandi model assumes lots of buyers, lots of sellers, and easy entry. In the real world, some markets are dominated by a few large players (institutional bond trading, FX between banks), and prices can move on a single big order. Some markets are also rigged in legal ways — circuit breakers stop trading when prices move too far too fast, and regulators step in during crises. None of that breaks the core idea; it just means the machine sometimes runs with one hand tied behind its back.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "A market is anywhere price emerges from buyers and sellers transacting.",
        "Price is the verdict of the marginal participant, not the average opinion.",
        "Price tells you about the past and the edge of opinion; not what something is 'really' worth.",
        "The mechanism is the same everywhere — the mandi, the IPL auction, the NSE.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "What does a price in any market most accurately represent?",
      options: [
        "The average view of all market participants",
        "What the asset is 'really' worth in some objective sense",
        "What the marginal buyer and marginal seller most recently agreed on",
        "The opinion of the largest holder of the asset",
      ],
      correctIndex: 2,
      explanation: "Price emerges from the transaction at the margin — the last buyer and seller who actually agreed and traded.",
    },
    {
      id: "q2",
      prompt: "If 99% of HDFC Bank shareholders refuse to sell at ₹1,620 but 1% are willing, what determines the price?",
      options: [
        "The 99% who refuse to sell",
        "A weighted average of all opinions",
        "The 1% who transact at that price",
        "The RBI sets it indirectly",
      ],
      correctIndex: 2,
      explanation: "Price is set by who is actually trading, not by who is sitting on their holdings.",
    },
  ],
};

const w1l2: Lesson = {
  id: "w01-l02",
  weekId: 1,
  order: 2,
  title: "Bid, ask, and the cost of being in a hurry",
  summary: "The invisible cost on every trade, why it exists, and when it'll eat you alive.",
  minutes: 8,
  body: [
    {
      kind: "p",
      text: "Open Zerodha Kite. Pull up HDFC Bank. You'll see two prices, not one. Maybe ₹1,620.10 and ₹1,620.20. The lower one is the {{bid-ask|bid}} — the highest price someone is currently willing to pay. The higher one is the ask — the lowest price someone is currently willing to sell at. The 10-paise gap between them is the spread.",
    },
    {
      kind: "diagram",
      diagram: "bid-ask",
      caption: "The order book shows multiple bids and asks at different prices. The spread is the gap between the best bid and best ask.",
    },
    {
      kind: "p",
      text: "That 10-paise gap is a cost. It's the cost of being in a hurry.",
    },
    {
      kind: "analogy",
      title: "The currency exchange counter",
      text: "Walk into Thomas Cook at Mumbai airport. Their board shows USD/INR at ₹83.20 to buy, ₹84.40 to sell. They buy dollars from you cheap and sell them to you dear. The gap is how they make money. Every market in the world has a version of this gap — it's not a scam, it's the price of liquidity.",
    },
    {
      kind: "h2",
      text: "Who's quoting these prices?",
    },
    {
      kind: "p",
      text: "On NSE, the bid and ask are aggregated from every {{limit-order|limit order}} sitting in the {{order-book|order book}}. The best bid is the highest limit buy order someone has posted. The best ask is the lowest limit sell order. Whenever a new {{market-order|market order}} comes in, it eats one side of the book and the next-best price becomes the new top.",
    },
    {
      kind: "p",
      text: "For large stocks like Reliance or TCS, both sides of the book are deep — there are thousands of shares lined up at each price level. For a small-cap stock, you might only see 200 shares at the best bid and ask. Try to buy 5,000 and you'll eat through multiple price levels — the average price you actually pay can be 1-2% above the displayed ask. That's {{slippage|slippage}}.",
    },
    {
      kind: "h2",
      text: "Why the spread exists",
    },
    {
      kind: "p",
      text: "Spreads exist because someone has to be standing there ready to trade against you. That someone — usually a {{market-maker|market maker}} or just another patient investor — is taking inventory risk. If you're a market maker buying HDFC Bank at ₹1,620.10 and the news hits that the bank had a fraud, you might be stuck owning at ₹1,620 while the price drops to ₹1,500 before you can sell. The spread is your compensation for that risk.",
    },
    {
      kind: "p",
      text: "Three things widen spreads:",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Low liquidity** — fewer participants means each one demands more compensation. A small-cap stock with thin volume might show a 1-2% spread.",
        "**Volatility** — when prices are jumping, inventory risk is higher, so spreads widen. India VIX above 25 widens spreads across the board.",
        "**Information asymmetry** — if a market maker suspects you know something they don't (you're a big fund with research), they pull back and widen quotes.",
      ],
    },
    {
      kind: "h2",
      text: "How this costs you real money",
    },
    {
      kind: "p",
      text: "Say you buy ₹1 lakh of a small-cap stock with a 2% spread. You bought at the ask. To break even, the stock has to move up 2% just to get back to where you could sell it without losing. On the same ₹1 lakh in HDFC Bank with a 0.01% spread, the math is essentially free.",
    },
    {
      kind: "callout",
      tone: "money",
      title: "The realistic Indian retail trader cost stack",
      text: "Brokerage (₹20 per order on Zerodha) + STT (~0.1% on delivery) + GST + SEBI charges + exchange fees + bid-ask spread. For active intraday traders, this stack can easily add up to 0.1-0.3% per round trip. F&O traders pay even more, especially after STT was hiked in Budget 2024. SEBI's data shows ~90% of individual F&O traders lose money over a year — costs are a major reason why.",
    },
    {
      kind: "h2",
      text: "How to actually use this",
    },
    {
      kind: "p",
      text: "If you're buying a long-term position in a liquid large cap, the spread is rounding error — don't overthink it. If you're putting more than ₹50,000 into a small or mid-cap stock, use limit orders. If you're trading F&O, watch the book before you click — bid-ask on options can be hilariously wide, especially in deep-OTM strikes 10 minutes after the open.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "Bid = highest buyer's offer. Ask = lowest seller's offer. Spread = the gap.",
        "Spread is your cost just to enter and exit, on top of brokerage and taxes.",
        "Spreads widen with low liquidity, high volatility, and information asymmetry.",
        "Big in small caps; negligible in liquid large caps. Always check before clicking.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "You see HDFC Bank with bid ₹1,620.10 and ask ₹1,620.20. You place a market order to buy. What price do you most likely get?",
      options: ["₹1,620.10", "₹1,620.15", "₹1,620.20 or slightly higher", "The last traded price"],
      correctIndex: 2,
      explanation: "Market buy orders fill at the ask side or worse. The bid is where you'd fill if you were selling at market.",
    },
    {
      id: "q2",
      prompt: "Which scenario most widens bid-ask spreads?",
      options: [
        "A liquid stock during normal trading hours",
        "A small cap stock during high India VIX",
        "Nifty 50 stocks at 10:30 AM",
        "Reliance after market close (last 15 minutes)",
      ],
      correctIndex: 1,
      explanation: "Low liquidity + high volatility = widest spreads. Small caps in panicky markets are the worst combination.",
    },
    {
      id: "q3",
      prompt: "When is the bid-ask spread effectively free?",
      options: [
        "Always — spreads don't matter for retail",
        "When buying liquid large caps in long-term positions",
        "When using market orders",
        "Spreads are never free",
      ],
      correctIndex: 1,
      explanation: "On liquid large caps with tight spreads, the cost is negligible compared to the holding period return.",
    },
  ],
};

const w1l3: Lesson = {
  id: "w01-l03",
  weekId: 1,
  order: 3,
  title: "Liquidity: the difference between volume and being able to exit",
  summary: "Why daily turnover is a misleading signal, and what depth actually means when you need to get out.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "Liquidity is the most over-used and under-understood word in markets. Most people use it as a synonym for volume. They are not the same thing.",
    },
    {
      kind: "p",
      text: "{{volume|Volume}} is how many shares changed hands. {{liquidity|Liquidity}} is whether you, specifically, can exit your position right now without moving the price against yourself. A stock can have huge volume on a single bad-news day and zero usable liquidity if the volume is everyone running for the exit at once.",
    },
    {
      kind: "analogy",
      title: "The Mumbai local at 9 AM",
      text: "Volume is the count of people getting on and off at Dadar in an hour. Liquidity is whether, at 9:02 AM with a packed compartment, you can actually get off at your stop. Lots of bodies moving doesn't mean it's easy to move yourself.",
    },
    {
      kind: "h2",
      text: "Depth: the part most people don't look at",
    },
    {
      kind: "p",
      text: "Open the market depth view on Kite. You'll see the top five bids and top five asks, each with a quantity. That's depth. For Reliance at ₹2,800, the picture might look like this:",
    },
    {
      kind: "diagram",
      diagram: "order-book",
      caption: "Depth shows how many shares are queued at each price level. Wide bars = lots of inventory; thin bars = the price could break quickly.",
    },
    {
      kind: "p",
      text: "Tens of thousands of shares within a few paise of the top. You could sell ₹2 crore worth and barely shift the price. Now contrast a small cap:",
    },
    {
      kind: "table",
      headers: ["Bid", "Quantity"],
      rows: [
        ["320.00", "100"],
        ["318.50", "200"],
        ["315.00", "150"],
        ["310.00", "75"],
        ["305.00", "300"],
      ],
      caption: "Top 5 bids for a small cap (illustrative)",
    },
    {
      kind: "p",
      text: "Selling 1,000 shares walks you down ₹15 — a 4-5% hit. The displayed 'price' was ₹320, but the average price you actually got was ₹313. That gap is the real cost of illiquidity.",
    },
    {
      kind: "h2",
      text: "When liquidity vanishes",
    },
    {
      kind: "p",
      text: "Liquidity is a coward. It's there when you don't need it and gone when you do. Three classic disappearances:",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Big news on a single stock.** Adani stocks during the {{hindenburg|Hindenburg report}} period — bids effectively disappeared as the stocks hit lower circuit. The price was 'down 20%' but you couldn't sell at -20%, only at -∞.",
        "**Market-wide panic.** During the {{india-vix|India VIX}} spike of March 2020, spreads on otherwise liquid mid caps tripled. Some F&O strikes couldn't trade for hours.",
        "**End of session, holidays, results day.** Liquidity thins ahead of long weekends, results announcements, and budget day. Even Nifty 50 names get sticky.",
      ],
    },
    {
      kind: "h2",
      text: "How to gauge real liquidity before you buy",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "Look at the depth (top 5 levels), not just the LTP.",
        "Check the 30-day average daily delivery volume on NSE — delivery is real money committing, not intraday churn.",
        "Avoid stocks where your intended position would be more than ~1% of average daily volume.",
        "On F&O, look at the open interest and the bid-ask on the strike you want, not just the underlying.",
      ],
    },
    {
      kind: "callout",
      tone: "warn",
      title: "The 'circuit' trap",
      text: "If a stock hits the {{circuit-breaker|upper or lower circuit}}, trading effectively stops on one side. Lower circuit = everyone wants to sell, no buyers at the band — you cannot exit. Upper circuit = everyone wants to buy. Small caps that hit lower circuit for multiple sessions are a classic retail blow-up pattern.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "Volume ≠ liquidity. Volume is throughput; liquidity is your specific ability to transact without moving the price.",
        "Depth (top 5 levels of the book) tells you the real cost of getting in or out at size.",
        "Liquidity tends to vanish exactly when you most want it — bad news, panic, F&O expiry chaos.",
        "Size your position relative to average daily volume, not relative to your conviction.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "A small cap stock had ₹50 crore turnover today. You want to buy ₹5 lakh of it. What's the most likely concern?",
      options: [
        "Spread might be wide but execution should be fine",
        "Even ₹5 lakh might be 1%+ of daily volume — meaningful impact possible",
        "Stop loss can't be placed",
        "Daily turnover means liquidity is excellent",
      ],
      correctIndex: 1,
      explanation: "₹5 lakh on ₹50 crore is 0.1% of turnover, but turnover counts both buys and sells. Your impact depends on depth and intraday distribution, not headline turnover. Always check depth.",
    },
    {
      id: "q2",
      prompt: "What does it mean when a stock hits 'lower circuit'?",
      options: [
        "It means the price is locked at a floor with no buyers at that level — you cannot sell",
        "The exchange has shut down for the day",
        "The price has fallen below ₹10",
        "It's a buying opportunity",
      ],
      correctIndex: 0,
      explanation: "Lower circuit = price is at the floor, all buyers have walked, only sellers remain. You're stuck. Worst-case liquidity scenario.",
    },
  ],
};

const w1l4: Lesson = {
  id: "w01-l04",
  weekId: 1,
  order: 4,
  title: "Order types and how your trade actually executes",
  summary: "Market, limit, stop-loss, GTT — what each one really does to your order, and which one to use when.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "You hit 'BUY' in Zerodha. What happens next depends entirely on the type of order you placed. Most retail traders use market orders by default and never think about it. That's fine for buying 5 shares of HDFC Bank at 11 AM. It's expensive for everything else.",
    },
    {
      kind: "h2",
      text: "Market order",
    },
    {
      kind: "p",
      text: "A {{market-order|market order}} says: 'Fill me now, at whatever price is available.' It walks down the order book, eating bids (if you're selling) or asks (if you're buying) until your full quantity is filled.",
    },
    {
      kind: "list",
      items: [
        "**Pro**: Instant fill, no decision to make.",
        "**Con**: You have zero control over price. In a thin stock or during a news spike, you can fill horrifically far from the last traded price.",
        "**Use when**: Liquid large cap during normal hours, small quantity, you genuinely care about getting in/out right now.",
      ],
    },
    {
      kind: "h2",
      text: "Limit order",
    },
    {
      kind: "p",
      text: "A {{limit-order|limit order}} says: 'Only fill me at this price or better.' Limit buy at ₹1,615 means you'll pay ₹1,615 or less. Limit sell at ₹1,620 means you'll receive ₹1,620 or more.",
    },
    {
      kind: "list",
      items: [
        "**Pro**: You control your price.",
        "**Con**: Your order might not fill at all. You can miss a move.",
        "**Use when**: Anywhere it matters — small/mid caps, F&O, large quantities, even large caps when you want a specific entry.",
      ],
    },
    {
      kind: "p",
      text: "A common beginner mistake: placing a limit order far away from the current price and forgetting about it. Set yourself a reminder, or use a GTT (more on that below).",
    },
    {
      kind: "h2",
      text: "Stop-loss order",
    },
    {
      kind: "p",
      text: "A stop-loss order is dormant until the stock hits your trigger price, at which point it turns into a market order (or a limit order, depending on which variant). It's meant to protect you when you can't watch the screen.",
    },
    {
      kind: "p",
      text: "Critical detail: in a fast-moving market, a stop-loss can trigger and fill significantly below your trigger price. If you place a stop at ₹1,500 on HDFC Bank and overnight news drops it to open at ₹1,400, your stop fills at ₹1,400, not ₹1,500. Stops do not protect you from gaps.",
    },
    {
      kind: "h2",
      text: "GTT (Good Till Triggered)",
    },
    {
      kind: "p",
      text: "GTT is a Zerodha-specific feature (other brokers have similar). It's a conditional order — sits with the broker (not the exchange) and gets placed when your trigger is met. Validity up to a year. Useful for:",
    },
    {
      kind: "list",
      items: [
        "Buying a stock at a specific dip price you've identified",
        "Selling at a target without watching the screen",
        "Both at once (OCO — One Cancels Other), e.g., 'sell at ₹2,000 target OR at ₹1,800 stop-loss, whichever comes first'",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "AMO and pre-market",
      text: "After-Market Order (AMO) lets you place orders outside trading hours; they queue up for the open. Useful for working professionals. Be aware: AMO orders match against the pre-market session price discovery (9:00-9:08 AM), which can be volatile. Use limit AMOs, not market AMOs.",
    },
    {
      kind: "h2",
      text: "A simple framework",
    },
    {
      kind: "table",
      headers: ["Situation", "Use"],
      rows: [
        ["Buying 10 shares of Reliance, market open", "Market"],
        ["Buying ₹2 lakh of a mid cap", "Limit"],
        ["Bidding on a dip you'll buy if it comes", "GTT limit"],
        ["Closing a losing trade at a defined price", "Stop-loss-market"],
        ["Booking profit at a target while at work", "GTT limit sell"],
        ["F&O at any reasonable size", "Limit (always)"],
      ],
    },
    {
      kind: "keyTakeaways",
      items: [
        "Market orders fill instantly but at unknown price. Use only on liquid names, small size.",
        "Limit orders control price, don't guarantee fill.",
        "Stop-loss does not protect against gap-downs; it protects against intraday drift.",
        "GTT is your friend for setting and forgetting target/stop levels.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "You place a stop-loss-market on HDFC Bank at ₹1,500. Bad news hits overnight and the stock opens at ₹1,400. Where does your order fill?",
      options: ["₹1,500 — that's what stop-loss means", "₹1,400 — stop triggers and fills at opening price", "The order is cancelled", "The exchange refunds the difference"],
      correctIndex: 1,
      explanation: "Stop-loss-market triggers, then becomes a market order, which fills at whatever the next available price is. In gaps, that price is far away from your stop level.",
    },
    {
      id: "q2",
      prompt: "Which is the best order type for buying ₹2 lakh of a mid-cap stock?",
      options: ["Market order", "Limit order", "GTT only", "Stop-loss buy"],
      correctIndex: 1,
      explanation: "Limit order controls your price. Market order in a less-liquid name can cost you 0.5-2% in slippage on this size.",
    },
  ],
};

const w1l5: Lesson = {
  id: "w01-l05",
  weekId: 1,
  order: 5,
  title: "Exchanges, OTC, and where your money really sits",
  summary: "What an exchange does, what OTC means, and why your shares aren't in your house — they're in a depository.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "When you 'buy a stock', a chain of institutions does work on your behalf. Understanding that chain is the difference between feeling in control of your money and feeling at the mercy of a black box.",
    },
    {
      kind: "h2",
      text: "The exchange",
    },
    {
      kind: "p",
      text: "An {{exchange|exchange}} is a regulated venue that runs the order book for standardized contracts. In India, the two main equity exchanges are {{nse|NSE}} and {{bse|BSE}}. They match buy and sell orders, publish the resulting prices, and forward executed trades to clearing.",
    },
    {
      kind: "p",
      text: "Exchanges centralize liquidity. Instead of you and another buyer hunting each other down, you both meet on NSE and let the matching engine pair you up. The price is the same for everyone, the rules are public, and disputes are governed by SEBI.",
    },
    {
      kind: "h2",
      text: "OTC — the bigger market you can't see",
    },
    {
      kind: "p",
      text: "By global value, more trading happens {{otc|OTC}} (over-the-counter) than on exchanges. The bond market is mostly OTC. So is the forex market. So are interest rate swaps. OTC means two parties — usually two big institutions — negotiate a trade directly, off-exchange.",
    },
    {
      kind: "p",
      text: "Why does OTC exist when exchanges work so well? Three reasons: customization (a swap is a unique contract), size (a single deal can be billions, hard to match on an order book), and confidentiality (large players don't want to show their hand). For Indian retail, you'll mostly never touch OTC — but it matters because global OTC flows drive a lot of cross-asset signal.",
    },
    {
      kind: "h2",
      text: "Clearing — the step you forget",
    },
    {
      kind: "p",
      text: "When two orders match on NSE, the trade isn't 'done' in the way you'd think. There's a clearing corporation (NSE Clearing) that becomes the counterparty to both sides — it guarantees that the buyer gets the shares and the seller gets the money, even if one party defaults. This is why exchanges feel safe even when you've never met the person on the other side of your trade.",
    },
    {
      kind: "h2",
      text: "Settlement — where your shares actually go",
    },
    {
      kind: "p",
      text: "Once cleared, the trade is settled — money and shares change hands. In India, this happens on T+1 ({{t-plus-1|trade date plus one working day}}), which is the fastest cycle in the world. Most other major markets are T+2.",
    },
    {
      kind: "p",
      text: "Your shares don't go into a vault at your broker's office. They go to your {{demat|demat account}}, which is electronic record-keeping at one of two {{depository|depositories}}: {{depository|CDSL}} or {{depository|NSDL}}. Your broker is a depository participant — they have an account with the depository on your behalf.",
    },
    {
      kind: "analogy",
      title: "The chain in one image",
      text: "You → Broker (Zerodha) → Exchange (NSE) → Clearing Corp (NSE Clearing) → Depository (CDSL/NSDL) → Your demat account. Money flows roughly in reverse. The broker is the only piece you interact with daily; everything else is invisible plumbing that has to work for your trade to mean anything.",
    },
    {
      kind: "h2",
      text: "What this means practically",
    },
    {
      kind: "list",
      items: [
        "Your shares are safe even if your broker fails — they're at CDSL/NSDL, not at the broker. SEBI's investor protection rules backstop most retail amounts.",
        "You can check your holdings directly on the CDSL/NSDL portal, separate from your broker app. Do this once a quarter as a sanity check.",
        "When you sell, money is in your demat-linked bank account on T+1 evening or T+2 morning, minus charges.",
        "Brokers can fail. Karvy and Anugrah are recent examples. Their clients eventually got most shares back via the SEBI-mandated separation, but anyone holding unsettled cash with them had a bad time.",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "One safety habit",
      text: "Once a quarter, log into CDSL Easi or NSDL Speed-e and confirm your holdings match what your broker app shows. Takes five minutes. Catches almost any kind of weirdness early.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "Exchanges match buyers and sellers; OTC is bilateral negotiation off-exchange.",
        "Trades go through clearing (NSE Clearing) and settlement (T+1) before they're 'done'.",
        "Your shares live in your demat account at CDSL or NSDL — not at your broker.",
        "Verify holdings directly with the depository periodically.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Where do your shares actually 'live' after a trade settles?",
      options: ["At your broker's office", "At the stock exchange (NSE/BSE)", "In a depository — CDSL or NSDL", "In the company's records directly"],
      correctIndex: 2,
      explanation: "Depositories hold electronic share ownership records. Your broker is the depository participant that interfaces between you and the depository.",
    },
    {
      id: "q2",
      prompt: "What is the current settlement cycle for equity trades in India?",
      options: ["T+0 (same day)", "T+1 (next working day)", "T+2 (two working days)", "T+3 (three working days)"],
      correctIndex: 1,
      explanation: "India moved fully to T+1 settlement in early 2023, ahead of most other major markets which are still T+2.",
    },
  ],
};

const w1l6: Lesson = {
  id: "w01-l06",
  weekId: 1,
  order: 6,
  title: "The Indian plumbing: NSE, BSE, regulators, and how the system stays standing",
  summary: "Who watches whom in Indian markets, and why this matters for your money.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "Indian markets are remarkably well-built. They are not perfect — there are scams, blow-ups, and frauds, as in any market — but the structural plumbing (depositories, clearing, T+1 settlement, electronic everything) is genuinely best-in-class. Understanding the layers helps you trust the system without being naive about it.",
    },
    {
      kind: "h2",
      text: "The exchanges",
    },
    {
      kind: "p",
      text: "{{nse|NSE}}, founded 1992, runs ~93% of cash equity volume in India and almost all F&O volume. {{bse|BSE}}, founded 1875, has more listed companies but much lower daily turnover. NSE owns the Nifty index; BSE owns the Sensex. They compete; both list largely the same major stocks.",
    },
    {
      kind: "h2",
      text: "SEBI — the regulator",
    },
    {
      kind: "p",
      text: "SEBI (Securities and Exchange Board of India), set up in 1992, is the markets regulator. It writes the rules for listed companies, brokers, mutual funds, AIFs, F&O, IPOs, mutual fund schemes, and the depositories themselves. SEBI does not run the exchanges — it regulates them.",
    },
    {
      kind: "p",
      text: "SEBI moves are market events. When SEBI changes F&O lot sizes (October 2024) or raises STT, retail derivative volumes shift. When SEBI tightens disclosure rules for promoters, mid-cap and small-cap stocks react. The chairperson's statements during board meetings matter.",
    },
    {
      kind: "h2",
      text: "RBI — the other regulator",
    },
    {
      kind: "p",
      text: "The {{rbi|RBI}} regulates banks, the bond market, and forex. It also sets monetary policy. For equity investors, RBI matters less directly but more powerfully — its {{repo-rate|repo rate}} moves affect every stock's valuation through the discount rate.",
    },
    {
      kind: "h2",
      text: "Who else has a hand on the wheel",
    },
    {
      kind: "list",
      items: [
        "**Depositories** — {{depository|CDSL and NSDL}} hold electronic share ownership. They report to SEBI.",
        "**Clearing Corporations** — NSE Clearing (formerly NSCCL) and ICCL handle the post-trade plumbing for NSE and BSE respectively.",
        "**AMFI** — Association of Mutual Funds in India; industry body for mutual funds. Publishes monthly inflow/outflow data.",
        "**ICAI** — sets accounting standards that listed company auditors must follow.",
        "**Ministry of Finance** — Budget day every February sets tax rules (LTCG, STT) that ripple through markets for a year.",
      ],
    },
    {
      kind: "h2",
      text: "How a typical day flows",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "9:00-9:08 AM: Pre-market session. Price discovery for the open.",
        "9:08-9:15 AM: Post-pre-market closing; small carry-over window.",
        "9:15 AM: Regular session opens.",
        "3:30 PM: Regular session closes.",
        "3:30-4:00 PM: Closing session — limited orders.",
        "Evening: NSE publishes FII/DII flow data (~6:30 PM).",
        "Settlement: T+1, so today's trades hit your demat tomorrow.",
      ],
    },
    {
      kind: "h2",
      text: "The two flows that move Indian markets",
    },
    {
      kind: "p",
      text: "Daily, the {{fii|FII}} and {{dii|DII}} flow numbers tell you who was buying and who was selling. As a rule of thumb across the last decade: FIIs drive direction, DIIs absorb. The change over the past few years is that DIIs (powered by retail {{sip|SIP}} flows of ~₹25,000 crore/month) now consistently absorb FII selling — Indian markets are less FII-dependent than they used to be.",
    },
    {
      kind: "callout",
      tone: "info",
      title: "Worth knowing",
      text: "Roughly 18-20% of NSE listed market cap is held by FIIs. Retail (you, me) is also around 8-10%. Mutual funds are climbing fast — about 10%. Promoters and government holdings together are over 50%. The 'free float' that actually trades is a smaller slice than people realize.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "NSE dominates cash and F&O volumes; BSE owns the Sensex and the longer history.",
        "SEBI regulates markets; RBI regulates banks and bonds; both shape your portfolio.",
        "FII and DII daily flow data is published every evening — worth glancing at.",
        "DII flows (driven by SIPs) have made Indian markets less FII-vulnerable.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Which institution sets the repo rate in India?",
      options: ["SEBI", "RBI (via the MPC)", "NSE", "Ministry of Finance"],
      correctIndex: 1,
      explanation: "RBI's Monetary Policy Committee (MPC) sets the repo rate every two months.",
    },
    {
      id: "q2",
      prompt: "Roughly how much flows into Indian equities via SIPs every month (late 2024)?",
      options: ["₹2,500 crore", "₹10,000 crore", "₹25,000 crore", "₹1 lakh crore"],
      correctIndex: 2,
      explanation: "Monthly SIP inflows crossed ₹25,000 crore in 2024 — a structural buyer for Indian equities that didn't exist 10 years ago.",
    },
  ],
};

const w1l7: Lesson = {
  id: "w01-l07",
  weekId: 1,
  order: 7,
  title: "Your first daily routine: how to actually 'see' a market",
  summary: "A 20-minute daily flow you can actually keep up, designed to build intuition over months, not days.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "The single biggest mistake beginners make is treating markets like a casino — checking prices, getting excited, doing nothing useful. The way you build durable intuition is by watching the same handful of things, every day, with no obligation to act. After two months you'll start to feel the rhythm.",
    },
    {
      kind: "p",
      text: "Here's a 20-minute routine. Do it once a day. Don't trade off it. Just watch.",
    },
    {
      kind: "h2",
      text: "Morning (10 minutes, before or just after the open)",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Check the overnight US close.** S&P 500, Nasdaq. Up or down, by how much? This sets the mood.",
        "**Check Asia.** Nikkei and Hang Seng tell you whether the risk-on/risk-off vibe survived overnight.",
        "**Check {{dxy|DXY}} (Dollar Index) and {{usd-inr|USD/INR}}.** Where did the dollar go overnight? Did the rupee weaken or strengthen?",
        "**Check {{brent|Brent crude}}.** Up sharply, down sharply, or boring? Oil moves a lot of Indian narratives.",
        "**Check Nifty pre-open and GIFT Nifty.** GIFT Nifty (formerly SGX Nifty) trades earlier and previews the open.",
      ],
    },
    {
      kind: "h2",
      text: "Evening (10 minutes, after the close)",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Check Nifty and Bank Nifty close.** Up or down, by how much? Note it.",
        "**Check the {{fii|FII}}/{{dii|DII}} flow data** (released ~6:30 PM). Who bought, who sold?",
        "**Pick one stock that moved.** Search 'why did X stock move today' — read one article. Build a mental file of cause-effect.",
        "**Look at your existing positions.** Don't act. Just notice.",
        "**Write one sentence in your journal.** 'Nifty -0.4%, FII sold ₹1,200 cr, IT was weakest, no obvious trigger.'",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Build the muscle, not the bank account",
      text: "For the first three months, your job is to observe, not to trade. If you start with ₹20,000 in a real portfolio just to feel the swings, that's fine — but the goal isn't returns. The goal is to develop a reflex that connects a Fed meeting to a Nifty move to your bank's home loan rate. That reflex takes time and reps.",
    },
    {
      kind: "h2",
      text: "The 'cause-effect' journal",
    },
    {
      kind: "p",
      text: "Open a notes file. Every day, write one observation. Examples from real entries:",
    },
    {
      kind: "quote",
      text: "Nifty -1.2% on a day with no obvious India news. DXY hit 106, Brent up 3% on Middle East worries. Risk-off in the US session before our close. FIIs sold ₹2,100 cr — consistent with the rest.",
    },
    {
      kind: "quote",
      text: "RBI MPC kept repo unchanged but signalled neutral stance. Bond yields fell 5 bps. PSU banks rallied 2%. The change in stance mattered more than the unchanged rate.",
    },
    {
      kind: "p",
      text: "Two months of these entries and you'll start to see patterns. A US CPI release moves DXY which moves USD/INR which moves FII flows which moves Nifty. The mechanical chain becomes visible. That's what we mean by 'intermarket analysis' — and we'll go deeper in Weeks 11-13.",
    },
    {
      kind: "h2",
      text: "Three trackers worth bookmarking",
    },
    {
      kind: "list",
      items: [
        "**Investing.com Indian section** — single page with Nifty, Sensex, Bank Nifty, USD/INR, Brent, gold. Free.",
        "**NSE India FII/DII page** — official source for daily institutional flow.",
        "**TradingView (free tier)** — for charting Nifty, individual stocks, currencies, and commodities in one app. The mobile app is good.",
      ],
    },
    {
      kind: "keyTakeaways",
      items: [
        "Build a 20-minute daily routine. Don't trade — observe.",
        "Morning: US/Asia/DXY/oil. Evening: Nifty close, FII/DII flow, one cause-effect note.",
        "Maintain a journal of one-line observations. Patterns emerge after ~50 entries.",
        "Three months of disciplined watching beats six months of impulsive trading.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "What's the single most useful daily habit for a beginner who wants to build market intuition?",
      options: [
        "Trade small positions to learn from real money",
        "Watch 1-hour stock-tip YouTubers",
        "Maintain a one-line daily journal of cause and effect",
        "Subscribe to a paid tip service",
      ],
      correctIndex: 2,
      explanation: "Pattern recognition needs many reps. A daily one-line cause-effect note over 2-3 months builds intuition faster than any course.",
    },
    {
      id: "q2",
      prompt: "When are FII/DII flow numbers released?",
      options: ["Before market open", "Real-time during the day", "Around 6:30 PM after the close", "Only weekly"],
      correctIndex: 2,
      explanation: "Daily FII/DII provisional flows publish in the evening on NSE's website around 6:30 PM.",
    },
  ],
};

const W1_LESSONS: Lesson[] = [w1l1, w1l2, w1l3, w1l4, w1l5, w1l6, w1l7];

// -----------------------------------------------------------------------
// WEEK 2 — Money, interest rates & inflation
// -----------------------------------------------------------------------

const w2l1: Lesson = {
  id: "w02-l01",
  weekId: 2,
  order: 1,
  title: "What money actually is (and isn't)",
  summary: "Money is a tool with three jobs. Understanding the jobs explains why central banks matter.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "Stop a hundred people on the street and ask them what money is. Most will say: 'cash' or 'the paper in my wallet' or 'rupees'. They're describing the form, not the function.",
    },
    {
      kind: "p",
      text: "Economists describe money by what it does, not what it looks like. Money has three jobs:",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Medium of exchange.** You can use it to buy things instead of bartering chickens for rice.",
        "**Unit of account.** You can express prices in it — Reliance is at ₹2,800; coffee at Starbucks is ₹350.",
        "**Store of value.** You can hold it and use it later — it should still be worth roughly the same.",
      ],
    },
    {
      kind: "p",
      text: "Every form of money — gold, cowrie shells, paper rupees, UPI balances, USDT — has to do all three jobs to be useful. When any one job fails, the system finds something else.",
    },
    {
      kind: "h2",
      text: "Why store of value is the hard one",
    },
    {
      kind: "p",
      text: "Medium of exchange and unit of account are easy. Both are about now. The challenge is store of value over time — your money has to still buy roughly the same things in five years that it buys today. Otherwise people stop saving in it and the whole system frays.",
    },
    {
      kind: "p",
      text: "When {{inflation|inflation}} runs at 5%, your ₹100 from today is worth ₹95 of purchasing power next year — a 5% silent tax. When inflation hits 20%, people switch to harder stores of value: real estate, gold, foreign currency. In hyperinflation (Venezuela, Zimbabwe), people barter again — they go back to the pre-money world.",
    },
    {
      kind: "analogy",
      title: "The kirana store test",
      text: "Walk into your neighborhood kirana store with a ₹500 note. Watch the shopkeeper put it in his drawer without thinking twice. That casual acceptance is the entire trust infrastructure of fiat money in one gesture. He's not checking it; he assumes the system stands behind it. The day he stops assuming, the system has a problem.",
    },
    {
      kind: "h2",
      text: "Money in India is not just cash",
    },
    {
      kind: "p",
      text: "Cash in your wallet is one form. So is the balance in your bank account (an IOU from your bank, ultimately backed by RBI). So is your UPI-linked savings account. So is the digital rupee (e-Rupee, RBI's CBDC pilot).",
    },
    {
      kind: "p",
      text: "Economists categorise these into M0, M1, M3:",
    },
    {
      kind: "list",
      items: [
        "**M0** = physical currency in circulation + bankers' reserves with RBI. The 'monetary base'.",
        "**M1** = M0 + demand deposits (your current/savings account balance).",
        "**M3** = M1 + time deposits (your FDs). The broadest measure that the RBI watches.",
      ],
    },
    {
      kind: "p",
      text: "When the RBI 'prints money', they're not literally printing notes; they're expanding M0 by buying government bonds or lending to banks. The new reserves get multiplied through the banking system into a much larger M3 expansion. This is why central bank balance sheet changes matter for inflation — even though most retail never sees a freshly printed note.",
    },
    {
      kind: "h2",
      text: "Hard money vs soft money",
    },
    {
      kind: "p",
      text: "An asset is 'hard money' if its supply can't easily be expanded. Gold is hard money — you have to mine it. {{bitcoin|Bitcoin}} is intentionally hard money — fixed supply at 21 million. The rupee, the dollar, every fiat currency is 'soft money' — the central bank can expand supply at will.",
    },
    {
      kind: "p",
      text: "Hard money is a good store of value during currency debasement (high inflation, money printing). Soft money is a better medium of exchange when used at normal velocity. The disagreement between 'hard money' advocates (gold bugs, bitcoin maxis) and central bankers is essentially about which job of money we should prioritize.",
    },
    {
      kind: "callout",
      tone: "info",
      title: "Why this matters for your investing",
      text: "Holding cash is not 'safe' over long periods. With Indian inflation averaging 5-6% and FDs paying 7%, your real return is 1-2%. Over 30 years, that's the difference between ₹100 buying you a meal vs buying you a sandwich. Cash is a great medium of exchange and a terrible long-term store of value.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "Money does three jobs: medium of exchange, unit of account, store of value.",
        "Inflation attacks the third job — that's why central banks watch it so closely.",
        "M0, M1, M3 are the official measures of money in the economy; RBI manipulates M0 directly.",
        "Cash is a great medium of exchange and a poor long-term store of value.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Which of money's three jobs does inflation most directly attack?",
      options: ["Medium of exchange", "Unit of account", "Store of value", "All three equally"],
      correctIndex: 2,
      explanation: "Inflation erodes purchasing power over time — that's the store of value job. The other two are about transactions in the present.",
    },
    {
      id: "q2",
      prompt: "Why do central banks watch broad money (M3) growth?",
      options: [
        "It's required by SEBI",
        "Excessive M3 growth signals potential future inflation",
        "It measures how much physical cash is printed",
        "It determines exchange rates directly",
      ],
      correctIndex: 1,
      explanation: "When M3 grows much faster than real GDP, there's more money chasing the same goods — inflation pressure builds.",
    },
  ],
};

const w2l2: Lesson = {
  id: "w02-l02",
  weekId: 2,
  order: 2,
  title: "Time value of money: why ₹100 today is not ₹100 next year",
  summary: "The single concept that explains compound interest, bond prices, equity valuations, and the cost of an EMI.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "If I offered you ₹1 lakh today versus ₹1 lakh exactly one year from today, which would you take?",
    },
    {
      kind: "p",
      text: "Today, obviously. Three reasons, in order of importance:",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**You could invest it.** ₹1 lakh in an FD at 7% becomes ₹1,07,000 in a year. The future ₹1 lakh is worth less because it forfeits this option.",
        "**Inflation.** ₹1 lakh next year buys you ~5% less stuff. Same number, smaller bag.",
        "**Risk.** What if I disappear? What if the rupee crashes? Cash in hand is cash in hand.",
      ],
    },
    {
      kind: "p",
      text: "This is the time value of money. Money has a price, and that price is time. Every financial concept downstream — bond prices, stock valuations, EMIs, NPV, DCF — is just bookkeeping on top of this one truth.",
    },
    {
      kind: "h2",
      text: "The basic math",
    },
    {
      kind: "p",
      text: "If your money earns rate **r** per year, then ₹100 today grows to ₹100 × (1+r) next year. Compounded over **n** years, it grows to ₹100 × (1+r)^n. This is the future value formula.",
    },
    {
      kind: "p",
      text: "Run it backwards: if you'll receive ₹100 **n** years from now, that future ₹100 is worth ₹100 ÷ (1+r)^n today. That's the present value formula. Both formulas are the same idea — moving money across time at the rate **r**.",
    },
    {
      kind: "table",
      headers: ["Years", "₹1,00,000 grown at 12%", "₹1,00,000 today worth in future cash"],
      rows: [
        ["1", "₹1,12,000", "Same"],
        ["5", "₹1,76,234", "Same"],
        ["10", "₹3,10,585", "Same"],
        ["20", "₹9,64,629", "Same"],
        ["30", "₹29,95,992", "Same"],
      ],
      caption: "Same ₹1 lakh, different time horizons, compounded at 12% (long-run Indian equity average)",
    },
    {
      kind: "h2",
      text: "Compounding is the engine",
    },
    {
      kind: "p",
      text: "Look at that table again. ₹1 lakh becomes ₹3 lakh in 10 years, ₹10 lakh in 20 years, ₹30 lakh in 30 years. The growth gets steeper — not because the rate changes, but because each year's growth compounds on top of last year's growth. Albert Einstein supposedly called compound interest 'the eighth wonder of the world'. He probably didn't, but the line stuck because it's right.",
    },
    {
      kind: "diagram",
      diagram: "compound-growth",
      caption: "Interactive: change the SIP amount, years, and return rate. Note how the wealth-vs-contributed gap widens dramatically over time — that's compounding at work.",
    },
    {
      kind: "analogy",
      title: "The Rule of 72",
      text: "Quick mental math: divide 72 by the rate of return to estimate how many years it takes for money to double. At 12%, 72 ÷ 12 = 6 years. At 8%, 72 ÷ 8 = 9 years. At 6%, 12 years. Use this to compare options in your head without opening a spreadsheet.",
    },
    {
      kind: "h2",
      text: "The discount rate is the universal lever",
    },
    {
      kind: "p",
      text: "When interest rates rise, the rate **r** at which you discount future cash flows rises. The same future ₹100 is worth less today than it was last year. Now apply that to a stock: a stock's value is the present value of its future cash flows (dividends, eventually). Higher rates = lower present value = lower stock price.",
    },
    {
      kind: "p",
      text: "This is why the {{fed|Fed}}'s rate decisions move every market on Earth. Rates are the gravity of the financial universe. A 1% move in the US 10-year yield re-prices billions of dollars of assets globally — stocks, real estate, even your home loan.",
    },
    {
      kind: "h2",
      text: "Why an EMI is harder than you think",
    },
    {
      kind: "p",
      text: "A ₹50 lakh home loan at 8.5% for 20 years has an EMI of ~₹43,400. Over 20 years you pay back about ₹1.04 crore — more than double the principal. The bank isn't ripping you off; you're paying for 20 years of foregone opportunity. They could have invested that ₹50 lakh elsewhere; instead they gave it to you.",
    },
    {
      kind: "callout",
      tone: "money",
      title: "The compounding side everyone forgets",
      text: "Compounding works against you on debt the same way it works for you on investments. Credit card debt at 36% APR doubles in 2 years. A ₹10,000 minimum-payment habit can become a ₹2 lakh balance in 8 years if you don't pay it off. Time value of money is symmetric.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "Money has a price and that price is time. The interest rate is that price made explicit.",
        "Future value: ₹100 × (1+r)^n. Present value: ₹100 ÷ (1+r)^n. Same idea, two directions.",
        "Rule of 72: years to double = 72 / annual rate (%).",
        "Compounding is asymmetric in your favor on investments and against you on debt.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Using the Rule of 72, how long does it take for money to double at 12% per year?",
      options: ["4 years", "6 years", "8 years", "12 years"],
      correctIndex: 1,
      explanation: "72 ÷ 12 = 6 years. Useful mental shortcut for evaluating return claims.",
    },
    {
      id: "q2",
      prompt: "Why does a rise in interest rates generally cause stock prices to fall?",
      options: [
        "Companies pay more interest on their loans",
        "Future cash flows are worth less when discounted at higher rates",
        "It hurts the dollar",
        "Both A and B partially, but B is the dominant mechanism for valuation",
      ],
      correctIndex: 3,
      explanation: "Stocks are valued as the present value of future cash flows. Higher discount rate (interest rate) = lower present value. Higher debt cost is a secondary effect.",
    },
  ],
};

const w2l3: Lesson = {
  id: "w02-l03",
  weekId: 2,
  order: 3,
  title: "The price of money: what an interest rate really is",
  summary: "Interest rates as the price tag on money — set by central banks, transmitted by banks, paid by everyone.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "Think of money as a commodity, like tomatoes or steel. It has a price. That price is the {{interest-rate|interest rate}}.",
    },
    {
      kind: "p",
      text: "When you take a home loan at 8.5%, that's the price you pay to use the bank's money for a year. When you put ₹1 lakh in an FD at 7%, that's the price the bank pays to use your money for a year. Same commodity, same price logic — just direction reversed.",
    },
    {
      kind: "h2",
      text: "Why there are so many rates",
    },
    {
      kind: "p",
      text: "There isn't one interest rate. There's a forest of them — each calibrated to a specific borrower, term, and risk:",
    },
    {
      kind: "list",
      items: [
        "**Repo rate** (6.50%): What the RBI charges banks for overnight loans. The cleanest reference rate.",
        "**Reverse repo rate** (~3.35%): What the RBI pays banks for parking surplus money.",
        "**10-year G-Sec yield** (~6.8%): What the Indian government pays for 10-year money.",
        "**SBI 1-year FD** (~6.8%): What SBI pays you for a 1-year deposit.",
        "**Home loan** (~8.5%): What you pay for a 20-year secured loan.",
        "**Credit card APR** (~36%): What you pay for unsecured, on-demand borrowing.",
      ],
    },
    {
      kind: "p",
      text: "Same currency, same year, six different prices. The differences are about three things: risk (will you pay back?), term (how long is the money locked?), and liquidity (how easily can the lender sell the loan?).",
    },
    {
      kind: "h2",
      text: "How the RBI sets the anchor",
    },
    {
      kind: "p",
      text: "The {{rbi|RBI}} sets the {{repo-rate|repo rate}} eight times a year through the {{mpc|MPC}}. This isn't a market rate — it's an administrative decision. The MPC looks at inflation, growth, the global rate environment, and votes. Six members; majority wins; Governor's casting vote breaks ties.",
    },
    {
      kind: "p",
      text: "Once the MPC moves the repo, the whole forest adjusts within days to weeks. Bond yields move first (within minutes). G-Sec yields follow within hours. Bank deposit and lending rates adjust over weeks — that's called 'transmission'. Transmission is never instant or complete; the RBI sometimes complains about banks being slow to pass on cuts.",
    },
    {
      kind: "h2",
      text: "The Fed sets the global anchor",
    },
    {
      kind: "p",
      text: "If the RBI sets India's anchor, the {{fed|Federal Reserve}} sets the world's. The {{fed-funds-rate|Fed funds rate}} is the cleanest 'risk-free rate' for the US dollar — the global reserve currency. When the Fed hikes from 0% to 5.5% (2022-2023), suddenly safe dollar returns compete with every risky asset on Earth.",
    },
    {
      kind: "p",
      text: "The chain: Fed hikes → US 10Y rises → DXY rises → USD strengthens → FIIs pull capital from EMs → INR weakens → RBI may have to hike to defend the rupee → Indian rates go up. This chain takes weeks; sometimes it takes hours.",
    },
    {
      kind: "h2",
      text: "Hawkish vs dovish",
    },
    {
      kind: "p",
      text: "A central banker is {{hawkish|hawkish}} if they're leaning toward hiking rates (or holding them high), prioritizing inflation control. {{dovish|Dovish}} if they're leaning toward cutting, prioritizing growth and employment. Markets parse every speech for hawkish/dovish drift.",
    },
    {
      kind: "p",
      text: "Sometimes a central bank does nothing but changes its stance — for example, from 'withdrawal of accommodation' (hawkish) to 'neutral'. Markets can rally on a stance change even without a rate move, because future rate paths just shifted.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Reading the dot plot",
      text: "Every quarter, the FOMC publishes a 'dot plot' — each member's projection of where rates will be over the next 2-3 years. The median dot is what markets price off. When the median dot moves from 4.0% to 3.5% for 2025, the market reads that as additional 50 bps of cuts. Bond rallies, equities rally, dollar weakens.",
    },
    {
      kind: "h2",
      text: "Why this matters for your portfolio",
    },
    {
      kind: "list",
      items: [
        "Repo cuts generally help equities (cheaper money, higher valuations) and lower your FD rates.",
        "Repo hikes generally hurt equities (especially expensive growth stocks) and raise your home loan EMI.",
        "Bank stocks have a complex relationship: hikes help margins but can hurt loan growth.",
        "Auto and real estate stocks are highly rate-sensitive — they move on RBI calls.",
      ],
    },
    {
      kind: "keyTakeaways",
      items: [
        "Interest rate = price of money. Many rates, all anchored to the central bank's policy rate.",
        "RBI sets India's anchor (repo); Fed sets the world's anchor (Fed funds).",
        "Differences between rates reflect risk, term, and liquidity premia.",
        "Markets care about the stance and the dot plot as much as the actual rate move.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "If the Fed shifts its dot plot to show fewer rate cuts in 2025 than previously projected, what's the typical immediate market reaction?",
      options: [
        "Bonds rally, equities rally, dollar weakens",
        "Bonds sell off, equities sell off, dollar strengthens",
        "Only bonds react",
        "Markets ignore the dot plot",
      ],
      correctIndex: 1,
      explanation: "Fewer cuts = higher rates for longer = bond yields rise (prices fall), discount rates rise (equities fall), and rate differential widens (dollar up).",
    },
    {
      id: "q2",
      prompt: "Why do different interest rates exist in the same economy simultaneously?",
      options: [
        "Different banks set their own rates randomly",
        "They reflect different combinations of risk, term, and liquidity",
        "Only one is real; the others are marketing",
        "The RBI sets every rate individually",
      ],
      correctIndex: 1,
      explanation: "Each rate represents a different risk profile (probability of default), maturity (term), and how easily the lender can sell the loan (liquidity).",
    },
  ],
};

const w2l4: Lesson = {
  id: "w02-l04",
  weekId: 2,
  order: 4,
  title: "Inflation: the slow tax that quietly eats your savings",
  summary: "Why ₹100 in 2015 buys less today, who decides what inflation is, and why the RBI obsesses over 4%.",
  minutes: 8,
  body: [
    {
      kind: "p",
      text: "A vada pav in Dadar cost ₹15 in 2015. Same vada pav today costs about ₹25. Same vendor, same recipe, same plate. The vada pav didn't get bigger; your rupee got smaller. That gap is {{inflation|inflation}} — the silent erosion of purchasing power over time.",
    },
    {
      kind: "h2",
      text: "How inflation is measured in India",
    },
    {
      kind: "p",
      text: "Inflation isn't a vibe. It's measured. The official measure for monetary policy in India is the {{cpi|Consumer Price Index (CPI)}}. The government statistical office takes a 'basket' of about 300 items that an average urban or rural household buys — food, fuel, rent, clothes, transport, telecom, healthcare, education. They survey prices monthly. The change in the basket's total cost is inflation.",
    },
    {
      kind: "p",
      text: "The Indian CPI is heavily weighted toward food — about 46% of the basket. When tomatoes or onions spike, the headline number jumps. That's why Indian inflation can swing hard on weather alone, in a way US inflation (food is ~13% of US CPI) does not.",
    },
    {
      kind: "diagram",
      diagram: "cpi-basket",
      caption: "Why the same global event hits Indian and US CPI differently — different basket weights, different sensitivities.",
    },
    {
      kind: "h2",
      text: "Headline vs core inflation",
    },
    {
      kind: "p",
      text: "{{core-cpi|Core CPI}} strips out food and energy because both are volatile and outside the central bank's control. The RBI watches both — headline for what households feel, core for what monetary policy can actually influence. A scenario where headline is cooling but core is sticky tells the RBI that even after the onion shock fades, underlying inflation is still elevated. Don't cut yet.",
    },
    {
      kind: "h2",
      text: "Why 4% (with a ±2% band)",
    },
    {
      kind: "p",
      text: "India formally adopted inflation targeting in 2016. The target is 4% CPI, with a tolerance band of 2% to 6%. If inflation stays outside that band for three consecutive quarters, the RBI has to write a letter to the government explaining why and what they're doing about it.",
    },
    {
      kind: "p",
      text: "Why 4%? Two reasons. First, it's politically realistic — emerging markets historically have higher inflation than developed economies. Second, a small positive inflation rate is healthier than zero — it gives wage stickiness room to work and avoids the deflation trap (where prices keep falling and people stop spending, expecting cheaper prices tomorrow).",
    },
    {
      kind: "h2",
      text: "Real returns: the math everyone gets wrong",
    },
    {
      kind: "p",
      text: "Your FD pays 7%. Sounds good. CPI is running 5%. Your {{real-return|real return}} — the actual increase in your purchasing power — is 7% - 5% = 2%. That's what you should compare to other options, not the headline 7%.",
    },
    {
      kind: "table",
      headers: ["Asset", "10-year nominal return (illustrative)", "Avg inflation", "Real return"],
      rows: [
        ["FD ladder", "7%", "5%", "2%"],
        ["Gold (INR)", "10%", "5%", "5%"],
        ["Nifty 50", "12%", "5%", "7%"],
        ["Mid-cap equity", "15%", "5%", "10%"],
      ],
      caption: "Indicative long-run real returns by Indian asset class",
    },
    {
      kind: "callout",
      tone: "money",
      title: "The savings account silently losing money",
      text: "A savings account pays 2.5-3% in India. CPI is 5%. Real return is -2% per year. Every ₹1 lakh in your savings account is losing roughly ₹2,000/year in purchasing power, plus you pay tax on the 3% interest. Keep what you need for 3-6 months of expenses; deploy the rest into anything that beats inflation.",
    },
    {
      kind: "h2",
      text: "When inflation goes wrong",
    },
    {
      kind: "p",
      text: "Persistent high inflation (15%+) destroys savers and rewards debtors. People lose faith in the currency as a store of value. They switch to gold, real estate, or foreign currency. Capital flees the country. The central bank has to hike rates hard, which kills growth. This was India in the late 1970s and 2012-2013. Avoidance is why the RBI takes its 4% target seriously.",
    },
    {
      kind: "p",
      text: "Deflation (falling prices) sounds great but is worse. Japan spent two decades in mild deflation, with growth flatlined. When everyone expects prices to fall, no one spends or invests today.",
    },
    {
      kind: "keyTakeaways",
      items: [
        "CPI measures inflation by tracking a fixed basket of household purchases.",
        "India's CPI is food-heavy (~46%) — weather and crop shocks move the number.",
        "RBI targets 4% CPI with a 2-6% tolerance band; persistent breaches require a letter to the government.",
        "Real return = nominal return − inflation. This is the only return that matters for your purchasing power.",
        "Holding too much cash is silently losing money; deploy beyond your emergency fund.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Your FD pays 7%, CPI is 5.5%, you're in the 30% tax bracket. What's your post-tax real return on the FD?",
      options: ["7%", "5.5%", "Approximately -0.6%", "1.5%"],
      correctIndex: 2,
      explanation: "Post-tax nominal: 7% × (1 - 0.3) = 4.9%. Real: 4.9% - 5.5% = -0.6%. FDs at moderate inflation barely keep up post-tax for higher tax brackets.",
    },
    {
      id: "q2",
      prompt: "Why does the RBI also watch core CPI separately from headline CPI?",
      options: [
        "Core CPI is more accurate",
        "Core CPI strips out food and energy, which are volatile and largely outside monetary policy's reach",
        "Headline CPI is too low",
        "It's required by law",
      ],
      correctIndex: 1,
      explanation: "Core CPI gives a cleaner signal of underlying demand-driven inflation. The RBI can affect that; it can't affect tomato prices.",
    },
  ],
};

const w2l5: Lesson = {
  id: "w02-l05",
  weekId: 2,
  order: 5,
  title: "Real vs nominal returns: the math that kills the FD myth",
  summary: "Indian middle-class wisdom says 'FD is safe'. The math says FDs are quietly losing money for many savers.",
  minutes: 7,
  body: [
    {
      kind: "p",
      text: "A friend's mother in Pune put her retirement savings — ₹40 lakh — in fixed deposits in 2014. Ten years later, the corpus is ₹78 lakh. Sounds great: nearly doubled. She feels safe.",
    },
    {
      kind: "p",
      text: "Then run the real-return math. Average Indian CPI over that decade was about 5.5%. Average post-tax FD return for someone in the 20% tax bracket: ~5.6%. Net real return: ~0.1% per year. Her ₹40 lakh, in 2014 purchasing power, became roughly ₹40 lakh. She didn't lose; she also didn't gain. She just stayed in place.",
    },
    {
      kind: "p",
      text: "Compare that to ₹40 lakh in a Nifty 50 index fund over the same period. ~12.5% CAGR, taxed at 10% LTCG above ₹1 lakh threshold (Budget 2024 changed this to 12.5% above ₹1.25 lakh, but we'll use the old rate for the period). Post-tax CAGR roughly ~11.4%. After 5.5% inflation: ~5.9% real return per year. Corpus in real (2014) terms: ~₹71 lakh. Nearly 80% more purchasing power.",
    },
    {
      kind: "h2",
      text: "The FD is not 'safe'",
    },
    {
      kind: "p",
      text: "It's safe in nominal terms — you'll always see the number grow. It's not safe in real terms — your purchasing power may not. For shorter periods (1-3 years), this matters less and FDs are perfectly fine for short-term needs. For 10-year+ horizons, every percentage point of negative real return compounds against you.",
    },
    {
      kind: "callout",
      tone: "warn",
      title: "The DDM trap (Debt Deposit Myth)",
      text: "Indian families equate 'safe' with 'guaranteed nominal return'. This is left over from an era when FDs paid 12-14% and inflation was 6-8% — actual real returns were 4-6%. Today FDs pay 7% and inflation is 5%; real returns post-tax for higher slabs are 0% to negative. The math has changed; the cultural reflex hasn't.",
    },
    {
      kind: "h2",
      text: "How to think about asset categories in real terms",
    },
    {
      kind: "table",
      headers: ["Asset", "Long-run nominal CAGR (rough)", "Real return at 5% inflation"],
      rows: [
        ["Savings account", "~3%", "-2% (loses purchasing power)"],
        ["FD ladder (post-tax, 30% bracket)", "~5%", "0% (flat)"],
        ["Liquid mutual fund", "~6.5%", "1.5%"],
        ["Long-duration debt fund", "~7-8%", "2-3%"],
        ["Gold (INR)", "~9-10%", "4-5%"],
        ["Nifty 50 index fund", "~12-13%", "7-8%"],
        ["Mid-cap equity fund", "~14-16%", "9-11%"],
        ["Real estate (residential)", "~7-9%", "2-4%"],
      ],
      caption: "Indicative long-run Indian real returns by asset class. Past returns are not guarantees.",
    },
    {
      kind: "diagram",
      diagram: "asset-class-returns",
      caption: "Real returns visualised. Anything left of zero is silently losing you purchasing power.",
    },
    {
      kind: "p",
      text: "The table above understates equity's edge because tax treatment varies and equity tax is favorable for long holds. It also overstates real estate — when you include maintenance, property tax, and the costs of holding, residential is closer to flat in real terms for many cities.",
    },
    {
      kind: "h2",
      text: "Why most retail still parks money in 'safe' instruments",
    },
    {
      kind: "list",
      items: [
        "**Volatility tolerance.** A 30% Nifty drawdown is real and feels terrible, even if the long-run return is higher.",
        "**Loss aversion.** Behavioural finance shows we hate losing ₹1 about twice as much as we love gaining ₹1.",
        "**The illusion of certainty.** A 7% FD return is known; a 12% equity return is averaged over volatility.",
        "**Tax simplicity.** FDs are straightforward; capital gains math feels intimidating.",
      ],
    },
    {
      kind: "p",
      text: "None of these reasons are wrong. They're just emotional, not financial. The math is unambiguous: for any horizon longer than ~7 years, equity beats fixed income in nearly every rolling Indian window.",
    },
    {
      kind: "h2",
      text: "A pragmatic split",
    },
    {
      kind: "p",
      text: "For most working people in their 30s with a 25+ year horizon:",
    },
    {
      kind: "list",
      items: [
        "3-6 months of expenses in savings + liquid funds (emergency cushion, real return slightly negative — fine)",
        "Short-term goals (1-3 years): FDs, RDs, conservative hybrid funds",
        "Medium-term goals (3-7 years): balanced hybrid or aggressive hybrid funds",
        "Long-term wealth (7+ years): largely equity — Nifty 50 index + mid cap blend",
      ],
    },
    {
      kind: "keyTakeaways",
      items: [
        "FDs are nominally safe but often real-return zero or negative post-tax.",
        "For horizons under 3 years, FD/debt is fine. Over 7 years, equity wins decisively in Indian rolling history.",
        "The cultural 'FD is safe' reflex is from a high-inflation, high-FD-rate era that no longer exists.",
        "Build a layered approach: emergency cash → short-term debt → long-term equity.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Which combination represents the real after-tax return for a 30%-bracket investor in an Indian FD at 7% nominal with 5.5% inflation?",
      options: ["7%", "5.5%", "Approximately -0.6%", "1.5%"],
      correctIndex: 2,
      explanation: "Post-tax: 7% × (1 - 0.3) = 4.9%. Real: 4.9% - 5.5% = -0.6%. FDs lose purchasing power for higher tax brackets at moderate inflation.",
    },
    {
      id: "q2",
      prompt: "For a 25-year retirement horizon, what's the strongest argument against keeping all savings in FDs?",
      options: [
        "FDs are illegal for long-term investing",
        "FDs are too volatile",
        "FDs typically produce near-zero or negative real returns after tax, so purchasing power barely grows",
        "FDs are no longer offered in India",
      ],
      correctIndex: 2,
      explanation: "Over long horizons, the gap between equity real returns (~7-8%) and FD real returns (~0%) compounds enormously. Purchasing power, not nominal value, is what matters.",
    },
  ],
};

const w2l6: Lesson = {
  id: "w02-l06",
  weekId: 2,
  order: 6,
  title: "Central banks: the RBI and the Fed in one mental model",
  summary: "How central banks think, what they actually do, and why two institutions on opposite sides of the world set your home loan rate.",
  minutes: 8,
  body: [
    {
      kind: "p",
      text: "A central bank does four jobs:",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Sets the policy interest rate** (price of money)",
        "**Manages liquidity** in the banking system (supply of money)",
        "**Regulates banks and the payments system** (plumbing)",
        "**In some cases, manages the currency** (forex intervention)",
      ],
    },
    {
      kind: "p",
      text: "The {{rbi|RBI}} does all four. The {{fed|Fed}} does the first three and lets the dollar float freely. Different central banks have different formal mandates — the Fed has a dual mandate (price stability AND maximum employment), while the RBI's primary mandate is price stability with growth as a secondary consideration.",
    },
    {
      kind: "h2",
      text: "How an MPC decision actually happens",
    },
    {
      kind: "p",
      text: "Six weeks before each {{mpc|MPC}} meeting, the RBI staff prepares detailed reports on inflation, growth, credit growth, banking liquidity, the rupee, and global rates. The MPC members study the reports.",
    },
    {
      kind: "p",
      text: "Meeting day: 3 days of discussion. Members make speeches. Each member votes on (a) the repo rate decision and (b) the stance ('accommodative', 'neutral', 'withdrawal of accommodation'). The vote is recorded; minutes published two weeks later — markets dissect them line by line.",
    },
    {
      kind: "p",
      text: "Then comes the press conference, where the Governor explains the decision. The phrasing is parsed obsessively. 'Inflation pressures have moderated but persist' is dovish. 'The committee remains vigilant on inflation' is hawkish. These are not just words; they're rate guidance.",
    },
    {
      kind: "h2",
      text: "How a Fed decision differs",
    },
    {
      kind: "p",
      text: "The {{fomc|FOMC}} meets 8 times a year. 12 voting members — but the structure is built such that the Fed Chair (Powell) has enormous influence. The post-meeting statement, the dot plot (quarterly), and the press conference are the three communication channels. The dot plot is unique to the Fed — each member's projected rate path for the next 2-3 years. Markets price off the median dot.",
    },
    {
      kind: "h2",
      text: "Why the Fed matters even for someone living in Mumbai",
    },
    {
      kind: "p",
      text: "The dollar is the world's reserve currency. Roughly 60% of global FX reserves are in USD. Most cross-border trade settles in USD. Most commodities (including oil) are priced in USD. The 'risk-free rate' for global investors is the US Treasury yield.",
    },
    {
      kind: "p",
      text: "When the Fed hikes rates, global liquidity gets tighter — every emerging market feels it. When the Fed cuts, the dollar weakens and EM equities tend to rally. The mechanical chain we walked through last week shows up again here: Fed hike → US 10Y up → DXY up → FII outflows from India → INR weakness → RBI must consider hiking → Indian rates rise. All from a meeting in Washington.",
    },
    {
      kind: "h2",
      text: "Why the RBI is partially constrained by the Fed",
    },
    {
      kind: "p",
      text: "Theoretically the RBI is independent. Practically, if the Fed hikes and the RBI doesn't, the rate differential (currently ~1.5-2%) shrinks. With smaller differentials, FIIs find Indian bonds and equities less attractive — they pull capital. INR weakens. Imported inflation (oil, electronics) rises. The RBI has to respond.",
    },
    {
      kind: "p",
      text: "This is why India's rate path tends to track the Fed with a lag. In 2022 the RBI hiked aggressively to chase the Fed; in 2024-25 the RBI is widely expected to start cutting only after (or just before) the Fed cuts. Doing so before the Fed risks rupee weakness.",
    },
    {
      kind: "callout",
      tone: "info",
      title: "Forward guidance is half the magic",
      text: "Central banks discovered in the 2010s that just telling markets what they plan to do can shift rates without them actually moving anything. 'We expect to keep rates near zero through 2023' calmed bond markets without an actual cut. Today, both the Fed and RBI manage market expectations as actively as they manage rates themselves.",
    },
    {
      kind: "h2",
      text: "How to follow central banks practically",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "Mark MPC dates and FOMC dates on a calendar — they're scheduled a year ahead.",
        "Read the press release on policy day (just the first page; it's short).",
        "Skim the press conference YouTube replay if you have 20 minutes.",
        "Read the MPC minutes two weeks later for the dissenting views.",
        "Don't try to predict; try to understand the framework they're using.",
      ],
    },
    {
      kind: "keyTakeaways",
      items: [
        "Central banks set the policy rate, manage liquidity, regulate banks, and (in some cases) manage the currency.",
        "RBI has a primary inflation mandate; Fed has a dual mandate (prices and employment).",
        "Decisions are guided as much by stance and forward guidance as by the actual rate move.",
        "The Fed indirectly sets a ceiling on how dovish the RBI can be — capital flow effects.",
        "Track scheduled meeting dates and read the statements; ignore the punditry.",
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "If the Fed hikes 25 bps and the RBI does nothing, what's the most likely chain of effects on India?",
      options: [
        "Nothing — RBI is independent",
        "USD strengthens → INR weakens → FII outflows → pressure on RBI to consider hiking",
        "Indian inflation falls immediately",
        "Nifty rallies on global liquidity",
      ],
      correctIndex: 1,
      explanation: "Rate differential narrowing → capital outflows → currency weakness → imported inflation → pressure on the RBI to follow.",
    },
    {
      id: "q2",
      prompt: "What is the RBI's formal inflation target?",
      options: ["2% ± 1%", "4% ± 2%", "5% flat", "No formal target"],
      correctIndex: 1,
      explanation: "4% CPI with a tolerance band of 2-6%, adopted in 2016. Persistent breaches require a written explanation to the government.",
    },
  ],
};

const W2_LESSONS: Lesson[] = [w2l1, w2l2, w2l3, w2l4, w2l5, w2l6];

// -----------------------------------------------------------------------
// Full curriculum — Weeks 1-16 (Weeks 3-16 imported from content/weeks/*)
// -----------------------------------------------------------------------

export const WEEKS: Week[] = [
  {
    id: 1,
    phase: "foundations",
    title: "What is a market, really?",
    blurb: "Strip back the jargon. A market is a price-discovery machine, whether it's a vegetable mandi or the NSE.",
    lessons: W1_LESSONS,
  },
  {
    id: 2,
    phase: "foundations",
    title: "Money, interest rates & inflation",
    blurb: "The master key to every market. Once you see rates and inflation, you see why everything else moves.",
    lessons: W2_LESSONS,
  },
  {
    id: 3,
    phase: "foundations",
    title: "Economic indicators that move markets",
    blurb: "GDP, CPI, PMI, NFP — the data calendar that runs the global trading day.",
    lessons: WEEK_03_LESSONS,
  },
  {
    id: 4,
    phase: "markets",
    title: "Indian equities — deep dive",
    blurb: "NSE/BSE, Nifty/Sensex, sectors, FII/DII flows, and how to think about Indian stock selection.",
    lessons: WEEK_04_LESSONS,
  },
  {
    id: 5,
    phase: "markets",
    title: "Global equities — why the US sets the tone",
    blurb: "S&P 500, Nasdaq, Magnificent 7, and why what happens in the US matters for your Indian portfolio.",
    lessons: WEEK_05_LESSONS,
  },
  {
    id: 6,
    phase: "markets",
    title: "Forex — USD/INR, DXY, and the carry trade",
    blurb: "Currency is the connective tissue. Once you understand the dollar, you understand half the global economy.",
    lessons: WEEK_06_LESSONS,
  },
  {
    id: 7,
    phase: "markets",
    title: "Crude oil — Brent, WTI, OPEC+, and India",
    blurb: "India imports 85% of its oil. Every $10 in Brent moves the rupee, inflation, and a dozen sectors.",
    lessons: WEEK_07_LESSONS,
  },
  {
    id: 8,
    phase: "markets",
    title: "Gold, silver & industrial metals",
    blurb: "Gold as crisis insurance, Dr. Copper as a growth signal — and why India's relationship with gold is unique.",
    lessons: WEEK_08_LESSONS,
  },
  {
    id: 9,
    phase: "markets",
    title: "Bonds & interest rates",
    blurb: "The US 10-year is the world's most important asset. Understanding bonds is non-negotiable.",
    lessons: WEEK_09_LESSONS,
  },
  {
    id: 10,
    phase: "markets",
    title: "Crypto as a macro asset",
    blurb: "Bitcoin and Ethereum as macro assets, their correlation with Nasdaq, and Indian taxation realities.",
    lessons: WEEK_10_LESSONS,
  },
  {
    id: 11,
    phase: "connections",
    title: "Intermarket analysis — how it all fits",
    blurb: "DXY, yields, commodities, EMs — and the mechanical chains that move them all together.",
    lessons: WEEK_11_LESSONS,
  },
  {
    id: 12,
    phase: "connections",
    title: "Macro regimes & the business cycle",
    blurb: "The four-quadrants framework. Which assets win in which regime, and how to spot the transition.",
    lessons: WEEK_12_LESSONS,
  },
  {
    id: 13,
    phase: "connections",
    title: "Liquidity & the plumbing",
    blurb: "Central bank balance sheets, QE/QT, global USD liquidity — the slow tide that lifts or sinks everything.",
    lessons: WEEK_13_LESSONS,
  },
  {
    id: 14,
    phase: "practice",
    title: "Event-driven analysis — building your calendar",
    blurb: "Monthly cadence of market-moving events and how to anticipate them.",
    lessons: WEEK_14_LESSONS,
  },
  {
    id: 15,
    phase: "practice",
    title: "Case study deep dives",
    blurb: "COVID, 2022 inflation, SVB, the yen carry unwind — drilling into real episodes to build pattern recognition.",
    lessons: WEEK_15_LESSONS,
  },
  {
    id: 16,
    phase: "practice",
    title: "Build your dashboard and daily routine",
    blurb: "Putting everything together into a sustainable practice you'll actually keep up for years.",
    lessons: WEEK_16_LESSONS,
  },
];

export function getLesson(id: string): Lesson | undefined {
  for (const week of WEEKS) {
    const lesson = week.lessons.find((l) => l.id === id);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getAllLessons(): Lesson[] {
  return WEEKS.flatMap((w) => w.lessons);
}

export function getNextLesson(id: string): Lesson | undefined {
  const all = getAllLessons();
  const idx = all.findIndex((l) => l.id === id);
  if (idx < 0 || idx >= all.length - 1) return undefined;
  return all[idx + 1];
}

export function getPrevLesson(id: string): Lesson | undefined {
  const all = getAllLessons();
  const idx = all.findIndex((l) => l.id === id);
  if (idx <= 0) return undefined;
  return all[idx - 1];
}

export const PHASE_LABELS: Record<Week["phase"], string> = {
  foundations: "Foundations",
  markets: "The seven markets",
  connections: "The connections",
  practice: "Practice",
};
