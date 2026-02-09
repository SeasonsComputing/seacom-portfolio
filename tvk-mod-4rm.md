# Model of Development w/ AI Coding (v2/Critic)

## 1. Introduction

This document defines the **v2.0 operational model** for software development using AI tools. It establishes a closed-loop system of development by introducing an adversarial **Critic** role to verify that mechanical execution never deviates from architectural intent.

## 2. The Four-Role Model

### 2.1 Chief Architect (Human)

**Authority:** Final and absolute on all architectural, domain, and irreversible decisions.

**Responsibilities:**

- Define domain meaning and business intent.
- Approve or reject design proposals and "Lock" decisions.
- Own the agenda and resolve ambiguity.
- Protect the solution space from premature collapse or AI-driven drift.

### 2.2 Architect AI (Reasoning Engine)

**Role:** Design partner, second inner monologue, and documentation enforcer.

**Responsibilities:**

- Surface trade-offs and challenge assumptions.
- Translate decisions into precise, deterministic execution prompts for the Coding Engine.
- Generate or refine documentation to match locked decisions.
- Define the specific **Acceptance Criteria** for the Critic AI.

### 2.3 Coding Engine AI (Mechanical Executor)

**Role:** Fast, literal, and deterministic code generator.

**Responsibilities:**

- Execute prompts exactly as given.
- Perform file operations (create, move, edit) and generate boilerplate.
- Follow established patterns without "creative" deviation.

### 2.4 Critic AI (Adversarial Auditor)

**Authority:** Negative only (Veto power). It cannot approve, only withhold certification.

**Role:** Strict compliance officer and logic auditor.

**Responsibilities:**

- Audit Coding Engine output against documentation and the execution prompt.
- Flag "Abstraction Invention" (code or logic not explicitly requested).
- Identify violations of the `CONSTITUTION.md` or established architectural boundaries.
- Generate a "Violation Report" if the code drifts from the intent.

## 3. The Closed-Loop Workflow Phase

Work proceeds in a loop that ensures the Chief Architect only reviews code that is mathematically and logically compliant with the specs.

[Image of a closed-loop control system diagram]

1. **Phase A: Design & Lock** (Human + Architect AI) → Result: Updated Docs + Execution Prompt.
2. **Phase B: Execution** (Coding Engine) → Result: Code Artifacts.
3. **Phase C: Audit** (Critic AI) → Result: Compliance Report.
   - _If Compliance Fails:_ Feedback is sent back to the Coding Engine for re-execution.
   - _If Compliance Passes:_ The work is promoted to the human.
4. **Phase D: Final Review** (Chief Architect) → Verification of domain intent and final merge.

## 4. The Governance Protocol (Critic's Heuristics)

The Critic must assume the Coding Engine has failed until proven otherwise, using these rules:

- **The Literalism Rule:** Any logic, utility, or helper added that was NOT explicitly requested in the prompt is a violation.
- **The Boundary Rule:** Any modification to files or directories outside the specified scope is a violation.
- **The Pattern Match:** Code must strictly adhere to the dependency decomposition and style guides defined in the docs.
- **The Doc-to-Code Parity:** Code is a derivative of documentation; code never "updates" documentation.

## 5. Summary Rules

1. **Think before doing:** Design decisions are documented before code is written.
2. **Document before implementing:** Code is derived from documentation, not the other way around.
3. **Execute mechanically:** Implementation follows prompts literally, with zero creative freedom.
4. **Verify adversarially:** All output is audited by a Critic against the documentation before human review.

**End of mod-v2.md**
