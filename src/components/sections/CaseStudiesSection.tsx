import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Github, Users, Calendar, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import * as Icons from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { caseStudies } from "../../data/caseStudies";
import { fadeInUp } from "../../utils/animations";

export function CaseStudiesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedCaseStudies = showAll ? caseStudies : caseStudies.slice(0, 2);
  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Case Studies"
          subtitle="Deep dives into my most impactful projects"
        />

        {/* Case Studies */}
        <div className="max-w-6xl mx-auto space-y-8">
          {displayedCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Tabs defaultValue="overview" className="glass rounded-xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b bg-secondary/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="mb-2">{study.title}</h3>
                      <p className="text-sm text-muted-foreground">{study.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      {study.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {study.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={study.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <strong>Client:</strong> {study.client}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Team of {study.team}
                    </span>
                    <span className="flex items-center gap-2">
                      <strong>Role:</strong> {study.role}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
                  <TabsTrigger value="overview" className="rounded-none">Overview</TabsTrigger>
                  <TabsTrigger value="challenge" className="rounded-none">Challenge</TabsTrigger>
                  <TabsTrigger value="solution" className="rounded-none">Solution</TabsTrigger>
                  <TabsTrigger value="results" className="rounded-none">Results</TabsTrigger>
                </TabsList>

                <div className="p-6">
                  <TabsContent value="overview" className="mt-0">
                    <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {study.metrics.map((metric) => {
                        const IconComponent = Icons[metric.icon as keyof typeof Icons] as any || TrendingUp;
                        return (
                          <div key={metric.label} className="glass p-4 rounded-lg text-center">
                            <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary" />
                            <div className="text-xl gradient-text mb-1">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </TabsContent>

                  <TabsContent value="challenge" className="mt-0">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-destructive">
                        <span className="text-2xl">⚠️</span> The Problem
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="solution" className="mt-0">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-green-500">
                        <span className="text-2xl">✅</span> Our Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="results" className="mt-0">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-primary">
                        <TrendingUp className="w-6 h-6" /> Impact & Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-green-500 text-xl shrink-0">✓</span>
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </div>

                {/* Images Gallery */}
                {study.images.length > 0 && (
                  <div className="p-6 border-t bg-secondary/10">
                    <h4 className="mb-4">Project Gallery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {study.images.map((image, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden group">
                          <img
                            src={image}
                            alt={`${study.title} screenshot ${idx + 1}`}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Tabs>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {caseStudies.length > 2 && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                  Show All Case Studies ({caseStudies.length - 2} more)
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
