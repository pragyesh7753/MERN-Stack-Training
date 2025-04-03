import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollAnimation>
            <div>
              <h3 className="text-xl font-bold mb-4">Gusto</h3>
              <p className="text-gray-400">
                Experience the authentic taste of Italy in the heart of New York.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors duration-200">Menu</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Gusto. All rights reserved.</p>
            <h1>This project is created by Pragyesh Kumar Seth</h1>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;