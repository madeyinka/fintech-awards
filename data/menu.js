import { Overview, Market, Portfolio, Community, Report, Settings } from '@/public/assets/svgsIcons';

export const menuList = [
  {
    icon: <Overview />,
    name: 'Consumer & Corporate Banking  ',
    url: '/category/consumer-and-corporate-banking',
    color: false
  },
  {
    icon: <Market />,
    name: 'Consumer Lending',
    url: '/category/consumer-lending',
    color: true
  },
  {
    icon: <Market />,
    name: 'Business Lending',
    url: '/category/business-lending',
    color: true
  },
  {
    icon: <Portfolio />,
    name: 'Wealth Management',
    url: '/category/wealth-management ',
    color: false
  },

  {
    icon: <Community />,
    name: ' Personal Finance ',
    url: '/category/personal-finance ',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Fraud Prevention & Transaction Security',
    url: '/category/fraud-prvention-and-transaction-security',
    color: false
  },
  {
    icon: <Report />,
    name: 'Payments',
    url: '/category/payments',
    color: false
  },
  {
    icon: <Report />,
    name: 'Consumer Payments',
    url: '/category/consumer-payments',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Investments ',
    url: '/category/investments',
    color: false
  },
  {
    icon: <Report />,
    name: 'Consumer Banking',
    url: '/category/consumer-banking',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Financial Research and Data ',
    url: '/category/financial-research-and-data',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Banking Infrastructure ',
    url: '/category/banking-infrastructure',
    color: false
  },
  {
    icon: <Report />,
    name: 'Identity and Privacy',
    url: '/category/identity-and-privacy',
    color: false,

  },
  {
    icon: <Settings />,
    name: 'Crowdfunding',
    url: '/category/crowdfunding',
    color: false
  },
  {
    icon: <Report />,
    name: 'InsurTech',
    url: '/category/insurtech',
    color: false
  },
  {
    icon: <Report />,
    name: 'RegTech',
    url: '/category/regtech',
    color: false
  },
  {
    icon: <Report />,
    name: 'Cryptocurrency ',
    url: '/category/cryptocurrency ',
    color: false
  },
  {
    icon: <Report />,
    name: 'Industry Leadership',
    url: '/category/industry-leadership',
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
        name: 'Consumer & Corporate Banking  ',
        url: '/category/consumer-and-corporate-banking',
        color: false
      },
      {
        icon: <Market />,
        name: 'Consumer Lending',
        url: '/category/consumer-lending',
        color: true
      },
      {
        icon: <Market />,
        name: 'Business Lending',
        url: '/category/business-lending',
        color: true
      },
      {
        icon: <Portfolio />,
        name: 'Wealth Management',
        url: '/category/wealth-management ',
        color: false
      },

      {
        icon: <Community />,
        name: ' Personal Finance ',
        url: '/category/personal-finance ',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Fraud Prevention & Transaction Security',
        url: '/category/fraud-prvention-and-transaction-security',
        color: false
      },
      {
        icon: <Report />,
        name: 'Payments',
        url: '/category/payments',
        color: false
      },
      {
        icon: <Report />,
        name: 'Consumer Payments',
        url: '/category/consumer-payments',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Investments ',
        url: '/category/investments',
        color: false
      },
      {
        icon: <Report />,
        name: 'Consumer Banking',
        url: '/category/consumer-banking',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Financial Research and Data ',
        url: '/category/financial-research-and-data',
        color: false
      },
      {
        icon: <Settings />,
        name: 'Banking Infrastructure ',
        url: '/category/banking-infrastructure',
        color: false
      },
      {
        icon: <Report />,
        name: 'Identity and Privacy',
        url: '/category/identity-and-privacy',
        color: false,

      },
      {
        icon: <Settings />,
        name: 'Crowdfunding',
        url: '/category/crowdfunding',
        color: false
      },
      {
        icon: <Report />,
        name: 'InsurTech',
        url: '/category/insurtech',
        color: false
      },
      {
        icon: <Report />,
        name: 'RegTech',
        url: '/category/regtech',
        color: false
      },
      {
        icon: <Report />,
        name: 'Cryptocurrency ',
        url: '/category/cryptocurrency ',
        color: false
      },
      {
        icon: <Report />,
        name: 'Industry Leadership',
        url: '/category/industry-leadership',
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

