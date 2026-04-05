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
  videoUrl?: string;
  link?: string;
  commentCount?: number;
}

export const InterestsCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  videoUrl,
  link = "#",
  commentCount = 0,
}) => {
  const [isLoading, setIsLoading] = useState(!!imageUrl);
  console.log("BlogCard videoUrl:", videoUrl);
  return (
    <div className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 m-4 mt-0">
      {/* Media: Image or Video */}
      <div className="w-full aspect-video bg-gray-200 overflow-hidden relative">
        {/* Video */}
        {videoUrl && (
          <iframe
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        )}

        {/* Image */}
        {!videoUrl && (
          <>
            {isLoading && (
              <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
            )}
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </>
        )}
      </div>

      {/* Header with Date */}
      <div className="p-6 mt-4 ">
        <h3 className="text-lg font-bold text-title mb-2">{title}</h3>
        {/* <time className="text-sm italic text-gray-500">
          {new Date(date).toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time> */}
      </div>

      {/* Content */}
      {/* <div className="p-6">
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
      </div> */}
    </div>
  );
};
