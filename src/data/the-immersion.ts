import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const immersionSeo = {
  title: 'The Immersion | Private 1-on-1 VIP Day with Michelle J. Lamont',
  description:
    'A private full-day in-person immersion with Michelle J. Lamont in Dallas/Fort Worth or as a destination fly-in. Two dates a month. Pay in full is $6,500.',
  ogImage: images.sunsetBeach.src,
  ogAlt: images.sunsetBeach.alt,
};

export const immersionAnnouncement: Announcement = {
  badge: 'Strictly Limited',
  emphasis: 'The Immersion VIP Sanctuary:',
  text: 'Only 2 private in-person dates available per month',
  links: [
    { href: '#what-you-receive', label: 'What You Receive', tone: 'underline' },
    { href: '#apply', label: 'Placeholder: reserve your date', tone: 'gold' },
  ],
};

export const immersionCtas = [
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

export const immersionFooter: FooterContent = {
  blurb: 'A private full-day sanctuary with Michelle J. Lamont. Two in-person apertures each month.',
  exploreTitle: 'The Immersion',
  explore: [
    { href: '#what-you-receive', label: 'What You Receive' },
    { href: '#day', label: 'A Day Inside' },
    { href: '#pricing', label: 'Investment' },
    { href: '#apply', label: 'Apply' },
    { href: '/academy', label: 'The Academy' },
  ],
  disclaimer: 'The Immersion is spiritual mentorship. It is not a substitute for licensed medical or psychological care. Deposits in the sample are described as non-refundable.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
};

export const immersionHero = {
  kicker: 'Private 1-on-1 Full-Day In-Person Calibration',
  title: 'The Immersion',
  body: 'A private, bespoke energetic sanctuary where we collapse timelines, dissolve subconscious scarcity, and anchor your highest reality in a single unforgettable day.',
  where: 'Held privately with Michelle J. Lamont at a secluded luxury sanctuary in the Dallas/Fort Worth area, or arranged as a VIP destination fly-in.',
  proofs: ['100% Confidential VIP Atmosphere', 'Dallas Sanctuary or Destination Fly-In', 'Strictly 2 Apertures Monthly'],
  image: images.sunsetBeach,
};

export const portalIntro = {
  eyebrow: 'The Energetic Threshold',
  title: 'This Is Your Portal',
  quote: 'When you change your frequency in the physical room with someone holding divine authority, the timeline you have waited years for happens in hours.',
  paragraphs: [
    'You have read the books. You have listened to the podcast episodes. You have meditated, affirmed, and strived. Yet there are moments in your spiritual and financial evolution where digital calls and one-hour Zoom sessions cannot hold the sheer volume of transformation your soul is demanding.',
    'The Immersion is a full-day private container designed for leaders, visionaries, empaths, and executives who need an immediate, cellular recalibration. In Michelle’s physical presence, the energetic interference that keeps you in looping self-sabotage is pinpointed, exposed, and lovingly dissolved.',
    'We do not leave the sanctuary until your nervous system feels completely safe holding the extraordinary abundance, love, and sovereignty that belongs to you.',
  ],
  points: [
    { title: 'Ancestral Cleansing', body: 'Eradicating inherited vows of poverty, martyrdom, and silence.' },
    { title: 'Somatic Safety', body: "Calibrating your nervous system so massive inflows don't trigger panic." },
    { title: 'Timeline Collapse', body: 'Dissolving decades of waiting into immediate energetic embodiment.' },
  ],
};

export const sound = {
  quote: 'In this room, you will hear what spirit has been trying to tell you for forty years.',
  title: 'Listen: 432Hz Crystal Singing Bowl Alignment Transmission',
  meta: 'The sample listed this sample as 03:33.',
  embedLabel: '432Hz audio embed. No audio file is connected.',
  caption: 'Every Immersion Day concludes with Michelle playing 432Hz quartz crystal bowls over your body, locking the new energetic frequency into every cell of your physiology.',
  image: images.forestLight,
};

export const receive = {
  eyebrow: 'Comprehensive Architecture',
  title: 'What You Receive',
  intro: 'This is not simply a single day—it is a closed, 60-day continuum of preparation, physical recalibration, and post-immersion integration.',
  coreTitle: '6-to-7 Hour In-Person Private Immersion Day',
  coreSubtitle: 'Complete Nervous System & Quantum Timeline Recode',
  coreBody: 'You and Michelle spend an undivided day in a secluded luxury sanctuary. We unpack every layer of unconscious resistance, rewire your autonomic response to wealth, and activate your highest divine channel.',
  points: [
    'One-on-One Intimate Deep Dive: Direct channeled Akashic guidance tailored exclusively to your destiny.',
    'Somatic Nervous System Recoding: Releasing the physical stored trauma of scarcity, debt, and abandonment.',
    'Bespoke 432Hz Sound Healing Bath: Quartz singing bowl frequency alignment to seal your new receptive vibration.',
    'Curated Organic Gourmet Lunch & Refreshments: Clean, high-vibrational nourishment provided throughout the day.',
    'Pre-Energy Alignment Call: Prior to your immersion date, Michelle conducts an energetic scan and private diagnostic session.',
    'Three Post-Immersion Integration Calls: Over the following 6 weeks, (3) 30-minute private Zoom sessions.',
    'Full Lifetime Access to MMA ($1,997 Value): All 8 foundational video modules, daily 333 alignment hypnoses, and the private community.',
  ],
};

export const day = [
  { time: '10:00 AM', title: 'Arrival & Sanctuary Grounding', body: 'Sacred cleansing and intention anchoring. Aromatic herbal aura clearing, heart-opening ceremonial tea, and a somatic grounding ritual.' },
  { time: '11:30 AM', title: 'The Subconscious Crucible', body: 'Ancestral contract erasure and shadow interrogation. Michelle identifies the childhood contract that makes the nervous system contract around money, visibility, or love.' },
  { time: '01:00 PM', title: 'Conscious Repose', body: 'Curated organic gourmet lunch and sensory reset, tailored to dietary needs.' },
  { time: '02:15 PM', title: 'Akashic Quantum Alignment', body: 'Direct channeled strategy and reality recoding. Contracts, financial inflows, book releases, or corporate pivots.' },
  { time: '04:00 PM', title: 'The Sealing Ceremony', body: '432Hz quartz sound bath and timeline anchor over the chakras.' },
];

export const who = [
  { title: 'You have hit an invisible ceiling you cannot think your way through', body: 'You already have success, status, or intelligence, but your nervous system is stuck in an unconscious fight-or-flight boundary.' },
  { title: 'You are exhausted by years of intellectual, talk-only therapies', body: 'You understand your trauma conceptually, but your body is still experiencing the panic, contraction, and self-sabotage.' },
  { title: 'You crave Michelle’s undivided, in-person energetic focus', body: "You don't want a group zoom room or a crowded seminar; you want seven hours of customized, high-precision spiritual surgery." },
];

export const plans = [
  { name: 'Pay in Full Sovereign', price: '$6,500', detail: 'One-time full investment', body: 'Complete Immersion Day + 3 Integration Calls + Full MMA Academy access.', bonus: 'Included Exclusive Bonus: 30 Days of Direct Daily Voxer Voice Mentorship ($2,500 Value)', cta: 'Placeholder: pay in full' },
  { name: '2-Payment Recalibration', price: '2 × $3,400', detail: 'First payment reserves your date', body: 'Second payment due 14 days prior to your sanctuary date. Includes the day, 3 integration calls, and lifetime MMA access.', bonus: '', cta: 'Placeholder: 2-payment plan' },
  { name: '3-Payment Expansion', price: '3 × $2,350', detail: 'Flexible monthly structure', body: 'Designed for high-growth visionaries preferring maximum monthly cash flow flexibility. Includes the day, 3 integration calls, and lifetime MMA access.', bonus: '', cta: 'Placeholder: 3-payment plan' },
];

export const legal = [
  'Because Michelle reserves an entire calendar day exclusively for you and prepares your energetic field weeks in advance, all deposits and payments are strictly non-refundable. Rescheduling requests must be submitted at least 21 days prior to your agreed date.',
  "Travel and lodging expenses to Dallas/Fort Worth (or agreed destination) are the client's responsibility.",
  'Full confidentiality NDA is executed prior to the immersion day for complete VIP privacy.',
];

export const proof = {
  quote: 'Within 72 hours of leaving our Immersion Day, the $1.2M partnership contract that had been stalled for nine months was signed with zero resistance.',
  body: "I didn't need another business consultant; I needed Michelle to pull the subconscious parasite of fear out of my solar plexus. She did exactly that. My marriage deepened, my health restored, and our company had its highest quarter in ten years.",
  name: 'G. Reynolds',
  detail: 'Tech Founder & Managing Partner',
  note: 'Verified VIP Immersion Client',
  image: images.michellePortrait2022,
};

export const immersionApply = {
  title: 'Apply to Step Inside The Immersion',
  body: 'Because only 2 private in-person immersion dates are opened each calendar month, please provide thoughtful responses below. Michelle and her executive team review every inquiry personally.',
  note: 'Placeholder form. Checkout and the application are not connected. Nothing is sent.',
  locations: ["Michelle's Private Sanctuary (Dallas / Fort Worth DFW)", 'Destination Fly-In (Custom Location - Additional travel fee applies)', 'Virtual Full-Day Immersion (Zoom Broadcast Studio)'],
  timing: ['Immediate (Next 30 Days)', 'Next Quarter', 'Flexible / First Available Aperture'],
  investments: ['Pay in Full Sovereign ($6,500 - Includes 30-Day Voxer Bonus)', '2 Payments (2 × $3,400)', '3 Payments (3 × $2,350)'],
  button: 'Placeholder: immersion application (not connected)',
  footnote: 'Applications receive strict executive review within 24–48 hours.',
};
