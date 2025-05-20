'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();
  const links = ['Home', 'Projects', 'Studio', 'Reviews', 'Contact'];

  return (
    <div className="fixed top-0 left-0 z-20 bg-white flex justify-center w-full mx-auto p-6 ">
      <div className=" max-w-6xl w-full flex justify-between">
        {/* Left: Navigation links */}
        <div className="flex text-2xl justify-between gap-6 items-center text-gray-600">
          {links.map((link) => {
            const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
            const isActive = pathname === href;

            if (link === 'Projects') {
              return (
                <div key={link} className="relative group ">
                  {/* Clickable link */}
                  <Link
                    href={href}
                    className={`cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link}
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300 z-10">
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

            return (
              <Link
                key={link}
                href={href}
                className={`cursor-pointer transition-colors duration-200 ${
                  isActive ? 'text-cyan-400' : 'text-gray-600 hover:text-black'
                }`}
              >
                {link}
              </Link>
            );
          })}
        </div>

        {/* Right: Logo */}
        <div className="flex items-baseline">
          <h1 className="text-4xl mr-1 font-bold">CLNA</h1>
          <p>architects</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
