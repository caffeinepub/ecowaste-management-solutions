import AddOnsBlock from "./AddOnsBlock";
import BrochureLayout from "./BrochureLayout";
import ContactBlock from "./ContactBlock";

export default function BrochureSchools() {
  return (
    <BrochureLayout orgType="Schools">
      {/* Company Intro */}
      <section className="mb-5">
        <p className="text-base text-gray-700 leading-relaxed">
          Ecowaste Management Solutions will provide comprehensive, eco-friendly
          waste management products and cleaning services to institutions across
          India. We will build complete waste management systems -- not just
          supply products.
        </p>
      </section>

      {/* Key Stats */}
      <section className="mb-5">
        <h2 className="text-xl font-bold text-green-800 border-l-4 border-green-600 pl-3 mb-3">
          Key Statistics
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-3xl font-extrabold text-green-700">62M</div>
            <div className="text-sm text-gray-600">
              tonnes of solid waste generated in India annually
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="text-3xl font-extrabold text-orange-600">250M+</div>
            <div className="text-sm text-gray-600">
              students affected by poor waste habits in schools nationwide
            </div>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-8 mb-5">
        {/* Challenges */}
        <section>
          <h2 className="text-base font-bold text-green-800 mb-2">
            Waste Challenges in Schools
          </h2>
          <ul className="space-y-2">
            {[
              "No proper waste segregation system",
              "Overflowing and unhygienic dustbins",
              "Unhygienic premises affecting student health",
              "No staff training or awareness programs",
            ].map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-base text-gray-700"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* What We Will Provide */}
        <section>
          <h2 className="text-base font-bold text-green-800 mb-2">
            What We Will Provide
          </h2>
          <ul className="space-y-2">
            {[
              "Colour-coded bins for classrooms and premises",
              "Dry and wet segregation setup",
              "Initial setup guidance and staff orientation",
              "One-time professional installation",
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-base text-gray-700"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Recommended Package */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-green-800 border-l-4 border-green-600 pl-3 mb-3">
          Recommended Package
        </h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-green-800 text-lg">
              Basic Package
            </span>
            <span className="bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Rs. 25,000 -- 75,000
            </span>
          </div>
          <p className="text-base text-gray-600 mb-3">
            Ideal for small schools, clinics, and small offices.
          </p>
          <ul className="space-y-2">
            {[
              "Colour-coded waste bins (basic setup)",
              "Basic dry and wet segregation system",
              "Initial setup guidance",
              "One-time installation",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-base text-gray-700"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <p className="text-sm text-green-700 font-semibold mt-3">
            Standard Package (Rs. 75,000 -- 2,50,000) also available for larger
            schools.
          </p>
        </div>
      </section>

      <AddOnsBlock />

      {/* Key Message */}
      <div className="my-4 bg-green-700 text-white rounded-lg p-4 text-center">
        <p className="font-semibold text-base italic">
          "A clean school builds clean habits for life."
        </p>
      </div>

      <ContactBlock />
    </BrochureLayout>
  );
}
