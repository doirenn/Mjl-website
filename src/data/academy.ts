import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const academySeo = {
  title: 'Manifesting Miracles Academy™ | Memberships & Community',
  description:
    'Clear blocks, heal energy, and amplify your manifestation power inside the Manifesting Miracles Academy. $22.22 per month, cancel anytime, replays included.',
  ogImage: images.forestLight.src,
  ogAlt: images.forestLight.alt,
};

export const academyAnnouncement: Announcement = {
  badge: 'Special Invitation',
  emphasis: 'Your First 14 Days Are 100% Free:',
  text: 'Cancel anytime • Replays always included',
  links: [
    { href: '#pricing', label: 'View Membership Plans', tone: 'underline' },
    { href: '#placeholder', label: 'Placeholder: Thinkific trial', tone: 'gold' },
  ],
};

export const academyCtas = [
  {
    href: '#pricing',
    label: "What's Included",
    className:
      'hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100/80 text-brand-deepPurple hover:bg-purple-200 transition-all',
  },
  {
    href: '#placeholder',
    label: 'Placeholder: 14-day trial',
    className:
      'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5',
  },
];

export const academyFooter: FooterContent = {
  mark: 'Manifesting Miracles Academy™',
  blurb:
    'The held sanctuary for leaders, visionaries, and spiritual empaths. Transforming subconscious scarcity into unconditional divine miracles.',
  exploreTitle: 'Academy Directory',
  explore: [
    { href: '#what-you-get', label: 'Monthly Deliverables' },
    { href: '#pricing', label: 'Pricing & Plans' },
    { href: '/sacred-containers', label: '1:1 VIP Mentorship' },
    { href: '/podcast', label: 'Manifesting Miracles Podcast' },
    { href: '/about', label: 'About Michelle J. Lamont' },
  ],
  legalTitle: 'Subscription Integrity',
  disclaimer:
    'All Academy subscriptions come with a 14-day free trial. If you remain enrolled, your card will be billed $22.22/month or $249/year. You may cancel at any moment with 1 click in your profile.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved. Manifesting Miracles™ is a registered trademark.',
  signoff: 'Designed with conscious vibration and alignment.',
  supportLabel: 'Academy Support Desk',
  supportHref: '/contact',
};

export const academyHero = {
  eyebrow: 'Where Science, Shadow Work & Spirit Collide',
  titleLead: 'Clear Blocks, Heal Energy &',
  titleAccent: 'Amplify Your Manifestation Power',
  priceLine: 'Only $22.22/month • Cancel Anytime • Replays Always Included',
  paragraphs: [
    'If you\'ve been feeling overwhelmed… anxious… stuck in loops you can\'t break… or spiritually disconnected, you are not alone.',
    'And you don\'t need another generic course. You don\'t need another endless journal prompt. You don\'t need another toxic positivity "just think good thoughts" solution. You need support that holds you.',
  ],
  strongBits: ['you are not alone', 'You need support that holds you.'],
  primary: { href: '#placeholder', label: 'Placeholder: Thinkific 14-day trial' },
  secondary: { href: '#what-you-get', label: 'Explore Monthly Deliverables ↓' },
  proofs: [
    { icon: 'fa-solid fa-shield-halved', iconClass: 'text-emerald-600', label: 'First 14 Days 100% Free' },
    { icon: 'fa-solid fa-calendar-check', iconClass: 'text-brand-amethyst', label: 'Cancel Anytime with 1 Click' },
    { icon: 'fa-solid fa-video', iconClass: 'text-brand-sunsetPeach', label: 'Full Video & Audio Replays Included' },
  ],
  image: images.forestLight,
  quoteEyebrow: 'Held in Sisterhood',
  quote: 'A sanctuary where you are witnessed, regulated, and reminded who you are.',
  membersLabel: 'Global Members',
  membersValue: '500+ Active Souls',
  audioEyebrow: 'Sample Member Audio Transmission',
  audioTitle: 'Listen: Monday Morning Abundance Call Activation (Sneak Peek)',
  audioBadge: 'Inside MMA',
  audioCaption: 'Every Monday begins with Michelle grounding your nervous system into receiving mode before your week even starts.',
  embedLabel: 'Monday morning audio embed. No audio file is connected.',
};

export const whySection = {
  eyebrow: 'The Paradigm Shift',
  title: 'Why You Don’t Need Another Course',
  intro:
    'Traditional digital courses dump 40 hours of video lectures on you, leaving you overwhelmed, alone, and trapped in intellectual analysis.',
  cards: [
    {
      icon: 'fa-solid fa-heart-crack',
      iconClass: 'text-rose-400',
      title: 'The Course Fatigue Loop',
      body: 'You buy a $500 program, watch 3 modules, get triggered or busy, feel guilty, and abandon it. You don\'t need more cognitive information; you need a consistent energetic baseline.',
      foot: 'Traditional Model',
      featured: false,
    },
    {
      icon: 'fa-solid fa-ban',
      iconClass: 'text-amber-500',
      title: 'Toxic Positivity Gaslighting',
      body: 'Being told to "high-vibe only" when your nervous system is in survival mode causes chronic subconscious shame. Real miracles require holding space for your grief and shadow.',
      foot: 'Surface Law of Attraction',
      featured: false,
    },
    {
      icon: 'fa-solid fa-hands-holding-sparkles',
      iconClass: 'text-brand-sunsetPeach',
      title: 'The Manifesting Miracles Sanctuary',
      body: 'A living, breathing membership where you are held every single week. Live Monday calls, full moon rituals, somatic resets, and direct voice notes from Michelle in your pocket.',
      foot: 'The MMA Sanctuary ($22.22/mo)',
      featured: true,
    },
  ],
};

export const monthly = {
  eyebrow: 'The Monthly Rhythm',
  title: '🌈 What You Get Every Month Inside MMA',
  intro:
    'Every element is intentionally calibrated to regulate your autonomic nervous system and open your spiritual receiving channels.',
  items: [
    { emoji: '🌟', title: 'Monday Morning Abundance Call', body: 'Start your week grounded, aligned, and emotionally regulated. Each session supports your nervous system and sets your mind into active receiving mode.', foot: 'Weekly Live + Replay' },
    { emoji: '💬', title: 'Private Members-Only Community', body: 'A judgment-free space where you are seen, supported, and held. Weekly check-ins help you feel less alone, deeply validated, and continually empowered.', foot: '24/7 Sisterhood Sanctuary' },
    { emoji: '🌕', title: 'Full Moon Ceremony (Live + Replay)', body: 'Release what\'s heavy. Call in what\'s yours. Every month is a reset — spiritually, emotionally, and energetically beneath the lunar vortex.', foot: 'Monthly Live Ritual' },
    { emoji: '📜', title: 'Full Moon Ritual PDF Guide', body: 'Guided prompts + ceremonial rituals to deepen your monthly energy work and help you seamlessly integrate the ceremony into your daily routine.', foot: 'Downloadable Codex' },
    { emoji: '🔮', title: 'Monthly Energy Healing Session', body: 'Clear old patterns, dissolve fear, and amplify abundance. These remote healing transmissions calm your body and activate your intuitive receiving channels.', foot: 'Somatic Recalibration' },
    { emoji: '📓', title: 'Weekly Focus Workbook', body: 'Short, powerful exercises that help you stay regulated, anchored, and intentional without adding hours of homework to your busy life.', foot: 'Practical Alignment' },
    { emoji: '🎤', title: 'Michelle\'s Weekly Voice Pop-Ins', body: 'Direct voice notes, energetic weather forecasts, and mini-teachings from Michelle. The kind of intimate support that makes you feel deeply witnessed.', foot: 'Direct Voice Channel' },
    { emoji: '🦋', title: 'Monthly Channeled Workshop', body: 'Deep dives into manifestation mechanics, nervous system healing, money frequency, self-worth, intuition, ritual work, and energetic alignment.', foot: 'Interactive Masterclass' },
  ],
  cta: { href: '#placeholder', label: 'Placeholder: Thinkific trial after $22.22/month' },
};

export const courses = {
  eyebrow: 'Unlimited On-Demand Vault',
  title: 'Courses & Transmissions Included In Your Membership',
  intro: 'As an active MMA member, you receive immediate, unrestricted access to Michelle\'s flagship library of transformational mini-courses.',
  items: [
    {
      image: images.courseNervousSystem,
      badge: 'Flagship Course',
      title: '21-Day Nervous System Reset for Money Blocks',
      body: 'Rewire the vagus nerve and somatic flight-or-fight boundaries that trigger financial sabotage and contraction.',
      included: 'Included Free in MMA',
      value: 'Value $199',
    },
    {
      image: images.courseRichRegulated,
      badge: 'Masterclass',
      title: 'Rich & Regulated: The Wealth Capacity Portal',
      body: 'How to hold five- and six-figure months without physical burnout, impostor syndrome, or energetic panic.',
      included: 'Included Free in MMA',
      value: 'Value $222',
    },
    {
      image: images.courseShadowJournal,
      badge: 'Shadow Work',
      title: 'Wreck This Shadow Journal: To Create Is to Destroy',
      body: 'A raw somatic destruction ritual to burn vows of poverty, unworthiness, and ancestral silence out of your identity.',
      included: 'Included Free in MMA',
      value: 'Value $97',
    },
  ],
};

export const pricing = {
  eyebrow: 'Affordable Sovereignty',
  title: 'Choose Your Membership Portal',
  intro: 'Every plan starts with a completely free 14-day trial. Experience the calls, the rituals, and the community before paying a single cent.',
  note: 'Placeholder: Thinkific is not connected. These buttons do not start a trial or charge a card.',
  plans: [
    {
      id: 'monthly',
      featured: false,
      badge: 'Most Flexible',
      aside: 'Cancel Anytime',
      title: 'Monthly Membership',
      price: '$22.22',
      period: '/ month',
      trial: '14-Day Free Trial Included',
      body: 'Complete monthly access to all live calls, community check-ins, full moon ceremonies, and courses.',
      points: [
        'Monday Morning Abundance Calls (Live + Replay)',
        'Monthly Full Moon Ceremony + Ritual PDF',
        'Monthly Remote Energy Healing Session',
        'Private Members Community & Weekly Workbooks',
        'Michelle’s Direct Weekly Voice Pop-Ins',
        'Instant access to all courses in library',
      ],
      cta: 'Placeholder: monthly trial',
    },
    {
      id: 'annual',
      featured: true,
      ribbon: 'Best Value • 2 Months Free',
      badge: 'Annual Alignment',
      aside: 'Saves ~$18/Yr',
      title: 'Annual Sovereign Pass',
      price: '$249.00',
      period: '/ year',
      trial: '14-Day Free Trial Included',
      body: 'Lock in your energetic container for the entire year. Commit to long-term manifestation sovereignty with zero interruption.',
      points: [
        'Everything in the Monthly Plan for 12 months',
        'Equivalent to only $20.75/month',
        'Priority hot-seat Q&A during live calls',
        'Exclusive Annual Manifestation Workbook Bundle',
        'Lifetime replay vault access during membership',
      ],
      cta: 'Placeholder: annual trial',
    },
    {
      id: 'vip',
      featured: false,
      badge: 'VIP Bundle',
      aside: 'Limited Apertures',
      title: 'MMA Founding 50 VIP',
      price: '$499.00',
      period: '/ year',
      trial: 'Includes Private 1:1 Session',
      body: 'The ultimate high-touch combination of community membership plus private 1-on-1 energetic mentorship with Michelle.',
      points: [
        'Everything in MMA Annual Pass',
        '(1) Private 30-Min 1:1 Session with Michelle',
        'Biannual Money Manifestation Workshops',
        'Direct VIP Priority Support Channel',
        '15% discount on in-person retreats & VIP days',
      ],
      cta: 'Placeholder: VIP enrollment',
    },
  ],
};

export const memberStories = {
  eyebrow: 'Real Sisterhood Proof',
  title: 'What Happens Inside The Academy',
  rating: 'Over 500+ Active Members Worldwide',
  items: [
    {
      initials: 'KM',
      tone: 'bg-brand-sunsetPeach/20 text-brand-sunsetPeach',
      title: 'The Monday calls completely reset my anxiety',
      quote: 'Before MMA, I spent Mondays dreading the week in a state of panic. Michelle\'s Monday morning calls regulate my nervous system so deeply that I walk into work radiating certainty. I got promoted within 4 months of joining!',
      name: 'Kara Miller',
      detail: 'MMA Member for 9 Months',
    },
    {
      initials: 'DR',
      tone: 'bg-purple-100 text-brand-amethyst',
      title: '$10,400 showed up in my account',
      quote: 'Module 3 of the 21-day reset showed me that I was chemically repelling money because I was terrified of being taken advantage of. Once I cleared that vow, $10,400 landed in my account from two unexpected clients.',
      name: 'Dr. Rachel E.',
      detail: 'MMA Member & Holistic Practitioner',
    },
    {
      initials: 'ST',
      tone: 'bg-emerald-100 text-emerald-800',
      title: 'For $22 a month, this is pure magic',
      quote: 'I have paid $3,000 for high-end masterminds that didn\'t provide half the love, authentic intimacy, and channeled precision that Michelle brings to MMA every single week. Best investment I\'ve ever made in myself.',
      name: 'Samantha T.',
      detail: 'Creative Director & MMA Member',
    },
  ],
};

export const academyFaqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'When you sign up, you receive immediate, unrestricted access to the entire Academy for 14 full days. You can attend live Monday calls, participate in full moon ceremonies, and download all materials. You will not be charged until day 14, and you can cancel anytime with a single click inside your member settings.',
  },
  {
    question: 'What if I cannot attend the calls live?',
    answer: 'Every single call, ceremony, and workshop is recorded in high-definition video and clean audio. Replays are posted inside your member portal within 2 to 4 hours with downloadable ritual worksheets, so you never miss a transmission no matter your timezone.',
  },
  {
    question: 'Can I cancel whenever I want?',
    answer: 'Yes, absolutely. There are zero contracts, commitments, or cancellation fees. You have complete sovereignty over your subscription and can cancel directly from your profile dashboard at any time.',
  },
  {
    question: 'Is this suitable for someone who has never practiced manifestation before?',
    answer: 'Yes! MMA is specifically designed to be accessible, grounded, and free of confusing esoteric jargon. Michelle’s somatic focus makes manifestation tangible and physical rather than vague or theoretical.',
  },
];

export const academyClose = {
  eyebrow: 'Your Miracle Baseline',
  title: 'Step Inside The Held Sanctuary',
  body: 'Stop doing this alone. Join 500+ women who are releasing scarcity, anchoring sovereignty, and manifesting impossible realities together.',
  cta: { href: '#placeholder', label: 'Placeholder: Thinkific 14-day trial' },
};
