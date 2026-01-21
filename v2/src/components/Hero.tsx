import TextReveal from '../components/ui/TextReveal';
import MagneticButton from '../components/ui/MagneticButton';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-accent-gold uppercase tracking-[0.2em] text-sm mb-6 font-medium"
        >
          The Portfolio of Aman
        </motion.p>

        <div className="mb-8">
          <TextReveal className="text-5xl md:text-8xl font-heading text-text-primary leading-[1.1] mb-2">
            Words Tailored
          </TextReveal>
          <TextReveal className="text-5xl md:text-8xl font-heading text-text-primary leading-[1.1]" delay={0.5}>
            By Aman
          </TextReveal>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-xl text-text-secondary text-lg md:text-xl font-light mb-12 leading-relaxed"
        >
          Crafting narratives that breathe, stories that linger, and words that shape perspective.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <MagneticButton onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Explore Works
          </MagneticButton>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-accent-gold rounded-full mix-blend-screen filter blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-slate-700 rounded-full mix-blend-screen filter blur-[80px]" />
      </div>
    </section>
  );
}
