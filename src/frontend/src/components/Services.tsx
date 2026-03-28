import {
  ArrowRight,
  Brain,
  Package,
  Recycle,
  SprayCan,
  Syringe,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Truck,
    title: "Waste Collection",
    desc: "We will offer scheduled and on-demand waste pickup for organizations of all sizes with GPS-tracked vehicles.",
    warning: null,
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning",
    desc: "We will provide professional deep-cleaning services for hospitals, societies, and commercial premises.",
    warning: {
      stat: "21% of communicable diseases",
      context:
        "in India are linked to poor sanitation & improper waste handling.",
    },
  },
  {
    icon: Brain,
    title: "Waste Consulting",
    desc: "We will provide expert guidance on waste reduction, segregation policies, and compliance with environmental regulations.",
    warning: null,
  },
  {
    icon: Syringe,
    title: "Medical Waste Disposal",
    desc: "We will offer safe, certified bio-medical waste collection and disposal for healthcare facilities.",
    warning: {
      stat: "80% of hospital waste",
      context:
        "is general waste - yet most is improperly disposed, causing 16 billion unsafe injections yearly.",
    },
  },
  {
    icon: Package,
    title: "Eco Products Supply",
    desc: "We will supply biodegradable bags, color-coded bins, PPE kits, and eco-friendly sanitation supplies.",
    warning: null,
  },
  {
    icon: Recycle,
    title: "Recycling Solutions",
    desc: "We will run end-to-end recycling programs including material sorting, processing, and audit reports.",
    warning: {
      stat: "Only 22% of India's waste",
      context: "is processed - 78% ends up polluting land, water, and air.",
    },
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-[34px] font-bold text-foreground mt-2">
            Our Comprehensive Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            From daily waste collection to specialized medical disposal - we
            will handle every aspect of waste management so you don't have to.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 hover:shadow-md transition-all group flex flex-col"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">
                {service.desc}
              </p>

              {service.warning && (
                <div className="mt-auto mb-3 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5">
                  <p className="text-xs leading-snug text-red-700">
                    <span className="font-extrabold text-red-600">
                      &#x26A0; {service.warning.stat}
                    </span>{" "}
                    {service.warning.context}
                  </p>
                </div>
              )}

              <a
                href="#quote"
                className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-auto"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
