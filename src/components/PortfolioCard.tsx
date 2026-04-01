import React from 'react';
import { Button } from './Button';

interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  imageUrl,
  link = '#',
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      {imageUrl && (
        <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex gap-2">
          <Button
            href={link}
            variant="secondary"
            size="small"
            className="text-xs"
          >
            了解更多
          </Button>
        </div>
      </div>
    </div>
  );
};
