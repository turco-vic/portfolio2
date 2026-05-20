export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  tags: string[];
  summary: string;
  role?: string;
  duration?: string;
  client?: string;
  cover?: string;
  links?: ProjectLinks;
  content: string; // HTML string
}

export type Theme = 'light' | 'dark';
