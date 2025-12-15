import { motion } from "motion/react";
import { BarChart, Eye, TrendingUp, Clock, Globe, Activity } from "lucide-react";
import { SectionTitle } from "../shared/SectionTitle";
//import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { portfolioAnalytics } from "../../data/stats";
import { fadeInUp } from "../../utils/animations";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export function AnalyticsDashboard() {
  const COLORS = ['#0ea5e9', '#38bdf8', '#06b6d4', '#0284c7', '#7dd3fc'];

  return (
    <section id="analytics" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Portfolio Analytics"
          subtitle="Real-time insights and visitor statistics"
        />

        {/* Overview Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Total Visitors", value: portfolioAnalytics.totalVisitors.toLocaleString(), icon: Eye, color: "#0ea5e9" },
            { label: "Page Views", value: portfolioAnalytics.pageViews.toLocaleString(), icon: BarChart, color: "#38bdf8" },
            { label: "Avg. Session", value: portfolioAnalytics.avgSessionDuration, icon: Clock, color: "#06b6d4" },
            { label: "Bounce Rate", value: portfolioAnalytics.bounceRate, icon: TrendingUp, color: "#0284c7" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-5 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="w-6 h-6 mb-3" style={{ color: stat.color }} />
              <div className="text-2xl gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Top Pages Chart */}
          <motion.div
            className="glass rounded-xl p-6"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 flex items-center gap-2">
              <BarChart className="w-5 h-5 text-primary" />
              Top Pages
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <RechartsBarChart data={portfolioAnalytics.topPages}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="page" 
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
                <Bar dataKey="views" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Traffic by Country */}
          <motion.div
            className="glass rounded-xl p-6"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Traffic by Country
            </h3>
            
            <div className="space-y-4">
              {portfolioAnalytics.topCountries.map((country) => (
                <div key={country.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span className="text-xl">{country.flag}</span>
                      {country.name}
                    </span>
                    <span className="text-muted-foreground">{country.percentage}%</span>
                  </div>
                  <Progress value={country.percentage} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={portfolioAnalytics.topCountries}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="percentage"
                  >
                    {portfolioAnalytics.topCountries.map((country, i) => (
                      <Cell key={`cell-${country.name}-${i}`} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Real-time Activity */}
          <motion.div
            className="glass rounded-xl p-6 lg:col-span-2"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Real-time Activity
            </h3>
            
            <div className="space-y-3">
              {[
                { user: "Visitor from 🇺🇸 United States", action: "Viewed Projects Section", time: "2 min ago" },
                { user: "Visitor from 🇮🇩 Indonesia", action: "Downloaded Resume", time: "5 min ago" },
                { user: "Visitor from 🇸🇬 Singapore", action: "Viewed Blog Post", time: "8 min ago" },
                { user: "Visitor from 🇮🇳 India", action: "Sent Contact Message", time: "12 min ago" },
                { user: "Visitor from 🇺🇸 United States", action: "Viewed Case Studies", time: "15 min ago" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
