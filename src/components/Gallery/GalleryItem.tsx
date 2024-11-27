import React from 'react';

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
}

export function GalleryItem({ image, title, category }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg aspect-square">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-200">{category}</p>
        </div>
      </div>
    </div>
  );
}