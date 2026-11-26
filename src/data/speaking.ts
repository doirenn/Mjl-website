import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const speakingSeo = {
  title: 'Speaking Engagements & Keynotes | Michelle J. Lamont',
  description:
    'Keynotes, workshops, and virtual talks with Michelle J. Lamont on manifestation, resilience, and nervous system leadership. The sample lists audiences from 50 to 5,000+.',
  ogImage: '/images/michelle-with-oprah.jpg',
  ogAlt: 'Michelle J. Lamont with Oprah Winfrey',
};

export const speakingAnnouncement: Announcement = {
  badge: 'Now Booking 2026–2027',
  emphasis: 'Transformational Keynotes & Masterclasses:',
  text: 'Empower your audience to manifest impossible realities',
  links: [
    { href: '#topics', label: 'View Signature Topics', tone: 'underline' },
    { href: '#placeholder', label: 'Placeholder: speaker one-sheet PDF', tone: 'gold' },
  ],
};

export const speakingCtas = [
  {
    href: '#book',
    label: 'Placeholder: inquire',
    className: 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white',
  },
];

export const speakingFooter: FooterContent = {
  blurb: 'Keynotes and workshops with Michelle J. Lamont. Booking requests on this page are not sent yet.',
  exploreTitle: 'Speaking',
  explore: [
    { href: '#formats', label: 'Formats' },
    { href: '#topics', label: 'Topics' },
    { href: '#book', label: 'Request a call' },
    { href: '/press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ],
  disclaimer: 'Speaking claims on this page come from the HTML sample and still need confirmation.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
};

export const speakingHero = {
  kicker: 'International Keynote Speaker • Somatic Frequency Leader • Media Conduit',
  title: 'Speaking Engagements About the Power of Manifestation',
  quote: 'With the courage to speak up and share your voice in this world, today we can live our dreams as our reality and leave an imprint that inspires generations to come.',
  body: 'Michelle J. Lamont electrifies global stages, corporate retreats, and spiritual conferences. Combining raw vulnerability, quantum metaphysics, and neuro-somatic rewiring, she delivers an unforgettable stage experience that moves audiences from passive dreaming into immediate energetic embodiment.',
  proofs: ['Global Keynotes (US, Europe & LatAm)', 'Audiences from 50 to 5,000+', '100% 5-Star Stage Ratings'],
  image: images.michellePortrait2023,
};

export const formats = [
  { title: 'Keynote Address', body: '45–90 min inspirational mainstage experience designed to shift belief ceilings.' },
  { title: 'Motivational Speeches', body: 'High-voltage narrative storytelling rooted in overcoming severe trauma into abundance.' },
  { title: 'Virtual Keynotes & Summits', body: 'Broadcast-quality digital experiences with interactive chat & energetic activations.' },
  { title: 'Hands-On Workshops', body: "Half-day or full-day somatic immersions rewiring attendees' autonomic nervous systems." },
  { title: 'Live Q&A / AMA Sessions', body: 'Direct intuitive readings and live attendee frequency calibrations from the stage.' },
  { title: 'Panel Discussions', body: 'Sharp, witty, and grounded expert dialogue on mindfulness, wealth, and leadership.' },
  { title: 'Executive Masterclasses', body: 'Private mastermind sessions tailored for CEOs, founders, and high-net-worth teams.' },
  { title: 'Meet & Greets / Signings', body: 'Warm, personalized photo lines, book activations, and sacred connection moments.' },
];

export const topics = [
  {
    kicker: 'Topic 01 • Mainstage Flagship',
    title: 'CREATING YOUR DREAM LIFE: The Beginner’s Guide to Manifestation',
    paragraphs: [
      'Have you ever wondered what the exact universal mechanism is that separates those who dream from those who actually materialize? In this paradigm-shifting address, Michelle removes the confusing commercial buzzwords surrounding the Law of Attraction, giving audiences a practical, step-by-step roadmap to manifest real-world career elevation, financial freedom, and authentic joy.',
      'Attendees learn that the universe does not respond to desperation or surface-level positive affirmations; it responds strictly to somatic frequency. Michelle demonstrates how to align the subconscious mind with the conscious will, ending the exhausting cycle of self-sabotage once and for all.',
    ],
    takeaways: ['The Quantum Mechanics of Intention & Receptivity', 'Dissolving Timeline Anxiety & The Need to Control the "How"', 'Michelle’s Proprietary 333 Daily Frequency Calibration', 'Actionable tools to break free from generational lack contracts'],
  },
  {
    kicker: 'Topic 02 • Resilience & Leadership',
    title: 'FROM SURVIVING TO THRIVING: How to Unblock The Best Version of You',
    paragraphs: [
      'Born in an orphanage and having survived profound personal and professional crises, Michelle speaks from lived crucible experience—not ivory tower theories. In this soul-stirring keynote, she reveals how the trauma of being unchosen and overlooked became the exact energetic training ground for sovereign manifestation.',
      'Audiences discover how to release victim programming, overcome subconscious burnout, and pivot from survival mode into divine authority. This talk is an emotional tour de force that consistently receives standing ovations across diverse corporate and creative audiences.',
    ],
    takeaways: ['Converting Childhood Trauma into Unshakeable Magnetism', 'Dismantling Imposter Syndrome & The Fear of Visibility', 'Nervous System Regulation for High-Performance Leadership', 'Remembering that you are already chosen by the divine'],
  },
  {
    kicker: 'Topic 03 • Mindset & Spiritual Science',
    title: 'HEAL YOUR MIND: Using The Laws of The Universe For Connection',
    paragraphs: [
      'We live in an era of unprecedented digital noise, chronic mental fatigue, and relational alienation. In this immersive presentation, Michelle synthesizes modern neuroscience with ancient spiritual laws to help participants clear subconscious clutter and reopen their intuitive connection to God, the universe, and each other.',
      'Michelle guides the entire room through live somatic breathwork and group frequency tuning, allowing attendees to physically feel peace replace anxiety in real time. Perfect for wellness conferences, executive summits, and spiritual masterminds.',
    ],
    takeaways: ['The Neuroscience of Subconscious Thought Erasure', 'Recognizing Synchronicities, Signs & Angelic Guidance', 'In-Room Somatic Tuning & Collective Breath Alignment', 'Restoring Harmony in Professional & Personal Relationships'],
  },
];

export const celebrity = {
  intro: 'From exclusive red carpet conversations with icons like Oprah Winfrey and Kim Kardashian to premier media stages, Michelle has walked the path of high-visibility manifestation.',
  cards: [
    { src: '/images/michelle-with-oprah.jpg', alt: 'Michelle J. Lamont with Oprah Winfrey', title: 'Michelle Lamont & Oprah Winfrey', body: 'Connecting on purposeful leadership, soul resilience, and sharing divine truth on the biggest stages.', source: 'https://www.michellejlamont.com/wp-content/uploads/2022/04/Michelle-j-lamont-Oprah.jpg' },
    { src: '/images/michelle-with-kim-kardashian.jpg', alt: 'Michelle J. Lamont with Kim Kardashian', title: 'Michelle Lamont & Kim Kardashian', body: 'Celebrating visionary entrepreneurship, magnetic media presence, and unapologetic self-belief.', source: 'https://www.michellejlamont.com/wp-content/uploads/2022/04/Michelle-j-lamont-kim-kardashian.jpg' },
  ],
  logos: ['Apple Podcasts #1', 'Spotify Global', 'iHeartRadio', 'FORBES', 'Conscious Life Expo'],
};

export const reel = {
  title: 'Michelle J. Lamont Live On Stage',
  body: 'See how Michelle engages audiences, conducts live frequency tuning, and commands the room.',
  meta: 'The sample labeled an official sizzle reel of 03:45 in HD 1080p. That embed was a placeholder video and was removed.',
  embedLabel: 'Speaker reel embed. No video is connected.',
  tickets: 'Placeholder: tour dates and tickets',
};

export const production = [
  { title: 'Audio Rider', body: 'Wireless Lavalier or Headset mic. High-grade audio output for somatic sound frequencies.' },
  { title: 'Visual Media', body: '16:9 HD Keynote projection available. Supports both slide-assisted and pure conversational formats.' },
  { title: 'Travel Details', body: 'Departs from United States (Dallas/Fort Worth DFW). Available for international and domestic fly-in.' },
  { title: 'Speaker One-Sheet', body: 'High-res headshots, approved stage bios, topic outlines, and intro script. The PDF download is not connected.' },
];

export const booking = {
  title: "Book a 15-min Free Discovery Call",
  body: "Let's discuss your event theme, audience profile, and dates. Michelle's executive management team will confirm availability and custom keynote options.",
  note: 'Placeholder form. It does not request a date and nothing is sent.',
  sizes: ['Under 100 attendees', '100 – 500 attendees', '500 – 1,500 attendees', '1,500+ Mainstage', 'Virtual Worldwide'],
  response: 'The sample says requests are answered within 24 hours.',
  button: 'Placeholder: speaker discovery call (not connected)',
};
