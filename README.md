# ASR Attorney Template

**Attorney Site Rescue** master template for estate planning law firm websites. Built with Astro (static site generation), hosted on Netlify, editable via Pages CMS.

## 🎯 Purpose

This repository is the **source template** that gets copied for each new law firm client. It provides a complete design system foundation with reusable components, locked design tokens, and bar advertising compliance guardrails.

## 🏗️ Technology Stack

- **Astro** v5.0+ (static site generation)
- **TypeScript** (strict mode)
- **Netlify** for hosting and deploy previews
- **Pages CMS** (pagescms.org) for client content editing
- **Minimal dependencies** by design

## 🎨 Design System

The design system is fully defined in `/src/styles/tokens.css` with:

- **8pt spacing grid**: 4, 8, 16, 24, 32, 48, 64, 80, 120px
- **Responsive typography**: Instrument Serif (headings), Geist (body)
- **Color palette**: Navy, Copper, Brown accents with professional neutrals
- **4px border radius** for the "legal look"
- **Responsive breakpoints**: 390px (mobile), 768px (tablet), 1440px (desktop)

View the complete design system at `/styleguide` after running the dev server.

## 📦 Components

Foundation components included:

- `Button` - Filled/outline variants, light/navy themes, layered hover effect
- `Nav` - Responsive navigation with mobile menu
- `Footer` - Includes required "responsible attorney" field for bar compliance
- `Card` - Icon slot, hover effects
- `FAQ` - Accessible accordion with copper icons
- `Image` - Layered "estate file" treatment on hover
- `Section` - Background and spacing variants
- `Heading` - Two-tone accent support

## 🚀 Creating a New Client Site

### Step 1: Copy This Template

Use this repository as a template to create a new client-specific repository:

```bash
# Using GitHub CLI
gh repo create client-firm-name \
  --template your-org/asr-attorney-template \
  --private \
  --clone

# Or use the GitHub UI: "Use this template" button
```

### Step 2: Update Client Information

In the new repository:

1. **Update `astro.config.mjs`**:
   ```js
   export default defineConfig({
     site: 'https://clientfirm.com', // Client's domain
   });
   ```

2. **Configure Netlify**:
   - Connect the new repository to Netlify
   - Set up custom domain
   - Enable deploy previews for all PRs

3. **Update footer information** in page templates:
   ```astro
   <Footer 
     responsibleAttorney="Jane Smith, Esq."
     firmName="Smith Estate Planning"
     address="123 Legal Lane, City, State 12345"
     phone="(555) 123-4567"
     email="contact@smithestate.com"
   />
   ```

4. **Configure Pages CMS**:
   - Update `.pages.yml` with client-specific collections
   - Map editable fields (images, headings, CTAs only)

5. **Add client assets**:
   - Logo files to `/public`
   - Favicon and OG images
   - Attorney photos and office images

### Step 3: Build Client Pages

Build out pages using the foundation components:

- Home page (`/src/pages/index.astro`)
- Practice areas
- Resources/blog
- Contact page

Reference `/styleguide` page as an example of component usage.

### Step 4: Client Handoff

1. Train client on Pages CMS editing
2. Provide style guide URL for reference
3. Document editable vs. structural content
4. Set up maintenance schedule

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321/styleguide` to view the design system.

### Build for Production

```bash
npm run build
```

Output in `/dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 CMS Editing Workflow

Pages CMS allows content editors to update text, images, and CTAs without touching code. The CMS workflow is designed to maintain compliance with Maryland's advertising archive rules.

### Workflow Overview

1. **CMS Branch**: All CMS edits are committed to a long-lived `cms-edits` branch
2. **Deploy Preview**: Every commit triggers a Netlify deploy preview for review
3. **Merge Process**: Owner reviews the preview and merges `cms-edits` → `main` with a normal merge (never squash)
4. **Fast-forward After Code Changes**: After developer PRs merge to `main`, fast-forward `cms-edits` to `main`

### Key Rules

- **Never force-push** the `cms-edits` branch (preserves commit history for ad archiving)
- **Never squash merge** CMS commits (Maryland requires individual editor attribution)
- **Protect main**: All changes to `main` require review via PR or CMS preview
- **User Identity**: Pages CMS records the editing user's name and email in each commit

### What Editors Can Change

✅ **Editable via CMS**:
- Images (with alt text)
- Headings and sub-headlines
- Paragraphs and descriptions
- CTA button text and links
- FAQ items
- Contact information and office hours
- Draft status (hide/show in production)

❌ **Locked (requires developer)**:
- Section order and layout
- Icon names and colors
- Design tokens (colors, spacing, fonts)
- Component structure
- Navigation menu items
- Footer structure

### Creating the CMS Branch

When setting up a new client site:

```bash
git checkout main
git checkout -b cms-edits
git push -u origin cms-edits
```

Then configure Pages CMS to use the `cms-edits` branch for editing.

### After Developer PRs

When developer PRs merge into `main`:

```bash
git checkout cms-edits
git fetch origin
git merge --ff-only origin/main
git push origin cms-edits
```

This keeps `cms-edits` current without rewriting CMS commit history.

## 📋 Bar Advertising Compliance

This template is designed for estate planning firms in **Virginia, Maryland, and Washington, DC**. Maryland rules (most restrictive) are the default.

**Built-in compliance features**:

- Required "responsible attorney" in footer
- Standard disclaimers on all pages
- No specialist/expert claims
- No testimonials or results without proper disclaimers

See `AGENTS.md` for complete compliance guidelines.

## 🤖 Working with AI Agents

This repository includes `AGENTS.md` with rules for AI coding agents:

- **Locked design tokens** (do not modify without owner approval)
- **Pages CMS editable field boundaries**
- **Bar advertising guardrails**
- **Git workflow and PR process**

Agents must follow the owner-controlled release process and never merge PRs or deploy directly.

## 📄 License

Proprietary template for Attorney Site Rescue clients. Not for redistribution.

## 🆘 Support

For questions or issues with the template foundation, contact the ASR development team.

---

**Version**: 1.0.0 (Foundation PR #1)
