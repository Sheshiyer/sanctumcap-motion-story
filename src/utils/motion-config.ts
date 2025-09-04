import { shouldDisableAnimations, getSafeMotionProps } from './mobile-detection';

// Motion configuration for mobile optimization
export const useMotionConfig = () => {
  const disableAnimations = shouldDisableAnimations();

  // Reduce animations on mobile for better performance
  const motionConfig = {
    // Disable complex animations on mobile
    initial: disableAnimations ? {} : undefined,
    animate: disableAnimations ? {} : undefined,
    transition: disableAnimations ? { duration: 0 } : undefined,
    // Reduce motion for mobile devices
    reducedMotion: disableAnimations
  };

  return motionConfig;
};

// Safe motion props wrapper
export const safeMotionProps = getSafeMotionProps;

// Simple fade animation that's mobile-friendly
export const fadeInUp = () => {
  const disableAnimations = shouldDisableAnimations();
  return {
    initial: disableAnimations ? {} : { opacity: 0, y: 20 },
    animate: disableAnimations ? {} : { opacity: 1, y: 0 },
    transition: disableAnimations ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
  };
};

// Stagger animation that's mobile-friendly
export const staggerContainer = () => {
  const disableAnimations = shouldDisableAnimations();
  return {
    initial: disableAnimations ? {} : {},
    animate: disableAnimations ? {} : {},
    transition: disableAnimations ? {} : {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  };
};

// Scale animation that's mobile-friendly
export const scaleIn = () => {
  const disableAnimations = shouldDisableAnimations();
  return {
    initial: disableAnimations ? {} : { scale: 0.8, opacity: 0 },
    animate: disableAnimations ? {} : { scale: 1, opacity: 1 },
    transition: disableAnimations ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }
  };
};

// Slide animation that's mobile-friendly
export const slideInLeft = () => {
  const disableAnimations = shouldDisableAnimations();
  return {
    initial: disableAnimations ? {} : { x: -50, opacity: 0 },
    animate: disableAnimations ? {} : { x: 0, opacity: 1 },
    transition: disableAnimations ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
  };
};

export const slideInRight = () => {
  const disableAnimations = shouldDisableAnimations();
  return {
    initial: disableAnimations ? {} : { x: 50, opacity: 0 },
    animate: disableAnimations ? {} : { x: 0, opacity: 1 },
    transition: disableAnimations ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
  };
};