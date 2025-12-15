import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface OutputLine {
  text: string;
  color?: string;
}

export function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<OutputLine[]>([
    {
      text: "Welcome to Dyexa's Portfolio Terminal!",
      color: "text-cyan-400",
    },
    {
      text: "Type 'help' for available commands.",
      color: "text-gray-400",
    },
    { text: "" },
  ]);
  const [commandHistory, setCommandHistory] = useState<
    string[]
  >([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Record<
    string,
    (
      args?: string[],
    ) => string | string[] | OutputLine | OutputLine[]
  > = {
    help: () => [
      { text: "Available commands:", color: "text-cyan-400" },
      { text: "  about        - Learn about me" },
      { text: "  skills       - View my technical skills" },
      { text: "  projects     - List my projects" },
      { text: "  contact      - Get contact information" },
      { text: "  socials      - View social media links" },
      { text: "  experience   - View work experience" },
      { text: "  education    - Education background" },
      {
        text: "  certifications - Professional certifications",
      },
      { text: "  hackathons   - Competition wins" },
      { text: "  achievements - Unlocked achievements" },
      { text: "  tools        - Development tools I use" },
      { text: "  stats        - Coding statistics" },
      { text: "  quote        - Random motivational quote" },
      { text: "  clear        - Clear terminal" },
      { text: "  date         - Show current date" },
      { text: "  ls           - List directories" },
      { text: "  whoami       - Display current user" },
      { text: "  pwd          - Print working directory" },
      { text: "  echo [text]  - Echo back text" },
      { text: "  neofetch     - System information" },
      { text: "  history      - Show command history" },
      {
        text: "  count [expr]  - Calculate expression (e.g., calc 5+3)",
      },
      { text: "  flip         - Flip a coin" },
      {
        text: "  roll [n]     - Roll a dice (default: 6-sided)",
      },
      {
        text: "  random       - Generate random number (1-100)",
      },
      { text: "  countdown [n]- Countdown from n seconds" },
      { text: "  binary [text]- Convert text to binary" },
      { text: "  reverse [txt]- Reverse text" },
      { text: "  secret       - Find the secret command" },
      { text: "" },
    ],
    about: () => [
      { text: "Coder: Dyexa Rahardika", color: "text-cyan-400" },
      {
        text: "Information System Student at Mulia University",
      },
      {
        text: "Full-Stack Developer | Tech Enthusiast",
        color: "text-yellow-400",
      },
      { 
        text: "Vision: Building the future of Information Systems",
        color: "text-red-400",
      },
      { text: "" },
    ],
    skills: () => [
      { text: "Technical Skills:", color: "text-cyan-400" },
      {
        text: "  Frontend: React, TypeScript, Next.js, Tailwind CSS",
        color: "text-green-400",
      },
      {
        text: "  Backend: Node.js, Express, Python, Django",
        color: "text-blue-400",
      },
      {
        text: "  Database: MongoDB, PostgreSQL, MySQL, Redis",
        color: "text-purple-400",
      },
      {
        text: "  Tools: Git, Docker, AWS, Figma",
        color: "text-orange-400",
      },
      { text: "" },
    ],
    projects: () => [
      { text: "Featured Projects:", color: "text-cyan-400" },
      {
        text: "  1. E-Commerce Platform - Next.js, PostgreSQL",
        color: "text-green-400",
      },
      {
        text: "  2. Healthcare Management System - React, Node.js",
        color: "text-blue-400",
      },
      {
        text: "  3. Real-Time Analytics Dashboard - React, D3.js",
        color: "text-purple-400",
      },
      {
        text: "  Visit /projects section for more details",
        color: "text-gray-400",
      },
      { text: "" },
    ],
    contact: () => [
      { text: "Contact Information:", color: "text-cyan-400" },
      {
        text: "  Email: 2513028@students.universitasmulia.ac.id",
        color: "text-yellow-400",
      },
      {
        text: "  Phone: +62 831-5330-8212",
        color: "text-green-400",
      },
      {
        text: "  Location: Balikpapan, Indonesia",
        color: "text-blue-400",
      },
      { text: "" },
    ],
    socials: () => [
      { text: "Social Media:", color: "text-cyan-400" },
      {
        text: "  GitHub: github.com/dyexahub",
        color: "text-purple-400",
      },
      {
        text: "  LinkedIn: linkedin.com/in/dyexarahardika",
        color: "text-blue-400",
      },
      {
        text: "  Twitter: twitter.com/dyexarahardika",
        color: "text-sky-400",
      },
      {
        text: "  Instagram: instagram.com/dyexaa",
        color: "text-pink-400",
      },
      { text: "" },
    ],
    clear: () => {
      setOutput([
        {
          text: "Welcome to Dyexa's Portfolio Terminal!",
          color: "text-cyan-400",
        },
        {
          text: "Type 'help' for available commands.",
          color: "text-gray-400",
        },
        { text: "" },
      ]);
      return "";
    },
    date: () => ({
      text: new Date().toDateString(),
      color: "text-yellow-400",
    }),
    ls: () => [
      { text: "home/", color: "text-blue-400" },
      { text: "projects/", color: "text-blue-400" },
      { text: "blog/", color: "text-blue-400" },
      { text: "certifications/", color: "text-blue-400" },
      { text: "hackathons/", color: "text-blue-400" },
      { text: "achievements/", color: "text-blue-400" },
      { text: "contact/", color: "text-blue-400" },
      { text: "" },
    ],
    whoami: () => ({
      text: "Dyexa Rahardika",
      color: "text-cyan-400",
    }),
    pwd: () => ({
      text: "/home/dyexa/portfolio",
      color: "text-yellow-400",
    }),
    experience: () => [
      { text: "Work Experience:", color: "text-cyan-400" },
      {
        text: "  → Full-Stack Developer Intern (2024)",
        color: "text-green-400",
      },
      {
        text: "  → Freelance Web Developer (2023-Present)",
        color: "text-blue-400",
      },
      {
        text: "  → Open Source Contributor (2023-Present)",
        color: "text-purple-400",
      },
      { text: "" },
    ],
    education: () => [
      { text: "Education:", color: "text-cyan-400" },
      { text: "  → Information System Student" },
      { text: "  → Mulia University" },
      { text: "  → Expected Graduation: 2025" },
      { text: "" },
    ],
    certifications: () => [
      {
        text: "Professional Certifications:",
        color: "text-cyan-400",
      },
      {
        text: "  ✓ AWS Certified Solutions Architect",
        color: "text-yellow-400",
      },
      {
        text: "  ✓ Professional Scrum Master I",
        color: "text-blue-400",
      },
      {
        text: "  ✓ MongoDB Certified Developer",
        color: "text-green-400",
      },
      {
        text: "  ✓ Google Cloud Professional",
        color: "text-red-400",
      },
      {
        text: "  ✓ Meta Front-End Developer",
        color: "text-purple-400",
      },
      { text: "  ... and 3 more!", color: "text-gray-400" },
      { text: "" },
    ],
    hackathons: () => [
      { text: "Hackathon Wins:", color: "text-cyan-400" },
      {
        text: "  🏆 HackJakarta 2024 - 1st Place",
        color: "text-yellow-400",
      },
      {
        text: "  🥈 Bali Blockchain Hackathon - 2nd Place",
        color: "text-gray-300",
      },
      {
        text: "  🥉 AI Innovation Challenge - 3rd Place",
        color: "text-orange-400",
      },
      {
        text: "  ⭐ Global DevFest 2024 - Top 10",
        color: "text-blue-400",
      },
      { text: "" },
    ],
    achievements: () => [
      {
        text: "Unlocked Achievements:",
        color: "text-cyan-400",
      },
      {
        text: "  🏅 Full Stack Wizard (500 pts)",
        color: "text-purple-400",
      },
      {
        text: "  🏅 Certified Pro (200 pts)",
        color: "text-blue-400",
      },
      {
        text: "  🏅 Open Source Hero (150 pts)",
        color: "text-green-400",
      },
      {
        text: "  Total: 1,305 points",
        color: "text-yellow-400",
      },
      { text: "" },
    ],
    tools: () => [
      { text: "Favorite Tools:", color: "text-cyan-400" },
      { text: "  Editor: VS Code", color: "text-blue-400" },
      { text: "  Design: Figma", color: "text-purple-400" },
      {
        text: "  Version Control: Git & GitHub",
        color: "text-orange-400",
      },
      {
        text: "  Containerization: Docker",
        color: "text-sky-400",
      },
      {
        text: "  Deployment: Vercel, AWS",
        color: "text-green-400",
      },
      { text: "" },
    ],
    stats: () => [
      { text: "Coding Statistics:", color: "text-cyan-400" },
      {
        text: "  📊 1,247 hours coded",
        color: "text-green-400",
      },
      { text: "  💻 3,456 commits", color: "text-blue-400" },
      { text: "  🔥 47 day streak", color: "text-orange-400" },
      {
        text: "  📦 67 repositories",
        color: "text-purple-400",
      },
      {
        text: "  🌟 1,456 stars earned",
        color: "text-yellow-400",
      },
      { text: "" },
    ],
    quote: () => {
      const quotes = [
        {
          text: '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
          color: "text-purple-400",
        },
        {
          text: '"First, solve the problem. Then, write the code." - John Johnson',
          color: "text-blue-400",
        },
        {
          text: '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
          color: "text-green-400",
        },
        {
          text: '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie',
          color: "text-yellow-400",
        },
        {
          text: '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
          color: "text-cyan-400",
        },
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    },
    time: () => ({
      text: new Date().toLocaleTimeString(),
      color: "text-cyan-400",
    }),
    echo: (args) => {
      const text = args?.join(" ") || "";
      return text ? { text, color: "text-white" } : "";
    },
    neofetch: () => [
      { text: "dyexa@terminal", color: "text-cyan-400" },
      { text: "----------------", color: "text-cyan-400" },
      { text: "OS: Web Browser", color: "text-yellow-400" },
      { text: "Host: Your Device", color: "text-green-400" },
      {
        text: "Shell: Portfolio Terminal v1.0",
        color: "text-blue-400",
      },
      {
        text: "DE: React + TypeScript",
        color: "text-purple-400",
      },
      {
        text: "Theme: Dynamic Terminal",
        color: "text-pink-400",
      },
      {
        text: "Terminal: Custom Built",
        color: "text-orange-400",
      },
      { text: "" },
    ],
    history: () => {
      if (commandHistory.length === 0) {
        return {
          text: "No command history yet.",
          color: "text-gray-400",
        };
      }
      return [
        { text: "Command History:", color: "text-cyan-400" },
        ...commandHistory.map((cmd, i) => ({
          text: `  ${i + 1}. ${cmd}`,
          color: "text-gray-300",
        })),
        { text: "" },
      ];
    },
    count: (args) => {
      if (!args || args.length === 0) {
        return {
          text: "Usage: Count [expression] (e.g., count 5+3*2)",
          color: "text-yellow-400",
        };
      }
      try {
        const expression = args
          .join("")
          .replace(/[^0-9+\-*/().]/g, "");
        const result = eval(expression);
        return {
          text: `${expression} = ${result}`,
          color: "text-green-400",
        };
      } catch (error) {
        return {
          text: "Error: Invalid expression",
          color: "text-red-400",
        };
      }
    },
    flip: () => {
      const result =
        Math.random() < 0.5 ? "🪙 Heads!" : "🪙 Tails!";
      return { text: result, color: "text-yellow-400" };
    },
    roll: (args) => {
      const sides = args && args[0] ? parseInt(args[0]) : 6;
      if (isNaN(sides) || sides < 2) {
        return {
          text: "Usage: roll [number] (e.g., roll 20)",
          color: "text-yellow-400",
        };
      }
      const result = Math.floor(Math.random() * sides) + 1;
      return {
        text: `🎲 You rolled a ${result} (d${sides})`,
        color: "text-purple-400",
      };
    },
    random: () => {
      const num = Math.floor(Math.random() * 100) + 1;
      return {
        text: `🎲 Random number: ${num}`,
        color: "text-cyan-400",
      };
    },
    countdown: (args) => {
      const seconds = args && args[0] ? parseInt(args[0]) : 5;
      if (isNaN(seconds) || seconds < 1 || seconds > 10) {
        return {
          text: "Usage: countdown [1-10]",
          color: "text-yellow-400",
        };
      }

      setIsProcessing(true);
      let count = seconds;
      const interval = setInterval(() => {
        if (count > 0) {
          setOutput((prev) => [
            ...prev,
            {
              text: `⏱️  ${count}...`,
              color: "text-yellow-400",
            },
          ]);
          count--;
        } else {
          setOutput((prev) => [
            ...prev,
            { text: "🎉 Time's up!", color: "text-green-400" },
            { text: "" },
          ]);
          clearInterval(interval);
          setIsProcessing(false);
        }
      }, 1000);

      return "";
    },
    binary: (args) => {
      if (!args || args.length === 0) {
        return {
          text: "Usage: binary [text]",
          color: "text-yellow-400",
        };
      }
      const text = args.join(" ");
      const binary = text
        .split("")
        .map((char) =>
          char.charCodeAt(0).toString(2).padStart(8, "0"),
        )
        .join(" ");
      return { text: binary, color: "text-green-400" };
    },
    reverse: (args) => {
      if (!args || args.length === 0) {
        return {
          text: "Usage: reverse [text]",
          color: "text-yellow-400",
        };
      }
      const text = args.join(" ");
      return {
        text: text.split("").reverse().join(""),
        color: "text-cyan-400",
      };
    },
    secret: () => [
      {
        text: "🤫 You found the secret!",
        color: "text-yellow-400",
      },
      {
        text: "   Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A",
        color: "text-cyan-400",
      },
      {
        text: "   Easter Egg: Try 'sudo rm -rf /'",
        color: "text-red-400",
      },
      {
        text: "   Hidden gem: Type 'hack' three times...",
        color: "text-purple-400",
      },
      { text: "" },
    ],
    sudo: (args) => {
      const cmd = args?.join(" ") || "";
      if (cmd.includes("rm -rf /")) {
        return [
          {
            text: "⚠️  WARNING: This will delete the entire system!",
            color: "text-red-400",
          },
          {
            text: "Just kidding! You can't break this terminal 😄",
            color: "text-green-400",
          },
          { text: "" },
        ];
      }
      return {
        text: "[sudo] password for dyexa: (Nice try! 😉)",
        color: "text-yellow-400",
      };
    },
    hack: () => {
      const lines = [
        {
          text: "Initializing hack sequence...",
          color: "text-green-400",
        },
        {
          text: "Connecting to mainframe...",
          color: "text-cyan-400",
        },
        {
          text: "Bypassing firewall... [OK]",
          color: "text-yellow-400",
        },
        {
          text: "Downloading files... [OK]",
          color: "text-blue-400",
        },
        { text: "Access granted! 🎉", color: "text-green-400" },
        {
          text: "(Just kidding, this is a portfolio site 😄)",
          color: "text-gray-400",
        },
        { text: "" },
      ];

      setIsProcessing(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index < lines.length) {
          setOutput((prev) => [...prev, lines[index]]);
          index++;
        } else {
          clearInterval(interval);
          setIsProcessing(false);
        }
      }, 500);

      return "";
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();

    if (!trimmedCmd) return;

    // Add to history
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Parse command and arguments
    const parts = trimmedCmd.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newOutput: OutputLine[] = [
      ...output,
      { text: `$ ${cmd}`, color: "text-white" },
    ];

    if (commands[command]) {
      const result = commands[command](args);
      if (Array.isArray(result)) {
        newOutput.push(
          ...result.map((item) =>
            typeof item === "string" ? { text: item } : item,
          ),
        );
      } else if (
        typeof result === "object" &&
        result !== null
      ) {
        newOutput.push(result as OutputLine);
      } else if (result) {
        newOutput.push({ text: result });
      }
    } else if (command) {
      newOutput.push(
        {
          text: `Command not found: ${command}`,
          color: "text-red-400",
        },
        {
          text: "Type 'help' for available commands",
          color: "text-gray-400",
        },
        { text: "" },
      );
    }

    if (command !== "clear") {
      setOutput(newOutput);
    }
    setInput("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter" && !isProcessing) {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const cmd = input.toLowerCase();
      const matches = Object.keys(commands).filter((c) =>
        c.startsWith(cmd),
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop =
        outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

{/* Customize Terminal Theme */}

       {/* HEADER */}
      <div className="
        bg-linear-to-r from-white to-gray-100 
        dark:from-slate-800 dark:to-slate-900
        px-4 py-3 flex items-center gap-2 border-b 
        border-gray-300 dark:border-cyan-500/30
      ">
        <div className="flex gap-1.5">
          <motion.div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
          <motion.div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
          <motion.div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />
        </div>

        <div className="flex items-center gap-2 ml-2 text-cyan-600 dark:text-cyan-400">
          <TerminalIcon className="w-4 h-4" />
          <span className="font-mono">dyexa@terminal:~$</span>
        </div>

        <div className="ml-auto text-xs text-gray-600 dark:text-gray-400 font-mono">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* BODY */}
      <div
        ref={outputRef}
        className="
          font-mono text-sm p-6 h-[385px] overflow-y-auto cursor-text /* Adjust height as needed */
          bg-white text-gray-800
          dark:bg-slate-950 dark:text-green-400
        "
        onClick={() => inputRef.current?.focus()}
        style={{ scrollbarWidth: "thin", scrollbarColor: "#0891b2 #0f172a" }}
      >
        {output.map((line, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap ${line.color || "text-green-600 dark:text-green-400"}`}
          >
            {line.text}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-cyan-600 dark:text-cyan-400">$</span>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isProcessing}
            className="
              flex-1 bg-transparent border-none outline-none font-mono
              text-gray-800 dark:text-green-400
            "
            placeholder="Type a command (e.g. help)"
            autoComplete="off"
            spellCheck="false"
          />

          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-gray-800 dark:bg-green-400"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          bg-linear-to-r from-white to-gray-100 
          dark:from-slate-800 dark:to-slate-900 
          px-4 py-2 border-t 
          border-gray-300 dark:border-cyan-500/30
        "
      >
        <div className="flex items-center justify-between text-xs font-mono 
          text-gray-600 dark:text-gray-400"
        >
          <span>Press Tab for autocomplete | ↑↓ for history</span>
          <span className="text-cyan-600 dark:text-cyan-400">Ready</span>
        </div>
      </div>

    </motion.div>
  );
}