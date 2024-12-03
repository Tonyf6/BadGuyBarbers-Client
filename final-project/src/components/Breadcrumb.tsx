import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive: boolean;
  isClickable: boolean;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we have the required data for each step
  const hasBarber = Boolean(location.state?.barber);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const currentPath = location.pathname;

    return [
      {
        label: 'Professional',
        path: '/barberselection',
        isActive: currentPath === '/barberselection',
        isClickable: true
      },
      {
        label: 'Service',
        path: '/barberservices',
        isActive: currentPath === '/barberservices',
        isClickable: hasBarber || currentPath === '/barberservices'
      },
      {
        label: 'Time',
        path: '/time',
        isActive: currentPath === '/time',
        isClickable: false
      },
      {
        label: 'Done',
        path: '/done',
        isActive: currentPath === '/done',
        isClickable: false
      }
    ];
  };

  const handleClick = (item: BreadcrumbItem) => {
    // Only navigate if the item is clickable
    if (item.isClickable) {
      // Preserve the state when navigating
      navigate(item.path, { 
        state: location.state 
      });
    }
  };

  return (
    <nav className="flex items-center gap-2 text-sm mb-8">
      {getBreadcrumbs().map((item, index) => (
        <React.Fragment key={item.label}>
          <span
            className={`
              ${item.isClickable ? 'cursor-pointer hover:text-gray-600' : 'cursor-not-allowed'}
              ${item.isActive ? 'text-gray-900' : 'text-gray-400'}
              transition-colors duration-200
            `}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </span>
          {index < getBreadcrumbs().length - 1 && (
            <span className="text-gray-400">›</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;