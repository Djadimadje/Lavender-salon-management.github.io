'use client';

import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: FiMail,
      title: 'Email Us',
      content: 'info@lavendersalon.com',
      link: 'mailto:info@lavendersalon.com',
      description: 'Send us an email anytime',
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      content: '+250 788 123 456',
      link: 'tel:+250788123456',
      description: 'Mon-Sat, 9:00 AM - 7:00 PM',
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      content: 'KN 5 Ave, Kigali, Rwanda',
      link: 'https://maps.google.com',
      description: 'Come visit our beautiful salon',
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <a
                key={index}
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-[#f5ebe0] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8b5e3c] to-[#6b4a2f] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-[#8b5e3c] font-semibold mb-2">
                    {detail.content}
                  </p>
                  <p className="text-sm text-gray-600">
                    {detail.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Media Section */}
        <div className="bg-gradient-to-r from-[#8b5e3c] to-[#6b4a2f] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Follow Us on Social Media
          </h3>
          <p className="text-gray-200 mb-6">
            Stay updated with our latest styles, promotions, and beauty tips
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#8b5e3c] hover:bg-[#c9a961] hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
