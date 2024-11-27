import React from 'react';
import { Scissors, Ruler, Sparkles } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { BookingButton } from '../Booking/BookingButton';

const services = [
  {
    icon: <Scissors className="w-12 h-12" />,
    title: 'Haarschnitt',
    description: 'Ein individueller Schnitt, der zu Ihrem Stil und Ihrer Gesichtsform passt.',
    price: 'Ab 30€',
    duration: '45 Min',
    details: [
      'Persönliche Beratung',
      'Haarwäsche und Kopfmassage',
      'Schnitt nach Ihren Wünschen',
      'Styling mit Profi-Produkten'
    ]
  },
  {
    icon: <Ruler className="w-12 h-12" />,
    title: 'Bartpflege',
    description: 'Ein kompletter Service für die Pflege und das Styling Ihres Bartes.',
    price: 'Ab 20€',
    duration: '30 Min',
    details: [
      'Präzises Barttrimmen',
      'Konturierung',
      'Premium Bartöl',
      'Individuelle Pflegetipps'
    ]
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: 'Gesichtsbehandlung',
    description: 'Ein Moment der Entspannung für revitalisierte Haut.',
    price: 'Ab 40€',
    duration: '45 Min',
    details: [
      'Tiefenreinigung',
      'Sanftes Peeling',
      'Typgerechte Gesichtsmaske',
      'Entspannende Gesichtsmassage'
    ]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-gray-600">
            Entdecken Sie unsere exklusiven Dienstleistungen für Herren, 
            entwickelt für ein einzigartiges und persönliches Erlebnis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              details={service.details}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <BookingButton />
        </div>
      </div>
    </section>
  );
}