/**
 * SanctumCap Component Library TypeScript Interfaces
 * Comprehensive type definitions for all UI components
 */

import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { MotionProps, Variants } from 'framer-motion';

// ============================================================================
// BASE TYPES
// ============================================================================

/** Base animation configuration */
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  spring?: {
    stiffness: number;
    damping: number;
    mass?: number;
  };
}

/** Typography animation types */
export type TypographyAnimation = 'none' | 'fadeIn' | 'slideUp' | 'characterReveal' | 'wordReveal';

/** Scroll trigger configuration */
export interface ScrollTriggerConfig {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  stagger?: number;
}

/** Base component props */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  animate?: boolean;
  animationConfig?: AnimationConfig;
  scrollTrigger?: ScrollTriggerConfig;
}

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface NavigationProps extends BaseComponentProps {
  items: NavigationItem[];
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  variant?: 'default' | 'transparent' | 'solid';
  position?: 'fixed' | 'sticky' | 'relative';
  showBackground?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================

export interface WorldMapPoint {
  id: string;
  x: number; // percentage
  y: number; // percentage
  label: string;
  value?: string | number;
  color?: string;
}

export interface HeroSectionProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaButton?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  worldMap?: {
    points: WorldMapPoint[];
    animateOnLoad?: boolean;
    interactivePoints?: boolean;
  };
  backgroundVideo?: {
    src: string;
    poster?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
  };
  typographyAnimation?: TypographyAnimation;
}

// ============================================================================
// INVESTMENT METRICS COMPONENT
// ============================================================================

export interface MetricItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  format?: 'number' | 'currency' | 'percentage';
  animationDelay?: number;
  icon?: ReactNode;
  description?: string;
}

export interface InvestmentMetricsProps extends BaseComponentProps {
  metrics: MetricItem[];
  title?: string;
  subtitle?: string;
  layout?: 'grid' | 'row' | 'carousel';
  animateCounters?: boolean;
  counterDuration?: number;
  showIcons?: boolean;
  variant?: 'default' | 'minimal' | 'cards';
}

// ============================================================================
// COMPANY JOURNEY TIMELINE
// ============================================================================

export interface TimelineItem {
  id: string;
  year: string | number;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  metrics?: MetricItem[];
  milestone?: boolean;
  icon?: ReactNode;
}

export interface CompanyJourneyProps extends BaseComponentProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
  layout?: 'vertical' | 'horizontal' | 'alternating';
  showProgress?: boolean;
  interactiveTimeline?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// ============================================================================
// INVESTOR PARTNERS GRID
// ============================================================================

export interface InvestorPartner {
  id: string;
  name: string;
  logo: {
    src: string;
    alt: string;
  };
  description?: string;
  investmentAmount?: number;
  investmentDate?: string;
  category?: string;
  website?: string;
  featured?: boolean;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export interface InvestorPartnersProps extends BaseComponentProps {
  partners: InvestorPartner[];
  title?: string;
  subtitle?: string;
  layout?: 'grid' | 'masonry' | 'carousel';
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showTestimonials?: boolean;
  filterByCategory?: boolean;
  categories?: string[];
  hoverEffects?: boolean;
}

// ============================================================================
// GDP GROWTH VISUALIZATION
// ============================================================================

export interface GDPDataPoint {
  year: number;
  value: number;
  label?: string;
  highlighted?: boolean;
}

export interface GDPGrowthProps extends BaseComponentProps {
  data: GDPDataPoint[];
  title?: string;
  subtitle?: string;
  chartType?: 'line' | 'area' | 'bar';
  showGrid?: boolean;
  showTooltips?: boolean;
  animateOnScroll?: boolean;
  animationDuration?: number;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  yAxisLabel?: string;
  xAxisLabel?: string;
}

// ============================================================================
// DEVELOPER PARTNERS SHOWCASE
// ============================================================================

export interface DeveloperProject {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  metrics: {
    area?: string;
    units?: number;
    value?: number;
    completion?: string;
  };
  location: string;
  status: 'completed' | 'ongoing' | 'planned';
  gallery?: {
    src: string;
    alt: string;
  }[];
}

export interface DeveloperPartner {
  id: string;
  name: string;
  logo: {
    src: string;
    alt: string;
  };
  description: string;
  projects: DeveloperProject[];
  established?: string;
  website?: string;
  contact?: {
    email: string;
    phone: string;
  };
}

export interface DeveloperPartnersProps extends BaseComponentProps {
  partners: DeveloperPartner[];
  title?: string;
  subtitle?: string;
  layout?: 'tabs' | 'accordion' | 'cards';
  showProjectGallery?: boolean;
  defaultActivePartner?: string;
  animateProjectCards?: boolean;
}

// ============================================================================
// CONTACT SECTION
// ============================================================================

export interface ContactFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => boolean | string;
  };
}

export interface ContactInfo {
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone?: string;
  email?: string;
  hours?: {
    days: string;
    time: string;
  }[];
}

export interface ContactSectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  formFields: ContactFormField[];
  contactInfo?: ContactInfo;
  showMap?: boolean;
  mapConfig?: {
    center: { lat: number; lng: number };
    zoom: number;
    markers?: { lat: number; lng: number; title: string }[];
  };
  onSubmit: (data: Record<string, any>) => Promise<void>;
  submitButtonText?: string;
  successMessage?: string;
  errorMessage?: string;
}

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>, BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
}

// ============================================================================
// INPUT COMPONENT
// ============================================================================

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseComponentProps {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

// ============================================================================
// CARD COMPONENT
// ============================================================================

export interface CardProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  clickable?: boolean;
  loading?: boolean;
}

// ============================================================================
// MODAL COMPONENT
// ============================================================================

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  preventScroll?: boolean;
  centered?: boolean;
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

export interface AnimationVariants {
  fadeIn: Variants;
  slideUp: Variants;
  slideDown: Variants;
  slideLeft: Variants;
  slideRight: Variants;
  scaleIn: Variants;
  scaleOut: Variants;
  rotateIn: Variants;
  staggerChildren: Variants;
  characterReveal: Variants;
  wordReveal: Variants;
}

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

export interface ThemeConfig {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    neutral: Record<string, string>;
    semantic: Record<string, string>;
  };
  typography: {
    fontFamilies: Record<string, string>;
    fontSizes: Record<string, string>;
    fontWeights: Record<string, number>;
    lineHeights: Record<string, number>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
  breakpoints: Record<string, string>;
  animations: {
    durations: Record<string, string>;
    easings: Record<string, string>;
    springs: Record<string, object>;
  };
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/** Responsive value type */
export type ResponsiveValue<T> = T | {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
};

/** Color variant type */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

/** Size variant type */
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/** Animation state type */
export type AnimationState = 'idle' | 'loading' | 'success' | 'error';

/** Breakpoint type */
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

// ============================================================================
// COMPONENT COMPOSITION TYPES
// ============================================================================

/** Page layout props */
export interface PageLayoutProps extends BaseComponentProps {
  navigation?: NavigationProps;
  footer?: ReactNode;
  sidebar?: ReactNode;
  breadcrumbs?: ReactNode;
  maxWidth?: string;
  centered?: boolean;
}

/** Section wrapper props */
export interface SectionProps extends HTMLAttributes<HTMLElement>, BaseComponentProps {
  as?: 'section' | 'div' | 'article' | 'aside';
  background?: 'primary' | 'secondary' | 'accent' | 'transparent';
  padding?: ResponsiveValue<SizeVariant>;
  margin?: ResponsiveValue<SizeVariant>;
  fullHeight?: boolean;
  centered?: boolean;
}

/** Grid system props */
export interface GridProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  columns?: ResponsiveValue<number>;
  gap?: ResponsiveValue<SizeVariant>;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

// ============================================================================
// FORM TYPES
// ============================================================================

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

export interface FormActions {
  setValue: (name: string, value: any) => void;
  setError: (name: string, error: string) => void;
  setTouched: (name: string, touched: boolean) => void;
  reset: () => void;
  submit: () => Promise<void>;
}

// ============================================================================
// ACCESSIBILITY TYPES
// ============================================================================

export interface AccessibilityProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-live'?: 'polite' | 'assertive' | 'off';
  role?: string;
  tabIndex?: number;
}

// ============================================================================
// PERFORMANCE TYPES
// ============================================================================

export interface PerformanceConfig {
  lazyLoad?: boolean;
  preload?: boolean;
  priority?: 'high' | 'normal' | 'low';
  optimizeImages?: boolean;
  enableVirtualization?: boolean;
  debounceMs?: number;
  throttleMs?: number;
}

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

export type {
  // Re-export commonly used types
  ReactNode,
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  MotionProps,
  Variants,
};

// Default export for the complete type system
export default {
  AnimationConfig,
  BaseComponentProps,
  NavigationProps,
  HeroSectionProps,
  InvestmentMetricsProps,
  CompanyJourneyProps,
  InvestorPartnersProps,
  GDPGrowthProps,
  DeveloperPartnersProps,
  ContactSectionProps,
  ButtonProps,
  InputProps,
  CardProps,
  ModalProps,
  ThemeConfig,
  PageLayoutProps,
  SectionProps,
  GridProps,
  FormState,
  FormActions,
  AccessibilityProps,
  PerformanceConfig,
};