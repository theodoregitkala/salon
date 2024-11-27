import React from 'react';
import { BookingButton } from '../Booking/BookingButton';

export function Hero() {
  return (
    <div className="relative h-[80vh] bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80")',
          opacity: 0.6
        }}
      />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Willkommen bei John
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Ihr exklusiver Herrenfriseur in Ludwigshafen.
          </p>
          <BookingButton variant="white" />
        </div>
      </div>
    </div>
  );
}