# SanctumCap Color System

Based on the SanctumCap Brand Guidelines with #18275A (Royal Blue Gradient) as the primary color.

## Primary Color Palette

### Primary Brand Color
```css
--primary: #18275A;           /* Royal Blue Gradient - Primary */
--primary-50: #f0f2f7;        /* Lightest tint */
--primary-100: #d9e0ed;
--primary-200: #b3c1db;
--primary-300: #8ca2c9;
--primary-400: #6683b7;
--primary-500: #18275A;       /* Base primary */
--primary-600: #152248;
--primary-700: #121d3e;
--primary-800: #0f1834;
--primary-900: #0c132a;
--primary-950: #080e20;
```

### Core Brand Colors
```css
/* Deep Midnight Blue */
--midnight: #0F1A3C;
--midnight-50: #f0f1f5;
--midnight-100: #d9dce6;
--midnight-200: #b3b9cd;
--midnight-300: #8c96b4;
--midnight-400: #66739b;
--midnight-500: #0F1A3C;      /* Base */
--midnight-600: #0d1635;
--midnight-700: #0b122e;
--midnight-800: #090e27;
--midnight-900: #070a20;

/* Luxe Metallic Gold */
--gold: #D4AF37;
--gold-50: #fdfcf7;
--gold-100: #faf6e6;
--gold-200: #f5edcc;
--gold-300: #f0e4b3;
--gold-400: #ebdb99;
--gold-500: #D4AF37;          /* Base */
--gold-600: #c19f32;
--gold-700: #ae8f2d;
--gold-800: #9b7f28;
--gold-900: #886f23;

/* Rich Charcoal */
--charcoal: #1C1C2D;
--charcoal-50: #f1f1f2;
--charcoal-100: #dcdcdf;
--charcoal-200: #b9b9bf;
--charcoal-300: #96969f;
--charcoal-400: #73737f;
--charcoal-500: #1C1C2D;      /* Base */
--charcoal-600: #191928;
--charcoal-700: #161623;
--charcoal-800: #13131e;
--charcoal-900: #101019;
```

## Secondary Color Palette

```css
/* Cool Platinum */
--platinum: #E6E6EB;
--platinum-50: #fefefe;
--platinum-100: #fcfcfd;
--platinum-200: #f9f9fb;
--platinum-300: #f6f6f9;
--platinum-400: #f3f3f7;
--platinum-500: #E6E6EB;      /* Base */
--platinum-600: #cfcfd4;
--platinum-700: #b8b8bd;
--platinum-800: #a1a1a6;
--platinum-900: #8a8a8f;

/* Warm Sandstone */
--sandstone: #BFA980;
--sandstone-50: #faf9f7;
--sandstone-100: #f3f0e8;
--sandstone-200: #e7e1d1;
--sandstone-300: #dbd2ba;
--sandstone-400: #cfc3a3;
--sandstone-500: #BFA980;     /* Base */
--sandstone-600: #ac9873;
--sandstone-700: #998766;
--sandstone-800: #867659;
--sandstone-900: #73654c;

/* Deep Maroon */
--maroon: #5A2E2E;
--maroon-50: #f6f2f2;
--maroon-100: #e8dada;
--maroon-200: #d1b5b5;
--maroon-300: #ba9090;
--maroon-400: #a36b6b;
--maroon-500: #5A2E2E;        /* Base */
--maroon-600: #512929;
--maroon-700: #482424;
--maroon-800: #3f1f1f;
--maroon-900: #361a1a;

/* Slate Gray */
--slate: #8B8C92;
--slate-50: #f8f8f9;
--slate-100: #eeeeef;
--slate-200: #dddde0;
--slate-300: #ccccD1;
--slate-400: #bbbbc2;
--slate-500: #8B8C92;         /* Base */
--slate-600: #7d7e83;
--slate-700: #6f7074;
--slate-800: #616265;
--slate-900: #535456;
```

## Semantic Color System

### UI States
```css
/* Success */
--success: #10b981;
--success-light: #d1fae5;
--success-dark: #047857;

/* Warning */
--warning: #f59e0b;
--warning-light: #fef3c7;
--warning-dark: #d97706;

/* Error */
--error: #ef4444;
--error-light: #fee2e2;
--error-dark: #dc2626;

/* Info */
--info: var(--primary);
--info-light: var(--primary-100);
--info-dark: var(--primary-700);
```

### Background System
```css
/* Dark Theme (Primary) */
--bg-primary: var(--midnight);        /* #0F1A3C */
--bg-secondary: var(--charcoal);      /* #1C1C2D */
--bg-tertiary: var(--primary-800);    /* Darker primary */
--bg-accent: var(--primary);          /* #18275A */

/* Light Theme (Alternative) */
--bg-light-primary: var(--platinum);  /* #E6E6EB */
--bg-light-secondary: #ffffff;
--bg-light-tertiary: var(--platinum-200);
--bg-light-accent: var(--primary-50);
```

### Text Color System
```css
/* On Dark Backgrounds */
--text-primary-dark: var(--platinum);     /* #E6E6EB */
--text-secondary-dark: var(--gold);       /* #D4AF37 */
--text-accent-dark: var(--sandstone);     /* #BFA980 */
--text-muted-dark: var(--slate);          /* #8B8C92 */

/* On Light Backgrounds */
--text-primary-light: var(--midnight);    /* #0F1A3C */
--text-secondary-light: var(--primary);   /* #18275A */
--text-accent-light: var(--maroon);       /* #5A2E2E */
--text-muted-light: var(--slate-700);
```

## Component-Specific Colors

### Navigation
```css
--nav-bg: rgba(15, 26, 60, 0.95);        /* Midnight with opacity */
--nav-text: var(--platinum);
--nav-accent: var(--gold);
--nav-hover: var(--primary);
```

### Cards & Surfaces
```css
--card-bg: var(--charcoal);              /* #1C1C2D */
--card-border: var(--primary-700);
--card-hover: var(--primary-800);
--card-shadow: rgba(15, 26, 60, 0.3);
```

### Interactive Elements
```css
--button-primary-bg: var(--gold);        /* #D4AF37 */
--button-primary-text: var(--midnight);
--button-primary-hover: var(--gold-600);

--button-secondary-bg: var(--primary);   /* #18275A */
--button-secondary-text: var(--platinum);
--button-secondary-hover: var(--primary-600);

--button-outline-border: var(--gold);
--button-outline-text: var(--gold);
--button-outline-hover-bg: var(--gold);
--button-outline-hover-text: var(--midnight);
```

### Form Elements
```css
--input-bg: var(--charcoal);
--input-border: var(--slate);
--input-border-focus: var(--gold);
--input-text: var(--platinum);
--input-placeholder: var(--slate);
```

## Gradient System

### Primary Gradients
```css
--gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--midnight) 100%);
--gradient-gold: linear-gradient(135deg, var(--gold) 0%, var(--sandstone) 100%);
--gradient-hero: linear-gradient(135deg, var(--midnight) 0%, var(--primary) 50%, var(--charcoal) 100%);
```

### Overlay Gradients
```css
--overlay-dark: linear-gradient(180deg, rgba(15, 26, 60, 0.8) 0%, rgba(28, 28, 45, 0.9) 100%);
--overlay-light: linear-gradient(180deg, rgba(230, 230, 235, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%);
```

## Usage Guidelines

### Color Combinations

**High Contrast (Accessibility)**
- Text: `--platinum` on `--midnight` background
- Accent: `--gold` on `--midnight` background
- Interactive: `--gold` buttons with `--midnight` text

**Brand Hierarchy**
1. **Primary**: `--primary` (#18275A) - Main brand actions, links
2. **Secondary**: `--gold` (#D4AF37) - CTAs, highlights, luxury elements
3. **Tertiary**: `--midnight` (#0F1A3C) - Backgrounds, depth
4. **Neutral**: `--platinum` (#E6E6EB) - Body text, secondary content

**Emotional Associations**
- **Trust & Stability**: Primary blues (`--primary`, `--midnight`)
- **Luxury & Success**: Gold tones (`--gold`, `--sandstone`)
- **Sophistication**: Dark neutrals (`--charcoal`, `--slate`)
- **Clarity & Space**: Light neutrals (`--platinum`)

### Implementation Notes

1. **Primary Color Usage**: Use `--primary` (#18275A) for:
   - Primary navigation elements
   - Key interactive components
   - Section dividers and accents
   - Hover states on secondary elements

2. **Accessibility**: All color combinations maintain WCAG AA contrast ratios

3. **Dark Theme First**: The color system is optimized for dark backgrounds as per brand guidelines

4. **Metallic Gold**: Use sparingly for premium elements, CTAs, and luxury positioning

5. **Responsive Considerations**: Lighter tints available for mobile interfaces where needed