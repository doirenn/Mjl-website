export interface SiteImage {
  src: string;
  alt: string;
  sourceUrl: string;
  note: string;
}

export const images = {
  sunsetBeach: {
    src: '/images/sunset-beach.jpg',
    alt: 'Serene sunset beach for manifestation',
    sourceUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80',
    note: 'Stock photo from the HTML sample. Not a photo of Michelle.',
  },
  clientAvatar1: {
    src: '/images/client-avatar-1.jpg',
    alt: 'Client 1',
    sourceUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
    note: 'Stock face from the HTML sample. Not a verified client.',
  },
  clientAvatar2: {
    src: '/images/client-avatar-2.jpg',
    alt: 'Client 2',
    sourceUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    note: 'Stock face from the HTML sample. Not a verified client.',
  },
  clientAvatar3: {
    src: '/images/client-avatar-3.jpg',
    alt: 'Client 3',
    sourceUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces',
    note: 'Stock face from the HTML sample. Not a verified client.',
  },
  michelleHeadshot: {
    src: '/images/michelle-headshot-square.png',
    alt: 'Michelle J. Lamont',
    sourceUrl:
      'https://www.michellejlamont.com/wp-content/uploads/2022/07/mjl-web-photos-square2-1.png',
    note: 'Real photo from the live site about page. Replaces the sample stock portrait labeled as Michelle.',
  },
  michellePortrait2023: {
    src: '/images/michelle-portrait-2023.jpg',
    alt: 'Michelle J. Lamont',
    sourceUrl:
      'https://www.michellejlamont.com/wp-content/uploads/2023/09/MJL-Shoot-1-Final-02883-copia-low.jpg',
    note: 'Real photo from the live homepage. Replaces the sample stock photo labeled as Michelle.',
  },
  michellePortrait2022: {
    src: '/images/michelle-portrait-2022.jpg',
    alt: 'Michelle J. Lamont',
    sourceUrl: 'https://www.michellejlamont.com/wp-content/uploads/2022/08/Michelle-J-Lamont-00503.jpg',
    note: 'Real photo from the live about page. Kept for later pages.',
  },
  testimonialSarah: {
    src: '/images/testimonial-sarah.jpg',
    alt: 'Sarah J.',
    sourceUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    note: 'Stock face from the HTML sample. Not a verified client.',
  },
  testimonialMarcus: {
    src: '/images/testimonial-marcus.jpg',
    alt: 'Marcus T.',
    sourceUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=faces',
    note: 'Stock face from the HTML sample. Not a verified client.',
  },
  testimonialElena: {
    src: '/images/testimonial-elena.jpg',
    alt: 'Elena R.',
    sourceUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces',
    note: 'Stock face from the HTML sample. Not a verified client.',
  },
} satisfies Record<string, SiteImage>;
