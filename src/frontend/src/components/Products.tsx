import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface Product {
  name: string;
  image: string;
  capacity: string;
  material: string;
  suitableFor: string;
  badge?: string;
  badgeColor?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "colour-bins",
    name: "Colour-Coded Waste Bins",
    description:
      "BIS-certified Sintex bins for systematic waste segregation - wet, dry, hazardous, biomedical & general.",
    coverImage: "/assets/generated/sintex-bin-green.dim_600x600.png",
    products: [
      {
        name: "Green Bin - Wet/Organic Waste",
        image: "/assets/generated/sintex-bin-green.dim_600x600.png",
        capacity: "15L, 30L, 60L, 120L",
        material: "BIS-certified UV-stabilised plastic",
        suitableFor: "Kitchens, canteens, garden waste",
        badge: "Green",
        badgeColor: "bg-green-100 text-green-800",
      },
      {
        name: "Blue Bin - Dry/Recyclable Waste",
        image: "/assets/generated/sintex-bin-blue.dim_600x600.png",
        capacity: "15L, 30L, 60L, 120L",
        material: "BIS-certified UV-stabilised plastic",
        suitableFor: "Paper, plastic, glass, metal",
        badge: "Blue",
        badgeColor: "bg-blue-100 text-blue-800",
      },
      {
        name: "Yellow Bin - Hazardous/Chemical Waste",
        image: "/assets/generated/sintex-bin-yellow.dim_600x600.png",
        capacity: "15L, 30L, 60L",
        material: "BIS-certified UV-stabilised plastic",
        suitableFor: "Hospitals, labs, industrial units",
        badge: "Yellow",
        badgeColor: "bg-yellow-100 text-yellow-800",
      },
      {
        name: "Red Bin - Biomedical/Infectious Waste",
        image: "/assets/generated/sintex-bin-red.dim_600x600.png",
        capacity: "10L, 15L, 30L",
        material: "BIS-certified UV-stabilised plastic",
        suitableFor: "Healthcare facilities, clinics",
        badge: "Red",
        badgeColor: "bg-red-100 text-red-800",
      },
      {
        name: "Black Bin - Non-Recyclable/General Waste",
        image: "/assets/generated/sintex-bin-black.dim_600x600.png",
        capacity: "15L, 30L, 60L",
        material: "BIS-certified UV-stabilised plastic",
        suitableFor: "Residual / general waste",
        badge: "Black",
        badgeColor: "bg-gray-100 text-gray-800",
      },
    ],
  },
  {
    id: "wheelbarrows",
    name: "Wheelbarrows",
    description:
      "Heavy-duty wheelbarrows for construction sites, campuses, and municipal waste transport.",
    coverImage: "/assets/generated/sintex-wheelbarrow.dim_600x600.png",
    products: [
      {
        name: "Standard Wheelbarrow",
        image: "/assets/generated/sintex-wheelbarrow.dim_600x600.png",
        capacity: "150L",
        material: "Heavy-duty mild steel, corrosion-resistant",
        suitableFor: "Construction sites, large premises",
      },
      {
        name: "Industrial Wheelbarrow",
        image: "/assets/generated/sintex-wheelbarrow.dim_600x600.png",
        capacity: "200L",
        material: "Galvanised steel, ergonomic handles",
        suitableFor: "Municipal and industrial use",
      },
    ],
  },
  {
    id: "hand-carts",
    name: "Hand Carts / Trolleys",
    description:
      "Versatile hand carts and trolleys for institutional corridors, hospitals, and warehouses.",
    coverImage: "/assets/generated/sintex-handcart.dim_600x600.png",
    products: [
      {
        name: "2-Wheel Hand Cart",
        image: "/assets/generated/sintex-handcart.dim_600x600.png",
        capacity: "300 kg load",
        material: "Heavy-duty foldable steel",
        suitableFor: "Hospitals, warehouses",
      },
      {
        name: "4-Wheel Waste Trolley",
        image: "/assets/generated/sintex-handcart.dim_600x600.png",
        capacity: "200L",
        material: "Plastic body, lockable wheels",
        suitableFor: "Institutional corridors, offices",
      },
    ],
  },
  {
    id: "wheeled-bins",
    name: "Wheeled Wastebins",
    description:
      "UV-stabilised wheeled bins with hinged lids - BIS certified for societies, schools, and municipalities.",
    coverImage: "/assets/generated/sintex-wheeled-bin.dim_600x600.png",
    products: [
      {
        name: "120L Wheeled Bin",
        image: "/assets/generated/sintex-wheeled-bin.dim_600x600.png",
        capacity: "120L",
        material: "UV-stabilised plastic, BIS certified",
        suitableFor: "Societies, schools",
      },
      {
        name: "240L Wheeled Bin",
        image: "/assets/generated/sintex-wheeled-bin-240.dim_600x600.png",
        capacity: "240L",
        material: "Municipal-grade plastic, rear handle",
        suitableFor: "Bulk waste, municipal use",
      },
    ],
  },
  {
    id: "foot-operated",
    name: "Foot-Operated Bins",
    description:
      "Hygienic pedal-operated bins for hands-free waste disposal in clinics, offices, and public spaces.",
    coverImage: "/assets/generated/sintex-foot-bin-small.dim_600x600.png",
    products: [
      {
        name: "10L Pedal Bin",
        image: "/assets/generated/sintex-foot-bin-small.dim_600x600.png",
        capacity: "10L",
        material: "Plastic, slim design",
        suitableFor: "Offices, clinics, washrooms",
      },
      {
        name: "30L Pedal Bin",
        image: "/assets/generated/sintex-foot-bin.dim_600x600.png",
        capacity: "30L",
        material: "Stainless steel exterior",
        suitableFor: "Hospitals, hotels, public spaces",
      },
    ],
  },
];

interface InquiryFormProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  prefilledProduct?: string;
}

function InquiryForm({
  open,
  onOpenChange,
  prefilledProduct = "",
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: prefilledProduct,
    message: "",
  });

  // sync prefilledProduct when it changes
  const handleOpen = (v: boolean) => {
    if (!v) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: "",
          phone: "",
          email: "",
          product: prefilledProduct,
          message: "",
        });
      }, 300);
    } else {
      setForm((prev) => ({ ...prev, product: prefilledProduct }));
    }
    onOpenChange(v);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Inquiry submitted! We'll get back to you shortly.");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto"
        data-ocid="inquiry.dialog"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            {submitted ? "Inquiry Received!" : "Raise an Inquiry"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-6 gap-4"
          >
            <CheckCircle2 className="w-16 h-16 text-primary" />
            <p className="text-foreground font-semibold text-lg">
              Thank you! We'll get back to you shortly.
            </p>
            <p className="text-muted-foreground text-sm">
              You can also reach us directly on WhatsApp:{" "}
              <a
                href="https://wa.me/918800095471"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline"
              >
                +91 8800095471
              </a>
            </p>
            <Button
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              onClick={() => handleOpen(false)}
              data-ocid="inquiry.close_button"
            >
              Close
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label
                  htmlFor="inq-name"
                  className="mb-1 block text-sm font-medium"
                >
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="inq-name"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  data-ocid="inquiry.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="inq-phone"
                  className="mb-1 block text-sm font-medium"
                >
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="inq-phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  data-ocid="inquiry.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="inq-email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email Address
                </Label>
                <Input
                  id="inq-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  data-ocid="inquiry.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="inq-product"
                  className="mb-1 block text-sm font-medium"
                >
                  Product / Service of Interest
                </Label>
                <Input
                  id="inq-product"
                  placeholder="e.g. Green Bin 120L"
                  value={form.product}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, product: e.target.value }))
                  }
                  data-ocid="inquiry.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="inq-msg"
                  className="mb-1 block text-sm font-medium"
                >
                  Message / Requirements
                </Label>
                <Textarea
                  id="inq-msg"
                  rows={4}
                  placeholder="Describe your requirements, quantities, delivery location..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  data-ocid="inquiry.textarea"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-3 font-semibold text-base"
              data-ocid="inquiry.submit_button"
            >
              Submit Inquiry
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

interface ProductDrawerProps {
  category: Category | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
}

function ProductDrawer({ category, onClose, onInquire }: ProductDrawerProps) {
  return (
    <Dialog open={!!category} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        data-ocid="products.dialog"
      >
        <DialogHeader className="flex flex-row items-center justify-between pr-8">
          <DialogTitle className="text-2xl font-bold text-foreground">
            {category?.name}
          </DialogTitle>
        </DialogHeader>
        {category && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
            {category.products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-md transition-shadow flex flex-col"
                data-ocid={`products.item.${i + 1}`}
              >
                <div className="bg-gray-50 h-48 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground text-sm leading-snug">
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${product.badgeColor ?? "bg-gray-100 text-gray-700"}`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground flex-1">
                    <p>
                      <span className="font-medium text-foreground">
                        Capacity:{" "}
                      </span>
                      {product.capacity}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Material:{" "}
                      </span>
                      {product.material}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Suitable for:{" "}
                      </span>
                      {product.suitableFor}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full text-xs"
                    onClick={() => onInquire(product.name)}
                    data-ocid={`products.secondary_button.${i + 1}`}
                  >
                    Raise Inquiry
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState("");

  const openInquiry = (productName: string) => {
    setInquiryProduct(productName);
    setInquiryOpen(true);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Our Store
          </span>
          <h2 className="text-3xl md:text-[34px] font-bold text-foreground mt-2">
            Eco-Friendly Products
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Sustainably sourced, certified products that help your organization
            manage waste responsibly. Browse our full range below.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-ocid="products.list"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md hover:border-primary/40 transition-all flex flex-col"
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="bg-gray-50 h-52 flex items-center justify-center p-6">
                <img
                  src={cat.coverImage}
                  alt={cat.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cat.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                  {cat.description}
                </p>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full gap-2"
                  onClick={() => setActiveCategory(cat)}
                  data-ocid={`products.primary_button.${i + 1}`}
                >
                  View Products <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Inquiry CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4 text-sm">
            Can't find what you're looking for? Raise a general inquiry and our
            team will assist you.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 font-semibold"
            onClick={() => openInquiry("")}
            data-ocid="products.open_modal_button"
          >
            Raise General Inquiry
          </Button>
        </motion.div>
      </div>

      {/* Product Drawer */}
      <ProductDrawer
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
        onInquire={(name) => {
          setActiveCategory(null);
          setTimeout(() => openInquiry(name), 200);
        }}
      />

      {/* Inquiry Form */}
      <InquiryForm
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        prefilledProduct={inquiryProduct}
      />
    </section>
  );
}
