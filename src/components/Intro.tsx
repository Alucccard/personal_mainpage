import React from "react";
import { IntroCard } from "./IntroCard";

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
      icon: "/images/skill1.png",
      title: "响应式设计",
      description: "现代化、响应式的网页设计，在所有设备上完美呈现。",
    },
    {
      icon: "/images/skill2.png",
      title: "性能优化",
      description: "优化的代码和加载速度，提供卓越的用户体验。",
    },
    {
      icon: "/images/skill3.png",
      title: "创意开发",
      description: "将创意想法转化为功能完整的应用程序和网站。",
    },
  ],
}) => {
  return (
    <section id="intro" className="w-full py-12 px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {items.map((item, index) => (
            <IntroCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              position="middle"
            />
          ))}
          <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 h-[100%] w-[1px] bg-gray-200"></div>
          <div className="hidden md:block absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 h-[100%] w-[1px] bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};
