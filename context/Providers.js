'use client';

import { ProjectProvider } from '@/context/AllProjectsContext';

export default function Providers({ children }) {
  return <ProjectProvider>{children}</ProjectProvider>;
}
