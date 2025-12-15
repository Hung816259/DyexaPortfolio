import { motion } from "motion/react";
import { Trophy, Star, Lock } from "lucide-react";
import * as Icons from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { achievements, achievementStats } from "../../data/achievements";
import { fadeInUp } from "../../utils/animations";

export function AchievementsSection() {
  const getRarityColor = (rarity: string) => {
    const colors = {
      common: "from-gray-400 to-gray-600",
      rare: "from-blue-400 to-blue-600",
      epic: "from-purple-400 to-purple-600",
      legendary: "from-yellow-400 to-orange-600",
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const getRarityBorder = (rarity: string) => {
    const colors = {
      common: "border-gray-400",
      rare: "border-blue-400",
      epic: "border-purple-400",
      legendary: "border-yellow-400",
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary/20 via-background to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Achievements & Milestones"
          subtitle="Unlocking achievements on my development journey"
        />

        {/* Overall Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass p-4 rounded-xl text-center col-span-2 md:col-span-1"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-3xl gradient-text mb-1">{achievementStats.points}</div>
            <div className="text-xs text-muted-foreground">Total Points</div>
          </motion.div>

          {Object.entries(achievementStats.byRarity).map(([rarity, count]) => (
            <motion.div
              key={rarity}
              className="glass p-4 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Star className={`w-6 h-6 mx-auto mb-2 text-${rarity === 'legendary' ? 'yellow' : rarity === 'epic' ? 'purple' : rarity === 'rare' ? 'blue' : 'gray'}-500`} />
              <div className="text-2xl gradient-text mb-1">{count}</div>
              <div className="text-xs text-muted-foreground capitalize">{rarity}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="max-w-3xl mx-auto mb-12 glass p-6 rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm">Overall Progress</span>
            <span className="text-sm gradient-text">{achievementStats.unlocked}/{achievementStats.total} Unlocked</span>
          </div>
          <Progress 
            value={(achievementStats.unlocked / achievementStats.total) * 100} 
            className="h-3"
          />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = Icons[achievement.icon as keyof typeof Icons] as any || Trophy;
            
            return (
              <motion.div
                key={achievement.id}
                className={`glass rounded-xl overflow-hidden hover:shadow-xl transition-all relative ${
                  achievement.unlocked ? "" : "opacity-60"
                } border-2 ${getRarityBorder(achievement.rarity)}`}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={achievement.unlocked ? { y: -5, scale: 1.02 } : {}}
              >
                {/* Magical shimmer effect for unlocked achievements */}
                {achievement.unlocked && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${
                        achievement.rarity === 'legendary' ? 'rgba(255, 215, 0, 0.3)' :
                        achievement.rarity === 'epic' ? 'rgba(139, 92, 246, 0.3)' :
                        achievement.rarity === 'rare' ? 'rgba(59, 130, 246, 0.3)' :
                        'rgba(156, 163, 175, 0.3)'
                      }, transparent)`,
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  />
                )}
                
                {/* Floating particles for legendary achievements */}
                {achievement.unlocked && achievement.rarity === 'legendary' && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400 rounded-full pointer-events-none"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    ))}
                  </>
                )}
                {/* Header with gradient */}
                <div className={`p-4 bg-linear-to-r ${getRarityColor(achievement.rarity)} relative`}>
                  <div className="flex items-start justify-between">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      {achievement.unlocked ? (
                        <IconComponent className="w-8 h-8 text-white" />
                      ) : (
                        <Lock className="w-8 h-8 text-white/50" />
                      )}
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {achievement.points} pts
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className={achievement.unlocked ? "" : "text-muted-foreground"}>
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className={achievement.unlocked ? "text-green-500" : "text-muted-foreground"}>
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <Progress 
                      value={(achievement.progress / achievement.total) * 100} 
                      className="h-2"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t text-xs">
                    <Badge variant="outline" className="capitalize">
                      {achievement.rarity}
                    </Badge>
                    {achievement.unlocked && achievement.date && (
                      <span className="text-muted-foreground">
                        {new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    )}
                    {!achievement.unlocked && (
                      <span className="text-muted-foreground italic">
                        Locked
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            {achievements.filter(a => !a.unlocked).length} more achievements waiting to be unlocked!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
