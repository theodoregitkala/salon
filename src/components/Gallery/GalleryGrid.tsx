import React from 'react';
import { GalleryItem } from './GalleryItem';

interface GalleryGridProps {
  items: {
    id: number;
    image: string;
    title: string;
    category: string;
  }[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <GalleryItem
          key={item.id}
          image={item.image}
          title={item.title}
          category={item.category}
        />
      ))}
    </div>
  );
}