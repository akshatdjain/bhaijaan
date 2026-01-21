import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Play, Pause, RotateCcw, Volume2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useLayoutEffect, useState, useEffect, useRef } from "react"
import MagneticButton from "../components/ui/MagneticButton"

// Refined Timings based on the ~60s Jupiter Ad
const jupiterScript = [
  { start: 0.1, end: 1.0, text: "What's" },
  { start: 1.0, end: 1.8, text: "Jupiter" },
  { start: 1.8, end: 2.5, text: "like?" },
  { start: 2.8, end: 3.5, text: "Let" },
  { start: 3.5, end: 4.2, text: "me" },
  { start: 4.2, end: 4.8, text: "show" },
  { start: 4.8, end: 6.0, text: "you." },
  { start: 6.5, end: 7.2, text: "Well" },
  { start: 7.2, end: 7.8, text: "to" },
  { start: 7.8, end: 8.5, text: "start," },
  { start: 8.5, end: 8.8, text: "I" },
  { start: 8.8, end: 9.3, text: "can" },
  { start: 9.3, end: 9.9, text: "open" },
  { start: 9.9, end: 10.2, text: "a" },
  { start: 10.2, end: 10.8, text: "Jupiter" },
  { start: 10.8, end: 11.5, text: "account" },
  { start: 11.5, end: 11.8, text: "in" },
  { start: 11.8, end: 12.5, text: "just" },
  { start: 12.5, end: 13.0, text: "3" },
  { start: 13.0, end: 13.8, text: "minutes" },
  { start: 13.8, end: 14.5, text: "and" },
  { start: 14.5, end: 15.2, text: "start" },
  { start: 15.2, end: 15.9, text: "using" },
  { start: 15.9, end: 16.3, text: "my" },
  { start: 16.3, end: 17.0, text: "virtual" },
  { start: 17.0, end: 17.8, text: "debit" },
  { start: 17.8, end: 18.5, text: "card" },
  { start: 18.5, end: 19.3, text: "right" },
  { start: 19.3, end: 20.2, text: "away." },
  { start: 21.0, end: 21.3, text: "I" },
  { start: 21.3, end: 21.8, text: "get" },
  { start: 21.8, end: 22.2, text: "all" },
  { start: 22.2, end: 22.6, text: "my" },
  { start: 22.6, end: 23.2, text: "other" },
  { start: 23.2, end: 23.8, text: "account" },
  { start: 23.8, end: 24.5, text: "balances" },
  { start: 24.5, end: 25.0, text: "and" },
  { start: 25.0, end: 25.8, text: "overall" },
  { start: 25.8, end: 26.3, text: "net" },
  { start: 26.3, end: 27.0, text: "worth" },
  { start: 27.0, end: 27.5, text: "right" },
  { start: 27.5, end: 28.0, text: "here" },
  { start: 28.0, end: 28.3, text: "on" },
  { start: 28.3, end: 28.7, text: "the" },
  { start: 28.7, end: 29.5, text: "app," },
  { start: 30.0, end: 30.5, text: "so" },
  { start: 30.5, end: 30.8, text: "I" },
  { start: 30.8, end: 31.4, text: "never" },
  { start: 31.4, end: 31.9, text: "have" },
  { start: 31.9, end: 32.3, text: "to" },
  { start: 32.3, end: 32.9, text: "take" },
  { start: 32.9, end: 33.2, text: "a" },
  { start: 33.2, end: 34.0, text: "detour" },
  { start: 34.0, end: 34.5, text: "to" },
  { start: 34.5, end: 34.8, text: "the" },
  { start: 34.8, end: 35.5, text: "bank." },
  { start: 36.5, end: 37.2, text: "Pots" },
  { start: 37.2, end: 37.8, text: "lets" },
  { start: 37.8, end: 38.2, text: "me" },
  { start: 38.2, end: 38.8, text: "set" },
  { start: 38.8, end: 39.5, text: "aside" },
  { start: 39.5, end: 40.2, text: "money" },
  { start: 40.2, end: 40.8, text: "for" },
  { start: 40.8, end: 41.5, text: "what" },
  { start: 41.5, end: 41.8, text: "I" },
  { start: 41.8, end: 42.5, text: "dream" },
  { start: 42.5, end: 43.0, text: "of" },
  { start: 43.0, end: 44.0, text: "too," },
  { start: 44.5, end: 45.0, text: "so" },
  { start: 45.0, end: 45.3, text: "I" },
  { start: 45.3, end: 45.9, text: "can" },
  { start: 45.9, end: 46.5, text: "plan" },
  { start: 46.5, end: 47.0, text: "and" },
  { start: 47.0, end: 47.8, text: "save" },
  { start: 47.8, end: 48.3, text: "for" },
  { start: 48.3, end: 48.8, text: "my" },
  { start: 48.8, end: 49.5, text: "goals" },
  { start: 49.5, end: 50.0, text: "with" },
  { start: 50.0, end: 51.0, text: "Pots." },
  { start: 52.0, end: 52.5, text: "And" },
  { start: 52.5, end: 53.0, text: "with" },
  { start: 53.0, end: 53.3, text: "a" },
  { start: 53.3, end: 54.0, text: "card" },
  { start: 54.0, end: 54.5, text: "this" },
  { start: 54.5, end: 55.0, text: "good" },
  { start: 55.0, end: 56.0, text: "looking," },
  { start: 56.5, end: 57.0, text: "you" },
  { start: 57.0, end: 57.5, text: "will" },
  { start: 57.5, end: 58.0, text: "want" },
  { start: 58.0, end: 58.5, text: "to" },
  { start: 58.5, end: 59.5, text: "swipe" },
  { start: 59.5, end: 60.0, text: "it" },
  { start: 60.0, end: 61.0, text: "everywhere" },
  { start: 61.0, end: 61.5, text: "you" },
  { start: 61.5, end: 62.5, text: "go." },
  { start: 63.5, end: 64.5, text: "Thankfully," },
  { start: 64.5, end: 65.0, text: "every" },
  { start: 65.0, end: 65.5, text: "time" },
  { start: 65.5, end: 65.8, text: "I" },
  { start: 65.8, end: 66.5, text: "make" },
  { start: 66.5, end: 66.8, text: "a" },
  { start: 66.8, end: 67.8, text: "purchase," },
  { start: 67.8, end: 68.2, text: "I" },
  { start: 68.2, end: 68.8, text: "get" },
  { start: 68.8, end: 70.0, text: "Jewels." },
  { start: 70.5, end: 71.5, text: "Jewels" },
  { start: 71.5, end: 72.2, text: "aren't" },
  { start: 72.2, end: 72.8, text: "just" },
  { start: 72.8, end: 73.2, text: "any" },
  { start: 73.2, end: 73.8, text: "silly" },
  { start: 73.8, end: 74.5, text: "points," },
  { start: 74.5, end: 75.0, text: "they" },
  { start: 75.0, end: 75.5, text: "are" },
  { start: 75.5, end: 76.5, text: "actual" },
  { start: 76.5, end: 77.5, text: "rewards" },
  { start: 77.5, end: 78.0, text: "that" },
  { start: 78.0, end: 78.3, text: "I" },
  { start: 78.3, end: 79.0, text: "can" },
  { start: 79.0, end: 80.0, text: "use." },
  { start: 80.5, end: 81.5, text: "Hold" },
  { start: 81.5, end: 82.5, text: "on." },
  { start: 83.5, end: 84.0, text: "And" },
  { start: 84.0, end: 84.5, text: "for" },
  { start: 84.5, end: 85.0, text: "all" },
  { start: 85.0, end: 85.5, text: "the" },
  { start: 85.5, end: 86.2, text: "times" },
  { start: 86.2, end: 86.5, text: "I" },
  { start: 86.5, end: 87.5, text: "wonder" },
  { start: 87.5, end: 88.3, text: "where's" },
  { start: 88.3, end: 88.8, text: "all" },
  { start: 88.8, end: 89.2, text: "the" },
  { start: 89.2, end: 90.0, text: "money" },
  { start: 90.0, end: 90.3, text: "I" },
  { start: 90.3, end: 91.0, text: "had," },
  { start: 91.0, end: 91.5, text: "I" },
  { start: 91.5, end: 92.0, text: "just" },
  { start: 92.0, end: 93.0, text: "check" },
  { start: 93.0, end: 93.5, text: "the" },
  { start: 93.5, end: 94.5, text: "insights" },
  { start: 94.5, end: 95.0, text: "for" },
  { start: 95.0, end: 95.8, text: "every" },
  { start: 95.8, end: 96.5, text: "spend" },
  { start: 96.5, end: 96.8, text: "I" },
  { start: 96.8, end: 97.5, text: "made." },
  { start: 98.5, end: 99.0, text: "And" },
  { start: 99.0, end: 99.8, text: "after" },
  { start: 99.8, end: 100.2, text: "a" },
  { start: 100.2, end: 100.8, text: "day" },
  { start: 100.8, end: 101.5, text: "well" },
  { start: 101.5, end: 102.5, text: "spent," },
  { start: 103.0, end: 103.5, text: "my" },
  { start: 103.5, end: 104.5, text: "Jupiter" },
  { start: 104.5, end: 105.2, text: "card" },
  { start: 105.2, end: 106.0, text: "goes" },
  { start: 106.0, end: 106.5, text: "to" },
  { start: 106.5, end: 107.5, text: "sleep" },
  { start: 107.5, end: 109.0, text: "automatically" },
  { start: 109.5, end: 110.2, text: "so" },
  { start: 110.2, end: 111.0, text: "that" },
  { start: 111.0, end: 111.5, text: "no" },
  { start: 111.5, end: 113.0, text: "transactions" },
  { start: 113.0, end: 114.0, text: "occur" },
  { start: 114.0, end: 114.8, text: "while" },
  { start: 114.8, end: 115.2, text: "I" },
  { start: 115.2, end: 116.0, text: "dream" },
  { start: 116.0, end: 117.5, text: "away." },
  { start: 118.5, end: 119.5, text: "So" },
  { start: 119.5, end: 120.5, text: "how's" },
  { start: 120.5, end: 121.5, text: "Jupiter?" },
  { start: 122.5, end: 123.5, text: "It's" },
  { start: 123.5, end: 124.5, text: "simple," },
  { start: 124.5, end: 125.5, text: "better" },
  { start: 125.5, end: 127.0, text: "banking." },
  { start: 127.5, end: 129.0, text: "It's" },
  { start: 129.0, end: 130.5, text: "Jupiter." }
];

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export default function AdsShowcase() {
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<any>(null)
  const scriptContainerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update polling to be faster and better synced
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          const time = playerRef.current.getCurrentTime();
          // Adjust for potential lag (empirical offset)
          setCurrentTime(time + 0.1);
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Auto-scroll logic
  useEffect(() => {
    const activeIndex = jupiterScript.findIndex(word => currentTime >= word.start && currentTime <= word.end);
    if (activeIndex !== -1 && wordRefs.current[activeIndex]) {
      wordRefs.current[activeIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  }, [currentTime]);

  // Load YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }
  }, []);

  const initPlayer = () => {
    playerRef.current = new window.YT.Player('preview-player', {
      videoId: 'nmFQyTwIl1M',
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        mute: 0
      },
      events: {
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        }
      }
    });
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="h-screen bg-[#0a0a0a] text-gray-300 font-mono selection:bg-accent-gold selection:text-black overflow-hidden flex flex-col">

      {/* Cinematic Static Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://media.giphy.com/media/oEI9uWUicKgH6/giphy.gif')] mix-blend-overlay" />

      {/* Navigation Header */}
      <nav className="h-20 bg-black/90 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 z-[60] shrink-0">
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 text-white/50 hover:text-accent-gold transition-all"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Surface</span>
          </button>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <div className="hidden md:flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">Aman_Jain / Creative_Editor</span>
            <span className="text-[10px] text-accent-gold/40">v24.1.sync_live</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">NARRATOR_SYNC</span>
            <span className="text-[10px] text-green-500 animate-pulse flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              LIVE_DATA
            </span>
          </div>
          <MagneticButton onClick={togglePlay} className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:border-accent-gold/50 transition-colors">
            {isPlaying ? <Pause size={16} /> : <Play size={18} fill="currentColor" />}
          </MagneticButton>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

        {/* Left Side: The Living Manuscript */}
        <div
          ref={scriptContainerRef}
          className="w-full md:w-1/2 h-full overflow-y-auto px-8 md:px-20 py-32 bg-[#0c0c0c] border-r border-white/5 relative scroll-smooth scrollbar-hide"
        >
          <header className="mb-32 relative">
            <h1 className="text-5xl md:text-8xl text-white font-heading font-black mb-6 leading-none tracking-tighter">
              JUPITER<br /><span className="text-accent-gold/80 italic text-4xl leading-none">SCREENPLAY</span>
            </h1>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
              <span>INT. DIGITAL_INTERFACE</span>
              <span className="w-1 h-1 rounded-full bg-accent-gold/40" />
              <span>SYNC_TC: 00:00:24</span>
            </div>
          </header>

          {/* Word-by-word highlight container */}
          <div className="flex flex-wrap gap-x-2 gap-y-4 max-w-xl text-2xl md:text-4xl font-heading leading-tight transition-all duration-500 pb-96">
            {jupiterScript.map((word, i) => {
              const isActive = currentTime >= word.start && currentTime <= word.end;
              const isPast = currentTime > word.end;
              const isFuture = currentTime < word.start;

              return (
                <motion.span
                  key={i}
                  ref={el => wordRefs.current[i] = el}
                  animate={{
                    color: isActive ? "#FFFFFF" : isPast ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.05)",
                    scale: isActive ? 1.25 : 1,
                    filter: isActive ? "blur(0px) brightness(1.5)" : (isFuture || isPast) ? "blur(1px)" : "blur(0px)",
                    opacity: isActive ? 1 : isPast ? 0.6 : 0.2,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className={`inline-block whitespace-nowrap origin-left cursor-default p-1 rounded-sm ${isActive ? 'bg-accent-gold/20' : ''}`}
                >
                  {word.text}
                </motion.span>
              );
            })}
          </div>

          {/* Perspective Mask at top and bottom */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0c0c0c] to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0c0c0c] to-transparent pointer-events-none z-10" />
        </div>

        {/* Right Side: The Cinematic Preview */}
        <div className="w-full md:w-1/2 h-full bg-black relative flex items-center justify-center p-6 md:p-16 overflow-hidden">

          {/* High-end Reflection / Light leaks */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-gold/5 via-transparent to-black pointer-events-none" />

          <div className="w-full max-w-4xl aspect-video relative group z-10">

            {/* Visual Monitor Frame */}
            <div className="absolute -inset-6 border border-white/5 rounded-3xl pointer-events-none" />
            <div className="absolute -inset-1 border border-white/20 rounded-xl pointer-events-none shadow-[0_0_100px_rgba(0,0,0,1)]" />

            <div className="w-full h-full bg-[#111] rounded-lg overflow-hidden relative">
              <div id="preview-player" className="w-full h-full absolute inset-0 transform scale-105" />

              {/* Overlay UI when paused or loading */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center cursor-pointer z-30 group"
                    onClick={togglePlay}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-24 h-24 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white backdrop-blur-3xl shadow-2xl"
                    >
                      <Play size={40} fill="white" className="ml-2" />
                    </motion.div>
                    <div className="absolute bottom-12 text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">Initiate Sync Sequence</div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pro Monitor Metadata */}
              <div className="absolute top-6 left-8 z-40 flex items-center gap-4">
                <span className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-red-500 shadow-[0_0_10px_red]' : 'bg-gray-700'} animate-pulse`} />
                <div className="flex flex-col">
                  <span className="text-[11px] text-white tracking-[0.2em] font-bold font-mono uppercase">
                    REC_[00:{currentTime.toFixed(2).padStart(5, '0')}]
                  </span>
                  <span className="text-[8px] text-white/30 tracking-[0.4em] font-mono">CODEC: APPLE_PRORES_422_HQ</span>
                </div>
              </div>

              <div className="absolute top-6 right-8 z-40">
                <span className="text-[10px] text-accent-gold tracking-[0.3em] font-mono border border-accent-gold/30 px-2 py-0.5 rounded">
                  4K_UHD
                </span>
              </div>

              <div className="absolute bottom-6 left-8 z-40">
                <span className="text-[9px] text-white/20 font-mono tracking-[0.5em] uppercase">
                  SCENE_SYNC_LOCKED
                </span>
              </div>
            </div>

            {/* Sub-monitor ambient glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-32 bg-accent-gold/10 blur-[100px] opacity-20 pointer-events-none" />
          </div>

          {/* Quick Utility Controls */}
          <div className="absolute bottom-12 flex gap-6 z-20">
            <MagneticButton
              onClick={() => playerRef.current?.seekTo(0)}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/40 hover:text-accent-gold"
            >
              <RotateCcw size={18} />
            </MagneticButton>
            <MagneticButton className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/40 hover:text-white">
              <Volume2 size={18} />
            </MagneticButton>
          </div>
        </div>

      </div>

      {/* Persistence Bar */}
      <div className="h-2 bg-white/5 absolute bottom-0 left-0 right-0 z-50">
        <motion.div
          className="h-full bg-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          style={{ width: `${(currentTime / 64) * 100}%` }}
        />
      </div>
    </div>
  )
}
