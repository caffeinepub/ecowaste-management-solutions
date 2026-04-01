import { Printer } from "lucide-react";

export default function Letterhead() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .print-wrapper { background: #f3f4f6 !important; padding: 0 !important; margin: 0 !important; display: block !important; }
          .letterhead-page {
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            min-height: unset !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .letterhead-body {
            flex: 1 !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      {/* Toolbar */}
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

      {/* A4 Preview */}
      <div className="print-wrapper flex-1 flex items-start justify-center p-8">
        <div
          className="letterhead-page bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col"
          style={{ width: "210mm", height: "297mm" }}
        >
          {/* HEADER */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <div style={{ height: "6px", background: "#a5d6a7" }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 32px 14px",
              }}
            >
              {/* Logo + name */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <img
                  src="/assets/ecowaste-logo.png"
                  alt="Ecowaste Management Solutions"
                  style={{
                    height: "64px",
                    width: "64px",
                    objectFit: "contain",
                    background: "white",
                    borderRadius: "50%",
                    padding: "4px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "white",
                      fontWeight: "800",
                      fontSize: "20px",
                      letterSpacing: "0.02em",
                      lineHeight: "1.2",
                    }}
                  >
                    Ecowaste Management Solutions
                  </div>
                  <div
                    style={{
                      color: "#a5d6a7",
                      fontSize: "11px",
                      fontStyle: "italic",
                      marginTop: "3px",
                    }}
                  >
                    One Partnership. Zero Waste Worries.
                  </div>
                </div>
              </div>
              {/* Contact */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "4px",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "10.5px",
                  textAlign: "right",
                }}
              >
                <span>+91 8800095472</span>
                <span>Tel No. 011 4993 1479</span>
                <span>ewmsolutions1@gmail.com</span>
                <span
                  style={{
                    color: "#a5d6a7",
                    fontSize: "9.5px",
                    marginTop: "2px",
                  }}
                >
                  K-303/B, Street No. 4, Mahipalpur Ext., New Delhi 110037
                </span>
              </div>
            </div>
            <div style={{ height: "3px", background: "#a5d6a7" }} />
          </div>

          {/* BODY */}
          <div
            className="letterhead-body"
            style={{ flex: 1, padding: "32px 40px", overflow: "hidden" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "24px",
                color: "#9e9e9e",
                fontSize: "11px",
              }}
            >
              <span>Ref. No.: ___________________</span>
              <span>Date: ___________________</span>
            </div>
          </div>

          {/* FOOTER */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ height: "3px", background: "#a5d6a7" }} />
            <div
              style={{
                background:
                  "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)",
                padding: "10px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "9px" }}>
                Ecowaste Management Solutions | K-303/B, Street No. 4,
                Mahipalpur Ext., New Delhi 110037
              </span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "9px" }}>
                +91 8800095472 | ewmsolutions1@gmail.com
              </span>
            </div>
            <div style={{ height: "6px", background: "#a5d6a7" }} />
          </div>
        </div>
      </div>

      <div className="no-print text-center pb-6 text-sm text-gray-500">
        A4 size letterhead. Click "Print / Save as PDF" to save.
      </div>
    </div>
  );
}
