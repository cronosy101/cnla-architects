'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = ['Home', 'Projects', 'Studio', 'Reviews', 'Contact'];

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side: Nav links + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Mobile menu toggle */}
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 items-center text-gray-600 text-lg">
            {links.map((link) => {
              const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
              const isActive = pathname === href;

              if (link === 'Projects') {
                return (
                  <div key={link} className="relative group">
                    <Link
                      href={href}
                      className={`transition-colors ${
                        isActive ? 'text-cyan-500' : 'hover:text-black'
                      }`}
                    >
                      {link}
                    </Link>
                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <ul className="flex flex-col text-base text-black py-2">
                        <li>
                          <Link
                            href="/housetypes/villa"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Villas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/housetypes/bungalow"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Bungalows
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              }

              if (link === 'Studio') {
                return (
                  <div key={link} className="relative group">
                    <Link
                      href={href}
                      className={`transition-colors ${
                        isActive ? 'text-cyan-500' : 'hover:text-black'
                      }`}
                    >
                      {link}
                    </Link>
                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <ul className="flex flex-col text-base text-black py-2">
                        <li>
                          <Link
                            href="/studio/team"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/studio/blog"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link}
                  href={href}
                  className={`transition-colors ${
                    isActive ? 'text-cyan-500' : 'hover:text-black'
                  }`}
                >
                  {link}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side: Logo */}
        <div className="flex items-baseline">
          <h1 className="text-3xl font-bold mr-1">CLNA</h1>
          <p className="text-sm">architects</p>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-6 pb-4 space-y-4 text-lg text-gray-700">
          {links.map((link) => {
            const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
            const isActive = pathname === href;

            if (link === 'Projects') {
              return (
                <div key={link}>
                  <Link
                    href={href}
                    className={`block py-2 ${
                      isActive ? 'text-cyan-500' : 'hover:text-black'
                    }`}
                  >
                    {link}
                  </Link>
                  <div className="ml-4 space-y-1 text-base">
                    <Link
                      href="/housetypes/villa"
                      className="block px-2 py-1 hover:text-black"
                    >
                      Villas
                    </Link>
                    <Link
                      href="/housetypes/bungalow"
                      className="block px-2 py-1 hover:text-black"
                    >
                      Bungalows
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link}
                href={href}
                className={`block py-2 ${
                  isActive ? 'text-cyan-500' : 'hover:text-black'
                }`}
              >
                {link}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
