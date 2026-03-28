import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import { motion } from "motion/react";

const leaves = [
  { id: "leaf-l1", x: "10%", delay: 0, duration: 7, rotate: 15, size: 28 },
  { id: "leaf-l2", x: "22%", delay: 1.2, duration: 9, rotate: -20, size: 20 },
  { id: "leaf-l3", x: "78%", delay: 0.5, duration: 8, rotate: 30, size: 24 },
  { id: "leaf-l4", x: "88%", delay: 2, duration: 10, rotate: -10, size: 32 },
  { id: "leaf-l5", x: "65%", delay: 1.8, duration: 7.5, rotate: 25, size: 18 },
  { id: "leaf-l6", x: "50%", delay: 3, duration: 11, rotate: -30, size: 22 },
];

function FallingLeaf({ x, delay, duration, rotate, size }: (typeof leaves)[0]) {
  return (
    <motion.div
      className="absolute top-0 pointer-events-none"
      style={{ left: x }}
      initial={{ y: -80, opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        opacity: [0, 0.7, 0.7, 0],
        rotate: rotate * 6,
        x: [0, 20, -20, 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeIn",
        x: { duration, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
      }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M20,2 C32,2 38,14 36,26 C34,36 26,38 20,38 C14,38 6,36 4,26 C2,14 8,2 20,2 Z"
          fill="#4caf50"
          opacity="0.85"
        />
        <path d="M20,2 L20,38" stroke="#2e7d32" strokeWidth="1.5" fill="none" />
        <path
          d="M20,14 C26,18 28,26 20,30"
          stroke="#2e7d32"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[580px] md:min-h-[680px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/ecowaste-hero.dim_1400x700.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1b5e20]/30 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {leaves.map((leaf) => (
          <FallingLeaf key={leaf.id} {...leaf} />
        ))}
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-20">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-white/20">
            <Leaf className="w-3.5 h-3.5 text-green-300" /> India's Future Waste
            Management Partner
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-tight mb-5">
            Making India Clean
            <br />
            <span className="text-green-300">&amp; Tension-Free</span>
          </h1>
          <p className="text-white/85 text-lg leading-relaxed mb-2">
            We will provide comprehensive waste management services for
            hospitals, societies, schools, municipalities, and corporates across
            India.
          </p>
          <p className="text-green-300/90 text-sm font-semibold mb-6 flex items-center gap-2">
            <Leaf className="w-4 h-4 flex-shrink-0" />
            Committed to contributing to the{" "}
            <span className="underline decoration-green-400">
              Green India Mission
            </span>{" "}
            - cleaner cities, healthier lives, a sustainable future.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 mb-8">
            {[
              "Waste Collection",
              "Deep Cleaning",
              "Eco Products",
              "Medical Waste",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-white/80 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold shadow-lg"
              data-ocid="hero.primary_button"
            >
              <a href="#services">
                Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-6 font-semibold backdrop-blur-sm"
              data-ocid="hero.secondary_button"
            >
              <a href="#quote">Get a Quote</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
