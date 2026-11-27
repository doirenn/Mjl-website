import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const contactSeo = {
  title: 'Contact Michelle J. Lamont | Spiritual Life Coach & Manifestation Mentor',
  description:
    'Email info@michellejlamont.com about mentorship, speaking, press, the podcast, or the Academy.',
  ogImage: images.michellePortrait2023.src,
  ogAlt: 'Michelle J. Lamont',
};

export const contactAnnouncement: Announcement = {
  badge: 'Alignment Desk',
  emphasis: 'Direct Inquiries & Bookings:',
  text: 'Connect with Michelle J. Lamont & Lamont Media',
  links: [
    { href: '#audit', label: 'Book Manifestation Audit', tone: 'underline' },
    { href: '#placeholder', label: 'Placeholder: academy trial', tone: 'gold' },
  ],
};

export const contactCtas = [
  {
    href: 'mailto:info@michellejlamont.com',
    label: 'Email the desk',
    className: 'hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100/80 text-brand-deepPurple',
  },
  {
    href: '#message',
    label: 'Placeholder: message',
    className: 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white',
  },
];

export const contactFooter: FooterContent = {
  blurb: 'The alignment desk for mentorship, speaking, press, and Academy support. Email from the sample: info@michellejlamont.com.',
  exploreTitle: 'Contact',
  explore: [
    { href: '#message', label: 'Send a message' },
    { href: '#audit', label: 'Manifestation audit' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/press', label: 'Press' },
    { href: '/sacred-containers', label: '1:1 Containers' },
  ],
  disclaimer: 'Messages on this page are not delivered yet. Use the email address only after it is confirmed.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
};

export const contactHero = {
  kicker: 'Direct Alignment Desk',
  title: "Let's Get in Touch!",
  body: "Follow Michelle on Instagram at @michellejlamont or email the team at info@michellejlamont.com. If you're reaching out regarding an article, pitch, speaking invitation, or writing-related project, please connect below.",
  email: 'info@michellejlamont.com',
  instagram: '@michellejlamont (DM Desk)',
  response: 'Response Time: Under 24 Business Hours',
  image: images.sunsetBeach,
};

export const messageForm = {
  title: 'Send a Direct Message',
  intro: "Complete the form below to reach Michelle's alignment desk, management, and editorial team.",
  note: 'Placeholder form. It does not email anyone and it does not show a success message.',
  subjects: [
    '1:1 Mentorship & Sacred Containers',
    'The Portal / The Immersion VIP Experience',
    'Article Pitch or Writing Collaboration',
    'Keynote Speaking & Conference Booking',
    'Manifesting Miracles™ Podcast Guest / Press',
    'Manifesting Miracles Academy Support',
    'General Question / Other',
  ],
  consent: 'I consent to having Lamont Media Worldwide store my submitted information so they can respond to my inquiry.',
  button: 'Placeholder: message (not connected)',
};

export const departments = [
  { title: '1:1 Mentorship & VIP Containers', body: 'For The Portal, The Immersion, and 90-day acceleration.', href: '/sacred-containers', label: 'Explore 1:1 Containers' },
  { title: 'Speaking & Event Booking', body: 'Keynotes, retreats, summits & live frequency workshops.', href: '/speaking', label: 'View Speaker Media Kit' },
  { title: 'Press, Media & Podcasts', body: 'Television appearances, show guest spots & writing pitches.', href: '/press', label: 'Access Media Room' },
];

export const hours = {
  body: 'Our team operates Monday through Friday, 9:00 AM – 5:00 PM CST. All confidential client applications, audit requests, and booking inquiries receive review within 24 business hours.',
  place: 'Dallas / Fort Worth, Texas (DFW)',
  travel: 'Global In-Person Fly-In Available',
};

export const meet = {
  image: images.michellePortrait2023,
  embedLabel: 'Story video embed. No video is connected. The sample used a placeholder YouTube video.',
  sampleTime: 'The sample player showed 02:18 / 05:40. That was not a real video.',
  eyebrow: 'Origin & Sacred Purpose',
  title: 'Meet Michelle',
  role: 'Your Spiritual Coach & Manifestation Mentor',
  paragraphs: [
    'As a leading manifestation guru and master mindset coach, I help purpose-driven women break through limiting beliefs and achieve their abundant life. My journey — from surviving trauma and an orphanage upbringing to becoming an award-winning spiritual life coach and podcast host — proves that radical transformation is always possible.',
    "I've been featured in interviews with icons like Oprah Winfrey and Kim Kardashian, and my podcast Manifesting Miracles™ debuted in the Top 100 Spirituality charts, reaching over 700,000 global downloads.",
    'Today, I guide clients through one-on-one coaching, clarity calls, workshops, and courses designed to align energy, elevate beliefs, and manifest miracles with purpose and power.',
  ],
};

export const audit = {
  title: 'Book a Free Manifestation Audit',
  body: 'Whether you need a private 1-on-1 session to understand the obstacles within your life or you have a corporate event that requires a speaker to address mindfulness in the workplace, I am happy to accommodate the path you take.',
  note: 'First consultations are free so we can begin understanding each other. The sample calendar is not live.',
  slots: 'Sample label only: October 2026, Central Time, Oct 22 at 10:00 AM, 11:30 AM, 02:00 PM, and 04:15 PM CST.',
  button: 'Placeholder: audit appointment (not connected)',
};

export const contactFaqs = [
  { q: "How quickly does Michelle's team respond to new inquiries?", a: 'All correspondence submitted via the contact form or direct email (info@michellejlamont.com) receives an executive response within 24 business hours, Monday through Friday.' },
  { q: 'Can I pitch myself or a client as a guest for the Manifesting Miracles™ Podcast?', a: 'Yes! Please select "Podcast Guest Pitch or Media Interview" in the form dropdown and provide a brief bio, links to previous interviews, and the specific spiritual or mindset angle you would like to explore.' },
  { q: 'Are 1:1 sessions conducted virtually or in person?', a: "General 1:1 mentorship sessions take place over private Zoom HD broadcast. VIP intensive experiences (The Portal and The Immersion) are hosted privately at Michelle's secluded Dallas/Fort Worth sanctuary or as destination fly-ins." },
];
