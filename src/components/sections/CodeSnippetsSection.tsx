import { motion } from "motion/react";
import { useState } from "react";
import { Code, Copy, Heart, Download, Check } from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { codeSnippets, snippetCategories } from "../../data/codeSnippets";
import { fadeInUp } from "../../utils/animations";
import { toast } from "sonner";

export function CodeSnippetsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSnippets = selectedCategory === "All"
    ? codeSnippets
    : codeSnippets.filter((snippet) => snippet.category === selectedCategory);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      typescript: "text-blue-500",
      javascript: "text-yellow-500",
      tsx: "text-cyan-500",
      css: "text-pink-500",
      python: "text-green-500",
    };
    return colors[language] || "text-gray-500";
  };

  return (
    <section id="code-snippets" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Code Snippets Library"
          subtitle="Reusable code snippets and utilities I've created"
        />

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {snippetCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Snippets Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {filteredSnippets.map((snippet, index) => (
            <motion.div
              key={snippet.id}
              className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all group relative"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Magical animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, #0ea5e9, #38bdf8, #06b6d4, #0ea5e9)',
                  backgroundSize: '400% 400%',
                  opacity: 0,
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                whileHover={{
                  opacity: 0.15,
                }}
              />
              
              {/* Glowing particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    top: `${25 * (i + 1)}%`,
                    left: i % 2 === 0 ? '0%' : '100%',
                  }}
                  animate={{
                    x: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
              {/* Header */}
              <div className="p-4 border-b bg-secondary/20 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className={`w-4 h-4 ${getLanguageColor(snippet.language)}`} />
                    <h3 className="truncate">{snippet.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {snippet.description}
                  </p>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {snippet.language}
                </Badge>
              </div>

              {/* Code Block */}
              <div className="relative">
                <pre className="p-4 overflow-x-auto text-xs bg-secondary/10 max-h-64">
                  <code>{snippet.code}</code>
                </pre>
                
                {/* Copy Button */}
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(snippet.code, snippet.id)}
                >
                  {copiedId === snippet.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* Footer */}
              <div className="p-4 bg-secondary/10">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {snippet.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {snippet.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {snippet.copies}
                    </span>
                  </div>
                  <span>{new Date(snippet.date).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline">
            Browse All Snippets ({codeSnippets.length})
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
