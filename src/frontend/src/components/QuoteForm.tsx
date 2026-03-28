import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { OrganizationType, ServiceType } from "../backend";
import { useSubmitQuote } from "../hooks/useQueries";

const orgTypes: { value: string; label: string }[] = [
  { value: "hospital", label: "Hospital" },
  { value: "school", label: "School" },
  { value: "civilSociety", label: "Society / Residential" },
  { value: "other:Municipality", label: "Municipality" },
  { value: "other:Corporate", label: "Corporate" },
  { value: "other:Other", label: "Other" },
];

const serviceTypes: { value: string; label: string }[] = [
  { value: "wasteCollection", label: "Waste Collection" },
  { value: "cleaning", label: "Cleaning Services" },
  { value: "products", label: "Products" },
  { value: "consulting", label: "Consulting" },
  { value: "other:Other", label: "Other" },
];

function parseOrgType(value: string): OrganizationType {
  if (value === "hospital") return { __kind__: "hospital", hospital: null };
  if (value === "school") return { __kind__: "school", school: null };
  if (value === "civilSociety")
    return { __kind__: "civilSociety", civilSociety: null };
  const label = value.replace("other:", "");
  return { __kind__: "other", other: label };
}

function parseServiceType(value: string): ServiceType {
  if (value === "wasteCollection")
    return { __kind__: "wasteCollection", wasteCollection: null };
  if (value === "cleaning") return { __kind__: "cleaning", cleaning: null };
  if (value === "products") return { __kind__: "products", products: null };
  if (value === "consulting")
    return { __kind__: "consulting", consulting: null };
  const label = value.replace("other:", "");
  return { __kind__: "other", other: label };
}

export default function QuoteForm() {
  const { mutateAsync, isPending } = useSubmitQuote();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    organizationName: "",
    organizationType: "",
    serviceType: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.organizationName.trim())
      e.organizationName = "Organization name is required";
    if (!form.organizationType)
      e.organizationType = "Please select an organization type";
    if (!form.serviceType) e.serviceType = "Please select a service type";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Enter a valid email";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      await mutateAsync({
        name: form.name,
        organizationName: form.organizationName,
        organizationType: parseOrgType(form.organizationType),
        serviceType: parseServiceType(form.serviceType),
        email: form.email,
        message: form.message,
      });
      setSubmitted(true);
      toast.success("Quote request submitted! We'll get back to you shortly.");
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  }

  return (
    <section id="quote" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Free Quote
          </span>
          <h2 className="text-3xl md:text-[34px] font-bold text-foreground mt-2">
            Request Your Customized Quote
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Tell us about your organization's waste management needs and we'll
            prepare a tailored proposal for you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card border border-border p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          data-ocid="quote.card"
        >
          {submitted ? (
            <div className="text-center py-10" data-ocid="quote.success_state">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Request Submitted!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you! Our team will review your request and contact you
                within 24 hours.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    organizationName: "",
                    organizationType: "",
                    serviceType: "",
                    email: "",
                    message: "",
                  });
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate data-ocid="quote.modal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Rajesh Kumar"
                    data-ocid="quote.input"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p
                      className="text-destructive text-xs mt-1"
                      data-ocid="quote.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Organization Name */}
                <div>
                  <Label
                    htmlFor="orgName"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Organization Name *
                  </Label>
                  <Input
                    id="orgName"
                    value={form.organizationName}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        organizationName: e.target.value,
                      }))
                    }
                    placeholder="City Hospital"
                    data-ocid="quote.input"
                    className={
                      errors.organizationName ? "border-destructive" : ""
                    }
                  />
                  {errors.organizationName && (
                    <p
                      className="text-destructive text-xs mt-1"
                      data-ocid="quote.error_state"
                    >
                      {errors.organizationName}
                    </p>
                  )}
                </div>

                {/* Org Type */}
                <div>
                  <Label className="text-sm font-medium mb-1.5 block">
                    Organization Type *
                  </Label>
                  <Select
                    value={form.organizationType}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, organizationType: v }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="quote.select"
                      className={
                        errors.organizationType ? "border-destructive" : ""
                      }
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {orgTypes.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.organizationType && (
                    <p
                      className="text-destructive text-xs mt-1"
                      data-ocid="quote.error_state"
                    >
                      {errors.organizationType}
                    </p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <Label className="text-sm font-medium mb-1.5 block">
                    Service Required *
                  </Label>
                  <Select
                    value={form.serviceType}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, serviceType: v }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="quote.select"
                      className={errors.serviceType ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p
                      className="text-destructive text-xs mt-1"
                      data-ocid="quote.error_state"
                    >
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="rajesh@cityhospital.in"
                    data-ocid="quote.input"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p
                      className="text-destructive text-xs mt-1"
                      data-ocid="quote.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Describe your waste management requirements, current challenges, and expected volume..."
                    rows={4}
                    data-ocid="quote.textarea"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full mt-6 bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-base font-semibold shadow-md"
                data-ocid="quote.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
