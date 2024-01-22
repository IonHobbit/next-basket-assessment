const contactInformation = {
  phoneNumber: '123-456-7890',
  email: 'ayorg360@gmail.com',
  socialMedia: [
    {
      name: 'instagram',
      url: 'https://www.instagram.com/ayorg360/',
      icon: 'basil:instagram-outline'
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/ayorg360',
      icon: 'ant-design:facebook-outlined'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/ayorg360',
      icon: 'ant-design:twitter-outlined'
    },
    {
      name: 'linkedIn',
      url: 'https://www.linkedin.com/in/ayorg360/',
      icon: 'ant-design:linkedin-outlined'
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

const landingPage = { contactInformation, navigationLinks };

export default landingPage;