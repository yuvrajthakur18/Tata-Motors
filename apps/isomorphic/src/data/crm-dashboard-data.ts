import { routes } from '@/config/routes';

export type CrmStatType = {
  title: string;
  customer: number;
  increased: boolean;
  percentage: number;
  lastMonth: number;
  href: string;
};

export const crmStatData: CrmStatType[] = [
  {
    title: 'Total Cases',
    customer: 12786,
    increased: true,
    percentage: 25.2,
    lastMonth: 10258,
    href: routes.casesPage,
  },
  {
    title: 'Calls',
    customer: 8785,
    increased: false,
    percentage: 18.2,
    lastMonth: 10587,
    href: routes.callsPage,
  },
  {
    title: 'Agents',
    customer: 4250,
    increased: true,
    percentage: 25.2,
    lastMonth: 3987,
    href: routes.agentsPage,
  },
  {
    title: 'Customers',
    customer: 2777,
    increased: false,
    percentage: 25.2,
    lastMonth: 2846,
    href: routes.customersPage,
  },
  {
    title: 'Technicians',
    customer: 2777,
    increased: false,
    percentage: 25.2,
    lastMonth: 2846,
    href: '#',
  },
  {
    title: 'Supervisors',
    customer: 4250,
    increased: true,
    percentage: 25.2,
    lastMonth: 3987,
    href: '#',
  },
  {
    title: 'Unsolved Cases',
    customer: 4250,
    increased: true,
    percentage: 25.2,
    lastMonth: 3987,
    href: '#',
  },
  {
    title: 'Agents overall performance / 5',
    customer: 4.15,
    increased: true,
    percentage: 25.2,
    lastMonth: 3987,
    href: '#',
  },
  {
    title: 'NPS score / 100',
    customer: 92,
    increased: true,
    percentage: 25.2,
    lastMonth: 3987,
    href: '#',
  },
  {
    title: 'Total Duration (in minutes)',
    customer: 2777,
    increased: false,
    percentage: 25.2,
    lastMonth: 2846,
    href: '#',
  },
];

export const revenueSummaryData = [
  {
    name: 'Support',
    value: 605 ,
  },
  {
    name: 'Service',
    value: 235 ,
  },
  {
    name: 'Technician',
    value: 454 ,
  },
  {
    name: 'Feedback',
    value: 120 ,
  },
  {
    name: 'Assistance',
    value: 256 ,
  },
  {
    name: 'Coordination',
    value: 178 ,
  },
  {
    name: 'Resolution',
    value: 564 ,
  },
  {
    name: 'Followup',
    value: 312 ,
  }
];

export const customerListData = [
  {
    id: 1,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-12.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 5,
  },
  {
    id: 2,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 4,
  },
  {
    id: 3,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-10.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 3,
  },
  {
    id: 4,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 2,
  },
  {
    id: 5,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-02.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 1,
  },
  {
    id: 6,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-14.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 5,
  },
  {
    id: 7,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-03.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 4,
  },
  {
    id: 8,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-13.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 3,
  },
  {
    id: 9,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 2,
  },
  {
    id: 10,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-12.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 1,
  },
  {
    id: 11,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 5,
  },
  {
    id: 12,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-02.webp',
    customerName: 'Gina Vanleuven',
    salesRepresentative: 'Gina Vanleuven',
    type: 'Platinum',
    projectValue: '$1.87M',
    rating: 4,
  },
];

export const customerByCountryData = [
  {
    country: 'in',
    name: 'India',
    value: 8,
    count: 102000,
  },
  // {
  //   country: 'ca',
  //   name: 'Canada',
  //   value: 9,
  //   count: 102000,
  // },
  // {
  //   country: 'us',
  //   name: 'USA',
  //   value: 8,
  //   count: 86000,
  // },
  // {
  //   country: 'au',
  //   name: 'Australia',
  //   value: 6,
  //   count: 62000,
  // },
  // {
  //   country: 'ru',
  //   name: 'Russia',
  //   value: 4,
  //   count: 48000,
  // },
];

export const reportAnalyticsData = [
  {
    id: 1,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp',
    name: 'Tasty Metal Shirt',
    soldAmount: 145.25,
    unitPrice: 125.22,
    revenue: 1870000,
    rating: 5,
  },
  {
    id: 2,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp',
    name: 'Modern Gloves',
    soldAmount: 245.25,
    unitPrice: 222.59,
    revenue: 1870000,
    rating: 4,
  },
  {
    id: 3,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp',
    name: 'Rustic Watch',
    soldAmount: 156.25,
    unitPrice: 110.25,
    revenue: 1870000,
    rating: 4,
  },
  {
    id: 4,
    image:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/11.webp',
    name: 'Cheese Perfume',
    soldAmount: 145.25,
    unitPrice: 110.89,
    revenue: 1870000,
    rating: 3,
  },
];
