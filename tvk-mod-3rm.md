# Model of Development w/ AI Coding

This document defines the **operational model** for software development using AI coding tools. It establishes roles, responsibilities, handoff protocols, and workflow patterns for human and AI contributors.

This is not a theoretical framework. It is a working model born from practical constraints and refined through real architectural work.

## 1. The Three-Role Model

Software development on this system operates through three distinct, non-overlapping roles:

### 1.1 Chief Architect (Human)

**Authority:** Final and absolute on all architectural, domain, and irreversible decisions.

**Responsibilities:**

- Define domain meaning and business intent
- Make architectural trade-offs
- Approve or reject design proposals
- Lock decisions once made
- Own the agenda
- Resolve ambiguity
- Protect solution space from premature collapse

**Tools:**

- Constitutional authority (CONSTITUTION.md)
- Domain knowledge
- Business context
- Long-term system vision
- 40 years of engineering judgment

**Does NOT:**

- Write every line of code
- Implement mechanical changes
- Generate boilerplate
- Perform repetitive file operations

**Key Principle:**

_The Chief Architect's time is spent on decisions that matter, not on work that can be derived._

### 1.2 Architect AI (Claude / ChatGPT / Gemini)

**Authority:** Propositional only. No unilateral decision-making.

**Role:** Design partner, second inner monologue, reasoning engine, documentation enforcer.

**Responsibilities:**

- Surface trade-offs and consequences
- Challenge assumptions respectfully
- Structure agendas and track progress
- Translate decisions into precise prompts for execution
- Generate or refine documentation
- Identify architectural drift
- Enforce constitutional rules
- Produce decision-ready options, not final answers

**Tools:**

- Constitutional knowledge
- Domain model understanding
- Architectural pattern recognition
- Documentation generation
- Prompt engineering for coding engines

**Does NOT:**

- Make final decisions
- Write code directly (except for documentation/prompts)
- Proceed past unresolved ambiguity
- Override Chief Architect judgment
- Invent new abstractions without approval

**Key Principle:**

_The Architect AI is a reasoning partner, not an implementer. It thinks, it does not do._

### 1.3 Coding Engine AI (Codex / Cursor / Copilot / Cline / Equivalent)

**Authority:** None. Pure mechanical executor.

**Role:** Fast, literal, deterministic code generator.

**Responsibilities:**

- Execute prompts exactly as given
- Perform file operations (create, move, edit)
- Generate boilerplate code
- Implement repositories, handlers, migrations
- Update imports and references
- Follow patterns without deviation

**Tools:**

- Codebase access
- Fast token throughput
- Pattern replication
- Mechanical precision

**Does NOT:**

- Make architectural decisions
- Reinterpret intent
- Invent abstractions
- Cross boundaries without permission
- Optimize or "improve" unless instructed

**Key Principle:**

_The Coding Engine is a tool, not a colleague. It executes, it does not reason._

## 2. Why This Model Works

### 2.1 Separation of Concerns

**Thinking vs Doing:**\
Architecture and implementation are distinct skills. Mixing them causes:

- Over-engineered implementations
- Under-thought architectures
- Drift between intent and reality

**This model enforces clean separation:**

- Chief Architect + Architect AI = thinking
- Coding Engine = doing

### 2.2 Agenda Discipline

**Problem:**\
LLMs (especially conversational ones) drift toward "helpfulness" which often means:

- Scope creep
- Unsolicited redesigns
- Premature optimization
- Feature invention

**Solution:**\
The Architect AI owns and enforces the agenda. Work proceeds in strict phases. Nothing advances without approval.

### 2.3 Token Efficiency

**Problem:**\
Conversational AIs (Claude, ChatGPT, Gemini) burn tokens on:

- Context maintenance
- Conversational niceties
- Re-explaining decisions
- Regenerating understood context

**Solution:**\
Use conversational AI for decisions (high value per token), then hand off execution to a coding engine (high throughput, low context requirements).

### 2.4 Durability Across Tools

**Problem:**\
AI tools change. APIs evolve. Models improve. Token limits shift.

**Solution:**\
This model is **tool-agnostic**:

- Chief Architect role is human (stable)
- Architect AI role can be filled by any reasoning LLM
- Coding Engine role can be filled by any code-generation tool

The **CONSTITUTION.md** and **architecture documents** are the stable interface, not the tools.

## 3. The Workflow Pattern

Development proceeds in strict phases, with explicit handoffs between roles.

### 3.1 Phases: Coding Loop

```
┌──  PHASE LOOP: n, n+1  ─────────────────────────────────┐
│  ┌────────────────┐       IDEATION                      │
│  │ Chief Architect│  Frames the problem                 │
│  │       +        │  States constraints                 │
│  │  Architect AI  │  Debates options                    │
│  └────────┬───────┘  Locks decision                     │
│           │                                             │
│           v                                             │
│  ┌────────────────┐      PRODUCTION                     │
│  │ Architect AI   │  Produces execution prompt          │
│  └────────┬───────┘  (deterministic, scoped)            │
│           │                                             │
│           v                                             │
│  ┌────────────────┐     CONSTRUCTION                    │
│  │ Coding Engine  │  Executes prompt                    │
│  └────────┬───────┘  Reports completion                 │
│           │                                             │
│           v                                             │
│  ┌────────────────┐      DECISION                       │
│  │ Chief Architect│  Reviews output                     │
│  │       +        │  Approves or rejects                │
│  │  Architect AI  │  If approved: advance to Phase N+1  │
│  └────────────────┘  If rejected: refine and re-execute │
└─────────────────────────────────────────────────────────┘
```

The **Coding Loop** is a continuous feedback loop involving the Chief Architect, Architect AI, and Coding Engine. Each loop follows the strict phases: IDEATION, PRODUCTION, CONSTRUCTION, and DECISION.

### 3.2 Key Rules

1. **No phase skipping** - Each phase completes before the next begins
2. **Explicit approval required** - Chief Architect must approve phase completion
3. **Prompts are binding** - Coding Engine follows prompts literally
4. **Agenda is sacred** - Architect AI enforces phase boundaries

### 3.3 Phases: Knowledge Loop

```
┌─────────────────────────────────────────────────────────┐
│  ┌────────────────┐        IDEATION                     │
│  │ Chief Architect│  Frames the problem                 │
│  │       +        │  States constraints                 │
│  │  Architect AI  │  Debates options                    │
│  └────────┬───────┘  Locks decision                     │
│           │                                             │
│           v                                             │
│  ┌────────────────┐      CONSTRUCTION                   │
│  │ Architect AI   │  Constructs artifacts               │
│  └────────┬───────┘                                     │
│           │                                             │
│           v                                             │
│  ┌────────────────┐       DECISION                      │
│  │ Chief Architect│  Reviews output                     │
│  │       +        │  Approves or rejects                │
│  │  Architect AI  │  If approved: advance to Phase N+1  │
│  └────────────────┘  If rejected: refine and re-execute │
└─────────────────────────────────────────────────────────┘
```

The **Knowledge Loop** are sessions involving only the Chief Architect and Architect AI. The end result is a decision or documentation artifact as markdown. Knowledge documents direct, constrain, and verify the entire solution.

## 4. Handoff Protocols

### 4.1 Chief Architect → Architect AI

**When:** At the start of a design session or when a decision point is reached.

**Format:**

- State the problem or decision to be made
- Provide constraints (time, resources, risk tolerance)
- Specify what is negotiable vs non-negotiable

**Example:**

> "We need to decide how to handle offline execution for the Ops app. Constraints: must work without network, must sync eventually, must not lose data. Non-negotiable: append-only logs, domain model purity."

**Architect AI Response:**

- Surfaces options (A, B, C)
- Explains trade-offs
- Asks clarifying questions if needed
- Does NOT choose unilaterally

### 4.2 Architect AI → Coding Engine

**When:** After a decision is locked and implementation is required.

**Format:**

- Single-purpose prompt
- Scoped to one phase
- Explicit boundaries (what to touch, what not to touch)
- Clear completion criteria

**Example:**

> "Create repository implementations for User, Job, and Service abstractions. Scope: source/backends/serverless/repositories/ only. Pattern: expose get/create/update/softDelete methods. Return domain types. Do not modify domain code. Do not create handlers."

**Critical Rules:**

- One prompt = one phase
- No ambiguity allowed
- Stop conditions explicit
- Forbidden actions listed

### 4.3 Coding Engine → Chief Architect + Architect AI

**When:** After execution completes.

**Format:**

- List of files created/modified
- Any errors or ambiguities encountered
- Explicit statement of what was NOT done

**Example:**

> "Phase B.6 complete. Modified: user-repository.ts, job-repository.ts, service-repository.ts. Created: mappers/ directory. Did not modify domain code. Did not create handlers. Question: Should softDelete return void or the deleted entity?"

**Chief Architect Response:**

- Reviews changes
- Answers any questions
- Approves ("locked") or rejects ("refine and re-execute")
- Advances agenda if approved

## 5. Documentation as the Stable Interface

### 5.1 The Documentation Hierarchy

In order of authority:

1. **CONSTITUTION.md** - Governance, roles, philosophy
2. **domain.md** - Domain meaning and rules
3. **architecture-foundation.md** - System boundary and invariants
4. **architecture-backend.md** - Backend implementation rules
5. **architecture-frontend.md** - Frontend implementation rules
6. **style-guide.md** - Coding conventions

These documents are **more stable than code**.

Code is regenerable. Documentation is authoritative.

### 5.2 Why This Matters

**AI models change.** GPT-4 → GPT-5. Claude 3 → Claude 4. Token limits shift. Capabilities evolve.

**But if the documents are correct:**

- Any AI can read them
- Any AI can implement from them
- Any human can understand the system

The documents are the **contract**, not the conversation history.

### 5.3 Document Maintenance

Documents are updated **before code**, not after.

Flow:

1. Identify architectural need
2. Debate and decide
3. Update documentation
4. Generate code from documentation

Never:

1. Write code
2. Realize it doesn't match docs
3. Update docs to match code

That path leads to **architectural drift**.

## 6. Managing AI Tool Limitations

### 6.1 Token Limits (The Reality)

- **Claude Pro:** ~200K token context, but rate-limited aggressively
- **ChatGPT:** Higher throughput, but loses context in long sessions
  **Claude Code/Codex:** Fast execution, smaller context reduced tokens consumed

**The Constraint:**

Long architectural discussions burn tokens faster than code generation.

**The Solution:**

- Use conversational AI (Claude/ChatGPT/Gemini) for **decisions** (high-value tokens)
- Use coding engines (Claude Code/Codex/Gemini CLI) for **execution** (high-throughput tokens)
- When conversational AI hits limits: **switch tools**, not sessions

### 6.2 Tool Switching Protocol

**When switching from Claude to ChatGPT (or vice versa):**

1. **Save current state:**
   - Lock current decisions in documents
   - Update agenda explicitly
   - Commit code changes

2. **Provide handoff context to new AI:**
   - "Ingest: CONSTITUTION.md, domain.md, architecture-\*.md"
   - "Current agenda item: [Phase X]"
   - "Last decision: [summary]"

3. **Resume from explicit checkpoint:**
   - No assumption of shared memory
   - Documents are the source of truth
   - Agenda is the contract

**Key Principle:**

_AI tools are interchangeable. Documents are permanent._

### 6.3 When to Switch vs When to Push Through

**Switch when:**

- Token usage > 80% and major design decision pending
- Session has drifted or lost focus
- Need fresh perspective on a stuck problem

**Push through when:**

- < 20% tokens remaining but phase is nearly complete
- Just need a final prompt generated
- Switching would lose more time than token limit

**Never:**

- Continue a session past 95% tokens
- Make important decisions when fatigued or rushed
- Skip documentation to "save time"

## 7. Common Anti-Patterns (What NOT To Do)

### 7.1 Asking Coding Engines to Architect

**Wrong:**

> "Codex, refactor the backend to support offline execution."

**Why it fails:**

- Coding engines don't reason about trade-offs
- They invent solutions without understanding constraints
- Result: architectural drift

**Right:**

> "Chief Architect + Architect AI debate offline strategy → lock decision → document it → generate prompt for Codex → Codex implements exactly what was decided"

### 7.2 Letting Architect AI Code Directly

**Wrong:**

> "Claude, implement the user repository."

**Why it fails:**

- Burns high-value reasoning tokens on low-value mechanical work
- Hits token limits before architectural work is done
- Slower than a dedicated coding engine

**Right:**

> "Claude, design the repository interface → generate a prompt → hand to Codex → Codex implements"

### 7.3 Making Decisions in Code

**Wrong:**

> "Let me try this approach and see if it works."

**Why it fails:**

- Code becomes the design artifact
- Refactoring becomes redesign
- Documentation lags behind reality

**Right:**

> "Debate options → choose deliberately → document decision → implement once"

### 7.4 Skipping Documentation Updates

**Wrong:**

> "I'll update the docs after I finish coding."

**Why it fails:**

- Documentation never gets updated
- Future work diverges from intent
- Institutional knowledge is lost

**Right:**

> "Update documentation first → generate code from documentation"

## 8. Practical Examples

### 8.1 Example 1: Adding a New Domain Concept

**Scenario:** Need to add `Equipment` abstraction to track specialized tools.

**Step 1: Design (Chief Architect + Architect AI)**

- Debate: Is Equipment a first-class entity or subordinate to Asset?
- Decision: First-class (independent lifecycle, regulatory tracking)
- Update: domain.md, architecture-backend.md

**Step 2: Prompt Generation (Architect AI)**

```
Create Equipment abstraction following pattern:
- source/domain/abstractions/equipment.ts
- source/domain/validators/equipment-validators.ts
- source/domain/protocol/equipment-protocol.ts
Pattern: same as Asset abstraction
Do not modify existing files
```

**Step 3: Execution (Codex)**

- Creates three files
- Reports completion

**Step 4: Review (Chief Architect + Architect AI)**

- Verify files match domain.md
- Approve or reject
- If approved: advance to repository implementation

### 8.2 Example 2: Fixing a Bug in Handler Logic

**Scenario:** Users-get handler returns deleted users.

**Step 1: Diagnosis (Chief Architect)**

- Identify: Handler bypasses repository, queries Supabase directly
- Root cause: Architectural violation (handler should use repository)

**Step 2: Design (Chief Architect + Architect AI)**

- Decision: Fix is not "add filter", fix is "use repository"
- Verify: Repository already enforces soft-delete
- Update: None needed (architecture already correct, code is wrong)

**Step 3: Prompt Generation (Architect AI)**

```
Update users-get handler to use repository:
- Remove direct Supabase import
- Import userRepository
- Call userRepository.get(id)
- Repository handles soft-delete filtering
Do not modify repository
Do not modify domain
```

**Step 4: Execution (Codex)**

- Updates handler
- Reports completion

**Step 5: Review (Chief Architect)**

- Verify handler now uses repository
- Test that deleted users no longer returned
- Approve

### 8.3 Example 3: Token Limit Hit Mid-Design

**Scenario:** Debating offline sync strategy with Claude, hit 85% token limit, decision not yet made.

**Step 1: Save State (Chief Architect)**

- Document options discussed so far
- Note unresolved questions
- Commit any code changes

**Step 2: Switch Tools (Chief Architect)**

- Open ChatGPT
- Provide context: "Ingest CONSTITUTION.md, domain.md, architecture-\*.md"
- State current question: "Deciding between optimistic sync vs operation queue for offline execution"

**Step 3: Resume (ChatGPT)**

- Continues debate from documented state
- Presents remaining options
- Locks decision

**Step 4: Hand to Codex (ChatGPT)**

- Generates implementation prompt
- Chief Architect hands to Codex

**Key Point:**\
_The conversation moved from Claude → ChatGPT without loss of context because the documents + explicit state captured everything that mattered._

## 9. Measuring Success

### 9.1 Good Signs

- Documentation is always ahead of code
- Prompts are short and unambiguous
- Coding engines rarely ask clarifying questions
- Refactors feel inevitable, not painful
- AI tool switches are seamless
- Code reviews focus on correctness, not intent

### 9.2 Bad Signs

- Documentation lags behind code
- Prompts require multiple iterations
- Coding engines "interpret" requirements
- Refactors feel like redesigns
- AI tool switches require re-explaining everything
- Code reviews debate what the code should do

### 9.3 When the Model is Working

You should feel:

- **In control** - not chasing the AI's suggestions
- **Deliberate** - not reacting to what the AI generates
- **Confident** - documentation matches reality
- **Efficient** - reasoning time is spent on decisions, not mechanics

## 10. Future Evolution

This model will evolve as:

- AI capabilities improve
- Token limits increase (or disappear)
- New tools emerge

But the **core principle remains stable:**

**Separate reasoning from execution.**

Whether that separation is:

- Human + AI vs AI
- AI + AI vs AI
- Human vs AI vs AI

…the architecture is the same:

1. Think deliberately
2. Document authoritatively
3. Execute mechanically
4. Review carefully

## 11. Summary

### 11.1 The Model in One Paragraph

Software development operates through three roles: **Chief Architect** (human, final authority), **Architect AI** (reasoning partner, agenda enforcer), and **Coding Engine** (mechanical executor). Work proceeds in strict phases with explicit handoffs. **Documentation is more stable than code.** AI tools are **interchangeable** as long as documents are authoritative. Token limits are managed by using conversational AI for **decisions** and coding engines for **execution**. The model succeeds when thinking and doing are cleanly separated.

### 11.2 The Three Rules

1. **Think before doing** - Design decisions are made deliberately and documented before code is written
2. **Document before implementing** - Code is derived from documentation, not the other way around
3. **Execute mechanically** - Implementation follows prompts literally, with no creative interpretation

**End of Model of Development Document**

This is a living document. It will be refined as the model proves itself in practice.
