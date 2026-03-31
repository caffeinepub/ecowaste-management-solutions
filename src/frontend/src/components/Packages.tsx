import { Check } from "lucide-react";
import { motion } from "motion/react";

const packages = [
  {
    tier: "Basic",
    subtitle: "Small Institutions",
    bestFor: "Small schools, clinics, small offices",
    budget: "Rs. 25,000 – Rs. 75,000",
    color: "border-green-500",
    badge: "bg-green-100 text-green-800",
    highlight: false,
    includes: [
      "Color-coded waste bins (basic setup)",
      "Basic segregation system (Dry / Wet)",
      "Initial setup guidance",
      "One-time installation",
    ],
    benefits: [
      "Simple and cost-effective waste system",
      "Clean and organized premises",
    ],
  },
  {
    tier: "Standard",
    subtitle: "Growing Institutions",
    bestFor: "Schools, colleges, mid-size offices, societies",
    budget: "Rs. 75,000 – Rs. 2,50,000",
    color: "border-blue-500",
    badge: "bg-blue-100 text-blue-800",
    highlight: false,
    includes: [
      "Complete bin setup (Euroline range + standard bins)",
      "Trolleys / collection system",
      "Floor-wise waste collection planning",
      "Staff guidance & basic training",
      "Waste storage area setup",
    ],
    benefits: [
      "Efficient waste handling",
      "Better hygiene & management",
      "Reduced manual effort",
    ],
  },
  {
    tier: "Premium",
    subtitle: "Large Institutions",
    bestFor: "Hospitals, universities, large societies, commercial buildings",
    budget: "Rs. 2,50,000 – Rs. 10,00,000+",
    color: "border-red-500",
    badge: "bg-red-100 text-red-800",
    highlight: true,
    includes: [
      "Complete waste management system setup",
      "Advanced bins + wheeled bins + carts",
      "Segregation as per compliance standards",
      "Staff training program",
      "Monthly inspection & maintenance support",
      "Waste audit & reporting",
      "Disposal coordination (authorized vendors)",
    ],
    benefits: [
      "Full compliance (especially for hospitals)",
      "Professional waste management system",
      "Long-term cost saving",
      '"Zero Waste" transformation ready',
    ],
  },
];

interface PackagesProps {
  onRequestQuote?: (pkg: string) => void;
}

export default function Packages({ onRequestQuote }: PackagesProps) {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Tailored For You
          </span>
          <h2 className="text-3xl md:text-[34px] font-bold text-foreground mt-2">
            Our Service Packages
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Choose the package that fits your institution's scale. Every package
            is fully customizable -- we will design the right solution for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.tier}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-card rounded-2xl border-2 ${pkg.color} shadow-md flex flex-col overflow-hidden ${
                pkg.highlight
                  ? "ring-2 ring-primary/30 shadow-lg scale-[1.02]"
                  : ""
              }`}
            >
              {pkg.highlight && (
                <div className="bg-primary text-primary-foreground text-xs font-bold text-center py-1.5 uppercase tracking-wider">
                  Most Comprehensive
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${pkg.badge} mb-2`}
                  >
                    {pkg.tier} Package
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {pkg.subtitle}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Best for: {pkg.bestFor}
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl px-4 py-3 mb-5 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                    Ideal Budget
                  </p>
                  <p className="text-lg font-bold text-primary mt-0.5">
                    {pkg.budget}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
                    Includes
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5 flex-1">
                  <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
                    Key Benefits
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">
                          +
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestQuote?.(`${pkg.tier} Package`)}
                  className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-sm"
                >
                  Request a Quotation
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
