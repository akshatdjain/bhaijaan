import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./ui/TextReveal";

const portraitUrl = "/aman jain.jpg";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      id="story"
      className="min-h-screen flex items-center py-32 px-6 md:px-12 bg-bg-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          style={{ y: imageY, opacity }}
          className="relative h-[700px] overflow-hidden rounded-sm group"
        >
          <div className="absolute inset-0 bg-accent-gold mix-blend-color opacity-20 z-10 group-hover:opacity-0 transition-opacity duration-700" />
          <img
            src={portraitUrl}
            alt="Aman Jain"
            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </motion.div>

        <div className="space-y-12 relative z-20">
          <div>
            <span className="text-accent-gold uppercase tracking-widest text-sm font-medium mb-4 block">The Narrative</span>
            <TextReveal className="text-4xl md:text-6xl text-text-primary leading-[1.1]">
              The Art of the Long Game.
            </TextReveal>
          </div>

          <div className="space-y-8 text-lg text-text-secondary font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Stories aren't just written—they're lived, breathed, and carefully
              constructed over time. Each word is a deliberate choice, each
              narrative a journey into the human condition.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From the quiet corners of literary fiction to the bold strokes of
              commercial storytelling, Aman Jain has spent 14 years mastering the
              craft of narrative. His work spans novels, advertisements,
              journalism, and strategic communications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Co-Publisher at <span className="text-white font-medium">Literature Candy</span> since 2011, from Hubli to Bengaluru,
              Aman has built a legacy across digital platforms and independent
              publishing. This is not just a portfolio. It's a chronicle of a writer
              who believes that great stories don't just entertain—they transform.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
