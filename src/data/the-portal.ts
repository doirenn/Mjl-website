import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const portalSeo = {
  title: 'The Portal: A Day of Intimacy & Activation with Michelle J. Lamont',
  description:
    'A private full-day soul portal with Michelle J. Lamont in Dallas/Fort Worth or as a destination fly-in. One aperture a month. Pay in full is $7,500.',
  ogImage: images.sunsetBeach.src,
  ogAlt: images.sunsetBeach.alt,
};

export const portalAnnouncement: Announcement = {
  badge: 'Strictly Limited',
  emphasis: 'The Portal VIP Sanctuary:',
  text: 'Only 1 private in-person aperture opened per month',
  links: [
    { href: '#expect', label: 'What to Expect', tone: 'underline' },
    { href: '#apply', label: 'Placeholder: reserve your aperture', tone: 'gold' },
  ],
};

export const portalCtas = [
  {
    href: '#pricing',
    label: 'Investment',
    className: 'hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100/80 text-brand-deepPurple',
  },
  {
    href: '#apply',
    label: 'Placeholder: reserve',
    className: 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white',
  },
];

export const portalFooter: FooterContent = {
  blurb: 'A private full-day portal with Michelle J. Lamont. One in-person aperture each month.',
  exploreTitle: 'The Portal',
  explore: [
    { href: '#expect', label: 'What to Expect' },
    { href: '#included', label: "What's Included" },
    { href: '#pricing', label: 'Investment' },
    { href: '#apply', label: 'Apply' },
    { href: '/the-immersion', label: 'The Immersion' },
  ],
  disclaimer: 'The Portal is spiritual mentorship. It is not a substitute for licensed medical or psychological care. Deposits in the sample are described as non-refundable.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
};

export const portalHero = {
  kicker: 'Private 1-on-1 Full-Day In-Person Calibration',
  title: 'The Portal: A Day of Intimacy & Activation with Michelle',
  body: 'A private, in-person full-day soul activation and sanctuary experience designed to dissolve resistance and collapse timelines.',
  where: 'Hosted exclusively at Michelle’s private sanctuary in the Dallas/Fort Worth area, or arranged as a destination fly-in experience.',
  proofs: ['100% Confidential VIP Atmosphere', 'Secluded Dallas Sanctuary or Fly-In', 'Strictly 1 Aperture Monthly'],
  image: images.sunsetBeach,
};

export const portalIntro = {
  title: 'The Portal',
  subtitle: 'A Private, Full-Day Soul Portal Day with Michelle J. Lamont',
  paragraphs: [
    'You have spent years acquiring knowledge, reading the books, meditating, and seeking breakthroughs. You have achieved success, earned respect, and expanded your consciousness. Yet deep in your physical being, you sense an invisible ceiling—a glass barrier between where you currently reside and the exponential timeline calling to your soul.',
    'The Portal is a sacred full-day intensive held in intimate physical proximity with Michelle. In this room, digital barriers dissolve. The subtle micro-tensions, unconscious money fears, and generational contracts stored in your autonomic nervous system are identified, felt, and dismantled with compassionate spiritual precision.',
    'We do not leave the sanctuary until your body feels completely safe holding the unconditional love, sovereign authority, and abundance that is already yours.',
  ],
  points: [
    { title: 'Cellular Release', body: 'Eradicating trauma chemicals and inherited vows of lack.' },
    { title: 'Somatic Safety', body: "Calibrating your nervous system so massive elevation doesn't trigger fear." },
    { title: 'Timeline Collapse', body: 'Dissolving decades of waiting into immediate energetic embodiment.' },
  ],
};

export const sound = {
  quote: 'When the frequency shifts at the cellular level, the physical world rearranges without friction.',
  title: 'Listen: 432Hz Sound & Water Calibration Transmission',
  meta: 'The sample listed this sample as 04:12.',
  embedLabel: 'Sound and water audio embed. No audio file is connected.',
  caption: 'Every Portal Day combines quartz crystal singing bowls with somatic salt pool therapy to lock the new vibrational frequency permanently into your physiology.',
  image: images.forestLight,
};

export const stages = [
  { stage: 'Stage 01 • Morning', title: 'Intimate Hallowed Awakening', body: 'You arrive at the private Dallas sanctuary. Aromatic herbal aura cleansing, ceremonial tea, and a somatic grounding ritual.', points: ['Herbal aura cleansing & smudging', 'Sacred ceremonial tea service', 'Sovereign intention anchoring'] },
  { stage: 'Stage 02 • Deep Dive', title: 'Sacred Session in the Priestess Chamber', body: 'Undivided one-on-one session. Akashic field, childhood contracts of lack, and self-sabotage.', points: ['Direct channeled Akashic guidance', 'Shadow & trauma contract erasure', 'Dissolving subconscious ceilings'] },
  { stage: 'Stage 03 • Recalibration', title: 'Late Morning: Energy Sound Calibration', body: 'Quartz crystal singing bowls over the energy centers.', points: ['432Hz quartz singing bowls', 'Vagus nerve somatic down-regulation', 'Cellular frequency alignment'] },
  { stage: 'Stage 04 • Water Immersion', title: 'Midday: Sacred Herbal Salt Pool Therapy', body: 'Warm mineral water immersion to release spinal and pelvic tension.', points: ['Heated mineral salt pool floatation', 'Guided somatic water breathwork', 'Complete nervous system reset'] },
  { stage: 'Stage 05 • Nourishment', title: 'Afternoon: Nature Walk & Intimate Lunch', body: 'Chef-prepared organic meal and a grounding nature walk.', points: ['Organic gourmet luncheon & clean elixirs', 'Peaceful integration dialogue', 'Grounding barefoot earth walk'] },
  { stage: 'Stage 06 • Activation', title: 'Evening: Studio Integration & Future Vision', body: 'Next multi-year sovereign blueprint: contracts, wealth, books, or corporate pivots.', points: ['Quantum reality roadmap design', 'Real-time wealth capacity expansion', 'Sealing the new energetic baseline'] },
  { stage: 'Stage 07 • Sealing Ceremony', title: 'Sunset: Fire & Starlight Rebirth Ceremony', body: 'Old contracts are surrendered into sacred flame under the stars.', points: [] },
];

export const included = [
  'Full 7–8 Hour Private Day with Michelle',
  'Pre-Portal Energy Scan & Intention Diagnostic (45 Mins) via Zoom',
  'Somatic Water & Heated Mineral Salt Pool Therapy',
  '432Hz Quartz Crystal Singing Bowl Sound Bath',
  'Curated Organic Gourmet Luncheon & Clean Refreshments',
  '(3) Post-Portal Integration Calls (30 Mins Each via Zoom) over 6 weeks',
  'Full Lifetime Enrollment in Manifesting Miracles Academy ($1,997 Value)',
];

export const plans = [
  { name: 'Pay in Full Sovereign', price: '$7,500', detail: 'One-time full investment', body: 'Complete Portal Sanctuary Day + 3 Integration Calls + Lifetime MMA Academy enrollment.', bonus: 'Included Exclusive Bonus: 30 Days of Direct Daily Voxer Voice Mentorship with Michelle ($2,500 Value)', cta: 'Placeholder: pay in full' },
  { name: '2-Payment Recalibration', price: '2 × $3,900', detail: 'First payment reserves your date', body: 'Second payment due 14 days prior to your sanctuary date.', bonus: '', cta: 'Placeholder: 2-payment plan' },
  { name: '3-Payment Expansion', price: '3 × $2,700', detail: 'Flexible monthly structure', body: 'Designed for high-growth visionaries preferring maximum monthly cash flow flexibility.', bonus: '', cta: 'Placeholder: 3-payment plan' },
];

export const legal = [
  'Because Michelle reserves an entire calendar day exclusively for you and prepares your energetic field weeks in advance, all deposits and payments are strictly non-refundable. Rescheduling requests must be submitted at least 21 days prior to your agreed date.',
  "Travel and lodging expenses to Dallas/Fort Worth (DFW) or custom destination are the client's responsibility.",
  'A comprehensive mutual non-disclosure agreement (NDA) is executed prior to your day for complete VIP privacy.',
];

export const portalApply = {
  title: 'Apply to Step Inside The Portal',
  body: 'Because only 1 private in-person portal aperture is opened each month, please provide thoughtful responses below. Michelle reviews every inquiry personally.',
  note: 'Placeholder form. Checkout and the application are not connected. Nothing is sent.',
  locations: ["Michelle's Private Sanctuary (Dallas / Fort Worth DFW)", 'Destination Fly-In (Custom Location - Additional travel fee applies)', 'Virtual Full-Day VIP Portal (High-Definition Broadcast Studio)'],
  timing: ['Immediate (Next 30 Days)', 'Next Quarter', 'Flexible / First Available Aperture'],
  investments: ['Pay in Full Sovereign ($7,500 - Includes 30-Day Voxer Bonus)', '2 Payments (2 × $3,900)', '3 Payments (3 × $2,700)'],
  button: 'Placeholder: portal application (not connected)',
  footnote: 'Applications receive strict executive review within 24–48 hours.',
};
