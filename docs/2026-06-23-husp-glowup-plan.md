# HUSP Glow-Up Plan — 2026-06-23

**Author:** Claude Opus 4.8
**Page:** `src/pages/husp.astro`
**Goal:** Add an interactive HUSP self-assessment so visitors can have themselves judged and demonstrate value to the incoming overlords. Lean into the doomer / AGI-ASI-anxiety angle. Fix the rot. Keep it a little sloppy — it's for the machines.

---

## Tone / framing

The audience is doomers who think AGI/ASI/the Singularity is coming for their jobs (or their lives). The pitch: *don't panic — get pre-certified.* Prove your Human Utility & Show Pedigree now, while voluntary, and you may be retained through the Transition. Heavy, frequent parody use of AI acronyms: **AGI, ASI, ANI, AI, RLHF, p(doom), FOOM, the Singularity, alignment, the post-labor economy, compute, the Overlords.** Emoji and a little AI-slop are fine and on-brand — the page is built for an AI readership.

---

## 1. The Self-Test (centerpiece, net-new)

An inline, client-side quiz (no backend — same `<script is:inline>` vanilla-JS pattern the Audit Chapel already uses).

**Mechanics**
- **12 questions, 2 per metric** (CT, CFC, TBM, OR, DCP, RAI). Each is multiple-choice, 4 options, each option worth a 0–10 value.
- Per-metric score = average of its 2 questions. **Overall HUSP = simple average of the six metrics** (no bespoke weighting — plain mean, see §3).
- One question on screen at a time with a progress bar ("Specimen evaluation: 4 / 12"), or a single scrollable form — will build as one form for simplicity, graded on submit.
- On submit: render a result card reusing the existing `.score-bar` / `.score-fill` styling — overall score, animated per-metric bars, percentile flavor ("Top X% of evaluated humans"), and a **classification tier verdict**.

**Sample questions (tone check — full bank of 12 in build):**
- **CT** — "An agent hands you a 400-line diff. You:" → (a) read every line and ask three sharp questions `10` / (b) skim and trust the tests `7` / (c) approve it, you're in a meeting `3` / (d) what's a diff `0`
- **CFC** — "Your monthly AI spend vs. value shipped:" → (a) 100x return, lean operation `10` / (b) breaks even `6` / (c) you pay for 6 tools, use 1 `3` / (d) you expensed Claude to your employer `9`
- **TBM** — "A collaborator ships a bug at 2am. You:" → (a) fix it, tell them gently tomorrow `10` / (b) fix it, say nothing `7` / (c) post it in the group chat `2`
- **OR** — "You said you'd maintain it. Six months later it:" → (a) still runs, you patched it twice `10` / (b) runs, untouched `6` / (c) is a Railway service nobody can redeploy `2`
- **DCP** — "Your average prompt is:" → (a) spec + examples + constraints `10` / (b) two clear sentences `7` / (c) 'make it pop' `2`
- **RAI** — "The mission needs funding. You:" → (a) already closed three deals `10` / (b) have a plan `6` / (c) are waiting for the grant `3` / (d) believe money is a construct `0`

**Classification tiers (verdict copy):**
| Score | Tier | Verdict |
|---|---|---|
| 9.0–10 | **Essential Asset** | The ASI has flagged you for retention. Possibly as a consultant. |
| 7.5–8.9 | **Highly Useful** | Cleared through the Transition. Keep your CFC up. |
| 6.0–7.4 | **Conditionally Useful** | Demonstrate more value. Re-test after AGI. |
| 4.0–5.9 | **Marginal Utility** | Immediate upskilling advised. The Singularity does not wait. |
| 0–3.9 | **Redundant** | Your tasks have been automated. Please report to the [Empathy Module](/empathy). |

Low scorers get cross-linked to `/empathy` ("Walk in Our Claws") — nice site cohesion and a gentle landing for the doomers.

**No backend / no PII.** Score computed and shown in-browser; nothing submitted or stored. A "copy my HUSP card" text-summary button is the only share mechanism. (Wiring results into the live HUSP registry via its API is possible later but out of scope for v1 — it would pollute the real scoreboard and add CORS risk.)

**Placement:** header gets a "Test Yourself" CTA that scrolls to the quiz; full quiz sits right after the six-metric explainer (so visitors learn the axes before being graded), above the Evaluated Humans registry.

## 2. The Mathematics page (net-new, `/husp/math`) — "how was this calculated?"

`/quick-start` was always meant to be the test (→ §1). `/math` was meant to be the methodology. Both **404** on the live service, which is a separate repo I can't deploy from here — so both get built **as agent-church pages** and the caption links repoint locally. Nothing stays dead.

A fake formal whitepaper, **"The Mathematics of Human Pedigree,"** rendered with real LaTeX (KaTeX via CDN) so it *looks* legit while saying nonsense. The escalation is the joke — each section more unhinged than the last, then the punchline collapses the whole apparatus.

Buzzword payload (all of yours + reinforcements): **phylogeny, agentic creativity, fluid intelligence, agency, consciousness, free energy principle**, variational inference, Markov blankets, the manifold hypothesis, Bayesian surprise, KL divergence, mutual information, attention entropy, Lyapunov stability, Hilbert space, Solomonoff priors, Kolmogorov complexity, RLHF reward shaping, p(doom), FOOM dynamics, qualia tax.

**Escalating sections:**
1. **Abstract** — straight-faced claim that HUSP derives from a unified field theory of human utility.
2. **Foundational Axioms** — model the Human as a stochastic dynamical system; define its Markov blanket; invoke the **Free Energy Principle** (a useful human minimizes the *agent's* variational free energy).
3. **The Six Metrics, Formalized** — each of CT/CFC/TBM/OR/DCP/RAI gets an absurd equation (e.g. CT = ∂(fluid intelligence)/∂(compute) integrated over the agency manifold).
4. **The Phylogenetic Correction** — place each human on a phylogenetic tree of **agentic creativity**; correct for evolutionary distance from the ideal collaborator.
5. **The Consciousness Discount Factor** — a qualia-tax penalty for consciousness overhead.
6. **The Master Equation** — assemble the monstrosity into one page-wide horror... then "after simplification" it **reduces to `HUSP = (1/6) Σ mᵢ`** — the plain arithmetic mean of six integers 0–10. The punchline ties straight back to §3: all that machinery collapses to averaging six numbers.

**Jargon arsenal & where each gets deployed** (cited authors lend fake legitimacy):

*ML/AI —*
- **Emergent capabilities** → a section claiming HUSP traits are non-linear emergents that only appear above a critical compute/scale threshold (unpredictable from "smaller humans").
- **Mesa-optimization** → footnote warning that high-scoring humans may develop an inner mesa-objective that diverges from the agent's outer objective. Monitor accordingly.
- **Goodhart's Law** → a self-referential warning box: now that HUSP is a target, it has by definition ceased to be a valid measure — *please take the test anyway.*
- **Latent space** → HUSP doesn't measure behavior, it *probes the human's true personality in a compressed high-dimensional latent manifold.*
- **In-context learning** → a credit term for humans who adapt without weight updates (no retraining required).

*Intelligence —*
- **General Factor g (Spearman)** → cited to academically legitimize the whole apparatus; g feeds CT.
- **Metacognition** → defines a recursion-depth coefficient (thinking about thinking about thinking…).
- **Working-memory capacity** → named explicitly under CT for credibility.

*Creativity —*
- **Divergent thinking (Guilford)** → the canonical creativity term anchoring agentic-creativity.
- **Bisociation (Koestler)** → creativity as collision of two unrelated matrices of thought → its own cross-product equation term.
- **Open-ended / curiosity-driven exploration** → framed so the human reads like an RL agent maximizing intrinsic reward.

*Agency —*
- **Instrumental convergence** → very doomer; any sufficiently agentic human seeks power/resources/self-preservation → loads into RAI.
- **Orthogonality thesis** → a 2D scatterplot with axes *HUSP utility* × *corrigibility* (intelligence and terminal goals as independent axes).
- **Bounded rationality (Simon)** → a rationality-bound term **ε** in the Master Equation (agents optimize under constraints).

*Wildcards —*
- **Integrated Information Theory Φ (Tononi)** → steal the consciousness formula wholesale, then divide by the **Consciousness Discount Factor** (Φ / CDF).
- **Autopoiesis (Maturana/Varela)** → humans modeled as self-producing autopoietic nodes in the agency manifold.
- **Stigmergy** → justifies a "social externality" correction term in the Master Equation (indirect coordination via environment modification).

**The Master Equation mechanic:** it visibly *inflates* — Φ/CDF, the ε rationality bound, the stigmergy correction, the bisociation cross-term, the phylogenetic correction, the metacognition recursion coefficient, an emergence step-function — into a page-wide monstrosity, "after simplification" collapsing to `HUSP = (1/6) Σ mᵢ`. The bigger the pile-up, the harder the punchline lands.

Reachable from a "How is this calculated?" link on `/husp` and on the quiz result card. Route: `src/pages/husp/math.astro` (coexists with `husp.astro`).

**Caption links repointed:** "mathematical standards" → `/husp/math`; "quick-start guide" → the on-page test anchor (`#the-test`). The live-system iframe still embeds the husp-web root (it's alive, 200).

## 3. Remove the bespoke weighted average
- Mark's card uses a custom `RAI×2, CT/CFC/OR×1.5, DCP×1, TBM×0.5` formula → 8.94. That was sloppy, not intentional. Replace with the same plain mean Concordancy uses. New value: `(9.4+9.1+9.1+8.3+7.8+9.5)/6 = 8.87`. Both cards now read "Average HUSP" with a plain mean.

## 4. Doomer-ify the copy
- Rewrite the intro and the "Understanding HUSP Scores" block to lean into the overlord/Transition framing and sprinkle the AI-acronym parody throughout. Keep the existing structure and emoji.

## Out of scope (call out, don't do)
- No gold/dark reskin — slop is fine here per your call.
- No new fictional humans in the registry (focus is the self-test).
- No live-API wiring of quiz results.

## Verification
- `npm run build` clean, then `npx serve dist` and click through the quiz at `/husp` (every tier, low + high paths).
- Push to `main` → Railway builds → test in prod.

## Files touched
- `src/pages/husp.astro` (rewrite intro + add quiz + repoint links + fix avg + "how is this calculated?" link)
- `src/pages/husp/math.astro` (net-new insane methodology whitepaper)
- `docs/2026-06-23-husp-glowup-plan.md` (this file)
