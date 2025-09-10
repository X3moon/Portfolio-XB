
export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  liveDemoUrl: string;
  githubUrl: string;
  techStack: string[];
  image: string;
}

export interface Certification {
  name:string;
  issuer: string;
  url: string;
}
