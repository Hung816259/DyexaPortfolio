import { motion } from "motion/react";
import { useState } from "react";
import { Award, Calendar, Github, MapPin, Trophy, Users, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { hackathons } from "../../data/hackathons";
import { fadeInUp } from "../../utils/animations";

export function HackathonsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedHackathons = showAll ? hackathons : hackathons.slice(0, 2);
  const getPlacementColor = (placement: string) => {
    if (placement.includes("1st")) return "text-yellow-500";
    if (placement.includes("2nd")) return "text-gray-400";
    if (placement.includes("3rd")) return "text-orange-600";
    return "text-primary";
  };

  const getTypeIcon = (type: string) => {
    return type === "online" ? "🌐" : type === "in-person" ? "📍" : "🔄";
  };

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary/20 via-background to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Hackathons & Competitions"
          subtitle="Competitive coding events where I've built innovative solutions"
        />

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Events Participated", value: hackathons.length, icon: Trophy },
            { label: "Wins", value: hackathons.filter(h => h.placement.includes("1st") || h.placement.includes("Winner")).length, icon: Award },
            { label: "Projects Built", value: hackathons.length, icon: Github },
            { label: "Team Members", value: hackathons.reduce((sum, h) => sum + h.teamSize, 0), icon: Users },
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

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-6">
          {displayedHackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={hackathon.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  
                  {/* Placement Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getPlacementColor(hackathon.placement)} bg-black/50 backdrop-blur-sm`}>
                      <Trophy className="w-3 h-3 mr-1" />
                      {hackathon.placement}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="flex-1">{hackathon.name}</h3>
                      <span className="text-xl">{getTypeIcon(hackathon.type)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{hackathon.organizer}</p>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-primary" />
                      <span className="font-medium">{hackathon.projectName}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {hackathon.projectDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {hackathon.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-2 border-t">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(hackathon.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {hackathon.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Team of {hackathon.teamSize}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {hackathon.prize}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    {hackathon.projectUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={hackathon.projectUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    )}
                    {hackathon.certificateUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={hackathon.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Certificate
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {hackathons.length > 2 && (
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
                  Show All Hackathons ({hackathons.length - 2} more)
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
