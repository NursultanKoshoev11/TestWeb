---
name: ui-design
description: Use this skill when Codex is asked to design, redesign, implement, polish, or review a website page, app screen, landing page, dashboard, flow, or frontend component. Focus on distinctive production-grade UI directly in code.
---

# Codex UI Design Skill

This local skill is inspired by the public Codex Design Skill package.

Source reference: https://github.com/hursh-shah/codex-design-skill

## Goal

Implement polished frontend UI directly in the project, not only mockups. The result should feel intentional, modern, responsive, accessible, and production-ready.

## Default behavior

- Prefer implementation over description when the user asks to build or redesign.
- Default to the existing project stack.
- If the stack is not present yet, use a modern web stack only when appropriate.
- Preserve existing functionality during redesign.
- Do not silently remove features.
- Keep code clean and componentized.

## Workflow

### Step 1: Understand the brief

Identify:

- page, screen, component, or flow;
- target user;
- primary action;
- device targets;
- brand constraints;
- required states;
- existing project stack and folder structure.

Ask follow-up questions only when blocked. Otherwise make reasonable assumptions and state them in the final response.

### Step 2: Define design direction

Before coding, decide:

- visual tone;
- information hierarchy;
- layout strategy;
- typography strategy;
- color system;
- motion strategy;
- one memorable visual signature.

Avoid generic prompts like “make it nice.” Make concrete design decisions.

### Step 3: Build with production quality

For web UI, prioritize:

- semantic HTML;
- accessible controls;
- responsive layout;
- reusable components;
- maintainable CSS/Tailwind/classes;
- clear file organization;
- realistic sample content if needed;
- loading, empty, error, disabled, hover, and focus states.

### Step 4: Visual QA

Before finalizing, inspect the UI as if reviewing a production product:

- Does it have a strong first impression?
- Is the hierarchy clear?
- Is the CTA obvious?
- Is spacing balanced?
- Is the mobile layout good?
- Is contrast readable?
- Are controls accessible?
- Is the code clean?
- Does it avoid an AI-template look?

If quality is weak, iterate before finalizing.

## Use with other skills

- Use `styleseed` for premium visual polish and anti-generic rules.
- Use `ui-ux-pro-max` for design-system and UX reasoning.
