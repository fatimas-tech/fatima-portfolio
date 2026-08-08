export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  gallery?: ProjectGalleryImage[];
  github?: string;
  live?: string;
  video?: string;
  featured?: boolean;
  academic?: boolean;
  status?: "shipped" | "in-progress";
}
