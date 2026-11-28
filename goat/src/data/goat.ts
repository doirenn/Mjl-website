/**
 * Edita este archivo para cambiar precios, fechas, enlaces e imagenes.
 * Los textos de la pagina salen de aqui. Si cambias un valor de `offer`,
 * las frases que usan ese valor se actualizan solas.
 *
 * Fotos: cada `src` apunta a un archivo en public/images/.
 * Las de Pinterest son referencia sin licencia, solo para revision.
 * `sourceUrl` guarda el origen. El retrato de Michelle es una foto real.
 * Si `src` queda vacio o el archivo no existe, se ve el bloque marcado.
 */

export type Inline = {
  text: string;
  tone?: 'strong' | 'italic';
};

export type ImageSlot = {
  src: string;
  suggestedSrc: string;
  alt: string;
  placeholder: string;
  sourceUrl: string;
};

export const offer = {
  seats: '25',
  bonusSeats: '15',
  legendCapacity: '4',
  presalePrice: '$777',
  standardPrice: '$888',
  spotlightPrice: '$2,222',
  legendPrice: '$5,555',
  bonusLength: '30-minute',
  bonusValue: '$111',
  bonusWindow: 'February to December 2027',
  kickoffWeekday: 'Sunday',
  kickoffMonthDay: 'January 10',
  kickoffYear: '2027',
  kickoffShort: 'Jan 10, 2027',
  firstClassFull: 'Tuesday, January 12',
  firstClassMonthDay: 'January 12',
  presaleDeadline: 'January 7',
  presaleDeadlineShort: 'Jan 7',
  season: 'January \u2013 April 2027',
  liveTime: '7 PM ET',
  ecuadorJanFeb: '7 PM Ecuador',
  ecuadorApril: '6 PM Ecuador',
  goatGateTuesday: 'Tuesday, February 2',
  goatGateDate: 'Saturday, February 6',
  saturdayTime: 'Saturday time to be announced',
  replacedClass: 'Thursday, February 4',
  week1: ['Tuesday, January 12 &', 'Thursday, January 14'],
  week2: ['Tuesday, January 19 &', 'Thursday, January 21'],
  week3: ['Tuesday, January 26 &', 'Thursday, January 28'],
  aprilDates: 'Tuesday, April 6 \u00b7 Thursday, April 8 \u00b7 Tuesday, April 13 \u00b7 Thursday, April 15',
};

export const checkout = {
  tier1: '#checkout-tier1',
  tier2: '#checkout-tier2',
  tier3: '#checkout-tier3',
};

const gateTitle = `${offer.goatGateTuesday} & ${offer.goatGateDate} \u2014 The GOAT Gate`;
const kickoffFull = `${offer.kickoffWeekday}, ${offer.kickoffMonthDay}, ${offer.kickoffYear}`;
const kickoffLong = `${offer.kickoffMonthDay}, ${offer.kickoffYear}`;

const bonusGet = `The first ${offer.bonusSeats} to join get a free ${offer.bonusLength} private session with Michelle (${offer.bonusValue} value), bookable ${offer.bonusWindow} after the last live class in February.`;
const bonusReceive = `The first ${offer.bonusSeats} to join receive a free ${offer.bonusLength} private session with Michelle (${offer.bonusValue} value).`;

export const seo = {
  title: 'GOAT 2027: Your Greatest Year Ever \u2014 Michelle J. Lamont',
  description: `GOAT means Greatest Of All Time. Step into the spotlight, take up space, and claim your biggest year with Michelle J. Lamont. ${offer.seats} seats. Kickoff ${kickoffLong}.`,
  canonical: 'https://goat.michellejlamont.com/',
  ogImage: '/og.png',
  ogImageAlt: 'GOAT 2027 navy and gold mark',
};

export const images = {
  heroBackground: {
    src: '/images/hero.jpg',
    suggestedSrc: '/images/hero.jpg',
    alt: 'A woman speaking on stage to an audience',
    placeholder: 'IMAGE: hero background',
    sourceUrl: 'https://i.pinimg.com/originals/11/6d/26/116d261c19c4c87392e7d7f3c1a0f8f4.jpg',
  },
  ownTheRoom: {
    src: '/images/own-the-room.jpg',
    suggestedSrc: '/images/own-the-room.jpg',
    alt: 'A group of friends toasting together',
    placeholder: 'IMAGE: Own The Room',
    sourceUrl: 'https://i.pinimg.com/originals/64/29/db/6429dbb16d98cbb60b1826b15b2d6a01.jpg',
  },
  winterArc: {
    src: '/images/winter-arc.jpg',
    suggestedSrc: '/images/winter-arc.jpg',
    alt: 'A woman in a black fur coat seated at a Paris cafe',
    placeholder: 'IMAGE: Winter Arc',
    sourceUrl: 'https://i.pinimg.com/originals/ad/f1/9c/adf19c5c468cf7e5a2d6a2aca5ad09f9.jpg',
  },
  theCrown: {
    src: '/images/the-crown.jpg',
    suggestedSrc: '/images/the-crown.jpg',
    alt: 'Women in gold dresses toasting on a rooftop',
    placeholder: 'IMAGE: The Crown',
    sourceUrl: 'https://i.pinimg.com/736x/3a/5f/26/3a5f26ca58cf8da5f88e30ef4361d2a5.jpg',
  },
  pillarSpotlight: {
    src: '/images/pillar-spotlight.jpg',
    suggestedSrc: '/images/pillar-spotlight.jpg',
    alt: 'A woman speaking into a microphone in front of a crowd',
    placeholder: 'IMAGE: Step into the spotlight',
    sourceUrl: 'https://i.pinimg.com/originals/ab/e7/2a/abe72a014e8f61f796750b8adea019d2.jpg',
  },
  pillarOpportunities: {
    src: '/images/pillar-opportunities.jpg',
    suggestedSrc: '/images/pillar-opportunities.jpg',
    alt: 'A woman in sunglasses holding a coffee cup',
    placeholder: 'IMAGE: Find opportunities everywhere',
    sourceUrl: 'https://i.pinimg.com/originals/52/a8/c4/52a8c42f7e8aa17046602ec13d0af9e1.jpg',
  },
  pillarGreatest: {
    src: '/images/pillar-greatest.jpg',
    suggestedSrc: '/images/pillar-greatest.jpg',
    alt: 'A man in a cream suit reading at a cafe',
    placeholder: 'IMAGE: Become the greatest version of yourself',
    sourceUrl: 'https://i.pinimg.com/originals/36/bf/e2/36bfe2417092051e9c57e2c2b8dc66c3.jpg',
  },
  michelle: {
    src: '/images/michelle.jpg',
    suggestedSrc: '/images/michelle.jpg',
    alt: 'Michelle J. Lamont',
    placeholder: 'IMAGE: Michelle J. Lamont photo',
    sourceUrl: 'repo astro-rebuild public/images/michelle-portrait-2023.jpg',
  },
} satisfies Record<string, ImageSlot>;

export const topBar = {
  brand: 'Michelle J. Lamont',
  seats: `${offer.seats} Seats Only`,
  kickoff: `Kickoff ${offer.kickoffShort}`,
  presale: `Presale ${offer.presalePrice}`,
  checkoutUrl: checkout.tier1,
};

export const hero = {
  eyebrow: '2027 Lock-In Container',
  season: offer.season,
  titleLead: 'GOAT 2027:',
  titleAccent: 'Your Greatest Year Ever',
  intro: [
    {
      text: 'This is the year you put yourself on display. Stop waiting for permission. Stop playing small. ',
    },
    { text: 'GOAT means Greatest Of All Time', tone: 'strong' },
    {
      text: ', and this is how you become the greatest version of yourself. Step into the spotlight. Take up space. Own every room you walk into. Find opportunities everywhere you go.',
    },
  ] satisfies Inline[],
  tagline: 'Come in as you are. Leave with the crown.',
  moods: [
    { image: images.ownTheRoom, caption: 'Own The Room' },
    { image: images.winterArc, caption: 'Winter Arc' },
    { image: images.theCrown, caption: 'The Crown' },
  ],
  cardKicker: '2027 IS YOUR YEAR',
  cardStatus: 'Presale Open',
  cardTitle: 'GOAT 2027: Your Greatest Year Ever',
  cardBody:
    '6 live weeks with Michelle J. Lamont, recorded teachings & workbooks in February and March, plus a private Voxer container from January through April.',
  priceLabel: 'Presale Investment',
  price: offer.presalePrice,
  priceAfter: `${offer.standardPrice} after`,
  priceWindow: `First ${offer.bonusSeats} seats or ${offer.presaleDeadlineShort}`,
  payFull: `Pay in full ${offer.presalePrice}`,
  bonusLabel: 'Presale Bonus:',
  bonusBody: bonusReceive,
  cta: 'Claim Your Spot',
  checkoutUrl: checkout.tier1,
  footnote: `${offer.seats} seats. Kickoff ${kickoffLong}.`,
  background: images.heroBackground,
};

export const pillars = {
  eyebrow: 'The 2027 Shift',
  titleLead: 'Stop playing small.',
  titleAccent: 'Take the crown.',
  items: [
    {
      number: '01',
      title: 'Step into the spotlight',
      body: 'Learn how to take up space, own every room you walk into, and put yourself on display, as the boldest version of yourself.',
      footer: 'Presence & Authority',
      image: images.pillarSpotlight,
    },
    {
      number: '02',
      title: 'Find opportunities everywhere',
      body: 'Train the skill of looking at every situation and asking, \u201cHow can I make that into something?\u201d so opportunities become something you create, not something you wait for.',
      footer: 'The Opportunity Lens',
      image: images.pillarOpportunities,
    },
    {
      number: '03',
      title: 'Become the greatest version of yourself',
      body: `A live container from January through April, with recorded teachings and workbooks in between, to claim your biggest year. Limited to ${offer.seats} seats.`,
      footer: '25-Seat Intimate Container',
      image: images.pillarGreatest,
    },
  ],
};

export const about = {
  eyebrow: 'The Container',
  title: 'About the course',
  quote:
    '\u201cGOAT means Greatest Of All Time. It is also a play on words: 2027 is the Year of the Goat, and this is the year you become the greatest version of yourself.\u201d',
  facts: [
    { label: 'Live Format', title: '6 Live Weeks', detail: 'Jan\u2013Feb + April Comeback' },
    { label: 'Lunar New Year', title: 'The GOAT Gate', detail: offer.goatGateDate },
    { label: 'Feb & March', title: 'Deep Integration', detail: 'Recorded Video/Audio + Workbooks' },
    { label: 'Direct Access', title: 'Private Voxer', detail: 'Jan\u2013April (Separate from MMA)' },
  ],
  paragraphs: [
    [
      { text: 'GOAT means Greatest Of All Time.', tone: 'strong' },
      {
        text: ' It is also a play on words: 2027 is the Year of the Goat, and this is the year you become the greatest version of yourself.',
      },
    ],
    [
      {
        text: 'This is a live program with Michelle J. Lamont, from January to April, for women who are done playing small. If you have been stuck, if you do not see opportunities everywhere you go, if you have never tapped into your richest self, if you are still waiting for someone else to tell you what to do: this is the work. Michelle will teach you how to step into the spotlight, take up space, find opportunities everywhere you go, and be the boldest version of yourself. You will also work with your chart, the nodes, and the Chinese calendar. The spiritual tools are there. ',
      },
      { text: 'The point is the spotlight.', tone: 'strong' },
    ],
    [
      {
        text: 'GOAT Your Greatest Year Ever is 6 live weeks: 4 weeks from January into February, including ',
      },
      {
        text: `The GOAT Gate on ${offer.goatGateDate} (Lunar New Year)`,
        tone: 'strong',
      },
      { text: ', plus 2 weeks in April called ' },
      { text: 'The Comeback', tone: 'strong' },
      {
        text: `. Live classes are Tuesdays and Thursdays at ${offer.liveTime}. February and March are recorded video and audio classes, with a workbook for each month. You also get a private Voxer group with Michelle from January to April, separate from the MMA community. Kickoff is ${offer.kickoffWeekday}, ${offer.kickoffMonthDay}. First live class is ${offer.firstClassFull}. `,
      },
      { text: `There are ${offer.seats} seats.`, tone: 'strong' },
    ],
  ] satisfies Inline[][],
  close:
    'This is for you if you want a different life, and you are ready to stop taking the chance of doing nothing.',
  cta: 'Claim Your Spot',
  checkoutUrl: checkout.tier1,
};

export const michelle = {
  eyebrow: 'Meet Your Teacher',
  captionKicker: 'Your Guide',
  name: 'Michelle J. Lamont',
  image: images.michelle,
  lead: 'Michelle J. Lamont is going to teach you how to be in the spotlight and claim your biggest year.',
  paragraphs: [
    [
      { text: 'Her rare skill is this: she looks at every situation and asks, ' },
      { text: 'how can I make that into something?', tone: 'italic' },
      {
        text: ' She knows how to turn any space into a space that creates opportunities, and that is what she will teach you.',
      },
    ],
    [
      {
        text: 'She lives in Tampa, Florida. She is not a city spokesperson, and she has never done television there except for one interview. And still, when a hurricane hits, national media have called and asked her to come on air. That is the point of this work: being so fully yourself that the spotlight finds you, and you know how to walk into it.',
      },
    ],
    [
      {
        text: 'People have told her she sees fifty things when the average person would not see one. In GOAT she will teach you how to look at your chart, the nodes, and the Chinese calendar. The whole point is still this: take up space, find opportunities everywhere you go, and become the boldest version of yourself.',
      },
    ],
  ] satisfies Inline[][],
  quote: '\u201cYou come in as your old self. You leave with the crown.\u201d',
};

export const curriculum = {
  eyebrow: 'The Curriculum',
  title: 'Inside the GOAT 2027 Arc',
  intro:
    'Five structured chapters guiding you from January kickoff through The GOAT Gate, deep February\u2013March integration, and April\u2019s Comeback.',
  chapters: [
    {
      number: '01',
      label: 'Chapter One',
      title: 'Welcome to Your Greatest Year',
      aside: 'Kickoff & 2027 Alignment',
    },
    {
      number: '02',
      label: 'Chapter Two',
      title: 'Stepping into the Spotlight',
      aside: 'Taking Up Space & Owning Rooms',
    },
    {
      number: '03',
      label: 'Chapter Three',
      title: 'Finding Opportunities Everywhere',
      aside: 'Chart, Nodes & The GOAT Gate',
    },
    {
      number: '04',
      label: 'Chapter Four',
      title: 'Seeing Yourself in the Spotlight',
      aside: 'Feb\u2013Mar Recorded Workbooks',
    },
    {
      number: '05',
      label: 'Chapter Five',
      title: 'The Comeback and Beyond',
      aside: 'April Live Crown Integration',
    },
  ],
};

export const tiers = {
  eyebrow: 'Enrollment Options',
  title: 'Choose your level',
  intro: 'All three levels include the GOAT class.',
  items: [
    {
      id: 'tier1',
      anchor: 'checkout-tier1',
      tone: 'light' as const,
      featured: true,
      badge: `${offer.seats} Seats \u00b7 Presale Active`,
      level: 'Level 01',
      title: 'GOAT Your Greatest Year Ever',
      price: offer.presalePrice,
      priceSuffix: `presale / ${offer.standardPrice} after`,
      struck: offer.standardPrice,
      priceNote: `Presale is ${offer.presalePrice} for the first ${offer.bonusSeats} seats or until ${offer.presaleDeadline}, whichever comes first. Then ${offer.standardPrice}.`,
      checkoutUrl: checkout.tier1,
      inclusions: [
        {
          strong: '6 live weeks',
          rest: ' (January\u2013February + April\u2019s The Comeback)',
        },
        {
          strong: '',
          rest: 'Recorded video & audio classes and monthly workbooks in February and March',
        },
        {
          strong: '',
          rest: 'Private Voxer group with Michelle from January to April (separate from MMA)',
        },
        { strong: '', rest: `${offer.seats} seats total` },
      ],
      bonusLabel: `Presale Bonus (First ${offer.bonusSeats} Seats):`,
      bonusBody: bonusGet,
      cta: 'Claim Your Spot',
    },
    {
      id: 'tier2',
      anchor: 'checkout-tier2',
      tone: 'light' as const,
      featured: false,
      badge: '',
      level: 'Level 02 \u00b7 Year-Long Expansion',
      title: 'GOAT Spotlight',
      price: offer.spotlightPrice,
      priceSuffix: '',
      struck: '',
      priceNote: '',
      checkoutUrl: checkout.tier2,
      inclusions: [
        { strong: 'Everything in GOAT Your Greatest Year Ever', rest: '' },
        { strong: '', rest: 'One group coaching call a month from February to December' },
        { strong: '', rest: 'A small 2-day reset workshop each quarter' },
        { strong: '', rest: 'A short private check-in with Michelle each quarter' },
      ],
      bonusLabel: '',
      bonusBody: '',
      cta: 'Claim GOAT Spotlight',
    },
    {
      id: 'tier3',
      anchor: 'checkout-tier3',
      tone: 'dark' as const,
      featured: false,
      badge: `Limited to ~${offer.legendCapacity} People`,
      level: 'Level 03 \u00b7 Private 1:1 Mastery',
      title: 'GOAT Legend',
      price: offer.legendPrice,
      priceSuffix: '',
      struck: '',
      priceNote: '',
      checkoutUrl: checkout.tier3,
      inclusions: [
        { strong: 'Everything in GOAT Spotlight', rest: '' },
        {
          before: 'A ',
          strong: 'private 1-hour session with Michelle every month',
          rest: ' for 12 months',
        },
        {
          strong: '',
          rest: `Intimate high-touch container limited to about ${offer.legendCapacity} people`,
        },
      ],
      bonusLabel: '',
      bonusBody: '',
      cta: 'Claim GOAT Legend',
    },
  ],
};

export const schedule = {
  eyebrow: 'Calendar & Rhythm',
  title: 'The schedule',
  timeNote: [
    { text: 'Live classes are at ' },
    { text: offer.liveTime, tone: 'strong' },
    {
      text: ` (${offer.ecuadorJanFeb} in January and February; ${offer.ecuadorApril} in April, after the U.S. time change).`,
    },
  ] satisfies Inline[],
  kickoffLabel: 'Kickoff',
  kickoffTitle: kickoffFull,
  kickoffBadge: 'Opening Ceremony',
  weeks: [
    { label: 'Week 1', lines: offer.week1, time: offer.liveTime },
    { label: 'Week 2', lines: offer.week2, time: offer.liveTime },
    { label: 'Week 3', lines: offer.week3, time: offer.liveTime },
  ],
  gateKicker: 'Week 4 \u00b7 Lunar New Year Special',
  gateTime: offer.saturdayTime,
  gateTitle: gateTitle,
  gateEmphasis: 'The GOAT Gate',
  gateBody: `The GOAT Gate: Lunar New Year; this Saturday class replaces ${offer.replacedClass}.`,
  integrationKicker: 'February & March',
  integrationTitle: 'Recorded Video & Audio Classes + Monthly Workbooks',
  integrationBody:
    'Recorded video and audio classes, plus a dedicated workbook for each month while your Private Voxer group stays active.',
  comebackKicker: 'April \u00b7 The Comeback',
  comebackTitle: offer.aprilDates,
  comebackBody: `Live classes at ${offer.liveTime} (${offer.ecuadorApril} in April, after the U.S. time change).`,
  notes: [
    { label: 'Private Voxer:', text: ' January through April.' },
    {
      label: 'Tier Extensions:',
      text: ' GOAT Spotlight continues with monthly group coaching from February to December, plus a quarterly reset and a quarterly private check-in. GOAT Legend adds a private session each month for 12 months.',
    },
  ],
};

export const testimonials = {
  eyebrow: 'Client Proof',
  title: 'What changes when you work with Michelle',
  intro:
    'Real words from women who have already done this work with Michelle: more confidence, more opportunities, more money, and a different way of seeing themselves.',
  items: [
    {
      label: 'Transformational Review',
      quote:
        '\u201cBefore this course, I was stuck in a career rut and undervaluing myself in all my relationships, especially the one with myself. Six weeks later, I\u2019ve not only secured a substantial salary increase but more importantly \u2013 I now recognize and advocate for my worth with unshakable confidence. \u2026 Now I approach opportunities thinking \u201cI deserve this\u201d instead of \u201cAm I good enough?\u201d \u2026 This isn\u2019t just theory; it\u2019s a blueprint to get paid what you\u2019re worth.\u201d',
      name: '\u2014 Sully',
      theme: 'Confidence & Worth',
    },
    {
      label: 'Manifesting Manifestor\u2019s Masterclass',
      quote:
        '\u201cHave I manifested money working with Michelle? Yes\u2026 over 6 figures!! Did I manifest money during the masterclass? Yes, I did\u2026 but this course was not about the money for me\u2026 with this course came an awakening of self awareness\u2026 self love\u2026 self worth\u2026 and finding my power. I no longer accept anything or anyone that is not for my best interest and highest good\u2026 I no longer accept settling for less than I deserve\u2026\u201d',
      name: '\u2014 Laura M.',
      theme: 'Over 6 Figures & Power',
    },
    {
      label: '6 Weeks to Success',
      quote:
        '\u201cThe beginning was hard because I was filled with so much fear! Michelle held me through the process and gave me tools to find my way out of it! The rest of the weeks I felt like I was flying! Through learning and growing, I became more confident in myself than I have every been! \u2026 You won\u2019t recognize yourself at the end and you won\u2019t regret it!\u201d',
      name: '\u2014 Jessica',
      theme: '6-Week Breakthrough',
    },
    {
      label: 'Life Changing',
      quote:
        '\u201cSince meeting Michelle last year scrolling through Tiktok my life has transformed in every way. \u2026 I finally have found who I am and what my purpose is. \u2026 SHES A MANIFESTING MAGNET! Once you take 1 live class you\u2019ll keep coming back for more. The best part is she connects spirituality with science, for me that\u2019s what made it all click.\u201d',
      name: '\u2014 Devin S.',
      theme: 'Spirituality & Science',
    },
  ],
};

export const faq = {
  eyebrow: 'Details & Clarity',
  title: 'FAQ',
  items: [
    {
      question: 'What does GOAT mean?',
      answer:
        'Greatest Of All Time. It is also a play on the Year of the Goat. The work is about becoming the greatest version of yourself, not about an animal.',
    },
    {
      question: 'Who is this for?',
      answer:
        'Women who are ready to stop playing small, take up space, and claim their biggest year. If you have been stuck, doubtful, or waiting for permission, this is for you.',
    },
    {
      question: 'What is included in Tier 1?',
      answer: `6 live weeks, recorded teachings and workbooks in February and March, and a private Voxer group from January to April. Kickoff is ${offer.kickoffMonthDay}. First live class is ${offer.firstClassMonthDay}. Live classes are Tuesdays and Thursdays at ${offer.liveTime}, plus The GOAT Gate on ${offer.goatGateDate}.`,
    },
    {
      question: 'How much is it?',
      answer: `Presale is ${offer.presalePrice} until the first ${offer.bonusSeats} seats are filled, or until ${offer.presaleDeadline}, whichever comes first. After that, the price is ${offer.standardPrice}. GOAT Spotlight is ${offer.spotlightPrice}. GOAT Legend is ${offer.legendPrice}.`,
    },
    {
      question: 'Is there a bonus for joining early?',
      answer: `Yes. ${bonusGet}`,
    },
    {
      question: 'How many seats are there?',
      answer: `${offer.seats} seats in GOAT Your Greatest Year Ever. GOAT Legend is limited to about ${offer.legendCapacity} people.`,
    },
    {
      question: 'What is the difference between the three levels?',
      answer:
        'Tier 1 is the GOAT class (January\u2013April). Spotlight includes the class and adds monthly group coaching, a quarterly reset, and a quarterly private check-in through December. Legend includes Spotlight and adds a private 1-hour session with Michelle every month for 12 months.',
    },
    {
      question: 'Are there refunds?',
      answer: 'All sales are final. No refunds.',
    },
  ],
};

export const finalCta = {
  eyebrow: '2027 Is Your Year',
  title: 'Claim your seat for your greatest year',
  lead: `${offer.seats} seats. Kickoff ${kickoffLong}.`,
  presale: `Presale is ${offer.presalePrice} until the first ${offer.bonusSeats} seats are filled, or until ${offer.presaleDeadline}, whichever comes first. After that, the price is ${offer.standardPrice}.`,
  bonusLabel: 'Presale bonus:',
  bonusBody: bonusGet,
  quote:
    '\u201cThis isn\u2019t just theory; it\u2019s a blueprint to get paid what you\u2019re worth.\u201d',
  quoteName: '\u2014 Sully',
  cta: 'Claim Your Spot',
  checkoutUrl: checkout.tier1,
  refunds: 'All sales are final. No refunds.',
};

export const footer = {
  line: '\u00a9 2027 Michelle J. Lamont \u00b7 GOAT 2027: Your Greatest Year Ever',
};
