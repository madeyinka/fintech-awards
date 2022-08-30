import { Overview, Market, Portfolio, Community, Report, Settings } from '@/public/assets/svgsIcons';

export const menuList = [
  {
    icon: <Overview />,
    name: 'Consumer & Corporate Banking  ',
    url: '/awards-categories/#consumer-&-corporate-banking',
    color: false
  },
  {
    icon: <Market />,
    name: 'Consumer Lending',
    url: '/awards-categories/#consumer-lending',
    color: true
  },
  {
    icon: <Market />,
    name: 'Business Lending',
    url: '/awards-categories/#business-lending',
    color: true
  },
  {
    icon: <Portfolio />,
    name: 'Wealth Management',
    url: '/awards-categories/#wealth-management',
    color: false
  },

  {
    icon: <Community />,
    name: ' Personal Finance ',
    url: '/awards-categories/#personal-finance',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Fraud Prevention & Transaction Security',
    url: '/awards-categories/#fraud-prvention-&-transaction-security',
    color: false
  },
  {
    icon: <Report />,
    name: 'Payments',
    url: '/awards-categories/#payments',
    color: false
  },
  {
    icon: <Report />,
    name: 'Consumer Payments',
    url: '/awards-categories/#consumer-payments',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Investments ',
    url: '/awards-categories/#investments',
    color: false
  },
  {
    icon: <Report />,
    name: 'Consumer Banking',
    url: '/awards-categories/#consumer-banking',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Financial Research and Data ',
    url: '/awards-categories/#financial-research-and-data',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Banking Infrastructure ',
    url: '/awards-categories/#banking-infrastructure',
    color: false
  },
  {
    icon: <Report />,
    name: 'Identity and Privacy',
    url: '/awards-categories/#identity-and-privacy',
    color: false,

  },
  {
    icon: <Settings />,
    name: 'Crowdfunding',
    url: '/awards-categories/#crowdfunding',
    color: false
  },
  {
    icon: <Report />,
    name: 'InsurTech',
    url: '/awards-categories/#insurtech',
    color: false
  },
  {
    icon: <Report />,
    name: 'RegTech',
    url: '/awards-categories/#regtech',
    color: false
  },
  {
    icon: <Report />,
    name: 'Cryptocurrency ',
    url: '/awards-categories/#cryptocurrency',
    color: false
  },
  {
    icon: <Report />,
    name: 'Industry Leadership',
    url: '/awards-categories/#industry-leadership',
    color: false
  }
]





export const menu = [
  {
    id: 1,
    title: 'Home',
    subMenu: [],
    url: '/',
    bigMenu: false
  },
  {
    id: 2,
    title: 'About',
    subMenu: [],
    url: '/about',
    bigMenu: false

  }, {
    id: 3,
    title: "Awards Categories",
    url: '',
    bigMenu: true,
    subMenu: [
      {
        icon: <Overview />,
        name: 'Consumer & Corporate Banking',
        url: '/awards-categories/#consumer-&-corporate-banking',
        color: false
      },
      {
        icon: <Market />,
        name: 'Consumer Lending',
        url: '/awards-categories/#consumer-lending',
        color: true
      },
      {
        icon: <Market />,
        name: 'Business Lending',
        url: '/awards-categories/#business-lending',
        color: true
      },
      {
        icon: <Portfolio />,
        name: 'Wealth Management',
        url: '/awards-categories/#wealth-management',
        color: false
      },

      {
        icon: <Community />,
        name: ' Personal Finance ',
        url: '/awards-categories/#personal-finance',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Fraud Prevention & Transaction Security',
        url: '/awards-categories/#fraud-prvention-&-transaction-security',
        color: false
      },
      {
        icon: <Report />,
        name: 'Payments',
        url: '/awards-categories/#payments',
        color: false
      },
      {
        icon: <Report />,
        name: 'Consumer Payments',
        url: '/awards-categories/#consumer-payments',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Investments ',
        url: '/awards-categories/#investments',
        color: false
      },
      {
        icon: <Report />,
        name: 'Consumer Banking',
        url: '/awards-categories/#consumer-banking',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Financial Research and Data',
        url: '/awards-categories/#financial-research-and-data',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Banking Infrastructure ',
        url: '/awards-categories/#banking-infrastructure',
        color: false
      },
      {
        icon: <Report />,
        name: 'Identity and Privacy',
        url: '/awards-categories/#identity-and-privacy',
        color: false,

      },
      {
        icon: <Settings />,
        name: 'Crowdfunding',
        url: '/awards-categories/#crowdfunding',
        color: false
      },
      {
        icon: <Report />,
        name: 'InsurTech',
        url: '/awards-categories/#insurtech',
        color: false
      },
      {
        icon: <Report />,
        name: 'RegTech',
        url: '/awards-categories/#regtech',
        color: false
      },
      {
        icon: <Report />,
        name: 'Cryptocurrency ',
        url: '/awards-categories/#cryptocurrency ',
        color: false
      },
      {
        icon: <Report />,
        name: 'Industry Leadership',
        url: '/awards-categories/#industry-leadership',
        color: false
      }
    ]
  },
  {
    id: 4,
    title: 'Resources',
    url: '',
    bigMenu: false,
    subMenu: [{
      icon: <Report />,
      name: 'Blog',
      url: '/blog',
      color: false
    },
    {
      icon: <Report />,
      name: 'Past Awards',
      url: '/past-awards',
      color: false
    },
    {
      icon: <Report />,
      name: 'Sponsorship',
      url: '/sponsorship',
      color: false
    }]
  }, {
    id: 5,
    title: "Contact",
    url: '/contact',
    subMenu: {},
    bigMenu: false
  }
];

// export default menu;

