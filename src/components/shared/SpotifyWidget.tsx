import { motion } from "motion/react";
import { Music, Play, Pause } from "lucide-react";
import { spotifyNowPlaying } from "../../data/stats";
import { Progress } from "../ui/progress";

export function SpotifyWidget() {
  const { isPlaying, title, artist, album, albumArt, duration, progress } = spotifyNowPlaying;

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className="glass rounded-xl p-4 hover:shadow-xl transition-all"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Music className="w-4 h-4 text-green-500" />
        <span className="text-xs text-muted-foreground">
          {isPlaying ? "Currently Playing" : "Last Played"} on Spotify
        </span>
        {isPlaying && (
          <motion.div
            className="ml-auto"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </motion.div>
        )}
      </div>

      <div className="flex gap-3">
        {/* Album Art */}
        <div className="relative shrink-0">
          <img
            src={albumArt}
            alt={album}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg"
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <h4 className="truncate text-sm mb-1">{title}</h4>
          <p className="text-xs text-muted-foreground truncate mb-2">{artist}</p>
          
          {/* Progress Bar */}
          <div className="space-y-1">
            <Progress value={(progress / duration) * 100} className="h-1" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
