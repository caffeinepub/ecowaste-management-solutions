import { motion } from "motion/react";

const addOns = [
  "Composting setup (for societies / campuses)",
  "Monthly AMC (maintenance contracts)",
  "Waste analytics report",
  "Recycling coordination",
  "Awareness programs (schools / colleges)",
];

const advantages = [
  "Customized solutions for each client",
  "Scalable system (small to large institutions)",
  "Long-term partnership approach",
];

export default function AddOns() {
  return (
    <section id="addons" className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add-On Services */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-green-200 shadow-sm p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <span className="text-green-700 text-lg font-bold">+</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  Enhance Your Package
                </span>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Add-On Services
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {addOns.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              className="inline-block mt-6 w-full text-center border border-primary text-primary font-semibold py-2.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
            >
              Enquire About Add-Ons
            </a>
          </motion.div>

          {/* Unique Advantage */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground rounded-2xl shadow-sm p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold opacity-70">
                Why Choose Us
              </span>
              <h3 className="text-xl font-bold mt-1 mb-2">
                Our Unique Advantage
              </h3>
              <p className="text-primary-foreground/85 text-sm leading-relaxed italic mb-6">
                "We don't just supply products -- we build complete waste
                management systems."
              </p>
              <ul className="space-y-3">
                {advantages.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-foreground/60 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#quote"
              className="inline-block mt-8 w-full text-center bg-primary-foreground text-primary font-semibold py-2.5 rounded-xl hover:bg-primary-foreground/90 transition-colors text-sm"
            >
              Request a Quotation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
