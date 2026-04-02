import React from "react";
import { PortfolioCard } from "./PortfolioCard";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

interface PortfolioProps {
  items?: PortfolioItem[];
  title?: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  items = [
    {
      id: "1",
      title: "项目一：电商平台",
      description: "一个完整的电商平台，包含产品展示、购物车和支付功能。",
      imageUrl: "",
      link: "#",
    },
    {
      id: "2",
      title: "项目二：博客系统",
      description: "支持markdown编辑的博客系统，具有评论和标签功能。",
      imageUrl: "",
      link: "#",
    },
    {
      id: "3",
      title: "项目三：任务管理",
      description: "团队协作任务管理工具，支持实时更新和权限管理。",
      imageUrl: "",
      link: "#",
    },
    {
      id: "4",
      title: "项目四：数据可视化",
      description: "实时数据可视化仪表板，支持自定义图表和数据导出。",
      imageUrl: "",
      link: "#",
    },
    {
      id: "5",
      title: "项目五：移动应用",
      description: "跨平台移动应用，提供离线支持和云同步功能。",
      imageUrl: "",
      link: "#",
    },
    {
      id: "6",
      title: "项目六：API服务",
      description: "高性能的REST API服务，支持认证、限流和缓存。",
      imageUrl: "",
      link: "#",
    },
  ],
  title = "我的作品集",
}) => {
  return (
    <section id="portfolio" className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-[0.5px] bg-gray-300"></div>
            <h2 className="text-3xl md:text-1xl font-bold text-gray-700 whitespace-nowrap mx-5">
              {title}
            </h2>
            <div className="flex-1 h-[0.5px] bg-gray-300"></div>
          </div>
        </header>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
