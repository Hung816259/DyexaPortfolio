import { motion } from "motion/react";
import { SectionTitle } from "../shared/SectionTitle";
import { Terminal } from "../shared/Terminal";
import { GitHubHeatmap } from "../shared/GitHubHeatmap";
import { SpotifyWidget } from "../shared/SpotifyWidget";
import { Code, Activity, Music, Terminal as TerminalIcon } from "lucide-react";
import { codingStats, wakaTimeStats } from "../../data/stats";
import { fadeInUp } from "../../utils/animations";
import { Progress } from "../ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function InteractiveFeaturesSection() {
  return (
    <section id="interactive" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-accent/10 via-background to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Interactive Features"
          subtitle="Explore my portfolio through interactive elements"
        />

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Coding Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Total Hours", value: codingStats.totalHours.toLocaleString(), icon: Code },
              { label: "Commits", value: codingStats.totalCommits.toLocaleString(), icon: Activity },
              { label: "Current Streak", value: `${codingStats.currentStreak} days`, icon: Activity },
              { label: "Languages", value: codingStats.languagesUsed, icon: Code },
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

          {/* Terminal and Spotify */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Terminal */}
            <motion.div
              className="lg:col-span-2"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TerminalIcon className="w-5 h-5 text-primary" />
                <h3>Interactive Terminal</h3>
              </div>
              <Terminal />
            </motion.div>

            {/* Spotify & WakaTime Stats */}
            <motion.div
              className="space-y-6"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Spotify Widget */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Music className="w-5 h-5 text-primary" />
                  <h3>Now Playing</h3>
                </div>
                <SpotifyWidget />
              </div>

              {/* Coding Time This Week */}
              <div className="glass rounded-xl p-5">
                <h4 className="mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  Coding Time This Week
                </h4>
                <div className="space-y-3">
                  {wakaTimeStats.slice(0, 5).map((stat) => (
                    <div key={stat.language} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{stat.language}</span>
                        <span className="text-muted-foreground">{stat.hours}h</span>
                      </div>
                      <Progress value={stat.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* GitHub Contribution Heatmap */}
          <motion.div
            className="glass rounded-xl p-6"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                GitHub Contribution Activity
              </h3>
              <div className="text-sm text-muted-foreground">
                {codingStats.totalCommits.toLocaleString()} contributions in the last year
              </div>
            </div>
            <GitHubHeatmap />
          </motion.div>

          {/* Coding Language Distribution */}
          <motion.div
            className="glass rounded-xl p-6"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Programming Language Usage
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wakaTimeStats}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="language" 
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  opacity={0.5}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  opacity={0.5}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Bar dataKey="hours" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="glass rounded-xl p-6 text-center"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
            >
              <div className="text-4xl gradient-text mb-2">{codingStats.totalPRs}</div>
              <p className="text-sm text-muted-foreground">Pull Requests</p>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-6 text-center"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl gradient-text mb-2">{codingStats.totalIssues}</div>
              <p className="text-sm text-muted-foreground">Issues Resolved</p>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-6 text-center"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl gradient-text mb-2">{codingStats.longestStreak}</div>
              <p className="text-sm text-muted-foreground">Longest Streak (days)</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
