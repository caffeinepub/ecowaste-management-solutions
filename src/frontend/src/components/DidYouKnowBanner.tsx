import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
  {
    id: "s1",
    text: "2 Million+ people die every year from diseases linked to poor waste management",
    bold: "2 Million+",
  },
  {
    id: "s2",
    text: "In India, 21% of communicable diseases are directly linked to unsafe water and waste",
    bold: "21%",
  },
  {
    id: "s3",
    text: "Every year, 400 Million tonnes of hazardous waste is generated worldwide",
    bold: "400 Million tonnes",
  },
  {
    id: "s4",
    text: "Poor sanitation kills a child every 2 minutes globally",
    bold: "every 2 minutes",
  },
  {
    id: "s5",
    text: "India generates 62 Million tonnes of waste every year - only 22% is processed",
    bold: "62 Million tonnes",
  },
  {
    id: "s6",
    text: "1 in 3 schools in India lacks proper waste disposal facilities",
    bold: "1 in 3 schools",
  },
];

function highlightBold(text: string, bold: string) {
  const parts = text.split(bold);
  if (parts.length < 2) return <span>{text}</span>;
  return (
    <span>
      {parts[0]}
      <strong className="text-yellow-300 font-extrabold">{bold}</strong>
      {parts[1]}
    </span>
  );
}

export default function DidYouKnowBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stat = stats[current];

  return (
    <div
      className="w-full py-4 px-4"
      style={{
        background:
          "linear-gradient(90deg, #0a1f0a 0%, #1b3a1b 50%, #0a1f0a 100%)",
      }}
      data-ocid="did-you-know.panel"
    >
      <div className="container mx-auto flex items-center gap-3 justify-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 whitespace-nowrap border border-yellow-400/40 px-2 py-0.5 rounded">
          Did You Know?
        </span>
        <div className="overflow-hidden h-6 flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={stat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-white/90 text-sm leading-none text-center"
            >
              {highlightBold(stat.text, stat.bold)}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
