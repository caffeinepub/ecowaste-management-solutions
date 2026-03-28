import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const cities = [
  { name: "Delhi", x: 94, y: 52 },
  { name: "Ahmedabad", x: 52, y: 88 },
  { name: "Mumbai", x: 44, y: 122 },
  { name: "Pune", x: 52, y: 132 },
  { name: "Hyderabad", x: 96, y: 152 },
  { name: "Bangalore", x: 88, y: 188 },
  { name: "Chennai", x: 112, y: 187 },
  { name: "Kolkata", x: 144, y: 96 },
];

const stats = [
  { value: "500+", label: "Cities Served" },
  { value: "10,000+", label: "Organizations" },
  { value: "1M+ KG", label: "Waste Managed" },
];

const indiaPath =
  "M 97,6 L 105,8 L 118,12 L 130,18 L 140,18 L 148,24 L 155,32 L 158,42 L 162,54 L 160,68 L 157,80 L 160,92 L 158,102 L 152,112 L 155,124 L 150,138 L 145,150 L 140,162 L 132,172 L 124,182 L 118,192 L 112,202 L 105,214 L 100,226 L 96,240 L 90,226 L 84,214 L 78,202 L 70,192 L 62,182 L 54,170 L 46,158 L 40,144 L 36,130 L 32,118 L 30,106 L 32,94 L 34,82 L 36,70 L 38,58 L 42,46 L 50,38 L 58,30 L 68,24 L 78,18 L 86,12 L 92,8 Z";

function LeafDecor({
  className,
  size,
  rotate,
}: { className?: string; size: number; rotate: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M50,5 C70,5 90,25 85,55 C80,80 60,95 50,95 C40,95 20,80 15,55 C10,25 30,5 50,5 Z"
        fill="#2e7d32"
      />
      <path d="M50,5 L50,95" stroke="#1b5e20" strokeWidth="2" fill="none" />
      <path
        d="M50,30 C60,38 65,50 50,58"
        stroke="#1b5e20"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M50,50 C40,55 35,65 50,75"
        stroke="#1b5e20"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export default function IndiaMap() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f0faf0] to-[#e8f5e9] relative overflow-hidden">
      <LeafDecor
        className="absolute top-8 left-8 opacity-10"
        size={80}
        rotate={-20}
      />
      <LeafDecor
        className="absolute bottom-12 right-10 opacity-10"
        size={100}
        rotate={30}
      />
      <LeafDecor
        className="absolute top-1/2 right-4 opacity-5"
        size={140}
        rotate={15}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" /> Our Reach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Serving Across <span className="text-primary">India</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From the mountains of the north to the coast of the south - EcoWaste
            is on a mission to make every corner of India clean and green.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <svg
              viewBox="0 0 200 260"
              width="320"
              height="416"
              className="drop-shadow-xl"
              role="img"
              aria-label="Map of India showing EcoWaste service locations"
            >
              <defs>
                <linearGradient
                  id="mapGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#43a047" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1b5e20" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d={indiaPath}
                fill="#2e7d32"
                opacity="0.15"
                transform="translate(2,4) scale(1.02)"
              />
              <path
                d={indiaPath}
                fill="url(#mapGradient)"
                stroke="#1b5e20"
                strokeWidth="1"
              />
              {cities.map((city, i) => (
                <motion.g
                  key={city.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.4,
                    type: "spring",
                  }}
                >
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r="6"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.6"
                    animate={{ r: [6, 10, 6], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="3.5"
                    fill="#fff"
                    filter="url(#glow)"
                  />
                  <circle cx={city.x} cy={city.y} r="2" fill="#ffeb3b" />
                  <text
                    x={city.x + 5}
                    y={city.y - 5}
                    fontSize="6"
                    fill="#fff"
                    fontWeight="600"
                    fontFamily="sans-serif"
                  >
                    {city.name}
                  </text>
                </motion.g>
              ))}
            </svg>
          </motion.div>

          <div className="flex flex-col gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-4 bg-white/80 backdrop-blur rounded-2xl px-8 py-5 shadow-card border border-primary/10"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <span className="text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-base font-semibold text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
            <motion.div
              className="bg-primary/10 rounded-2xl px-8 py-5 border border-primary/20"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-sm font-medium text-primary leading-relaxed">
                EcoWaste is expanding its network every day, bringing
                professional waste management to cities, towns, and villages -
                because{" "}
                <span className="font-bold">
                  a cleaner India starts from every locality.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
