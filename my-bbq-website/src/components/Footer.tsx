import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Flame size={32} className="text-primary mr-2" />
              <h3 className="text-2xl font-display">Boios BBQ</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Bringing the authentic BBQ experience to your special events. 
              Our passion is serving you the most delicious grilled foods with 
              a touch of Brazilian and American traditions.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-accent" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-accent" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-accent" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#testimonials" className="text-gray-300 hover:text-accent transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <span>info@bbqmasters.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <span>123 Grill Street, Barbecue City, BC 12345</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                <span>Available: 7 days a week, 9am - 9pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Boios BBQ Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;