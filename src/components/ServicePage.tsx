import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/" className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
              Legal<span className="text-cyan-400">Bolt</span> AI
            </Link>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <Link to="/" className="flex items-center text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                <Home className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-cyan-600 rounded-full text-white mb-4 sm:mb-6">
              {service.icon}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              {service.name}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
              {service.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm sm:text-base font-medium">Get Started</button>
            <button className="px-6 py-3 text-gray-300 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm sm:text-base font-medium">Contact Expert</button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">{service.article.title}</h1>
            <div
              className="text-sm sm:text-base text-gray-300 leading-relaxed [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-6 [&>p]:mb-4"
              dangerouslySetInnerHTML={{ __html: service.article.content }}
            />
          </article>

          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-sm sm:text-base text-cyan-100 mb-4 sm:mb-6">
              Let our experts handle your {service.name.toLowerCase()} requirements with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-cyan-900 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                Start Application
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-cyan-900 transition-colors font-medium text-sm sm:text-base">
                Speak with Expert
              </button>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Object.entries(servicesData)
                .filter(([key]) => key !== serviceId)
                .slice(0, 3)
                .map(([key, relatedService]) => (
                  <Link
                    key={key}
                    to={`/service/${key}`}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-5 sm:p-6 hover:border-cyan-500 transition-all duration-200 group"
                  >
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {relatedService.name}
                    </h3>
                    <p className="text-sm text-gray-300">{relatedService.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
              Legal<span className="text-cyan-400">Bolt</span> AI
            </Link>
            <p className="text-sm sm:text-base text-gray-300 mt-2">&copy; 2025 LegalBolt AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
