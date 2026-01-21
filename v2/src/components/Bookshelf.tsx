import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TiltCard from "./ui/TiltCard";
import TextReveal from "./ui/TextReveal";
import { BookDetail, type Book } from "./BookDetail";

const books: Book[] = [
    {
        id: "1",
        title: "The Blue Camel",
        subtitle: "Political Satire",
        year: "2025",
        cover: "/the blue camel.jpg",
        description: "A blistering, hallucinogenic descent into power, mass manipulation, and the terrifying fragility of the human mind. A raw nerve of paranoia and control. Published Feb 2025.",
        isFeatured: true,
        link: "https://www.amazon.in/Blue-Camel-Truth-Begins-Mind/dp/B0DYDFD9TR",
        primaryColor: "#EAB308", // Yellow-500 (Matches the 'Blue Camel' contrast)
    },
    {
        id: "2",
        title: "The Pluviophile",
        subtitle: "Science Fiction",
        year: "2023",
        cover: "/the pluviophile.jpg",
        description: "Based in 5000AD, a battle for Meta-physical energy on Planet Renatus. Rho chases supremacy by arresting the laws of Origin. Radioactive rains and antimatter power.",
        link: "https://www.amazon.in/Pluviophile-Aman-Jain/dp/4821789132",
        primaryColor: "#22D3EE", // Cyan-400 (Electric Blue for Sci-Fi)
    },
    {
        id: "3",
        title: "Bata Batata",
        subtitle: "Social Commentary",
        year: "2022",
        cover: "/bata batata.jpg",
        description: "A side-splitting adventure of Subbu reclaiming his vanished Bata shoes. A story of faith and determination.",
        link: "#",
        primaryColor: "#F472B6", // Pink-400 (Playful/Social)
    },
    {
        id: "4",
        title: "Loyal Laila",
        subtitle: "Crime & Mystery",
        year: "2015",
        cover: "/loyal laila.jpg",
        description: "A gripping exploration of loyalty and betrayal in the shadows. A deep dive into the complexities of human relationships.",
        link: "#",
        primaryColor: "#EF4444", // Red-500 (Mystery/Crime)
    },
    {
        id: "5",
        title: "The Naked Highway",
        subtitle: "Fiction / Debut",
        year: "2011",
        cover: "/the naked highway.jpg",
        description: "A raw first step into the world of crime and mystery that launched a 14-year career.",
        link: "#",
        primaryColor: "#A855F7", // Purple-500 (Deep/Debut)
    }
];

export default function Bookshelf() {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    return (
        <section id="books" className="py-32 px-6 md:px-12 bg-bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-accent-gold uppercase tracking-widest text-sm font-medium">Selected Works</span>
                    <TextReveal className="text-4xl md:text-6xl text-text-primary mt-4">
                        The Library
                    </TextReveal>
                    <p className="text-text-secondary mt-6 max-w-2xl text-lg font-light">
                        Five books across 14 years. A collection spanning satire, science fiction, and social commentary.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {books.map((book) => (
                        <TiltCard key={book.id} className="w-full aspect-[2/3] rounded-sm cursor-pointer" onClick={() => setSelectedBook(book)}>
                            <div className="w-full h-full relative group overflow-hidden bg-bg-primary">
                                {/* Book Cover Image */}
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 group-hover:blur-sm" style={{ backgroundImage: `url('${book.cover}')` }} />

                                {/* Overlay: Stronger for readability */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500" />

                                {/* Content Container - Flex for alignment */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">

                                    {/* Hover Content Wrapper */}
                                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">

                                        {/* Card-like effect behind text for max readability (optional, trying clean text first) */}
                                        <div className="relative z-10">
                                            <span
                                                className="text-xs tracking-widest uppercase mb-2 block font-bold shadow-black drop-shadow-md"
                                                style={{ color: book.primaryColor }}
                                            >
                                                {book.subtitle}
                                            </span>
                                            <h3 className="font-heading text-3xl text-white mb-4 leading-none drop-shadow-lg">{book.title}</h3>

                                            <div
                                                className="h-px w-0 mb-4 group-hover:w-16 transition-all duration-700 delay-100"
                                                style={{ backgroundColor: book.primaryColor }}
                                            />

                                            <p className="text-white text-sm font-medium line-clamp-3 leading-relaxed drop-shadow-md">
                                                {book.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Book Spine Effect/Decoration */}
                                <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/20 z-10 mix-blend-overlay" />
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedBook && (
                    <BookDetail
                        book={selectedBook}
                        onClose={() => setSelectedBook(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
