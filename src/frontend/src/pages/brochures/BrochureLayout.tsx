import { ArrowLeft, Leaf, Printer } from "lucide-react";

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
          @page { size: A4; margin: 0.8cm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Print controls - hidden when printing */}
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

      {/* Brochure content */}
      <div className="max-w-4xl mx-auto px-8 py-8 print:max-w-none print:w-full print:px-0 print:py-0">
        {/* Brochure Header */}
        <div className="flex items-center justify-between border-b-2 border-green-700 pb-5 mb-6 print:mb-5 print:pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-green-800 leading-tight">
                ECOWASTE MANAGEMENT SOLUTIONS
              </div>
              <div className="text-sm text-green-600 font-medium">
                One Partnership. Zero Waste Worries.
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              {orgType} Brochure
            </div>
            <div className="text-xs text-gray-400">ecowaste.in</div>
          </div>
        </div>

        {children}

        {/* Brochure Footer */}
        <div className="mt-6 print:mt-6 border-t-2 border-green-700 pt-4 print:pt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-green-800">
            EcoWaste Management Solutions -- Building a Cleaner India
          </span>
          <span className="text-xs text-gray-400">ewmsolutions1@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
