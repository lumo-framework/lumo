# Security Policy

Thank you for helping keep **tsc-run** and its community safe!  
This policy explains how to report potential security issues responsibly.

---

## 📌 Scope

| Repo | Report here **only if** the vulnerability is in… |
|------|--------------------------------------------------|
| **Starter template** (this repo) | Template scaffolding, example configs, CI scripts, starter-specific docs |
| **Monorepo** <https://github.com/tsc-run/monorepo> | CLI, adapters, the core framework runtime, shared utilities |
| **Docs** <https://github.com/tsc-run/docs> | Markdown docs, deployed website |

If you’re unsure, **open a private report in this repo** - we’ll triage and forward where appropriate.

---

## ⚠️ Alpha Status & Expectations

* The API surface is still shifting quickly; breaking changes can happen without deprecation periods.  
* **Security patches have highest priority**, but timeline guarantees are “best-effort” (see below).  
* We strongly advise against production use until we reach beta.

---

## 🛡️ Supported Versions

| Branch / Tag | Supported? |
|--------------|-----------|
| `main` (latest **alpha** code) | ✅ |
| Any git tag `< 0.7.0-alpha` | ❌ *(please update to `main` before reporting)* |

> During alpha we only patch the *tip* of the default branch. Fixed issues are released as soon as the patch merges.

---

## 🔒 Reporting a Vulnerability

* **Email:** `tsc.run@icloud.com`  
  — *or* —
* **GitHub:** [Create a private “Security advisory”](../../security/advisories/new)

Please include:

1. Clear description and impact.
2. Steps to reproduce (proof-of-concept if possible).
3. Affected files, commits, or released versions.
4. Your contact details for follow-up.

> **Do NOT** open public issues for security topics.

---

## ⏱️ Response Timeline

| Phase | Target time (business days) |
|-------|-----------------------------|
| Acknowledge receipt | 2 days |
| Initial assessment | 5 days |
| Fix & coordinated release | 10 days (complex issues may take longer; we’ll keep you updated) |

---

## 🤝 Disclosure Policy

* We follow *coordinated disclosure*: the issue remains private until a fix is released.
* You may request public credit after the patch ships (handled in our release notes / GitHub advisory).
* We currently don’t run a paid bug-bounty program, but we’re happy to acknowledge your contribution.
