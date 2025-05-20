import projects from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link';

function LatestProjects() {
  // console.log(projects[0]);

  const latestProjects = projects
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="w-full flex justify-center mt-24 px-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-semibold mb-8">Latest Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`}>
              <li
                key={index}
                className="rounded-xl shadow-md border border-gray-200 overflow-hidden bg-white"
              >
                <div className="relative w-full h-60">
                  <Image
                    sizes={0}
                    src={project.images[0]}
                    fill
                    className="object-cover"
                    alt={`Image of ${project.adres}`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">{project.adres}</h3>
                  <p className="text-sm text-gray-600">{project.text1}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default LatestProjects;
