import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

// Loading Spinner Component
export const LoadingSpinner = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <div className="w-full h-full border-2 border-gold/20 border-t-gold rounded-full" />
    </motion.div>
  );
};

// Pulse Loading Animation
export const PulseLoader = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`w-2 h-2 bg-gold rounded-full ${className}`}
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
};

// Dots Loading Animation
export const DotsLoader = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-gold rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Card Skeleton Loader
export const CardSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`bg-midnight/90 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-xl bg-gold/10" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4 bg-gold/10" />
          <Skeleton className="h-3 w-1/2 bg-gold/10" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-full bg-gold/10" />
        <Skeleton className="h-3 w-5/6 bg-gold/10" />
        <Skeleton className="h-3 w-4/6 bg-gold/10" />
      </div>
    </motion.div>
  );
};

// Metric Card Skeleton
export const MetricCardSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`bg-midnight/90 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <Skeleton className="h-16 w-16 rounded-2xl bg-gold/10 mb-4" />
        <Skeleton className="h-8 w-20 bg-gold/10 mb-2" />
        <Skeleton className="h-4 w-24 bg-gold/10" />
      </div>
    </motion.div>
  );
};

// Page Loading Overlay
export const PageLoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-midnight/90 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <motion.p
          className="text-platinum/80 text-lg font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

// Section Loading State
export const SectionLoader = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`py-20 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-64 mx-auto mb-4 bg-gold/10" />
          <Skeleton className="h-6 w-96 mx-auto bg-gold/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Button Loading State
export const ButtonLoader = ({ 
  isLoading, 
  children, 
  className = '',
  ...props 
}: { 
  isLoading: boolean; 
  children: React.ReactNode; 
  className?: string; 
  [key: string]: any;
}) => {
  return (
    <motion.button
      className={`relative ${className}`}
      disabled={isLoading}
      whileHover={!isLoading ? { scale: 1.05 } : {}}
      whileTap={!isLoading ? { scale: 0.95 } : {}}
      {...props}
    >
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <LoadingSpinner size="sm" />
        </motion.div>
      )}
      <motion.span
        className={isLoading ? 'opacity-0' : 'opacity-100'}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

// Shimmer Effect
export const ShimmerEffect = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`relative overflow-hidden bg-gold/5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

// Progress Bar
export const ProgressBar = ({ 
  progress, 
  className = '' 
}: { 
  progress: number; 
  className?: string; 
}) => {
  return (
    <div className={`w-full bg-midnight/50 rounded-full h-2 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-gold to-gold-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
};

// Fade Transition Wrapper
export const FadeTransition = ({ 
  children, 
  isVisible, 
  className = '' 
}: { 
  children: React.ReactNode; 
  isVisible: boolean; 
  className?: string; 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Container for Loading Items
export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: { 
  children: React.ReactNode; 
  className?: string; 
  staggerDelay?: number; 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Loading Item for Stagger Container
export const LoadingItem = ({ 
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};