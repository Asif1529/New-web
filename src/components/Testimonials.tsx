import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "LegalBolt AI made our GST registration incredibly smooth. Their expert guidance saved us weeks of paperwork and confusion.",
      name: "Priya Sharma",
      company: "Tech Innovations Pvt Ltd"
    },
    {
      quote: "The trademark registration process was seamless. Their team kept us informed at every step and delivered exactly what they promised.",
      name: "Rajesh Kumar",
      company: "Creative Solutions LLP"
    },
    {
      quote: "Outstanding service for company incorporation. Professional, fast, and reliable. Highly recommend for any business setup needs.",
      name: "Anita Desai",
      company: "Green Energy Enterprises"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">What Our Clients Say</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">
            Real experiences from businesses we've helped succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-cyan-500 transition-all duration-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                <div className="text-cyan-400 text-xs sm:text-sm mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
