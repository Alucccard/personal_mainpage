import React from 'react';
import { IntroCard } from './IntroCard';
import { Button } from './Button';

interface IntroItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface IntroProps {
  items?: IntroItem[];
}

export const Intro: React.FC<IntroProps> = ({
  items = [
    {
      title: '响应式设计',
      description: '现代化、响应式的网页设计，在所有设备上完美呈现。',
    },
    {
      title: '性能优化',
      description: '优化的代码和加载速度，提供卓越的用户体验。',
    },
    {
      title: '创意开发',
      description: '将创意想法转化为功能完整的应用程序和网站。',
    },
  ],
}) => {
  return (
    <section id="intro" className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <IntroCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              position={index === 0 ? 'first' : index === items.length - 1 ? 'last' : 'middle'}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button href="#" variant="primary" size="large">
            开始使用
          </Button>
          <Button href="#" variant="secondary" size="large">
            了解详情
          </Button>
        </div>
      </div>
    </section>
  );
};
