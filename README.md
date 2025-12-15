# 🌟 Dyexa Rahardika - Portfolio Website

A comprehensive, modern portfolio website showcasing skills, projects, and experience with an aesthetic design using light blue color palettes and dual theme support (light/dark).

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with light blue aesthetic
- 🌓 **Dual Theme** - Seamless dark/light mode with smooth transitions
- ✨ **Interactive Animations** - Engaging scroll animations, particle effects, and typing animations
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🚀 **Performance Optimized** - Fast load times with code splitting
- 🎭 **Motion Animations** - Smooth animations powered by Motion (Framer Motion)
- 📊 **Data Visualization** - Interactive charts with Recharts
- 💼 **Comprehensive Sections** - Hero, About, Skills, Projects, Experience, Roadmap, Testimonials, Contact
- 🎯 **3D Effects** - 3D project cards and interactive hover effects
- 🌠 **Particle Backgrounds** - Twinkling stars and animated backgrounds
- 📝 **Contact Form** - Integrated contact form with validation

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** ([Download](https://nodejs.org/))
- npm, yarn, or pnpm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

**That's it!** Your portfolio is now running locally. 🎉

**👉 Having issues? Check [START_HERE.md](START_HERE.md) for detailed troubleshooting.**

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:5173) |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🛠️ Tech Stack

### Core
- **React 18.3** - UI library with latest features
- **TypeScript 5.6** - Type-safe JavaScript
- **Vite 6.0** - Next-generation build tool
- **Tailwind CSS v4** - Utility-first CSS framework

### UI & Animations
- **Motion 11.17** - Smooth animations (Framer Motion)
- **Radix UI** - Accessible headless components
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - High-quality component library

### Forms & Validation
- **React Hook Form 7.55** - Performant form handling
- **Zod 3.24** - TypeScript-first schema validation

### Data & Charts
- **Recharts 2.14** - Composable charting library

### Build & Development
- **SWC** - Super-fast TypeScript/JavaScript compiler
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

## 📁 Project Structure

```
PORTOFOLIO/
├── .vscode/                    # VS Code workspace settings
├── components/
│   ├── figma/                 # Figma components
│   ├── navigation/            # Navigation components
│   │   └── FloatingNav.tsx   # Sticky navigation bar
│   ├── sections/              # Main page sections
│   │   ├── HeroSection.tsx   # Landing section
│   │   ├── AboutSection.tsx  # About me
│   │   ├── SkillsSection.tsx # Skills showcase
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── RoadmapSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── shared/                # Reusable components
│   │   ├── TwinkleBackground.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── TypingAnimation.tsx
│   │   └── ...more
│   └── ui/                    # shadcn/ui components (40+)
├── data/                      # Content data
│   ├── personal.ts           # Your personal info
│   ├── projects.ts           # Your projects (15 samples)
│   ├── skills.ts             # Your skills
│   ├── experience.ts         # Work experience
│   ├── education.ts          # Education history
│   ├── roadmap.ts            # Future goals
│   └── testimonials.ts       # Testimonials
├── hooks/                     # Custom React hooks
│   ├── useTheme.ts           # Theme management
│   ├── useScrollAnimation.ts # Scroll animations
│   └── useScrollProgress.ts  # Progress tracking
├── styles/
│   └── globals.css           # Global styles + Tailwind
├── utils/                     # Utility functions
├── App.tsx                    # Main app component
├── main.tsx                   # React entry point
├── index.html                 # HTML entry point
└── vite.config.ts            # Vite configuration
```

## 🎨 Customization

### 1. Personal Information

**File**: `data/personal.ts`

```typescript
export const personal = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  github: "yourusername",
  linkedin: "yourusername",
  discord: "yourusername",
  // ... more fields
};
```

### 2. Projects

**File**: `data/projects.ts`

Add your projects with descriptions, technologies, images, and links.

### 3. Skills

**File**: `data/skills.ts`

List your technical skills with proficiency levels (0-100).

### 4. Theme Colors

**File**: `styles/globals.css`

```css
:root {
  --primary: #0ea5e9;      /* Your primary color */
  --secondary: #bae6fd;    /* Your secondary color */
  --accent: #38bdf8;       /* Your accent color */
}
```

**See [SETUP_GUIDE.md](SETUP_GUIDE.md) for complete customization guide.**

## 📚 Documentation

- **[START_HERE.md](START_HERE.md)** - First-time setup & troubleshooting
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete setup and customization guide
- **[QUICK_START.md](QUICK_START.md)** - Quick reference commands
- **[CHECKLIST.md](CHECKLIST.md)** - Development checklist
- **[CONFIGURATION_FILES.md](CONFIGURATION_FILES.md)** - All config files explained

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

**Or use CLI**:
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag `/dist` folder to Netlify
3. Done!

**Build Settings**:
- Build command: `npm run build`
- Publish directory: `dist`

### Deploy to GitHub Pages

```bash
npm install -D gh-pages
npm run build && npx gh-pages -d dist
```

## 🔧 Configuration Files

All configuration files are set up for you:

- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tsconfig.app.json` - App TypeScript config
- ✅ `tsconfig.node.json` - Node TypeScript config
- ✅ `vite.config.ts` - Vite build configuration
- ✅ `postcss.config.js` - PostCSS with Tailwind v4
- ✅ `eslint.config.js` - ESLint rules
- ✅ `.prettierrc` - Prettier formatting
- ✅ `.vscode/settings.json` - VS Code workspace settings

## 🐛 Troubleshooting

### No styles showing?

Check that `main.tsx` imports globals.css:
```typescript
import './styles/globals.css';
```

### TypeScript errors?

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port already in use?

Change port in `vite.config.ts`:
```typescript
server: { port: 3000 }
```

**More help**: See [START_HERE.md](START_HERE.md) troubleshooting section.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 👤 Author

**Dyexa Rahardika**
- 🎓 Information System Student at Mulia University
- 📧 Email: dyexarahardika@gmail.com
- 💬 Discord: dyexzzz
- 🔗 GitHub: [Your GitHub]
- 💼 LinkedIn: [Your LinkedIn]

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Motion** - For smooth animations
- **Radix UI** - For accessible components
- **Lucide** - For the icon library

## 🌟 Features Showcase

- ⭐ Twinkling star background animation
- 🎨 Gradient text effects
- 💫 Scroll-triggered animations
- 🌈 Smooth theme transitions
- 🎯 Interactive 3D project cards
- 📊 Animated skill progress bars
- ✨ Typing animation effects
- 🎪 Floating navigation with magical effects
- 📱 Discord integration
- 🎨 Glass morphism UI elements

---

**Made with ❤️ by Dyexa Rahardika**

**Star ⭐ this repo if you found it helpful!**
