import { images } from './images';

export const homeSeo = {
  title: 'Michelle J. Lamont | Manifestation Coach, Mindset Expert & Speaker',
  description:
    'Awaken your highest potential, clear subconscious scarcity, and step into effortless alignment with Michelle J. Lamont and Manifesting Miracles.',
  ogImage: images.michellePortrait2023.src,
  ogAlt: images.michellePortrait2023.alt,
};

export const hero = {
  eyebrow: 'Spiritual Guide • International Speaker • Mindset Mentor',
  titleLead: 'Manifest the Life You Were',
  titleAccent: 'Born to Live',
  body: 'Awaken your highest potential, clear subconscious scarcity, and step into effortless alignment. Join over',
  bodyStrong: '100,000+ souls',
  bodyTail: 'learning how to co-create with the universe every single day.',
  primary: { href: '#academy', label: 'Explore The Academy' },
  secondary: { href: '#podcast', label: 'Listen to Podcast' },
  rating: '4.9/5 from 1,400+ Reviews',
  podcastProof: 'Top 1% Global Podcast • 2M+ Streams',
  avatars: [images.clientAvatar1, images.clientAvatar2, images.clientAvatar3],
  scene: images.sunsetBeach,
  portrait: images.michelleHeadshot,
  quote: 'Your current reality is merely an echo of old thoughts. Let’s create new ones.',
  alignmentLabel: 'Alignment',
  alignmentValue: 'Quantum Shifting',
  programName: 'Manifesting Miracles™',
  programDetail: 'Self-Paced & VIP Programs',
};

export const pressRow = {
  label: 'Recognized & Featured Across Leading Media & Platforms',
  items: [
    { icon: 'fa-brands fa-apple', name: 'Apple Podcasts', extra: '' },
    { icon: 'fa-brands fa-spotify', name: 'Spotify Top 10', iconClass: 'text-[#1DB954]' },
    { icon: 'fa-solid fa-radio', name: 'iHeartRadio', iconClass: 'text-rose-500' },
    { icon: '', name: 'FORBES', extra: 'Council', serif: true },
    { icon: 'fa-solid fa-gem', name: 'Mindvalley Community', iconClass: 'text-brand-sunsetPeach' },
  ],
};

export const academy = {
  eyebrow: 'Flagship Curriculum',
  title: 'The Manifesting Miracles Academy',
  intro:
    'A comprehensive, spiritual, and neuro-scientific roadmap designed to dissolve your limiting programming and materialize the reality you desire.',
  cardEyebrow: 'Transformational System',
  cardTitle: 'HOW TO MANIFEST',
  cardBody: 'The exact vibrational formula to attract abundance, purpose & joy.',
  cardPoints: ['8 Core Video Modules', 'Guided Subconscious Meditations', 'Direct Energy Transmission'],
  cardCta: 'Placeholder: Thinkific access',
  badge: 'Enrollment Now Open',
  headline: 'Stop chasing what is already yours. Begin vibrating at the frequency of receiving.',
  body: "Traditional manifestation often fails because it operates only on a conscious, wishful level. Michelle's blueprint re-engineers your subconscious nervous system, releases ancestral resistance, and aligns you with the universal laws of attraction.",
  pillars: [
    {
      icon: 'fa-solid fa-brain',
      title: 'Subconscious Reprogramming',
      body: 'Eradicate scarcity beliefs embedded in childhood.',
    },
    {
      icon: 'fa-solid fa-heart-pulse',
      title: 'Somatic Energy Alignment',
      body: 'Calm the nervous system so you can hold wealth.',
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'The 333 Daily Practice',
      body: 'A 10-minute ritual for continuous synchronicities.',
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Private Soul Tribe',
      body: 'Bi-weekly live Q&A sessions with Michelle.',
    },
  ],
  cta: { href: '#coaching', label: 'Enroll In The Academy Today' },
  guarantee: '14-Day Full Satisfaction Guarantee',
};

export const quiz = {
  eyebrow: '60-Second Assessment',
  title: 'What Is Your Primary Manifestation Block?',
  intro:
    "Answer 3 quick questions to identify what's stalling your desires and receive Michelle's personalized frequency shift exercise.",
  steps: [
    {
      label: 'Step 1 of 3',
      progress: '33% Complete',
      width: 'w-1/3',
      quoted: true,
      question: 'When you think about your biggest financial or lifestyle dream, what is your immediate feeling?',
      options: [
        'I want it, but deep down I worry I’ll lose what I already have.',
        "It works for other people, but I feel like I'm not ready or worthy yet.",
        'I get obsessed with the HOW and burn out trying to force it.',
      ],
    },
    {
      label: 'Step 2 of 3',
      progress: '66% Complete',
      width: 'w-2/3',
      quoted: false,
      question: 'Which area of your life feels most constrained or stagnant?',
      options: [
        'Financial abundance & career growth',
        'Soulmate love & high-vibe relationships',
        'Spiritual purpose & inner calm',
      ],
    },
  ],
  resultTitle: 'Your Energy Profile: The Sacred Surrender Catalyst',
  resultBody:
    'Your subconscious desires big results, but your nervous system is in an "over-control" feedback loop. By shifting from forcing to receiving, abundance flows 3x faster.',
  nextStepLabel: 'Recommended Next Step:',
  nextStep:
    'Download Michelle’s 7-minute "Frequency Clearing Meditation" to release control and invite quantum miracles.',
  cta: { href: '#lead-magnet', label: 'Claim Your Personalized Audio' },
};

export const aboutTeaser = {
  image: images.michellePortrait2023,
  years: '20+ Years',
  yearsDetail: 'Guiding high-achievers, creatives & visionaries through divine manifestation.',
  eyebrow: 'Meet Your Guide',
  quote: 'You are not here to struggle. You are here to remember your divine power.',
  paragraphs: [
    'Michelle J. Lamont is an internationally acclaimed manifestation coach, certified spiritual intuitive, and host of the chart-topping Manifesting Miracles Podcast.',
    'After navigating severe life hardship, loss, and radical reinvention, Michelle cracked the code on quantum mindset shifts. She bridges ancient esoteric wisdom with modern neuroscience, delivering pragmatic tools that yield rapid, verifiable results.',
  ],
  stats: [
    { value: 'Top 1%', label: 'Ranked Global Podcast in Spirituality' },
    { value: '50K+', label: 'Students Enrolled in Masterclasses' },
    { value: '100%', label: 'Devoted to Your Authentic Awakening' },
  ],
  primary: { href: '#coaching', label: 'Explore Private Mentorship' },
  secondary: { href: '#podcast', label: "Hear Michelle's Journey" },
};

export const pathways = {
  eyebrow: 'Choose Your Evolution',
  title: 'Paths to Your Quantum Breakthrough',
  intro:
    'Whether you prefer self-guided expansion or bespoke 1:1 spiritual architecture, there is a dedicated portal for your journey.',
  cards: [
    {
      featured: false,
      icon: 'fa-solid fa-graduation-cap',
      eyebrow: 'Self-Paced Immersion',
      title: 'Manifesting Miracles Academy',
      body: 'The complete video training suite with interactive workbooks, frequency resets, and foundational energetic principles.',
      points: [
        'Lifetime access to all modules & future updates',
        'Subconscious rewiring audio hypnoses',
        'Monthly live group coaching Q&A',
      ],
      cta: 'Explore Curriculum',
      href: '#academy',
      modal: '',
    },
    {
      featured: true,
      icon: 'fa-solid fa-crown',
      eyebrow: 'By Application Only',
      title: 'VIP 1:1 Private Mentorship',
      body: 'High-touch, bespoke energetic architecture for executives, founders, creatives, and leaders craving accelerated alignment.',
      points: [
        'Weekly 60-min private Zoom deep dives',
        'Direct daily voice & text support (Voxer)',
        'Custom subconscious sound frequencies',
        'Full access to Academy & VIP events',
      ],
      cta: 'Apply For Private Coaching',
      href: '',
      modal: 'VIP 1:1 Mentorship',
      ribbon: 'Most Transformative',
    },
    {
      featured: false,
      icon: 'fa-solid fa-earth-americas',
      eyebrow: 'In-Person Magic',
      title: 'Retreats & Keynote Speaking',
      body: 'Immersive destination retreats in energetic vortices (Sedona, Tulum, Bali) and dynamic live stage keynotes.',
      points: [
        'Intimate retreats limited to 15 attendees',
        'In-person somatic breathwork & vortex work',
        'Corporate & conference keynote inquiries',
      ],
      cta: 'Inquire for Events',
      href: '',
      modal: 'Speaking & Retreats',
    },
  ],
};

export const podcastTeaser = {
  eyebrow: 'Manifesting Miracles™ Podcast',
  title: 'Tune In to High-Vibrational Conversations Every Tuesday',
  body: 'With over 300+ episodes and millions of downloads, Michelle shares raw, practical, and intuitive guidance to unlock wealth consciousness, healthy soul-level love, and deep inner freedom.',
  platformsLabel: 'Available On All Platforms:',
  platforms: [
    { icon: 'fa-brands fa-apple', iconClass: 'text-gray-900', label: 'Placeholder: Apple Podcasts' },
    { icon: 'fa-brands fa-spotify', iconClass: 'text-[#1DB954]', label: 'Placeholder: Spotify' },
    { icon: 'fa-solid fa-radio', iconClass: 'text-rose-500', label: 'Placeholder: iHeartRadio' },
  ],
  showName: 'Manifesting Miracles with Michelle J. Lamont',
  status: 'Top Episode',
  meta: 'Episode #311 • 28 Mins',
  episodeTitle: 'How to Clear Subconscious Money Traumas & Open Your Abundance Channel',
  episodeBody:
    'Discover how old ancestral contracts about debt and scarcity hold you back in silence, and how 3 simple affirmations rewire your receptive field today.',
  embedLabel: 'Podcast audio embed. No audio file is connected.',
};

export const reviews = {
  eyebrow: 'Miracle Stories',
  title: 'Real Lives Transformed by Alignment',
  intro:
    "Discover how everyday people, entrepreneurs, and seekers used Michelle's method to materialize real-world abundance.",
  filters: [
    { id: 'all', label: 'All Stories' },
    { id: 'wealth', label: 'Wealth & Business' },
    { id: 'love', label: 'Love & Soulmates' },
    { id: 'healing', label: 'Inner Healing' },
  ],
  items: [
    {
      category: 'wealth',
      quote:
        "Within 45 days of starting Michelle’s Academy, I broke through my 3-year revenue plateau. Her subconscious clearing released fears I didn't even realize were strangling my business.",
      name: 'Sarah Jenkins',
      detail: 'Creative Agency Founder, CA',
      image: images.testimonialSarah,
    },
    {
      category: 'love',
      quote:
        'I had given up on finding true partnership. Michelle taught me how to become the energetic match first. Six months later, I met my fiancé. It felt completely effortless.',
      name: 'Marcus Vance',
      detail: 'Author & Speaker, NY',
      image: images.testimonialMarcus,
    },
    {
      category: 'healing',
      quote:
        "Michelle doesn't just teach theory; she activates something asleep inside you. My anxiety surrounding chronic lack disappeared, replaced by genuine peace.",
      name: 'Elena Rostova',
      detail: 'Holistic Practitioner, London',
      image: images.testimonialElena,
    },
  ],
};

export const leadMagnet = {
  eyebrow: 'Complimentary Gift',
  title: 'Download the 7-Day Abundance Alignment Toolkit',
  body: 'Receive Michelle’s private morning manifestation audio meditation, printable daily alignment checklist, and journal prompts to tune your frequency before you even get out of bed.',
  points: [
    '7-Minute HQ Audio Frequency Track (MP3)',
    'PDF Daily Co-Creation Template',
    'Zero spam. Instant download in your inbox.',
  ],
  note: 'Placeholder form. It is not connected to Kit or email. Nothing is sent, and there is no success message.',
  nameLabel: 'First Name',
  namePlaceholder: 'Michelle',
  emailLabel: 'Email Address',
  emailPlaceholder: 'michelle@example.com',
  button: 'Placeholder: free toolkit (not connected)',
  privacy: 'We honor your privacy and will never share your email.',
};

export const faqs = [
  {
    question: 'How is Michelle’s method different from "The Secret" or standard Law of Attraction?',
    answer:
      'Most mainstream manifestation focuses entirely on conscious desires and surface-level vision boards. Michelle works on the somatic and subconscious level—clearing the exact autonomic blocks where lack is chemically memorized in the body so miracles can physically ground.',
  },
  {
    question: 'How much time per day does the Academy require?',
    answer:
      'Just 10 to 15 minutes each morning. The curriculum is specifically structured for busy high-achievers who need high-impact vibrational shifts without adding hours to their schedule.',
  },
  {
    question: 'Are 1:1 VIP Mentorship spots always available?',
    answer:
      'To protect energetic intimacy, Michelle works with only 6 private VIP clients at any given time. Applications are reviewed in the order received, and accepted applicants are invited to a chemistry call.',
  },
];

export const booking = {
  title: 'Apply for Mentorship',
  intro: "Connect with Michelle's team to explore your private breakthrough session.",
  note: 'Placeholder form. It is not connected. Submitting is disabled, and nothing is sent.',
  programs: ['VIP 1:1 Mentorship', 'Academy Enrollment', 'Speaking & Retreats'],
  programLabels: {
    'VIP 1:1 Mentorship': 'VIP 1:1 Private Mentorship',
    'Academy Enrollment': 'Manifesting Miracles Academy',
    'Speaking & Retreats': 'Keynote Speaking & Retreats',
  } as Record<string, string>,
  button: 'Placeholder: application (not connected)',
};
