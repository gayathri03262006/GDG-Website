import React from "react";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import HeroSection from "../components/HeroSection";
import { teamMembers, tenures } from "../data/teamData";
import TeamCard from "../components/TeamCard";

const Team: React.FC = () => {
  const { tenure } = useParams();
  const selectedTenure = tenure || tenures[0];

  const filteredMembers = teamMembers.filter(
    (member) => member.tenure === selectedTenure
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection
        title="Team"
        subtitle="Meet the amazing individuals who make GDG VBIT a thriving community of innovation and learning."
        backgroundImage="/team_hero.svg"
      />

      {/* Page Heading */}
      <section className="py-12 px-4 md:py-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Team {selectedTenure}
            </h2>
          </motion.div>
        </div>
      </section>

{/* Team Members Grid */}
<section className="py-8 px-4 md:py-12">
  <div className="max-w-7xl gap-y-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
    {filteredMembers.length > 0 ? (
      filteredMembers.map((member) => {
        const socialLinks = [
          { url: member.linkedin, icon: "fab fa-linkedin-in" },
          { url: member.github, icon: "fab fa-github" },
        ]
          .filter((link) => !!link.url)
          .map((link) => ({ ...link, url: link.url as string }));

        return (
          <TeamCard
            key={member.id}
            name={member.name}
            jobTitle={member.position}
            image={member.image}
            socialLinks={socialLinks}
          />
        );
      })
    ) : (
      <div className="text-center py-16 col-span-full">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          No Team Members Yet
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-base md:text-lg">
          The team for {selectedTenure} is being formed. Check back soon
          to meet our amazing members!
        </p>
      </div>
    )}
  </div>
</section>


    </div>
  );
};

export default Team;