import type { Announcement } from './site';
import type { FooterContent } from '../components/Footer.astro';
import { images } from './images';

export const pressSeo = {
  title: 'Media & Press Room | Michelle J. Lamont',
  description:
    'Press kit copy from the sample: bios, story angles, guest appearances, and photos for producers booking Michelle J. Lamont.',
  ogImage: images.michellePortrait2023.src,
  ogAlt: 'Michelle J. Lamont',
};

export const pressAnnouncement: Announcement = {
  badge: 'Press & Media Hub',
  icon: '🎙️',
  emphasis: 'Booking Media Interviews, TV Appearances & Podcast Guest Spots',
  text: '',
  links: [
    { href: '#appearances', label: 'Recent Guest Spots', tone: 'underline' },
    { href: '#placeholder', label: 'Placeholder: press kit ZIP', tone: 'gold' },
  ],
};

export const pressCtas = [
  {
    href: '#request',
    label: 'Placeholder: book the show',
    className: 'inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-sunsetPeach to-brand-warmRose text-white',
  },
];

export const pressFooter: FooterContent = {
  blurb: 'Press copy from the HTML sample. The ZIP, episode clips, and request form are not connected.',
  exploreTitle: 'Press',
  explore: [
    { href: '#appearances', label: 'Appearances' },
    { href: '#bios', label: 'Bios' },
    { href: '#photos', label: 'Photos' },
    { href: '#request', label: 'Request' },
    { href: '/speaking', label: 'Speaking' },
  ],
  disclaimer: 'Press claims come from the sample and still need confirmation.',
  copyright: '© 2026 Michelle J. Lamont. All Rights Reserved.',
};

export const pressHero = {
  kicker: 'Official Press Kit • Broadcast Media • Podcast Guest Authority',
  title: 'Media & Press: Michelle as Speaker',
  quote: "We're not supposed to just survive life. We're meant to thrive.",
  body: 'As a manifestation coach, author, and mindfulness expert, Michelle is a vibrant and passionate speaker. Her mission is guiding audiences past the cards of their circumstances and helping them tap into a higher, self-authored version of themselves.',
  more: 'With over two decades of transformative leadership and a chart-topping global podcast, Michelle brings dynamic conversational energy, unapologetic spiritual clarity, and neuro-somatic solutions to every interview and broadcast studio.',
  proofs: ['Available for TV, Radio & Podcasts', 'Fast 24-Hour Producer Response', 'Broadcast Studio Ready (Shure SM7B + 4K Cam)'],
  image: images.michellePortrait2023,
};

export const appearances = [
  { length: '42 Mins', show: 'Second Wind The Podcast', title: 'How to Do Such Thing As Luck', body: 'Michelle reveals why luck is simply the natural byproduct of quantum readiness. In this conversation, she breaks down how empaths and creatives can systematically dismantle unconscious scarcity to become magnetic to opportunities.', highlight: 'Why wishing creates distance while somatic embodiment creates reality.' },
  { length: '55 Mins', show: 'The Dynamis Phase', title: 'The Magic in Manifesting Pt. 1', body: 'A deep philosophical dive exploring the mechanics of spiritual co-creation, dismantling toxic positivity clichés, and explaining how ancient hermetic principles synchronize with modern neuroplasticity.', highlight: 'The difference between mental affirmation and cellular belief calibration.' },
  { length: '38 Mins', show: '52 Weeks of Hope', title: 'How You Can Shift From Scarcity to Manifesting Miracles', body: 'Michelle shares her raw journey from growing up in an orphanage to becoming an internationally celebrated manifestation guide. She offers actionable practices for listeners enduring grief, transition, or financial setbacks.', highlight: 'How rock bottom is often the catalyst for quantum spiritual awakening.' },
];

export const hooks = [
  { title: 'The Neuroscience Behind Manifestation', body: 'Why traditional "positive thinking" triggers panic in 90% of seekers, and how somatic nervous system regulation physically prepares the body to receive wealth and recognition.', fit: 'Best For: Science & Wellness Shows' },
  { title: 'From Orphanage to Unshakeable Magnetism', body: 'Born and raised in an orphanage, Michelle details how lived adversity became the crucible for unlocking intuitive gifts and building an international multi-six-figure personal brand.', fit: 'Best For: Human Interest & Morning TV' },
  { title: 'Dissolving Subconscious Money Traumas', body: "How ancestral contracts of guilt, debt, and martyrdom keep high-earning professionals in chronic financial scarcity—and Michelle's 3-step ritual to break the cycle.", fit: 'Best For: Entrepreneurial & Wealth Podcasts' },
];

export const bios = [
  { label: '50-Word Intro', use: 'Podcasts / Quick Introductions', text: 'Michelle J. Lamont is an internationally acclaimed manifestation coach, spiritual intuitive, and host of the top-ranked Manifesting Miracles podcast. Born in an orphanage, she transformed severe adversity into sovereign alignment, helping visionaries worldwide dissolve scarcity and co-create their dream reality.' },
  { label: '100-Word Stage Bio', use: 'Conference Programs / Show Notes', text: 'Michelle J. Lamont is an international keynote speaker, spiritual intuitive, and founder of the Manifesting Miracles Academy. With over 20 years guiding high-performers, executives, and seekers, Michelle synthesizes ancient esoteric metaphysics with pragmatic neuro-somatic regulation. She is the creator of the chart-topping Manifesting Miracles™ podcast, ranked in the top 1% globally with over 750,000 downloads. Known for her infectious vitality and raw vulnerability, Michelle empowers individuals to recognize that miracles are not random strokes of luck—they are the natural frequency of an aligned nervous system.' },
  { label: 'Host Intro Script', use: 'Verbatim Host Read', text: "Please welcome to the show manifestation coach, author, and spiritual intuitive, Michelle J. Lamont! Today she is here to reveal why everything you've been told about positive thinking is incomplete, and how to physically rewire your nervous system to manifest impossible realities. Michelle, welcome!" },
];

export const photos = [
  { src: images.michellePortrait2023.src, alt: 'Michelle J. Lamont in a blue gown', label: 'Editorial portrait, 2023 shoot', source: images.michellePortrait2023.sourceUrl },
  { src: images.michelleHeadshot.src, alt: 'Michelle J. Lamont studio headshot', label: 'Sunburst halo studio', source: images.michelleHeadshot.sourceUrl },
  { src: images.michellePortrait2022.src, alt: 'Michelle J. Lamont', label: 'Portrait by the water, 2022', source: images.michellePortrait2022.sourceUrl },
  { src: '/images/michelle-with-oprah.jpg', alt: 'Michelle J. Lamont with Oprah Winfrey', label: 'Press photo with Oprah from the live site', source: 'https://www.michellejlamont.com/wp-content/uploads/2022/04/Michelle-j-lamont-Oprah.jpg' },
];

export const pressRequest = {
  title: 'Request Michelle for an Interview',
  body: 'Are you working on an editorial deadline or booking upcoming podcast episodes? Submit your request below for rapid confirmation from Lamont Media Worldwide.',
  note: 'Placeholder form. Nothing is sent.',
  formats: ['Podcast Interview (Remote Zoom / Riverside)', 'Television Broadcast (Studio / Satellite)', 'Print / Digital Editorial Q&A', 'Live Radio Broadcast', 'Conference Media Panel'],
  reach: ['10,000 – 50,000 listeners/viewers', '50,000 – 250,000 listeners/viewers', '250,000+ Major Network / Top 100', 'New Show / Growing Audience'],
  button: 'Placeholder: press request (not connected)',
  footnote: 'Official press requests receive priority turnaround from management within 24 hours.',
};
