import AddOnsBlock from "./AddOnsBlock";
import BrochureLayout from "./BrochureLayout";
import ContactBlock from "./ContactBlock";

export default function BrochureHospitals() {
  return (
    <BrochureLayout orgType="Hospitals">
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <div className="text-4xl font-extrabold text-red-700">500g</div>
            <div className="text-sm text-gray-600">
              hazardous waste generated per hospital bed per day
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <div className="text-4xl font-extrabold text-orange-600">1.5M+</div>
            <div className="text-sm text-gray-600">
              infections caused annually by improper bio-medical waste disposal
              in India
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <section>
          <h2 className="text-base font-bold text-green-800 mb-2">
            Waste Challenges in Hospitals
          </h2>
          <ul className="space-y-2.5">
            {[
              "Bio-medical waste compliance (BMWM Rules 2016)",
              "Colour-coded bag requirements for waste categories",
              "Staff safety and infection risk management",
              "Authorized disposal coordination needed",
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
              "Complete waste management system setup",
              "Advanced bins, wheeled bins, and carts",
              "Segregation as per compliance standards",
              "Staff training program",
              "Monthly inspection and maintenance support",
              "Waste audit and reporting",
              "Disposal coordination with authorized vendors",
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
        <div className="bg-green-50 border border-green-200 rounded-lg p-7">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-green-800 text-lg">
              Premium Package
            </span>
            <span className="bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Rs. 2,50,000 -- 10,00,000+
            </span>
          </div>
          <p className="text-base text-gray-600 mb-3">
            Designed for hospitals, large universities, societies, and
            commercial buildings.
          </p>
          <ul className="space-y-2.5">
            {[
              "Complete waste management system setup",
              "Advanced bins, wheeled bins, and carts",
              "Segregation as per compliance standards",
              "Staff training program",
              "Monthly inspection and maintenance support",
              "Waste audit and reporting",
              "Disposal coordination (authorized vendors)",
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
        </div>
      </section>

      <AddOnsBlock />

      <div className="my-5 bg-red-700 text-white rounded-lg p-4 text-center">
        <p className="font-semibold text-base italic">
          "Full bio-medical waste compliance. Zero compromise on patient
          safety."
        </p>
      </div>

      <ContactBlock />
    </BrochureLayout>
  );
}
