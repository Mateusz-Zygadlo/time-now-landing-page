import { Images } from './assets'

export const MAIN_CONTENT = {
  h1: 'Post when your audience is most active.',
  p: 'With TimeNow, automatically schedule your posts on Twitter, LinkedIn, and Instagram to post when your followers are most active.',
  beside_button: 'View Demo',
  assurance: [
    {
      image: Images.Shield,
      p: 'TimeNow does not sell your data. Learn more'
    }
  ]
}

export const RECOMMENDED_CONTENT = {
  h1: 'TimeNow is used by the most influential people.',
  users: [
    Images.UA1,
    Images.UA2,
    Images.UA3,
    Images.UA4,
    Images.UA5,
    Images.UA6,
    Images.UA7,
    Images.UA8,
  ],
  p1: 'The most influential people on Facebook, Twitter, and Instagram are using TweetNow to schedule posts when their followers are most active.',
  p2: 'They generally receive 23% more engagement than people who do not.',
}

export const PRODUCTS_CONTENT = [
  {
    name: 'Unified Dashboard',
    h1: 'Customizable dashboard for all platforms.',
    p: 'Use Twitter nad Instagram but not LinkedIn? You can customize your dashboard to your liking. Tou can even schedule the dame post ot individual platforms instead of all platforms.',
    buttonText: 'Start Scheduling',
    isButton: true,
  }, 
  {
    name: 'Enhanced Analytics',
    h1: 'Real-time data that tells you everything.',
    p: "Get detailed reports of what's working and what isn't. Engagement rates, impressions, views, and muh more data is available to you through our in-depth dashboard tool.",
    buttonText: 'View Live Demo',
    isButton: false
  }
]

export const PLANS_CONTENT = {
  h1: 'Flexible Plans for Everyone.',
  p: "Our plans are made for everyone. Whether you're just starting out on social media, or have been on there for a long tome, we have a plan that's right for you.",
  plans: [
    {
      time: 'month',
      price: '$4',
      p: "Perfect plan if you're jest starting out.",
      functions: [
        {
          image: Images.Checkmark,
          p: 'LinkedIn Integration'
        },
        {
          image: Images.Checkmark,
          p: 'Twitter Integration'
        },
        {
          image: Images.Checkmark,
          p: 'Real-time Analytics'
        }
      ],
      buttonText: 'Subscribe Now'
    },
    {
      time: 'month',
      price: '$12',
      p: "Perfect plan if you're a heavy user of social media.",
      functions: [
        {
          image: Images.Checkmark,
          p: 'LinkedIn Integration'
        },
        {
          image: Images.Checkmark,
          p: 'Twitter Integration'
        },
        {
          image: Images.Checkmark,
          p: 'Instagram Integration'
        },
        {
          image: Images.Checkmark,
          p: 'Real-time Analytics'
        }
      ],
      buttonText: 'Subscribe Now'
    },
    {
      time: 'month',
      price: '$7',
      p: "Perfect plan if you're jest starting out.",
      functions: [
        {
          image: Images.Checkmark,
          p: 'LinkedIn Integration'
        },
        {
          image: Images.Checkmark,
          p: 'Twitter Integration'
        }
      ],
      buttonText: 'Subscribe Now'
    }
  ]
}