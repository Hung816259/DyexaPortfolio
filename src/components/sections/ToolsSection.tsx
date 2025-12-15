import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import * as Icons from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { tools, toolCategories } from "../../data/tools";
import { fadeInUp } from "../../utils/animations";

export function ToolsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = selectedCategory === "All"
    ? tools
    : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <section id="tools" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Tools & Resources"
          subtitle="My favorite tools and resources for development"
        />

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {toolCategories.map((category) => (
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

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredTools.map((tool, index) => {
            const IconComponent = Icons[tool.icon as keyof typeof Icons] as any || Icons.Wrench;
            
            return (
              <motion.div
                key={tool.id}
                className="glass rounded-xl p-5 hover:shadow-xl transition-all group relative overflow-hidden"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at center, ${tool.color}, transparent 70%)` 
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                {/* Rotating glow ring */}
                <motion.div
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur-sm pointer-events-none"
                  style={{
                    background: `conic-gradient(from 0deg, ${tool.color}, transparent, ${tool.color})`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Icon & Header */}
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <motion.div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${tool.color}20` }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: tool.color }}
                    />
                  </motion.div>
                  {tool.free && (
                    <Badge variant="secondary" className="text-xs">Free</Badge>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <h4 className="group-hover:text-primary transition-colors">
                    {tool.name}
                  </h4>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < tool.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Link */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-2 group/btn"
                    asChild
                  >
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            These tools help me stay productive and build amazing things
          </p>
          <Button size="lg" variant="outline">
            View Complete Toolbox
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
