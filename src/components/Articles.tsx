import { ArrowRight } from 'lucide-react';

export default function Articles() {
  const articles = [
    {
      title: "5 Key Steps to Trademark Your Brand in India",
      summary: "Learn the essential steps to protect your brand identity through trademark registration, including documentation requirements and legal processes.",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Understanding GST: A Guide for Small Businesses",
      summary: "Navigate the complexities of GST registration and filing with this comprehensive guide designed specifically for small business owners.",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Private Limited vs. LLP: Which is Right for Your Startup?",
      summary: "Compare the benefits and requirements of Private Limited Company and Limited Liability Partnership structures for your new business venture.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Digital Signature Certificate: Everything You Need to Know",
      summary: "Discover how Digital Signature Certificates can streamline your business operations and ensure secure digital transactions.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Latest Insights from Our Legal Experts</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Stay informed with expert advice, industry updates, and practical guides
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-200 group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{article.summary}</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group text-sm">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
