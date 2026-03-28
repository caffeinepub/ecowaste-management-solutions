import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Leaf, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: Wrench,
    title: "End-to-End Service",
    desc: "From supply of certified Sintex products to waste collection, cleaning, and compliant disposal - we will manage every step so you never have to.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Products",
    desc: "We will supply genuine Sintex colour-coded bins, wheelbarrows, foot-operated bins, and more - all BIS-certified and built to last in demanding environments.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We are not a one-time vendor. Once you partner with us, we will proactively schedule, replenish, and upgrade - so waste management is permanently off your plate.",
  },
  {
    icon: Leaf,
    title: "Eco-Responsible",
    desc: "Every practice we will follow - from segregation at source to responsible disposal - will align with the green India mission and sustainability goals.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* two-tone background */}
      <div className="absolute inset-0 flex">
        <div className="w-full md:w-1/2 bg-secondary/40" />
        <div className="hidden md:block w-1/2 bg-background" />
      </div>
      {/* subtle leaf watermark */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" aria-hidden="true" className="w-full h-full">
          <path
            d="M100,10 C160,10 190,70 180,130 C170,180 130,190 100,190 C70,190 30,180 20,130 C10,70 40,10 100,10 Z"
            fill="currentColor"
            className="text-primary"
          />
          <path
            d="M100,10 L100,190"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" /> About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-foreground leading-tight mb-5">
              One Partnership.
              <br />
              <span className="text-primary">Zero Waste Worries.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              At{" "}
              <span className="font-semibold text-foreground">
                Ecowaste Management Solutions
              </span>
              , our single-minded mission is to{" "}
              <span className="font-semibold text-foreground">
                take waste management completely off your hands - for good.
              </span>{" "}
              Whether you run a hospital, a residential society, a school, or a
              large institution, you have enough to focus on. Managing bins,
              scheduling pickups, sourcing certified products, and staying
              compliant with waste disposal norms should never be on your to-do
              list.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              That is exactly why we exist. Partner with us, and we will step in
              as your dedicated waste management team. We will supply the right
              Sintex-certified products, schedule regular collections, carry out
              deep cleaning, and handle compliant disposal - all proactively,
              without you ever having to follow up.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              We will serve hospitals, housing societies, schools, municipal
              bodies, and corporates across India - treating every client not as
              a contract, but as a long-term responsibility. When you choose us,
              you choose{" "}
              <span className="font-semibold text-primary">
                peace of mind, permanently.
              </span>
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 py-5 font-semibold shadow-md"
              data-ocid="about.primary_button"
            >
              <a href="#quote">
                Request a Quotation <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Visual accent */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl bg-primary text-white p-8 shadow-lg">
              <p className="text-2xl font-bold leading-snug mb-2">
                "Tension-free waste management - that is not a tagline for us.
                It is a promise we will deliver, every single day."
              </p>
              <p className="text-white/70 text-sm mt-4 font-medium">
                - Ecowaste Management Solutions
              </p>
            </div>
            <div className="rounded-2xl bg-secondary/60 border border-primary/20 p-6 shadow-sm">
              <p className="text-lg font-semibold text-foreground leading-snug flex items-start gap-2">
                <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Our vision: a cleaner, healthier India where every institution
                is free from the burden of waste management.
              </p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                We are building a future where waste is no longer your problem -
                it is ours to solve, sustainably and responsibly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-2xl bg-background border border-border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              data-ocid="about.card"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
