"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";

interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  link,
}) => {
  const [isLoading, setIsLoading] = useState(!!imageUrl);

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 m-4 mt-0">
      {/* Image */}
      <div className="w-full h-64 bg-gray-200 overflow-hidden relative ">
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
        )}
        {/* Image */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={510}
            height={355}
            fill
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-lg font-bold text-title mb-6 mt-1">{title}</h3>
        <p className="text-sm leading-relaxed mb-8 h-20 text-description">
          {description}
        </p>

        <div className="flex gap-2 mb-2">
          <Button
            href={`/portfolio/${id}`}
            variant="secondary"
            size="large"
            className="text-xs"
          >
            Find more
          </Button>
        </div>
      </div>
    </div>
  );
};
