# Partner Research — Part 3: Telegram Context

Research window: last ~30-90 days (Feb-Apr 2026). Compiled from Dawid's Telegram groups with partners.

This maps the 26 target partners to the Telegram groups Kamino uses to coordinate with them. For each partner, captures group existence, activity level, relationship nature, core contacts, current focus, and publicly-safe partnership facts.

---

## EXCHANGES

### Coinbase
- **Group:** No direct `Kamino x Coinbase` group found.
- **Activity:** No group.
- **Relationship nature:** No active direct Telegram channel. Coinbase shows up indirectly: as the historic USDC incentive funder routed through Gauntlet ("We got the funds from Coinbase and are ready to proceed"), and as a reference point ("if you look at what Coinbase did for Morpho"). The Jito group also references the Coinbase-Solana bridge (Base) in a conversation about bringing JitoSOL to Base.
- **Core contact (partner-side):** Not identifiable — communication has historically routed through Gauntlet (Kamil).
- **Current focus:** No active workstream in Telegram. Kamino leadership references Coinbase strategically (e.g., modeling Kamino's institutional RWA positioning on how Morpho/Coinbase collaborate).
- **Partnership facts:** Coinbase has funded USDC/EURC incentive pools on Kamino via Gauntlet in the past; those engagements were explicitly low-key at Coinbase's request. The Solana<>Base bridge (Coinbase-built) is discussed as infrastructure for future JitoSOL cross-chain flows.
- **Notes:** Hover-card should treat Coinbase as ecosystem/infra-adjacent rather than as an active operational counterparty. Aspirational rather than hands-on at this moment.

---

### Bybit
- **Group:** No direct Kamino x Bybit group found.
- **Activity:** No group.
- **Relationship nature:** Not a current operational partner over Telegram. Bybit is referenced contextually: as a TVL benchmark ("You have more AUM than Gate and Bybit" — David | xStocks) and as the post-hack opsec lesson ("we've upgraded our opsec significantly after the Bybit hack of last year").
- **Core contact (partner-side):** None identified.
- **Current focus:** None directly.
- **Partnership facts:** None in Telegram.
- **Notes:** If Bybit appears on the landing page as an ecosystem partner, the relationship is likely held outside Telegram (possibly via BD on Signal/email or via a listing/distribution partnership not surfaced here).

---

### OKX
- **Group:** Two active groups — `OKX Earn >< Kamino` (-4754147200) and `xBTC | Kamino <> OKX Technical` (-1002513828918).
- **Activity:** Active. OKX Earn has messages as recent as Apr 22, 2026. xBTC technical channel went quiet after mid-March but was busy through early March.
- **Relationship nature:** Multi-track operational integration. OKX Earn runs Kamino yield inside OKX products and coordinates market listings, vault listings, incentives, and risk controls (timelocks, emergency admin scopes). The xBTC technical group is focused on API integration for OKX's wrapped BTC.
- **Core contact (partner-side):** Keith (OKX Earn — most frequent on product/risk), Stacey (OKX X Layer — recently pinging on the OKX Plugin Store and agentic wallet), Alan Guo, John | OKX, Bruce Huang (xBTC technical).
- **Current focus:** (1) Onboarding Gauntlet/Steakhouse vaults (RWA USDC Frontier, Steakhouse USDC High Yield) for listing on OKX Earn with OKX-funded incentives; (2) Tightening Kamino's emergency admin / market-admin timelock per OKX review asks; (3) Pitching Kamino into the OKX Plugin Store + agentic wallet ecosystem (collab + co-marketing ask from xLayer team).
- **Partnership facts:** Kamino has raised caps and shipped per OKX product requests; Drift-incident response call offered to OKX; xBTC API reliability work ongoing.
- **Notes:** Good, active integration — a "distribution + listings" partnership is the honest framing.

---

### Bitget
- **Group:** No direct Kamino x Bitget group found.
- **Activity:** No group.
- **Relationship nature:** Non-Telegram. Bitget referenced once in internal mgmt chat ("the other big whales in that list seem to have just exited straight to bitget").
- **Core contact (partner-side):** None.
- **Current focus:** None.
- **Partnership facts:** None.
- **Notes:** Bitget appearing on the landing page is either via BD relationship tracked elsewhere or aspirational. Confirm with Dawid whether this should be on the partner list at all.

---

## CUSTODY

### Anchorage Digital
- **Groups:** `Kamino <> Anchorage CM` (-4833568698) + `Kamino, Pantera, Anchorage Chat` (-1003706794559).
- **Activity:** Very active. Last messages Apr 14, 2026.
- **Relationship nature:** Deep operational partnership. Anchorage is Kamino's institutional collateral-management counterparty — they hold/custody collateral, run the signing API integration, issue Account Control Agreements (ACAs) to third-party borrowers, and co-coordinate legal/ops with Kamino and Pantera on the Pantera loan.
- **Core contact (partner-side):** Pierce (@piercejh) — primary day-to-day, ACA/BSA/onboarding; Chase Crimmen (ops), John Mayberry (new COO/Deputy CFO on the Pantera side).
- **Current focus:** (1) Rolling out Anchorage's new security requirements for Collateral Management endpoints (request-signing mandatory for POST/PATCH); (2) Standardising the ACA + CM Annex as the starting template for prospective borrowers (Solmate, Multicoin, etc.); (3) Coordinating the Pantera $5M first-clip disbursement and subsequent draws.
- **Partnership facts:** Anchorage publicly referenced the CM relationship in a blog ("Just launched a blog referencing our ongoing CM relationship"). Kamino uses Anchorage CM as the institutional rails underneath the Kamino Private Credit product.
- **Notes:** Hover-card framing: "Institutional custody rails for Kamino's private credit markets."

---

## ISSUERS

### Figure (PRIME / Hastra)
- **Groups:** `Kamino/Figure GTM` (-4933542932), `Figure <> Kamino DD` (-4949131455), `[PARTNERS] Figure x Solana RWA Consortium` (-1003218554746), plus cross-references in Chainlink Marketing and Gauntlet/Curation.
- **Activity:** Very active. Multiple groups with messages through Apr 20, 2026.
- **Relationship nature:** Flagship RWA issuer relationship. Figure/Hastra issues PRIME (HELOC-backed tokenized yield) which is Kamino's largest RWA market. The Consortium group is a multi-partner GTM forum (Raydium, Chainlink, Superstate, Kamino, Figure).
- **Core contact (partner-side):** Reid (@reidlikeabook, primary product/ops), Drew (@drewcrypt0, partner/field marketing), Miso (strategy), Matt Conroy (tech), Phyn (Figure team).
- **Current focus:** (1) Market-maker onboarding for PRIME (dex rebalancing + RFQ + non-banking-hours financing via banks); (2) Smart-contract RFQ integration with Kamino's Multiply product; (3) Tighter SLAs on redeem size/time at NAV; (4) Managing PRIME<>NAV peg (Kamino flagged a 35bps discount on Apr 20 and Figure MM'd it).
- **Partnership facts:** PRIME is live on Kamino; Chainlink is the official oracle infra for Hastra/Figure's PRIME & AUTO tokenized RWAs; Figure has announced HELOC-backed PRIME & auto loans via the Chainlink/Kamino stack (co-marketed Apr 14). Hastra's PRIME + Kamino together form what Figure's team calls the largest RWA market on Kamino.
- **Notes:** Strong, ongoing product-level relationship. Safe public framing: PRIME is Hastra/Figure's real-world-yield instrument, live as a collateral asset on Kamino, powered by Chainlink oracle rails.

---

### Securitize (ACRED)
- **Group:** No dedicated Kamino x Securitize group found in Dawid's chat list.
- **Activity:** No group.
- **Relationship nature:** Issuer partnership exists at the product level (ACRED is Apollo's tokenized credit fund, issued via Securitize) but is not managed via Telegram in Dawid's orbit. No mentions in 180 days.
- **Core contact (partner-side):** None identified.
- **Current focus:** None directly via TG.
- **Partnership facts:** None from TG.
- **Notes:** The ACRED listing/relationship is likely coordinated via Slack, email, or through another Kamino team member. For hover-card copy, rely on public materials rather than Dawid's Telegram.

---

### Paxos (PYUSD / USDG)
- **Group:** `Kamino:Paxos` (-4769771544) — watched starting now.
- **Activity:** Light/dormant recently (4 backfilled messages, last Apr 9).
- **Relationship nature:** Stablecoin issuer partnership coordinating listing/amplification of USDG across Kamino markets, with broader Solstice context. Steakhouse USDG High Yield vault is tied into this.
- **Core contact (partner-side):** Dominic (@dominicniolu) — USDG/Paxos.
- **Current focus:** Amplifying Solstice announcements; growing the Steakhouse USDG High Yield vault; supporting USDG inclusion in the Solstice market. (Elemental is separately running a USDG vault and asking Paxos to help drive USDG deposits.)
- **Partnership facts:** Paxos issues USDG on Solana; USDG-denominated vaults on Kamino (Steakhouse USDG High Yield, Elemental USDG) are live; Kamino has enabled USDG in the Solstice market.
- **Notes:** Per Thomas' recon, Dom's background is VP Crypto Brokerage BD at Paxos (2020-2024), Launched PYUSD for PayPal. PYUSD itself is not surfaced as a current workstream in TG — the active stablecoin is USDG.

---

### Superstate (USCC / GLXY / STRC)
- **Groups:** `Kamino <> Superstate` (-1002458236222) + `Marcom Kamino Superstate` (-5057969508).
- **Activity:** Very active. Last messages Apr 17, 2026.
- **Relationship nature:** Issuer + marketing + product partnership. Superstate provides tokenized yield products (USCC, GLXY-on-chain equity, upcoming STRC) used inside Kamino markets. Joint marketing cadence is high.
- **Core contact (partner-side):** Chris Malloy (marketing — most frequent in marcom channel), Fig Gowen / Francis Gowen (BD/product), Emily Coleman (campaigns), Jim Hiltner (ops), Saahith Pochiraju (allocations).
- **Current focus:** (1) Launching GLXY (Galaxy tokenized equity) market on Kamino (went live end of March); (2) Prepping for USCC yield pickup with co-branded Lender decks; (3) Rolling out fixed-rate supply matching into Superstate positions; (4) STRC listing prep with Circle DDQ; (5) Regular co-marketing rhythm — joint blog + social on each new asset.
- **Partnership facts:** GLXY went live on Kamino Mar 31 with joint launch between Superstate, Galaxy, and Kamino. Superstate publicly ties CASH, USCC, GLXY to Kamino markets via coordinated X posts and LinkedIn. Blockworks has cited USCC/Superstate as driving RWA lending TVL on Solana.
- **Notes:** High-touch partner with a weekly cadence on joint GTM. Safe framing: "Superstate's tokenized yield and equity products are live as collateral and lending assets on Kamino."

---

### Maple (syrupUSDC / Syrup)
- **Group:** `Maple <> Kamino` (-1002563211447).
- **Activity:** Very active. Last message Apr 22, 2026.
- **Relationship nature:** Asset-issuer partnership. syrupUSDC is listed as a core collateral asset on Kamino; Kamino operates a dedicated Maple market. Recent conversations centre on risk management in the wake of the rsETH/LayerZero multichain hack.
- **Core contact (partner-side):** Martin de Rijke (BD — primary), Sid S | Maple (risk/comms), Gleb (eng/oracles), fatmac (liquidity/ops), Chuck P.
- **Current focus:** (1) Aligning oracle design (syrupUSDC price uses the most recent of Chainlink redemption rate, PythPull, and PythLazer market, with deviation caps & reference price 1.21); (2) Aligning LTV between Maple PYUSD and USDC markets (LP request); (3) Maple publicly confirming no rsETH exposure and no active DeFi lending positions; (4) Kamino onboarding of syrupUSDC was predicated on Solana LP depth — Maple confirmed Solana LP to be preserved.
- **Partnership facts:** syrupUSDC is live on Kamino (Maple market + as collateral on other markets). Kamino retweeted Maple's post-incident statement (Apr 18). LTV changes on the PYUSD-market came from Sentora risk asks.
- **Notes:** Active, trust-heavy risk/ops relationship. Safe framing: "syrupUSDC, Maple's tokenised credit strategy, is natively integrated into Kamino as a core yield asset and market."

---

### Backed (xStocks)
- **Group:** `Backed <> Kamino <> SF` (-4614570087) — the "SF" = Solana Foundation.
- **Activity:** Very active. Last message Apr 23, 2026.
- **Relationship nature:** RWA issuer partnership around xStocks (tokenised US equities). Triangular with Solana Foundation involved.
- **Core contact (partner-side):** David Kitai (@davidrwh, "David | xStocks") — primary; Leo | xStocks, Matt (Italian), Elliot Goykhman, YK (@Hemulin — ops/security).
- **Current focus:** (1) STRC listing with Circle DDQ in-flight; (2) xStocks incentives agreement (standard template); (3) Kamino asking Backed about xStocks mint-authority security post-rsETH hack (2/4 squads multisig, mint auth, update auth — Backed is migrating to a Kraken-security-reviewed setup within 5-6 weeks); (4) Expanding on-chain xStocks liquidity (HOODx Raydium pool fee tier concerns).
- **Partnership facts:** xStocks are issued by Backed and listed on Kamino; Kamino TVL exceeded Gate and Bybit (per David K). Full xStocks SPL list has been shared. Backed is actively pushing STRC borrowing against USDC.
- **Notes:** Honest framing: "Backed issues xStocks; Kamino provides the deepest on-chain credit market for xStocks." Relationship is deep and aligned with Solana Foundation push.

---

## INFRASTRUCTURE

### Chainlink
- **Group:** `Kamino <> Chainlink : Marketing` (-1002645243527).
- **Activity:** Active (marketing channel — 13 messages backfilled through Apr 20, 2026).
- **Relationship nature:** Infrastructure + co-marketing. Chainlink is the oracle provider for Kamino's Hastra/Figure PRIME & AUTO markets and for Maple's syrupUSDC redemption rate. Marketing channel coordinates joint campaigns.
- **Core contact (partner-side):** Cristi Moscoso (marketing — primary). Michael referenced internally. Marcos at Chainlink mentioned in mgmt chat.
- **Current focus:** (1) Joint social campaigns on PRIME + AUTO adoption announcements (e.g., "Hastra adopts Chainlink to bring $20B in HELOC & auto loans to DeFi"); (2) Co-amplifying ecosystem milestone posts (Raydium + partners); (3) Planning presence at Consensus Miami / Solana Accelerate.
- **Partnership facts:** Chainlink provides primary-market NAV feeds (e.g., PRIME, syrupUSDC), published public blogs positioning Chainlink as official oracle infra for Hastra on Solana. Kamino QT'd the announcement publicly.
- **Notes:** Honest framing: "Oracle and data infrastructure powering Kamino's RWA markets." There are tech-level issues tracked in management chat ("blocked by pantera and chainlink feed", "chainlink kept the usr nav price fixed") but the marketing channel is productive and public-facing.

---

### Jito Labs
- **Group:** `Jito - Kamino` (channel, -1001910017885).
- **Activity:** Active. Last message Apr 20, 2026.
- **Relationship nature:** LST issuer + ecosystem partner. JitoSOL + ezSOL are core LST collaterals on Kamino (dedicated Jito Market). Partnership has cooled from peak — Dawid internally notes "jito partnership has cooled down significantly" and "my reading is that jito is building a consumer app."
- **Core contact (partner-side):** Brian Smith | Jito (primary, strategic); @aajorgen (incentives ops).
- **Current focus:** (1) Incentive cadence (~210k JTO/month, running at reduced rate); (2) Risk conversations about JitoSOL bridge to Base (Coinbase-Solana bridge) and loss-socialization semantics ("canonical mainnet JitoSOL with bridged/exploited holders subject to individual recovery"); (3) Reserve-config updates on Jito Market (ezSOL, kySOL deposit limits / LTV — active multisig activity Apr 17-22).
- **Partnership facts:** Kamino runs a dedicated Jito Market with JitoSOL/ezSOL/kySOL reserves. Jito funds ongoing JTO incentives on Kamino pools.
- **Notes:** Safe framing: "JitoSOL and Jito Restaking assets are core LST collaterals on Kamino, with Jito incentivising select pools." Avoid framing as a strategic co-venture — it's operational, and warming is recent on risk topics.

---

## CURATORS

### Gauntlet
- **Groups:** `Gauntlet <> Kamino - Curation` (two groups: -1003278648306 channel and -4238286365 group) + `Kamino <> Gauntlet - USDC Incentives` (-4168263914).
- **Activity:** Active. Last messages Apr 15, 2026 (curation), though moving some conversations to Slack.
- **Relationship nature:** Top-tier curator partnership. Gauntlet curates multiple Kamino vaults (Frontier, RWA Frontier, CASH) and is a core risk partner for market configuration.
- **Core contact (partner-side):** Mike | Gauntlet (primary BD), Nick Cannon (ops), Matt Dobel / @inkymaze (eng), Delz (risk). Dara Khan (exited Gauntlet Apr 15, now independent).
- **Current focus:** (1) Private Credit (Altenburg BTC-backed loans) market — Gauntlet vault onboarding; (2) Whitelisted Reserves rollout (completed Apr 3 across all Gauntlet vaults); (3) USDC Frontier and RWA Frontier vault listings on OKX Earn; (4) Moving day-to-day comms to a shared Slack channel.
- **Partnership facts:** Gauntlet runs multiple Kamino vaults including the USDC-incentivised RWA Frontier. They also historically routed Coinbase's USDC incentive funding. Kamino Private Credit (Altenburg, ~7% yield on BTC-backed loans) is an active co-launch.
- **Notes:** Safe framing: "Gauntlet curates institutional-grade vaults on Kamino across RWA and stablecoin markets."

---

### Steakhouse Financial
- **Groups:** `Steakhouse <> Kamino` (-1002215053095) + `Steakhouse x Kamino - Tech Support` (-4665720043).
- **Activity:** Active. Last messages Apr 17, 2026.
- **Relationship nature:** Top-tier curator. Steakhouse runs the USDC High Yield vault and the new USDG High Yield vault on Kamino. Also a principal counterparty on the private credit / institutional yield product.
- **Core contact (partner-side):** Ata (@akasimoglu — primary), Hasu, adcv, McNut/Danny, GonAfonso.
- **Current focus:** (1) Onboarding Steakhouse vaults into Kamino Private Credit (Altenburg BTC-backed loans market); (2) USDG vault rebalancing into the Solstice market (coordinating with Paxos); (3) Opsec DDQ post-Drift (Steakhouse asked "how is kamino set up security wise?", meetings scheduled to walk through); (4) Steakhouse is willing to offer a 3-month fixed rate at 4.5% (FalconX channel conversation).
- **Partnership facts:** Steakhouse USDC High Yield is one of the largest RWA-oriented vaults on Kamino. Steakhouse also operates a secondary Figure wallet relationship.
- **Notes:** Deep, trusted curator. Safe framing: "Steakhouse Financial curates Kamino's flagship yield-seeking vaults."

---

### Allez Labs
- **Group:** No dedicated Kamino <> Allez group surfaced (internal mgmt references suggest they coordinate via Sky/Keel group and DMs). Viktor noted: "there is already an Allez <> Keel grp so Alex from Allez will ping you there."
- **Activity:** Active via cross-references (mentioned regularly in Feb-Apr 2026).
- **Relationship nature:** Curator + analytics partner. Allez runs curation vaults and provides competitive analytics (allez.xyz/dashboards/kamino). Marius said "i would acquire Allez" — internally they're well-regarded.
- **Core contact (partner-side):** Alex (from the Keel cross-reference); not otherwise identified in a standalone group.
- **Current focus:** Vault curation alongside Gauntlet, Steakhouse, Rockaway, Elemental; providing the competitor-analysis dashboard Kamino uses internally.
- **Partnership facts:** Allez is one of the curators listed by Kamino management ("gauntlet steakhouse rockaway allez"); maintains a Kamino-specific dashboard at allez.xyz.
- **Notes:** Safe framing: "Allez Labs curates vaults on Kamino and provides on-chain analytics." Low direct-Telegram visibility but clearly active.

---

### MEV Capital
- **Group:** `MEV <> Kamino` (-4708399398) — freshly watched.
- **Activity:** Light (3 recent messages, Apr 3, 2026).
- **Relationship nature:** Curator partnership. MEV Capital curates a Kamino vault.
- **Core contact (partner-side):** Ledev.
- **Current focus:** Whitelisted Reserves opt-in for MEV's vaults (Marius offered, MEV said "Hey, nice initiative, please enable it for us.").
- **Partnership facts:** MEV Capital runs at least one curated vault on Kamino, now secured with whitelisted reserves.
- **Notes:** Low-frequency but functional. Safe framing: "MEV Capital curates vaults on Kamino."

---

### Sentora (fka Trident / IntoTheBlock)
- **Groups:** `Kamino <> Trident` (-1002257046456) + `Trident<>Kamino v2` (-4213062474).
- **Activity:** Very active. Last message Apr 22, 2026.
- **Relationship nature:** Curator + risk partner. Sentora runs significant allocations on Kamino and has a strong risk-management voice. Currently tense: post-rsETH hack, Sentora paused new allocations pending DD, leading to a real-time disagreement with Marius/Thomas over whether LSTs vs syrupUSDC carry higher bridge/double-mint risk.
- **Core contact (partner-side):** Anthony DeMartino / Anthony DM - Sentora (primary — strategic, ex-Paxos), Adam | Sentora, Lucas | Sentora, Amir | Sentora, Ryan L (incentives ops).
- **Current focus:** (1) Incentive cadence (140k/epoch: 120k Earn + 20k CLMM, confirmed Apr 22); (2) Post-rsETH risk review — pausing allocations until DD complete; (3) Requested LTV reduction on Maple PYUSD market (implemented); (4) Dinner/IRL relationship-building (Anthony hosts small NYC dinners).
- **Partnership facts:** Trident + IntoTheBlock merged as Sentora (CoinDesk May 2025 article). Sentora curates vaults on Kamino and actively pushes LTV/risk changes into Kamino markets.
- **Notes:** Honest framing: "Sentora is a curator and institutional risk partner on Kamino." Current moment is spicy (rsETH fallout) but operational.

---

### Re7 Labs
- **Group:** `Hubble/Kamino <> Re7` (-1001763850186) — channel.
- **Activity:** Active. Last messages Apr 9, 2026.
- **Relationship nature:** Curator + LP. Re7 holds active positions on Kamino and is running a key-management review across Solana protocols post-Drift.
- **Core contact (partner-side):** Chadi (primary — risk/DD), Ivan Kyrian (questionnaire), Lewis Harland (token ops), R (admin).
- **Current focus:** (1) Key-management / opsec review — Re7 sent a "key management questionnaire" that Kamino leadership pushed back on ("no appetite to disclose detailed opsec information in a google questionnaire"); (2) KMNO token unlock routing to designated address in TPA; (3) Multisig threshold / timelock disclosure (Kamino shared 5/10 program upgrade, 4/10 market updates, 4h timelock on main market, 12h on program upgrades).
- **Partnership facts:** Re7 holds "active positions" on Kamino (sized meaningfully enough that Re7 treats this as admin-level review).
- **Notes:** Honest framing: "Re7 Labs deploys and curates capital on Kamino." Relationship is functional but slightly fractious over the opsec questionnaire standoff.

---

## TRADING

### FalconX
- **Groups:** `Kamino / FalconX` (group, -4840447088) + `Kamino / FalconX` (channel, -1003805533196).
- **Activity:** Active. Last messages Apr 7, 2026.
- **Relationship nature:** Institutional trading partner + borrower counterparty. FalconX is an OTC/prime-brokerage partner that Kamino is engaging with on fixed-rate borrowing (Kamino's new Fixed Rates product) and broader strategic relationship.
- **Core contact (partner-side):** Brandon Cigri (BD — primary), Wee Kuo (strategic), Craig Birchall (marketing), Chris Clark, Kate Ruberti (marketing team), Tako, Mirshalia Pallath, Pradeep Kumar, Varun Kumar.
- **Current focus:** (1) Whitelisting FalconX wallets to see fixed-rates in UI; (2) Fixed Rates product launch (Steakhouse willing to come down to 4.5% for 3-month fixed); (3) Marketing coordination on Fixed Rates launch announcement; (4) FalconX hosted a private NYC partners dinner (Mar 19) with Kamino invited; (5) Broader market-making / MM requirements conversation.
- **Partnership facts:** FalconX is being brought in as an institutional borrower on Kamino Fixed Rates; they co-coordinate launch communications. Drift-incident briefing provided Apr 2.
- **Notes:** Honest framing: "FalconX accesses fixed-rate borrow on Kamino and co-markets institutional DeFi credit."

---

## FUNDS

### Pantera Capital
- **Groups:** `Pantera <> Kamino (Official)` (-4549411455 — sparse — 1 message) + `Kamino, Pantera, Anchorage Chat` (-1003706794559, active).
- **Activity:** Active via the tri-party Anchorage chat; the "Official" bilateral chat is dormant.
- **Relationship nature:** Institutional borrower + strategic partner. Pantera is the headline institutional borrower using Kamino's private-credit/institutional rails, custodied at Anchorage. Recent reference: Pantera's "The Solana Company" (HSDT) is a co-announced initiative that Chainlink / Superstate / Kamino are all involved in.
- **Core contact (partner-side):** Winston | Pantera (primary ops), Cosmo Jiang (strategy — asked for security/approval walkthrough post-Drift), M Gani / Maddy Gani (new COO/Deputy CFO), John Mayberry, Amar.
- **Current focus:** (1) First $5M clip borrowed early March, subsequent draws in progress; (2) Reviewing ACA updates for new Pantera borrowers; (3) Cosmo requested a security-walkthrough call for Pantera's HSDT internal team ("build more internal knowledge and expertise away from just Pantera having it"); (4) Chainlink-led announcement coordination for The Solana Company.
- **Partnership facts:** Pantera executed its first institutional borrow on Kamino via Anchorage CM rails in March 2026. The Solana Company ("HSDT") is a Pantera-driven Solana-native initiative with cross-ecosystem announcements planned.
- **Notes:** Strong framing: "Pantera uses Kamino as its institutional DeFi borrowing venue on Solana, custodied at Anchorage."

---

### Summer Capital
- **Group:** No dedicated group found. Context surfaces in `Kamino <> Figment` — Yanshan at Figment offered to meet Cheryl in Singapore to chat about Summer Capital ("Have some updates for yall, we just met with Alven and Joey in HK").
- **Activity:** No direct group activity. Indirect via Figment.
- **Relationship nature:** Fund introduction / investor relationship still forming. Figment is brokering the relationship.
- **Core contact (partner-side):** None direct; introductions via Figment (Yanshan, Gattman, Mars Leung, Tom Nicholls).
- **Current focus:** Early-stage relationship development — Figment has been briefing Summer Capital on Kamino with LTV / borrow APY / vault structure questions.
- **Partnership facts:** No concrete operational facts to surface publicly.
- **Notes:** Likely too early for landing-page hover-card prominence unless they've made a public capital commitment.

---

### RockawayX
- **Group:** `ROX Curation on Kamino` (-5008637287).
- **Activity:** Very active. Last messages Apr 23, 2026.
- **Relationship nature:** Curator + LP + ecosystem partner. Rockaway runs curation vaults on Kamino; Solana Foundation has invested $5M into Rockaway's RWA pool (told to the group privately, not announced publicly at that time).
- **Core contact (partner-side):** Adam Bilko (primary ops), Nassim Gilga (vault design), Julien (ops/eng), Samantha | RockawayX.
- **Current focus:** (1) Launching RockawayX USDT Core vault on Kamino (gap-fill vs Loopscale); (2) Coordinating USDT reserve rollout across Kamino markets; (3) Potential RockawayX Core USDT Vault + USDT RWA Vault; (4) Cross-link with Marinade (Rockaway-managed vault surfaced in Marinade UX); (5) Mark flagged they'll "take in USDT for the private credit off chain / BTC lending yield."
- **Partnership facts:** RockawayX is listed among Kamino's core curators ("gauntlet steakhouse rockaway allez"). Solana Foundation backed Rockaway's RWA pool with $5M (non-public at time of message — do NOT surface on hover-card). RockawayX USDT Core vault is imminent.
- **Notes:** Safe framing: "RockawayX curates institutional RWA and USDT vaults on Kamino." Redact SF $5M detail.

---

## WALLETS / TECH

### Phantom
- **Groups:** `Kamino <> Phantom` (channel, -1003119038045) + `Kamino <> Phantom: CASH` (-4838269997).
- **Activity:** Very active. Last messages Apr 15 / Apr 14, 2026.
- **Relationship nature:** Wallet distribution + product co-build. Phantom runs CASH (their stablecoin-like product) with Kamino yield underneath; Kamino vaults are surfaced in Phantom's UI.
- **Core contact (partner-side):** Keenan Monroe | Phantom (primary — CASH in-app vault), Yaovi Phantom (engineering — Transaction Guard, receipt-token pricing), Jorge | Phantom (metrics/API integration), Adam del Phantom, Will | Phantom, Dallas Kelle, Mike Osipov (embedded wallet, paused).
- **Current focus:** (1) Phantom Transaction Guard bug in Kamino vault deposits (failed tx ordering, escalated Apr 14); (2) Getting Kamino receipt tokens to show a price in Phantom (NAV API integrated); (3) Whitelisting `*.kamino-web.pages.dev` preview domain; (4) CASH <> Kamino in-app vault (50k CASH / 4wks incentive rate, reduced to 12.5k/wk); (5) Embedded wallet integration paused.
- **Partnership facts:** CASH (Phantom's cash-like yield product) is Kamino-powered. Phantom's wallet UI displays Kamino vault receipt-token prices pulled from Kamino's `/kvaults` API. Joint marketing exists (Phantom QT'd Kamino Mar 11).
- **Notes:** Deep, operational wallet partnership. Safe framing: "Phantom's CASH product is powered by Kamino, and Kamino vaults are discoverable inside Phantom's wallet." Recent relationship is productive despite the Transaction Guard bug.

---

### Squads
- **Group:** `Squads x Kamino (Support)` (-895102810) — freshly watched, 44-message backfill.
- **Activity:** Active. Last messages Apr 3, 2026.
- **Relationship nature:** Infrastructure partner. Squads is Kamino's multisig infrastructure — used for program upgrade authority, market admin, vault config. Relationship is a mix of deep dependency and occasional frustration ("be very fuckin careful with squads", "squads is so sloppily made" — internal mgmt venting).
- **Core contact (partner-side):** Sean Squads (primary — PDA/multisig questions), Bastien (ops), Deni (fixes), Stepan Simkin (Gauntlet-side, coordinating on a gauntlet-squads thread), Jeff Grunewald.
- **Current focus:** (1) On-chain deserialization of multisig state (Marius pushing for on-chain-only ingestion, not APIs — "i want to know if an address is a multisig, threshold, timelock, i don't want to use apis"); (2) Threshold / timelock configuration across Kamino's Squads setup post-Drift; (3) Multisig V3 vs V4 layout documentation.
- **Partnership facts:** Kamino uses Squads V4 multisig for program upgrade authority and market administration. Range provides the alerting layer on top of Squads proposals (Kamino Multisig Alerts channel).
- **Notes:** Critical infrastructure. Honest framing: "Squads provides the multisig infrastructure securing Kamino's protocol and vault administration." Don't over-sell intimacy — it's a tool/vendor relationship with occasional tension.

---

### Privy
- **Group:** `Privy <> Kamino` (-4284532875) — watched, but 0 messages in last 30 days.
- **Activity:** Inactive / very dormant.
- **Relationship nature:** Likely past or prospective embedded-wallet / auth integration. No recent operational signal.
- **Core contact (partner-side):** Not identifiable from current activity.
- **Current focus:** None currently visible.
- **Partnership facts:** None to surface from TG.
- **Notes:** Caveat for hover-card copy — if Privy is being featured, it's not grounded in active Telegram collaboration right now. Worth confirming with Dawid whether the integration is live, planned, or deprecated.

---

# Summary Observations

- **Most active / deepest-in-the-stack partners right now:** Phantom (CASH), Anchorage (CM rails), Pantera (first institutional borrower), Figure/Hastra (PRIME), Superstate (USCC/GLXY/STRC), Backed (xStocks), Maple (syrupUSDC), Gauntlet, Steakhouse, RockawayX, Sentora, FalconX.
- **Partners with no Telegram touchpoint in Dawid's world (surfacing only indirectly):** Coinbase, Bybit, Bitget, Securitize.
- **Dormant but watched:** Privy, Jito (partnership "cooled down significantly" per Dawid's internal note; technical ops remain active).
- **Relationships currently in a tense/heavy-DD moment (post-rsETH + post-Drift):** Re7 (opsec questionnaire standoff), Sentora (paused new allocations), Backed (mint-authority migration), Maple (risk re-examination). None are adversarial — all are mature risk partners doing their job.
- **Partners with explicit public co-marketing on a regular cadence:** Superstate, Chainlink, Phantom, Maple, Figure, Jito.

For landing-page hover-card drafting, the richest, safest source material per partner is:
1. Figure (PRIME), Superstate, Maple, Backed, Phantom, Anchorage, Pantera — public and active.
2. Gauntlet, Steakhouse, RockawayX, Sentora, Allez, MEV, Re7 — all safely described as "curators."
3. Chainlink, Jito, Squads — infrastructure, safely described as such.
4. OKX, FalconX — distribution / institutional trading.
5. Coinbase, Bybit, Bitget, Securitize, Privy, Summer Capital — minimal TG signal; lean on public materials or confirm scope with Dawid.
