import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

const experiences = [
  { id: 1, company: "Table Space", role: "Creative Head", period: "2024 — 2025", description: "Leading creative strategy and brand narratives for a boutique creative studio." },
  { id: 2, company: "Jupiter", role: "Content Marketing Manager", period: "2021 — 2022", description: "Spearheaded content strategy for India's leading digital banking platform." },
  { id: 3, company: "Hakuhodo Inc.", role: "Senior Brand Planner", period: "2019 — 2021", description: "Crafted integrated brand strategies for Fortune 500 clients worldwide." },
  { id: 4, company: "Literature Candy", role: "Co-Publisher & Editor", period: "2011 — Present", description: "Co-founded and built an independent publishing house. Published over 50 titles." },
];

export function Strategy() {
  return (
    <section id="strategy" className="py-32 px-6 md:px-12 bg-bg-secondary relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-heading text-text-primary mb-6">Strategic Mind</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">
            14 years. From Hubli to Bengaluru. Across publishing, advertising, and digital platforms.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-secondary border-2 border-accent-gold" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-3xl font-heading text-text-primary">{exp.company}</h3>
                <span className="font-mono text-sm text-accent-gold">{exp.period}</span>
              </div>
              <p className="text-lg text-white font-medium mb-4">{exp.role}</p>
              <p className="text-text-secondary font-light leading-relaxed max-w-xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <MagneticButton onClick={() => window.location.href = 'mailto:amandjain@gmail.com'} className="bg-white/5 border border-white/10 text-white hover:bg-accent-gold hover:text-bg-primary hover:border-transparent transition-all">
            Hire for Strategy
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
