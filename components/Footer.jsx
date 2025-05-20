import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full flex justify-center mt-24 mb-10 border-t pt-8 px-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full text-sm text-gray-700">
        {/* Address */}
        <div>
          <p className="font-semibold mb-2">CNLA Architects</p>
          <p>1213 AB Westlaren</p>
          <p>050 123 1234</p>
          <p>info@cnla.com</p>
        </div>

        {/* Projects */}
        <div className="flex flex-col">
          <Link className="font-semibold mb-2" href="/projects">
            Projects
          </Link>
          <Link href="/projects/villa">Villas</Link>
          <Link href="/projects/bungalow">Bungalows</Link>
        </div>

        {/* Locations */}
        <div>
          <p className="font-semibold mb-2">Locations</p>
          <p>Westlaren</p>
          <p>Blongen</p>
          <p>Steeningen</p>
        </div>

        {/* Socials */}
        <div>
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-4 mt-1 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-black transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-black transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="hover:text-black transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
