import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import momosImg from "@/assets/momos.jpg";
import thukpaImg from "@/assets/thukpa.jpg";
import tingmoImg from "@/assets/tingmo.jpg";
import butterTeaImg from "@/assets/butter-tea.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: momosImg, alt: "Steam Momos", cat: "Food" },
  { src: gallery1, alt: "Restaurant Interior", cat: "Ambiance" },
  { src: thukpaImg, alt: "Chicken Thukpa", cat: "Food" },
  { src: gallery2, alt: "Fried Momos", cat: "Food" },
  { src: tingmoImg, alt: "Tingmo Bread", cat: "Food" },
  { src: gallery3, alt: "Noodle Bowl", cat: "Food" },
  { src: gallery4, alt: "Chef Making Momos", cat: "Ambiance" },
  { src: butterTeaImg, alt: "Butter Tea", cat: "Food" },
  { src: gallery5, alt: "Shapta Stir Fry", cat: "Food" },
  { src: gallery6, alt: "Thenthuk Soup", cat: "Food" },
];

const filters = ["All", "Food", "Ambiance"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <div className="pt-28 pb-20">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2">A Glimpse Inside</h1>
            <p className="text-muted-foreground mt-3">Our kitchen, our food, our soul</p>
            <div className="section-divider max-w-xs mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="overflow-hidden rounded-2xl group aspect-square cursor-pointer relative"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground text-sm font-semibold">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={filtered[selected]?.src}
                alt={filtered[selected]?.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;
