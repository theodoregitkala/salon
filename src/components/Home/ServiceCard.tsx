import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  duration?: string;
  details: string[];
}

export function ServiceCard({ icon, title, description, price, duration, details }: ServiceCardProps) {
  return (
    <div className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 bg-white group">
      <div className="mb-6 text-gray-800 group-hover:text-black transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xl font-bold">{price}</span>
        {duration && (
          <span className="text-sm text-gray-500">
            {duration}
          </span>
        )}
      </div>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}