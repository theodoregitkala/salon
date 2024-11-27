import React from 'react';
import { GalleryGrid } from './GalleryGrid';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1582710550276-a4ba0a218a1c?auto=format&fit=crop&q=80',
    title: 'Afrikanische Boxerflechten',
    category: 'Flechtfrisuren'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1594359731372-2cb2d81ded8c?auto=format&fit=crop&q=80',
    title: 'Dreadlocks Styling',
    category: 'Dreadlocks'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605980625600-88b46a80f5d8?auto=format&fit=crop&q=80',
    title: 'Twist Out',
    category: 'Naturhaar'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80',
    title: 'Cornrows',
    category: 'Flechtfrisuren'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80',
    title: 'Afro Fade',
    category: 'Fade Cuts'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1605497787865-e6d2f658f9c0?auto=format&fit=crop&q=80',
    title: 'Box Braids',
    category: 'Flechtfrisuren'
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unsere Galerie</h2>
          <p className="text-gray-600">
            Entdecken Sie unsere Expertise in afrikanischen Frisuren. 
            Von traditionellen Flechtfrisuren bis hin zu modernen Interpretationen.
          </p>
        </div>
        <GalleryGrid items={galleryItems} />
      </div>
    </section>
  );
}