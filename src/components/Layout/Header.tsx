import { Menu, Phone, Clock } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+49 176 72 36 01 09 - 152 10 20 91 70</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Di-Sa: 9:00-19:00</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">DE</a>
            <a href="#" className="hover:text-gray-300">EN</a>
          </div>
        </div>
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold">Fashion Point</a>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Startseite</NavLink>
            <NavLink href="/about">Über uns</NavLink>
            <NavLink href="/services">Leistungen</NavLink>
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/gallery">Galerie</NavLink>
            <NavLink href="/contact">Kontakt</NavLink>
          </div>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}