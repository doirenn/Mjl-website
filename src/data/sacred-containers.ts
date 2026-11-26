import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const sacredSeo = {
  title: 'Sacred Containers | 1-on-1 Private Mentorship with Michelle J. Lamont',
  description:
    'An exclusive 1-on-1 energetic sanctuary with Michelle J. Lamont. Three private mentorship levels, daily Voxer access, and a maximum of three clients at a time.',
  ogImage: images.michellePortrait2022.src,
  ogAlt: 'Michelle J. Lamont',
};

export const sacredAnnouncement: Announcement = {
  badge: 'Strictly Limited',
  emphasis: 'Private 1:1 Sacred Containers:',
  text: 'Only 3 client apertures open for the upcoming quarter',
  links: [
    { href: '#levels', label: 'View The 3 Containers', tone: 'underline' },
    { href: '#apply', label: 'Placeholder: private mentorship application', tone: 'gold' },
  ],
};

export const sacredCtas = [
  {
    href: '#levels',
    label: 'The 3 Levels',
    className: 'hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100/80 text-brand-deepPurple hover:bg-purple-200',
  },
  {
    href: '#apply',
    label: 'Placeholder: apply',
    className: 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white',
  },
];

export const sacredFooter: FooterContent = {
  blurb: 'Private 1-on-1 energetic sanctuaries for leaders ready to dissolve scarcity and hold a higher timeline.',
  exploreTitle: 'Sacred Containers',
  explore: [
    { href: '#levels', label: 'The 3 Apertures' },
    { href: '#apply', label: 'Apply' },
    { href: '/the-immersion', label: 'The Immersion' },
    { href: '/the-portal', label: 'The Portal' },
    { href: '/academy', label: 'The Academy' },
  ],
  disclaimer: 'Sacred Containers are spiritual mentorship. They are not a substitute for licensed medical or psychological care.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved. Manifesting Miracles™ is a registered trademark.',
};

export const sacredHero = {
  eyebrow: 'Private Energetic Architecture',
  title: 'THIS IS THE SACRED PORTAL TO YOUR BECOMING.',
  body: 'Step inside an exclusive, intimate 1-on-1 energetic sanctuary where Michelle J. Lamont anchors the frequency of your highest timeline until your physical reality calibrates.',
  proofs: ['100% Confidential VIP Sanctuaries', 'Direct Daily Voxer Access', 'Max 3 Clients Active Concurrently'],
  image: images.michellePortrait2022,
  quote: 'The water holds no resistance. Neither will your reality when we realign your channel.',
  status: 'By Application Only',
};

export const intro = {
  eyebrow: 'The Energetic Contract',
  title: 'Your Highest Becoming Starts Here.',
  quote: 'You are not broken. You were simply taught to operate from borrowed limits.',
  paragraphs: [
    "When you reach a certain level of consciousness and success, conventional advice and generic mass courses fall completely flat. You don't need more intellectual theory—you need an unwavering energetic counterpart who can see your blind spots, dissolve ancestral scarcity contracts, and hold you to your divine authority.",
    "In Michelle's Sacred Containers, you enter a private vortex. This is a bespoke, immersive energetic container designed for leaders, high-performers, and conscious creators who are ready to make quantum leaps in wealth, intimacy, and spiritual clarity without self-sabotage.",
  ],
  points: [
    { title: 'Bespoke Blueprint', body: 'No cookie-cutter curriculums. Channeled directly for your nervous system.' },
    { title: 'Real-Time Calibration', body: 'Continuous Voxer access keeps you from dropping into scarcity between calls.' },
  ],
  image: images.michellePortrait2023,
};

export const whyNow = {
  eyebrow: 'The Threshold of Decision',
  title: 'Why Now? And Why You’re Ready',
  body: 'You have spent years surviving, proving, and carrying everyone else’s expectations. The soul fatigue you feel is not weakness—it is the old paradigm crumbling to make room for your sovereign power.',
  hold: 'A sacred container is fundamentally different from therapy, mastermind groups, or ordinary business coaching. It is an energetic covenant where Michelle holds your highest vibration without wavering, even when your ego tries to retreat into old comfort zones.',
  points: [
    'Dissolving Timeline Anxiety: Ending the exhausting obsession with the "how" and stepping into magnetic receptivity.',
    "Neuro-Somatic Wealth Capacity: Calibrating your physical nervous system so multi-six and seven-figure inflows don't trigger panic.",
    'Direct Channeled Guidance: Accessing intuitive clarity on your contracts, partnerships, and soul mission with zero second-guessing.',
  ],
  quote: 'Step through the threshold. Your future self is waiting.',
};

export const fit = {
  eyebrow: 'Aperture Alignment',
  title: 'This Is For You If…',
  intro: 'These containers are deliberately designed for high-calibre seekers who are ready for radical ownership, visceral truth, and unprecedented energetic acceleration.',
  items: [
    { n: '01', title: 'You have hit an invisible ceiling in your business or life', body: 'You are already successful by traditional standards, yet you know in your bones that you are operating at only a fraction of your actual energetic and financial destiny.' },
    { n: '02', title: 'You are done with superficial, toxic positivity fluff', body: 'You don’t need another vision board or 100 affirmations. You want deep, neuro-somatic rewiring and direct spiritual surgery that dismantles generational trauma contracts.' },
    { n: '03', title: 'You crave high-touch, real-time energetic intimacy', body: 'You want direct access to Michelle between sessions on Voxer, ensuring that when self-doubt or high-stakes negotiations arise, your frequency is recalibrated within minutes.' },
  ],
};

export const levels = {
  eyebrow: 'Choose Your Container',
  title: 'The 3 Sacred Apertures',
  intro: "Select the level of immersion and timeline alignment tailored to your soul's current evolutionary threshold.",
  note: 'Placeholder: applications are not connected. These buttons do not submit anything.',
  cards: [
    {
      length: '4-Week Immersion',
      tier: 'Tier 01',
      name: 'FOUNDATIONS',
      title: 'Foundations of Becoming',
      subtitle: 'Nervous System Reset & Channel Activation',
      body: 'Ideal for those standing at a critical crossroads. In 4 concentrated weeks, we locate and dissolve the subconscious blockage holding your next level hostage.',
      points: ['(4) 60-Minute Private 1:1 Deep Dives', 'Mon–Fri Direct Voxer Voice Coaching', 'Custom 333 Subconscious Audio Reset', 'Full Lifetime Access to the Academy'],
      cta: 'Placeholder: Foundations application',
      image: images.forestLight,
      featured: false,
    },
    {
      length: '3-Month Intensive',
      tier: 'Tier 02',
      name: 'ACCELERATION',
      title: 'Quantum Acceleration',
      subtitle: 'Complete Reality & Wealth Restructuring',
      ribbon: 'Most Requested Immersion',
      body: "Michelle's signature 90-day sovereign portal. We recode your identity, heal ancestral contracts of lack, and expand your physical capacity to receive extraordinary wealth and sacred intimacy.",
      points: ['(12) 60-Minute Weekly Private 1:1 Sessions', 'Priority Daily Voxer Audio & Text Mentorship', 'Direct Energy & Nervous System Calibrations', 'Real-Time Business, Relationship & Wealth Strategy', 'All Masterclasses + Priority Retreat Guest Pass'],
      cta: 'Placeholder: Acceleration application',
      image: images.sunsetBeach,
      featured: true,
    },
    {
      length: '6-Month Sovereign',
      tier: 'Tier 03',
      name: 'MASTERY',
      title: 'Sovereign Mastery',
      subtitle: 'Bespoke High-Council Mentorship',
      body: 'Reserved strictly for high-impact leaders, public figures, and visionaries navigating generational wealth, legacy projects, and multi-dimensional spiritual sovereignty.',
      points: ['(24) Bi-Weekly / Weekly Deep Dives Over 6 Mo.', 'Unrestricted Direct Voxer Voice Access', '(1) Private In-Person VIP Immersion Day with Michelle', 'Complete Energetic Life & Corporate Architecture'],
      cta: 'Placeholder: Mastery application',
      image: images.clientAvatar1,
      featured: false,
    },
  ],
};

export const voxer = {
  eyebrow: 'Real-Time Access',
  quote: 'I am in your pocket every single day so you never drop frequency.',
  title: "You're 1 Message Away From The Magic.",
  body: 'Traditional coaching fails because you meet for one hour on Tuesday, but by Thursday you hit a trigger, contract into panic, and spend five days spiraling until your next session.',
  detail: "In Michelle’s Sacred Containers, you receive private daily access via Voxer voice memo. When high-stakes decisions, relationship conflicts, or subconscious resistance flare up in real-time, you press record. Michelle listens, tunes into your frequency, and returns channeled, actionable guidance within hours.",
  sampleTitle: 'Listen: Channeled Voice Memo Sample',
  sampleMeta: 'Duration listed in the sample: 01:15',
  embedLabel: 'Voxer sample audio. No audio file is connected.',
  caption: 'When you send a note in your darkest hour, you receive somatic truth that lifts your nervous system back into sovereign alignment immediately.',
  image: images.michelleHeadshot,
};

export const stories = [
  { initials: 'RH', title: 'She saw straight through my 7-year ceiling', quote: "I run a multi-million-dollar fund and thought I had tried everything. Within three weeks of entering Michelle’s 3-month container, she identified the exact childhood survivor contract keeping me in chronic fight-or-flight. My nervous system finally relaxed, and our firm closed our largest capital raise in history.", name: 'R. Henderson', detail: 'Managing Partner, Austin TX' },
  { initials: 'ES', title: 'The daily Voxer support was a game changer', quote: 'Having Michelle in my pocket every morning meant I never fell back into old self-sabotage loops. When I walked into a critical contract renegotiation, her voice memo grounded my field. I doubled my fee with zero hesitation.', name: 'Elena S.', detail: 'Creative Agency Founder, London' },
  { initials: 'ML', title: 'Pure divine activation and zero fluff', quote: 'Michelle is not a standard coach; she is an authentic spiritual conduit. She doesn’t allow your ego to hide. If you are truly ready to leave struggle behind and step into sovereign power, do not hesitate to apply.', name: 'Dr. Miriam L.', detail: 'Physician & Wellness Entrepreneur' },
];

export const application = {
  eyebrow: 'Confidential Application Desk',
  title: 'Apply to Step Inside a Sacred Container',
  body: "Because of the deep energetic investment and round-the-clock Voxer intimacy, Michelle accepts only 3 private clients concurrently. Please answer candidly to explore alignment.",
  note: 'Placeholder form. It is not connected. Nothing is sent, and there is no success message.',
  containers: [
    'Tier 02: Quantum Acceleration (3 Months)',
    'Tier 01: Foundations of Becoming (4 Weeks)',
    'Tier 03: Sovereign Mastery (6 Months)',
    "I'd like Michelle's guidance on which container is right",
  ],
  experience: [
    'I have worked with high-level coaches / mentors previously',
    'I listen to the podcast & study manifestation, ready for my first 1:1',
    'I am a coach, healer, or CEO seeking my own confidential sounding board',
  ],
  button: 'Placeholder: confidential application (not connected)',
  footnote: "Applications are reviewed personally by Michelle and her executive team within 24–48 hours.",
};
