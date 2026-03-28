import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const blocks = [
  {
    id: "wrs1",
    number: "62M",
    unit: "Tonnes",
    label: "Annual waste generated in India",
    color: "text-yellow-300",
  },
  {
    id: "wrs2",
    number: "2M+",
    unit: "Deaths",
    label: "Yearly from waste-related diseases",
    color: "text-red-400",
  },
  {
    id: "wrs3",
    number: "78%",
    unit: "",
    label: "Of India's waste goes unprocessed",
    color: "text-orange-300",
  },
  {
    id: "wrs4",
    number: "1",
    unit: "Child",
    label: "Dies every 2 min from poor sanitation",
    color: "text-pink-300",
  },
];

export default function WasteRealityStats() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d2b0d 0%, #1a3d1a 50%, #0d2b0d 100%)",
      }}
      data-ocid="waste-reality.section"
    >
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-400 mb-3 bg-red-900/30 border border-red-700/40 px-4 py-1 rounded-full">
            Wake-Up Call
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            The Reality of{" "}
            <span className="text-yellow-300">Waste in India</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            These are not just numbers - they are lives, communities, and
            futures at stake.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
          data-ocid="waste-reality.list"
        >
          {blocks.map((block, i) => (
            <motion.div
              key={block.id}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`waste-reality.item.${i + 1}`}
            >
              <div
                className={`text-4xl sm:text-5xl font-extrabold leading-none ${block.color} mb-1`}
              >
                {block.number}
              </div>
              {block.unit && (
                <div
                  className={`text-base font-bold ${block.color} opacity-80 mb-2`}
                >
                  {block.unit}
                </div>
              )}
              <p className="text-white/55 text-xs sm:text-sm leading-snug">
                {block.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/70 text-base italic">
            &ldquo;These numbers{" "}
            <span className="text-yellow-300 font-semibold not-italic">
              can change.
            </span>{" "}
            Together, we can make it happen.&rdquo;
          </p>
          <div className="mt-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-lg"
              data-ocid="waste-reality.primary_button"
            >
              Be Part of the Solution <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
