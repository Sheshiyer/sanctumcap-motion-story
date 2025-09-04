# SanctumCap Design Tokens System

Comprehensive design tokens for consistent spacing, typography, animations, and component styling.

## Spacing System

### Base Spacing Scale
```css
:root {
  /* Base unit: 4px */
  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 0.125rem;  /* 2px */
  --space-1: 0.25rem;     /* 4px */
  --space-1-5: 0.375rem;  /* 6px */
  --space-2: 0.5rem;      /* 8px */
  --space-2-5: 0.625rem;  /* 10px */
  --space-3: 0.75rem;     /* 12px */
  --space-3-5: 0.875rem;  /* 14px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;     /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-7: 1.75rem;     /* 28px */
  --space-8: 2rem;        /* 32px */
  --space-9: 2.25rem;     /* 36px */
  --space-10: 2.5rem;     /* 40px */
  --space-11: 2.75rem;    /* 44px */
  --space-12: 3rem;       /* 48px */
  --space-14: 3.5rem;     /* 56px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
  --space-28: 7rem;       /* 112px */
  --space-32: 8rem;       /* 128px */
  --space-36: 9rem;       /* 144px */
  --space-40: 10rem;      /* 160px */
  --space-44: 11rem;      /* 176px */
  --space-48: 12rem;      /* 192px */
  --space-52: 13rem;      /* 208px */
  --space-56: 14rem;      /* 224px */
  --space-60: 15rem;      /* 240px */
  --space-64: 16rem;      /* 256px */
  --space-72: 18rem;      /* 288px */
  --space-80: 20rem;      /* 320px */
  --space-96: 24rem;      /* 384px */
}
```

### Semantic Spacing
```css
:root {
  /* Component Spacing */
  --spacing-component-xs: var(--space-2);   /* 8px */
  --spacing-component-sm: var(--space-3);   /* 12px */
  --spacing-component-md: var(--space-4);   /* 16px */
  --spacing-component-lg: var(--space-6);   /* 24px */
  --spacing-component-xl: var(--space-8);   /* 32px */
  --spacing-component-2xl: var(--space-12); /* 48px */
  
  /* Section Spacing */
  --spacing-section-xs: var(--space-16);    /* 64px */
  --spacing-section-sm: var(--space-20);    /* 80px */
  --spacing-section-md: var(--space-24);    /* 96px */
  --spacing-section-lg: var(--space-32);    /* 128px */
  --spacing-section-xl: var(--space-40);    /* 160px */
  --spacing-section-2xl: var(--space-48);   /* 192px */
  
  /* Layout Spacing */
  --spacing-layout-xs: var(--space-4);      /* 16px */
  --spacing-layout-sm: var(--space-6);      /* 24px */
  --spacing-layout-md: var(--space-8);      /* 32px */
  --spacing-layout-lg: var(--space-12);     /* 48px */
  --spacing-layout-xl: var(--space-16);     /* 64px */
  --spacing-layout-2xl: var(--space-24);    /* 96px */
}
```

## Typography System

### Font Families
```css
:root {
  /* Primary Typefaces from Brand Guidelines */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-heading: 'Raleway', 'Helvetica Neue', sans-serif;
  --font-body: 'Lato', 'Open Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### Font Sizes
```css
:root {
  /* Font Size Scale */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  --text-7xl: 4.5rem;     /* 72px */
  --text-8xl: 6rem;       /* 96px */
  --text-9xl: 8rem;       /* 128px */
}
```

### Line Heights
```css
:root {
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

### Font Weights
```css
:root {
  --font-thin: 100;
  --font-extralight: 200;
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
}
```

### Typography Presets
```css
:root {
  /* Display Typography */
  --typography-display-xl: var(--font-display) var(--font-bold) var(--text-8xl)/var(--leading-tight);
  --typography-display-lg: var(--font-display) var(--font-bold) var(--text-7xl)/var(--leading-tight);
  --typography-display-md: var(--font-display) var(--font-bold) var(--text-6xl)/var(--leading-tight);
  --typography-display-sm: var(--font-display) var(--font-bold) var(--text-5xl)/var(--leading-tight);
  
  /* Heading Typography */
  --typography-h1: var(--font-heading) var(--font-bold) var(--text-4xl)/var(--leading-tight);
  --typography-h2: var(--font-heading) var(--font-semibold) var(--text-3xl)/var(--leading-tight);
  --typography-h3: var(--font-heading) var(--font-semibold) var(--text-2xl)/var(--leading-snug);
  --typography-h4: var(--font-heading) var(--font-medium) var(--text-xl)/var(--leading-snug);
  --typography-h5: var(--font-heading) var(--font-medium) var(--text-lg)/var(--leading-normal);
  --typography-h6: var(--font-heading) var(--font-medium) var(--text-base)/var(--leading-normal);
  
  /* Body Typography */
  --typography-body-xl: var(--font-body) var(--font-normal) var(--text-xl)/var(--leading-relaxed);
  --typography-body-lg: var(--font-body) var(--font-normal) var(--text-lg)/var(--leading-relaxed);
  --typography-body-md: var(--font-body) var(--font-normal) var(--text-base)/var(--leading-normal);
  --typography-body-sm: var(--font-body) var(--font-normal) var(--text-sm)/var(--leading-normal);
  --typography-body-xs: var(--font-body) var(--font-normal) var(--text-xs)/var(--leading-normal);
  
  /* Caption Typography */
  --typography-caption: var(--font-body) var(--font-medium) var(--text-sm)/var(--leading-tight);
  --typography-overline: var(--font-body) var(--font-semibold) var(--text-xs)/var(--leading-tight);
}
```

## Animation Tokens

### Duration
```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 750ms;
  --duration-slowest: 1000ms;
}
```

### Easing Functions
```css
:root {
  /* Standard Easing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Custom Easing */
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-anticipate: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Physics-based */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-gentle: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Spring Physics
```css
:root {
  /* Framer Motion Spring Configs */
  --spring-gentle: { type: "spring", stiffness: 120, damping: 14 };
  --spring-wobbly: { type: "spring", stiffness: 180, damping: 12 };
  --spring-stiff: { type: "spring", stiffness: 400, damping: 30 };
  --spring-slow: { type: "spring", stiffness: 60, damping: 15 };
  --spring-molasses: { type: "spring", stiffness: 40, damping: 20 };
}
```

### Animation Delays
```css
:root {
  --delay-0: 0ms;
  --delay-75: 75ms;
  --delay-100: 100ms;
  --delay-150: 150ms;
  --delay-200: 200ms;
  --delay-300: 300ms;
  --delay-500: 500ms;
  --delay-700: 700ms;
  --delay-1000: 1000ms;
}
```

## Shadow System

```css
:root {
  /* Elevation Shadows */
  --shadow-xs: 0 1px 2px 0 rgba(15, 26, 60, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(15, 26, 60, 0.1), 0 1px 2px 0 rgba(15, 26, 60, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(15, 26, 60, 0.1), 0 2px 4px -1px rgba(15, 26, 60, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(15, 26, 60, 0.1), 0 4px 6px -2px rgba(15, 26, 60, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(15, 26, 60, 0.1), 0 10px 10px -5px rgba(15, 26, 60, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(15, 26, 60, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(15, 26, 60, 0.06);
  
  /* Colored Shadows */
  --shadow-gold: 0 10px 15px -3px rgba(212, 175, 55, 0.2), 0 4px 6px -2px rgba(212, 175, 55, 0.1);
  --shadow-primary: 0 10px 15px -3px rgba(24, 39, 90, 0.3), 0 4px 6px -2px rgba(24, 39, 90, 0.15);
}
```

## Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;   /* 2px */
  --radius-md: 0.375rem;   /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-3xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;
}
```

## Z-Index Scale

```css
:root {
  --z-auto: auto;
  --z-0: 0;
  --z-10: 10;
  --z-20: 20;
  --z-30: 30;
  --z-40: 40;
  --z-50: 50;
  
  /* Semantic Z-Index */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;
}
```

## Breakpoint System

```css
:root {
  /* Breakpoint Values */
  --breakpoint-xs: 475px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

## Component Tokens

### Button Tokens
```css
:root {
  /* Button Sizing */
  --button-height-sm: 2rem;     /* 32px */
  --button-height-md: 2.5rem;   /* 40px */
  --button-height-lg: 3rem;     /* 48px */
  --button-height-xl: 3.5rem;   /* 56px */
  
  --button-padding-x-sm: var(--space-3);
  --button-padding-x-md: var(--space-4);
  --button-padding-x-lg: var(--space-6);
  --button-padding-x-xl: var(--space-8);
  
  /* Button Typography */
  --button-font-sm: var(--text-sm);
  --button-font-md: var(--text-base);
  --button-font-lg: var(--text-lg);
  --button-font-xl: var(--text-xl);
  
  /* Button Radius */
  --button-radius: var(--radius-lg);
}
```

### Input Tokens
```css
:root {
  /* Input Sizing */
  --input-height-sm: 2rem;
  --input-height-md: 2.5rem;
  --input-height-lg: 3rem;
  
  --input-padding-x: var(--space-3);
  --input-padding-y: var(--space-2);
  
  /* Input States */
  --input-border-width: 1px;
  --input-focus-ring-width: 2px;
  --input-focus-ring-offset: 2px;
}
```

### Card Tokens
```css
:root {
  /* Card Spacing */
  --card-padding-sm: var(--space-4);
  --card-padding-md: var(--space-6);
  --card-padding-lg: var(--space-8);
  
  /* Card Styling */
  --card-radius: var(--radius-xl);
  --card-border-width: 1px;
}
```

## Usage Guidelines

### Spacing Usage
- Use semantic spacing tokens for consistent component spacing
- Follow the 4px base unit for all custom spacing
- Use section spacing for major layout divisions
- Use component spacing for internal element spacing

### Typography Usage
- Use display typography for hero sections and major headings
- Use heading typography for section titles and content hierarchy
- Use body typography for readable content
- Maintain consistent line heights for readability

### Animation Usage
- Use `--duration-fast` for micro-interactions
- Use `--duration-normal` for standard transitions
- Use `--duration-slow` for complex animations
- Apply physics-based springs for natural motion

### Implementation Example
```css
.hero-title {
  font: var(--typography-display-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-component-lg);
  animation: fadeInUp var(--duration-slow) var(--ease-spring);
}

.card {
  padding: var(--card-padding-md);
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-lg);
  background: var(--bg-secondary);
  transition: all var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}
```