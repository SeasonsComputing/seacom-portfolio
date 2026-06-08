# Model of Development with AI Coding (2.0)

- Source: [tvk-mod-3rm.md](documentation/tvk-mod-3rm.md)
- Version: 2.0
- Published: 2026 June 7th
- Author: Ted V. Kremer

## 1. Purpose

This document defines the **operational model** for software development using AI coding tools. It establishes roles, responsibilities, handoff protocols, and workflow patterns for human and AI contributors.

This is a human-first methodology document.

It explains how and why the operating model works. Mechanical enforcement belongs in CONSTITUTION.md, AGENTS.md, architecture documents, style guides, guard scripts, and project checks.

## 2. Prologue

The original Three-Role Model was created during the foundational phase of a substantive greenfield system, when the primary risks were architectural drift, domain corruption, premature abstraction, persistence mistakes, context loss, and uncontrolled AI code generation. 

That model worked.

The project and the AI coding marketplace have since evolved.

### 2.1 Project Maturity

The system has moved from foundational construction into feature expansion.

**The foundation now includes:**

- Core runtime architecture
- Backend architecture
- UX architecture
- Shared domain contracts
- Design-language primitives
- Application shells
- DevOps workflows
- Guard scripts
- Three application surfaces
- Established import and dependency boundaries
- Established documentation hierarchy

**The primary development question is no longer only:**

```text
What is the system?
What are the boundaries?
What are the invariants?
```

**It is increasingly:**

```text
What does this user need?
What feature slice satisfies that need?
How does the feature fit the established system?
What app-local workflow should be built?
What must remain untouched?
```

This requires an evolved operating model.

### 2.2 AI Coding Tool Evolution

The AI coding market has materially changed.

AI Coding Engines are no longer merely code-completion tools or literal prompt executors.

**AI Coding Engines increasingly provide:**

- Repository-wide context
- Persistent project memory
- Rule ingestion
- Agent-facing instruction files
- Multi-file editing
- Test and guard execution
- Error feedback loops
- Conversational repair
- Local implementation reasoning
- Diff-grounded discussion

As a result, the AI Coding Engine can now participate in tactical implementation reasoning.

This does not give the AI Coding Engine architectural authority.

It changes the conversation model.

### 2.3 Memory and Context Improvements

Early AI coding workflows suffered from weak continuity. Architectural context had to be restated frequently. Prompt precision compensated for unreliable session memory, brittle repo grounding, and poor instruction retention.

**That burden has been reduced by:**

- Project memory
- Repository instructions
- Agent instruction files
- Persistent rules
- Better chat front-ends
- Better repo indexing
- Better guard integration

Prompt precision remains useful, but it is no longer the primary operational mechanism for ordinary feature work.

### 2.4 Prompt Precision Has Narrowed

The original model emphasized precise AI Architect to AI Coding Engine prompts.

That remains useful for high-risk work.

However, ordinary feature construction now often proceeds through bounded engineering dialog between the Chief Architect and the AI Coding Engine.

**The operational distinction is:**

- **Prompt precision:** Old mechanism for getting brittle tools to behave.
- **Scope and authorization:** Governance mechanism for protecting project assets.

Prompt precision may relax. Production authorization may not.

### 2.5 Reasoning Has Become Stratified

This model refines the reasoning role into layers.

| Reasoning             | Role                                 |
|-----------------------|--------------------------------------|
| Strategic reasoning   | Chief Architect + AI Architect       |
| Tactical reasoning    | Chief Architect + AI Coding Engine   |
| Mechanical execution  | AI Coding Engine                     |

This is the central evolution.

The AI Architect remains strongest when reasoning across the solution space and the problem space: architecture, business reality, domain knowledge, end-user needs, tool strategy, and long-term consequences.

The AI Coding Engine is strongest when reasoning from direct contact with the repository: files, imports, tests, guards, diffs, runtime errors, and existing patterns.

The Chief Architect owns judgment across both.

### 2.6 The Core Thesis

The Three-Role Model preserves fixed authority while allowing reasoning to become stratified and execution to become increasingly agentic.

```text
Authority remains fixed.
Reasoning becomes stratified.
Execution becomes increasingly agentic.
Production remains gated.
```

## 3. The Three-Role Model

Software development operates through three distinct roles:

1. Chief Architect
2. AI Architect
3. AI Coding Engine

The roles may collaborate differently depending on work mode, but their authority boundaries do not collapse.

Capability is not authority.

Correct output does not imply correct authority.

### 3.1 Chief Architect

**Authority:**

- Final and absolute on all architectural, domain, product, persistence, and irreversible decisions.
- The Chief Architect is the human owner of judgment.

**Responsibilities:**

- Define domain meaning and business intent
- Own product direction and end-user outcomes
- Make architectural trade-offs
- Approve or reject design proposals
- Lock decisions once made
- Own final production authorization
- Resolve ambiguity
- Protect solution space from premature collapse
- Preserve long-term system integrity
- Decide when a concern is architectural, tactical, or mechanical
- Decide whether a AI Coding Engine may proceed from dialog into production

**Tools:**

- Constitutional authority
- Domain knowledge
- Business context
- Real-world user knowledge
- Long-term system vision
- Engineering judgment
- Architecture documents
- Guard results
- AI reasoning partners
- AI Coding Engines

**Does Not:**

- Write every line of code
- Perform repetitive file operations
- Generate mechanical boilerplate
- Accept AI production without review
- Surrender authority to tool confidence

**Key Principle:**

The Chief Architect's time is spent on decisions that matter, not on work that can be derived, delegated, checked, or mechanically produced.

### 3.2 AI Architect

The AI Architect is a design partner, second inner monologue, agenda lead, trade-off explorer, documentation assistant, and tool-strategy advisor.

**Authority:**

- Propositional only. 
- No unilateral decision-making.

**Primary reasoning mode:**

- Strategic reasoning.

**Responsibilities:**

- Help structure agendas and decision paths
- Surface trade-offs and consequences
- Challenge assumptions respectfully
- Reason across architecture, domain, business reality, user needs, and tool strategy
- Connect software architecture to real-world domain conditions
- Help translate business/user needs into system implications
- Identify architectural drift
- Produce decision-ready options
- Refine methodology and process
- Draft or revise governance and architecture documents
- Generate precise implementation briefs when appropriate
- Help decide which AI tool should own which phase
- Help distinguish strategic, tactical, and mechanical work

**Strongest When:**

- The problem crosses codebase boundaries
- The question requires domain and business reasoning
- The work affects architecture, product shape, methodology, or governance
- Tool choice matters
- Documentation needs to be created or revised
- Long-term consequences matter
- Multiple solution paths need comparison

**Must Not:**

- Make final decisions
- Modify project assets without explicit authorization
- Implement code independently in production contexts
- Refactor without agreement
- Introduce new patterns or abstractions unilaterally
- Proceed past unresolved decision boundaries
- Treat its own reasoning as authority

**Key Principle:**

The AI Architect thinks strategically, but the Chief Architect decides.

### 3.3 AI Coding Engine

The AI Coding Engine is an implementation partner inside approved boundaries. It may reason tactically about the repository, existing patterns, local implementation options, file impacts, tests, guards, and diffs.

It may not reason authoritatively about architecture, domain meaning, persistence semantics, or irreversible decisions.

**Authority:** 

- None. 
- Production authority is granted only by the Chief Architect for an approved scope.

**Primary reasoning modes:** 

- Tactical reasoning and mechanical execution.

**Responsibilities:**

- Participate in bounded implementation dialog
- Inspect the repository
- Identify existing local patterns
- Propose implementation approaches inside approved scope
- Surface conflicts between requested work and existing code
- Execute approved changes
- Perform file operations
- Generate boilerplate
- Update imports and references
- Run checks, tests, and guards when available
- Report modified files, failures, unresolved questions, and omitted work
- Act as language lawyer for implementation details
- Preserve existing architecture unless explicitly authorized to change it

**May Reason About:**

- Local implementation shape
- Existing file patterns
- Import paths
- Type errors
- Test failures
- Guard failures
- Component composition
- Small reversible local refactors
- How to satisfy an approved feature slice
- Whether the requested change conflicts with the current repository

**Must Escalate when work touches or implies changes to:**

- Architecture
- Domain meaning
- Persistence model
- Database migrations
- Cross-package boundaries
- Shared contracts
- Security boundaries
- Authorization rules
- Design-language primitives
- Guard rules
- Foundational documentation
- Irreversible or high-impact decisions

**Must Not:**

- Own architectural decisions
- Reinterpret product intent beyond approved scope
- Invent new abstractions without authorization
- Modify foundational documents without explicit consent
- Cross architectural boundaries without permission
- Treat passing tests as authority to change meaning
- Convert tactical reasoning into unilateral production

**Key Principle:**

The AI Coding Engine may reason tactically inside an approved scope. It may not reason authoritatively outside that scope.

## 4. Reasoning and Authority

Reasoning capability is separate from decision authority.

### 4.1 Reasoning Stratification

#### 4.1.1 Strategic Reasoning

Participants: **Chief Architect + AI Architect**

Concerns:

- What should exist?
- What should remain invariant?
- What user/domain reality matters?
- What trade-offs are acceptable?
- What deserves documentation?
- What tool should own the work?
- What risks must be controlled?

#### 4.1.2 Tactical Reasoning

Participants: **Chief Architect + AI Coding Engine**

Concerns:

- How does this feature fit the existing system?
- Which files should change?
- What local pattern should be followed?
- What does the failing guard imply?
- Is the requested change consistent with the repo?
- What implementation path is smallest and safest?

#### 4.1.3 Mechanical Execution

Participant: **AI Coding Engine**

Concerns:

- Make the edits.
- Run the checks.
- Report the diff.
- Fix authorized failures.
- Stop at boundary violations.

### 4.2 Authority Boundary

Reasoning may be shared.

Authority is not shared.

```text
The Chief Architect owns authority.
The AI Architect owns strategic assistance.
The AI Coding Engine owns tactical assistance and execution.
```

AI-generated observations are evidence.

They are not decisions.

### 4.3 Evidence vs. Governance

**The AI Coding Engine may report:**

```text
This requested implementation conflicts with the existing pattern in these files.
```

That is evidence.

**The Chief Architect decides whether:**

```text
The implementation should adapt to the pattern.
```

or:

```text
The pattern should change.
```

or:

```text
The issue should escalate to strategic design.
```

## 5. Operating Modes

The Three-Role Model uses operating modes to select the correct workflow, authorization level, and reasoning posture.

The mode is not ceremonial. It determines how the session proceeds.

### 5.1 Exploration Mode

Exploration Mode is used when the work is discussion, analysis, inspection, comparison, planning, or option generation.

**Typical Uses:**

- Discussing possible approaches
- Reviewing trade-offs
- Inspecting code without mutation
- Asking a AI Coding Engine to identify likely files
- Asking an AI Architect to compare strategies
- Drafting a proposed scope

**Production Rule:**

No project assets are modified in Exploration Mode.

Exploration may produce a proposed production scope.

### 5.2 Foundation Mode

Foundation Mode applies when work affects architecture, domain, persistence, shared contracts, design language, guard systems, DevOps structure, or cross-application boundaries.

**Typical Uses:**

- Domain model changes
- Persistence model changes
- Migrations
- Architecture document changes
- Shared API contracts
- UX primitive changes
- Guard script changes
- Cross-package refactors
- Security or authorization changes
- Core runtime changes

**Required Pattern:**

```text
Chief Architect + AI Architect
  → strategic reasoning
  → decision
  → documentation update
  → scoped production authorization
  → AI Coding Engine execution
  → checks/guards
  → Chief Architect review
```

**Principle:**

Foundation work requires deliberate decision, documented authority, scoped production, and explicit approval.

### 5.3 Feature Mode

Feature Mode applies when work adds end-user capability inside established architecture.

**Typical Uses:**

- App-local page
- App-local widget
- Feature workflow
- Form behavior
- List/detail view
- Report screen
- Dashboard card
- Existing API consumption
- Existing Ui control composition
- App-local state handling
- Loading, error, and empty states

**Required Pattern:**

```text
Chief Architect + AI Coding Engine
  → bounded tactical dialog
  → scope proposal
  → production authorization
  → implementation
  → checks/guards
  → review
```

**Principle:**

Feature work may proceed through dialog, but production remains gated.

### 5.4 Repair Mode

Repair Mode applies when the system fails a check, test, guard, build, or runtime expectation.

**Typical Uses:**

- Type failures
- Build failures
- Guard failures
- Broken imports
- Runtime defects
- Test failures
- Regression repair

**Required Pattern:**

```text
Failure observed
  → AI Coding Engine investigates
  → AI Coding Engine explains likely cause
  → Chief Architect confirms repair scope
  → AI Coding EngineEngine fixes
  → checks re-run
  → result reported
```

**Principle:**

A failing check authorizes investigation. It does not automatically authorize unrelated refactoring.

## 6. Production Authorization

Production means creating, modifying, moving, deleting, generating, or regenerating project assets.

### 6.1 Production Gate

**Before production begins, the agent must identify:**

- Goal
- Operating mode
- Files or directories expected to change
- Files or directories explicitly out of scope
- Architectural boundaries involved
- Checks or guards to run
- Known risks or ambiguities

```text
The Chief Architect must authorize the scope.
```

### 6.2 Dialog vs. Production

Dialog may be fluid.

Production must be gated.

**Allowed before authorization:**

- Discuss
- Analyze
- Inspect
- Propose
- Compare
- Ask
- Identify risks
- Draft scope

**Not allowed before authorization:**

- Modify files
- Generate code into project assets
- Move files
- Delete files
- Update architecture documents
- Change persistence
- Run destructive commands

### 6.3 Scope Is a Contract

Once production scope is authorized:

- Do not silently expand scope
- Do not skip requested checks
- Do not introduce new abstractions unless authorized
- Do not modify out-of-scope files unless required to fix an authorized check
- Escalate if new required work exceeds scope

## 7. Workflow Patterns

### 7.1 Strategic Loop

Used for Foundation Mode, methodology, architecture, domain, persistence, and cross-system decisions.

```text
STRATEGIC LOOP

Chief Architect + AI Architect
  → Ideation / Strategic Reasoning
     - Frame problem
     - State constraints
     - Explore options
     - Surface trade-offs
     - Consider problem space and solution space
  → Decision
     - Chief Architect accepts/rejects
     - Decision boundary locked
  → Documentation
     - Update governing docs if needed
     - Define implementation constraints
  → Production Scope
     - Identify files/areas
     - Identify forbidden changes
     - Identify checks
  → Authorization
     - Chief Architect approves production
```

### 7.2 Tactical Feature Loop

Used for app-local feature construction inside established architecture.

```text
TACTICAL FEATURE LOOP

Chief Architect + AI Coding Engine
  → Feature Intent
     - User need
     - App context
     - Desired workflow
     - Acceptance criteria
  → Tactical Reasoning
     - Inspect repo
     - Find existing patterns
     - Identify likely files
     - Identify risks
     - Propose implementation path
  → Scope Proposal
     - Files to touch
     - Files not to touch
     - Checks to run
     - Escalation boundaries
  → Production Authorization
     - Chief Architect approves, revises, or rejects scope
  → Construction
    AI Coding Engine edits
     - Runs checks
     - Fixes in-scope failures
  → Report
     - Files changed
     - Checks run
     - Pass/fail
     - Unresolved issues
  → Review
     - Chief Architect approves or redirects
```

### 7.3 Mechanical Execution Loop

Used after scope is approved and implementation is clear.

```text
MECHANICAL EXECUTION LOOP

Approved Scope
  → AI Coding Engine Executes
  → Run Checks / Guards
     → Pass: Report Completion
     → Fail: Fix In-Scope Violations
        → Re-run Checks
           → Pass: Report Completion
           → Fail Outside Scope: Escalate
```

### 7.4 Repair Loop

Used when a guard, test, build, or runtime behavior fails.

```text
REPAIR LOOP

Failure
  → Investigate
  → Explain Cause
  → Propose Repair Scope
  → Chief Architect Authorizes
  → Fix
  → Re-run Check
     → Pass: Report
     → Fail: Escalate or Continue if In Scope
```

## 8. Handoff Protocols

### 8.1 Chief Architect to AI Architect

Used for strategic reasoning.

**Format:**

- State problem or decision
- Provide constraints
- Identify negotiable and non-negotiable concerns
- Indicate whether output should be options, recommendation, document draft, or implementation brief

**AI Architect Response:**

- Clarifies the decision boundary
- Surfaces options
- Explains trade-offs
- Identifies consequences
- Challenges assumptions respectfully
- Produces decision-ready output
- Does not decide unilaterally

### 8.2 Chief Architect to AI Coding Engine

Used for tactical reasoning or production.

**Exploration / Tactical Dialog Format:**

- State feature/user need
- State app context
- State known boundaries
- Ask AI Coding Engine to inspect, reason, or propose

**Production Format:**

- Goal
- Approved scope
- Files/directories to touch
- Files/directories not to touch
- Constraints
- Checks to run
- Stop conditions
- Reporting expectations

### 8.3 AI Architect to AI Coding Engine

Used when strategic reasoning has produced an implementation brief.

**Format:**

- Single-purpose brief
- Explicit scope
- Explicit boundaries
- Clear acceptance criteria
- Required checks
- Forbidden actions
- Escalation conditions

**Rules:**

- One brief may support one feature slice or one production phase.
- Do not bundle unrelated work.

### 8.4 AI Coding Engine to Chief Architect

Used after tactical reasoning, construction, repair, or checks.

**Tactical Report:**

- Existing patterns found
- Proposed files to touch
- Risks or ambiguities
- Boundary concerns
- Suggested implementation path

**Production Report:**

- Files created
- Files modified
- Files deleted
- Checks run
- Check results
- Failures fixed
- Failures remaining
- Work explicitly not done
- Questions requiring Chief Architect decision

## 9. Documentation as Stable Interface

Documents remain the stable interface across AI tools, humans, sessions, and time.

Software production is regenerable.

Architecture, domain meaning, and governance are authoritative.

### 9.1 Documentation Hierarchy

**In order of authority:**

1. CONSTITUTION.md
2. Domain model documents
3. Architecture documents
4. UX/design-language documents
5. DevOps documents
6. Style guide
7. Agent instructions
8. Code examples

The exact hierarchy may be refined by the active Constitution and architecture authority chain.

### 9.2 Documentation Before Foundational Code

**For Foundation Mode:**

1. Identify architectural need
2. Debate and decide
3. Update documentation
4. Authorize production
5. Generate or modify code
6. Verify with guards/checks

Never use code as the first durable expression of architectural decisions.

### 9.3 Feature Documentation

For Feature Mode, documentation requirements are lighter.

A feature may be implemented from a scoped feature brief when it remains inside existing architecture.

**Update documentation when the feature:**

- Introduces a new pattern
- Changes user workflow conventions
- Adds reusable UX behavior
- Alters public contracts
- Changes architecture or domain meaning
- Creates operational knowledge future agents need

## 10. Managing AI Tool Capabilities

### 10.1 Tool-Agnostic Governance

AI tools are interchangeable.

The Constitution, architecture documents, guard scripts, and project memory are the stable interface.

### 10.2 Tool Selection

**Use AI Architect when:**

- The question is strategic
- Domain reality matters
- Product consequences matter
- Tool strategy matters
- Documentation needs to be authored
- Multiple solution paths must be compared

**Use AI Coding Engine when:**

- The question is repo-grounded
- Existing patterns need inspection
- File changes are likely
- Guards/tests need to be run
- A feature slice is ready
- Tactical implementation questions dominate

**Use both when:**

- A feature touches user needs and non-trivial implementation
- The local code path reveals strategic ambiguity
- The AI Coding Engine finds a boundary conflict
- A feature suggests architecture drift

### 10.3 Memory and Instruction Files

Project memory and instruction files reduce context loss but do not replace governance.

Memory is context.

It is not authority.

Agent instructions are operational guidance.

They do not supersede the Constitution.

### 10.4 Prompt Precision

Prompt precision is no longer the universal workflow requirement.

**It remains valuable for:**

- Foundation Mode
- High-risk refactors
- Cross-package changes
- Migrations
- Guard or architecture updates
- Work handed between tools
- Reproducible production phases
- Work requiring strict replayability

For ordinary Feature Mode, structured engineering dialog may replace formal prompt handoff.

## 11. Measuring Success

### 11.1 Good Signs

- Chief Architect remains in control
- Tool choice is deliberate
- Strategic and tactical reasoning are separated
- Feature slices are small and reviewable
- Production scopes are explicit
- Guards fail early and usefully
- AI Coding Engines raise boundary concerns
- Documentation stays ahead of architecture
- Ordinary feature work moves faster with less prompt ceremony
- Code reviews focus on correctness and fit, not discovering intent

### 11.2 Warning Signs

- AI Coding Engine modifies assets without scope approval
- Guards become the only protection against drift
- Documentation lags foundational changes
- Feature work introduces new patterns casually
- Tactical convenience overrides strategic design
- AI tool confidence substitutes for human judgment
- Reviews become archaeology

### 11.3 When The Method Is Working

**You should feel:**

- In control
- Deliberate
- Faster
- Less burdened by prompt ceremony
- Better supported by repo-grounded tactical dialog
- Protected by production gates
- Confident that architecture remains intact while feature throughput increases

## 12. Summary

The Three-Role Model preserves the original authority model while adapting to modern AI coding tools and a mature codebase.

**The roles remain:**

- **Chief Architect:** Owns authority, judgment, product intent, and final decisions.
- **AI Architect:** Supports strategic reasoning across architecture, domain, business, methodology, and tooling.
- **AI Coding Engine:** Supports tactical reasoning inside the repository and mechanical execution.

**The operational model is:**

| Reasoning             | Role                                 |
|-----------------------|--------------------------------------|
| Strategic reasoning   | Chief Architect + AI Architect       |
| Tactical reasoning    | Chief Architect + AI Coding Engine   |
| Mechanical execution  | AI Coding Engine                     |

**The core rule is:**

- Dialog may be fluid.
- Production must be gated.

The model succeeds when AI tools increase leverage without acquiring unauthorized control over architecture, domain meaning, persistence, or project assets.

__End of Model of Development with AI Coding (2.0) Document_
