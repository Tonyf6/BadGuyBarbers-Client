
import React from 'react';

// Base Skeleton component
interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
  );
};

// Service Card Skeleton
export const ServiceCardSkeleton = () => (
  <div className="service-card">
    <div className="service-details">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <div className="absolute bottom-6 right-6">
      <Skeleton className="h-6 w-16 rounded-md" />
    </div>
  </div>
);

// Barber Card Skeleton
export const BarberCardSkeleton = () => (
  <div className="barber-card">
    <div className="image-container">
      <Skeleton className="w-full h-full" />
    </div>
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-1/2" />
  </div>
);

export const LoginFormSkeleton = () => (
    <div className="login-box animate-pulse">
      <Skeleton className="h-8 w-32 mx-auto mb-6" /> {/* Title */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-full" /> {/* Input */}
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-full" /> {/* Input */}
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Skeleton className="h-10 w-full rounded-full" /> {/* Button */}
          <Skeleton className="h-10 w-full rounded-full" /> {/* Button */}
        </div>
      </div>
    </div>
  );

export default Skeleton;
