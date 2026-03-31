import {
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer id="contact" className="bg-white border-t border-border pt-14 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-primary">
                  ECOWASTE
                </span>
                <span className="block text-[10px] text-muted-foreground font-medium">
                  Management Solutions
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Making India clean and tension-free with comprehensive waste
              management services for organizations across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Services", href: "#services" },
                { label: "Products", href: "#products" },
                { label: "About Us", href: "#about" },
                { label: "Request a Quote", href: "#quote" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  EcoWaste Management Solutions,
                  <br />
                  India - Serving Pan-India
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+918800096570"
                    data-ocid="contact.link"
                    className="hover:text-primary transition-colors"
                  >
                    +91 88000 96570
                  </a>
                  <a
                    href="tel:+918800095472"
                    data-ocid="contact.link"
                    className="hover:text-primary transition-colors"
                  >
                    +91 88000 95472
                  </a>
                  <a
                    href="tel:+918800009572"
                    data-ocid="contact.link"
                    className="hover:text-primary transition-colors"
                  >
                    +91 88000 09572
                  </a>
                  <a
                    href="tel:01149931479"
                    data-ocid="contact.link"
                    className="hover:text-primary transition-colors"
                  >
                    Tel No. 011 4993 1479
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:ewmsolutions1@gmail.com"
                  data-ocid="contact.link"
                  className="hover:text-primary transition-colors"
                >
                  ewmsolutions1@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
              Join us in our mission to make India cleaner, greener, and
              healthier for future generations.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {year} EcoWaste Management Solutions. All rights reserved.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              Built with <Heart className="w-3 h-3 text-red-500 inline" /> using
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
