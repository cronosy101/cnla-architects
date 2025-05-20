import Image from 'next/image';
import Link from 'next/link';

const housingTypes = [
  {
    name: 'Villas',
    slug: 'villa',
    images: [
      '/projectsPage/villa001.jpg',
      '/projectsPage/villa002.jpg',
      '/projectsPage/villa003.jpg',
    ],
    description:
      'Discover our collection of elegant, modern villas designed for timeless living and architectural harmony.',
  },
  {
    name: 'Bungalows',
    slug: 'bungalow',
    images: [
      '/projectsPage/bungalow001.jpg',
      '/projectsPage/bungalow002.jpg',
      '/projectsPage/bungalow003.jpg',
    ],
    description:
      'Explore our collection of single-story bungalows designed for accessible, open, and comfortable living — where simplicity meets elegance.',
  },
  // Add more here if needed...
];

export default function Page() {
  return (
    <section className="w-full flex flex-col items-center mt-52 px-4 text-black">
      {housingTypes.map((type, i) => (
        <div
          key={type.slug}
          className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center ${
            i > 0 ? 'mt-24' : ''
          }`}
        >
          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-2 h-64">
            <div className="col-span-2 relative h-full rounded-xl overflow-hidden">
              <Image
                src={type.images[0]}
                fill
                className="object-cover"
                alt={`${type.name} main`}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2 h-full">
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image
                  src={type.images[1]}
                  fill
                  className="object-cover"
                  alt={`${type.name} secondary 1`}
                />
              </div>
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image
                  src={type.images[2]}
                  fill
                  className="object-cover"
                  alt={`${type.name} secondary 2`}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{type.name}</h2>
            <p className="text-gray-700">{type.description}</p>
            <Link
              href={`/housetypes/${type.slug}`}
              className={`inline-block text-sm font-medium text-cyan-400 hover:underline`}
            >
              View all {type.name.toLowerCase()} →
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
