export default function TrustSection() {
  const stats = [
    { number: "10,000+", label: "Businesses Served" },
    { number: "98.5%", label: "Customer Satisfaction" },
    { number: "50+", label: "Legal Experts" },
    { number: "24-Hour", label: "Support" }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-cyan-900 to-cyan-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-cyan-100 text-sm sm:text-base lg:text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
