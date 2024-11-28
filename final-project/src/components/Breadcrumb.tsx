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

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      {
        label: 'Professional',
        path: '/barberselection',
        isActive: location.pathname === '/barberselection',
        isClickable: true
      },
      {
        label: 'Service',
        path: '/barberservices',
        isActive: location.pathname === '/barberservices',
        isClickable: location.pathname === '/barberservices' || location.state?.barber
      },
      {
        label: 'Time',
        path: '/time',
        isActive: false,
        isClickable: false
      },
      {
        label: 'Done',
        path: '/done',
        isActive: false,
        isClickable: false
      }
    ];

    return items;
  };

  const handleClick = (item: BreadcrumbItem) => {
    if (item.isClickable) {
      navigate(item.path, { state: location.state });
    }
  };

  return (
    <div className="flex items-center gap-2 text-sm mb-8">
      {getBreadcrumbs().map((item, index) => (
        <React.Fragment key={item.label}>
          <span
            className={`
              ${item.isClickable ? 'cursor-pointer hover:text-gray-600' : 'cursor-default'}
              ${item.isActive ? 'text-gray-900' : 'text-gray-400'}
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
    </div>
  );
};

export default Breadcrumb;