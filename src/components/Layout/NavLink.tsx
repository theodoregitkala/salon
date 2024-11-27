import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-gray-300 transition-colors duration-200"
    >
      {children}
    </a>
  );
}