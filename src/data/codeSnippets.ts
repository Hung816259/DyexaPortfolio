export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  category: string;
  tags: string[];
  likes: number;
  copies: number;
  date: string;
}

export const snippetCategories = [
  "All",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "CSS",
  "Node.js",
  "Utilities",
];

export const codeSnippets: CodeSnippet[] = [
  {
    id: "1",
    title: "Custom React Hook - useLocalStorage",
    description: "A reusable hook for managing localStorage with React state synchronization",
    language: "typescript",
    code: `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;`,
    category: "React",
    tags: ["React", "Hooks", "TypeScript", "LocalStorage"],
    likes: 245,
    copies: 89,
    date: "2024-11-01",
  },
  {
    id: "2",
    title: "Debounce Function",
    description: "Utility function to debounce any function call",
    language: "typescript",
    code: `export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}`,
    category: "Utilities",
    tags: ["JavaScript", "TypeScript", "Utilities", "Performance"],
    likes: 189,
    copies: 156,
    date: "2024-10-28",
  },
  {
    id: "3",
    title: "Glassmorphism Card Component",
    description: "Beautiful glassmorphism card with Tailwind CSS",
    language: "tsx",
    code: `interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <div className={\`
      bg-white/10 backdrop-blur-lg 
      border border-white/20 
      rounded-xl shadow-xl 
      p-6 
      hover:bg-white/20 
      transition-all duration-300
      \${className}
    \`}>
      {children}
    </div>
  );
};`,
    category: "React",
    tags: ["React", "Tailwind", "UI", "Components"],
    likes: 312,
    copies: 201,
    date: "2024-10-25",
  },
  {
    id: "4",
    title: "API Error Handler",
    description: "Centralized error handling for API requests",
    language: "typescript",
    code: `export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function handleApiResponse<T>(
  response: Response
): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      error.message || 'An error occurred',
      error
    );
  }
  return response.json();
}`,
    category: "Utilities",
    tags: ["TypeScript", "API", "Error Handling", "Utilities"],
    likes: 167,
    copies: 94,
    date: "2024-10-20",
  },
  {
    id: "5",
    title: "Array Chunk Utility",
    description: "Split an array into chunks of specified size",
    language: "typescript",
    code: `export function chunk<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, index) => array.slice(index * size, (index + 1) * size)
  );
}

// Usage:
// chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]`,
    category: "Utilities",
    tags: ["TypeScript", "Array", "Utilities"],
    likes: 134,
    copies: 78,
    date: "2024-10-15",
  },
  {
    id: "6",
    title: "Gradient Text Animation",
    description: "Animated gradient text using CSS and Tailwind",
    language: "css",
    code: `@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-text {
  background: linear-gradient(
    90deg,
    #0ea5e9,
    #38bdf8,
    #06b6d4,
    #0ea5e9
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 3s ease infinite;
}`,
    category: "CSS",
    tags: ["CSS", "Animation", "Gradients", "Tailwind"],
    likes: 289,
    copies: 167,
    date: "2024-10-12",
  },
];
