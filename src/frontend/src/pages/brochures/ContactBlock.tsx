export default function ContactBlock() {
  return (
    <div className="bg-green-700 text-white rounded-lg p-6 mt-4">
      <h3 className="font-bold text-lg mb-3">Contact Us</h3>
      <div className="grid grid-cols-2 gap-4 text-base">
        <div>
          <p className="font-medium mb-1">Phone Numbers</p>
          <p>8800096570</p>
          <p>8800095472</p>
          <p>8800009572</p>
          <p>Tel No. 011 4993 1479</p>
        </div>
        <div>
          <p className="font-medium mb-1">Email &amp; WhatsApp</p>
          <p>ewmsolutions1@gmail.com</p>
          <p>WhatsApp: +91 8800095472</p>
          <p className="mt-2 text-sm opacity-80">
            We will respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
