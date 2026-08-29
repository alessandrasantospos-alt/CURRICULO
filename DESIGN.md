---
name: Logistics Authority
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fc7728'
  on-secondary-container: '#5d2300'
  tertiary: '#001818'
  on-tertiary: '#ffffff'
  tertiary-container: '#002f2f'
  on-tertiary-container: '#3a9f9e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#ffdbcb'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#341000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#93f2f2'
  tertiary-fixed-dim: '#76d6d5'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f4f'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 40px
  element-gap: 12px
---

## Brand & Style
The design system is engineered for the modern logistics and supply chain professional. It balances the rigidity of industrial standards with the fluidity of global trade. The brand personality is authoritative, precise, and operationally excellent.

The design style is **Corporate / Modern** with a focus on high-density information management. It utilizes heavy whitespace to ensure complex career histories remain legible, while subtle technical accents (like hairline strokes and monospaced data points) evoke a sense of systematic efficiency and technological proficiency.

## Colors
This design system utilizes a high-contrast palette to establish immediate hierarchy. 
- **Primary (Deep Navy):** Used for headlines, heavy backgrounds, and primary branding to convey stability and institutional trust.
- **Secondary (Safety Orange):** Reserved strictly for action-oriented highlights, status indicators, and critical "call-to-attention" elements like contact buttons or key achievements.
- **Tertiary (Industrial Teal):** Used for data visualization, skill categories, and secondary accents to provide a professional, modern technical edge.
- **Neutral (Slate):** Employed for body text and metadata to maintain high legibility without the harshness of pure black.

## Typography
The typography system prioritizes clarity and information density. **Inter** provides a neutral, highly readable foundation for both headings and body copy. 

To introduce a "logistics" feel, **JetBrains Mono** is introduced for labels, dates, and technical metadata—mimicking the aesthetic of shipping manifests and tracking numbers. Use `label-caps` in uppercase for section headers or small data points to create a distinct visual texture compared to the narrative body text.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop, optimized for A4/Letter proportions to ensure print-readiness. A 12-column grid is used for the main body, typically split into a 4-column sidebar (contact, skills, education) and an 8-column main track (experience, summary).

Spacing follows a strict 4px base unit. 
- Use `section-gap` (40px) to separate major blocks like "Experience" from "Education".
- Use `element-gap` (12px) for vertical spacing between individual list items or badges.
- On mobile, the layout reflows to a single column with `margin-mobile` (16px) gutters.

## Elevation & Depth
In alignment with a professional and clean aesthetic, this design system avoids heavy shadows. 
- **Tonal Layers:** Use subtle background fills (#F8FAFC) to differentiate the sidebar from the main content track.
- **Low-contrast Outlines:** Cards and skill badges should use 1px borders in a light neutral shade (#E2E8F0) rather than shadows.
- **Active Elevation:** Only use a very soft, diffused shadow (0px 4px 12px, 5% opacity black) for interactive components like "Download CV" buttons or hovered experience cards.

## Shapes
The shape language is **Soft** and precise. A uniform border radius of 4px (`0.25rem`) is applied to almost all elements to maintain a professional, organized look. 

- **Buttons & Skill Badges:** Use the standard 4px radius.
- **Timeline Nodes:** Should be perfectly circular to contrast against the linear, rectangular nature of the rest of the UI.
- **Profile Images:** Use a slightly larger `rounded-lg` (8px) or a full circle if the brand needs more approachability.

## Components

### Skill Badges
Small, rectangular tags using the `label-caps` typography. Backgrounds should be a very pale version of the Tertiary Teal (5% opacity) with a 1px solid Teal border.

### Experience Timeline
A vertical 2px line in Light Neutral (#E2E8F0). Individual roles are marked by a 12px Primary Navy circle. The circle becomes Secondary Orange for the "Current" or "Most Recent" role.

### Contact Information Cards
Compact blocks with a small monochrome icon (Primary Navy) aligned left of the text. Text is a mix of `label-caps` for the category and `body-sm` for the actual contact detail.

### Buttons
Primary buttons use the Primary Navy background with white text. Secondary/Highlight buttons (like "Hire Me" or "Export") use the Secondary Orange to pop against the blue-heavy layout.

### Input Fields (for Contact Forms)
Minimalist style: a 1px bottom-border only, or a full 1px light border with 4px roundedness. Use `body-sm` for placeholder text.