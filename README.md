# Writing Academic Papers with Claude Code + Obsidian

A structured, step-by-step workflow for using AI to accelerate academic writing—applicable across all disciplines.

---

## What This Guide Is

This guide provides a complete workflow for AI-assisted academic writing. It covers the prose-heavy parts of scholarship: literature synthesis, argumentation, drafting, and revision.

**Tools Required:**
- [Obsidian](https://obsidian.md/) — A markdown-based note-taking application (free)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) — Anthropic's AI coding assistant that can read and write files

You will use Obsidian as your knowledge base and Claude Code as your writing partner. Claude Code can access your vault directly, reading your context documents and generating drafts into your project folders.

**This workflow accelerates:**
- Literature review and synthesis
- Drafting and structuring arguments
- Iterative revision
- Cross-disciplinary exploration

**This workflow does not replace:**
- Primary source work or fieldwork
- Formal argumentation or interpretation
- Disciplinary judgment and methodological decisions
- Your actual expertise

---

## The Core Insight

AI output quality depends almost entirely on input context quality.

Dump a vague request → get hollow, generic text.
Provide structured, compressed context → get useful, substantive output.

This is **Context Engineering**: actively managing what the AI sees. The documents you create aren't just notes—they're a "thinking environment" that makes AI useful.

> The context documents are the artifact. The generated text is replaceable.

---

## What is a Vault?

A "vault" is Obsidian's term for a folder of interconnected markdown files. Unlike traditional note-taking apps, Obsidian stores everything as plain text files on your computer—no proprietary formats, no lock-in.

**Why this matters for AI-assisted writing:**

1. **Persistence**: Your intellectual identity (writing style, methodological commitments, theoretical positions) lives in files that persist across projects
2. **Compounding**: Sources accumulate over time; each paper builds on previous work through internal links
3. **AI-readability**: Claude Code can directly access markdown files, reading your distilled context and writing drafts into your project folders
4. **Portability**: If tools change, your knowledge base remains—it's just folders and text files

The vault structure below organizes your research so that Claude receives focused, distilled context rather than everything at once.

---

## Vault Structure

Create this folder structure in your Obsidian vault:

```
/Academic-Vault/
├── CLAUDE.md                    # Your AI constitution
├── me/                          # Your intellectual identity
│   ├── style.md
│   ├── methodologies.md
│   └── positions.md
├── References/                  # All sources, linked across projects
├── Attachments/                 # PDFs, data files
└── projects/
    └── Paper-Name/
        ├── CLAUDE.md            # Project-specific rules
        ├── context/
        │   ├── research.md
        │   ├── data.md
        │   ├── requirements.md
        │   └── design.md
        ├── drafts/
        ├── feedback/
        └── journal.md
```

**Why this structure:**
- `/me` carries your intellectual identity across projects—your writing voice, preferred methods, and theoretical commitments
- `/References` compounds over time—sources link across papers, building a personal knowledge graph
- `/projects/Paper-Name/context/` holds the distilled context AI actually uses—not raw materials, but compressed insights
- `journal.md` documents your process for future reuse and methodological transparency

---

## Before You Begin: The Big Picture

This workflow assumes you're **developing an argument**, not just reviewing literature. From Phase 2 onward, you're actively testing whether your thesis holds up against existing scholarship.

If you're writing a literature review without an original argument, the workflow still applies—but your "thesis" becomes your organizational framework or the gap you're identifying in the field.

---

## The Four Phases

### Phase 1: Preparation

**Goal:** Assemble raw materials without organizing them yet.

The purpose of this phase is collection, not analysis. Resist the urge to structure too early—you don't yet know what will matter most.

**Steps:**

1. **Create your project folder** in your Obsidian vault under `/projects/Paper-Name/` with the subdirectories shown above (`context/`, `drafts/`, `feedback/`)

2. **Write your initial thesis and questions** in `context/requirements.md`. This doesn't need to be polished—just capture what you're trying to argue and what you need to figure out.

3. **Collect sources:**
   - Download PDFs to `/Attachments`
   - For each source, create a note in `/References` with:
     - Bibliographic information
     - Key quotes (with page numbers)
     - Your initial reactions and questions
   - Don't summarize yet—just capture what strikes you

4. **Start `journal.md`** with today's date and your initial state:
   - What do you already know about this topic?
   - What are you uncertain about?
   - What's your current best guess at the argument?

   This baseline lets you track how your thinking evolves and provides methodological transparency if anyone asks about your process.

**Don't organize yet. Just collect.**

---

### Phase 2: Exploration & Mapping

**Goal:** Test your thesis against the literature and identify the strongest and weakest points of your argument.

This phase produces **preliminary insights and working hypotheses**, not polished documents. You're having a conversation with Claude to stress-test your ideas before committing to a structure.

**Questions to explore:**

- What's actually possible with my sources/data?
- What are the strongest objections to my argument?
- What adjacent fields have relevant frameworks I'm missing?
- Where does my thesis need refinement?

**Key prompt pattern:**

```
I'm developing a paper arguing [THESIS].

Before I commit:
1. Steel-man the strongest opposing view
2. Identify the 3 weakest points in my argument
3. What evidence would change your assessment?

Be critical, not agreeable.
```

**Document insights in `journal.md`:**
- What you tested
- What held up, what didn't
- Dead ends and why
- Sources to verify

**Early verification checkpoint:** As you explore, flag any factual claims that seem critical to your argument. Don't wait until the end to verify—check key claims against your actual sources now. AI can subtly misrepresent what sources say.

---

### Phase 3: Distillation

**Goal:** Compress everything you've learned into focused context documents optimized for AI processing.

**Why this matters:** AI performance degrades with context length ("context rot"). More tokens ≠ better output. You want maximum information in minimum space.

**The context documents:**

| Document | Contains |
|----------|----------|
| `research.md` | Theoretical framework, state of field, key sources (linked to `/References`, not quoted in full) |
| `data.md` | What you're working with, structure, access methods, limitations |
| `requirements.md` | Research questions as clear, testable statements |
| `design.md` | Paper structure, argument flow, venue requirements |

**The craft of distillation:**

Bad distillation = dumping everything potentially relevant
Good distillation = only what's necessary for THIS paper, compressed to essentials

Ask yourself:
- If I cut this, would the AI output suffer?
- Am I describing or just copying?
- Is this already in AI's training data? (Don't explain what regression is, or who Foucault was.)

**Link, don't paste.** Reference sources in `/References`; the AI gets the distilled insight, you keep the full record.

**Verification before finalizing:** Before you consider these documents complete, verify that key sources actually say what you think they say. Misunderstandings from Phase 2 will propagate through the entire draft if you don't catch them here.

---

### Phase 4: Implementation

**Goal:** Generate, critique, and refine drafts until the quality is publishable.

#### Step 1: Generate first draft

Provide your context documents to Claude. Request a complete draft.

```
Write a complete draft based on this context:

[Paste or reference research.md]
[Paste or reference requirements.md]
[Paste or reference design.md]

Requirements:
- Every claim grounded in provided sources
- No filler phrases
- Flag uncertainties explicitly
```

#### Step 2: Expect it to be bad

First drafts are typically hollow—structurally correct but substantively thin. This is normal. The draft gives you something concrete to push against.

#### Step 3: Push back with specificity

Vague critique → vague revision.
Specific critique → actual improvement.

```
Problems with this draft:

1. Paragraph 3 claims "scholars have debated X" without specifics. Name the scholars, state the positions, cite the sources.

2. The transition from section 2 to 3 is asserted, not argued. What's the logical connection?

3. "It is important to note" appears 4 times. Cut all instances. Make direct claims.

4. You cite Martinez 2021 but this isn't in my sources. Remove or replace with provided sources only.

Revise addressing these specifically.
```

#### Step 4: Peer review cycles

Use a **FRESH session** (new conversation) as critical reviewer. The session that wrote the draft has seen all your context and reasoning—it's primed to defend its own output rather than critique it. A fresh session approaches the text without that baggage.

```
You are a critical peer reviewer. Evaluate this draft:

[Paste draft]

Assess:
- Argument structure and logical gaps
- Evidence quality and support for claims
- Actual contribution vs. restatement
- Weaknesses a skeptical reviewer would attack

Be harsh. I need criticism, not encouragement.
```

**Tip:** Many academic journals publish their reviewer guidelines online. Feed these criteria into your review prompt for discipline-appropriate feedback.

Save feedback in `/feedback` → feed back to writing session → iterate 2-3 times.

#### Step 5: Human editing

Take over. This is where your intellectual fingerprint goes.

Questions to ask yourself:
- Would I defend this claim in a seminar?
- Is this MY argument or generic synthesis?
- Can I explain this without notes?

#### Step 6: Source verification

Check every citation against actual sources. AI generates plausible-sounding but wrong references confidently. You should have caught major issues in earlier verification checkpoints, but do a final systematic check.

Create `feedback/verification-log.md`:

```
## [Source]
- Claim in draft: "..."
- Actual text: "..." (p. X)
- Status: ✓ Verified / ✗ Remove / ~ Revise
```

---

## Domain Adaptation

The workflow is universal. What changes is what fills the context documents.

| Research Type | data.md contains |
|---------------|------------------|
| Experimental | Protocols, datasets, variables, statistical approach |
| Theoretical | Frameworks, prior results, formal setup |
| Qualitative | Coding schemes, source descriptions, methodology, positionality |
| Interpretive/Hermeneutic | Primary sources, archival materials, interpretive framework |
| Mixed Methods | Combine relevant elements from above |

**Note on sensitive data:** Context documents describe structure and approach. Never paste raw participant data, proprietary datasets, or confidential materials into AI.

---

## Effective Critique

The skill that most improves AI output is **specific, substantive pushback**.

**Weak critique:**
- "Make it better"
- "This isn't quite right"
- "More academic"

**Strong critique:**
- "Claim X in paragraph 3 has no supporting evidence. Add citation or remove."
- "The logical structure is: A → B → C. But B → C isn't argued, only asserted. Explain the mechanism."
- "This uses positivist framing. My approach is interpretivist. Reframe around meaning-making, not causation."
- "Section 4 is 800 words but adds nothing not already in section 2. Cut or differentiate."

---

## The Journal

`journal.md` serves three functions:

1. **Process documentation** — What you did, what worked, what didn't
2. **Knowledge capture** — Insights that don't fit in context docs but matter
3. **Future reference** — Reusable patterns for similar projects

**Entry format:**
```markdown
## YYYY-MM-DD

### Did
- [Actions taken]

### Learned
- [Insights, surprises, dead ends]

### Next
- [What follows from today]
```

**Final entry:**
```markdown
## YYYY-MM-DD — Complete

### What worked
### What I'd change
### Time spent
### Reusable for future
```

---

## Common Problems

**AI keeps producing generic output**
Your context is too vague or too long. Distill harder. Be more specific in requirements.

**AI ignores my theoretical framework**
State it explicitly in prompts: "My approach is [X]. Do not use [Y] framing."

**AI hallucinates citations**
Constrain: "Only cite from these sources: [list]." Verify everything anyway.

**Output improves then degrades**
Context window filling up. Start fresh session with just context documents.

**Workflow feels slow**
For shorter papers, combine documents (research + requirements in one file). Skip peer review cycles. The full workflow is for substantial research papers.

---

## Quick Reference

```
PREPARATION     → Gather materials, initial questions, start journal
EXPLORATION     → Test ideas with AI, map possibilities, verify critical claims
DISTILLATION    → Compress into context documents, verify sources
IMPLEMENTATION  → Draft → Push back → Review cycles → Verify → Human editing

Context Documents:
  research.md     = Framework + sources
  data.md         = What you're working with
  requirements.md = Your questions
  design.md       = Structure + venue

Core Principles:
  Your thinking first
  Compress, don't dump
  Critique specifically
  Verify throughout (not just at the end)
  Journal the process
```

---

## Sources

- [Christopher Pollin: "Promptotyping"](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin) — L.I.S.A. Wissenschaftsportal, 2026.
- [Andrew Maynard: "I cracked and wrote an academic paper using AI"](https://andrewmaynard.substack.com/p/i-cracked-and-wrote-an-academic-paper) — The Future of Being Human, 2026.
- [Steph Ango: "How I use Obsidian"](https://stephango.com/vault) — stephango.com.
- [Ethan Mollick: Co-Intelligence](https://www.oneusefulthing.org/) — Portfolio, 2024.
- [The Neuron: "How to Turn Claude Code Into Your Personal AI Assistant"](https://www.theneuron.ai/explainer-articles/how-to-turn-claude-code-into-your-personal-ai-assistant) — 2025.

---

## Note on Tools

This guide is written for Claude Code and Obsidian as they exist in early 2026. Tools evolve—new AI assistants will emerge, interfaces will change, capabilities will expand.

The methodology, however, is more durable:
- Context engineering (compress, don't dump)
- Iterative critique (push back with specificity)
- Verification throughout (don't trust, verify)
- Process documentation (journal your work)

If you're reading this in the future with different tools, the principles still apply. Adapt the specific instructions to whatever AI and knowledge management system you're using.

---

## License

MIT
