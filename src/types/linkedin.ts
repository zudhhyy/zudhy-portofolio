export interface LinkedInProfile {
  name: string;
  headline: string;
  location: string;
  about: string;
  contact: {
    email?: string;
    linkedin: string;
    github?: string;
    website?: string;
  };
}

export interface Skill {
  name: string;
  category: 'Programming Languages' | 'Frameworks & Libraries' | 'Tools & Technologies' | 'Databases' | 'Cloud & DevOps' | 'Design & UI/UX';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface LinkedInData {
  profile: LinkedInProfile;
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
} 