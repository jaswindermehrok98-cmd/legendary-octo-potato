# UNPLUG LABS® OFFLINE OS — Gemini-Optimized Brandbook
**Version:** 1.0  |  **Date:** 21 September 2026  |  **Status:** Master source of truth  |  **Product:** UNPLUG LABS® OFFLINE OS

# How this document must be used by AI models
This document is the canonical design, product, language, interaction, and implementation reference for UNPLUG LABS® OFFLINE OS. When a Gemini model receives this document as context, it should treat explicit MUST / MUST NOT rules as higher priority than examples or optional ideas. Examples are references, not requirements. When the user gives a new product-specific instruction, preserve this brand system unless the user explicitly overrides a rule.

```text
SOURCE-OF-TRUTH ORDER
1. Explicit user instruction for the current task
2. This brandbook
3. Approved visual references supplied with the task
4. Existing UNPLUG LABS product/source code
5. Model assumptions

NEVER invent missing brand facts. Ask or state an assumption when a missing fact materially changes the work.
```

# Model-facing operating rules
- Be precise and direct. Prefer concrete implementation rules over vague adjectives.
- Keep the visual system consistent across screens, assets, copy, and interactions.
- Use the supplied context as the source of truth instead of filling gaps with generic design conventions.
- When the instruction is long, preserve section boundaries and do not merge unrelated rules.
- Before changing an existing design, identify which current rule the proposed change serves.
- When a request conflicts with this brandbook, follow the higher-priority instruction and note the tradeoff internally.
- Do not add features simply because they are common in apps or websites.
- Do not add AI features solely because the product was created with AI tools.

# 01 — Brand identity
Brand name: **UNPLUG LABS®**
Product name: **UNPLUG LABS® OFFLINE OS**
Core idea: The public web is the outer layer; OFFLINE OS is a local, private digital environment that feels like entering the world of UNPLUG LABS.

Core principle: **Do not make an app about UNPLUG LABS. Make UNPLUG LABS itself, packaged as an offline Android environment.**

Experience transition: **WEB → SYSTEM**

Desired user feeling: curiosity, entry, discovery, control, coherence, and the sense that the environment contains more than is initially visible.

## Brand personality
- premium
- editorial
- experimental
- intelligent
- minimal but strange
- tactile
- quietly confident
- precise
- contemporary
- mysterious without being confusing
- intentional

## Brand personality — not this
- generic freelancer
- generic agency
- startup-bro
- corporate software
- generic SaaS
- cyberpunk cliché
- AI aesthetic
- gamer UI
- childish gamification
- overly futuristic fantasy
- cheap/template design

# 02 — Product definition
OFFLINE OS is a native Android application that behaves like a self-contained digital environment. It is OS-like, not a replacement operating system. It must not claim to replace Android, require root, or alter the user’s Android system.

```text
PRODUCT
UNPLUG LABS® OFFLINE OS

TAGLINE
A digital environment that exists beyond the browser.

CORE EXPERIENCE
BOOT → HOME → MODULES → DISCOVERY → EXPERIMENT → ARCHIVE → RETURN

PRIMARY MODULES
THE READ / DROPS / ARCHIVE / MANUSCRIPT / LAB / FILES / SYSTEM / ABOUT
```

# 03 — Visual language
The interface is an editorial operating environment, not a conventional app dashboard. Use typography, space, structure, system language, and interaction to create character. Visual decoration is secondary.

## Color tokens
**OBSIDIAN_BLACK** — `#101014` — Primary background, surfaces, deep system state
**CHALK_WHITE** — `#F5F3EE` — Primary text/light surface
**ELECTRIC_CHARTREUSE** — `#B9FF4A` — Accent, active state, key signal, small emphasis
**NEUTRAL_GRAY** — `#6F7075` — Secondary metadata and low-emphasis copy
**LIGHT_NEUTRAL** — `#ECEAE4` — Subtle light dividers/surfaces when needed
Color ratio: default to mostly Obsidian Black and Chalk White. Electric Chartreuse should function as a signal, not a wallpaper. Avoid adding additional saturated brand colors unless explicitly approved for a specific module.

## Typography
- Primary typeface: Manrope or closest high-quality equivalent available in the target environment.
- Headlines: heavy/extra-bold, compact but readable; use oversized scale only when it strengthens hierarchy.
- Supporting text: medium weight; short line lengths; high readability.
- System labels: small, precise, uppercase or compact title case when useful.
- Avoid serif, italic, condensed, decorative, novelty, or retro display substitutes for core brand typography.

## Grid and spacing
- Use a Swiss/editorial grid with deliberate alignment.
- Use generous negative space.
- Establish a repeatable horizontal and vertical rhythm.
- Do not fill empty areas just because they are empty.
- Use asymmetry when it improves direction or hierarchy, not as decoration.
- Keep touch targets practical even when the visual layout is minimal.

## Surface, texture, and materiality
- Preferred material language: matte, tactile, paper/stone/concrete-like subtle grain, restrained digital surface cues.
- Texture must remain secondary to typography and structure.
- Avoid glossy glass panels, chromed 3D effects, liquid UI, or noisy textures.

# 04 — UI component rules
Components should feel like parts of a system, not a library demo.

- Prefer flat or lightly layered surfaces over floating card stacks.
- Use borders/dividers sparingly but consistently.
- Corner radii should be restrained; do not make every module a rounded card.
- Use buttons when an action needs a clear affordance. Do not convert every text item into a pill.
- Use list rows, labels, typographic blocks, and system states as first-class patterns.
- Active states may use Electric Chartreuse, inversion, or motion.
- Disabled/locked states should be quiet and explanatory, not manipulative.

# 05 — Motion system
Motion is part of the identity, but must never become visual noise.

- Use short fades, reveals, slides, scale transitions, and state changes.
- Motion should communicate entry, exit, hierarchy, discovery, or system status.
- Avoid constant looping animation, particles, excessive parallax, or distracting effects.
- Provide a Reduced Motion setting and honor it globally.

# 06 — Interaction philosophy
```text
PRIMARY LOOP
SEE → UNDERSTAND → CHOOSE → EXPERIENCE → DISCOVER → RETURN
```

- The user should understand the primary action quickly.
- Do not hide navigation behind arbitrary gestures.
- Allow the user to return HOME from every major environment.
- Use small discoveries and easter eggs, but never make the core product frustrating.
- Do not use deceptive dark patterns.

# 07 — Product architecture and screen map
```text
BOOT
  └─ HOME
      ├─ THE READ
      │   ├─ Intro
      │   ├─ Choice sequence
      │   ├─ Micro-interactions
      │   ├─ Local reading engine
      │   ├─ Result
      │   └─ Read history
      ├─ DROPS
      │   ├─ Drop index
      │   └─ Individual Drops
      ├─ ARCHIVE
      │   ├─ Index
      │   └─ Artifact reader
      ├─ MANUSCRIPT
      │   ├─ Contents
      │   └─ Chapter reader
      ├─ LAB
      │   └─ Experiments
      ├─ FILES
      │   └─ Internal UNPLUG filesystem
      ├─ SYSTEM
      │   └─ Settings / diagnostics
      └─ ABOUT
```

# 08 — Module specifications
## THE READ
An experimental perception/self-reflection experience based on choices and micro-decisions. It is entertainment/self-reflection, not medical diagnosis and not scientific certification.

- Use varied interactions: binary choice, ranking, timing, visual preference, ordering, ambiguous choice, attention, pattern selection.
- Results should be specific-feeling but bounded; avoid unsupported claims about mental health or clinical traits.
- Use deterministic local logic in Version 1.
- Store completed readings locally.
- Allow users to revisit their results.

## DROPS
Small interactive artifacts and experiments. Start with a small number of polished Drops. Each should have an identity and a meaningful interaction, not just a text page.

```text
DROP METADATA
DROP NUMBER
TITLE
CATEGORY
SHORT DESCRIPTION
EXPERIENCE
STATUS (NEW / DISCOVERED / LOCKED / HIDDEN)
```

## ARCHIVE
An editorial collection of selected UNPLUG LABS artifacts, writings, ideas, and experiments. It should feel like a preserved collection, not a cloud drive.

## MANUSCRIPT
A long-form reading environment with chapters, progress, strong typography, generous margins, and a publication-like rhythm.

## LAB
The experimental playground. Suggested domains: ATTENTION, MEMORY, PERCEPTION, TIME, CHOICE, PATTERN, RANDOMNESS. All Version 1 experiments work offline.

## FILES
A fictional internal filesystem representing application-owned artifacts. Never pretend to be the user’s real Android file system.

```text
/UNPLUG
  /READ
  /DROPS
  /ARCHIVE
  /MANUSCRIPT
  /LAB
  /SYSTEM
```

## SYSTEM
A system-facing screen showing product/version/local state and settings such as sound, haptics, motion, Reduced Motion, theme, boot experience, and local-data clearing.

## ABOUT
Minimal product explanation, version, identity, and relationship to UNPLUG LABS. Never add fake statistics, awards, partners, reviews, scientific endorsements, or credentials.

# 09 — Offline-first rules
```text
MANDATORY
CORE EXPERIENCE WORKS IN AIRPLANE MODE.

DO NOT DEPEND ON
- remote API calls
- remote web pages
- cloud databases
- remote JavaScript
- external images
- login servers
- analytics services
- Gemini calls

LOCAL STATE
settings / completed Reads / bookmarks / reading progress / discovered Drops / first-launch state
```

The offline state is not an error condition. The environment should intentionally communicate that it is local.

# 10 — Privacy and trust
- No account required for Version 1.
- No unnecessary permissions.
- No hidden tracking.
- No advertising SDKs.
- No sending THE READ results to a server.
- No misleading claims about privacy or security beyond what is actually implemented.

# 11 — Copy and voice
Voice: quiet, precise, intelligent, slightly mysterious, editorial, confident without hype.

- Prefer short statements.
- Use concrete nouns and verbs.
- Avoid startup jargon and inflated claims.
- Avoid overexplaining the mystery; let interaction carry some meaning.
- Do not use “revolutionary,” “disruptive,” “next-generation,” or “powered by AI” as filler.
- System copy can be compact: READY, LOCAL, OPEN, RETURN, INDEXING, RESTORING, DISCOVER, ARCHIVE.

## Copy examples — approved direction
```text
WELCOME TO UNPLUG LABS
THIS PLACE WORKS WITHOUT THE INTERNET.

LOCAL ENVIRONMENT
READY

THE READ
A SMALL SERIES OF CHOICES.
A LARGER PATTERN.

DROPS
SMALL THINGS WORTH FINDING.
```

# 12 — Imagery and art direction
- Default to UI, typography, texture, and abstract marks rather than decorative photography.
- When imagery is used, it should feel premium, tactile, editorial, and intentional.
- Avoid fake futuristic people, generic robots, glowing cityscapes, floating holograms, and stock-tech clichés.
- No imagery should compete with the information hierarchy.

# 13 — Iconography
- Use a small, coherent vocabulary of geometric marks and symbols.
- Use Material icons only when they fit the system.
- Avoid emoji as core UI iconography.
- Do not introduce random icon styles from different libraries.

# 14 — Accessibility
- Maintain readable contrast.
- Do not communicate critical meaning with color alone.
- Support scalable text where practical.
- Provide content descriptions and semantic navigation.
- Maintain touch targets.
- Honor Reduced Motion.
- Make experimental visuals secondary to usability.

# 15 — Engineering rules relevant to brand fidelity
- Native Android: Kotlin + Jetpack Compose.
- Keep UI, navigation, content, state, persistence, experiments, and module definitions separable.
- Do not put the entire product in one giant file.
- Avoid unnecessary dependencies.
- Keep content easy to extend: adding DROP 004 should not require architectural surgery.
- Centralize version/build metadata.
- Gracefully handle low-resource devices and different screen sizes.

# 16 — What a “finished” screen means
- It has a clear purpose.
- Primary hierarchy is obvious.
- No dead controls.
- No lorem ipsum.
- No unexplained placeholder text.
- Spacing is intentional.
- Motion has a purpose.
- The screen still makes sense offline.
- It looks like UNPLUG LABS, not a generic Android template.

# 17 — Anti-pattern library
The following patterns are explicit red flags. If a model generates them, it should revise the output:

- purple/blue/cyan gradient hero
- floating glass cards everywhere
- generic AI sparkle iconography
- neon cyberpunk HUD
- dense SaaS dashboard
- stock-tech photography
- fake 3D device renders inside the app UI
- rainbow accent palette
- every element rounded into a pill
- oversized glowing CTA
- fake analytics metrics
- fake reviews
- fake scientific claims
- random “AI-powered” feature labels
- confusing navigation with no HOME escape
- online-only functionality in an offline product

# 18 — Discovery and easter eggs
Discovery should reward attention without manipulating users. Use a few hidden messages, alternate system states, secret Drops, repeated-action responses, or version-related discoveries. Never gate basic usability behind arbitrary puzzles.

# 19 — Paid/private product boundary
The application is intended to become a paid/private layer of the UNPLUG LABS ecosystem, but Version 1 must not fake payment infrastructure, invent pricing, or implement aggressive anti-sharing mechanisms. Design for a legitimate licensing/distribution layer later.

# 20 — Naming system
```text
MASTER BRAND
UNPLUG LABS®

PRODUCT
UNPLUG LABS® OFFLINE OS

CORE MODULES
THE READ
DROPS
ARCHIVE
MANUSCRIPT
LAB
FILES
SYSTEM
ABOUT
```

Preserve capitalization and naming exactly unless a deliberate UI treatment requires a typographic transformation. Do not rename modules without explicit instruction.

# 21 — Model response behavior when building from this brandbook
```text
WHEN ASKED TO DESIGN:
1. Apply the design tokens first.
2. Choose the simplest layout that expresses the product purpose.
3. Preserve hierarchy and whitespace.
4. Check against the anti-pattern list.
5. Prefer real functionality over decorative UI.

WHEN ASKED TO WRITE COPY:
1. Keep the UNPLUG voice.
2. Use concise system language.
3. Avoid hype and unsupported claims.
4. Match the module context.

WHEN ASKED TO CODE:
1. Preserve architecture.
2. Keep offline behavior intact.
3. Use reusable components.
4. Do not introduce a webview or remote dependency unless explicitly instructed.
5. Validate behavior, not just appearance.
```

# 22 — Product QA checklist
- Does this feel like a place, not a collection of pages?
- Does it feel native to Android?
- Does the core experience work in Airplane Mode?
- Does the visual system remain mostly black / chalk / restrained chartreuse?
- Is typography doing most of the design work?
- Is anything decorative without a purpose?
- Is every primary control functional?
- Can the user always get HOME?
- Does Reduced Motion work?
- Are privacy and permissions minimal?
- Could another developer extend the product without rewriting everything?
- Does the output avoid generic AI aesthetics?

# 23 — Brand tokens, compact machine-readable form
```text
brand.name = "UNPLUG LABS®"
product.name = "UNPLUG LABS® OFFLINE OS"
product.type = "native_android_offline_environment"
product.tagline = "A digital environment that exists beyond the browser."
product.core_transition = "WEB → SYSTEM"
color.obsidian_black = "#101014"
color.chalk_white = "#F5F3EE"
color.electric_chartreuse = "#B9FF4A"
font.primary = "Manrope"
style.primary = ["editorial","experimental","minimal","tactile","high-contrast","intentional"]
style.avoid = ["generic_ai","saas","cyberpunk","glassmorphism","neon_gradient","corporate","stock_tech"]
offline.core_required = true
android.stack = ["Kotlin","Jetpack Compose"]
modules = ["THE READ","DROPS","ARCHIVE","MANUSCRIPT","LAB","FILES","SYSTEM","ABOUT"]
```

# 24 — Reusable Gemini context instruction
```text
You are working on UNPLUG LABS® OFFLINE OS. Treat the attached UNPLUG LABS® OFFLINE OS Gemini-Optimized Brandbook as the canonical product and brand source of truth. Preserve its naming, color tokens, typography, voice, interaction philosophy, offline-first architecture, and anti-pattern rules. Do not invent unsupported claims, generic features, or a different visual identity. Use the user’s current task as the highest-priority task-specific instruction. When making a design or implementation decision, prefer the simplest choice that preserves the product’s identity and function. Before finalizing, check the result against the QA checklist in the brandbook.
```

# 25 — Gemini-specific structuring rationale
This brandbook is intentionally written with explicit headings, consistent sections, clear MUST/MUST NOT language, compact tokens, examples, anti-examples, and a final reusable context instruction. Google’s current prompting guidance recommends precise/direct instructions, consistent structure, explicit parameters, and putting critical instructions at the beginning. For large contexts, Google recommends supplying relevant context first and placing the specific task/query at the end. Gemini models also support very large context windows, making a full reference pack practical when it is relevant. Source: Google AI for Developers prompt design strategies and long-context guidance.

# Sources / current Gemini guidance
- Google AI for Developers — Prompt design strategies: https://ai.google.dev/gemini-api/docs/prompting-strategies
- Google AI for Developers — Long context: https://ai.google.dev/gemini-api/docs/long-context
- Google AI for Developers — Gemini 3 developer guide: https://ai.google.dev/gemini-api/docs/gemini-3
- Google AI Studio quickstart: https://ai.google.dev/gemini-api/docs/ai-studio-quickstart
