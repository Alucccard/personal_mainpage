"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link?: string;
  commentCount?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  link = "#",
  commentCount = 0,
}) => {
  const [isLoading, setIsLoading] = useState(!!imageUrl);

  return (
    <div className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 m-4 mt-0">
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
            fill
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </div>

      {/* Header with Date */}
      <div className="p-6 mt-4 ">
        <h3 className="text-lg font-bold text-title mb-2">{title}</h3>
        <time className="text-sm italic text-gray-500">
          {new Date(date).toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-description h-30 text-sm leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Button
            href={link}
            variant="primary"
            size="large"
            className="text-xs w-50"
          >
            📒 Open
          </Button>
          <Button variant="secondary" size="large" className="text-xs w-50 ">
            💬 Comments
          </Button>
        </div>
      </div>
    </div>
  );
};
