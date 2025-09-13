import React from "react";
import { Link } from "react-router-dom";
import { color, motion } from "framer-motion";
import {
  Calendar,
  Users,
  Code,
  ArrowRight,
  Lightbulb,
  icons,
} from "lucide-react";
import CountdownTimer from "../components/CountdownTimer";
import { events } from "../data/eventsData"; // <-- Import events data

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Technical Workshops",
      description:
        "Hands-on sessions covering the latest technologies and frameworks.",
      color: "#EA4335",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "Connect with like-minded developers and build lasting relationships.",
      color: "#34A853",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Foster creativity and innovation through hackathons and projects.",
      color: "#4285F4",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description:
        "Consistent learning opportunities through our event calendar.",
      color: "#FBBC05",
    },
  ];

  // 🔹 Find nearest upcoming event
  const upcomingEvents = events
    .filter((event) => event.type === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nearestEvent = upcomingEvents[0]; // Pick the soonest event

  return (
    <div>
      {/* Hero Section */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 w-full bg-[url('/homepagephone.png')] sm:bg-[url('/homepage.png')] md:bg-[url('/homepage.png')] bg-cover bg-center flex items-center"
        style={{
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="max-w-7xl mt-10 mb-96 md:mt-0 md:mb-0 mx-auto w-full flex flex-col md:flex-row items-center px-6 md:px-12">
          <div className="text-left md:mb-0">
            <h1 className="font-heading text-[#132465] dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight pr-3 ">
              Empowering Developers, Inspiring Innovation
            </h1>
            <p className="font-body text-[#132465] dark:text-white text-base text-lg md:text-lg lg:text-xl mb-6 leading-relaxed max-w-xs mx-0">
              A vibrant community for tech enthusiasts to learn, share, and
              build the future of technology together.
            </p>
          </div>
        </div>
      </section>

      {/* GDG Description Section */}
      <section className="py-16 px-4 dark:bg-gray-900">
        <div className="bg-blue max-w-7xl mx-auto space-y-8">
          {/* GDG Overview */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center px-4 md:px-0"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What is Google Developers Group?
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Google Developer Groups (GDGs) are community-driven organizations
              creating local meetups for developers interested in Google
              technologies. From Android to cloud and web, GDGs cover a wide
              range of technical topics.
            </p>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At GDG VBIT, we empower students with the latest technologies
              while fostering innovation, collaboration, and professional growth
              in a supportive community.
            </p>
            <Link
              to="/about"
              className="font-accent dark:text-gray-400 inline-flex items-center px-6 py-3 font-semibold transition-colors duration-200"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          {/* Features Section Container */}
          <div className="py-16">
            {/* Section Title */}
            <h2 className="font-heading text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
              What we do
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => {
                const isEven = index % 2 === 1;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      x: isEven ? 80 : -80,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="relative border-[5px] border-yellow-500 rounded-[25%] sm:rounded-3xl md:rounded-full p-8 shadow-lg "
                    style={{ borderColor: feature.color }}
                  >
                    {/* Two Column Layout inside card */}
                    <div className="grid grid-cols-[70%_30%] gap-8 max-w-7xl mx-auto">
                      {/* Left: Text */}
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {feature.title}
                        </h3>
                        <p className="font-body text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Right: Icon placeholder */}
                      {/* Circle with Icon */}
                      <div className="w-16 h-16 border-4 rounded-full flex items-center justify-center mb-4">
                        {React.createElement(feature.icon, {
                          size: 32,
                          color: feature.color,
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section
        className="relative h-96 w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${nearestEvent?.image || "/events-bg.png"})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Event
          </h2>

          {nearestEvent ? (
            <>
              <p className="font-body text-lg font-semibold mb-2">
                {nearestEvent.title}
              </p>
              <p className="font-body text-sm uppercase tracking-widest mb-6">
                {nearestEvent.date} • {nearestEvent.time} @ {nearestEvent.venue}
              </p>

              {/* Countdown */}
              <div className="font-body mb-6">
                <CountdownTimer targetDate={nearestEvent.date} />
              </div>

              <Link
                to={`/events`}
                className="font-accent px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition duration-200"
              >
                Know More
              </Link>
            </>
          ) : (
            <p className="font-body">No upcoming events at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
