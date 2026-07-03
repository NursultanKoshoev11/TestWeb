# Design Skills Installed

This repo contains three local Codex-compatible design skills:

- `.agents/skills/styleseed/SKILL.md`
- `.agents/skills/ui-ux-pro-max/SKILL.md`
- `.agents/skills/ui-design/SKILL.md`

## Sources

- StyleSeed: https://github.com/bitjaru/styleseed
- UI/UX Pro Max: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Codex Design Skill: https://github.com/hursh-shah/codex-design-skill

## Best Codex prompt

```text
Use the installed design skills: styleseed, ui-ux-pro-max, and ui-design. Build a premium, futuristic, cinematic, investor-ready UI. Avoid generic AI design. Use strong hierarchy, premium spacing, one accent color, polished mobile responsiveness, real empty/error/loading states, hover/focus states, and run a strict visual quality gate before finishing.
```

## Full upstream installation commands

If you want to install the full upstream packages locally instead of using the lightweight repo skills, run from the project root:

```bash
# StyleSeed full skill pack
npx skills add bitjaru/styleseed

# UI/UX Pro Max full skill pack for Codex
npm install -g ui-ux-pro-max-cli
uipro init --ai codex

# Codex Design Skill full package
$skill-installer install https://github.com/hursh-shah/codex-design-skill/tree/main/ui-design
```

## Note

The repo currently contains lightweight Codex-compatible skills, not a full vendor mirror of all upstream files. This keeps the repository clean and avoids adding unnecessary binaries or large generated assets.
