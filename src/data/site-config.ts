export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  website: string;
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  poemsPerPage?: number;
  fictionsPerPage?: number;
};

const siteConfig: SiteConfig = {
  website: "https://yimiwriting.com",
  title: "Yimi Lu",
  subtitle: "Writing @ Northern California",
  description: "Yimi is Writing",
  // image: {
  //     src: '/dante-preview.jpg',
  //     alt: 'Dante - Astro.js and Tailwind CSS theme'
  // },
  headerNavLinks: [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Poems',
        href: '/poems'
    },
    {
        text: 'Fictions',
        href: '/fictions'
    },
    // {
    //     text: 'Tags',
    //     href: '/tags'
    // }
  ],
  footerNavLinks: [
    // {
    //   text: "Home",
    //   href: "/",
    // },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    // {
    //     text: 'Terms',
    //     href: '/terms'
    // },
    // {
    //     text: 'Download theme',
    //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
    // }
  ],
  socialLinks: [
    // {
    //     text: 'Dribbble',
    //     href: 'https://dribbble.com/'
    // },
    {
      text: "Instagram",
      href: "https://www.instagram.com/yimiwriting/",
    },
    {
      text: "Threads",
      href: "https://www.threads.com/@yimiwriting",
    },
    // {
    //     text: 'X/Twitter',
    //     href: 'https://twitter.com/'
    // }
  ],
  hero: {
    title: "Yimi Writes Things",
    text: 
    "<p>Yimi Lu writes about people who don’t say what they mean in her own Chinese accent. Born in Shanghai, she now pretends to settle in Northern California. She builds code blocks by day and disassembles herself by night.</p><p>More work is coming soon... Yimi is still writing!</p>",
    // image: {
    //     src: '/hero.jpeg',
    //     alt: 'A person sitting at a desk in front of a computer'
    // },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  // subscribe: {
  //     title: 'Subscribe to Dante Newsletter',
  //     text: 'One update per week. All the latest posts directly in your inbox.',
  //     formUrl: '#'
  // },
  poemsPerPage: 8,
  fictionsPerPage: 8,
};

export default siteConfig;
