import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import EventModal from '../components/EventModal';
import { events, Event } from '../data/eventsData';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const upcomingEvents = events.filter(event => event.type === 'upcoming');
  const pastEvents = events.filter(event => event.type === 'past');

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const EventCard: React.FC<{ event: Event; index: number }> = ({ event, index }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer max-w-md mx-auto md:max-w-2xl"
    onClick={() => handleEventClick(event)}
  >
    {/* Event Image */}
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-56 md:h-64 object-cover"
    />

    {/* Event Content */}
    <div className="p-6 flex flex-col">
      
      {/* Date & Time */}
      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <div className="flex items-center mb-1 md:mb-0">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="font-body">{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span className="font-body">{event.time}</span>
        </div>
      </div>

      {/* Event Title */}
      <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-3">
        {event.title}
      </h3>

      {/* Short Description */}
      <p className="font-body text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 text-sm md:text-base">
        {event.description}
      </p>

      {/* Venue & CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3 md:mb-0">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="font-body text-sm md:text-base">{event.venue}</span>
        </div>

        {event.type === 'upcoming' && event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent font-medium text-sm md:text-base px-4 py-2 bg-google-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            Register
          </a>
        )}
      </div>

      {/* Speakers */}
      {event.speakers && event.speakers.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm md:text-base">
            <Users className="w-4 h-4 mr-1" />
            <span className="font-body">
              {event.speakers.length} Speaker{event.speakers.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      )}

    </div>
  </motion.div>
);

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Events"
        subtitle="Join our exciting workshops, hackathons, and tech talks to enhance your skills and connect with fellow developers."
                backgroundImage="/event.png"

      />

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="font-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't miss out on these exciting learning opportunities and networking events.
            </p>
          </motion.div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center mb-16">
              <div className="w-10 h-10 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="font-body text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No Upcoming Events
              </h3>
             
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
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
              Past Events
            </h2>
            <p className="font-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Check out the amazing events we've organized and the impact we've made.
            </p>
          </motion.div>

          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center mb-16">
              <div className="w-10 h-10 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="font-body text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Events Coming Soon
              </h3>
             
            </div>
          )}
        </div>
      </section>

      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Events;