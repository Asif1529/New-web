import { Search, FileText, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Choose Your Service",
      description: "Browse our comprehensive range of legal and compliance services to find what you need."
    },
    {
      icon: <FileText className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Submit Your Documents",
      description: "Upload your required documents securely through our encrypted platform."
    },
    {
      icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Get Your Compliance Done",
      description: "Our experts handle everything while you track progress in real-time."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">How It Works</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Simple, secure, and efficient - get your legal work done in three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-cyan-600 rounded-full text-white mb-4 sm:mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-0.5 bg-gray-600 -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
