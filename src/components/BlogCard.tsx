import React from 'react';
import { Button } from './Button';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link?: string;
  commentCount?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  link = '#',
  commentCount = 0,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      {imageUrl && (
        <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Header with Date */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <time className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            href={link}
            variant="primary"
            size="small"
            className="text-xs flex-1"
          >
            继续阅读
          </Button>
          <Button
            variant="secondary"
            size="small"
            className="text-xs flex-1"
          >
            💬 {commentCount} 条评论
          </Button>
        </div>
      </div>
    </div>
  );
};
