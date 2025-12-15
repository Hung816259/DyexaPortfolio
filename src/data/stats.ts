export interface GitHubActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface WakaTimeStats {
  language: string;
  hours: number;
  percentage: number;
}

export interface CodingStats {
  totalHours: number;
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  currentStreak: number;
  longestStreak: number;
  languagesUsed: number;
  totalRepos: number;
}

// Generate GitHub-style activity data for the past year
export const generateGitHubActivity = (): GitHubActivity[] => {
  const activities: GitHubActivity[] = [];
  const today = new Date();
  
  for (let i = 365; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Generate semi-random activity (more active on weekdays)
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const baseCount = isWeekend ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 8);
    
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (baseCount === 0) level = 0;
    else if (baseCount <= 2) level = 1;
    else if (baseCount <= 4) level = 2;
    else if (baseCount <= 6) level = 3;
    else level = 4;
    
    activities.push({
      date: date.toISOString().split('T')[0],
      count: baseCount,
      level,
    });
  }
  
  return activities;
};

export const wakaTimeStats: WakaTimeStats[] = [
  { language: "TypeScript", hours: 245, percentage: 35 },
  { language: "JavaScript", hours: 189, percentage: 27 },
  { language: "Python", hours: 98, percentage: 14 },
  { language: "CSS", hours: 67, percentage: 10 },
  { language: "HTML", hours: 45, percentage: 6 },
  { language: "SQL", hours: 34, percentage: 5 },
  { language: "Other", hours: 22, percentage: 3 },
];

export const codingStats: CodingStats = {
  totalHours: 1247,
  totalCommits: 3456,
  totalPRs: 234,
  totalIssues: 145,
  currentStreak: 47,
  longestStreak: 89,
  languagesUsed: 18,
  totalRepos: 67,
};

export const githubStats = {
  followers: 234,
  following: 189,
  publicRepos: 67,
  publicGists: 23,
  totalStars: 1456,
  totalForks: 234,
  contributionsThisYear: 1823,
};

export const spotifyNowPlaying = {
  isPlaying: true,
  title: "Starboy",
  artist: "The Weeknd ft. Daft Punk",
  album: "Starboy",
  albumArt: "https://i.pinimg.com/736x/ea/83/ad/ea83ad6676f30f3f8297b8b524c3d3d8.jpg",
  duration: 230000, // 3:50
  progress: 120000,
  url: "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB",
};

export const portfolioAnalytics = {
  totalVisitors: 12345,
  pageViews: 45678,
  avgSessionDuration: "25m 45s",
  bounceRate: "32%",
  topCountries: [
    { name: "Indonesia", percentage: 45, flag: "🇮🇩" },
    { name: "United States", percentage: 25, flag: "🇺🇸" },
    { name: "Singapore", percentage: 12, flag: "🇸🇬" },
    { name: "India", percentage: 8, flag: "🇮🇳" },
    { name: "Others", percentage: 10, flag: "🌍" },
  ],
  topPages: [
    { page: "/projects", views: 15678 },
    { page: "/", views: 12345 },
    { page: "/blog", views: 8901 },
    { page: "/about", views: 6789 },
    { page: "/contact", views: 4567 },
  ],
};
