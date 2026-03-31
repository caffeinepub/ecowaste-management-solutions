import {
  ArrowLeft,
  Handshake,
  Leaf,
  Package,
  Printer,
  Recycle,
} from "lucide-react";

export default function BrochureCover() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .cover-page {
            width: 210mm;
            min-height: 297mm;
            page-break-after: avoid;
          }
        }
      `}</style>

      {/* Top bar - no print */}
      <div className="no-print bg-green-800 text-white py-3 px-4 flex items-center justify-between">
        <a
          href="#brochures"
          className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          data-ocid="brochure.link"
        >
          <ArrowLeft className="w-4 h-4" />
          All Brochures
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-colors"
          data-ocid="brochure.primary_button"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      {/* A4 Cover Page */}
      <div
        className="cover-page mx-auto bg-white"
        style={{
          width: "210mm",
          minHeight: "297mm",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero section - deep green gradient */}
        <div
          className="flex flex-col items-center justify-center text-white"
          style={{
            background:
              "linear-gradient(160deg, #14532d 0%, #166534 50%, #15803d 100%)",
            padding: "48px 40px 36px",
            flex: "0 0 auto",
          }}
        >
          {/* Company Logo */}
          <img
            src="/assets/ecowaste-logo.png"
            alt="Ecowaste Management Solutions"
            style={{
              height: "160px",
              width: "auto",
              objectFit: "contain",
              marginBottom: "24px",
            }}
          />

          {/* Company name */}
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "900",
              letterSpacing: "0.04em",
              textAlign: "center",
              color: "#ffffff",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            ECOWASTE MANAGEMENT SOLUTIONS
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#bbf7d0",
              textAlign: "center",
              marginBottom: "28px",
              letterSpacing: "0.02em",
            }}
          >
            One Partnership. Zero Waste Worries.
          </p>

          {/* Decorative leaf divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "rgba(187,247,208,0.5)",
              }}
            />
            <Leaf style={{ width: "22px", height: "22px", color: "#86efac" }} />
            <Recycle
              style={{ width: "22px", height: "22px", color: "#86efac" }}
            />
            <Leaf
              style={{
                width: "22px",
                height: "22px",
                color: "#86efac",
                transform: "scaleX(-1)",
              }}
            />
            <div
              style={{
                height: "1px",
                width: "60px",
                background: "rgba(187,247,208,0.5)",
              }}
            />
          </div>
        </div>

        {/* White section */}
        <div
          style={{
            background: "#f0fdf4",
            flex: "1",
            padding: "40px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Motivational headline */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "800",
                color: "#14532d",
                marginBottom: "10px",
                lineHeight: 1.3,
              }}
            >
              Building a Cleaner, Greener India
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#4b7c5b",
                maxWidth: "420px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              We will provide end-to-end waste management solutions for
              institutions across India -- from product supply to complete
              system setup.
            </p>
          </div>

          {/* Three pillars */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            {[
              {
                icon: (
                  <Leaf
                    style={{ width: "28px", height: "28px", color: "#16a34a" }}
                  />
                ),
                title: "Eco-Friendly Products",
                desc: "Colour-coded bins, wheeled wastebins, and foot-operated containers built for long-term use.",
              },
              {
                icon: (
                  <Package
                    style={{ width: "28px", height: "28px", color: "#16a34a" }}
                  />
                ),
                title: "Complete Waste Systems",
                desc: "We will design, supply, and implement waste management systems tailored to your institution.",
              },
              {
                icon: (
                  <Handshake
                    style={{ width: "28px", height: "28px", color: "#16a34a" }}
                  />
                ),
                title: "Sustainable Partnerships",
                desc: "Long-term partnerships ensuring compliance, cleanliness, and zero waste stress for your organisation.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  flex: 1,
                  background: "#ffffff",
                  border: "1px solid #bbf7d0",
                  borderRadius: "12px",
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {pillar.icon}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#14532d",
                    marginBottom: "6px",
                  }}
                >
                  {pillar.title}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#4b7c5b",
                    lineHeight: 1.5,
                  }}
                >
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom logo strip */}
          <div
            style={{
              borderTop: "2px solid #16a34a",
              paddingTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            <img
              src="/assets/gem_logo_-_google_search_-_google_chrome_3_31_2026_2_48_27_pm-019d4332-f026-706c-b8df-aeee641c5cb6.png"
              alt="Government e-Marketplace"
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
            <div
              style={{ width: "1px", height: "40px", background: "#bbf7d0" }}
            />
            <img
              src="/assets/generated/swachh-bharat-clean-transparent.png"
              alt="Swachh Bharat Abhiyan"
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
