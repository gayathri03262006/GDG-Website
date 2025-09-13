export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  event: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'DevFest 2024 Opening',
    event: 'DevFest 2024'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Workshop Session',
    event: 'AI/ML Workshop'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Team Collaboration',
    event: 'Hackathon 2024'
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Panel Discussion',
    event: 'Tech Talk Series'
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Networking Event',
    event: 'GDG Meetup'
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Code Review Session',
    event: 'Code Review Workshop'
  }
];

export const eventGroups = [
  {
    event: 'DevFest 2024',
    images: galleryImages.filter(img => img.event === 'DevFest 2024')
  },
  {
    event: 'AI/ML Workshop',
    images: galleryImages.filter(img => img.event === 'AI/ML Workshop')
  },
  {
    event: 'Hackathon 2024',
    images: galleryImages.filter(img => img.event === 'Hackathon 2024')
  }
];