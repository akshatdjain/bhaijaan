import { useState } from 'react';
import { motion } from 'framer-motion';

const articles = [
    { id: 1, title: "The Art of Silence", category: "Essay", date: "Oct 2025" },
    { id: 2, title: "Digital Gardens", category: "Philosophy", date: "Sep 2025" },
    { id: 3, title: "Modern Myths", category: "Culture", date: "Aug 2025" },
    { id: 4, title: "Designing for Soul", category: "Design", date: "Jul 2025" },
];

export default function FeaturedWritings() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 md:px-12 bg-bg-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-heading text-text-primary mb-16 border-b border-white/10 pb-8">
                    Featured Writings
                </h2>

                <div className="flex flex-col">
                    {articles.map((article) => (
                        <motion.a
                            key={article.id}
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHovered(article.id)}
                            onMouseLeave={() => setHovered(null)}
                            animate={{ opacity: hovered && hovered !== article.id ? 0.3 : 1 }}
                            className="group relative flex items-center justify-between py-12 border-b border-dashed border-white/10 hover:border-white/30 transition-colors cursor-pointer"
                        >
                            <div className="flex items-baseline gap-8">
                                <span className="text-accent-gold font-mono text-sm opacity-60">0{article.id}</span>
                                <h3 className="text-3xl md:text-5xl font-heading text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                                    {article.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-8">
                                <span className="text-sm font-mono text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">{article.category}</span>
                                <span className="text-xl text-accent-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                    →
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
