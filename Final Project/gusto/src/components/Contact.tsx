import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visit Us</h2>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollAnimation>
            <div className="text-center p-6 transform transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                123 Italian Street<br />
                New York, NY 10001
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="text-center p-6 transform transition-all duration-300 hover:scale-105">
              <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">
                (555) 123-4567<br />
                info@gusto.com
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="text-center p-6 transform transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">
                Mon-Sat: 11:00 AM - 10:00 PM<br />
                Sun: 12:00 PM - 9:00 PM
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation threshold={0.3}>
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645890124663!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl"
            ></iframe>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;