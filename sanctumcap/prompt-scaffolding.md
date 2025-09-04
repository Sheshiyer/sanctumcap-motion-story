# SanctumCap Website Generation Prompt Scaffolding

## System Context
You are an expert web developer creating a sophisticated real estate investment website for SanctumCap. Use the provided PRD, component types, and website copy to generate complete, production-ready sections with contextual assets and professional iconography.

## Required Files Reference
- **PRD.md**: Complete technical specifications and component requirements
- **component-types.ts**: TypeScript interfaces for all components
- **website-copy.md**: Brand-aligned content and messaging
- **color-system.md**: Brand colors and design tokens
- **design-tokens.md**: Spacing, typography, and animation specifications

## Generation Instructions

### 1. Navigation Component
```typescript
// Generate based on NavigationProps interface
// Use website-copy.md for menu items and branding
// Implement smooth scroll animations and mobile responsiveness
```

**Content Requirements:**
- Logo: SanctumCap wordmark with professional real estate icon (building/tower silhouette)
- Menu items: From website-copy.md navigation section
- CTA button: "Get Started" or "Invest Now"
- Mobile hamburger: Custom animated lines (no emoji)

**Image Assets:**
- Logo icon: Modern building/tower silhouette in SVG format
- Background: Subtle geometric pattern overlay
- Keywords: ['corporate logo', 'real estate icon', 'professional branding']

### 2. Hero Section
```typescript
// Generate based on HeroSectionProps interface
// Implement world map with investment locations
// Use typography animations from design-tokens.md
```

**Content Requirements:**
- Title: From website-copy.md hero section
- Subtitle: Investment opportunity tagline
- Description: Value proposition paragraph
- CTA buttons: Primary and secondary actions
- World map: Interactive points showing global investments

**Image Assets:**
- Background: Luxury city skyline at golden hour
- World map: Clean, modern world map SVG
- Investment markers: Custom location pins (no default map pins)
- Keywords: ['luxury real estate skyline', 'modern city architecture', 'investment opportunities']

### 3. Investment Metrics Section
```typescript
// Generate based on InvestmentMetricsProps interface
// Implement animated counters with spring physics
// Use MetricItem[] from component types
```

**Content Requirements:**
- Metrics: Portfolio value, properties, investors, ROI
- Animated counters: From 0 to target values
- Icons: Professional financial/real estate icons
- Layout: Responsive grid with hover effects

**Image Assets:**
- Background: Abstract financial growth pattern
- Icons: Custom SVG icons for each metric (growth chart, building, users, percentage)
- Keywords: ['financial growth visualization', 'investment metrics', 'success indicators']

### 4. Company Journey Timeline
```typescript
// Generate based on CompanyJourneyProps interface
// Implement TimelineItem[] with milestone animations
// Use alternating layout with progress indicators
```

**Content Requirements:**
- Timeline items: Company milestones from website-copy.md
- Years: 2018-2024 key achievements
- Descriptions: Growth story and major developments
- Metrics: Portfolio growth at each milestone

**Image Assets:**
- Timeline images: Professional milestone photography
- Progress line: Animated SVG path
- Milestone icons: Custom achievement badges
- Keywords: ['company milestones', 'business growth timeline', 'achievement photography']

### 5. Investor Partners Grid
```typescript
// Generate based on InvestorPartnersProps interface
// Implement masonry layout with hover testimonials
// Use InvestorPartner[] interface
```

**Content Requirements:**
- Partner logos: High-profile investment firms
- Testimonials: Success stories and quotes
- Investment amounts: Portfolio contributions
- Categories: Institutional, private, strategic partners

**Image Assets:**
- Partner logos: Clean, professional company logos
- Background cards: Subtle gradient overlays
- Testimonial portraits: Professional headshots
- Keywords: ['investment firm logos', 'professional business portraits', 'corporate partnerships']

### 6. GDP Growth Visualization
```typescript
// Generate based on GDPGrowthProps interface
// Implement interactive charts with Recharts
// Use GDPDataPoint[] with animation triggers
```

**Content Requirements:**
- Data points: Real estate market growth 2020-2024
- Chart type: Animated area chart with gradient fill
- Tooltips: Detailed market insights
- Annotations: Key market events and trends

**Image Assets:**
- Chart background: Subtle grid pattern
- Data visualization: Custom chart styling
- Market indicators: Professional chart icons
- Keywords: ['financial data visualization', 'market growth charts', 'economic indicators']

### 7. Developer Partners Showcase
```typescript
// Generate based on DeveloperPartnersProps interface
// Implement tabs layout with project galleries
// Use DeveloperPartner[] and DeveloperProject[] interfaces
```

**Content Requirements:**
- Developer profiles: Leading construction partners
- Project showcases: Luxury developments
- Metrics: Square footage, units, completion dates
- Status indicators: Completed, ongoing, planned

**Image Assets:**
- Project photography: High-end architectural photography
- Developer logos: Professional construction company branding
- Gallery images: Interior and exterior project shots
- Keywords: ['luxury real estate photography', 'modern architecture', 'premium developments']

### 8. Contact Section
```typescript
// Generate based on ContactSectionProps interface
// Implement form with validation and map integration
// Use ContactFormField[] interface
```

**Content Requirements:**
- Contact form: Name, email, phone, investment interest
- Office information: Address, hours, contact details
- Map integration: Office location with custom markers
- Success/error states: User feedback messaging

**Image Assets:**
- Office photography: Professional workspace imagery
- Map markers: Custom location pins
- Form icons: Clean input field indicators
- Keywords: ['modern office space', 'professional workspace', 'corporate headquarters']

## Asset Generation Guidelines

### Professional Icons (NO EMOJIS)
```typescript
// Use Lucide React or custom SVG icons
const iconLibrary = {
  // Financial icons
  growth: <TrendingUp className="w-6 h-6" />,
  portfolio: <PieChart className="w-6 h-6" />,
  investment: <DollarSign className="w-6 h-6" />,
  
  // Real estate icons
  building: <Building className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  location: <MapPin className="w-6 h-6" />,
  
  // Business icons
  users: <Users className="w-6 h-6" />,
  handshake: <Handshake className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  
  // Navigation icons
  menu: <Menu className="w-6 h-6" />,
  close: <X className="w-6 h-6" />,
  arrow: <ArrowRight className="w-6 h-6" />
};
```

### Image Asset Sources
```typescript
const assetSources = {
  unsplash: {
    collections: [
      'real-estate',
      'architecture',
      'business',
      'finance',
      'luxury'
    ],
    keywords: [
      'luxury real estate',
      'modern architecture',
      'business professionals',
      'financial growth',
      'city skyline'
    ]
  },
  
  pexels: {
    categories: [
      'business',
      'architecture',
      'technology',
      'people'
    ]
  },
  
  customSVG: {
    icons: 'Lucide React library',
    illustrations: 'Custom branded graphics',
    patterns: 'Geometric background elements'
  }
};
```

### Content Integration
```typescript
// Merge website-copy.md content with component structure
const contentMapping = {
  hero: {
    title: websiteCopy.hero.title,
    subtitle: websiteCopy.hero.subtitle,
    description: websiteCopy.hero.description,
    cta: websiteCopy.hero.ctaButtons
  },
  
  metrics: {
    title: websiteCopy.metrics.sectionTitle,
    items: websiteCopy.metrics.items.map(item => ({
      ...item,
      icon: getIconForMetric(item.type),
      animationDelay: item.order * 200
    }))
  },
  
  timeline: {
    title: websiteCopy.journey.title,
    items: websiteCopy.journey.milestones.map(milestone => ({
      ...milestone,
      image: getTimelineImage(milestone.year),
      icon: getMilestoneIcon(milestone.type)
    }))
  }
};
```

## Animation Implementation
```typescript
// Use design-tokens.md animation specifications
const animations = {
  // Typography animations
  titleReveal: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  
  // Scroll-triggered animations
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, margin: '-100px' }
  },
  
  // Counter animations
  counterUp: {
    initial: { value: 0 },
    animate: { value: targetValue },
    transition: { duration: 2, ease: 'easeOut' }
  },
  
  // Hover effects
  cardHover: {
    whileHover: { 
      scale: 1.02, 
      y: -5,
      transition: { type: 'spring', stiffness: 300 }
    }
  }
};
```

## Responsive Design
```typescript
// Use breakpoints from design-tokens.md
const responsive = {
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  },
  
  layouts: {
    hero: {
      mobile: 'single-column',
      tablet: 'split-layout',
      desktop: 'full-width-background'
    },
    
    metrics: {
      mobile: '2-column-grid',
      tablet: '3-column-grid',
      desktop: '4-column-grid'
    },
    
    timeline: {
      mobile: 'vertical-stack',
      tablet: 'alternating-cards',
      desktop: 'horizontal-timeline'
    }
  }
};
```

## Quality Checklist

### Content Quality
- [ ] All copy from website-copy.md integrated
- [ ] Brand voice and tone consistent
- [ ] Call-to-actions clear and compelling
- [ ] Technical specifications accurate

### Visual Quality
- [ ] High-resolution images (min 1920px width)
- [ ] Professional photography style
- [ ] Consistent color palette from color-system.md
- [ ] No emoji icons - only professional SVGs

### Technical Quality
- [ ] TypeScript interfaces implemented correctly
- [ ] Responsive design across all breakpoints
- [ ] Accessibility standards met (WCAG 2.1 AA)
- [ ] Performance optimized (Core Web Vitals)

### Animation Quality
- [ ] Smooth 60fps animations
- [ ] Reduced motion support
- [ ] Scroll-triggered animations properly timed
- [ ] Physics-based spring animations

## Output Format

Generate each section as a complete React component with:
1. **TypeScript interface implementation**
2. **Framer Motion animations**
3. **Tailwind CSS styling**
4. **Responsive design**
5. **Accessibility attributes**
6. **Professional iconography**
7. **Contextual image placeholders**
8. **Brand-aligned content**

Each component should be production-ready with proper error handling, loading states, and performance optimizations as specified in the PRD.

---

**Remember**: This is a premium real estate investment platform. Every element should convey trust, sophistication, and professional excellence. No shortcuts, no placeholder content, no emoji icons - only polished, investment-grade quality.