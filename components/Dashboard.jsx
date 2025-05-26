'use client';
import { useProject } from '@/context/AllProjectsContext';
import Image from 'next/image';
import { useState } from 'react';
import AddProjectForm from './AddProjectForm';
import { deleteProject } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';

function Dashboard() {
  const router = useRouter();
  const links = ['projects', 'add project', 'reviews'];
  const [link, setLink] = useState('projects');
  const { projectData, fetchProjects } = useProject();

  const sortedProject = projectData
    ? [...projectData].sort((a, b) => a.adres.localeCompare(b.adres))
    : [];

  async function handleDelete(id) {
    try {
      await deleteProject(id);
      await fetchProjects();
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  }

  //   console.log(sortedProject);

  //   console.log('project data from dashboard =', projectData);
  //   console.log('link=', link);

  return (
    <div className="grid grid-cols-[1fr_6fr]">
      <ul className="border p-2">
        {links.map((l, index) => (
          <li
            key={index}
            onClick={() => setLink(l)}
            className={`hover:cursor-pointer mb-2 ${
              l === link ? 'text-cyan-400 ' : 'text-black'
            }`}
          >
            {l}
          </li>
        ))}
      </ul>
      <div className="border p-4">
        {link === 'projects' && (
          <ul className="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {sortedProject.map((project) => (
              <li
                key={project.id}
                className="relative flex gap-4 border max-w-96 shadow-xl rounded-xl hover:cursor-pointer"
              >
                <div className="relative h-40 w-40">
                  <Image
                    sizes={0}
                    fill
                    src={
                      project.images
                        ? project.images[0]
                        : '/projects/house1.jpg'
                    }
                    className="object-cover rounded-xl"
                    alt="house-image"
                  />
                </div>
                <div className="pr-1">
                  <p>{project.adres}</p>
                  <p>{project.zip}</p>
                  <p>{project.type}</p>
                  <p>{project.date}</p>
                </div>
                <FaTimes
                  onClick={() => handleDelete(project.id)}
                  className="absolute bottom-2 right-2 hover:text-red-500"
                />
              </li>
            ))}
          </ul>
        )}
        {link === 'add project' && <AddProjectForm setLink={setLink} />}
        {link === 'reviews' && <div>test3</div>}
      </div>
    </div>
  );
}
export default Dashboard;
