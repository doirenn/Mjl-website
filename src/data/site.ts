export interface NavLink {
  href: string;
  label: string;
  detail?: string;
}

export interface AnnouncementLink {
  href: string;
  label: string;
  tone?: 'underline' | 'gold';
}

export interface Announcement {
  badge: string;
  emphasis: string;
  text: string;
  icon?: string;
  links: AnnouncementLink[];
}

export const brand = {
  name: 'Michelle J. Lamont',
  mark: 'Manifesting Miracles™',
};

export const mainNav = {
  academy: { href: '/academy', label: 'MMA Academy' },
  podcast: { href: '/podcast', label: 'Podcast' },
  coaching: [
    { href: '/sacred-containers', label: 'Sacred Containers', detail: '1:1 Mentorship' },
    { href: '/the-immersion', label: 'The Immersion', detail: 'Private VIP Day' },
    { href: '/the-portal', label: 'The Portal', detail: 'VIP Experience' },
  ] satisfies NavLink[],
  stories: { href: '/success-stories', label: 'Success Stories' },
  quiz: { href: '/#quiz', label: 'Energy Quiz' },
  resources: [
    { href: '/press', label: 'Media & Press' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About Michelle' },
  ] satisfies NavLink[],
  contact: { href: '/contact', label: 'Contact' },
};

export const socialPlaceholders = [
  { id: 'instagram', label: 'Placeholder: Instagram', icon: 'fa-brands fa-instagram' },
  { id: 'facebook', label: 'Placeholder: Facebook', icon: 'fa-brands fa-facebook-f' },
  { id: 'youtube', label: 'Placeholder: YouTube', icon: 'fa-brands fa-youtube' },
  { id: 'spotify', label: 'Placeholder: Spotify', icon: 'fa-brands fa-spotify' },
];

export const defaultAnnouncement: Announcement = {
  badge: 'New Release',
  emphasis: 'Episode 312:',
  text: 'Aligning Your Quantum Frequency for Miracles is live!',
  links: [
    { href: '/#podcast', label: 'Listen Now', tone: 'underline' },
    { href: '/#academy', label: 'Join The Academy →', tone: 'gold' },
  ],
};

export const defaultHeaderCtas = [
  {
    href: '/#lead-magnet',
    label: 'Free Audio Guide',
    className:
      'hidden 2xl:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-deepPurple text-white hover:bg-brand-amethyst shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5',
  },
  {
    href: '/#coaching',
    label: 'Book Michelle',
    className:
      'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5',
  },
];

export const footer = {
  blurb:
    'Helping visionaries, spiritual seekers, and high-performers master vibrational alignment, dissolve subconscious limits, and co-create an extraordinary life.',
  explore: [
    { href: '/#about', label: 'About Michelle' },
    { href: '/#academy', label: 'The Manifesting Academy' },
    { href: '/#podcast', label: 'Podcast & Episodes' },
    { href: '/#coaching', label: 'Private 1:1 Mentorship' },
    { href: '/#quiz', label: 'Energy Block Quiz' },
  ],
  disclaimer:
    'Michelle J. Lamont provides spiritual mentorship, mindset coaching, and educational content. Content and sessions are not meant to substitute for professional clinical medical or psychological advice.',
  copyright:
    '© 2026 Michelle J. Lamont. All Rights Reserved. Manifesting Miracles™ is a registered trademark.',
  signoff: 'Designed with intention and conscious frequency.',
};
