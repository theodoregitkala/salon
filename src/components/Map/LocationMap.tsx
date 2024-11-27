import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

// Fix for default marker icon
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export function LocationMap() {
  const position: [number, number] = [49.4791, 8.4353]; // Coordinates for Saarland Str. 153, Ludwigshafen

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Besuchen Sie uns</h2>
          <p className="text-gray-600">
            Finden Sie uns in der Saarland Str. 153, 67061 Ludwigshafen
          </p>
        </div>
        <div className="relative">
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer 
              center={position} 
              zoom={15} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold mb-1">Fashion Point</h3>
                    <p className="text-sm">Saarland Str. 153, 67061 Ludwigshafen</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-black" />
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Saarland+Str.+153+67061+Ludwigshafen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                Route planen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}