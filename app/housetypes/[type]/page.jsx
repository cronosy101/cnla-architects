import Image from 'next/image';
import projects from '@/data/projects.json';

async function Page({ params }) {
  const { type } = await params;

  const houses = projects.filter((p) => p.type === type);

  return (
    <section className="mt-52 px-4 w-full flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-24">
        {houses.map((house) => (
          <div
            key={house.id}
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center"
          >
            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-2 h-64">
              {/* Main Image */}
              <div className="col-span-2 relative h-full rounded-xl overflow-hidden">
                <Image
                  sizes={0}
                  src={house.images[0]}
                  fill
                  className="object-cover"
                  alt="Main image"
                />
              </div>

              {/* Side Images */}
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

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">{house.adres}</h2>
              <p className="text-gray-700">{house.text1}</p>
              <p className="text-gray-500 text-sm">{house.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
