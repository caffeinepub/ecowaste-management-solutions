import { motion } from "motion/react";

const partners = [
  { name: "Hospitals", icon: "🏥" },
  { name: "Schools", icon: "🏫" },
  { name: "Societies", icon: "🏘️" },
  { name: "Municipalities", icon: "🏛️" },
  { name: "Corporates", icon: "🏢" },
  { name: "Healthcare", icon: "⚕️" },
];

export default function TrustStrip() {
  return (
    <section id="about" className="py-14 bg-white border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.p
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Built to Serve Organizations Like
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/60 border border-border hover:border-primary/30 hover:bg-secondary transition-all"
            >
              <span className="text-xl">{partner.icon}</span>
              <span className="text-sm font-semibold text-foreground/70">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
