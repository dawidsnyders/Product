# Marketing Brief: High-Trust Vault Features

## Overview

We're launching two new features that raise the trust and security bar for Kamino's curated lending vaults. Both features give depositors stronger guarantees about how their capital is managed and protected.

---

## Feature 1: First Loss Capital

### What it is
Vault curators can now lock their own capital into a dedicated "first loss" farm. This capital is the first to absorb any losses from bad debt incurred in the vault — before any depositor funds are touched.

### How it works
- Curator deposits capital into a first loss farm on their vault
- **Kamino matches curator first loss deposits** [TBC] — doubling the protection buffer for depositors
- If the vault takes a loss (bad debt), the first loss capital absorbs it first
- Funds are locked with a **30-day cooldown period** — curators can't just pull out when things look risky
- Depositors can see how much first loss capital a curator has committed

### Why it matters
**Skin in the game.** Curators are now financially accountable for the risks they underwrite. If a curator makes poor allocation decisions, they eat the losses first. This aligns curator incentives directly with depositor outcomes.

### Key messaging angles
- Curators putting their money where their mouth is
- Depositor protection through aligned incentives
- Accountability built into the protocol, not just promised
- The 30-day lock prevents curators from front-running bad outcomes

---

## Feature 2: Pre-Approved Reserves

### What it is
Vaults can now be restricted to only allocate into Kamino-whitelisted markets and reserves. When a curator activates pre-approved reserves on their vault, the vault can only deploy capital into markets that have been vetted and approved.

### How it works
- Kamino maintains a whitelist of approved markets/reserves
- Curators can activate the "pre-approved reserves" setting on their vaults
- Once activated, the vault can **only** allocate into whitelisted markets - this is an immutable onchain vault setting
- Any attempt to allocate into a non-approved market is blocked at the protocol level

### Why it matters
**Protection against malicious attacks.** This guards against an extreme but real threat: a bad actor spinning up a fake market with artificially inflated collateral, then — through compromised curator access or other exploit — allocating vault funds into that market and draining them by borrowing against the fake collateral.

Pre-approved reserves eliminates this attack vector entirely. Even if a curator's multisig is compromised, the attacker can only allocate into known, vetted markets.

### Key messaging angles
- Protocol-level security, not just operational security
- Protects against both external attacks and compromised access
- Depositors can verify their vault only touches approved markets
- Defense in depth — a safety net even in worst-case scenarios

---

## Combined Narrative

These two features together represent a new standard for trust in DeFi lending:

1. **First Loss Capital** = curators are financially aligned with depositors
2. **Pre-Approved Reserves** = curators are operationally constrained to safe markets

One ensures accountability. The other ensures security. Together, they make Kamino vaults the highest-trust curated lending product in DeFi.

---

## Suggested Taglines / Hooks

- "A new security standard for vaults in DeFi"
- "Trust, enforced by code"
- "Curators with skin in the game, vaults with guardrails"
