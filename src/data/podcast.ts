import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const podcastSeo = {
  title: 'Manifesting Miracles™ Podcast | Michelle J. Lamont',
  description:
    'Weekly raw transmissions, neuro-spiritual blueprints, and deep soul alignments with Michelle J. Lamont to release unconscious blocks and magnetize your destiny.',
  ogImage: images.michelleHeadshot.src,
  ogAlt: 'Michelle J. Lamont',
};

export const podcastAnnouncement: Announcement = {
  badge: 'New Episode',
  icon: '🎙️',
  emphasis: 'Ep. 312:',
  text: 'Erased For 40 Years – Reclaiming Your Energetic Channel is Live!',
  links: [
    { href: '#featured', label: 'Watch Video Version', tone: 'underline' },
    { href: '#placeholder', label: 'Placeholder: Apple Podcasts', tone: 'gold' },
  ],
};

export const podcastCtas = [
  {
    href: '#placeholder',
    label: 'Placeholder: RSS',
    className:
      'hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100/80 text-brand-deepPurple hover:bg-purple-200 transition-all',
  },
  {
    href: '#episodes',
    label: 'Browse Archive',
    className:
      'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-300',
  },
];

export const podcastFooter: FooterContent = {
  blurb:
    'The top-ranked spirituality podcast dedicated to aligning your nervous system, expanding your wealth channel, and manifesting the miraculous.',
  exploreTitle: 'Podcast Directory',
  explore: [
    { href: '#episodes', label: 'Latest Episodes' },
    { href: '#featured', label: 'Featured Episode' },
    { href: '#about-host', label: 'About Michelle' },
    { href: '#guest-inquiry', label: 'Submit Guest Pitch' },
    { href: '/', label: 'Michelle Lamont Home' },
  ],
  legalTitle: 'Podcast Disclaimer',
  disclaimer:
    'Episodes of Manifesting Miracles are intended for mindset, spiritual encouragement, and educational purposes. No statements are intended to diagnose or treat health conditions.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
  signoff: 'Designed with conscious vibration & alignment.',
  supportLabel: 'Contact Management',
  supportHref: '/contact',
};

export const platforms = [
  { icon: 'fa-brands fa-apple', iconClass: '', label: 'Placeholder: Apple Podcasts' },
  { icon: 'fa-brands fa-spotify', iconClass: 'text-[#1DB954]', label: 'Placeholder: Spotify' },
  { icon: 'fa-brands fa-youtube', iconClass: 'text-rose-500', label: 'Placeholder: YouTube' },
  { icon: 'fa-solid fa-radio', iconClass: 'text-rose-400', label: 'Placeholder: iHeartRadio' },
];

export const podcastHero = {
  eyebrow: 'Weekly Spiritual Awakening & Manifestation Mastery',
  titleLead: 'Tune Into',
  titleAccent: 'Divine Truth',
  titleTail: '& Quantum Miracles',
  body: 'Hosted by spiritual intuitive & manifestation mentor Michelle J. Lamont, this podcast offers weekly raw transmissions, neuro-spiritual blueprints, and deep soul alignments to release unconscious blocks and magnetize your destiny.',
  stats: [
    { value: '750K+', label: 'Global Downloads' },
    { value: 'Top 1%', label: 'Spiritual Podcasts' },
    { value: '4.9 ★', label: 'Apple Ratings' },
  ],
  cover: images.forestLight,
  portrait: images.michelleHeadshot,
  showKicker: 'Manifesting Miracles™',
  showTitle: 'WITH MICHELLE J. LAMONT',
  showLine: 'Align your quantum vibration with unconditional love, abundance & divine authority.',
  latest: 'Ep. 312: Latest Episode',
  latestMeta: '32 mins • Published Tuesday',
  rank: 'Top 1% Worldwide',
};

export const featured = {
  eyebrow: 'Must-Listen Landmark Episode',
  title: 'What to Expect: How & When Spirit Shows Up',
  intro:
    "A raw, vulnerable conversation unveiling Michelle's personal journey of ego dissolution, intuitive awakening, and why the universe strips away false identities to reveal your power.",
  image: { src: '/images/episode-movement.jpg', alt: 'Deep spiritual conversation video thumbnail' },
  badge: 'Video Podcast',
  length: '44:18 Mins',
  milestone: 'Milestone Special',
  episodeTitle: '"ERASED FOR 40 YEARS": Surrendering to Spirit & Rebuilding in Divine Power',
  embedLabel: 'Video embed. No video is connected.',
  outline: 'Deep Dive Outline',
  headline: 'Why rock bottom is often the catalyst for quantum manifestation.',
  body: "Most people pray for circumstances to change, but spirit doesn't respond to neediness—it responds to somatic frequency. In this landmark episode, Michelle breaks down:",
  points: [
    { title: 'Dissolving Identity Contracts:', text: 'Why who you think you are is keeping you trapped in cyclical lack.' },
    { title: 'Recognizing Spiritual Signposts:', text: 'Distinguishing between ego anxiety vs. authentic intuitive guidance.' },
    { title: 'The 3-Second Alignment Shift:', text: 'Practical somatic tools to recalibrate your nervous system on demand.' },
  ],
  timestamps: ['00:00 - The Illusion of Control', '12:20 - Surviving Ego Erasure', '24:10 - Somatic Calibration', '35:00 - Direct Q&A with Michelle'],
};

export const episodeFilters = [
  { id: 'all', label: 'All Episodes' },
  { id: 'wealth', label: 'Wealth & Abundance' },
  { id: 'spirituality', label: 'Spiritual Awakening' },
  { id: 'love', label: 'Love & Soulmates' },
  { id: 'mindset', label: 'Mindset & Shadow Work' },
];

export const episodes = [
  {
    id: 312,
    title: 'Reclaiming Your Energetic Space & Channeling Miracles in Chaos',
    category: 'spirituality',
    duration: '32 mins',
    date: 'Oct 20, 2026',
    image: images.forestLight.src,
    description: 'Learn how to establish an unshakeable vibrational boundary so external chaos cannot derail your manifestation field.',
    takeaways: [
      'How to seal your aura against collective financial panic.',
      'The difference between reacting from fear vs. creating from authority.',
      "Michelle's 2-minute daily prayer for instant calm.",
    ],
  },
  {
    id: 311,
    title: 'Clearing Subconscious Scarcity to Open Your Wealth Portal',
    category: 'wealth',
    duration: '28 mins',
    date: 'Oct 13, 2026',
    image: images.courseNervousSystem.src,
    description: 'Why thinking rich doesn\'t work until your autonomic nervous system feels safe holding money. Practical release methods.',
    takeaways: [
      'Dissolving ancestral vows of poverty.',
      'Why receiving feels physically uncomfortable to empaths.',
      'A somatic exercise to expand your financial ceiling.',
    ],
  },
  {
    id: 310,
    title: 'Erased For 40 Years: Surrendering to Spirit & Radical Rebirth',
    category: 'spirituality',
    duration: '44 mins',
    date: 'Oct 06, 2026',
    image: '/images/episode-movement.jpg',
    description: "Michelle's most personal interview sharing how rock bottom dissolved false ego constructs, unlocking her channeled gifts.",
    takeaways: [
      'Why the universe strips away attachments before upgrades.',
      'Healing the trauma of orphan identity.',
      'Hearing the voice of direct spiritual guidance.',
    ],
  },
  {
    id: 309,
    title: 'The Energetic Blueprint of Soulmate Alignment',
    category: 'love',
    duration: '35 mins',
    date: 'Sep 29, 2026',
    image: '/images/episode-love.jpg',
    description: 'Stop chasing unavailable partners. Discover how to become an energetic mirror for secure, sacred, soul-deep romance.',
    takeaways: [
      'Ending the anxious-avoidant karmic loop.',
      'The 3 energetic standards you must embody before love arrives.',
      'Manifesting partnership without sacrificing independence.',
    ],
  },
  {
    id: 308,
    title: 'How to Read Signs, Repeating Numbers & Synchronicities',
    category: 'spirituality',
    duration: '26 mins',
    date: 'Sep 22, 2026',
    image: images.courseShadowJournal.src,
    description: 'Are you seeing 111, 444, or white feathers? Decode the difference between mere coincidence and active spirit intervention.',
    takeaways: [
      'The actual metaphysical meaning of angel sequences.',
      'What to do immediately when you spot a synchronicity.',
      'How to request unambiguous confirmation from your guides.',
    ],
  },
  {
    id: 307,
    title: 'Somatic Shadow Work: Dissolving The Fear of Visibility',
    category: 'mindset',
    duration: '31 mins',
    date: 'Sep 15, 2026',
    image: '/images/episode-stillness.jpg',
    description: 'Overcome the subconscious dread of being judged, criticized, or rejected when you dare to succeed or speak your truth.',
    takeaways: [
      "Where the 'witch wound' lives in the throat and solar plexus.",
      'Tools to speak authentically without trembling.',
      'Embodying unapologetic self-trust.',
    ],
  },
];

export const quoteBand = {
  eyebrow: 'Sacred Frequency Transmission',
  quote: 'You cannot attract what you want. You only attract who you are vibrating as.',
  body: "Take a deep breath. Release the timeline pressure. Let Michelle's voice guide your nervous system into pure receptivity.",
  background: images.sunsetBeach,
};

export const host = {
  image: images.michellePortrait2023,
  cardTitle: 'From Orphanage to Alignment',
  cardQuote: 'The universe never withheld abundance from you. It was waiting for you to receive it.',
  eyebrow: 'About Your Host',
  name: 'Michelle J. Lamont',
  role: 'Spiritual Conduit • International Keynote Speaker • Manifestation Coach',
  paragraphs: [
    'Surviving profound early childhood trauma in an orphanage, Michelle discovered the invisible laws of energy and spiritual orchestration at an early age. Over the past two decades, she has helped thousands of leaders, entrepreneurs, and seekers shift from desperate striving to magnetic ease.',
    'On Manifesting Miracles™, Michelle pulls back the veil on commercial spiritual clichés, bringing hard-hitting neuro-spiritual practices and channeled insights directly to your headphones every single week.',
  ],
  badges: [
    { title: '300+ Episodes', detail: 'Unfiltered spiritual dialogue' },
    { title: 'Worldwide Reach', detail: 'Listened to in 115+ countries' },
    { title: 'Weekly Live Drops', detail: 'Every Tuesday at 6 AM EST' },
  ],
};

export const listenerPraise = {
  eyebrow: 'Listener Praise',
  title: 'What Subscribers Are Saying',
  rating: '4.9 Average on Apple Podcasts',
  items: [
    { initials: 'JL', tone: 'bg-brand-sunsetPeach/20 text-brand-sunsetPeach', title: 'Ep. 289 was a turning point for my finances', quote: "I listen to Michelle every Tuesday morning on my commute. Her explanation of unconscious shame around money completely shifted my energetic contract. Within a month I signed my dream client!", name: 'Jessica L.', detail: 'Apple Podcasts Review' },
    { initials: 'DK', tone: 'bg-purple-100 text-brand-amethyst', title: 'Zero fluff, pure divine activation', quote: "So many manifestation coaches repeat the same generic positive thinking. Michelle's raw vulnerability and pragmatic somatic tools actually clear the blocks in the nervous system.", name: 'David K.', detail: 'Spotify Listener' },
    { initials: 'MR', tone: 'bg-emerald-100 text-emerald-600', title: 'Found peace after 20 years of anxiety', quote: "Her episode on surrendering control ('Erased for 40 years') had me in tears. It helped me forgive my past and step boldly into my soul's authentic calling.", name: 'Maria R.', detail: 'iHeartRadio Subscriber' },
  ],
};

export const guestForm = {
  eyebrow: 'Collaborations & Appearances',
  title: 'Guest Pitches, Sponsorships & Speaking',
  intro: "Have an aligned spiritual story, looking to sponsor an upcoming episode, or want Michelle as a guest on your podcast? Send an inquiry below.",
  note: 'Placeholder form. It is not connected. Nothing is sent.',
  types: ['Pitching as a Podcast Guest', 'Show Sponsorship & Advertising', 'Interview Michelle on My Show', 'Press & Media Inquiries'],
  button: 'Placeholder: podcast inquiry (not connected)',
  footnote: 'Our production team reviews all inquiries within 48–72 business hours.',
};

export const podcastClose = {
  eyebrow: 'Ready To Go Deeper?',
  title: 'Join The Manifesting Miracles Academy',
  body: "Don't just listen to the breakthroughs—live them. Unlock Michelle's 8-week core transformational system, live monthly coaching, and subconscious neuro-reprogramming sessions.",
  cta: { href: '/academy', label: 'Explore Academy Curriculum' },
};
