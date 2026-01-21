import { motion } from "framer-motion";
import TextReveal from "./ui/TextReveal";

export function Journalism() {
  return (
    <section
      id="journalism"
      className="min-h-screen py-32 px-6 md:px-12 bg-white text-bg-primary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="border-t-[1px] border-black pt-8 mb-8 flex justify-between items-start">
            <span className="font-mono text-sm tracking-widest uppercase text-black">
              Independent Publishing
            </span>
            <span className="font-mono text-sm tracking-widest uppercase text-black">
              Est. 2011
            </span>
          </div>

          <h2 className="text-[10vw] leading-[0.8] font-heading font-black mb-8 tracking-tighter text-black">
            THE ZERO<br />DEGREE
          </h2>

          {/* UPDATED BLOCK STARTS HERE */}
          <div className="max-w-xl ml-auto">
            <div className="flex items-start gap-3">
              {/* Vertical line */}
              <div className="w-px h-8 bg-black mt-1" />

              {/* Text */}
              <div className="w-[420px] text-[12px] leading-[1.3] tracking-tight text-black">
                <TextReveal className="block !text-[35px] !leading-[1.3] text-black">
                  A definitive broadsheet spanning 8 volumes.
                </TextReveal>

                <p className="mt-1 text-[15px] leading-[1.4] font-mono text-black/60">
                  Political analysis, urban development, and narratives that matter.
                  Published independently under Literature Candy.
                </p>
              </div>
            </div>
          </div>

          {/* UPDATED BLOCK ENDS HERE */}
        </motion.div>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {[
            {
              vol: "VOL. 1-2",
              focus: "Political Landscape",
              desc: "Deep dives into Indian politics, policy analysis, and the machinery of democracy.",
            },
            {
              vol: "VOL. 3-4",
              focus: "Urban Evolution",
              desc: "Chronicles of city growth, infrastructure development, and the changing face of metropolitan India.",
            },
            {
              vol: "VOL. 5-6",
              focus: "Cultural Commentary",
              desc: "Essays on identity, tradition, and the tension between heritage and progress.",
            },
            {
              vol: "VOL. 7-8",
              focus: "Future Visions",
              desc: "Forward-looking pieces on technology, society, and the narratives yet to unfold.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-white hover:bg-slate-50 transition-colors duration-500 group cursor-default min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400 mb-6 group-hover:text-black transition-colors font-mono">
                  {item.vol}
                </p>
                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 group-hover:underline decoration-1 underline-offset-4">
                  {item.focus}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
