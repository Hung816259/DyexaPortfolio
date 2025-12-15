import { motion } from "motion/react";
import { Github, Star, GitFork, GitPullRequest, ExternalLink, Heart } from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { openSourceContributions, openSourceStats } from "../../data/openSource";
import { fadeInUp } from "../../utils/animations";

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-accent/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Open Source Contributions"
          subtitle="Contributing to the community that helped me grow"
        />

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projects", value: openSourceStats.totalProjects, icon: Github },
            { label: "Contributions", value: openSourceStats.totalContributions, icon: GitPullRequest },
            { label: "Featured", value: openSourceStats.featuredProjects, icon: Star },
            { label: "Total Stars", value: `${Math.floor(openSourceStats.totalStars / 1000)}k+`, icon: Heart },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-4 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contributions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {openSourceContributions.map((contribution, index) => (
            <motion.div
              key={contribution.id}
              className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="relative h-32 overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
                <img
                  src={contribution.logo}
                  alt={contribution.project}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white mb-1">{contribution.project}</h3>
                  <p className="text-xs text-white/80">{contribution.organization}</p>
                </div>

                {contribution.featured && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500 text-black">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {contribution.description}
                </p>

                {/* Contribution Types */}
                <div className="flex flex-wrap gap-1">
                  {contribution.contributionType.map((type) => (
                    <Badge key={type} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {contribution.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {contribution.stars >= 1000 
                      ? `${(contribution.stars / 1000).toFixed(0)}k` 
                      : contribution.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {contribution.forks >= 1000 
                      ? `${(contribution.forks / 1000).toFixed(0)}k` 
                      : contribution.forks}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitPullRequest className="w-3 h-3" />
                    {contribution.contributions} PRs
                  </span>
                </div>

                {/* Timeline */}
                <div className="text-xs text-muted-foreground">
                  <p>First: {new Date(contribution.firstContribution).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                  <p>Latest: {new Date(contribution.lastContribution).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={contribution.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  {contribution.websiteUrl && (
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={contribution.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Website
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            Always looking for new open source projects to contribute to
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/dyexarahardika" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
