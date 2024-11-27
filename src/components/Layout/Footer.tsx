import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fashion Point</h3>
            <p className="text-gray-400 mb-4">
              Ihr exklusiver Herrenfriseur in Ludwigshafen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                Saarland Str. 153, 67061 Ludwigshafen
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +49 176 72 36 01 09
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                kontakt@boubou-berlin.de
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-gray-400">
              <p>Dienstag - Freitag: 9:00 - 19:00</p>
              <p>Samstag: 9:00 - 19:00</p>
              <p>Sonntag - Montag: Geschlossen</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fashion Point Salon John. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}