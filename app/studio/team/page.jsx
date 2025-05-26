import theTeam from '@/data/theTeam.json';
import Image from 'next/image';

function Page() {
  return (
    <div className="mt-52 px-4">
      <div className="grid max-w-6xl mx-auto gap-10 md:grid-cols-2">
        {theTeam.map((person, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 p-6 rounded-xl shadow-md border border-gray-200 bg-white"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src={person.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                alt={person.name}
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {person.name}
              </h2>
              <p className="text-sm text-gray-500">{person.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
