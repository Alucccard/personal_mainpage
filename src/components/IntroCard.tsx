import React from 'react';

interface IntroCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  position?: 'first' | 'middle' | 'last';
}

export const IntroCard: React.FC<IntroCardProps> = ({
  icon,
  title,
  description,
  position = 'middle',
}) => {
  const positionStyles = {
    first: 'border-l-4 border-blue-600',
    middle: '',
    last: 'border-r-4 border-blue-600',
  };

  return (
    <div className={`text-center p-6 ${positionStyles[position]}`}>
      {icon && (
        <div className="text-5xl mb-4 text-blue-600">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
