import { motion } from "motion/react";
//import { useState } from "react";
import { generateGitHubActivity } from "../../data/stats";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function GitHubHeatmap() {
  const activities = generateGitHubActivity();
  
  // Group activities by week
  const weeks = [];
  for (let i = 0; i < activities.length; i += 7) {
    weeks.push(activities.slice(i, i + 7));
  }

  const getLevelColor = (level: number) => {
    const colors = {
      0: "bg-secondary dark:bg-secondary/30",
      1: "bg-green-200 dark:bg-green-900/40",
      2: "bg-green-300 dark:bg-green-800/50",
      3: "bg-green-400 dark:bg-green-700/60",
      4: "bg-green-500 dark:bg-green-600/80",
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="inline-flex gap-1 min-w-max">
        <TooltipProvider>
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <Tooltip key={dayIndex}>
                    <TooltipTrigger asChild>
                    <motion.div
                      className={`w-3 h-3 rounded-sm cursor-pointer ${getLevelColor(
                      Array.isArray(day) ? day[0]?.level ?? 0 : (day as any).level ?? 0
                      )}`}
                      whileHover={{ scale: 1.5 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                    />
                    </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">
                      {Array.isArray(day) ? new Date(day[0]?.date).toLocaleDateString() : new Date((day as any).date).toLocaleDateString()}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          ))}
        </TooltipProvider>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
