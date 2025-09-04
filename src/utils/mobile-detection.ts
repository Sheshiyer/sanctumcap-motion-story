/**
 * Mobile detection utility for disabling animations on mobile devices
 * Addresses compatibility issues with Framer Motion on mobile browsers
 */

// Check if device is mobile (Safari, Chrome, or other mobile browsers)
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const ua = navigator.userAgent;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isSmallScreen = window.innerWidth <= 768;
  
  return isMobileUA || isSmallScreen;
};

// Specific Safari mobile detection
export const isSafariMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && /Mobile/.test(ua) && !/Chrome/.test(ua);
};

// Check if device has reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Determine if animations should be disabled
export const shouldDisableAnimations = (): boolean => {
  return isMobile() || prefersReducedMotion();
};

// Get safe motion props for Framer Motion components
export const getSafeMotionProps = (motionProps: any) => {
  if (shouldDisableAnimations()) {
    return {};
  }
  return motionProps;
};

// Default motion configurations
export const safeMotionConfig = {
  fadeIn: shouldDisableAnimations() ? {} : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  
  slideUp: shouldDisableAnimations() ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  
  scaleIn: shouldDisableAnimations() ? {} : {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
  
  stagger: shouldDisableAnimations() ? {} : {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};