import { Search } from 'lucide-react';

export default function Hero() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get('search');
    console.log('Search query:', searchQuery);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Your All-In-One Platform for
          <span className="text-cyan-400 block mt-2">Legal & Compliance Needs</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          From GST Registration to Trademarking your brand, LegalBolt AI simplifies every legal step with technology.
        </p>

        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                name="search"
                placeholder="Search for a service (e.g., 'GST Filing')"
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <button type="submit" className="px-6 py-3 sm:py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors whitespace-nowrap text-sm sm:text-base font-medium">
              Find Service
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
