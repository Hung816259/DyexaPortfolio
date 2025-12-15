import { motion } from "motion/react";
import { Award, Calendar, CheckCircle, ExternalLink, Shield } from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { certifications } from "../../data/certifications";
import { fadeInUp } from "../../utils/animations";

export function CertificationsSection() {
  const getRarityColor = (verified: boolean) => {
    return verified ? "text-green-500" : "text-gray-400";
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary/20 via-background to-secondary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Certifications & Achievements"
          subtitle="Professional certifications validating my expertise"
        />

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Total Certifications", value: certifications.length, icon: Award },
            { label: "Verified", value: certifications.filter(c => c.verified).length, icon: CheckCircle },
            { label: "This Year", value: certifications.filter(c => c.date.startsWith("2024")).length, icon: Calendar },
            { label: "In Progress", value: 3, icon: Shield },
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

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                
                {/* Verified Badge */}
                {cert.verified && (
                  <motion.div
                    className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="line-clamp-2 group-hover:text-primary transition-colors flex-1">
                    {cert.name}
                  </h3>
                  <Award className={`w-5 h-5 shrink-0 ${getRarityColor(cert.verified)}`} />
                </div>

                <p className="text-sm">{cert.issuer}</p>

                <p className="text-xs text-muted-foreground line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{cert.skills.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-3 border-t text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 hover:text-primary"
                    asChild
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>

                {/* Credential ID */}
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    ID: <code className="bg-secondary px-1 rounded">{cert.credentialId}</code>
                  </p>
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
            Continuously learning and earning certifications in cutting-edge technologies
          </p>
          <Button size="lg" variant="outline">
            View All Certifications
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
