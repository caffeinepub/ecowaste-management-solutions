import { Mail, MapPin, Phone, Printer } from "lucide-react";

export default function VisitingCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <style>{`
        @media print {
          @page { size: 54mm 90mm portrait; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .card-outer { box-shadow: none !important; border-radius: 0 !important; }
        }
      `}</style>

      {/* No-print header bar */}
      <div className="no-print bg-green-700 text-white py-3 px-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Back to Website
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      {/* Card preview area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div
          className="card-outer shadow-2xl rounded-lg overflow-hidden"
          style={{ width: "54mm", height: "90mm" }}
        >
          <div
            className="relative flex flex-col items-center justify-between px-3 py-3"
            style={{
              background:
                "linear-gradient(160deg, #1b5e20 0%, #2e7d32 55%, #388e3c 100%)",
              width: "54mm",
              height: "90mm",
              boxSizing: "border-box",
            }}
          >
            {/* Top: GEM logo + Company logo + name */}
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="flex items-center gap-1.5 justify-center w-full">
                {/* GEM logo */}
                <img
                  src="/assets/gem_logo_-_google_search_-_google_chrome_3_31_2026_2_48_27_pm-019d4332-f026-706c-b8df-aeee641c5cb6.png"
                  alt="Government e-Marketplace"
                  className="object-contain bg-white rounded flex-shrink-0"
                  style={{ height: "20px", width: "auto", padding: "1px" }}
                />
                {/* Company logo circle */}
                <img
                  src="/assets/ecowaste-logo.png"
                  alt="Ecowaste Management Solutions"
                  className="object-contain bg-white rounded-full flex-shrink-0"
                  style={{ height: "36px", width: "36px", padding: "2px" }}
                />
              </div>
              {/* Company name + tagline */}
              <div className="flex flex-col items-center text-center">
                <span
                  className="text-white font-bold leading-tight"
                  style={{ fontSize: "9.5px", letterSpacing: "0.03em" }}
                >
                  Ecowaste Management Solutions
                </span>
                <span
                  className="text-green-300 italic mt-0.5"
                  style={{ fontSize: "7px" }}
                >
                  One Partnership. Zero Waste Worries.
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-green-400/40" />

            {/* Founder name + designation */}
            <div className="w-full text-center">
              <div
                className="text-white font-bold"
                style={{ fontSize: "13px", letterSpacing: "0.02em" }}
              >
                Varun Raj Gupta
              </div>
              <div
                className="text-green-300 font-medium uppercase tracking-widest mt-0.5"
                style={{ fontSize: "7px" }}
              >
                Founder
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-green-400/40" />

            {/* Contact details */}
            <div className="w-full flex flex-col gap-1">
              <div
                className="flex items-center gap-1 text-white/90"
                style={{ fontSize: "8px" }}
              >
                <Phone
                  className="text-green-300 flex-shrink-0"
                  style={{ width: "8px", height: "8px" }}
                />
                <span>+91 8800095472</span>
              </div>
              <div
                className="flex items-center gap-1 text-white/90"
                style={{ fontSize: "8px" }}
              >
                <Mail
                  className="text-green-300 flex-shrink-0"
                  style={{ width: "8px", height: "8px" }}
                />
                <span>ewmsolutions1@gmail.com</span>
              </div>
              <div
                className="flex items-start gap-1 text-white/90"
                style={{ fontSize: "7.5px" }}
              >
                <MapPin
                  className="text-green-300 flex-shrink-0 mt-px"
                  style={{ width: "8px", height: "8px" }}
                />
                <span>
                  K-303/B, Street No. 4, Mahipalpur Ext., New Delhi 110037
                </span>
              </div>
            </div>

            {/* Bottom: Swachh Bharat logo aligned right */}
            <div className="w-full flex justify-end">
              <img
                src="/assets/generated/swachh-bharat-clean-transparent.png"
                alt="Swachh Bharat Abhiyan"
                className="object-contain"
                style={{ height: "24px", width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="no-print text-center pb-6 text-sm text-gray-500">
        Card size: 54mm x 90mm (portrait). Click "Print / Save as PDF" to save.
      </div>
    </div>
  );
}
