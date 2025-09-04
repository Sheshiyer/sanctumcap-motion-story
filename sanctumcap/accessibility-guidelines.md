# SanctumCap Accessibility Guidelines & ARIA Patterns

Comprehensive accessibility guidelines ensuring WCAG 2.1 AA compliance and inclusive user experience.

## Overview

This document outlines accessibility requirements, ARIA patterns, and implementation guidelines for the SanctumCap website to ensure compliance with:
- WCAG 2.1 Level AA
- Section 508
- ADA compliance
- Modern accessibility best practices

## Core Accessibility Principles

### 1. Perceivable
- All content must be presentable in ways users can perceive
- Provide text alternatives for non-text content
- Ensure sufficient color contrast
- Make content adaptable to different presentations

### 2. Operable
- All interface components must be operable
- Make all functionality keyboard accessible
- Give users enough time to read content
- Don't use content that causes seizures

### 3. Understandable
- Information and UI operation must be understandable
- Make text readable and understandable
- Make content appear and operate predictably
- Help users avoid and correct mistakes

### 4. Robust
- Content must be robust enough for various assistive technologies
- Maximize compatibility with assistive technologies

## Color and Contrast Requirements

### Contrast Ratios
```css
/* WCAG AA Compliance */
--contrast-normal-text: 4.5:1;     /* Normal text */
--contrast-large-text: 3:1;        /* Large text (18pt+ or 14pt+ bold) */
--contrast-ui-components: 3:1;     /* UI components and graphics */
--contrast-enhanced: 7:1;          /* AAA level for critical content */
```

### SanctumCap Brand Color Accessibility
```css
/* Accessible color combinations */
.text-on-midnight {
  color: var(--platinum); /* #E6E6EB on #0F1A3C = 12.6:1 ✓ */
}

.text-on-primary {
  color: var(--platinum); /* #E6E6EB on #18275A = 9.8:1 ✓ */
}

.gold-on-midnight {
  color: var(--gold); /* #D4AF37 on #0F1A3C = 8.2:1 ✓ */
}

.primary-on-platinum {
  color: var(--primary); /* #18275A on #E6E6EB = 9.8:1 ✓ */
}
```

### Color Usage Guidelines
- Never rely solely on color to convey information
- Use icons, patterns, or text labels alongside color coding
- Provide alternative indicators for interactive states
- Test with color blindness simulators

## Typography Accessibility

### Font Size Requirements
```css
/* Minimum font sizes */
--min-body-text: 16px;        /* Never go below 16px for body text */
--min-caption-text: 14px;     /* Minimum for captions/labels */
--optimal-line-height: 1.5;   /* Optimal line height for readability */
--max-line-length: 80ch;      /* Maximum characters per line */
```

### Typography Best Practices
- Use relative units (rem, em) for scalability
- Maintain consistent line heights
- Ensure adequate spacing between paragraphs
- Use clear, readable fonts (avoid decorative fonts for body text)
- Provide sufficient white space around text

## Keyboard Navigation

### Focus Management
```css
/* Focus indicators */
.focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--midnight);
  color: var(--platinum);
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-sm);
  z-index: var(--z-modal);
}

.skip-link:focus {
  top: 6px;
}
```

### Tab Order Requirements
1. Skip navigation link (first focusable element)
2. Main navigation items
3. Page content in logical reading order
4. Footer navigation

### Keyboard Shortcuts
- `Tab`: Move to next focusable element
- `Shift + Tab`: Move to previous focusable element
- `Enter/Space`: Activate buttons and links
- `Escape`: Close modals, dropdowns, or cancel actions
- `Arrow keys`: Navigate within components (carousels, tabs)

## ARIA Patterns and Implementation

### Navigation Component
```tsx
// Navigation ARIA pattern
<nav role="navigation" aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a 
        role="menuitem" 
        href="/about" 
        aria-current={isActive ? 'page' : undefined}
      >
        About Us
      </a>
    </li>
  </ul>
</nav>

// Mobile menu toggle
<button
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
  aria-label="Toggle navigation menu"
>
  <span aria-hidden="true">☰</span>
</button>
```

### Hero Section
```tsx
// Hero section with proper headings
<section 
  role="banner" 
  aria-labelledby="hero-title"
>
  <h1 id="hero-title">
    <span aria-label="SanctumCap Real Estate Investment">
      {/* Animated text content */}
    </span>
  </h1>
  
  {/* World map with accessible points */}
  <div 
    role="img" 
    aria-label="Global investment locations map"
    aria-describedby="map-description"
  >
    <div id="map-description" className="sr-only">
      Interactive map showing SanctumCap investment locations across major cities
    </div>
    
    {mapPoints.map(point => (
      <button
        key={point.id}
        role="button"
        aria-label={`Investment location: ${point.label}, Value: ${point.value}`}
        tabIndex={0}
      >
        {/* Point visualization */}
      </button>
    ))}
  </div>
</section>
```

### Investment Metrics
```tsx
// Metrics with live regions for counter animations
<section aria-labelledby="metrics-title">
  <h2 id="metrics-title">Investment Performance</h2>
  
  <div role="group" aria-label="Key performance metrics">
    {metrics.map(metric => (
      <div key={metric.id} role="group">
        <dt>{metric.label}</dt>
        <dd 
          aria-live="polite" 
          aria-atomic="true"
          aria-label={`${metric.label}: ${metric.formattedValue}`}
        >
          <span aria-hidden="true">{animatedValue}</span>
          <span className="sr-only">{metric.formattedValue}</span>
        </dd>
      </div>
    ))}
  </div>
</section>
```

### Timeline Component
```tsx
// Company journey timeline
<section aria-labelledby="timeline-title">
  <h2 id="timeline-title">Company Journey</h2>
  
  <ol 
    role="list" 
    aria-label="Company milestones timeline"
  >
    {timelineItems.map((item, index) => (
      <li 
        key={item.id}
        role="listitem"
        aria-labelledby={`timeline-${item.id}-title`}
        aria-describedby={`timeline-${item.id}-desc`}
      >
        <article>
          <h3 id={`timeline-${item.id}-title`}>
            <time dateTime={item.year}>{item.year}</time>
            {item.title}
          </h3>
          <p id={`timeline-${item.id}-desc`}>
            {item.description}
          </p>
        </article>
      </li>
    ))}
  </ol>
</section>
```

### Interactive Charts
```tsx
// GDP Growth Chart with accessibility
<section aria-labelledby="chart-title">
  <h2 id="chart-title">GDP Growth Visualization</h2>
  
  <div 
    role="img"
    aria-labelledby="chart-title"
    aria-describedby="chart-summary"
  >
    <div id="chart-summary" className="sr-only">
      Line chart showing GDP growth from {startYear} to {endYear}, 
      with peak growth of {maxGrowth}% in {peakYear}
    </div>
    
    {/* Chart implementation with keyboard navigation */}
    <svg role="presentation" aria-hidden="true">
      {/* Visual chart elements */}
    </svg>
    
    {/* Data table alternative */}
    <table className="sr-only">
      <caption>GDP Growth Data</caption>
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Growth Percentage</th>
        </tr>
      </thead>
      <tbody>
        {chartData.map(point => (
          <tr key={point.year}>
            <td>{point.year}</td>
            <td>{point.value}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
```

### Form Components
```tsx
// Contact form with comprehensive accessibility
<form 
  onSubmit={handleSubmit}
  aria-labelledby="contact-form-title"
  noValidate
>
  <h2 id="contact-form-title">Contact Us</h2>
  
  {/* Form fields with proper labeling */}
  <div className="form-group">
    <label htmlFor="name" className="required">
      Full Name
      <span aria-label="required">*</span>
    </label>
    <input
      id="name"
      type="text"
      required
      aria-required="true"
      aria-invalid={errors.name ? 'true' : 'false'}
      aria-describedby={errors.name ? 'name-error' : 'name-help'}
    />
    <div id="name-help" className="help-text">
      Enter your full legal name
    </div>
    {errors.name && (
      <div id="name-error" role="alert" className="error-text">
        {errors.name}
      </div>
    )}
  </div>
  
  {/* Submit button with loading state */}
  <button 
    type="submit" 
    disabled={isSubmitting}
    aria-describedby="submit-status"
  >
    {isSubmitting ? 'Sending...' : 'Send Message'}
  </button>
  
  <div id="submit-status" aria-live="polite" aria-atomic="true">
    {submitStatus && (
      <span role={submitStatus.type === 'error' ? 'alert' : 'status'}>
        {submitStatus.message}
      </span>
    )}
  </div>
</form>
```

### Modal Components
```tsx
// Modal with focus management
<div 
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <div className="modal-header">
    <h2 id="modal-title">{title}</h2>
    <button 
      aria-label="Close modal"
      onClick={onClose}
    >
      ×
    </button>
  </div>
  
  <div id="modal-description" className="modal-content">
    {children}
  </div>
</div>
```

## Animation Accessibility

### Reduced Motion Support
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Disable parallax and complex animations */
  .parallax-element {
    transform: none !important;
  }
  
  /* Keep essential animations but reduce duration */
  .loading-spinner {
    animation-duration: 0.5s !important;
  }
}

/* Provide alternative feedback for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animated-counter {
    /* Show final value immediately */
    animation: none;
  }
  
  .animated-counter::after {
    content: " (animated)";
    font-size: 0.8em;
    opacity: 0.7;
  }
}
```

### Animation Guidelines
- Provide `prefers-reduced-motion` alternatives
- Avoid flashing content (max 3 flashes per second)
- Use `aria-live` regions for dynamic content updates
- Provide pause/play controls for auto-playing content
- Ensure animations don't interfere with screen readers

## Screen Reader Support

### Screen Reader Only Content
```css
/* Screen reader only utility class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### Content Structure
- Use semantic HTML elements
- Provide proper heading hierarchy (h1 → h2 → h3)
- Use lists for grouped content
- Provide alternative text for images
- Use captions and descriptions for complex content

## Testing Checklist

### Automated Testing
- [ ] Run axe-core accessibility tests
- [ ] Validate HTML markup
- [ ] Check color contrast ratios
- [ ] Test with Lighthouse accessibility audit
- [ ] Validate ARIA implementation

### Manual Testing
- [ ] Navigate entire site using only keyboard
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify focus indicators are visible
- [ ] Test with 200% zoom level
- [ ] Verify content reflows properly
- [ ] Test with reduced motion settings
- [ ] Validate form error handling
- [ ] Check skip navigation functionality

### User Testing
- [ ] Test with users who use assistive technologies
- [ ] Gather feedback on navigation patterns
- [ ] Validate content comprehension
- [ ] Test task completion rates

## Implementation Guidelines

### Development Workflow
1. **Design Phase**: Include accessibility requirements in design specs
2. **Development Phase**: Implement accessibility features from the start
3. **Testing Phase**: Run automated and manual accessibility tests
4. **Review Phase**: Conduct accessibility code reviews
5. **Deployment Phase**: Monitor accessibility metrics

### Code Review Checklist
- [ ] Semantic HTML structure
- [ ] Proper ARIA attributes
- [ ] Keyboard navigation support
- [ ] Focus management
- [ ] Color contrast compliance
- [ ] Alternative text for images
- [ ] Form labeling and validation
- [ ] Error handling and messaging
- [ ] Reduced motion support

### Performance Considerations
- Minimize ARIA attribute usage (only when necessary)
- Optimize screen reader announcements
- Ensure accessibility features don't impact performance
- Use efficient focus management techniques

## Resources and Tools

### Testing Tools
- **axe DevTools**: Browser extension for accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Built-in Chrome accessibility audit
- **Color Oracle**: Color blindness simulator
- **Stark**: Design tool accessibility plugin

### Screen Readers
- **NVDA**: Free Windows screen reader
- **JAWS**: Popular Windows screen reader
- **VoiceOver**: Built-in macOS/iOS screen reader
- **TalkBack**: Built-in Android screen reader

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

## Maintenance and Updates

### Regular Audits
- Monthly automated accessibility scans
- Quarterly manual testing sessions
- Annual comprehensive accessibility review
- User feedback collection and analysis

### Training and Documentation
- Accessibility training for development team
- Updated guidelines documentation
- Best practices sharing sessions
- Accessibility champion program

This comprehensive accessibility framework ensures the SanctumCap website provides an inclusive, accessible experience for all users while maintaining the sophisticated design and animation requirements.