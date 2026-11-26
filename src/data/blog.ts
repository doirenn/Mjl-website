import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const blogSeo = {
  title: 'Manifestation Blog for Abundance | Michelle J. Lamont',
  description:
    'Nine articles from the sample on nervous system regulation, subconscious rewiring, the RAS, sleep, and spiritual wealth.',
};

export const blogCtas = [
  {
    href: '#archive',
    label: 'All articles',
    className: 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white',
  },
];

export const blogFooter: FooterContent = {
  blurb: 'Articles from the HTML sample. Full article pages and the other 39 posts mentioned in the sample are not connected.',
  exploreTitle: 'Blog',
  explore: [
    { href: '#archive', label: 'Nine articles' },
    { href: '/podcast', label: 'Podcast' },
    { href: '/academy', label: 'Academy' },
  ],
  disclaimer: 'Article excerpts come from the sample. They are not new posts.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
};

export const blogFilters = [
  { id: 'all', label: 'All Transmissions' },
  { id: 'somatic', label: 'Nervous System & Somatics' },
  { id: 'sleep', label: 'Subconscious Rewiring & Sleep' },
  { id: 'wealth', label: 'Wealth Hacks & The RAS' },
  { id: 'neuro', label: 'Neuro-Manifestation' },
];

export const articles = [
  { category: 'somatic', minutes: '7 min read', title: 'How to Reprogram Your Nervous System for Manifestation (Rewiring for Miracle Inflows)', excerpt: 'You cannot manifest what your autonomic nervous system chemically perceives as a threat. Discover why thinking rich fails when your vagus nerve is trapped in survival panic—and how somatic resets normalize high-volume inflows.', image: images.sunsetBeach.src, featured: true },
  { category: 'somatic', minutes: '6 min read', title: "The Most Dangerous Thing Happening to You Right Now (And It's Not What You're Thinking)", excerpt: "You aren't lacking discipline or willpower. The silent killer of your manifestations is subconscious desensitization—when your nervous system normalizes disappointment so deeply that your reality stops offering miracles.", image: images.forestLight.src, featured: false },
  { category: 'wealth', minutes: '5 min read', title: 'Rewiring Your Reticular Activating System (RAS) for Wealth: Transforming Your Subconscious Mind', excerpt: 'Are your subconscious thoughts deleting opportunities right in front of your eyes? Discover the biological gatekeeper in your brainstem and how to assign it new orders to scout luxury contracts.', image: images.courseNervousSystem.src, featured: false },
  { category: 'sleep', minutes: '8 min read', title: 'How to Reprogram Your Subconscious Mind While You Sleep: The 8-Hour Night-Time Manifestation Guide', excerpt: 'The critical 20-minute window before sleep is the doorway to your soul blueprint. Learn the exact auditory anchors that bypass the critical analytical mind and install multi-million-dollar neural pathways.', image: images.clientAvatar1.src, featured: false },
  { category: 'neuro', minutes: '6 min read', title: 'Neuro-Manifestation: How to Rewire Your Brain for Divine Abundance and Quantum Wealth', excerpt: 'Upgrade from wishful thinking to neuroplastic command. Discover how deliberate synaptic firing synchronizes with the quantum field to crystallize outcomes at exponential speed.', image: '/images/episode-movement.jpg', featured: false },
  { category: 'sleep', minutes: '7 min read', title: 'How to Reprogram Your Subconscious Mind: The 7 Secret Steps to Manifest Your Desires Fast', excerpt: 'In this comprehensive guide, Michelle lays bare the 7 non-negotiable spiritual steps to dislodge old vows of lack and encode your energetic field with royalty consciousness.', image: images.michelleHeadshot.src, featured: false },
  { category: 'wealth', minutes: '6 min read', title: 'The Neuroscience of Spiritual Wealth: Practical Alignment Tools to Manifest Physical Abundance', excerpt: 'Bridging the holy and the neurological: learn how electromagnetic cardiac coherence acts as an energetic transmitter that draws bank accounts and resources into your orbit.', image: '/images/episode-love.jpg', featured: false },
  { category: 'somatic', minutes: '5 min read', title: 'Why Manifesting Feels Hard: Nervous System Regulation and the Quantum Frequency of Abundance', excerpt: 'If you feel exhausted trying to force your dreams into existence, you are wrestling with circumstances instead of shifting your vibration. Here is why dropping resistance is the only catalyst that works.', image: '/images/episode-stillness.jpg', featured: false },
  { category: 'wealth', minutes: '4 min read', title: '5 Money Manifestation Hacks: Somatic Shifts to Upgrade Your Financial Energy Today', excerpt: "Five simple somatic rituals you can execute in less than 90 seconds to stop financial leakages, recalibrate your wallet's energetic field, and become magnetically receptive to surprises.", image: images.courseShadowJournal.src, featured: false },
];

export const blogAudit = {
  title: "Let's unlock what's holding you back from abundance.",
  body: "Schedule a complimentary 15-minute Manifestation Audit with Michelle's alignment desk. We'll pinpoint your #1 subconscious ceiling and give you immediate clarity on your energetic breakthrough.",
  note: 'The sample calendar for Oct 22 is not live: 10:00 AM, 11:30 AM, 02:15 PM, and 04:00 PM EST.',
  button: 'Placeholder: audit (not connected)',
};

export const blogAudio = {
  title: "Get Michelle's 7-Minute Frequency Reset Audio Free",
  body: 'Join 65,000+ conscious souls receiving Michelle’s weekly Tuesday alignment transmission, subconscious audio tracks, and private invitations.',
  note: 'Placeholder. Kit is not connected and no audio is sent.',
  button: 'Placeholder: free audio (not connected)',
};
