import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingSpinner } from './LoadingStates';

// Page Transition Variants
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0
  },
  out: {
    opacity: 0,
    scale: 1.05,
    y: -20
  }
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.6
};

// Slide Transition Variants
const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  in: {
    x: 0,
    opacity: 1
  },
  out: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const slideTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.5
};

// Fade Transition Variants
const fadeVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const fadeTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1] as const
};

// Scale Transition Variants
const scaleVariants = {
  initial: {
    scale: 0.8,
    opacity: 0
  },
  in: {
    scale: 1,
    opacity: 1
  },
  out: {
    scale: 1.2,
    opacity: 0
  }
};

const scaleTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30
};

// Main Page Transition Component
export const PageTransition = ({
  children,
  type = 'fade',
  direction = 0,
  className = ''
}: {
  children: React.ReactNode;
  type?: 'fade' | 'slide' | 'scale' | 'page';
  direction?: number;
  className?: string;
}) => {
  const getVariants = () => {
    switch (type) {
      case 'slide':
        return slideVariants;
      case 'scale':
        return scaleVariants;
      case 'page':
        return pageVariants;
      default:
        return fadeVariants;
    }
  };

  const getTransition = () => {
    switch (type) {
      case 'slide':
        return slideTransition;
      case 'scale':
        return scaleTransition;
      case 'page':
        return pageTransition;
      default:
        return fadeTransition;
    }
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="in"
      exit="out"
      variants={getVariants()}
      transition={getTransition()}
      custom={direction}
    >
      {children}
    </motion.div>
  );
};

// Loading Transition Component
export const LoadingTransition = ({
  isLoading,
  children,
  loadingComponent,
  className = ''
}: {
  isLoading: boolean;
  children: React.ReactNode;
  loadingComponent?: React.ReactNode;
  className?: string;
}) => {
  const defaultLoader = (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <motion.p
          className="text-midnight/80 text-lg font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {loadingComponent || defaultLoader}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Section Transition Component
export const SectionTransition = ({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Children Transition
export const StaggerTransition = ({
  children,
  staggerDelay = 0.1,
  className = ''
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Individual Stagger Item
export const StaggerItem = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut'
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Route Transition Hook
export const useRouteTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0);

  const startTransition = (newDirection = 0) => {
    setDirection(newDirection);
    setIsTransitioning(true);
  };

  const endTransition = () => {
    setIsTransitioning(false);
  };

  return {
    isTransitioning,
    direction,
    startTransition,
    endTransition
  };
};

// Loading State Hook
export const useLoadingState = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [progress, setProgress] = useState(0);

  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
  };

  const updateProgress = (newProgress: number) => {
    setProgress(Math.min(100, Math.max(0, newProgress)));
  };

  const finishLoading = () => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 300);
  };

  return {
    isLoading,
    progress,
    startLoading,
    updateProgress,
    finishLoading
  };
};

// Intersection Observer Hook for Animations
export const useIntersectionAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, hasAnimated]);

  return { ref, isVisible };
};

// Smooth Reveal Component
export const SmoothReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'down':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;