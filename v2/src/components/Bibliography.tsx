import { motion } from "motion/react";
import { useState } from "react";
import { BookDetail, type Book } from "./BookDetail";
import { AnimatePresence } from "motion/react";

const books: Book[] = [
  {
    id: "1",
    title: "The Blue Camel",
    subtitle: "Political Satire / Magnum Opus",
    year: "2025",
    cover: "/the blue camel.jpg",
    description:
      "A blistering, hallucinogenic descent into power, mass manipulation, and the terrifying fragility of the human mind. A raw nerve of paranoia and control. Published Feb 2025, this work questions the very strings of civilization. It's not just a book; it's a transmission from the edge of truth.",
    isFeatured: true,
    link: "https://www.amazon.in/Blue-Camel-Truth-Begins-Mind/dp/B0DYDFD9TR",
  },
  {
    id: "2",
    title: "The Pluviophile",
    subtitle: "Science Fiction",
    year: "2023",
    cover: "/the pluviophile.jpg",
    description:
      "Based in 5000AD, a battle for Meta-physical energy on Planet Renatus. Rho chases supremacy by arresting the laws of Origin. Radioactive rains and antimatter power define a future where the Conglomerate wants ComoNeurax and the X-Race needs a home.",
    link: "https://www.amazon.in/Pluviophile-Aman-Jain/dp/4821789132",
  },
  {
    id: "3",
    title: "Bata Batata",
    subtitle: "Social Commentary",
    year: "2022",
    cover: "/bata batata.jpg",
    description:
      "A side-splitting adventure of Subbu reclaiming his vanished Bata shoes. Armed with relentless determination and a mind sharpened by way too much TV, Subbu sets off on a wild adventure to reclaim what is rightfully his—his prized Bata shoes. A story of faith and determination.",
    link: "#",
  },
  {
    id: "4",
    title: "Loyal Laila",
    subtitle: "Crime & Mystery",
    year: "2015",
    cover: "/loyal laila.jpg",
    description:
      "A gripping exploration of loyalty and betrayal in the shadows. A deep dive into the complexities of human relationships set against a backdrop of mystery and high-stakes tension.",
    link: "#",
  },
  {
    id: "5",
    title: "The Naked Highway",
    subtitle: "Fiction / Debut",
    year: "2011",
    cover: "/the naked highway.jpg",
    description:
      "Published at age 18. A raw first step into the world of crime and mystery that launched a 14-year career. The first book that started the journey—exploring the darker corridors of crime and human choice.",
    link: "#",
  },
];

export function Bibliography() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <section
      id="books"
      className="min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="mb-4">Bibliography</h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            A collection of works that span fiction, satire, science fiction, and social commentary.
            Five books across 14 years of storytelling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
  key={book.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
  whileHover={{ y: -8 }}
  style={{ willChange: "transform, opacity" }}
  onClick={() => setSelectedBook(book)}
 className={`group cursor-pointer ${
    book.isFeatured ? "md:col-span-2" : ""
  }`}
>
  <div
    className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col ${
      "h-[520px]"
    }`}
  > 
                <motion.div
  layoutId={`book-cover-${book.id}`}
  transition={{
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1]   // Apple-style easeOutExpo
  }}
  className="relative h-[340px] w-full overflow-hidden"
>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  {book.isFeatured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm tracking-wide">
                      Magnum Opus
                    </div>
                  )}
                </motion.div>

                <div className="p-6 space-y-2 flex-1 flex flex-col">
                  <motion.h3
                    layoutId={`book-title-${book.id}`}
                    className="text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    {book.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`book-subtitle-${book.id}`}
                    className="text-slate-600"
                  >
                    {book.subtitle}
                  </motion.p>
                  <motion.p
                    layoutId={`book-year-${book.id}`}
                    className="text-sm text-slate-400 tracking-wider"
                  >
                    {book.year}
                  </motion.p>
                </div>
              </div>
            </motion.div>
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
