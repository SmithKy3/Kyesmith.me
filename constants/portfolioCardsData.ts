interface PFCardData {
  href: string;
  title: string;
  imgSrc: string;
  date: string;
  description: string;
}

export const cards: PFCardData[] = [
  {
    href: '/kyesmith.me',
    title: 'KyeSmith.me',
    imgSrc: require('@/assets/kyesmith.me.png'),
    date: 'May 2020',
    description: "You're looking at it.",
  },
  {
    href: '/space-thing',
    title: 'Space-Thing',
    imgSrc: require('@/assets/space-thing.png'),
    date: 'April 2020',
    description:
      "A space simulator I'm working on, a lot of maths and a bit of jazz.",
  },
  {
    href: '/warp-speed',
    title: 'WarpSpeed',
    imgSrc: require('@/assets/warp-speed.png'),
    date: 'April 2020',
    description:
      'I wrote a small NPM package for easily getting the star wars warp speed effect on the web.',
  },
  {
    href: '/eee-logo',
    title: 'EEE Logo',
    imgSrc: require('@/assets/eee-logo.png'),
    date: 'December 2018',
    description:
      "As well as web devlopment, I like to tinker with photoshop and used this to design Sheffield University's new/current EEE society logo.",
  },
];
