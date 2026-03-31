import { ArrowLeft, Printer } from "lucide-react";

const GEM_LOGO =
  "/assets/gem_logo_-_google_search_-_google_chrome_3_31_2026_2_48_27_pm-019d4332-f026-706c-b8df-aeee641c5cb6.png";
const SWACHH_LOGO = "/assets/generated/swachh-bharat-clean-transparent.png";
const ECO_LOGO = "/assets/ecowaste-logo.png";

const ADDONS = [
  "Composting setup (for societies and campuses)",
  "Monthly AMC (Annual Maintenance Contracts)",
  "Waste analytics report",
  "Recycling coordination",
  "Awareness programs (schools and colleges)",
];

const pageStyle: React.CSSProperties = {
  width: "210mm",
  minHeight: "297mm",
  background: "#fff",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  pageBreakAfter: "always",
  breakAfter: "page",
};

const lastPageStyle: React.CSSProperties = {
  ...pageStyle,
  pageBreakAfter: "avoid",
  breakAfter: "avoid",
};

function BrochureHeader({ orgType }: { orgType: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "2px solid #15803d",
        paddingBottom: "12px",
        marginBottom: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={ECO_LOGO}
          alt="Ecowaste"
          style={{ height: "52px", width: "auto", objectFit: "contain" }}
        />
        <div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 900,
              color: "#14532d",
              lineHeight: 1.2,
            }}
          >
            ECOWASTE MANAGEMENT SOLUTIONS
          </div>
          <div style={{ fontSize: "11px", color: "#16a34a", fontWeight: 600 }}>
            One Partnership. Zero Waste Worries.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {orgType} Brochure
          </div>
          <div style={{ fontSize: "10px", color: "#9ca3af" }}>
            ewmsolutions1@gmail.com
          </div>
        </div>
        <img
          src={SWACHH_LOGO}
          alt="Swachh Bharat"
          style={{ height: "44px", width: "auto", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

function BrochureFooter() {
  return (
    <div
      style={{
        marginTop: "auto",
        borderTop: "2px solid #15803d",
        paddingTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontSize: "11px", fontWeight: 700, color: "#14532d" }}>
        EcoWaste Management Solutions -- Building a Cleaner India
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "10px", color: "#9ca3af" }}>
          ewmsolutions1@gmail.com
        </span>
        <img
          src={GEM_LOGO}
          alt="GEM"
          style={{ height: "26px", width: "auto", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

function ContactBlock() {
  return (
    <div
      style={{
        background: "#15803d",
        color: "#fff",
        borderRadius: "8px",
        padding: "14px 18px",
        marginTop: "12px",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>
        Contact Us
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          fontSize: "11px",
        }}
      >
        <div>
          <div style={{ fontWeight: 600, marginBottom: "3px" }}>
            Phone Numbers
          </div>
          <div>8800096570</div>
          <div>8800095472</div>
          <div>8800009572</div>
          <div>Tel No. 011 4993 1479</div>
        </div>
        <div>
          <div style={{ fontWeight: 600, marginBottom: "3px" }}>
            Email &amp; WhatsApp
          </div>
          <div>ewmsolutions1@gmail.com</div>
          <div>WhatsApp: +91 8800095472</div>
          <div style={{ marginTop: "6px", opacity: 0.8, fontSize: "10px" }}>
            We will respond within 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}

function AddOnsBlock() {
  return (
    <div style={{ marginTop: "12px" }}>
      <div
        style={{
          fontWeight: 700,
          fontSize: "13px",
          color: "#14532d",
          marginBottom: "6px",
        }}
      >
        Add-On Services
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4px 12px",
        }}
      >
        {ADDONS.map((a) => (
          <div
            key={a}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "6px",
              fontSize: "11px",
              color: "#374151",
            }}
          >
            <span
              style={{
                marginTop: "4px",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#16a34a",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBox({
  value,
  label,
  color,
}: { value: string; label: string; color: string }) {
  return (
    <div
      style={{
        background: `${color}22`,
        border: `1px solid ${color}55`,
        borderRadius: "8px",
        padding: "14px",
        flex: 1,
      }}
    >
      <div style={{ fontSize: "28px", fontWeight: 900, color }}>{value}</div>
      <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px" }}>
        {label}
      </div>
    </div>
  );
}

function TwoColList({
  title,
  items,
  dot,
}: { title: string; items: string[]; dot: string }) {
  return (
    <div>
      <div
        style={{
          fontWeight: 700,
          fontSize: "12px",
          color: "#14532d",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "6px",
              fontSize: "11px",
              color: "#374151",
            }}
          >
            <span
              style={{
                marginTop: "4px",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: dot,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function PackageBox({
  title,
  price,
  desc,
  items,
  note,
}: {
  title: string;
  price: string;
  desc?: string;
  items: string[];
  note?: string;
}) {
  return (
    <div
      style={{
        background: "#f0fdf4",
        border: "1px solid #bbf7d0",
        borderRadius: "8px",
        padding: "12px 14px",
        marginBottom: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "4px",
        }}
      >
        <span style={{ fontWeight: 800, color: "#14532d", fontSize: "13px" }}>
          {title}
        </span>
        <span
          style={{
            background: "#15803d",
            color: "#fff",
            fontSize: "10px",
            fontWeight: 700,
            padding: "2px 10px",
            borderRadius: "999px",
          }}
        >
          {price}
        </span>
      </div>
      {desc && (
        <div
          style={{ fontSize: "10px", color: "#6b7280", marginBottom: "6px" }}
        >
          {desc}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        {items.map((f) => (
          <div
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "6px",
              fontSize: "11px",
              color: "#374151",
            }}
          >
            <span
              style={{
                marginTop: "4px",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#16a34a",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            {f}
          </div>
        ))}
      </div>
      {note && (
        <div
          style={{
            fontSize: "10px",
            color: "#15803d",
            fontWeight: 700,
            marginTop: "6px",
          }}
        >
          {note}
        </div>
      )}
    </div>
  );
}

function QuoteBar({ text, bg }: { text: string; bg: string }) {
  return (
    <div
      style={{
        background: bg,
        color: "#fff",
        borderRadius: "8px",
        padding: "10px 16px",
        textAlign: "center",
        margin: "10px 0",
      }}
    >
      <p
        style={{
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "12px",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "14px",
        fontWeight: 800,
        color: "#14532d",
        borderLeft: "4px solid #16a34a",
        paddingLeft: "8px",
        marginBottom: "8px",
        marginTop: "10px",
      }}
    >
      {children}
    </div>
  );
}

function IntroText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "11px",
        color: "#374151",
        lineHeight: 1.6,
        marginBottom: "10px",
      }}
    >
      {children}
    </p>
  );
}

// ---- Cover Page ----
function CoverPage() {
  return (
    <div style={pageStyle}>
      <div
        style={{
          background:
            "linear-gradient(160deg, #14532d 0%, #166534 50%, #15803d 100%)",
          padding: "48px 40px 36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <img
          src={ECO_LOGO}
          alt="Ecowaste"
          style={{
            height: "150px",
            width: "auto",
            objectFit: "contain",
            marginBottom: "22px",
          }}
        />
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 900,
            letterSpacing: "0.04em",
            textAlign: "center",
            color: "#fff",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          ECOWASTE MANAGEMENT SOLUTIONS
        </h1>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: "#bbf7d0",
            textAlign: "center",
            marginBottom: "0",
            letterSpacing: "0.02em",
          }}
        >
          One Partnership. Zero Waste Worries.
        </p>
      </div>

      <div
        style={{
          background: "#f0fdf4",
          flex: 1,
          padding: "40px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#14532d",
              marginBottom: "10px",
              lineHeight: 1.3,
            }}
          >
            Building a Cleaner, Greener India
          </h2>
          <p
            style={{
              fontSize: "12px",
              color: "#4b7c5b",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            We will provide end-to-end waste management solutions for
            institutions across India -- from product supply to complete system
            setup.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "36px",
          }}
        >
          {[
            {
              title: "Eco-Friendly Products",
              desc: "Colour-coded bins, wheeled wastebins, and foot-operated containers built for long-term use.",
            },
            {
              title: "Complete Waste Systems",
              desc: "We will design, supply, and implement waste management systems tailored to your institution.",
            },
            {
              title: "Sustainable Partnerships",
              desc: "Long-term partnerships ensuring compliance, cleanliness, and zero waste stress for your organisation.",
            },
          ].map((p) => (
            <div
              key={p.title}
              style={{
                flex: 1,
                background: "#fff",
                border: "1px solid #bbf7d0",
                borderRadius: "12px",
                padding: "18px 14px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#14532d",
                  marginBottom: "6px",
                }}
              >
                {p.title}
              </div>
              <div
                style={{ fontSize: "10px", color: "#4b7c5b", lineHeight: 1.5 }}
              >
                {p.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "2px solid #16a34a",
            paddingTop: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          <img
            src={GEM_LOGO}
            alt="GEM"
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
          />
          <div
            style={{ width: "1px", height: "36px", background: "#bbf7d0" }}
          />
          <img
            src={SWACHH_LOGO}
            alt="Swachh Bharat"
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

// ---- Schools ----
function SchoolsPage() {
  return (
    <div style={pageStyle}>
      <div
        style={{
          padding: "16px 20px 12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BrochureHeader orgType="Schools" />
        <IntroText>
          Ecowaste Management Solutions will provide comprehensive, eco-friendly
          waste management products and cleaning services to institutions across
          India. We will build complete waste management systems -- not just
          supply products.
        </IntroText>
        <SectionTitle>Key Statistics</SectionTitle>
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
          <StatBox
            value="62M"
            label="tonnes of solid waste generated in India annually"
            color="#16a34a"
          />
          <StatBox
            value="250M+"
            label="students affected by poor waste habits in schools nationwide"
            color="#ea580c"
          />
        </div>
        <SectionTitle>Challenges &amp; Solutions</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <TwoColList
            title="Waste Challenges in Schools"
            items={[
              "No proper waste segregation system",
              "Overflowing and unhygienic dustbins",
              "Unhygienic premises affecting student health",
              "No staff training or awareness programs",
            ]}
            dot="#f87171"
          />
          <TwoColList
            title="What We Will Provide"
            items={[
              "Colour-coded bins for classrooms and premises",
              "Dry and wet segregation setup",
              "Initial setup guidance and staff orientation",
              "One-time professional installation",
            ]}
            dot="#16a34a"
          />
        </div>
        <SectionTitle>Recommended Package</SectionTitle>
        <PackageBox
          title="Basic Package"
          price="Rs. 25,000 - 75,000"
          desc="Ideal for small schools, clinics, and small offices."
          items={[
            "Colour-coded waste bins (basic setup)",
            "Basic dry and wet segregation system",
            "Initial setup guidance",
            "One-time installation",
          ]}
          note="Standard Package (Rs. 75,000 - 2,50,000) also available for larger schools."
        />
        <AddOnsBlock />
        <QuoteBar
          text='"A clean school builds clean habits for life."'
          bg="#15803d"
        />
        <ContactBlock />
        <BrochureFooter />
      </div>
    </div>
  );
}

// ---- Universities ----
function UniversitiesPage() {
  return (
    <div style={pageStyle}>
      <div
        style={{
          padding: "16px 20px 12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BrochureHeader orgType="Universities & Colleges" />
        <IntroText>
          Ecowaste Management Solutions will provide comprehensive, eco-friendly
          waste management products and cleaning services to institutions across
          India. We will design complete campus waste systems from the ground
          up.
        </IntroText>
        <SectionTitle>Key Statistics</SectionTitle>
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
          <StatBox
            value="5-10T"
            label="tonnes of waste per large university per day"
            color="#2563eb"
          />
          <StatBox
            value="&lt;20%"
            label="of Indian institutions have formal waste management"
            color="#ea580c"
          />
        </div>
        <SectionTitle>Challenges &amp; Solutions</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <TwoColList
            title="Waste Challenges in Universities"
            items={[
              "High footfall creating large waste volumes",
              "Canteen waste with no proper disposal",
              "No floor-wise collection system",
              "No compliance awareness or reporting",
            ]}
            dot="#f87171"
          />
          <TwoColList
            title="What We Will Provide"
            items={[
              "Complete bin setup (Euroline + standard)",
              "Trolleys and waste collection systems",
              "Floor-wise planning and coordination",
              "Staff guidance and training",
              "Waste storage area setup",
            ]}
            dot="#16a34a"
          />
        </div>
        <SectionTitle>Recommended Packages</SectionTitle>
        <PackageBox
          title="Standard Package"
          price="Rs. 75,000 - 2,50,000"
          items={[
            "Complete bin setup",
            "Trolleys and waste collection",
            "Floor-wise planning",
            "Staff training",
            "Storage setup",
          ]}
        />
        <PackageBox
          title="Premium Package"
          price="Rs. 2,50,000 - 10,00,000+"
          items={[
            "Everything in Standard",
            "For large campuses",
            "Waste audits",
            "Compliance reporting",
          ]}
        />
        <AddOnsBlock />
        <QuoteBar
          text='"We will transform your campus into a zero-waste model institution."'
          bg="#15803d"
        />
        <ContactBlock />
        <BrochureFooter />
      </div>
    </div>
  );
}

// ---- Hospitals ----
function HospitalsPage() {
  return (
    <div style={pageStyle}>
      <div
        style={{
          padding: "16px 20px 12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BrochureHeader orgType="Hospitals" />
        <IntroText>
          Ecowaste Management Solutions will provide complete bio-medical waste
          management compliance, advanced product supply, and staff training for
          hospitals and healthcare facilities across India.
        </IntroText>
        <SectionTitle>Key Statistics</SectionTitle>
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
          <StatBox
            value="500g"
            label="hazardous waste per hospital bed per day"
            color="#dc2626"
          />
          <StatBox
            value="1.5M+"
            label="infections from improper bio-medical waste disposal in India"
            color="#ea580c"
          />
        </div>
        <SectionTitle>Challenges &amp; Solutions</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <TwoColList
            title="Waste Challenges in Hospitals"
            items={[
              "Bio-medical waste compliance (BMWM Rules 2016)",
              "Colour-coded bag requirements",
              "Staff safety and infection risk",
              "Authorized disposal coordination",
            ]}
            dot="#f87171"
          />
          <TwoColList
            title="What We Will Provide"
            items={[
              "Complete waste management system",
              "Advanced bins, wheeled bins, and carts",
              "Segregation per compliance standards",
              "Staff training and awareness",
              "Monthly inspection and maintenance",
              "Waste audit and reporting",
              "Disposal coordination with authorized vendors",
            ]}
            dot="#16a34a"
          />
        </div>
        <SectionTitle>Recommended Package</SectionTitle>
        <PackageBox
          title="Premium Package"
          price="Rs. 2,50,000 - 10,00,000+"
          desc="Full bio-medical waste compliance setup for hospitals."
          items={[
            "Complete waste management system",
            "Advanced bins and wheeled containers",
            "Segregation per BMWM compliance",
            "Staff training",
            "Monthly inspection",
            "Waste audit and reporting",
            "Authorized disposal coordination",
          ]}
        />
        <AddOnsBlock />
        <QuoteBar
          text='"Full bio-medical waste compliance. Zero compromise on patient safety."'
          bg="#dc2626"
        />
        <ContactBlock />
        <BrochureFooter />
      </div>
    </div>
  );
}

// ---- Societies ----
function SocietiesPage() {
  return (
    <div style={pageStyle}>
      <div
        style={{
          padding: "16px 20px 12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BrochureHeader orgType="Societies & Residential" />
        <IntroText>
          Ecowaste Management Solutions will provide comprehensive waste
          management solutions for housing societies and residential complexes,
          covering all common areas and organic waste composting.
        </IntroText>
        <SectionTitle>Key Statistics</SectionTitle>
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
          <StatBox
            value="1L T"
            label="urban household waste generated daily in India"
            color="#ca8a04"
          />
          <StatBox
            value="43%"
            label="only this much urban waste is collected properly"
            color="#ea580c"
          />
        </div>
        <SectionTitle>Challenges &amp; Solutions</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <TwoColList
            title="Waste Challenges in Societies"
            items={[
              "Mixed waste with no segregation",
              "No composting for organic waste",
              "Poor common area hygiene",
              "Low resident participation",
            ]}
            dot="#f87171"
          />
          <TwoColList
            title="What We Will Provide"
            items={[
              "Colour-coded bins for all common areas",
              "Composting setup for organic waste",
              "Floor-wise collection planning",
              "Resident guidance and awareness",
              "Waste storage area setup",
            ]}
            dot="#16a34a"
          />
        </div>
        <SectionTitle>Recommended Packages</SectionTitle>
        <PackageBox
          title="Basic Package"
          price="Rs. 25,000 - 75,000"
          items={[
            "Colour-coded bins for common areas",
            "Basic segregation setup",
            "Initial guidance",
            "One-time installation",
          ]}
          note="For smaller housing societies."
        />
        <PackageBox
          title="Standard Package"
          price="Rs. 75,000 - 2,50,000"
          items={[
            "Comprehensive bin setup",
            "Composting system",
            "Floor-wise planning",
            "Staff training",
          ]}
          note="For larger complexes needing a comprehensive setup."
        />
        <AddOnsBlock />
        <QuoteBar
          text='"A clean society starts with the right system. We will build it for you."'
          bg="#92400e"
        />
        <ContactBlock />
        <BrochureFooter />
      </div>
    </div>
  );
}

// ---- Offices ----
function OfficesPage() {
  return (
    <div style={lastPageStyle}>
      <div
        style={{
          padding: "16px 20px 12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BrochureHeader orgType="Offices & Commercial" />
        <IntroText>
          Ecowaste Management Solutions will provide scalable, smart waste
          management for offices and commercial buildings -- from SMEs to large
          corporate campuses.
        </IntroText>
        <SectionTitle>Key Statistics</SectionTitle>
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
          <StatBox
            value="30%"
            label="of urban solid waste comes from commercial buildings"
            color="#7c3aed"
          />
          <StatBox
            value="40%"
            label="reduction in waste disposal costs with proper system"
            color="#16a34a"
          />
        </div>
        <SectionTitle>Challenges &amp; Solutions</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <TwoColList
            title="Waste Challenges in Offices"
            items={[
              "High paper and plastic waste with no segregation",
              "No floor-wise or department collection",
              "Lack of employee awareness",
              "Compliance gaps and no waste audit",
            ]}
            dot="#f87171"
          />
          <TwoColList
            title="What We Will Provide"
            items={[
              "Complete bin setup for all floors",
              "Floor-wise collection planning",
              "Staff guidance and awareness training",
              "Waste storage area setup",
              "Scalable system as business grows",
            ]}
            dot="#16a34a"
          />
        </div>
        <SectionTitle>Recommended Packages</SectionTitle>
        <PackageBox
          title="Standard Package"
          price="Rs. 75,000 - 2,50,000"
          items={[
            "Complete bin setup",
            "Floor-wise planning",
            "Staff training",
            "Storage setup",
          ]}
          note="For small to mid-size offices."
        />
        <PackageBox
          title="Premium Package"
          price="Rs. 2,50,000 - 10,00,000+"
          items={[
            "Everything in Standard",
            "Compliance audits",
            "Waste analytics reports",
            "Scalable for large commercial buildings",
          ]}
          note="For large commercial buildings with compliance requirements."
        />
        <AddOnsBlock />
        <QuoteBar
          text='"Smart offices choose smart waste management."'
          bg="#7c3aed"
        />
        <ContactBlock />
        <BrochureFooter />
      </div>
    </div>
  );
}

export default function BrochuresFull() {
  return (
    <div style={{ background: "#e5e7eb", minHeight: "100vh" }}>
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .brochure-wrapper { background: #fff !important; padding: 0 !important; }
        }
      `}</style>

      {/* Top bar - no print */}
      <div
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#14532d",
          color: "#fff",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#fff",
            textDecoration: "none",
          }}
          data-ocid="brochures.link"
        >
          <ArrowLeft style={{ width: "15px", height: "15px" }} />
          Back to Website
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 700,
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            padding: "6px 16px",
            borderRadius: "999px",
            cursor: "pointer",
          }}
          data-ocid="brochures.primary_button"
        >
          <Printer style={{ width: "15px", height: "15px" }} />
          Print / Save as PDF
        </button>
      </div>

      {/* All pages */}
      <div
        className="brochure-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          padding: "32px 16px",
        }}
      >
        <CoverPage />
        <SchoolsPage />
        <UniversitiesPage />
        <HospitalsPage />
        <SocietiesPage />
        <OfficesPage />
      </div>
    </div>
  );
}
