import { motion } from "motion/react";
import { X, ExternalLink } from "lucide-react";

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  cover: string;
  description: string;
  isFeatured?: boolean;
  link?: string;
  primaryColor?: string;
}

interface BookDetailProps {
  book: Book;
  onClose: () => void;
}

export function BookDetail({ book, onClose }: BookDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 overflow-hidden flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#0a0a0a] border border-white/10 rounded-sm max-w-5xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 relative bg-[#0a0a0a]">

          {/* Close Button Mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:hidden text-white/50 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative">
            <motion.div
              layoutId={`book-cover-${book.id}`}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative aspect-[2/3] w-full max-w-sm mx-auto overflow-hidden shadow-2xl rounded-sm"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {book.isFeatured && (
              <div className="absolute -top-2 -right-2 bg-accent-gold text-bg-primary px-4 py-1 text-xs font-bold tracking-widest uppercase shadow-lg">
                Magnum Opus
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <button
              onClick={onClose}
              className="self-end p-2 text-white/50 hover:text-accent-gold transition-colors mb-6 hidden md:block"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="space-y-8 flex-1">
              <div>
                <motion.h2
                  layoutId={`book-title-${book.id}`}
                  className="mb-2 text-4xl md:text-5xl font-heading text-white leading-none"
                >
                  {book.title}
                </motion.h2>
                <div className="flex items-center gap-4 mt-2">
                  <motion.p
                    layoutId={`book-subtitle-${book.id}`}
                    className="text-xl font-light"
                    style={{ color: book.primaryColor || '#d4af37' }}
                  >
                    {book.subtitle}
                  </motion.p>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <motion.p
                    layoutId={`book-year-${book.id}`}
                    className="text-sm text-gray-400 tracking-wider font-mono"
                  >
                    {book.year}
                  </motion.p>
                </div>
              </div>

              <div className="h-px bg-white/10 w-24" />

              <div className="text-gray-300 leading-relaxed space-y-4 font-light text-lg">
                <p>{book.description}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              {book.link && book.link !== "#" && (
                <button
                  onClick={() => window.open(book.link, '_blank')}
                  className="flex-1 bg-accent-gold text-bg-primary px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  Buy on Amazon <ExternalLink className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => window.location.href = 'mailto:amandjain@gmail.com?subject=Rights Inquiry for ' + book.title}
                className="flex-1 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-bg-primary transition-all shadow-lg active:scale-95"
              >
                Request Rights
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
