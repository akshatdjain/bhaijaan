import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MagneticButton from "./ui/MagneticButton";

const campaigns = [
  { id: 1, brand: "TABLE SPACE", title: "Creative Leadership" },
  { id: 2, brand: "JUPITER", title: "Banking Reimagined" },
  { id: 3, brand: "HAKUHODO", title: "Fortune 500 Narratives" },
  { id: 4, brand: "MOSHI MOSHI", title: "Brand Voice Architecture" },
];

export function Ads() {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} id="ads" className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <div className="absolute top-12 left-6 md:left-12 z-10 mix-blend-difference flex flex-col gap-8 items-start">
          <div>
            <span className="text-accent-gold uppercase tracking-widest text-sm font-medium block mb-2">Commercial Work</span>
            {/* Enforce text color here in case CSS vars are behaving weirdly in mix-blend mode */}
            <h2 className="text-4xl md:text-6xl text-white font-heading leading-none">
              Brands &<br />Narratives
            </h2>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-24 pl-[40vw]">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="relative group w-[500px] h-[300px] md:h-[400px] flex-shrink-0 bg-white/5 border border-white/10 rounded-lg p-12 flex flex-col justify-between hover:bg-white/10 transition-colors duration-500 cursor-default">
              <div className="text-8xl text-white/5 font-heading absolute top-4 right-8 font-bold select-none group-hover:text-accent-gold/10 transition-colors">
                0{campaign.id}
              </div>
              <div>
                <h3 className="text-xl text-accent-gold tracking-widest mb-2 font-mono">{campaign.brand}</h3>
                <p className="text-3xl md:text-5xl text-white font-heading leading-tight">{campaign.title}</p>
              </div>
              <div className="w-full h-px bg-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </div>
          ))}

          {/* Final Call to Action Card */}
          <div className="relative group w-[500px] h-[300px] md:h-[400px] flex-shrink-0 bg-white/10 border border-accent-gold/20 rounded-lg p-12 flex flex-col justify-center items-center text-center hover:bg-white/[0.15] transition-all duration-500">
            <div className="mb-8">
              <h3 className="text-4xl text-white font-heading mb-4">Script Studio</h3>
              <p className="text-white/60 text-sm max-w-xs mx-auto mb-8 font-light leading-relaxed">
                Delve deeper into the written architecture behind these global campaigns.
              </p>
              <div className="flex justify-center">
                <MagneticButton onClick={() => navigate("/ads")} className="bg-white text-black hover:bg-accent-gold hover:text-black transition-colors px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl">
                  Enter Studio
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
