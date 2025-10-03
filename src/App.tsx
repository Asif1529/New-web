import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  FileText, 
  Shield, 
  Building, 
  Award, 
  Truck, 
  Copyright, 
  Calculator, 
  Star,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! This is a demo - in production, this would connect to Firebase.');
  };

  // Header Component
  const Header = () => (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Legal<span className="text-cyan-400">Bolt</span> AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Sign Up</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">About Us</a>
              <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Blog</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Contact</a>
              <div className="flex space-x-4 px-3 pt-4">
                <button className="btn-secondary flex-1">Login</button>
                <button className="btn-primary flex-1">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Hero Component
  const Hero = () => (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Your All-In-One Platform for
          <span className="text-cyan-400 block">Legal & Compliance Needs</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          From GST Registration to Trademarking your brand, LegalBolt AI simplifies every legal step with technology.
        </p>
        
        {/* Search Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a service (e.g., 'GST Filing', 'Company Registration')"
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Find Service
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // Services Component
  const Services = () => {
    const services = [
      {
        icon: <Calculator className="w-8 h-8" />,
        name: "GST Registration",
        description: "Get your GST registration completed quickly and efficiently with expert guidance."
      },
      {
        icon: <Shield className="w-8 h-8" />,
        name: "Trademark Registration",
        description: "Protect your brand identity with comprehensive trademark registration services."
      },
      {
        icon: <Building className="w-8 h-8" />,
        name: "Company Registration",
        description: "Incorporate your business with Private Limited, LLP, or Partnership registration."
      },
      {
        icon: <Award className="w-8 h-8" />,
        name: "FSSAI License",
        description: "Obtain your food safety license for food business operations in India."
      },
      {
        icon: <Truck className="w-8 h-8" />,
        name: "Import Export Code",
        description: "Get IEC registration for international trade and business expansion."
      },
      {
        icon: <Star className="w-8 h-8" />,
        name: "ISO Certification",
        description: "Achieve ISO certification to enhance your business credibility and standards."
      },
      {
        icon: <Copyright className="w-8 h-8" />,
        name: "Copyright Registration",
        description: "Secure copyright protection for your creative works and intellectual property."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        name: "Income Tax Return",
        description: "Professional ITR filing services for individuals and businesses."
      }
    ];

    return (
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal and compliance solutions tailored for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6 line-height-relaxed">{service.description}</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Trust Section Component
  const TrustSection = () => {
    const stats = [
      { number: "10,000+", label: "Businesses Served" },
      { number: "98.5%", label: "Customer Satisfaction" },
      { number: "50+", label: "Legal Experts" },
      { number: "24-Hour", label: "Support" }
    ];

    return (
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-cyan-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // How It Works Component
  const HowItWorks = () => {
    const steps = [
      {
        icon: <Search className="w-12 h-12" />,
        title: "Choose Your Service",
        description: "Browse our comprehensive range of legal and compliance services to find what you need."
      },
      {
        icon: <FileText className="w-12 h-12" />,
        title: "Submit Your Documents",
        description: "Upload your required documents securely through our encrypted platform."
      },
      {
        icon: <CheckCircle className="w-12 h-12" />,
        title: "Get Your Compliance Done",
        description: "Our experts handle everything while you track progress in real-time."
      }
    ];

    return (
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and efficient - get your legal work done in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-600 rounded-full text-white mb-6">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-600 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Articles Component
  const Articles = () => {
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
      <section id="blog" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Insights from Our Legal Experts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with expert advice, industry updates, and practical guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="card group cursor-pointer">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{article.summary}</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Component
  const Testimonials = () => {
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
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Real experiences from businesses we've helped succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-cyan-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#gst" className="text-gray-300 hover:text-cyan-400 transition-colors">GST Registration</a></li>
              <li><a href="#trademark" className="text-gray-300 hover:text-cyan-400 transition-colors">Trademark</a></li>
              <li><a href="#company" className="text-gray-300 hover:text-cyan-400 transition-colors">Company Registration</a></li>
              <li><a href="#fssai" className="text-gray-300 hover:text-cyan-400 transition-colors">FSSAI License</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#refund" className="text-gray-300 hover:text-cyan-400 transition-colors">Refund Policy</a></li>
              <li><a href="#disclaimer" className="text-gray-300 hover:text-cyan-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">hello@legalboltai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-white">
                Legal<span className="text-cyan-400">Bolt</span> AI
              </h2>
            </div>
            <div className="text-gray-300 text-center md:text-right">
              <p>&copy; 2025 LegalBolt AI. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering businesses with AI-driven legal solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Services />
      <TrustSection />
      <HowItWorks />
      <Articles />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;