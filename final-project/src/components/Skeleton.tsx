import React from 'react';

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

// Login Form Skeleton
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

// About Us Skeleton
export const AboutUsSkeleton = () => (
  <div className="max-w-4xl mx-auto mt-20">
    <div className="bg-white rounded-2xl shadow-sm p-16">
      {/* Title Skeleton */}
      <div className="flex justify-center mb-12">
        <Skeleton className="h-10 w-48" />
      </div>

      {/* Paragraph Skeletons */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-9/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  </div>
);

// Order Summary Skeleton
export const OrderSummarySkeleton = () => (
  <div className="info-card">
    <Skeleton className="h-8 w-3/4 mb-4" />
    <Skeleton className="h-4 w-1/2 mb-2" />
    <Skeleton className="h-4 w-full mb-4" />
    <div className="flex items-center gap-3 mb-6">
      <Skeleton className="w-8 h-8 rounded-sm" />
      <Skeleton className="h-4 w-24" />
    </div>
    <div className="space-y-4">
      <Skeleton className="h-20 w-full" />
    </div>
  </div>
);

// Create Account Skeleton (similar to Login but with one button)
export const CreateAccountSkeleton = () => (
  <div className="login-box animate-pulse">
    <Skeleton className="h-8 w-48 mx-auto mb-6" /> {/* Title */}
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
      </div>
    </div>
  </div>
);

// Breadcrumb Skeleton
export const BreadcrumbSkeleton = () => (
  <div className="flex items-center gap-2 mb-8">
    <Skeleton className="h-4 w-20" />
    <span className="text-gray-400">›</span>
    <Skeleton className="h-4 w-16" />
    <span className="text-gray-400">›</span>
    <Skeleton className="h-4 w-12" />
    <span className="text-gray-400">›</span>
    <Skeleton className="h-4 w-14" />
  </div>
);

export default Skeleton;