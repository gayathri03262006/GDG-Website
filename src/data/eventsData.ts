export interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  type: 'upcoming' | 'past';
  speakers?: string[];
  winners?: string[];
  registrationLink?: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'AI/ML Workshop',
    description: 'Learn the fundamentals of Machine Learning and AI with hands-on projects.',
    fullDescription: 'Join us for an intensive workshop on Artificial Intelligence and Machine Learning. This session will cover the fundamentals of ML algorithms, neural networks, and practical implementation using Python and TensorFlow. Participants will work on real-world projects and gain hands-on experience.',
    date: '2025-10-18',
    time: '10:00 AM',
    venue: 'Nalanda Auditorium, VBIT',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'upcoming',
    speakers: ['Dr. Amit Sharma', 'Priya ML Engineer'],
    registrationLink: 'https://forms.google.com'
  },
  {
    id: '2',
    title: 'Build-A Thon 2K25',
    description: 'Master modern web development with React, Node.js, and cloud deployment.',
    fullDescription: 'A comprehensive bootcamp covering modern web development technologies including React.js, Node.js, Express, MongoDB, and cloud deployment strategies. Perfect for beginners and intermediate developers looking to enhance their skills.',
    date: '2022-01-24',
    time: '09:00 AM',
    venue: 'Nalanda Auditorium, VBIT',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'past',
    speakers: ['Rahul JavaScript Expert', 'Sarah React Developer'],
    registrationLink: 'https://forms.google.com'
  },
];