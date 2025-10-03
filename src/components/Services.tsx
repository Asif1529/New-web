import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const services = Object.entries(servicesData).map(([key, service]) => ({
    ...service,
    key
  }));

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Our Core Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive legal and compliance solutions tailored for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-200 group cursor-pointer"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{service.name}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <Link
                to={`/service/${service.key}`}
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group text-sm sm:text-base"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
