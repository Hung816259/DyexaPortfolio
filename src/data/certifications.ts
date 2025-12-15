export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skills: string[];
  description: string;
  verified: boolean;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024-09",
    credentialId: "AWS-ASA-2024-1234",
    credentialUrl: "https://aws.amazon.com/certification",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"],
    description: "Validates expertise in designing distributed systems on AWS",
    verified: true,
  },
  {
    id: "2",
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "2024-08",
    credentialId: "PSM-2024-5678",
    credentialUrl: "https://scrum.org",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
    description: "Demonstrates understanding of Scrum framework and agile principles",
    verified: true,
  },
  {
    id: "3",
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2024-07",
    credentialId: "MDB-DEV-2024-9012",
    credentialUrl: "https://university.mongodb.com",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    skills: ["MongoDB", "NoSQL", "Database Design", "CRUD Operations"],
    description: "Certifies proficiency in MongoDB database development",
    verified: true,
  },
  {
    id: "4",
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2024-06",
    credentialId: "GCP-PCA-2024-3456",
    credentialUrl: "https://cloud.google.com/certification",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
    skills: ["GCP", "Cloud Architecture", "Kubernetes", "Compute Engine"],
    description: "Validates ability to design and manage robust GCP solutions",
    verified: true,
  },
  {
    id: "5",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2024-05",
    credentialId: "META-FE-2024-7890",
    credentialUrl: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    skills: ["React", "JavaScript", "HTML/CSS", "Version Control"],
    description: "Comprehensive front-end development skills certified by Meta",
    verified: true,
  },
  {
    id: "6",
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2024-04",
    credentialId: "DCA-2024-2345",
    credentialUrl: "https://docker.com/certification",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
    skills: ["Docker", "Containerization", "Docker Compose", "DevOps"],
    description: "Demonstrates proficiency in Docker containerization technology",
    verified: true,
  },
  {
    id: "7",
    name: "GitHub Actions CI/CD Certification",
    issuer: "GitHub",
    date: "2024-03",
    credentialId: "GH-CICD-2024-6789",
    credentialUrl: "https://github.com/certification",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    skills: ["CI/CD", "GitHub Actions", "Automation", "DevOps"],
    description: "Expertise in implementing CI/CD pipelines with GitHub Actions",
    verified: true,
  },
  {
    id: "8",
    name: "Figma Professional Design Certificate",
    issuer: "Figma",
    date: "2024-02",
    credentialId: "FIG-PRO-2024-1111",
    credentialUrl: "https://figma.com/certification",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    skills: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    description: "Advanced proficiency in Figma for professional design work",
    verified: true,
  },
];
