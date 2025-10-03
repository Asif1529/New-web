import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#partners" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/service/gst-registration" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">GST Registration</Link></li>
              <li><Link to="/service/trademark-registration" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Trademark</Link></li>
              <li><Link to="/service/company-registration" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Company Registration</Link></li>
              <li><Link to="/service/fssai-license" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">FSSAI License</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#refund" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Refund Policy</a></li>
              <li><a href="#disclaimer" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Connect</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300 break-all">hello@legalboltai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">+91 98765 43210</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
                Legal<span className="text-cyan-400">Bolt</span> AI
              </Link>
            </div>
            <div className="text-gray-300 text-center md:text-right">
              <p className="text-sm sm:text-base">&copy; 2025 LegalBolt AI. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-1">Empowering businesses with AI-driven legal solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
