# Agent Development Rules for ASR Attorney Template

## Project Overview

This repository is the **master template** for Attorney Site Rescue (ASR) estate planning law firm websites. It is copied into a new client-owned repository for each firm. This is a foundation built with **Astro (static site generator)** hosted on **Netlify**, using **Pages CMS** (pagescms.org) for client content editing.

## Technology Stack (Locked)

- **Astro** (static site generation)
- **Netlify** for hosting and deploy previews
- **Pages CMS** (pagescms.org) via `.pages.yml` config
- **No other CMS or frameworks**
- **Keep dependencies minimal**

## Design Tokens (Locked)

The design system is defined in `/src/styles/tokens.css` and is **authoritative**. Do not modify design tokens without explicit instruction from the repository owner. All colors, spacing, typography, and other design decisions are locked.

### Color Palette
- **Ink**: `#131313` (body text)
- **White**: `#FFFFFF` 
- **Mist**: `#F2F3F4` (subtle backgrounds)
- **Navy**: `#1B2A41` (bands and panels only)
- **Primary Blue**: `#2B53B4` (buttons only)
- **Copper**: `#A66222` (icons, small accents, heading accents)
- **Brown**: `#4E2A19` (sparing warmth, heading accents)
- **Muted**: `#6B6F76` (supporting text)
- **Line**: `#DFE1E4` (borders)

### Typography
- **Headings**: Instrument Serif with 108% line height
- **Body**: Geist at 18/16/14px with 150% line height
- **Two-tone treatment**: Headings use a `<span>` with copper/brown accent for emphasis

### Spacing
- **8pt grid**: 0, 4, 8, 16, 24, 32, 48, 64, 80, 120px

### Border Radius
- **4px** for cards, buttons, images, form fields (legal look)
- **0px** (square) for full-width bands

## Pages CMS Editable Fields

Client editable fields via Pages CMS (`.pages.yml`) are **limited to**:

- Images
- Headings
- Sub-headlines
- Paragraphs
- Call-to-action (CTA) text

**Anything beyond this scope** (custom layouts, new components, advanced features) is an **add-on or redesign** and requires owner approval.

## Bar Advertising Compliance Guardrails

Estate planning law firm websites must comply with **attorney advertising rules**. This template is designed for firms practicing in **Virginia, Maryland, and Washington, DC**. 

### Default to Maryland's Stricter Rules

Maryland has the most restrictive bar advertising requirements in this jurisdiction. When in doubt, follow Maryland standards:

- **No "specialist" or "expert" claims** unless properly certified
- **No testimonials or endorsements** without proper disclaimers (requires add-on approval)
- **No claims of guaranteed results** or promises of specific outcomes
- **Responsible attorney must be named in footer** (required)
- **Disclaimer language** must appear on every page

### Required Disclaimers

The footer includes a standard disclaimer:

> "This website is for informational purposes only and does not constitute legal advice. An attorney-client relationship is not formed by using this website. Results may vary and past results do not guarantee future outcomes."

### Add-Ons Requiring Approval

- Google ratings/reviews display
- Client testimonials
- Results or case outcomes
- Awards or accolades

These require additional disclaimers and owner approval before implementation.

## Git Workflow & Release Rules

### Branch Strategy

- **Main branch** is protected and represents production
- **Feature branches** for all work (e.g., `feature/home-page`, `fix/nav-mobile`)
- **CMS edits branch** (`cms-edits`) is long-lived for client content updates
- **Small, focused PRs** (one feature or fix per PR)

### CMS Editing Workflow

Client content editors work on a dedicated `cms-edits` branch:

1. **CMS commits to `cms-edits`**: Pages CMS records each editor's identity (name + email) in commit metadata
2. **Netlify preview deploys**: Every `cms-edits` commit triggers a deploy preview
3. **Owner reviews**: Owner checks the preview for compliance and accuracy
4. **Normal merge to main**: Owner merges `cms-edits` → `main` with a **normal merge (never squash)**
5. **Fast-forward after code PRs**: After developer PRs merge to `main`, fast-forward `cms-edits` to sync

### Why No Squashing?

**Maryland's advertising archive rule** requires law firms to maintain records of who created each ad and when. By preserving individual CMS commits with user attribution, the git history becomes the compliance record. Squashing would erase this audit trail.

### Agent Responsibilities

Agents working on this repository:

1. **Create feature branches** for all work
2. **Make small, incremental commits** with clear messages
3. **Open pull requests** for owner review
4. **Never merge PRs** — owner reviews and merges
5. **Never deploy directly** — Netlify auto-deploys from main after merge
6. **Never force-push** or rewrite history on shared branches
7. **Never touch `cms-edits`** — it's managed by Pages CMS and the owner
8. **After your PR merges**: The owner will fast-forward `cms-edits` to include your changes

### Draft Content Handling

Practice areas and resources support an optional `draft` boolean field:

- **Production builds** (`CONTEXT=production`): Drafts are hidden
- **Deploy previews** (`CONTEXT=deploy-preview`): Drafts are visible
- **Local dev**: Drafts are visible

This lets editors preview draft content before publishing.

### Review Process

1. Agent opens PR with clear description
2. Owner reviews **Netlify deploy preview**
3. Owner verifies compliance with bar rules
4. Owner merges if approved, or requests changes
5. Netlify auto-deploys to production on merge to main

## Code Quality Standards

- **TypeScript strict mode** enabled
- **Accessible components** (ARIA labels, keyboard navigation, focus management)
- **Semantic HTML** (proper heading hierarchy, landmark roles)
- **Mobile-first responsive design** (390px, 768px, 1440px breakpoints)
- **Tap targets** minimum 44px
- **Performance**: minimize dependencies, optimize images, use Astro's static generation

## File Organization

```
/src
  /components      # Reusable UI components
  /layouts         # Page layouts (BaseLayout.astro)
  /pages           # Astro pages (index.astro, styleguide.astro, etc.)
  /styles          # Global styles, tokens
/public            # Static assets (images, fonts, etc.)
```

## Testing Requirements

Before opening a PR:

1. Run `npm run build` to verify build passes
2. Test at 390px, 768px, and 1440px widths
3. Check keyboard navigation and screen reader compatibility
4. Verify no overflow or layout breaks
5. Test mobile navigation menu

## Pages CMS Integration

The `.pages.yml` configuration file maps editable content fields for Pages CMS. Only designated fields should be editable by clients. Structural changes require repository updates by developers.

## When to Escalate

Escalate to the repository owner when:

- Client requests content outside editable fields
- Design changes conflict with locked tokens
- Bar advertising compliance is unclear
- Testimonials, reviews, or results need to be added
- Major architectural changes are proposed

---

**Summary**: This template prioritizes compliance, maintainability, and client self-service within controlled boundaries. Agents must respect locked design tokens, bar advertising rules, and the owner-controlled release process.
