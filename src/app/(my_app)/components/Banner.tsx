"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

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
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  // CSS for spotlight pulse animation
  const pulseAnimation = `
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  .spotlight-pulse {
    animation: pulse 1s ease-in-out infinite;
  }
`;

  return (
    <>
      <style>{pulseAnimation}</style>
      <section
        id="banner"
        className="w-full py-0 px-6 text-center text-white relative overflow-hidden "
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 9999, y: 9999 })}
      >
        {/* Background image layer with spotlight effect */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundUrl || "/images/grid-pattern.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div
          className="absolute inset-0 spotlight-pulse"
          style={{
            backgroundImage: `url(${backgroundUrl || "/images/grid-pattern.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          }}
        />

        {/* Content layer */}
        <Image
          src="/images/portrait.png"
          alt="Banner Image"
          width={250}
          height={100}
          className="mx-auto mt-10 rounded-2xl relative z-11"
          style={{ height: "auto" }}
        />
        <div className="relative z-10 max-w-[700px] mx-auto">
          <div className="bg-white/20 rounded-full p-8 md:p-12 mb-1">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{
                color: "#287543",
              }}
            >
              {title}
            </h2>

            <p
              className="text-lg md:text-3xl opacity-95"
              style={{
                color: "#287543",
              }}
            >
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
        </div>
      </section>
    </>
  );
};
