import AddOnsBlock from "./AddOnsBlock";
import BrochureLayout from "./BrochureLayout";
import ContactBlock from "./ContactBlock";

export default function BrochureOffices() {
  return (
    <BrochureLayout orgType="Offices and Commercial">
      <section className="mb-5">
        <p className="text-base text-gray-700 leading-relaxed">
          Ecowaste Management Solutions will provide comprehensive, eco-friendly
          waste management products and cleaning services to institutions across
          India. We will build complete waste management systems -- not just
          supply products.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-xl font-bold text-green-800 border-l-4 border-green-600 pl-3 mb-3">
          Key Statistics
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="text-3xl font-extrabold text-purple-700">30%</div>
            <div className="text-sm text-gray-600">
              of urban solid waste comes from commercial buildings
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-3xl font-extrabold text-green-700">
              Up to 40%
            </div>
            <div className="text-sm text-gray-600">
              reduction in waste disposal costs with a proper waste system in
              place
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-8 mb-5">
        <section>
          <h2 className="text-base font-bold text-green-800 mb-2">
            Waste Challenges in Offices
          </h2>
          <ul className="space-y-2">
            {[
              "High paper and plastic waste with no segregation",
              "No floor-wise or department-wise collection",
              "Lack of employee awareness and participation",
              "Compliance gaps and no waste audit process",
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
          <ul className="space-y-2">
            {[
              "Complete bin setup for all floors and departments",
              "Floor-wise waste collection planning",
              "Staff guidance and awareness training",
              "Waste storage area setup",
              "Scalable system as your business grows",
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

      <section className="mb-4">
        <h2 className="text-xl font-bold text-green-800 border-l-4 border-green-600 pl-3 mb-3">
          Recommended Packages
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
            <p className="text-sm text-gray-600">
              For small to mid-size offices and commercial spaces.
            </p>
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
              For large commercial buildings needing compliance audits and full
              system management.
            </p>
          </div>
        </div>
      </section>

      <AddOnsBlock />

      <div className="my-4 bg-purple-700 text-white rounded-lg p-4 text-center">
        <p className="font-semibold text-base italic">
          "Smart offices choose smart waste management."
        </p>
      </div>

      <ContactBlock />
    </BrochureLayout>
  );
}
