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
    title: 'Web Development Bootcamp',
    description: 'Master modern web development with React, Node.js, and cloud deployment.',
    fullDescription: 'A comprehensive bootcamp covering modern web development technologies including React.js, Node.js, Express, MongoDB, and cloud deployment strategies. Perfect for beginners and intermediate developers looking to enhance their skills.',
    date: '2025-03-10',
    time: '09:00 AM',
    venue: 'Auditorium, VBIT',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'past',
    speakers: ['Rahul JavaScript Expert', 'Sarah React Developer'],
    registrationLink: 'https://forms.google.com'
  },
  {
    id: '3',
    title: 'DevFest 2024',
    description: 'Annual developer festival with talks, workshops, and networking.',
    fullDescription: 'Our biggest annual event featuring inspiring talks from industry experts, hands-on workshops, and networking opportunities. DevFest brings together developers from all backgrounds to share knowledge and build connections.',
    date: '2024-11-15',
    time: '09:00 AM',
    venue: 'Convention Center, VBIT',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'past',
    speakers: ['Tech Industry Leaders', 'Open Source Contributors'],
    winners: ['Team Alpha - Best Innovation', 'Team Beta - Best Design', 'Team Gamma - Best Implementation']
  }
];