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
      title: "React / Next.js Front-end",
      description:
        "Focus on high-performance, scalable modern front-end architecture.",
    },
    {
      icon: "/images/skill2.png",
      title: "Web3 DApp Development",
      description:
        "Proficient in wallet connection, on-chain interaction and contract invocation.",
    },
    {
      icon: "/images/skill3.png",
      title: "Solidity Smart Contracts",
      description:
        "Comprehensive skills in contract writing, testing, and security awareness.",
    },
  ],
}) => {
  return (
    <section id="intro" className="w-full py-12 bg-white">
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
          <div
            className="hidden md:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 h-[100%] w-[2px] bg-gray-200"
            style={{ boxShadow: "-1px 0px 10px 1px rgba(0, 0, 0, 0.1)" }}
          ></div>
          <div
            className="hidden md:block absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 h-[100%] w-[2px] bg-gray-200"
            style={{ boxShadow: "1px 0px 10px 1px rgba(0, 0, 0, 0.1)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};
