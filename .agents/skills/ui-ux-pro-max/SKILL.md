---
name: ui-ux-pro-max
description: Use this skill for UI/UX design intelligence across web and mobile projects: landing pages, dashboards, admin panels, SaaS apps, e-commerce, portfolios, mobile apps, forms, tables, charts, design systems, typography, colors, layout, accessibility, responsive behavior, and interaction quality.
---

# UI/UX Pro Max-Inspired Skill

This local skill is a Codex-compatible UI/UX design-system guide inspired by the public UI/UX Pro Max project.

Source reference: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

## Goal

Make product interfaces more professional by improving structure, usability, accessibility, visual consistency, and implementation quality.

## Use when

Use this skill when the task involves:

- creating or redesigning UI;
- choosing colors, typography, spacing, layout, motion, or components;
- improving a landing page, dashboard, mobile screen, SaaS app, admin panel, portfolio, or e-commerce flow;
- reviewing UI for UX and accessibility problems;
- building a design system or component system;
- polishing React, Next.js, Vue, Svelte, Flutter, React Native, SwiftUI, Tailwind, shadcn/ui, or plain HTML/CSS interfaces.

## Priority checklist

Follow this order:

1. Accessibility: contrast, focus states, labels, keyboard navigation, semantic structure.
2. Touch and interaction: touch targets, loading feedback, disabled states, error states.
3. Layout and responsive behavior: mobile-first, no horizontal scroll, clear breakpoints.
4. Visual hierarchy: one primary action, clear heading levels, readable cards and sections.
5. Typography: readable base size, consistent scale, no tiny body text.
6. Color system: semantic tokens, controlled palette, no random hex values scattered through components.
7. Motion: 150-300ms transitions, useful feedback, reduced-motion support where appropriate.
8. Forms: visible labels, helper text, inline errors, validation messages near the field.
9. Navigation: predictable back behavior, clear active state, no overloaded menus.
10. Data display: readable tables/charts, legends, tooltips, empty states.

## Design-system output

When building UI, define or reuse:

- color tokens;
- typography scale;
- spacing scale;
- radius scale;
- surface/card styles;
- button variants;
- input/form variants;
- table/list states;
- chart/data states when relevant;
- motion rules;
- responsive breakpoints.

## Anti-patterns to avoid

- placeholder-only input labels;
- low contrast gray text;
- hover-only interactions on mobile;
- unstyled default browser controls;
- fixed-width layouts that break on mobile;
- random colors for normal states;
- decorative animation with no UX purpose;
- icons without labels where labels are needed;
- dashboards full of fake metrics with no hierarchy;
- CTA buttons hidden below noisy sections.

## Final QA

Before finalizing, verify:

- The UI is understandable.
- The interface can be used on mobile.
- Important actions are obvious.
- The visual system is consistent.
- Accessibility basics are not broken.
- The implementation is maintainable.

Use together with `styleseed` for premium polish and `ui-design` for implementation workflow.
