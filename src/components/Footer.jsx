import React from 'react';
import { Facebook, Instagram, Youtube, Send, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: 'https://www.facebook.com/share/15iTntD1xU/?mibextid=LQQJ4d',
      className: 'hover:text-blue-600'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={24} />,
      url: 'https://www.youtube.com/@palliativecareclinicppm',
      className: 'hover:text-red-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/palliativeppm?igsh=bTZibDY2OTk3MGFt',
      className: 'hover:text-pink-600'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      url: 'https://chat.whatsapp.com/K8uyMEiEIMp7l3PcZxPOnP',
      className: 'hover:text-green-600'
    }
  ];

 const googleMapsUrl = "https://maps.google.com/?q=11.247225,76.302209";

  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-teal-900">Palliative Care Clinic</h2>
              <p className="text-sm text-teal-600">Pookkottumpadam</p>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-teal-700 hover:text-teal-900 transition duration-300 group"
              >
                <MapPin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm underline-offset-2 hover:underline">
                  Pookkottumpadam, Kerala, India
                </span>
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-900">Connect With Us</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 transition duration-150 ease-in-out ${social.className}`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-teal-700">Join our community and stay updated with our latest initiatives</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-teal-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-teal-700">
                © {new Date().getFullYear()} Palliative Care Clinic, Pookkottumpadam. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-sm text-teal-600 hover:text-teal-800">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-sm text-teal-600 hover:text-teal-800">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
