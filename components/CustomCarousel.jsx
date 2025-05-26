'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  'lissete-laverde-7OFTxbGWqwk-unsplash.jpg',
  'lycs-architecture-kUdbEEMcRwE-unsplash.jpg',
  'murat-demircan-FkxmAuYD8ls-unsplash.jpg',
  'salman-saqib-WaC-JFfF21M-unsplash.jpg',
  'spacejoy-9M66C_w_ToM-unsplash.jpg',
];

export default function CustomCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50rem] overflow-hidden  z-0">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            sizes={0}
            src={`/ImagesCustomCarousel/${src}`}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            // className={`object-cover transition-transform duration-[10000ms] ease-in ${
            //   index === current ? 'scale-110' : 'scale-100'
            // }`}
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute bottom-0 z-20 text-white ml-4">
        <div className="flex items-baseline ">
          <h2 className="text-8xl mr-1">CLNA</h2>
          <p>architects</p>
        </div>

        <p className="text-4xl">Where Form Meets Purpose</p>
      </div>
    </div>
  );
}
