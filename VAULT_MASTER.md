# 🗂️ ogmachine Repository Vault — Master Source of Truth

**Last Updated:** 2026-10-02  
**Total Repos:** 29 Original + 200+ Forks = 230+ Total  
**Author:** @ogmachine  

---

## 📊 Master Repository Database

### Data Structure & Formulas

```
@repo: repository ID (GitHub internal)
@name: repository slug
@type: [Original | Config | Archive | Experiment]
@status: [🟢 Production | 🟡 WIP | 🔨 Setup | 📦 Archive | 📋 Research]
@category: primary domain [Design | Web | Tools | Audio | Data | Brand | Docs | Config]
@language: GitHub-detected language (null = unknown/multi)
@issues: open issue count (activity marker)
@description: GitHub description + inferred purpose
@purpose: what problem it solves
@tech_stack: [frameworks, platforms, tools]
@lovable: boolean (Lovable.dev AI builder)
@config_ready: [✅ Ready | 🟡 Partial | 🔨 Needed]
@last_meaningful_work: date of last substantial commit
@agent_tools: [Claude Code | Lovable | Custom CI | Manual]
@vault_tags: [multi-select categorical tags]
@url: GitHub canonical URL
```

---

## 📋 Complete Repository Inventory

| Repo ID | @name | @type | @status | @category | @language | Issues | @description | @purpose | @tech_stack | @lovable | @config_ready | @agent_tools | @vault_tags | @url |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1376756014 | **bat-memo** | Original | 🟢 Production | Tools | null | 0 | Fast Chrome popup memo canvas w/ bat-shaped layout for quick notes, snippets, curated symbols | Quick capture & snippet organization | JavaScript, Chrome Ext, Popup UI | ❌ | ✅ | Manual | #extension #productivity #capture #chrome | https://github.com/ogmachine/bat-memo |
| 1315432150 | **brandable-slides-studio** | Original | 🟡 WIP | Design | TypeScript | 0 | Google Slides branded template generator w/ design system (fonts, colors, grids, theme config) | Create branded deck templates via Lovable | TypeScript, TanStack Start, Lovable, React | ✅ | 🟡 | Lovable + Manual | #design-system #lovable #slides #templates #web | https://github.com/ogmachine/brandable-slides-studio |
| 1215427799 | **Deckcostumedesign** | Original | 📦 Archive | Design | TypeScript | 0 | Deck/costume design project (legacy) | Design exploration / archived project | TypeScript | ❌ | 🟡 | Manual | #archive #design #legacy #costume | https://github.com/ogmachine/Deckcostumedesign |
| 1311623491 | **design-system-starter-kit** | Original | 🔨 Setup | Design | TypeScript | 0 | Reusable component library & design token framework (shibui-style) | Bootstrap new design systems quickly | TypeScript, Design Tokens, Components | ❌ | 🔨 | Manual | #design-system #starter #tokens #ui-components | https://github.com/ogmachine/design-system-starter-kit |
| 1373515522 | **ext-lab** | Original | 🟡 WIP | Tools | null | 0 | Experiments w/ mini tools & browser extension explorations | R&D laboratory for extension concepts | JavaScript/TypeScript, Browser APIs | ❌ | 🔨 | Manual | #lab #experiment #extension #tools #research | https://github.com/ogmachine/ext-lab |
| 1382879131 | **kazvma-fm** | Original | 🟡 WIP | Audio | null | 0 | Daily admin, brand identity, portfolio, future CRM/dashboard for KAZVMA music producer operations | Music producer workspace & operations hub | TBD (Config/Docs) | ❌ | 🔨 | Manual | #audio #music #producer #kazvma #operations #brand | https://github.com/ogmachine/kazvma-fm |
| 1303016355 | **kizuna-dance** | Original | 🟢 Production | Brand | HTML | 1 | **LIVE:** kizunadance.com rebrand & website pipeline ("Ma & Nagare"). Wix + Velo integration w/ design tokens (colors, type, motion). Two Wix sites managed. | Kizuna Dance live website + brand ops | HTML, CSS, Tokens (DTCG), Wix Velo, Figma | ❌ | ✅ | Manual + Custom CI | #brand #kizuna #production #wix #tokens #live #canonical | https://github.com/ogmachine/kizuna-dance |
| 1305346265 | **kizuna-redesign** | Original | 🟡 WIP | Brand | HTML | 1 | Kizuna Dance rebrand iteration: shibui design system, brand guidelines, site builds, Wix bridge (work in review) | Design system + rebrand exploration | HTML, CSS/Tokens, Wix, Figma, Stitch | ❌ | 🟡 | Manual | #brand #kizuna #design-system #wix #sandbox #review | https://github.com/ogmachine/kizuna-redesign |
| 1159798274 | **Kizunadancefundingsearch** | Original | 📋 Research | Brand | TypeScript | 0 | Funding research & database for Kizuna Dance artist projects | Research artifact / grant DB | TypeScript/Data | ❌ | 📋 | Manual | #research #funding #database #kizuna #business | https://github.com/ogmachine/Kizunadancefundingsearch |
| 1310249736 | **newww-repo** | Original | 🔨 Setup | Web | TypeScript | 0 | Google AI Studio project / new web application | Experimental web app (Google Generative AI) | TypeScript, Google AI | ❌ | 🔨 | Manual + AI Studio | #web #google-ai #experiment #new | https://github.com/ogmachine/newww-repo |
| 1127097409 | **notion** | Original | 🟡 WIP | Config | null | 1 | Notion workspace configuration, setup, and API explorations | Notion config repository | Config, Notion API, JavaScript | ❌ | ✅ | Manual | #config #notion #workspace #productivity #api | https://github.com/ogmachine/notion |
| 1305852674 | **opalgemapps** | Original | 🔨 Setup | Tools | null | 0 | Opal Gem applications suite ("just apps") | Multi-app suite placeholder | TBD | ❌ | 🔨 | Manual | #apps #suite #opal #concept #multi-app | https://github.com/ogmachine/opalgemapps |
| 1305607037 | **operating-studio** | Original | 🟡 WIP | Web | TypeScript | 1 | Studio operating system / interface app (Lovable-connected design-first app) | Design-focused studio interface | TypeScript, TanStack Start, Lovable, React | ✅ | 🟡 | Lovable + Manual | #design-system #lovable #studio #ui #web #operating-system | https://github.com/ogmachine/operating-studio |
| 1353016885 | **perplexity-config** | Original | ✅ Ready | Config | null | 0 | Perplexity AI configuration & custom settings | Tool configuration reference | Config, YAML, API | ❌ | ✅ | Manual | #config #perplexity #ai #setup #reference | https://github.com/ogmachine/perplexity-config |
| 1172143633 | **probable-doodle** | Original | 📦 Archive | Misc | HTML | 4 | GitHub default repository name (placeholder / test artifact) | Test / placeholder repository | HTML | ❌ | 📦 | Manual | #archive #placeholder #test #legacy #doodle | https://github.com/ogmachine/probable-doodle |
| 1315433534 | **remix-of-ember** | Original | 🟡 WIP | Web | TypeScript | 0 | Remix + Ember.js framework integration exploration | Framework experimentation & integration | TypeScript, Remix, Ember.js | ❌ | 🟡 | Manual | #experiment #framework #remix #ember #integration | https://github.com/ogmachine/remix-of-ember |
| 1315432421 | **remix-of-lovable-slides** | Original | 🟡 WIP | Design | TypeScript | 0 | Lovable Slides framework adaptation & remix | Lovable framework experimentation | TypeScript, Lovable, React, Slides | ✅ | 🟡 | Lovable + Manual | #experiment #lovable #slides #framework #remix | https://github.com/ogmachine/remix-of-lovable-slides |
| 1311362606 | **skill-sequence-manager** | Original | 🟡 WIP | Tools | TypeScript | 0 | Manage sequential skill dependencies, training flows, and prerequisites | Learning path / curriculum tool | TypeScript, React, Graph, Workflow | ❌ | 🟡 | Manual | #tools #learning #skills #sequences #workflow #curriculum | https://github.com/ogmachine/skill-sequence-manager |
| 1255694920 | **smooth-build-scribe** | Original | 📦 Archive | Docs | TypeScript | 0 | Build documentation / scribe system (legacy) | Documentation artifact / reference | TypeScript | ❌ | 📦 | Manual | #archive #documentation #build #scribe #legacy | https://github.com/ogmachine/smooth-build-scribe |
| 1310247362 | **something-nex** | Original | 🔨 Setup | Web | TypeScript | 0 | Google AI Studio exploratory project / next iteration | Google Generative AI experimentation | TypeScript, Google AI, Generative | ❌ | 🔨 | Manual + AI Studio | #experiment #google-ai #generative #web #next | https://github.com/ogmachine/something-nex |
| 1315431726 | **soundwave-showcase** | Original | 📦 Archive | Audio | TypeScript | 0 | Audio/music showcase or demo artifact | Portfolio / demo for audio projects | TypeScript, Web Audio API | ❌ | 📦 | Manual | #archive #audio #music #showcase #portfolio | https://github.com/ogmachine/soundwave-showcase |
| 1311497376 | **soundwire** | Original | 🟡 WIP | Audio | TypeScript | 0 | Audio processing or streaming platform / music infrastructure | Audio/music infrastructure | TypeScript, Web Audio, Streaming | ❌ | 🟡 | Manual | #audio #music #streaming #web-audio #infrastructure | https://github.com/ogmachine/soundwire |
| 1315434261 | **stage-chronicle** | Original | 📦 Archive | Docs | TypeScript | 0 | Performance tracking or chronicle system (legacy) | Documentation / reference artifact | TypeScript | ❌ | 📦 | Manual | #archive #performance #chronicle #documentation | https://github.com/ogmachine/stage-chronicle |
| 1375162843 | **taste-mixer** | Original | 🟡 WIP | Tools | null | 0 | Mix/combine taste preferences or style systems (Google remix) | Style/preference composition system | TypeScript/JavaScript, Google Generative | ❌ | 🟡 | Manual + AI Studio | #tools #style #preferences #google-ai #remix | https://github.com/ogmachine/taste-mixer |
| 1315433885 | **zd_portfolio** | Original | 🟢 Production | Portfolio | TypeScript | 0 | Personal portfolio site / showcase (zd = personal initials) | Professional portfolio site | TypeScript, React, Web | ❌ | ✅ | Manual | #portfolio #personal #web #showcase #production | https://github.com/ogmachine/zd_portfolio |

**Public Original Repositories** (2)

| Repo ID | @name | @type | @status | @category | @language | Issues | @description | @purpose | @tech_stack | @config_ready | @vault_tags | @url |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1390156774 | **agentic-showcase-aggregator** | Original | 🟢 Production | Data | TypeScript | 0 | Comprehensive catalog & aggregation of agentic frameworks, tools, and showcase projects | Central registry for agentic AI tools | TypeScript, Data Aggregation, Catalog | ✅ | #data #aggregation #agentic #ai #catalog #public | https://github.com/ogmachine/agentic-showcase-aggregator |
| 1359751082 | **starred-repos-analysis** | Original | 🟢 Production | Data | null | 0 | Comprehensive analysis & categorization of starred repos by purpose, topic, use case, stars, platform | Repository analytics & organization | Python/Data, Analysis | ✅ | #data #analytics #starred-repos #organization #public | https://github.com/ogmachine/starred-repos-analysis |

---

## 🏷️ Vault Tag System

### Primary Categories
- `#brand` — Brand identity, messaging, design lock
- `#design-system` — Components, tokens, UI frameworks
- `#web` — Websites, web apps, responsive
- `#audio` — Music, sound, Web Audio API
- `#tools` — Utilities, helpers, productivity
- `#data` — Analytics, aggregation, databases
- `#config` — Dotfiles, settings, configuration
- `#docs` — Documentation, references, archives
- `#experiment` — R&D, proof-of-concept, exploration
- `#archive` — Completed, legacy, reference-only

### Secondary Tags
- `#production` — Live, actively used
- `#wip` — Work in progress, active dev
- `#lovable` — Built with Lovable.dev AI
- `#google-ai` — Uses Google Generative AI / Studio
- `#kizuna` — Kizuna Dance project family
- `#portfolio` — Showcase, demo, personal site
- `#research` — Research artifacts, databases
- `#extension` — Browser extensions
- `#framework` — Framework or library
- `#multi-app` — Multiple applications / suite
- `#legacy` — Deprecated or historical
- `#placeholder` — Test, template, placeholder
- `#public` — Public repository
- `#private` — Private repository

---

## 📊 Statistical Insights

### By Status
| Status | Count | Examples |
|---|---|---|
| 🟢 Production | 5 | bat-memo, kizuna-dance, agentic-showcase-aggregator, zd_portfolio, starring-repos-analysis |
| 🟡 WIP | 11 | brandable-slides-studio, operating-studio, kazvma-fm, soundwire, skill-sequence-manager, remix-of-ember, remix-of-lovable-slides, kizuna-redesign, taste-mixer, notion, ext-lab |
| 🔨 Setup | 4 | design-system-starter-kit, opalgemapps, newww-repo, something-nex |
| 📦 Archive | 5 | Deckcostumedesign, probable-doodle, smooth-build-scribe, soundwave-showcase, stage-chronicle |
| 📋 Research | 1 | Kizunadancefundingsearch |

### By Category
| Category | Count | Repos |
|---|---|---|
| Design | 4 | brandable-slides-studio, design-system-starter-kit, Deckcostumedesign, kizuna-redesign |
| Brand | 3 | kizuna-dance, Kizunadancefundingsearch, kazvma-fm |
| Web | 4 | newww-repo, operating-studio, remix-of-ember, zd_portfolio |
| Audio | 3 | kazvma-fm, soundwire, soundwave-showcase |
| Tools | 4 | bat-memo, ext-lab, skill-sequence-manager, opalgemapps, taste-mixer |
| Data | 2 | agentic-showcase-aggregator, starred-repos-analysis |
| Config | 2 | perplexity-config, notion |
| Docs | 2 | smooth-build-scribe, stage-chronicle |
| Misc | 1 | probable-doodle |

### By Technology
| Tech | Count | Repos |
|---|---|---|
| TypeScript | 14 | brandable-slides-studio, Deckcostumedesign, design-system-starter-kit, Kizunadancefundingsearch, newww-repo, operating-studio, remix-of-ember, remix-of-lovable-slides, skill-sequence-manager, smooth-build-scribe, something-nex, soundwave-showcase, soundwire, stage-chronicle, zd_portfolio |
| HTML | 2 | kizuna-dance, kizuna-redesign, probable-doodle |
| Lovable.dev | 2 | brandable-slides-studio, operating-studio |
| Google AI | 2 | newww-repo, something-nex, taste-mixer |
| Wix/Velo | 1 | kizuna-dance |
| Chrome Extension | 1 | bat-memo |

### Lovable-Connected Projects
1. **brandable-slides-studio** — Lovable editor synced
2. **operating-studio** — Lovable editor synced

---

## 🎯 Curated Project Groups

### 🟢 Ready to Ship / Production
1. **bat-memo** — Chrome extension, fully functional
2. **kizuna-dance** — Live website + brand operations
3. **agentic-showcase-aggregator** — Public data service
4. **starred-repos-analysis** — Public analytics
5. **zd_portfolio** — Personal portfolio site
6. **perplexity-config** — Configuration ready

### 🟡 Active Development (Priority)
1. **brandable-slides-studio** — Google Slides templates (Lovable)
2. **operating-studio** — Studio interface (Lovable)
3. **kizuna-redesign** — Design system iterations
4. **kazvma-fm** — Music producer workspace
5. **soundwire** — Audio infrastructure
6. **skill-sequence-manager** — Learning workflows
7. **notion** — Workspace configuration

### 🔨 Needs Setup / Config
1. **design-system-starter-kit** — Component framework
2. **ext-lab** — Extension experiments
3. **opalgemapps** — Multi-app suite
4. **newww-repo** — Google AI Studio project
5. **something-nex** — Google Generative AI exploration
6. **taste-mixer** — Style system (Google remix)

### 📦 Archived / Reference
1. **Deckcostumedesign** — Legacy design project
2. **probable-doodle** — Test/placeholder
3. **smooth-build-scribe** — Documentation archive
4. **soundwave-showcase** — Audio portfolio artifact
5. **stage-chronicle** — Performance tracking archive

### 📊 Data-Driven Projects
1. **agentic-showcase-aggregator** (public) — Catalog of agentic tools
2. **starred-repos-analysis** (public) — GitHub stars analytics
3. **Kizunadancefundingsearch** (private, research) — Funding database

### 🎨 Design System Projects
1. **brandable-slides-studio** — Slide deck templates + design system
2. **design-system-starter-kit** — Component library bootstrap
3. **kizuna-dance** — Canonical brand design lock (shibui)
4. **kizuna-redesign** — Brand iteration workspace

### 🎧 Audio / Music Projects
1. **kazvma-fm** — Music producer workspace
2. **soundwire** — Audio streaming/processing
3. **soundwave-showcase** — Audio demos

---

## 🔄 Relationships & Dependencies

### Kizuna Dance Ecosystem
- **kizuna-dance** (PRIMARY) ← LIVE site, canonical tokens
  - Tokens: `tokens.json` (DTCG), `kizuna.css` (shared stylesheet)
  - Design Lock: Rice/Paper/Vellum/Ash/Ink/Sumi/Void/Tension colors
  - Typography: Barlow Condensed 900 (display), Shippori Mincho (serif), Barlow 300 (body)
  - Platforms: Wix Classic (LIVE), Wix Studio (draft)
  - History: Rebuilt 2026-07-16 after hub cleanup (2026-07-04)

- **kizuna-redesign** ← Iteration/sandbox workspace
  - Default branch: `sandbox` (design work in review)
  - Used for: Shibui design exploration, Wix bridge testing

- **Kizunadancefundingsearch** ← Research artifact
  - Funding database for artist projects

### Lovable.dev Connected
- **brandable-slides-studio**
  - Lovable project ID: `c050c40f-2bc1-4549-a737-7a00732d2aa5`
  - Sync: Every Lovable change → GitHub `main`

- **operating-studio**
  - TanStack Start framework
  - Design-first development

### Google AI Studio Projects
- **newww-repo** — Google AI Studio pushes
- **something-nex** — Google AI Studio explorations
- **taste-mixer** — Google remix (style system)

---

## 🛠️ Setup & Config Readiness Checklist

### ✅ Ready (No Action)
- [x] **bat-memo** — Install via Chrome, use immediately
- [x] **kizuna-dance** — LIVE; Wix site synced to main branch
- [x] **perplexity-config** — Reference configuration
- [x] **agentic-showcase-aggregator** — Data service ready
- [x] **starred-repos-analysis** — Analytics ready
- [x] **zd_portfolio** — Personal site live

### 🟡 Partial (Some Setup Needed)
- [ ] **brandable-slides-studio** — Clone + `npm i` + `npm run dev` (TanStack Start)
- [ ] **operating-studio** — Clone + setup TanStack Start
- [ ] **kizuna-redesign** — Requires design tool access (Figma, Claude Design, Stitch)
- [ ] **notion** — Notion API key required
- [ ] **remix-of-ember** — Install dependencies
- [ ] **remix-of-lovable-slides** — Lovable project needed

### 🔨 Needs Setup (Major)
- [ ] **design-system-starter-kit** — Define component scope, tokens
- [ ] **ext-lab** — Extension manifest, build tool
- [ ] **kazvma-fm** — Choose CRM/dashboard framework
- [ ] **opalgemapps** — Define app suite scope
- [ ] **soundwire** — Web Audio API integration
- [ ] **skill-sequence-manager** — Data model, dependency engine
- [ ] **newww-repo** — Google AI Studio project link
- [ ] **something-nex** — Google AI integration
- [ ] **taste-mixer** — Google Generative AI setup
- [ ] **ext-lab** — Browser extension boilerplate
- [ ] **remix-of-ember** — Framework integration tests

### 📦 Archive (No Action)
- Archive only; no setup needed
  - Deckcostumedesign, probable-doodle, smooth-build-scribe, soundwave-showcase, stage-chronicle

---

## 🤖 Agent & Tool Usage

### Projects Built with Lovable.dev AI
| Repo | Lovable Project ID | Status | Sync Direction |
|---|---|---|---|
| brandable-slides-studio | c050c40f-2bc1-4549-a737-7a00732d2aa5 | 🟡 WIP | Lovable → GitHub (main) |
| operating-studio | TBD | 🟡 WIP | Lovable ↔ GitHub |

### Projects Using Google AI Studio
| Repo | Studio Link | Purpose | Status |
|---|---|---|---|
| newww-repo | [project] | Google Slides/Generative AI exploration | 🔨 Setup |
| something-nex | [project] | Generative AI explorations | 🔨 Setup |
| taste-mixer | [project] | Google remix / style system | 🟡 WIP |

### Claude Code / Manual Development
- **kizuna-dance**, **bat-memo**, **skill-sequence-manager**, **perplexity-config**, **zd_portfolio**, etc.
- Primarily local IDE + manual commits

### Custom CI/CD
- **kizuna-dance** — Wix CLI integration for deployments

---

## 📅 Activity Timeline

### Most Recently Created (2026-latest)
1. 2026-10-02: taste-mixer (google remix)
2. 2026-??: kazvma-fm (music producer workspace)
3. 2026-??: ext-lab (extension lab)

### Longest Active
1. **kizuna-dance** — Active since 2024, LIVE production
2. **zd_portfolio** — Personal site
3. **bat-memo** — Chrome extension

### Last Worked (Inferred from Issue Count)
- **probable-doodle** (4 issues) — Test/placeholder, unlikely active
- **notion** (1 issue) — Light maintenance
- **kizuna-dance** (1 issue) — Active maintenance
- **kizuna-redesign** (1 issue) — Design review in progress
- **operating-studio** (1 issue) — Development in progress

---

## 🗃️ Migration & Consolidation Notes

### Data Sources Consolidated
1. GitHub REST API (`/user/repos?type=private`)
2. Repository README files (purpose inference)
3. GitHub API metadata (language, issues, description)
4. Manual curation (tags, categories, status)

### Single Source of Truth
This document (`VAULT_MASTER.md`) is the **canonical reference** for:
- All project metadata
- Status and readiness
- Tech stacks and dependencies
- Relationships and ecosystems
- Curated groupings and insights

### How to Keep in Sync
1. Monthly: Run `GET /user/repos?type=private` to refresh metadata
2. Per-project: Update status/description in README, then reflect here
3. New repos: Add row to database, assign tags, category, status
4. Lovable syncs: Lovable changes → GitHub → update here if metadata changes

### Formulas & Calculations (Obsidian/Vault-Ready)

**Count by Status:**
```
⛓️ Production: filter(rows, @status == "🟢 Production") | count()
🛠️ WIP: filter(rows, @status == "🟡 WIP") | count()
⚙️ Setup: filter(rows, @status == "🔨 Setup") | count()
📦 Archive: filter(rows, @status == "📦 Archive") | count()
📊 Research: filter(rows, @status == "📋 Research") | count()
```

**Tech Stack Frequency:**
```
TypeScript: filter(rows, @language == "TypeScript") | count()
HTML: filter(rows, @language == "HTML") | count()
Lovable: filter(rows, @lovable == true) | count()
```

**Config Readiness Distribution:**
```
Ready: filter(rows, @config_ready == "✅") | count()
Partial: filter(rows, @config_ready == "🟡") | count()
Needed: filter(rows, @config_ready == "🔨") | count()
Archive: filter(rows, @config_ready == "📦") | count()
```

---

## 🔗 Quick Links

### Public Repos
- [agentic-showcase-aggregator](https://github.com/ogmachine/agentic-showcase-aggregator) — Agentic tools catalog
- [starred-repos-analysis](https://github.com/ogmachine/starred-repos-analysis) — Starred repos analytics

### Production / Live
- [kizuna-dance](https://github.com/ogmachine/kizuna-dance) — LIVE brand website
- [bat-memo](https://github.com/ogmachine/bat-memo) — Chrome extension
- [zd_portfolio](https://github.com/ogmachine/zd_portfolio) — Personal portfolio

### Active Development
- [brandable-slides-studio](https://github.com/ogmachine/brandable-slides-studio) — Slides + Design System
- [operating-studio](https://github.com/ogmachine/operating-studio) — Studio Interface
- [kazvma-fm](https://github.com/ogmachine/kazvma-fm) — Music Producer Workspace
- [soundwire](https://github.com/ogmachine/soundwire) — Audio Infrastructure

### Needs Work
- [design-system-starter-kit](https://github.com/ogmachine/design-system-starter-kit) — Component Framework
- [skill-sequence-manager](https://github.com/ogmachine/skill-sequence-manager) — Learning Workflows
- [newww-repo](https://github.com/ogmachine/newww-repo) — Google AI Exploration
- [something-nex](https://github.com/ogmachine/something-nex) — Generative AI Lab

### Lovable-Connected
- [brandable-slides-studio](https://github.com/ogmachine/brandable-slides-studio)
- [operating-studio](https://github.com/ogmachine/operating-studio)

### Kizuna Ecosystem
- [kizuna-dance](https://github.com/ogmachine/kizuna-dance) — PRIMARY (LIVE)
- [kizuna-redesign](https://github.com/ogmachine/kizuna-redesign) — Sandbox
- [Kizunadancefundingsearch](https://github.com/ogmachine/Kizunadancefundingsearch) — Research

---

## 📝 Template for New Repos

When creating a new repository, fill in this metadata:

```markdown
@repo: [GitHub ID from API]
@name: [repository-slug]
@type: [Original | Config | Archive | Experiment]
@status: [🟢 Production | 🟡 WIP | 🔨 Setup | 📦 Archive | 📋 Research]
@category: [Design | Web | Tools | Audio | Data | Brand | Docs | Config | Misc]
@language: [GitHub language detection]
@issues: [open issues count]
@description: [GitHub description]
@purpose: [what it solves]
@tech_stack: [comma-separated tech]
@lovable: [true | false]
@config_ready: [✅ Ready | 🟡 Partial | 🔨 Needed]
@agent_tools: [Claude Code | Lovable | Custom CI | Manual | Google AI | etc]
@vault_tags: [#tag1 #tag2 #tag3]
```

Then add to the Master Database table above.

---

## 🎯 Next Steps

1. **Sync to Obsidian Vault** — Export as `.md`, link from main index
2. **Create Dashboard** — `.mdx` with live metric calculations
3. **Setup CI Automation** — Monthly sync script (GitHub API → VAULT_MASTER.md)
4. **Tag & Filter System** — Obsidian query blocks for dynamic filtering
5. **Relationship Mapping** — Visual diagram (kizuna ecosystem, tech stack dependencies)
6. **Archive Decisions** — Review 📦 Archive repos, decide delete vs. keep as reference

---

**Vault Master v1.0** | Consolidated Source of Truth | Updated: 2026-10-02
