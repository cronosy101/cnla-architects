// 'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { getAllProjects } from '@/lib/actions';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projectData, setProjectData] = useState(null);

  async function fetchProjects() {
    const allProjects = await getAllProjects();
    setProjectData(allProjects);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{ projectData, setProjectData, fetchProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  return useContext(ProjectContext);
}
