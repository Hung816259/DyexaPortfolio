export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  duration: string;
  role: string;
  team: number;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    subtitle: "Modernizing a legacy online marketplace",
    client: "TechMart Indonesia",
    duration: "3 months",
    role: "Lead Full-Stack Developer",
    team: 5,
    overview: "Complete redesign and migration of a legacy e-commerce platform to a modern tech stack, improving performance and user experience.",
    problem: "The client's existing platform was built on outdated technology, resulting in slow page loads, poor mobile experience, and difficulty scaling. Customer conversion rates were declining, and the admin panel was difficult to use.",
    solution: "Implemented a modern architecture using Next.js for server-side rendering, implemented a headless CMS, integrated Stripe for payments, and built a comprehensive admin dashboard. Used Redis for caching and PostgreSQL for the database.",
    results: [
      "Reduced page load time by 65%",
      "Increased mobile conversions by 45%",
      "Improved admin efficiency by 70%",
      "Reduced infrastructure costs by 30%",
      "Achieved 99.9% uptime",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe", "Tailwind CSS", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
      "https://images.unsplash.com/photo-1556742208-999815fca738",
    ],
    liveUrl: "https://techmart-demo.com",
    githubUrl: "https://github.com/dyexarahardika/techmart",
    metrics: [
      { label: "Performance Score", value: "95/100", icon: "Zap" },
      { label: "User Satisfaction", value: "4.8/5", icon: "Star" },
      { label: "Response Time", value: "<200ms", icon: "Clock" },
      { label: "Traffic Growth", value: "+120%", icon: "TrendingUp" },
    ],
  },
  {
    id: "2",
    title: "Healthcare Management System",
    subtitle: "Digital transformation for medical clinics",
    client: "MediCare Clinics",
    duration: "4 months",
    role: "Full-Stack Developer & System Architect",
    team: 6,
    overview: "Developed a comprehensive healthcare management system for patient records, appointments, prescriptions, and billing.",
    problem: "The clinic was using paper-based records and multiple disconnected software solutions, leading to inefficiencies, data errors, and poor patient experience. Doctors spent too much time on administrative tasks.",
    solution: "Built an integrated cloud-based solution with patient portal, doctor dashboard, automated appointment scheduling, electronic health records (EHR), prescription management, and integrated billing. Implemented role-based access control and HIPAA-compliant security.",
    results: [
      "Reduced administrative time by 60%",
      "Improved appointment scheduling efficiency by 80%",
      "Eliminated paper records completely",
      "Increased patient satisfaction by 55%",
      "Reduced billing errors by 95%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "WebSocket", "Chart.js", "PDF Generator"],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    ],
    metrics: [
      { label: "Time Saved", value: "40hrs/week", icon: "Clock" },
      { label: "Patient Records", value: "10,000+", icon: "Users" },
      { label: "Daily Users", value: "500+", icon: "Activity" },
      { label: "System Uptime", value: "99.95%", icon: "Shield" },
    ],
  },
  {
    id: "3",
    title: "Real-Time Analytics Dashboard",
    subtitle: "Business intelligence for data-driven decisions",
    client: "FinanceFlow Corp",
    duration: "2 months",
    role: "Frontend Developer & Data Visualization Specialist",
    team: 3,
    overview: "Created a real-time analytics dashboard for monitoring business metrics, financial data, and customer insights.",
    problem: "The company relied on static reports generated weekly, missing real-time insights and opportunities. Decision-makers needed instant access to key metrics and trends.",
    solution: "Developed an interactive dashboard with real-time data visualization, customizable widgets, automated alerts, and export capabilities. Integrated with multiple data sources and implemented efficient data aggregation.",
    results: [
      "Real-time data updates every 5 seconds",
      "Reduced report generation time from days to seconds",
      "Enabled data-driven decisions 5x faster",
      "Increased revenue by identifying trends 70% earlier",
      "Saved 100+ hours monthly on manual reporting",
    ],
    technologies: ["React", "D3.js", "Recharts", "WebSocket", "Redis", "Express", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    ],
    liveUrl: "https://financeflow-dashboard.com",
    metrics: [
      { label: "Data Points", value: "1M+/day", icon: "Database" },
      { label: "Refresh Rate", value: "5 sec", icon: "RefreshCw" },
      { label: "Dashboard Users", value: "200+", icon: "Users" },
      { label: "Metrics Tracked", value: "150+", icon: "BarChart" },
    ],
  },
];
