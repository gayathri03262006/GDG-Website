export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  event: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: '/galleryImages/IMG_1398.JPG',
    alt: 'DevFest 2024 Opening',
    event: 'DevFest 2024'
  },
  {
    id: '2',
    url: '/galleryImages/IMG_1474.JPG',
    alt: 'Workshop Session',
    event: 'AI/ML Workshop'
  },
  {
    id: '3',
    url: '/galleryImages/IMG_1479.JPG',
    alt: 'Team Collaboration',
    event: 'Hackathon 2024'
  },
  {
    id: '4',
    url: '/galleryImages/IMG_1486.JPG',
    alt: 'Panel Discussion',
    event: 'Tech Talk Series'
  },
  {
    id: '5',
    url: '/galleryImages/IMG_5490.JPG',
    alt: 'Networking Event',
    event: 'GDG Meetup'
  },
  {
    id: '6',
    url: '/galleryImages/IMG_5530.JPG',
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