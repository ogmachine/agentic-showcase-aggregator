# Agentic Showcase Aggregator

An interactive, evidence-oriented library for finding reusable showcases, galleries, workflows, templates, marketplaces, documentation, and solution patterns before building from scratch.

## Features and definitions

| Feature | Definition | Passing criterion |
|---|---|---|
| Normalized resource record | Every item uses the same metadata contract. | 100% of records pass `validateResources()` with no errors. |
| Canonical source link | `source_url` points to the primary publisher or authoritative directory. | Absolute HTTP(S) URL; manually verified before promotion to trusted. |
| Taxonomy filtering | Search across platform, type, use-case, and format. | A filter returns only records matching every selected constraint. |
| Adoption guidance | Each item recommends full, partial, hybrid, or combined adoption. | Recommendation is score-based and shown beside the source. |
| Reusability score | 0–100 estimate of transferability, completeness, evidence, and maintenance. | Integer in range; score rationale is reviewable in `notes`. |
| Provenance | Source category, URL, verification status, and verification date are stored. | No trusted record lacks provenance fields. |
| Interactive scan | Browser UI supports free-text and taxonomy filters. | A user can reach a relevant result in one search/filter interaction. |
| Automated regression checks | Data and behavior are tested on every change. | `npm test` and `npm run validate:data` both exit 0. |
| Safe reuse | Licenses, access, dependencies, and security are not assumed. | Adoption is blocked or marked partial when these are unknown. |

## Validation protocol

### 1. Ingestion validation

For every new record:

1. Confirm the URL resolves and is the canonical source, not merely a repost.
2. Record the source publisher, page title, retrieval date, and source category.
3. Parse the resource into the schema in `src/resources.js`.
4. Apply controlled vocabulary values for `type`, `use_case`, `format`, `maturity`, and `adoption_mode`.
5. Add at least three `reusable_blocks` and a concise summary.
6. Mark `verification_status` as `url-reachable-pending-manual-review` until a human checks it.

### 2. Human review protocol

A reviewer checks:

- **Identity:** Does the title and platform match the linked source?
- **Evidence:** Is there a runnable example, concrete workflow, template, architecture, or documented outcome?
- **Transferability:** Can a reusable block be extracted without copying an entire product?
- **Maturity:** Is it a production practice, an emerging demo, or a mixed gallery?
- **License/access:** Are reuse rights, dependencies, pricing, and authentication requirements clear?
- **Safety:** Are privacy, secrets, data handling, and prompt-injection risks understood?
- **Freshness:** Is the item still available and materially current?

After review, set `verification_status` to `manually-verified`, `stale`, or `rejected` and update `last_verified`.

### 3. Scoring protocol

Start at 0 and score each dimension from 0–20:

- **Relevance:** directly maps to a target use-case.
- **Completeness:** includes enough instructions, artifacts, or architecture to reproduce the pattern.
- **Transferability:** reusable across tools or contexts.
- **Evidence:** demonstrates a working outcome or credible implementation.
- **Maintenance:** source is current, available, and supported.

`reusability_score = sum(dimensions)`, capped at 100. Scores are decision aids, not quality guarantees.

Suggested gates:

- **90–100:** eligible for full or controlled hybrid adoption after local tests.
- **80–89:** hybrid adoption; preserve local ownership of security and integration.
- **70–79:** partial adoption only; extract isolated patterns.
- **0–69:** discovery/inspiration; do not treat as a validated solution.

### 4. Adoption validation

Before adopting a resource into a real solution:

1. Write the target outcome and acceptance tests.
2. Identify the exact reusable blocks being adopted.
3. Build a sandbox/prototype with synthetic or non-sensitive data.
4. Run functional, usability, security, cost, latency, and failure-mode tests.
5. Compare results with the from-scratch baseline where practical.
6. Record deviations, rejected assumptions, and rollback steps.
7. Promote only if the local acceptance criteria pass.

A source is never considered validated solely because it appears in this catalog.

## Commands

```bash
npm test
npm run validate:data
npm run serve
```

Then open the local URL printed by `serve`.

## Current official/source directories

The initial catalog includes source links for Claude Marketplace, OpenAI Developer Showcase and Codex learning resources, Replit Community, Vercel v0 Components, Google AI Studio Templates, GitHub Copilot docs, Notion Templates, Miroverse, and the Agent Skills standard. Entries are deliberately marked `url-reachable-pending-manual-review` so that the validation protocol is explicit rather than implying that a URL alone proves quality.

## Contribution checklist

A contribution passes only when it includes:

- a unique stable `id`
- canonical `source_url`
- normalized classifications
- a summary and reusable blocks
- score and rationale
- license/access caveat
- verification status and date
- passing automated tests
- manual review notes for trusted promotion
