import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Brochures", href: "#brochures" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function goToQuote() {
    setOpen(false);
    window.location.hash = "#quote";
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/ecowaste-logo.png"
            alt="Ecowaste Management Solutions"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <img
            src="/assets/gem_logo_-_google_search_-_google_chrome_3_31_2026_2_48_27_pm-019d4332-f026-706c-b8df-aeee641c5cb6.png"
            alt="Government e-Marketplace"
            className="h-9 w-auto object-contain"
          />
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-5"
            data-ocid="nav.primary_button"
          >
            <a href="#quote">Request a Quotation</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-foreground/80 hover:text-primary py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              type="button"
              onClick={goToQuote}
              className="w-full mt-2 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold"
              data-ocid="nav.primary_button"
            >
              Request a Quotation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
