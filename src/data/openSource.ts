export interface OpenSourceContribution {
  id: string;
  project: string;
  organization: string;
  description: string;
  contributionType: string[];
  technologies: string[];
  stars: number;
  forks: number;
  contributions: number;
  firstContribution: string;
  lastContribution: string;
  githubUrl: string;
  websiteUrl?: string;
  logo: string;
  featured: boolean;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "1",
    project: "React",
    organization: "Meta",
    description: "A JavaScript library for building user interfaces",
    contributionType: ["Bug Fixes", "Documentation", "Code Review"],
    technologies: ["JavaScript", "React", "Flow"],
    stars: 220000,
    forks: 45000,
    contributions: 8,
    firstContribution: "2024-03-10",
    lastContribution: "2024-10-25",
    githubUrl: "https://github.com/facebook/react",
    websiteUrl: "https://react.dev",
    logo: "https://i.pinimg.com/1200x/1b/ab/ba/1babba304aeae6d32624208602745fd2.jpg",
    featured: true,
  },
  {
    id: "2",
    project: "TypeScript",
    organization: "Microsoft",
    description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output",
    contributionType: ["Bug Fixes", "Type Definitions"],
    technologies: ["TypeScript", "JavaScript"],
    stars: 98000,
    forks: 12000,
    contributions: 5,
    firstContribution: "2024-05-15",
    lastContribution: "2024-09-20",
    githubUrl: "https://github.com/microsoft/TypeScript",
    websiteUrl: "https://typescriptlang.org",
    logo: "https://i.pinimg.com/736x/de/06/91/de0691d0b23e9bed0c6a1b1dc471259c.jpg",
    featured: true,
  },
  {
    id: "3",
    project: "Next.js",
    organization: "Vercel",
    description: "The React Framework for Production",
    contributionType: ["Features", "Documentation", "Examples"],
    technologies: ["React", "Next.js", "TypeScript"],
    stars: 120000,
    forks: 26000,
    contributions: 12,
    firstContribution: "2024-01-20",
    lastContribution: "2024-10-30",
    githubUrl: "https://github.com/vercel/next.js",
    websiteUrl: "https://nextjs.org",
    logo: "https://i.pinimg.com/736x/a4/52/ea/a452eae371f079b141494c5aff07a140.jpg",
    featured: true,
  },
  {
    id: "4",
    project: "Tailwind CSS",
    organization: "Tailwind Labs",
    description: "A utility-first CSS framework for rapid UI development",
    contributionType: ["Plugins", "Documentation", "Bug Fixes"],
    technologies: ["CSS", "JavaScript", "PostCSS"],
    stars: 78000,
    forks: 4000,
    contributions: 6,
    firstContribution: "2024-04-10",
    lastContribution: "2024-08-15",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
    websiteUrl: "https://tailwindcss.com",
    logo: "https://i.pinimg.com/1200x/eb/bd/64/ebbd64ad2af51779d27e265216f6330a.jpg",
    featured: false,
  },
  {
    id: "5",
    project: "Node.js",
    organization: "OpenJS Foundation",
    description: "Node.js JavaScript runtime",
    contributionType: ["Documentation", "Testing"],
    technologies: ["JavaScript", "Node.js", "C++"],
    stars: 102000,
    forks: 28000,
    contributions: 4,
    firstContribution: "2024-06-05",
    lastContribution: "2024-09-10",
    githubUrl: "https://github.com/nodejs/node",
    websiteUrl: "https://nodejs.org",
    logo: "https://i.pinimg.com/1200x/16/3e/71/163e717410b817a6d0719792479cfc07.jpg",
    featured: false,
  },
  {
    id: "6",
    project: "VS Code",
    organization: "Microsoft",
    description: "Visual Studio Code - Open Source IDE",
    contributionType: ["Extensions", "Bug Fixes"],
    technologies: ["TypeScript", "Electron", "JavaScript"],
    stars: 158000,
    forks: 28000,
    contributions: 7,
    firstContribution: "2024-02-15",
    lastContribution: "2024-10-05",
    githubUrl: "https://github.com/microsoft/vscode",
    websiteUrl: "https://code.visualstudio.com",
    logo: "https://i.pinimg.com/1200x/ca/7e/17/ca7e17a6e4bfcbad483aae32c538ef59.jpg",
    featured: false,
  },
  {
    id: "7",
    project: "Supabase",
    organization: "Supabase",
    description: "The open source Firebase alternative",
    contributionType: ["Features", "Documentation", "Examples"],
    technologies: ["TypeScript", "PostgreSQL", "React"],
    stars: 65000,
    forks: 6000,
    contributions: 9,
    firstContribution: "2024-07-20",
    lastContribution: "2024-10-28",
    githubUrl: "https://github.com/supabase/supabase",
    websiteUrl: "https://supabase.com",
    logo: "https://www.lexacle.com/_next/image?url=%2Fassets%2Fimg%2Ftechnologies%2Fphotos%2Fsupabase.jpg&w=2048&q=75",
    featured: false,
  },
];

export const openSourceStats = {
  totalProjects: openSourceContributions.length,
  totalContributions: openSourceContributions.reduce((sum, c) => sum + c.contributions, 0),
  featuredProjects: openSourceContributions.filter((c) => c.featured).length,
  totalStars: openSourceContributions.reduce((sum, c) => sum + c.stars, 0),
};
