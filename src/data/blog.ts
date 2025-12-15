export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  image: string;
  author: string;
  views: number;
  likes: number;
}

export const blogCategories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "DevOps",
  "UI/UX",
  "Career",
  "Tutorials",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large-scale React applications using TypeScript for better maintainability and type safety.",
    content: "Full article content here...",
    category: "Web Development",
    tags: ["React", "TypeScript", "Architecture", "Best Practices"],
    date: "2024-11-05",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    author: "Dyexa Rahardika",
    views: 1245,
    likes: 89,
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS: Advanced Techniques",
    excerpt: "Explore advanced Tailwind CSS techniques including custom configurations, plugins, and responsive design patterns.",
    content: "Full article content here...",
    category: "UI/UX",
    tags: ["Tailwind CSS", "CSS", "Design", "Responsive"],
    date: "2024-11-02",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    author: "Dyexa Rahardika",
    views: 892,
    likes: 67,
  },
  {
    id: "3",
    title: "Docker for Developers: A Complete Guide",
    excerpt: "From basics to advanced containerization strategies, learn how to leverage Docker in your development workflow.",
    content: "Full article content here...",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containers", "CI/CD"],
    date: "2024-10-28",
    readTime: 12,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b",
    author: "Dyexa Rahardika",
    views: 2134,
    likes: 156,
  },
  {
    id: "4",
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "A comprehensive guide to creating robust, secure, and scalable REST APIs using Node.js and Express framework.",
    content: "Full article content here...",
    category: "Web Development",
    tags: ["Node.js", "Express", "API", "Backend"],
    date: "2024-10-25",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    author: "Dyexa Rahardika",
    views: 1678,
    likes: 123,
  },
  {
    id: "5",
    title: "Introduction to GraphQL: Beyond REST",
    excerpt: "Discover the power of GraphQL and why it's becoming the preferred choice for modern API development.",
    content: "Full article content here...",
    category: "Web Development",
    tags: ["GraphQL", "API", "React", "Apollo"],
    date: "2024-10-20",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    author: "Dyexa Rahardika",
    views: 1456,
    likes: 98,
  },
  {
    id: "6",
    title: "My Journey from Student to Full-Stack Developer",
    excerpt: "Personal insights and lessons learned during my transition from being a student to a professional developer.",
    content: "Full article content here...",
    category: "Career",
    tags: ["Career", "Personal Growth", "Learning", "Experience"],
    date: "2024-10-15",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    author: "Dyexa Rahardika",
    views: 3421,
    likes: 267,
  },
];
