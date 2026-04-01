"use client";
import React from "react";
import { useState } from "react";

interface BannerProps {
  title?: string;
  subtitle?: string;
  backgroundUrl?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title = "",
  subtitle = "",
  backgroundUrl,
}) => {
  // State to track mouse position for interactive effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <section
      id="banner"
      className="w-full py-19 px-6 text-center text-white relative overflow-hidden "
      onMouseMove={handleMouseMove}
    >
      {/* Background image layer with opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundUrl || "/images/grid-pattern.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      {/* Content layer */}
      <div className="relative z-10 max-w-[700px] mx-auto">
        <div className="bg-black/80 rounded-lg p-8 md:p-12 mb-8 mt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p
            className="text-lg md:text-2xl opacity-95"
            style={{
              color: "#bd3c4b",
            }}
          >
            {subtitle}
            {mousePosition.x}, {mousePosition.y}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
      </div>
    </section>
  );
};
