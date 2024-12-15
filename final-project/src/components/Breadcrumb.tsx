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

  const hasBarber = Boolean(location.state?.barber);
  const hasServices = Boolean(location.state?.services?.length);

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
        isClickable: hasBarber
      },
      {
        label: 'Time',
        path: '/time',
        isActive: currentPath === '/time',
        isClickable: hasBarber && hasServices
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
    if (!item.isClickable) return;

    const currentState = location.state || {};
    navigate(item.path, { 
      state: {
        ...currentState,
        previousPath: location.pathname
      }
    });
  };

  return (
    <nav className="breadcrumb-nav">
      {getBreadcrumbs().map((item, index) => (
        <React.Fragment key={item.label}>
          <span
            className={`
              breadcrumb-item
              ${item.isClickable ? 'breadcrumb-item-clickable' : 'breadcrumb-item-disabled'}
              ${item.isActive ? 'breadcrumb-item-active' : ''}
            `}
            onClick={() => handleClick(item)}
            onKeyPress={(e) => e.key === 'Enter' && handleClick(item)}
            role={item.isClickable ? 'button' : 'text'}
            tabIndex={item.isClickable ? 0 : -1}
            title={!item.isClickable ? 'Complete previous steps first' : ''}
          >
            {item.label}
          </span>
          {index < getBreadcrumbs().length - 1 && (
            <span className="text-gray-400" aria-hidden="true">›</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;