import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import HeroSection from "../components/HeroSection";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "gdgvbit@gmail.com",
      link: "mailto:gdgvbit@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Vignana Bharathi Institute of Technology",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us for collaborations, queries, or to join our amazing community."
        backgroundImage="/about_us_hero.svg"
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        {item.link !== "#" ? (
                          <a
                            href={item.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.info}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Find Us
              </h2>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Vignana Bharathi Institute of Technology
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                    Near HPCL, Ghatkesar, Aushapur, Hyderabad, Telangana 501301
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Vignana+Bharathi+Institute+of+Technology+(VBIT)+%7C+Top+Engineering+Colleges+In+Telangana/@17.4705148,78.7188686,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb76ea23dfa8d5:0x72d3ea7f454e19ea!8m2!3d17.4705097!4d78.7214435!16s%2Fg%2F11bz0zx3ct?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
