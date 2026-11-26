import type { FooterContent } from '../components/Footer.astro';

export const storiesSeo = {
  title: 'Manifestation Success Stories | Michelle J. Lamont Client Breakthroughs',
  description:
    'Personal transformation narratives from the sample: wealth, love, career, health, and private mentorship stories shared on the Manifesting Miracles site.',
};

export const storiesCtas = [
  {
    href: '#share',
    label: 'Placeholder: share a story',
    className: 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white',
  },
];

export const storiesFooter: FooterContent = {
  blurb: 'Stories from the sample archive of mentorship, academy, podcast, and immersion clients.',
  exploreTitle: 'Stories',
  explore: [
    { href: '#stories', label: 'The archive' },
    { href: '#share', label: 'Share a story' },
    { href: '/academy', label: 'The Academy' },
    { href: '/sacred-containers', label: '1:1 Mentorship' },
  ],
  disclaimer: 'These stories come from the HTML sample. They are not newly verified for this rebuild.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
};

export const storyStats = [
  { value: '500+', label: 'Lives Transformed', detail: 'Across 1:1 mentorship, MMA Academy & private portals.' },
  { value: '97%', label: 'Breakthrough Rate', detail: 'Reported somatic shift within the first 30 days of alignment.' },
  { value: '$2M+', label: 'Manifested by Clients', detail: 'Documented financial raises, contracts, business sales & debts cleared.' },
];

export const storyFilters = [
  { id: 'all', label: 'View All Stories' },
  { id: 'wealth', label: 'Financial Abundance' },
  { id: 'love', label: 'Sacred Soulmate Love' },
  { id: 'career', label: 'Career & Purpose' },
  { id: 'health', label: 'Health & Inner Peace' },
];

export const storyItems = [
  { category: 'wealth love', tag: 'Wealth & Love', title: 'I manifested a family, 6 figures and a dream car', who: 'Jessica T. • Dec 14, 2023 • Verified Mentorship Client', quote: 'Before meeting Michelle, I felt like I was running an uphill marathon with a backpack full of rocks. My nervous system was stuck in chronic childhood scarcity. Michelle showed me the subconscious contract keeping me invisible. Within six months, I met my dream partner, we welcomed our beautiful baby boy, I crossed six figures in my business, and I literally drove off the lot in the white Range Rover that was on my vision board for 7 years.', badge: 'Verified Transformation' },
  { category: 'wealth', tag: 'MMA Student', title: '10k in and Regulated and MMA', who: 'Dr. Elena M. • Oct 27, 2023 • Manifesting Miracles Academy', quote: 'Module 3 of the Manifesting Miracles Academy shook my reality to the core. I realized I was trying to manifest $10,000 while my body was chemically addicted to panic and fight-or-flight. Once I regulated my vagus nerve through her somatic resets, $10,400 showed up in my account within 11 days from unexpected sources.', badge: 'Verified Academy Graduate' },
  { category: 'health', tag: 'Podcast Listener', title: 'Awakening Real Time Evolution – Michelle’s Podcast is an Absolute Life Changer', who: 'Marcus V. • Sep 15, 2023 • Apple Podcasts Subscriber', quote: "I drive 45 minutes to work every morning and was sinking into depression after a devastating company restructuring. Finding Manifesting Miracles on Spotify felt like an intervention from the divine. Her episode on surrender ('Erased for 40 years') had me pulled over in tears. Her voice rewires you.", badge: 'Verified Listener Review' },
  { category: 'career', tag: 'Akashic Reading', title: 'Testimony re: recorded Akashic Transmission Session', who: 'Rachel K. • Jul 28, 2023 • Private VIP Client', quote: 'Michelle did an energy scan during our private session. She pinpointed a vow of silence I took as a child to protect my mother. I listened to the recording every night for 21 days. The knot in my throat dissolved, and I finally signed my book publishing deal with zero imposter syndrome.', badge: 'Verified VIP Client' },
  { category: 'health', tag: 'Sleep Series', title: 'Soul Sleep Hypnosis Meditation Series: No More Insomnia', who: 'David P. • May 17, 2023 • Audio Hypnosis User', quote: "I struggled with 3 AM wake-up panic attacks for four years. Michelle's Soul Sleep audio tracks completely rewired my nighttime anxiety. I now sleep 8 continuous hours and wake up feeling magnetically recharged. Priceless medicine.", badge: 'Verified Audio User' },
  { category: 'wealth', tag: 'VIP Immersion', title: 'From Stalled Negotiations to a $1.2M Contract in 72 Hours', who: 'Greg R. • Immersion Sanctuary Graduate', quote: 'Within 72 hours of leaving our private Immersion Day, the $1.2M partnership contract that had been stalled for nine months was signed with zero resistance. She pulled the parasite of fear out of my solar plexus.', badge: 'Verified Immersion VIP' },
];

export const shareForm = {
  title: 'Share Your Story',
  intro: 'Did you experience a breakthrough through Michelle’s podcast, MMA, or 1:1 mentorship? Inspire others by submitting your miracle.',
  note: 'Placeholder form. Stories are not published and nothing is sent.',
  pillars: ['Financial Abundance & Business', 'Sacred Soulmate Love & Partnership', 'Career Elevation & Purpose', 'Nervous System & Inner Peace'],
  button: 'Placeholder: submit a story (not connected)',
};

export const discovery = {
  title: 'Ready for Your Transformation?',
  body: "Book your 15-minute free discovery call with Michelle’s alignment desk to pinpoint your primary subconscious ceiling and map which container is right for you.",
  points: ['100% Confidential VIP Consultation', 'Direct clarity on your energetic blockage', 'No pressure, pure energetic alignment'],
  note: 'The sample showed a mock October 2026 calendar with slots on Oct 22. Those times are not a live calendar.',
  slots: ['10:00 AM EST', '11:30 AM EST', '02:00 PM EST', '04:15 PM EST'],
  button: 'Placeholder: discovery booking (not connected)',
};

export const explain = {
  title: 'How Manifestation Success Stories Inspire Transformation',
  points: [
    'Vibrational Matching: You do not attract what you want; you attract what you are chemically normalized to hold.',
    'Subconscious Permission: Reading how another soul broke through poverty contracts gives your own mirror neurons permission to collapse timelines.',
    'Somatic Nervous Safety: Lasting wealth never leaks when panic is eradicated from your physiology.',
  ],
  closer: 'Every time you claim a breakthrough and share your truth, you break ancestral vows of silence and scarcity for future generations.',
};

export const storyFaqs = [
  { q: 'How long does it take to see results?', a: 'Most clients report a distinct somatic nervous system shift within 7 to 14 days of practicing the 333 ritual. Physical manifestations (like sudden contracts, reconciliations, or cash inflows) typically ground into physical reality within 30 to 90 days of consistent subconscious regulation.' },
  { q: 'Does this work if I have deep childhood trauma?', a: "Yes. In fact, Michelle’s methodology was forged in her own childhood crucible growing up in an orphanage. We don't bypass trauma with superficial affirmations; we use somatic neuro-somatic release to dismantle the survival chemicals stored in your cells." },
  { q: 'Can I manifest specific amounts of money?', a: 'Yes, provided your nervous system has been calibrated to receive that number without triggering subconscious fear or subconscious guilt. In our containers, we expand your capacity so multi-six and seven figures feel completely safe.' },
  { q: 'What is Michelle’s approach to the shadow?', a: 'We honor the shadow as a sacred teacher rather than something to be hated or hidden. Shadow parts are simply young, frightened aspects of yourself that made vows of invisibility to survive. We integrate them back into your sovereign wholeness.' },
];
