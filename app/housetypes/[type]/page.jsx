'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import { useProject } from '@/context/AllProjectsContext';
import { useParams } from 'next/navigation';

export default function Page() {
  const { projectData } = useProject();
  const [filteredHouses, setFilteredHouses] = useState([]);
  const params = useParams();
  const type = params?.type;

  // console.log('projectdata context from housetypes/type/page', projectData);

  // filter by type if type or data changes
  useEffect(() => {
    if (projectData) {
      const houses = projectData.filter((p) => p.type === type);
      setFilteredHouses(houses);
    }
  }, [projectData, type]);

  return (
    <section className="mt-52 px-4 w-full flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-24">
        {filteredHouses.map((house) => (
          <div
            key={house.id}
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center"
          >
            <div className="grid grid-cols-3 gap-2 h-64">
              <div className="col-span-2 relative h-full rounded-xl overflow-hidden">
                <Image
                  sizes={0}
                  src={house.images[0]}
                  fill
                  className="object-cover"
                  alt="Main image"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2 h-full">
                <div className="relative flex-1 rounded-xl overflow-hidden">
                  <Image
                    sizes={0}
                    src={house.images[1]}
                    fill
                    className="object-cover"
                    alt="Interior image"
                  />
                </div>
                <div className="relative flex-1 rounded-xl overflow-hidden">
                  <Image
                    sizes={0}
                    src={house.images[2]}
                    fill
                    className="object-cover"
                    alt="Other image"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">{house.adres}</h2>
              <p className="text-gray-700">{house.text1}</p>
              <p className="text-gray-500 text-sm">{house.date}</p>
              <Link
                className="text-gray-600 flex items-center hover:text-black"
                href={`/projects/${house.id}`}
              >
                <p>go to project </p> <FaAngleRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
