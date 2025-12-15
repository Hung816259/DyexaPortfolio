export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  location: string;
  type: "online" | "in-person" | "hybrid";
  placement: string;
  prize: string;
  projectName: string;
  projectDescription: string;
  technologies: string[];
  teamSize: number;
  image: string;
  projectUrl?: string;
  certificateUrl?: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "1",
    name: "HackJakarta 2024",
    organizer: "Tech Community Jakarta",
    date: "2024-10-15",
    location: "Jakarta, Indonesia",
    type: "in-person",
    placement: "1st Place",
    prize: "$5,000 + Internship Opportunity",
    projectName: "EcoTrack",
    projectDescription: "An AI-powered carbon footprint tracking app that helps users reduce their environmental impact through personalized recommendations.",
    technologies: ["React Native", "TensorFlow", "Node.js", "MongoDB", "AWS"],
    teamSize: 4,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    projectUrl: "https://github.com/dyexarahardika/ecotrack",
    certificateUrl: "#",
  },
  {
    id: "2",
    name: "Global DevFest 2024",
    organizer: "Google Developers",
    date: "2024-09-20",
    location: "Online",
    type: "online",
    placement: "Top 10 Finalist",
    prize: "Google Cloud Credits + Mentorship",
    projectName: "HealthBridge",
    projectDescription: "A telemedicine platform connecting patients with healthcare providers using WebRTC for real-time video consultations.",
    technologies: ["React", "WebRTC", "Firebase", "Tailwind CSS", "TypeScript"],
    teamSize: 3,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    projectUrl: "https://github.com/dyexarahardika/healthbridge",
  },
  {
    id: "3",
    name: "Bali Blockchain Hackathon",
    organizer: "Blockchain Indonesia",
    date: "2024-08-10",
    location: "Bali, Indonesia",
    type: "hybrid",
    placement: "2nd Place",
    prize: "$3,000 + NFT Collection",
    projectName: "DeFiLoans",
    projectDescription: "Decentralized lending platform built on Ethereum with smart contracts for peer-to-peer loans.",
    technologies: ["Solidity", "Web3.js", "React", "Hardhat", "IPFS"],
    teamSize: 2,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    projectUrl: "https://github.com/dyexarahardika/defiloans",
    certificateUrl: "#",
  },
  {
    id: "4",
    name: "AI Innovation Challenge",
    organizer: "Microsoft Azure",
    date: "2024-07-05",
    location: "Online",
    type: "online",
    placement: "3rd Place",
    prize: "$2,000 + Azure Credits",
    projectName: "SmartResume",
    projectDescription: "AI-powered resume analyzer that provides personalized improvement suggestions using NLP and machine learning.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "Azure AI"],
    teamSize: 3,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    projectUrl: "https://github.com/dyexarahardika/smartresume",
  },
  {
    id: "5",
    name: "Surabaya Startup Weekend",
    organizer: "Techstars",
    date: "2024-06-15",
    location: "Surabaya, Indonesia",
    type: "in-person",
    placement: "Winner",
    prize: "$4,000 + Incubator Program",
    projectName: "LocalMart",
    projectDescription: "Marketplace connecting local farmers directly with consumers, reducing food waste and supporting local economy.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Mapbox", "Redis"],
    teamSize: 5,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    projectUrl: "https://github.com/dyexarahardika/localmart",
    certificateUrl: "#",
  },
  {
    id: "6",
    name: "IoT Solutions Hackathon",
    organizer: "AWS Community",
    date: "2024-05-20",
    location: "Online",
    type: "online",
    placement: "Top 5",
    prize: "AWS IoT Kit + Training Vouchers",
    projectName: "SmartHome Hub",
    projectDescription: "Centralized IoT platform for managing smart home devices with voice control and automation features.",
    technologies: ["Node.js", "MQTT", "AWS IoT", "React", "Raspberry Pi"],
    teamSize: 3,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
    projectUrl: "https://github.com/dyexarahardika/smarthome-hub",
  },
];
