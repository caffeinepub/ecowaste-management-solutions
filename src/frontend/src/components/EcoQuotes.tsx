import { Leaf } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const quotes = [
  {
    id: "q1",
    text: "One small step towards cleaner waste management is one giant leap for a cleaner India.",
    attr: "EcoWaste Mission",
  },
  {
    id: "q2",
    text: "Your cleanliness today is your children's heritage tomorrow.",
    attr: "EcoWaste Mission",
  },
  {
    id: "q3",
    text: "A clean environment is not a luxury - it's a necessity. Let's build it together.",
    attr: "EcoWaste Mission",
  },
  {
    id: "q4",
    text: "Every piece of waste managed is a promise kept to the planet.",
    attr: "EcoWaste Mission",
  },
  {
    id: "q5",
    text: "From hospitals to schools, cleanliness is the foundation of a healthy nation.",
    attr: "EcoWaste Mission",
  },
  {
    id: "q6",
    text: "Join thousands of organizations making India spotless, one bin at a time.",
    attr: "EcoWaste Mission",
  },
];

const missionLines = [
  "Every tonne of waste managed is a life potentially saved.",
  "Cleanliness is not optional - 2 million lives depend on it.",
];

export default function EcoQuotes() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1b5e20 0%, #2e7d32 40%, #388e3c 70%, #43a047 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute top-0 left-0 opacity-10"
          width="260"
          height="260"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path
            d="M10,5 C40,5 90,30 80,70 C70,100 30,95 10,70 C-5,45 -10,5 10,5 Z"
            fill="#fff"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 opacity-10"
          width="300"
          height="300"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path
            d="M90,95 C60,95 10,70 20,30 C30,0 70,5 90,30 C105,55 110,95 90,95 Z"
            fill="#fff"
          />
        </svg>
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
          width="500"
          height="500"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path
            d="M50,5 C80,5 95,35 90,60 C85,85 65,95 50,95 C35,95 15,85 10,60 C5,35 20,5 50,5 Z"
            fill="#fff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Subtle mission lines */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {missionLines.map((line, i) => (
            <p
              key={line}
              className="text-green-200/60 text-sm italic text-center"
            >
              {i === 1 && (
                <span className="font-bold not-italic text-green-200/80">
                  2 million lives
                </span>
              )}
              {i === 1 ? " depend on it." : line}
              {i === 0 && (
                <span className="not-italic text-green-200/30 mx-3 hidden sm:inline">
                  |
                </span>
              )}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-green-200 mb-3 bg-white/10 px-4 py-1 rounded-full">
            <Leaf className="w-3.5 h-3.5" /> Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Words That <span className="text-green-200">Inspire Change</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl px-10 py-12 border border-white/20 shadow-xl min-h-[200px] flex flex-col items-center justify-center">
            <span
              className="absolute top-6 left-8 text-8xl font-serif text-green-300/30 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={quotes[current].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed mb-6">
                  {quotes[current].text}
                </p>
                <p className="text-green-200 text-sm font-semibold tracking-wider">
                  - {quotes[current].attr}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {quotes.map((q, i) => (
              <button
                type="button"
                key={q.id}
                data-ocid="quotes.tab"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-6" : "bg-white/40 w-2"}`}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
