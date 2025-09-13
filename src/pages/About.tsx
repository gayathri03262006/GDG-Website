import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users, Code, Brain, Zap } from "lucide-react";
import HeroSection from "../components/HeroSection";

const About: React.FC = () => {
  const fields = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Full-stack web development using modern frameworks and technologies.",
      color: "bg-blue-500",
    },
    {
      icon: Brain,
      title: "Data Analytics",
      description:
        "Extract insights from data using statistical analysis and visualization.",
      color: "bg-green-500",
    },
    {
      icon: Zap,
      title: "Machine Learning",
      description:
        "Build intelligent systems that learn and make predictions from data.",
      color: "bg-yellow-500",
    },
    {
      icon: Users,
      title: "Generative AI",
      description:
        "Explore cutting-edge AI technologies that create and generate content.",
      color: "bg-red-500",
    },
  ];

  const impactStats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Events Conducted" },
    { number: "100+", label: "Projects Built" },
    { number: "25+", label: "Industry Partners" },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="About Us"
        subtitle="Empowering the next generation of developers through community, learning, and innovation."
        backgroundImage="/about.png"
      />

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-body text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Founded in 2025, GDG VBIT started as a small group of passionate
                students who shared a common vision: to create a thriving tech
                community at Vignana Bharathi Institute of Technology. What began as informal study sessions
                and coding discussions has grown into one of the most active
                student developer communities in the region.
              </p>
              <p className="font-body text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Under the umbrella of GCS VBIT,
                we have organized numerous workshops, hackathons, and tech
                talks, fostering innovation and collaboration among students
                from diverse academic backgrounds.
              </p>
              <p className="font-body text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Today, we continue to bridge the gap between academic learning
                and industry requirements, preparing students for successful
                careers in technology while building lasting friendships and
                professional networks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                  Our Vision
                </h3>
              </div>
              <p className="font-body text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading student developer community that bridges the
                gap between academic learning and industry innovation, fostering
                the next generation of technology leaders who will shape the
                future of digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h3>
              </div>
              <p className="font-body text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower students through hands-on learning experiences,
                mentorship, and collaborative projects that develop technical
                skills, leadership qualities, and professional networks
                essential for success in the technology industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fields We Work On */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Fields We Work On
            </h2>
            <p className="font-heading text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We focus on cutting-edge technologies and emerging trends that are
              shaping the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fields.map((field, index) => {
              const IconComponent = field.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`w-16 h-16 ${field.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {field.title}
                  </h3>
                  <p className="font-body text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {field.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Impact
            </h2>
            <p className="font-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Numbers that showcase our growing community and the difference
              we're making.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="font-body text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
