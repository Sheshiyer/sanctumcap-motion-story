import { useIsMobile } from '../hooks/use-mobile';

// Motion configuration for mobile optimization
export const useMotionConfig = () => {
  const isMobile = useIsMobile();

  // Reduce animations on mobile for better performance
  const motionConfig = {
    // Disable complex animations on mobile
    initial: isMobile ? {} : undefined,
    animate: isMobile ? {} : undefined,
    transition: isMobile ? { duration: 0 } : undefined,
    // Reduce motion for mobile devices
    reducedMotion: isMobile
  };

  return motionConfig;
};

// Simple fade animation that's mobile-friendly
export const fadeInUp = (isMobile: boolean = false) => ({
  initial: isMobile ? {} : { opacity: 0, y: 20 },
  animate: isMobile ? {} : { opacity: 1, y: 0 },
  transition: isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
});

// Stagger animation that's mobile-friendly
export const staggerContainer = (isMobile: boolean = false) => ({
  initial: isMobile ? {} : {},
  animate: isMobile ? {} : {},
  transition: isMobile ? {} : {
    staggerChildren: 0.1,
    delayChildren: 0.2
  }
});

// Scale animation that's mobile-friendly
export const scaleIn = (isMobile: boolean = false) => ({
  initial: isMobile ? {} : { scale: 0.8, opacity: 0 },
  animate: isMobile ? {} : { scale: 1, opacity: 1 },
  transition: isMobile ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }
});

// Slide animation that's mobile-friendly
export const slideInLeft = (isMobile: boolean = false) => ({
  initial: isMobile ? {} : { x: -50, opacity: 0 },
  animate: isMobile ? {} : { x: 0, opacity: 1 },
  transition: isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
});

export const slideInRight = (isMobile: boolean = false) => ({
  initial: isMobile ? {} : { x: 50, opacity: 0 },
  animate: isMobile ? {} : { x: 0, opacity: 1 },
  transition: isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
});