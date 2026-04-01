import React from 'react';
import { Button } from './Button';

interface BannerProps {
  title?: string;
  subtitle?: string;
  backgroundUrl?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title = '欢迎来到我的作品集',
  subtitle = '展示我的设计和开发技能',
  backgroundUrl,
}) => {
  return (
    <section
      id="banner"
      className="w-full py-24 px-6 text-center text-white relative overflow-hidden"
      style={{
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
        backgroundColor: !backgroundUrl ? '#1e40af' : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for readability */}
      {backgroundUrl && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl opacity-95 mb-8">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="large"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            开始浏览
          </Button>
          <Button
            variant="secondary"
            size="large"
            className="border-white text-white hover:bg-white/10"
          >
            了解更多
          </Button>
        </div>
      </div>
    </section>
  );
};
