import { ArrowLeft, Printer } from "lucide-react";

interface BrochureLayoutProps {
  children: React.ReactNode;
  orgType: string;
}

export default function BrochureLayout({
  children,
  orgType,
}: BrochureLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @media print {
          @page { size: A4; margin: 0.5cm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print bg-primary text-primary-foreground py-3 px-4 flex items-center justify-between">
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

      <div className="max-w-4xl mx-auto px-10 py-10 print:max-w-none print:w-full print:px-0 print:py-0">
        {/* Brochure Header */}
        <div className="flex items-center justify-between border-b-2 border-green-700 pb-5 mb-6 print:mb-5 print:pb-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/ecowaste-logo.png"
              alt="Ecowaste Management Solutions"
              className="h-14 w-auto object-contain"
            />
            <div>
              <div className="text-xl font-bold text-green-800 leading-tight">
                ECOWASTE MANAGEMENT SOLUTIONS
              </div>
              <div className="text-sm text-green-600 font-medium">
                One Partnership. Zero Waste Worries.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {orgType} Brochure
              </div>
              <div className="text-xs text-gray-400">
                ewmsolutions1@gmail.com
              </div>
            </div>
            <img
              src="/assets/generated/swachh-bharat-clean-transparent.png"
              alt="Swachh Bharat Abhiyan"
              className="h-12 w-auto object-contain flex-shrink-0"
            />
          </div>
        </div>

        {children}

        {/* Brochure Footer */}
        <div className="mt-6 print:mt-6 border-t-2 border-green-700 pt-4 print:pt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-green-800">
            EcoWaste Management Solutions -- Building a Cleaner India
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">
              ewmsolutions1@gmail.com
            </span>
            <img
              src="/assets/gem_logo_-_google_search_-_google_chrome_3_31_2026_2_48_27_pm-019d4332-f026-706c-b8df-aeee641c5cb6.png"
              alt="Government e-Marketplace"
              className="h-7 w-auto object-contain flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
