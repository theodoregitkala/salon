import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { BookingModal } from './BookingModal';

interface BookingButtonProps {
  variant?: 'primary' | 'white';
  className?: string;
}

export function BookingButton({ variant = 'primary', className = '' }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseStyles = "inline-flex items-center gap-2 px-8 py-3 rounded-md font-semibold transition-all duration-200";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-900",
    white: "bg-white text-black hover:bg-gray-100"
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <Calendar size={20} />
        Jetzt Termin buchen
      </button>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}