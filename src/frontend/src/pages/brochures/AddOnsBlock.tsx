export default function AddOnsBlock() {
  const addons = [
    "Composting setup (for societies and campuses)",
    "Monthly AMC (Annual Maintenance Contracts)",
    "Waste analytics report",
    "Recycling coordination",
    "Awareness programs (schools and colleges)",
  ];
  return (
    <div className="mt-5">
      <h3 className="font-bold text-lg text-green-800 mb-2">Add-On Services</h3>
      <ul className="grid grid-cols-2 gap-2">
        {addons.map((a) => (
          <li
            key={a}
            className="flex items-start gap-2 text-base text-gray-700"
          >
            <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}
