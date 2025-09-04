# SanctumCap Website - Product Requirements Document

## Project Overview

### Objective
Create a narrative-driven, animated website for SanctumCap that showcases real estate investment opportunities through sophisticated UI components and physics-based animations. The website should tell a compelling story of growth, trust, and investment success through motion design.

### Technical Stack
- **Framework**: Next.js 14+ with TypeScript (Static Site Generation)
- **Content**: All content statically typed in code (no backend/APIs required)
- **Animation**: Framer Motion with physics-based interactions
- **Styling**: Tailwind CSS with custom design system
- **Components**: Custom components inspired by ShadCN/Aceternity but fully bespoke
- **Typography**: Custom animated typography system
- **Performance**: Optimized for 60fps animations and smooth scrolling
- **Images**: Contextual assets from Unsplash, Pexels, and premium stock libraries

### Content Management
- **Static Content**: All copy, data, and configurations hardcoded in TypeScript/JSON files
- **Editable via Code**: Content updates through direct code editor modifications
- **No CMS Required**: Pure static site with version-controlled content
- **Image Assets**: Curated high-quality images from popular online libraries

### Design Philosophy
- **Narrative-Driven**: Each section tells part of the investment success story
- **Physics-Based**: All animations use realistic physics for natural feel
- **Progressive Disclosure**: Content reveals as user scrolls through the journey
- **Micro-Interactions**: Every element responds to user interaction
- **Performance-First**: Smooth animations without compromising load times

---

## Design System

### Color System

Based on SanctumCap Brand Guidelines with comprehensive color scales:

```css
:root {
  /* Primary Brand Color - Royal Blue Gradient */
  --primary: #18275A;
  --primary-50: #f0f2f7;
  --primary-100: #d9e0ed;
  --primary-200: #b3c1db;
  --primary-300: #8ca2c9;
  --primary-400: #6683b7;
  --primary-500: #18275A;
  --primary-600: #152248;
  --primary-700: #121d3e;
  --primary-800: #0f1834;
  --primary-900: #0c132a;
  
  /* Core Brand Colors */
  --midnight: #0F1A3C;
  --gold: #D4AF37;
  --charcoal: #1C1C2D;
  --platinum: #E6E6EB;
  --sandstone: #BFA980;
  --maroon: #5A2E2E;
  --slate: #8B8C92;
  
  /* Semantic Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: var(--primary);
  
  /* Background System */
  --bg-primary: var(--midnight);
  --bg-secondary: var(--charcoal);
  --bg-tertiary: var(--primary-800);
  --bg-accent: var(--primary);
  
  /* Text System */
  --text-primary: var(--platinum);
  --text-secondary: var(--gold);
  --text-accent: var(--sandstone);
  --text-muted: var(--slate);
  
  /* Interactive Elements */
  --button-primary-bg: var(--gold);
  --button-primary-text: var(--midnight);
  --button-secondary-bg: var(--primary);
  --button-secondary-text: var(--platinum);
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--midnight) 100%);
  --gradient-gold: linear-gradient(135deg, var(--gold) 0%, var(--sandstone) 100%);
  --gradient-hero: linear-gradient(135deg, var(--midnight) 0%, var(--primary) 50%, var(--charcoal) 100%);
  
  /* Overlays */
  --overlay-dark: linear-gradient(180deg, rgba(15, 26, 60, 0.8) 0%, rgba(28, 28, 45, 0.9) 100%);
}
```

### Typography System
```css
/* Primary Typeface - Headlines */
.font-display {
  font-family: 'Inter Display', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Secondary Typeface - Body */
.font-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* Animated Typography Classes */
.text-reveal {
  overflow: hidden;
  display: inline-block;
}

.char-animation {
  display: inline-block;
  transform: translateY(100%);
}
```

### Animation Tokens
```javascript
const animationTokens = {
  // Timing
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    slower: 1.2
  },
  
  // Easing
  easing: {
    spring: { type: "spring", stiffness: 100, damping: 15 },
    springBouncy: { type: "spring", stiffness: 200, damping: 10 },
    ease: [0.25, 0.1, 0.25, 1],
    easeOut: [0, 0, 0.2, 1]
  },
  
  // Physics
  physics: {
    gentle: { type: "spring", stiffness: 50, damping: 20 },
    snappy: { type: "spring", stiffness: 300, damping: 30 },
    bouncy: { type: "spring", stiffness: 400, damping: 10 }
  }
};
```

---

## Page Structure & Components

### 1. Navigation Component

#### Specifications
- **Type**: Fixed header with glass morphism effect
- **Animation**: Slide down on page load, hide/show on scroll
- **Interactions**: Smooth hover states, active page indicators

#### Component API
```typescript
interface NavigationProps {
  activeSection: string;
  isScrolled: boolean;
  onSectionClick: (section: string) => void;
}

const navigationVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  scrolled: {
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(10, 10, 10, 0.8)",
    transition: { duration: 0.3 }
  }
};
```

#### Animation Behavior
- **Entry**: Slide down with spring physics
- **Scroll Response**: Background blur and opacity change
- **Hover States**: Scale and glow effects on nav items
- **Active State**: Underline animation with spring physics

---

### 2. Hero Section Component

#### Specifications
- **Layout**: Full viewport height with centered content
- **Background**: Animated gradient with floating particles
- **Content**: Animated headline, subtext, and CTA button
- **Visual Elements**: World map with animated investment locations

#### Component API
```typescript
interface HeroSectionProps {
  headline: string;
  subtext: string;
  ctaText: string;
  investmentData: InvestmentLocation[];
  onCtaClick: () => void;
}

const heroVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  },
  headline: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  },
  worldMap: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  }
};
```

#### Animation Sequence
1. **Background**: Gradient animation starts immediately
2. **Particles**: Float in with random delays and physics
3. **Headline**: Character-by-character reveal with spring physics
4. **Subtext**: Word-by-word fade in with stagger
5. **World Map**: Scale in with investment points animating sequentially
6. **CTA Button**: Bounce in with hover micro-interactions

#### Typography Animation
```typescript
const TypewriterText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);
  
  return (
    <motion.span
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 200, damping: 10 }
            }
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
```

---

### 3. Investment Metrics Component

#### Specifications
- **Layout**: Grid of animated metric cards
- **Content**: Key performance indicators with animated counters
- **Visual**: Progress bars, charts, and growth indicators
- **Trigger**: Scroll-based animation activation

#### Component API
```typescript
interface MetricsProps {
  metrics: {
    label: string;
    value: number;
    suffix: string;
    icon: ReactNode;
    color: string;
    animationType: 'counter' | 'progress' | 'chart';
  }[];
}

const metricsVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  card: {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }
};
```

#### Animation Features
- **Counter Animation**: Numbers count up with easing
- **Progress Bars**: Fill animation with spring physics
- **Card Hover**: Lift and glow effects
- **Scroll Trigger**: Intersection observer activation

#### Counter Animation Implementation
```typescript
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: countRef,
    offset: ["start end", "end start"]
  });
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.3) {
        const timer = setInterval(() => {
          setCount(prev => {
            const increment = value / (duration * 60);
            const newValue = prev + increment;
            return newValue >= value ? value : newValue;
          });
        }, 1000 / 60);
        
        return () => clearInterval(timer);
      }
    });
    
    return unsubscribe;
  }, [value, duration, scrollYProgress]);
  
  return (
    <motion.span
      ref={countRef}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {Math.floor(count)}
    </motion.span>
  );
};
```

---

### 4. Company Journey Timeline Component

#### Specifications
- **Layout**: Vertical timeline with story cards
- **Content**: 4-part company story with images and descriptions
- **Animation**: Sequential reveal as user scrolls
- **Interactions**: Parallax scrolling and card hover effects

#### Component API
```typescript
interface TimelineProps {
  stories: {
    year: string;
    title: string;
    description: string;
    image: string;
    metrics?: string;
  }[];
}

const timelineVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  },
  story: {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  },
  image: {
    hidden: {
      scale: 1.2,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
};
```

#### Animation Sequence
1. **Timeline Line**: Draws from top to bottom as user scrolls
2. **Story Cards**: Slide in from left with stagger delay
3. **Images**: Scale and fade in with parallax effect
4. **Text**: Character reveal animation for headlines
5. **Metrics**: Counter animations when in viewport

#### Scroll-Triggered Animation
```typescript
const TimelineStory = ({ story, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <motion.div
      ref={ref}
      variants={timelineVariants.story}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="timeline-story"
    >
      <motion.div style={{ y }} className="story-image">
        <motion.img
          src={story.image}
          variants={timelineVariants.image}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </motion.div>
      <div className="story-content">
        <TypewriterText text={story.title} delay={0.2} />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.6 }
            }
          }}
        >
          {story.description}
        </motion.p>
      </div>
    </motion.div>
  );
};
```

---

### 5. Investor Partners Grid Component

#### Specifications
- **Layout**: Masonry grid of investor profile cards
- **Content**: Company logos, titles, and locations
- **Animation**: Staggered card reveals with hover interactions
- **Visual**: Glassmorphism cards with subtle animations

#### Component API
```typescript
interface InvestorGridProps {
  investors: {
    title: string;
    company: string;
    location: string;
    logo?: string;
    tier: 'executive' | 'manager' | 'director';
  }[];
}

const investorVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  },
  card: {
    hidden: {
      y: 40,
      opacity: 0,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }
};
```

#### Card Hover Micro-Interactions
```typescript
const InvestorCard = ({ investor }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={investorVariants.card}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="investor-card"
    >
      <motion.div
        className="card-glow"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="card-content"
        animate={{
          y: isHovered ? -2 : 0
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3>{investor.title}</h3>
        <p>{investor.company}</p>
        <span>{investor.location}</span>
      </motion.div>
    </motion.div>
  );
};
```

---

### 6. GDP Growth Visualization Component

#### Specifications
- **Layout**: Interactive chart with animated data points
- **Content**: India's GDP growth timeline with projections
- **Animation**: Progressive data reveal with smooth transitions
- **Interactions**: Hover states showing detailed information

#### Component API
```typescript
interface GDPChartProps {
  data: {
    year: number;
    value: number;
    projected?: boolean;
  }[];
  onDataPointHover: (data: any) => void;
}

const chartVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  dataPoint: {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  },
  line: {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
};
```

#### Animated Chart Implementation
```typescript
const AnimatedGDPChart = ({ data }) => {
  const pathRef = useRef(null);
  const isInView = useInView(pathRef, { once: true });
  
  return (
    <motion.div
      ref={pathRef}
      variants={chartVariants.container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="gdp-chart"
    >
      <svg viewBox="0 0 800 400">
        <motion.path
          d={generatePath(data)}
          variants={chartVariants.line}
          stroke="url(#goldGradient)"
          strokeWidth="3"
          fill="none"
        />
        
        {data.map((point, index) => (
          <motion.circle
            key={point.year}
            cx={getX(point.year)}
            cy={getY(point.value)}
            r="6"
            variants={chartVariants.dataPoint}
            whileHover={{
              scale: 1.5,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="data-point"
          />
        ))}
      </svg>
    </motion.div>
  );
};
```

---

### 7. Developer Partners Showcase Component

#### Specifications
- **Layout**: Card-based showcase with project statistics
- **Content**: Partnership details and project metrics
- **Animation**: Reveal animations with counter effects
- **Visual**: Before/after project images with smooth transitions

#### Component API
```typescript
interface DeveloperShowcaseProps {
  partners: {
    category: string;
    projects: {
      title: string;
      metric: string;
      value: number;
      unit: string;
      description: string;
      images?: string[];
    }[];
  }[];
}

const showcaseVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  category: {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  },
  project: {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  }
};
```

---

### 8. Contact Section Component

#### Specifications
- **Layout**: Split layout with form and contact information
- **Content**: Contact form with validation and submission states
- **Animation**: Form field focus animations and submission feedback
- **Interactions**: Smooth transitions and micro-interactions

#### Component API
```typescript
interface ContactSectionProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    socialLinks: SocialLink[];
  };
}

const contactVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  formField: {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    focus: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }
};
```

---

## Image Asset Strategy

### Contextual Image Libraries
**Primary Sources:**
- **Unsplash**: High-quality real estate, business, and lifestyle imagery
- **Pexels**: Professional photography for hero sections and backgrounds
- **Freepik**: Premium illustrations and vector graphics
- **Getty Images**: Premium stock for investor portraits and corporate imagery

**Section-Specific Image Requirements:**
```typescript
// Image asset configuration
const imageAssets = {
  hero: {
    background: 'luxury-real-estate-skyline',
    overlay: 'geometric-pattern-subtle',
    keywords: ['modern architecture', 'city skyline', 'luxury buildings']
  },
  investors: {
    portraits: 'professional-business-headshots',
    backgrounds: 'corporate-office-environments',
    keywords: ['business professionals', 'corporate portraits', 'executive headshots']
  },
  properties: {
    showcase: 'premium-real-estate-photography',
    interiors: 'luxury-home-interiors',
    keywords: ['luxury homes', 'modern architecture', 'premium interiors']
  },
  growth: {
    charts: 'financial-growth-visualizations',
    backgrounds: 'abstract-data-patterns',
    keywords: ['financial growth', 'data visualization', 'success metrics']
  },
  team: {
    portraits: 'diverse-professional-team',
    office: 'modern-workspace-environment',
    keywords: ['professional team', 'diverse workforce', 'modern office']
  }
};
```

## Animation Framework

### Scroll-Triggered Animations

#### Implementation Strategy
```typescript
// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `-${threshold * 100}%`
  });
  
  return { ref, isInView };
};

// Global scroll progress for page-wide effects
const usePageProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.5, 0.5, 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.95]
  );
  
  return { scrollYProgress, backgroundOpacity, scale };
};
```

### Physics-Based Interactions

#### Spring Configuration
```typescript
const springConfigs = {
  gentle: {
    type: "spring",
    stiffness: 50,
    damping: 20,
    mass: 1
  },
  snappy: {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8
  },
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 10,
    mass: 0.5
  },
  elastic: {
    type: "spring",
    stiffness: 200,
    damping: 5,
    mass: 0.3
  }
};
```

#### Gesture Interactions
```typescript
const useDragInteraction = () => {
  const [isDragging, setIsDragging] = useState(false);
  
  const dragConstraints = {
    top: -50,
    left: -50,
    right: 50,
    bottom: 50
  };
  
  const dragTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };
  
  return {
    drag: true,
    dragConstraints,
    dragTransition,
    dragElastic: 0.1,
    onDragStart: () => setIsDragging(true),
    onDragEnd: () => setIsDragging(false),
    whileDrag: { scale: 1.05, rotate: 2 }
  };
};
```

### Typography Animations

#### Character-by-Character Reveal
```typescript
const AnimatedText = ({ 
  text, 
  delay = 0, 
  staggerDelay = 0.03,
  animationType = 'slideUp' 
}) => {
  const letters = Array.from(text);
  
  const animations = {
    slideUp: {
      hidden: { y: 50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, damping: 10 }
      }
    },
    scale: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }
    },
    rotate: {
      hidden: { rotateX: -90, opacity: 0 },
      visible: {
        rotateX: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, damping: 20 }
      }
    }
  };
  
  return (
    <motion.span
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={animations[animationType]}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
```

#### Word-by-Word Reveal
```typescript
const AnimatedParagraph = ({ text, delay = 0 }) => {
  const words = text.split(' ');
  
  return (
    <motion.p
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 15 }
            }
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};
```

---

## Performance Optimization

### Animation Performance

#### GPU Acceleration
```css
/* Force GPU acceleration for smooth animations */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Optimize for 60fps animations */
.smooth-animation {
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

#### Intersection Observer Optimization
```typescript
const useOptimizedInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [isInView, options]);
  
  return { ref, isInView };
};
```

### Memory Management

#### Animation Cleanup
```typescript
const useAnimationCleanup = () => {
  const animationRefs = useRef([]);
  
  const addAnimation = (animation) => {
    animationRefs.current.push(animation);
  };
  
  useEffect(() => {
    return () => {
      animationRefs.current.forEach(animation => {
        if (animation && animation.stop) {
          animation.stop();
        }
      });
    };
  }, []);
  
  return { addAnimation };
};
```

---

## Responsive Design

### Breakpoint System
```typescript
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

const useResponsiveAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return {
    isMobile,
    animationConfig: isMobile ? 
      { duration: 0.3, stiffness: 200 } : 
      { duration: 0.6, stiffness: 100 }
  };
};
```

### Mobile-Optimized Animations
```typescript
const mobileVariants = {
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  text: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.05 }
    }
  }
};

const desktopVariants = {
  card: {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  },
  text: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 10, staggerChildren: 0.03 }
    }
  }
};
```

---

## Accessibility Guidelines

### WCAG 2.1 AA Compliance
All components must meet WCAG 2.1 Level AA standards:

#### Color Contrast Requirements
- Normal text: 4.5:1 minimum contrast ratio
- Large text: 3:1 minimum contrast ratio
- UI components: 3:1 minimum contrast ratio
- Brand colors tested and compliant:
  - `--platinum` on `--midnight`: 12.6:1 ✓
  - `--gold` on `--midnight`: 8.2:1 ✓
  - `--primary` on `--platinum`: 9.8:1 ✓

#### Keyboard Navigation
```tsx
// Focus management example
.focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

// Skip navigation
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

#### ARIA Patterns
```tsx
// Navigation component
<nav role="navigation" aria-label="Main navigation">
  <button
    aria-expanded={isMenuOpen}
    aria-controls="mobile-menu"
    aria-label="Toggle navigation menu"
  >
    Menu
  </button>
</nav>

// Hero section
<section role="banner" aria-labelledby="hero-title">
  <h1 id="hero-title">
    <span aria-label="SanctumCap Real Estate Investment">
      {/* Animated content */}
    </span>
  </h1>
</section>

// Interactive charts
<div 
  role="img"
  aria-labelledby="chart-title"
  aria-describedby="chart-summary"
>
  <div id="chart-summary" className="sr-only">
    GDP growth chart showing data from 2020 to 2024
  </div>
</div>

// Form components
<label htmlFor="name" className="required">
  Full Name
  <span aria-label="required">*</span>
</label>
<input
  id="name"
  aria-required="true"
  aria-invalid={errors.name ? 'true' : 'false'}
  aria-describedby="name-error"
/>
```

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animated-counter::after {
    content: " (animated)";
    font-size: 0.8em;
    opacity: 0.7;
  }
}
```

#### Screen Reader Support
```css
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
```

## Development Guidelines

### Component Structure
```
components/
├── ui/
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   └── Modal/
├── sections/
│   ├── Navigation/
│   ├── Hero/
│   ├── Metrics/
│   └── Contact/
├── animations/
│   ├── TypographyReveal/
│   ├── ScrollTrigger/
│   └── PhysicsSpring/
└── accessibility/
    ├── SkipLink/
    ├── FocusManager/
    └── ScreenReaderOnly/
```

```typescript
// Standard component structure
interface ComponentProps {
  // Props interface
}

const Component: React.FC<ComponentProps> = (props) => {
  // Hooks
  const { ref, isInView } = useScrollAnimation();
  const { isMobile } = useResponsiveAnimation();
  
  // Animation variants
  const variants = isMobile ? mobileVariants : desktopVariants;
  
  // Render
  return (
    <motion.div
      ref={ref}
      variants={variants.container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Component content */}
    </motion.div>
  );
};
```

### Animation Best Practices

1. **Use `transform` and `opacity` for smooth animations**
2. **Implement `will-change` for elements that will animate**
3. **Use `useCallback` for animation event handlers**
4. **Implement proper cleanup for scroll listeners**
5. **Test animations on low-end devices**
6. **Use `reduce-motion` media query for accessibility**

### Accessibility Considerations
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```typescript
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};
```

---

## Innovative Section Enhancements

### Interactive Property Showcase
```typescript
// 3D property card with hover effects
const PropertyCard3D = {
  variants: {
    hover: {
      rotateY: 15,
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 }
    }
  },
  imageOverlay: 'luxury-property-exterior',
  contextualAssets: ['property-interior-360', 'neighborhood-aerial-view']
};
```

### Market Intelligence Dashboard
```typescript
// Real-time market data visualization
const MarketDashboard = {
  backgroundImage: 'financial-data-abstract-pattern',
  chartAssets: ['growth-trend-visualization', 'market-comparison-charts'],
  iconography: 'modern-financial-icons',
  animations: 'data-point-reveal-sequence'
};
```

### Investor Success Stories
```typescript
// Testimonial carousel with rich media
const SuccessStories = {
  portraitStyle: 'professional-environmental-portraits',
  backgroundAssets: ['luxury-property-backgrounds', 'success-milestone-imagery'],
  videoThumbnails: 'testimonial-video-previews',
  animations: 'story-reveal-timeline'
};
```

### Virtual Property Tours
```typescript
// Interactive property exploration
const VirtualTours = {
  heroImages: '360-degree-property-photography',
  floorPlans: 'architectural-blueprint-overlays',
  amenityShowcase: 'luxury-amenity-photography',
  interactiveElements: 'hotspot-navigation-icons'
};
```

## Implementation Checklist

### Phase 1: Foundation
- [ ] Set up Next.js project with TypeScript (Static Export)
- [ ] Install and configure Framer Motion
- [ ] Set up Tailwind CSS with custom design tokens
- [ ] Create base animation utilities and hooks
- [ ] Implement responsive breakpoint system
- [ ] Image asset curation and optimization

### Phase 2: Core Components
- [ ] Build Navigation component with scroll animations
- [ ] Create Hero section with typography animations
- [ ] Implement Investment Metrics with counter animations
- [ ] Build Company Journey timeline component
- [ ] Create Investor Partners grid with hover effects

### Phase 3: Advanced Features
- [ ] Implement GDP Growth visualization
- [ ] Build Developer Partners showcase
- [ ] Create Contact section with form animations
- [ ] Add scroll-triggered animations throughout
- [ ] Implement physics-based interactions

### Phase 4: Optimization
- [ ] Optimize animation performance
- [ ] Implement mobile-responsive animations
- [ ] Add accessibility features
- [ ] Test on various devices and browsers
- [ ] Performance audit and optimization

### Phase 5: Polish
- [ ] Fine-tune animation timings
- [ ] Add micro-interactions
- [ ] Implement loading states
- [ ] Add error handling
- [ ] Final testing and deployment

---

## Success Metrics

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Animation Frame Rate**: 60fps consistently
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### User Experience Goals
- **Smooth scroll experience** across all devices
- **Intuitive navigation** with clear visual feedback
- **Engaging animations** that enhance content understanding
- **Accessible interactions** for all users
- **Fast loading times** without compromising visual quality

This PRD provides a comprehensive blueprint for creating a sophisticated, animated website that tells SanctumCap's investment story through motion design and interactive elements. Each component is designed to work together as part of a cohesive narrative experience while maintaining high performance and accessibility standards.