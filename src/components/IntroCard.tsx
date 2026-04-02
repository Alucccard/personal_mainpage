import React from "react";
import Image from "next/image";

interface IntroCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  position?: "first" | "middle" | "last";
  width?: string; // e.g., "w-64", "w-full"
  height?: string; // e.g., "h-80", "min-h-80"
}

export const IntroCard: React.FC<IntroCardProps> = ({
  icon,
  title,
  description,
  position = "middle",
  width = "w-full",
  height = "min-h-80",
}) => {
  const positionStyles = {
    first: "",
    middle: "",
    last: "",
  };

  return (
    <div
      className={`text-center py-8 px-12 ${width} ${height} ${positionStyles[position]}`}
    >
      {icon && (
        <div className="mb-4 flex justify-center">
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt={title}
              width={150}
              height={150}
              className="object-contain"
            />
          ) : (
            <div className="text-5xl text-blue-400">{icon}</div>
          )}
        </div>
      )}
      <h3 className="text-xl font-bold text-title mb-3 py-2">{title}</h3>
      <p className=" leading-relaxed text-description">{description}</p>
    </div>
  );
};
