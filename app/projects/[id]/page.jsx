// import projects from '@/data/projects.json';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import { getProject } from '@/lib/actions';

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = await getProject(id);
  // console.log('data from database projects/id = ', project);
  // const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="mt-52 text-center text-red-500">Project not found</div>
    );
  }

  return (
    <div className="mt-52 w-full flex justify-center px-4 text-black">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold capitalize">{project.type}</h1>
          <p className="text-gray-600">{project.adres}</p>
          <p className="text-sm text-gray-500">{project.date}</p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                fill
                className="object-cover"
                alt={`Project image ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Text Sections */}
        <div className="space-y-6">
          <p className="text-lg">{project.text1}</p>
          <p className="text-gray-700 leading-relaxed">{project.text2}</p>
        </div>
        <Link
          className="text-gray-600 flex items-center hover:text-black"
          href={`/housetypes/${project.type}`}
        >
          <p>back to {project.type}s </p> <FaAngleRight />
        </Link>
      </div>
    </div>
  );
}
