import { Mail, MapPin, Phone, Printer } from "lucide-react";

export default function VisitingCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <style>{`
        @media print {
          @page { size: 90mm 55mm landscape; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .card-outer { box-shadow: none !important; border-radius: 0 !important; }
        }
      `}</style>

      {/* Controls */}
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
          className="card-outer w-[90mm] shadow-2xl rounded-lg overflow-hidden"
          style={{ minHeight: "55mm" }}
        >
          {/* Front of card */}
          <div
            className="relative flex flex-col justify-between p-4"
            style={{
              background:
                "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)",
              minHeight: "55mm",
            }}
          >
            {/* Top section: GEM logo + ecowaste logo + company name */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/gem_logo_-_google_search_-_google_chrome_3_31_2026_2_48_27_pm-019d4332-f026-706c-b8df-aeee641c5cb6.png"
                alt="Government e-Marketplace"
                className="h-11 w-auto object-contain bg-white rounded p-0.5 flex-shrink-0"
              />
              <img
                src="/assets/ecowaste-logo.png"
                alt="Ecowaste Management Solutions"
                className="h-12 w-12 object-contain bg-white rounded-full p-1 flex-shrink-0"
              />
              <div>
                <div className="text-white font-bold text-[11px] tracking-widest uppercase leading-tight">
                  Ecowaste Management
                </div>
                <div className="text-green-200 font-semibold text-[10px] tracking-wider uppercase">
                  Solutions
                </div>
                <div className="text-green-300 text-[8px] mt-0.5 italic">
                  One Partnership. Zero Waste Worries.
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-green-400/50 my-2" />

            {/* Middle: Name and designation */}
            <div>
              <div className="text-white font-bold text-[14px] tracking-wide">
                Varun Raj Gupta
              </div>
              <div className="text-green-300 text-[9px] font-medium uppercase tracking-widest">
                Founder
              </div>
            </div>

            {/* Bottom: Contact info */}
            <div className="mt-2 space-y-0.5">
              <div className="flex items-center gap-1.5 text-white/90 text-[8px]">
                <Phone className="w-2.5 h-2.5 text-green-300 flex-shrink-0" />
                <span>+91 8800095472</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/90 text-[8px]">
                <Mail className="w-2.5 h-2.5 text-green-300 flex-shrink-0" />
                <span>ewmsolutions1@gmail.com</span>
              </div>
              <div className="flex items-start gap-1.5 text-white/90 text-[8px]">
                <MapPin className="w-2.5 h-2.5 text-green-300 flex-shrink-0 mt-0.5" />
                <span>
                  K-303/B, Street No. 4, Mahipalpur Ext., New Delhi 110037
                </span>
              </div>
            </div>

            {/* Swachh Bharat logo bottom-right */}
            <div className="absolute bottom-2 right-2">
              <img
                src="/assets/swach-019d4332-f051-77df-bf6f-2c254dfd36a3.png"
                alt="Swachh Bharat Abhiyan"
                className="h-9 w-auto object-contain bg-white rounded p-0.5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="no-print text-center pb-6 text-sm text-gray-500">
        Standard business card size: 90mm x 55mm. Click "Print / Save as PDF" to
        save.
      </div>
    </div>
  );
}
