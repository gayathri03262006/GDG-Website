import React from "react";
import "./TeamCard.css";

interface SocialLink {
  url: string;
  icon: string;
}

interface TeamCardProps {
  name: string;
  jobTitle: string;
  image: string;
  socialLinks: SocialLink[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  jobTitle,
  image,
  socialLinks,
}) => {
  return (
    <div className="card-wrapper w-80 h-[350px] relative">
      <div className="card border  absolute top-1/2 left-1/2 w-[350px] h-[350px] transform -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500">
        {/* Card Image */}
        <div className="card-image absolute top-0 left-0 w-full h-full z-20 bg-black dark:bg-white/20 transition-all duration-500">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Social Icons */}
        <ul className="social-icons absolute top-1/2 left-1/2 flex transform -translate-x-1/2 -translate-y-1/2 z-30">
          {socialLinks.map((link, index) => (
            <li key={index} className="list-none">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-12 h-12 text-center leading-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold m-1 transform translate-y-52 opacity-0 transition-all duration-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-gray-800`}
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>

        {/* Details */}
        <div className="details absolute bottom-0 left-0 w-full h-28 bg-white dark:bg-gray-900 z-10 p-4">
          <h2 className="text-center text-lg font-semibold text-gray-900 dark:text-white">
            {name}
            <br />
            <span className="text-sm font-light text-gray-800 dark:text-gray-300">
              {jobTitle}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
