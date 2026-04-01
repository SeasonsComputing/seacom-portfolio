# Model of Development w/ AI Coding (v3/Swarm)

## 1. Introduction

This document defines the **v3.0 operational model** for large-scale, distributed software development. It evolves the v2.0 closed-loop system into a parallelized orchestration framework, enabling a single **Chief Architect** to command a **Swarm** of AI agents with the precision of a high-fidelity assembly line.

## 2. The Five-Role Hierarchy

### 2.1 Chief Architect (Human)

**Authority:** Final Sovereignty.

**Responsibilities:** Define high-level domain intent, approve the "Global Map," and resolve cross-subsystem conflicts.

### 2.2 Architect AI (Reasoning Engine / Scheduler)

**Role:** Lead Designer and Work-Package Planner.

**Responsibilities:** - Decomposition of the system into independent, decoupled "Work Packages."

- Managing the **Dependency Graph** between packages.
- Generating the **Acceptance Criteria** for the Critics.

### 2.3 Dispatcher AI (The Orchestrator) — **NEW**

**Role:** Resource Manager and State Synchronizer.

**Responsibilities:**

- Assigning Work Packages to specific **Coding Engines** in the Swarm.
- Managing "Context Injection": ensuring each agent receives only the relevant `architecture-*.md` snippets.
- Monitoring rate limits and platform health to ensure continuous swarm operation.

### 2.4 The Swarm (Coding Engines)

**Role:** Parallelized Mechanical Executors.

**Responsibilities:**

- Executing assigned Work Packages in isolated sandboxes.
- Adhering to the "Literalism Rule"—no cross-communication between swarm members; they only know their specific prompt.

### 2.5 The Critic Swarm (Adversarial Auditors)

**Role:** Automated Gatekeepers.

**Responsibilities:**

- One Critic assigned to every Swarm member.
- Verifying that each agent's output maintains **Subsystem Integrity** and does not violate the `CONSTITUTION.md`.

## 3. The Swarm Workflow (Parallel Execution)

1. **Phase 1: Subsystem Decomposition**
   - The Architect AI breaks the "Agenda Item" into N independent tasks based on the dependency map.
2. **Phase 2: Parallel Dispatch**
   - The Dispatcher sends N tasks to N Coding Engines simultaneously, each with its own Critic.
3. **Phase 3: Asynchronous Audit**
   - Critics review code in parallel. If an agent fails, the Dispatcher triggers an immediate "Fix Loop" for that specific agent.
4. **Phase 4: Global Integration**
   - Once all Critics certify their packages, the Architect AI integrates the diffs into the "Global State" (The Codebase).
5. **Phase 5: Architect Certification**
   - The Human Chief Architect reviews the consolidated "System Change Report".

## 4. Swarm Governance (The "Sandbox" Rules)

To prevent entropy in a swarm, the following rules are added to the **Governance Protocol**:

- **Atomic Isolation:** Swarm agents cannot see each other's work. This prevents "Collaborative Hallucination."
- **Statelessness:** Every agent starts with a fresh "Re-hydration" from the Documentation Kernel.
- **Contract-First Communication:** Swarm members interact only via the API Specifications defined in the docs.

## 5. Summary Principles (v3.0)

1. **Architecture is the Scheduler:** The dependency graph dictates the swarm's parallelization.
2. **Documentation is the Global Bus:** Agents coordinate through the "Source of Truth," not through direct communication.
3. **Validation is Scalable:** The ratio of Critics to Coders is always 1:1.
4. **The Human is the Filter:** The Chief Architect acts as the high-pass filter, only engaging with "Certified Architecture" produced by the swarm.

**End of mod-v3.md**
