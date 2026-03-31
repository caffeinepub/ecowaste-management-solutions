import AddOnsBlock from "./AddOnsBlock";
import BrochureLayout from "./BrochureLayout";
import ContactBlock from "./ContactBlock";

export default function BrochureUniversities() {
  return (
    <BrochureLayout orgType="Universities and Colleges">
      <section className="mb-6">
        <p className="text-base text-gray-700 leading-relaxed">
          Ecowaste Management Solutions will provide comprehensive, eco-friendly
          waste management products and cleaning services to institutions across
          India. We will build complete waste management systems -- not just
          supply products.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-green-800 border-l-4 border-green-600 pl-3 mb-3">
          Key Statistics
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <div className="text-4xl font-extrabold text-blue-700">5--10T</div>
            <div className="text-sm text-gray-600">
              tonnes of waste a large university can generate per day
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <div className="text-4xl font-extrabold text-orange-600">
              Less than 20%
            </div>
            <div className="text-sm text-gray-600">
              of Indian institutions have a formal waste management system
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <section>
          <h2 className="text-base font-bold text-green-800 mb-2">
            Waste Challenges on Campus
          </h2>
          <ul className="space-y-2.5">
            {[
              "High footfall generating large volumes of waste",
              "Canteen and cafeteria waste with no proper disposal",
              "No floor-wise or department-wise collection system",
              "Lack of compliance awareness among staff and students",
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
        <section>
          <h2 className="text-base font-bold text-green-800 mb-2">
            What We Will Provide
          </h2>
          <ul className="space-y-2.5">
            {[
              "Complete bin setup (Euroline range + standard bins)",
              "Trolleys and waste collection system",
              "Floor-wise waste collection planning",
              "Staff guidance and basic training",
              "Waste storage area setup",
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

      <section className="mb-5">
        <h2 className="text-xl font-bold text-green-800 border-l-4 border-green-600 pl-3 mb-3">
          Recommended Package
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-blue-800 text-base">
                Standard Package
              </span>
              <span className="bg-blue-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Rs. 75K -- 2.5L
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Complete bin setup",
                "Trolleys and collection",
                "Floor-wise planning",
                "Staff training",
                "Waste storage setup",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-800 text-base">
                Premium Package
              </span>
              <span className="bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                Rs. 2.5L -- 10L+
              </span>
            </div>
            <p className="text-sm text-gray-600">
              For large campuses requiring advanced waste management, audits,
              and compliance reporting.
            </p>
          </div>
        </div>
      </section>

      <AddOnsBlock />

      <div className="my-5 bg-green-700 text-white rounded-lg p-4 text-center">
        <p className="font-semibold text-base italic">
          "We will transform your campus into a zero-waste model institution."
        </p>
      </div>

      <ContactBlock />
    </BrochureLayout>
  );
}
