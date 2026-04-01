import React from 'react';
import { BlogCard } from './BlogCard';

interface BlogItem {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link?: string;
  commentCount?: number;
}

interface BlogProps {
  items?: BlogItem[];
  title?: string;
}

export const Blog: React.FC<BlogProps> = ({
  items = [
    {
      id: '1',
      title: 'React 18 新特性解析',
      description: '深入了解React 18中的并发特性、自动批处理和新的Hooks API，探讨如何在项目中应用这些新特性来提升性能。',
      date: '2024-01-15',
      imageUrl: 'https://via.placeholder.com/400x300?text=Blog+1',
      link: '#',
      commentCount: 12,
    },
    {
      id: '2',
      title: 'TypeScript 最佳实践',
      description: '分享TypeScript在大型项目中的应用经验，包括类型推断、泛型使用、装饰器等高级特性的实践总结。',
      date: '2024-01-10',
      imageUrl: 'https://via.placeholder.com/400x300?text=Blog+2',
      link: '#',
      commentCount: 8,
    },
    {
      id: '3',
      title: 'Web性能优化指南',
      description: '从Core Web Vitals出发，详细讲解如何优化网站性能，包括加载速度、运行时性能和视觉稳定性的优化技巧。',
      date: '2024-01-05',
      imageUrl: 'https://via.placeholder.com/400x300?text=Blog+3',
      link: '#',
      commentCount: 15,
    },
    {
      id: '4',
      title: 'Next.js 最佳实践',
      description: '介绍Next.js框架在构建现代化全栈应用中的优势，包括SSR、SSG、ISR等渲染策略的选择和应用场景。',
      date: '2023-12-28',
      imageUrl: 'https://via.placeholder.com/400x300?text=Blog+4',
      link: '#',
      commentCount: 10,
    },
  ],
  title = '最新博客',
}) => {
  return (
    <section id="blog" className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div className="w-12 h-1 bg-blue-600"></div>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              imageUrl={item.imageUrl}
              link={item.link}
              commentCount={item.commentCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
