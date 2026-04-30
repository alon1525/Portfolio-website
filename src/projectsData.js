/** @typedef {{ src: string, alt?: string, caption?: string }} GalleryItem */

/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} category
 * @property {string[]} tags
 * @property {string} summary
 * @property {string[]} body
 * @property {GalleryItem[]} [gallery]
 * @property {string} [image]
 * @property {string} [imageAlt]
 * @property {string} [link]
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: 'zporti',
    title: 'Zporti',
    category: 'webapp',
    tags: ['Expo', 'React Native', 'Node.js', 'Socket.io'],
    image: '/zporti-mascot.png',
    imageAlt: 'Zporti monkey mascot in a football kit',
    link: 'https://www.zporti.com',
    summary:
      'Social sports prediction app: challenges, live football picks, and real-time scores with friends.',
    body: [
      'Zporti is built around social prediction challenges on real football fixtures. You create or join challenges, lock picks before kickoff, and compete as scores update—so the product is as much about the social loop as it is about the data.',
      'Live match data and odds stay on the server: the app talks to your API, which syncs from API-Football and pushes updates over Socket.io. That keeps keys safe, respects rate limits, and makes the client feel instant when goals land.',
      'Auth goes through Supabase; the API uses Prisma on PostgreSQL and validates JWTs so user records stay in sync. On the edge, Cloudflare handles CORS, caching for hot read paths, and a clean split between web, mobile, and api hosts.',
      'The stack is deliberately full-stack: Expo and React Native for iOS, Android, and web, Node.js and Express for the API, and operational pieces (Railway, Redis where needed, observability) so the product can grow without rewriting foundations.',
    ],
    gallery: [
      {
        src: '/zporti-mascot.png',
        alt: 'Zporti mascot',
        caption: 'Product identity: the Zporti mascot on the pitch.',
      },
    ],
  },
  {
    slug: 'kardingo',
    title: 'Kardingo',
    category: 'webapp',
    tags: ['Mobile', 'UI/UX', 'Gamification'],
    image: '/kardingo-brand-sheet.png',
    imageAlt:
      'Kardingo brand sheet: dingo mascot, palette, XP bar, flashcards, and study companion tagline',
    summary:
      'Cozy flashcard decks, soft pastel UI, and gentle gamification to make studying feel lighter.',
    body: [
      'Kardingo treats studying like organizing a shelf of friendly books: each deck is a subject, shown as illustrated volumes with simple faces and bookmarks, so the first screen already feels approachable rather than academic.',
      'The home hub centers a pet companion inside a level ring, shows daily streak and total XP at a glance, and surfaces a review queue with clear CTAs to start a session or browse decks—so motivation sits on the first screen, not behind menus.',
      'The Your Decks view combines search, a clear grid, and per-deck progress pills so learners see how far they have moved through Japanese, French, Biology, or anything else they track—without opening a spreadsheet mindset.',
      'Navigation keeps Home, Decks, Pet, and Stats one tap away. The pet tab hints at a companion loop that rewards consistency, pairing the cute visual language with habits instead of streak anxiety.',
      'Visually, the app leans into cream backgrounds, paw-print texture, and rounded type so the whole surface reads warm and calm. That restraint in color and illustration is the product argument: focus, comfort, and a little delight.',
      'A dedicated brand sheet locks the world: the Kardingo mascot in key poses, named palette swatches (cream, rose, sunny yellow, warm brown, pastel green), and UI primitives like the XP bar and flashcard stack so design stays consistent from marketing to the app.',
    ],
    gallery: [
      {
        src: '/kardingo-brand-sheet.png',
        alt: 'Kardingo brand style guide with mascot, colors, and UI elements',
        caption:
          'Brand & character system: palette, mascot poses, XP bar, and flashcard motif.',
      },
      {
        src: '/kardingo-home.png',
        alt: 'Kardingo home screen with level ring, streak, XP, and study session CTAs',
        caption:
          'Home dashboard: level progress, daily streak, XP, and quick paths into study or decks.',
      },
      {
        src: '/kardingo-decks.png',
        alt: 'Kardingo Your Decks screen',
        caption: 'Deck grid with search, progress, and the cozy book metaphor.',
      },
    ],
  },
  {
    slug: 'the-quarantrees',
    title: 'The Quarantrees',
    category: 'game',
    tags: ['Unity', 'C#', 'Hackathon'],
    image: '/quarantrees-title.png',
    imageAlt:
      'Quarantrees title screen with boy hero, corona enemies, trees, and Game Start button',
    link: 'https://alon1525.itch.io/the-quarantrees',
    summary:
      'Unity game built for a hackathon, published on itch.io—playable in the browser or as a download.',
    body: [
      'The Quarantrees is a small Unity title I shipped during a hackathon and released on itch.io under my alon1525 profile. The format forced fast iteration: core loop first, then polish until the deadline.',
      'Unity handled gameplay, scenes, and builds; itch.io gave a simple home for the build, screenshots, and a short page players can share. That combo is ideal for jam games where you want feedback without app-store overhead.',
      'Hackathon constraints meant ruthless scoping—one memorable mechanic, readable UI, and a build that runs on judges’ machines. The same mindset applies when I prototype product ideas in other stacks.',
      'More Unity experiments and jam builds live on my itch.io creator page: https://alon1525.itch.io/',
    ],
    gallery: [
      {
        src: '/quarantrees-title.png',
        alt: 'Quarantrees title screen with lake, forest, viruses, and menu',
        caption: 'Title screen: stop the virus from reaching the boy using trees and the mouse.',
      },
    ],
  },
  {
    slug: '2good2die',
    title: '2good2die',
    category: 'game',
    tags: ['Unity', 'C#', 'Hackathon'],
    image: '/2good2die-cover.png',
    imageAlt:
      '2 GOOD 2 DIE pixel art scene with two heroes, monsters, and zombies on a dirt arena',
    link: 'https://alon1525.itch.io/2good2die',
    summary:
      'Another Unity hackathon game on itch.io—tight scope, shippable build, and a public page for players.',
    body: [
      '2good2die is a second Unity project from the same hackathon / game-jam style of work: prototype quickly in the editor, playtest, and cut features that do not serve the core experience.',
      'Publishing on itch.io keeps distribution lightweight and makes it easy to link from a portfolio or resume. The focus is on a stable WebGL or downloadable build and clear instructions on the game page.',
      'Together with The Quarantrees, these entries show I can take a game from idea to playable artifact under time pressure, not only web and mobile product work.',
    ],
    gallery: [
      {
        src: '/2good2die-cover.png',
        alt: '2 GOOD 2 DIE pixel art key art with characters and enemies',
        caption: 'Key art: cute duo versus pixel horrors—tone set for the jam build.',
      },
    ],
  },
]

/** @param {string} slug */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
