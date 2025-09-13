import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/gdg_vbit",
    },
  ];

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/logo.png" alt="GDG VBIT"/>
              </div>
              <span className="text-xl font-bold">
                Google Developers Group VBIT
              </span>
            </div>
            <p className=" mb-4 max-w-md text-center md:text-left">
              Empowering students and professionals to learn, connect, and grow
              in the world of technology through Google's developer ecosystem.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="h-4 w-4" />
              <span>
                Vignana Bharathi Institute of Technology, Hyderabad
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className=" hover:font-bold transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center space-x-2 mb-4 ">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:gdg@vbit.ac.in"
                className="hover:font-bold transition-colors duration-200"
              >
                gdgvbit@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="hover:font-bold transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Google Developers Group VBIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
