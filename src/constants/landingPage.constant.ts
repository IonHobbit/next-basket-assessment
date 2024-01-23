const contactInformation = {
  phoneNumber: '08166557616',
  email: 'ayorg360@gmail.com',
  socialMedia: [
    {
      name: 'instagram',
      url: 'https://www.instagram.com/bandage/',
      icon: 'ant-design:instagram-outlined'
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com/bandage/',
      icon: 'ant-design:youtube-filled'
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/bandage',
      icon: 'mdi:facebook'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/bandage',
      icon: 'ant-design:twitter-outlined'
    },
  ]
}

const navigationLinks = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Shop',
    url: '/shop'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
  {
    name: 'Pages',
    url: '/pages'
  }

]

const services = [
  {
    icon: 'bxs:book-reader',
    name: 'Easy Wins',
    description: 'Get your best looking smile now'
  },
  {
    icon: 'carbon:book',
    name: 'Concrete',
    description: 'Defalcate is most focused in helping you discover your most beautiful smile'
  }, {
    icon: 'uil:arrow-growth',
    name: 'Hack Growth',
    description: 'Overcame any hurdle or any other problem.'
  }
]

const posts = [
  {
    image: '/images/post1.jpeg',
    name: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  },
  {
    image: '/images/post2.jpeg',
    name: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  },
  {
    image: '/images/post3.jpeg',
    name: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  },
]

const reviewImages = [
  '/images/review-1.png',
  '/images/review-2.png',
  '/images/review-3.png',
  '/images/review-4.png',
  '/images/review-5.png',
  '/images/review-6.png',
  '/images/review-7.png',
  '/images/review-8.png',
  '/images/review-9.png',
]

const footerLinks = [
  {
    header: 'Company Info',
    links: [
      {
        name: 'About Us',
        url: '/about'
      },
      {
        name: 'Carrier',
        url: '/carrier'
      },
      {
        name: 'We are hiring',
        url: '/careers'
      },
      {
        name: 'Blog',
        url: '/blog'
      },
    ]
  },
  {
    header: 'Legal',
    links: [
      {
        name: 'About Us',
        url: '/about'
      },
      {
        name: 'Carrier',
        url: '/carrier'
      },
      {
        name: 'We are hiring',
        url: '/careers'
      },
      {
        name: 'Blog',
        url: '/blog'
      },
    ]
  },
  {
    header: 'Features',
    links: [
      {
        name: 'Business Martketing',
        url: '/business-marketing'
      },
      {
        name: 'User Analytics',
        url: '/analytics'
      },
      {
        name: 'Live Chat',
        url: '/live-chat'
      },
      {
        name: 'Unlimited Support',
        url: '/support'
      },
    ]
  },
  {
    header: 'Resources',
    links: [
      {
        name: 'iOS & Android',
        url: '/ios-android'
      },
      {
        name: 'Watch a Demo',
        url: '/demo'
      },
      {
        name: 'Customers',
        url: '/customers'
      },
      {
        name: 'API',
        url: '/api'
      },
    ]
  }
]

const footerSocials = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/ayorg360',
    icon: 'mdi:facebook'
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/ayorg360/',
    icon: 'ant-design:instagram-outlined'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/ayorg360',
    icon: 'ant-design:twitter-outlined'
  },

]

const landingPage = { contactInformation, navigationLinks, services, posts, reviewImages, footerLinks, footerSocials };

export default landingPage;