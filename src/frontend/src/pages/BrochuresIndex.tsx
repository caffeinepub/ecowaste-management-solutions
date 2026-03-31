import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  FileText,
  GraduationCap,
  Heart,
  Home,
  School,
} from "lucide-react";

const brochures = [
  {
    id: "cover",
    icon: FileText,
    title: "General Cover Page",
    desc: "A professional cover page for all Ecowaste Management Solutions brochures.",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "schools",
    icon: School,
    title: "Schools Brochure",
    desc: "Colour-coded bins, dry/wet segregation, and setup guidance for schools.",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "universities",
    icon: GraduationCap,
    title: "Universities & Colleges Brochure",
    desc: "Campus-wide waste collection planning, training, and compliance for institutions.",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "hospitals",
    icon: Heart,
    title: "Hospitals Brochure",
    desc: "Bio-medical waste compliance, advanced bins, audits, and authorized disposal.",
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    id: "societies",
    icon: Home,
    title: "Societies & Residential Brochure",
    desc: "Common area bins, composting setup, and floor-wise collection for residents.",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    id: "offices",
    icon: Briefcase,
    title: "Offices & Commercial Brochure",
    desc: "Scalable bin setup, staff training, and floor-wise waste management for offices.",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export default function BrochuresIndex() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            data-ocid="brochures.link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </a>
          <span className="text-xs opacity-80">
            Ecowaste Management Solutions
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            Organisation Brochures
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Download Our Brochures
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Select your organisation type to view and download a tailored
            brochure with packages, services, and contact information specific
            to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brochures.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
                data-ocid={`brochures.${b.id}.card`}
              >
                <div
                  className={`w-12 h-12 rounded-lg border flex items-center justify-center ${b.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-foreground text-base mb-1">
                    {b.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">{b.desc}</p>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold"
                  data-ocid={`brochures.${b.id}.button`}
                >
                  <a href={`#brochure/${b.id}`}>Download / Print as PDF</a>
                </Button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          Open any brochure then use your browser's Print function (Ctrl+P /
          Cmd+P) and select "Save as PDF".
        </p>
      </div>
    </div>
  );
}
