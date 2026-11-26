import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const aboutSeo = {
  title: 'About Michelle J. Lamont | Intuitive Manifestation Mentor & Speaker',
  description:
    'Michelle J. Lamont helps visionaries, leaders, and empaths dissolve subconscious scarcity, unlock their psychic channel, and remember that miracles are their birthright.',
  ogImage: images.michellePortrait2023.src,
  ogAlt: 'Michelle J. Lamont',
};

export const aboutAnnouncement: Announcement = {
  badge: 'Meet Michelle',
  emphasis: 'Featured Keynote & Spiritual Conduit:',
  text: 'Reclaiming your sovereignty & divine miracles',
  links: [
    { href: '/podcast', label: 'Listen to Episode 312', tone: 'underline' },
    { href: '#booking', label: 'Placeholder: speaking inquiry', tone: 'gold' },
  ],
};

export const aboutCtas = [
  {
    href: '/podcast',
    label: 'Listen Free',
    className:
      'hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100/80 text-brand-deepPurple hover:bg-purple-200 transition-all',
  },
  {
    href: '#booking',
    label: 'Book a Session',
    className:
      'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5',
  },
];

export const aboutFooter: FooterContent = {
  blurb:
    'International speaker, manifestation mentor, and host of the chart-topping Manifesting Miracles podcast. Committed to waking you up to your divine authority.',
  exploreTitle: 'Quick Navigation',
  explore: [
    { href: '/', label: 'Home Page' },
    { href: '/about', label: 'About Michelle' },
    { href: '/podcast', label: 'Podcast & Audio Episodes' },
    { href: '/academy', label: 'Manifesting Academy' },
    { href: '#offerings', label: 'Work With Michelle' },
  ],
  legalTitle: 'Disclaimer & Integrity',
  disclaimer:
    'Michelle J. Lamont offers spiritual guidance, subconscious mindset coaching, and educational content. Services are not intended to replace licensed psychotherapeutic or medical treatment.',
  copyright:
    '© 2026 Michelle J. Lamont. All Rights Reserved. Manifesting Miracles™ is an internationally registered trademark.',
  signoff: 'Designed with conscious intention and alignment.',
  supportLabel: 'Contact Management',
  supportHref: '/contact',
};

export const aboutHero = {
  image: images.michellePortrait2023,
  quote: 'You were never broken.',
  quoteDetail: 'The universe stripped away false contracts so you could step into divine abundance.',
  badgeLabel: 'Spiritual Conduit',
  badgeValue: '20+ Years Mentoring',
  eyebrow: 'Spiritual Life Coach • International Speaker • Manifestation Guide',
  titleLead: 'Hi, I’m',
  titleName: 'Michelle J. Lamont',
  promise:
    'I help visionaries, leaders, and empaths dissolve subconscious scarcity, unlock their psychic channel, and realize miracles are their birthright.',
  body: 'My work is not about surface-level wishful thinking or repetitive affirmations that don\'t land. Born and raised in an orphanage and having survived profound personal tragedies, I discovered the immutable quantum laws of the cosmos through lived adversity. Today, I combine somatic frequency calibration with direct intuitive channeling to help you co-create reality with unwavering certainty.',
  audioTitle: 'Listen: A 60-Second Personal Transmission',
  audioDetail: 'Michelle\'s sacred intention for you today',
  embedLabel: 'Personal audio transmission. No audio file is connected.',
  primary: { href: '#story', label: 'Explore My Journey' },
  secondary: { href: '#booking', label: 'Work With Michelle 1:1' },
};

export const aboutStats = [
  { value: '150K+', label: 'Global Followers' },
  { value: '320+', label: 'Podcast Episodes' },
  { value: '20+', label: 'Years of Mastery' },
  { value: 'Top 1%', label: 'Worldwide Podcast' },
];

export const story = {
  eyebrow: 'The Sacred Crucible',
  title: 'From Orphanage to Unshakeable Alignment',
  intro:
    'True manifestation is not forged in ivory towers; it is born in the fire of radical surrender, forgiveness, and remembering your authentic authority.',
  chapters: [
    {
      image: images.sunsetBeach,
      imageAlt: 'Serene water spiritual reflection',
      chapter: 'Chapter 01',
      caption: 'The Sacred Awakening in Isolation',
      eyebrow: 'Early Origins',
      title: 'When the world gives you nothing to lean on, you discover the divine within.',
      paragraphs: [
        'Growing up in an orphanage, Michelle was intimately acquainted with isolation, abandonment, and survival mode. With no generational wealth or safety nets, she began noticing subtle synchronicities, invisible whispers, and energetic currents that others overlooked.',
        'Instead of becoming hardened by rejection, Michelle turned inward. She realized that while external circumstances felt powerless, her internal vibration was a beacon that the universe responded to with uncanny precision.',
      ],
      quote: 'The trauma of being unchosen taught me the ultimate cosmic secret: no human needs to choose you when you realize God already did.',
      reverse: false,
    },
    {
      image: images.forestLight,
      imageAlt: 'Ocean tide spiritual connection',
      chapter: 'Chapter 02',
      caption: 'Radical Surrender & Receptivity',
      eyebrow: 'The Turning Point',
      title: 'Surrendering at the Water’s Edge: Dismantling the False Self',
      paragraphs: [
        'In her adult years, Michelle achieved outward corporate success, yet the deep-seated subconscious programming of "not enough" continued to attract cyclical burnout, toxic contracts, and heartbreak.',
        'At the ocean, on her knees in utter surrender, she experienced what she calls "The Great Erasure"—the moment where the ego dissolves completely. She released the chronic need to prove, control, and muscle her way through life, choosing instead to become a pure conduit of unconditional faith.',
        'Within months, radical shifts unfolded: financial abundance flowed effortlessly, relationships healed, and the channeled blueprints for what is now the Manifesting Miracles™ movement began pouring in.',
      ],
      quote: '',
      reverse: true,
    },
    {
      image: images.michellePortrait2022,
      imageAlt: 'Michelle J. Lamont',
      chapter: 'Chapter 03',
      caption: 'Guiding a Global Community',
      eyebrow: 'The Mission Today',
      title: 'Bridging Ancient Metaphysics with Pragmatic Somatic Science',
      paragraphs: [
        'Today, Michelle is recognized internationally as a transformative spiritual mentor. Through her chart-topping podcast with over 750,000+ downloads, her private 1:1 VIP mentorship, and the Manifesting Miracles Academy, she has guided tens of thousands of souls out of survival terror and into magnetic certainty.',
        'Her methodology cuts straight through toxic positivity. She equips you with nervous system tools to physically HOLD the wealth, love, and elevation you manifest without self-sabotage.',
      ],
      quote: '',
      link: { href: '/podcast', label: 'Hear Michelle Tell Her Full Story on Episode 310 →' },
      reverse: false,
    },
  ],
};

export const pillars = {
  eyebrow: 'Guiding Philosophy',
  title: 'The 4 Pillars of Quantum Manifestation',
  intro: 'Why traditional Law of Attraction fails for 90% of seekers—and how this somatic blueprint unlocks lasting results.',
  items: [
    { icon: 'fa-solid fa-brain', kicker: 'Pillar 01', title: 'Subconscious Nervous Rewiring', body: 'You do not manifest what you want; you manifest what your autonomic nervous system feels safe receiving. We release stored trauma chemicals so abundance doesn\'t trigger panic.' },
    { icon: 'fa-solid fa-hand-holding-heart', kicker: 'Pillar 02', title: 'Ancestral Contract Dissolution', body: 'Unconscious vows of poverty, martyrdom, and invisibility passed down through generations are identified and ritually dissolved, clearing your energetic channel.' },
    { icon: 'fa-solid fa-wand-magic-sparkles', kicker: 'Pillar 03', title: 'The 333 Alignment Ritual', body: 'A proprietary daily 10-minute frequency calibration combining vocal toning, sensory gratitude, and somatic embodiment to lock your frequency before interaction.' },
    { icon: 'fa-solid fa-infinity', kicker: 'Pillar 04', title: 'Radical Surrender & Certainty', body: 'Dropping timeline anxiety and the desperate "need to know HOW". Moving from frantic grasping into royal receptivity, allowing the universe to surprise and delight you.' },
  ],
};

export const offerings = {
  eyebrow: 'Ways to Work Together',
  title: 'What I Offer',
  intro: 'Whether you are taking your first conscious steps or looking for high-touch bespoke energetic coaching, choose your evolutionary portal.',
  cards: [
    {
      featured: false,
      icon: 'fa-solid fa-graduation-cap',
      eyebrow: 'Flagship Curriculum',
      title: 'Manifesting Miracles Academy',
      body: '8 foundational modules breaking down the exact mechanics of frequency alignment, self-hypnosis, and subconscious clearing. Lifetime access with interactive workbooks.',
      points: ['On-demand video library', 'Printable somatic worksheets', 'Monthly group Q&A calls'],
      cta: 'Learn About Academy',
      href: '/academy',
      program: '',
    },
    {
      featured: true,
      ribbon: 'Signature High-Touch',
      icon: 'fa-solid fa-gem',
      eyebrow: 'Application Only',
      title: 'VIP 1:1 Private Mentorship',
      body: 'Bespoke energetic architecture designed for high-performers, executives, and leaders. Weekly private Zoom deep dives and direct daily Voxer audio access with Michelle.',
      points: ['60-min weekly private sessions', 'Mon–Fri direct Voxer voice channel', 'Tailored frequency audio resets'],
      cta: 'Apply for Private Mentorship',
      href: '',
      program: 'VIP 1:1 Mentorship',
    },
    {
      featured: false,
      icon: 'fa-solid fa-microphone-lines',
      eyebrow: 'In-Person Activations',
      title: 'Keynote Speaking & Retreats',
      body: 'High-voltage corporate keynotes, spiritual conference addresses, and intimate sacred vortex retreats in destinations like Sedona, Bali, and Tulum.',
      points: ['Dynamic keynote presentations', 'In-person vortex breathwork', 'Limited to 15 attendees for retreats'],
      cta: 'Inquire for Events',
      href: '',
      program: 'Speaking & Retreat Inquiries',
    },
  ],
};

export const praise = {
  eyebrow: 'Miracle Proof',
  title: 'What Mentorship Clients Are Saying',
  rating: 'Over 1,200+ Verified 5-Star Breakthroughs',
  items: [
    { initials: 'KM', tone: 'bg-brand-sunsetPeach/20 text-brand-sunsetPeach', title: 'She saw straight through my 10-year block', quote: 'I had read every manifestation book in existence and still felt stuck around money. In our second session, Michelle channeled the exact childhood contract holding me back. Within 3 weeks I landed the biggest contract of my career.', name: 'Karen Miller', detail: 'Fintech VP & VIP Client' },
    { initials: 'DR', tone: 'bg-purple-100 text-brand-amethyst', title: 'Pure divine activation and zero fluff', quote: 'Michelle’s energy is contagious, but more importantly, her somatic tools work. My chronic panic around being judged online vanished. I launched my brand and hit multi-six figures in my first year.', name: 'Daniel Ramirez', detail: 'Creative Agency Founder' },
    { initials: 'AL', tone: 'bg-emerald-100 text-emerald-600', title: 'From chronic anxiety to complete peace', quote: 'Working 1:1 with Michelle felt like a soul recalibration. She doesn\'t let your ego hide behind excuses. She lovingly demanded I step into my crown—and the miraculous followed immediately.', name: 'Amanda Lewis', detail: 'Holistic Wellness Coach' },
  ],
};

export const aboutClose = {
  eyebrow: 'Take The Leap Today',
  title: 'Join The Manifesting Miracles Academy',
  body: 'Step out of the spectator seat and into active divine co-creation. Receive lifetime access to all 8 core video modules, nervous system hypnoses, and live community coaching.',
  cta: { href: '/academy', label: 'Explore Academy Curriculum' },
};

export const aboutBooking = {
  title: 'Connect With Michelle',
  intro: 'This inquiry form is a placeholder. It is not connected, and nothing is sent.',
  programs: [
    'VIP 1:1 Mentorship',
    'Keynote Speaking',
    'Sacred Retreats',
    'Press & Media',
  ],
  button: 'Placeholder: inquiry (not connected)',
};
