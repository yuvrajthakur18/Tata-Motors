import { avatarIds } from '@core/utils/get-avatar';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';

export const actionPlanTypes = {
  'Routine Checkup': 'Routine Checkup',
  'Pregnant Yoga': 'Pregnant Yoga',
  Consultant: 'Consultant',
  Training: 'Training',
};
export const actionPlanStatuses = {
  Scheduled: 'Scheduled',
  Waiting: 'Waiting',
};

export type Type = keyof typeof actionPlanTypes;
export type StatusType = keyof typeof actionPlanStatuses;

export const actionPlanData = [
  {
    impact: "Improved customer satisfaction",
    action_point: "Implement feedback collection",
    action_description: "Introduce regular customer feedback surveys to identify areas for improvement.",
    id: '3416',
    // patient: {
    //   name: 'Kristie Ziemann',
    //   email: 'kristie@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Routine Checkup',
    // date: '2022-11-10T06:22:01.621Z',
    // status: 'Scheduled',
    // amount: 45.54,
    // duration: 90,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Reduced operational costs",
    action_point: "Optimize supply chain",
    action_description: "Streamline vendor management and negotiate bulk discounts for key materials.",
    id: '3417',
    // patient: {
    //   name: 'Susie Beatty',
    //   email: 'susie@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Marcos McGlynn',
    //   email: 'marcos@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Consultant',
    // date: '2023-02-06T17:46:26.713Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 120,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Increased employee productivity",
    action_point: "Provide skill development training",
    action_description: "Organize quarterly workshops on time management and technical skills for staff.",
    id: '3418',
    // patient: {
    //   name: 'Marcos McGlynn',
    //   email: 'marcos@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Omar Haag',
    //   email: 'omar@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Training',
    // date: '2022-03-06T05:10:57.625Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 25,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Enhanced data security",
    action_point: "Deploy multi-factor authentication",
    action_description: "Implement MFA for all critical systems to mitigate unauthorized access risks.",
    id: '3419',
    // patient: {
    //   name: 'Omar Haag',
    //   email: 'omar@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Susie Beatty',
    //   email: 'susie@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Pregnant Yoga',
    // date: '2021-09-27T21:47:53.304Z',
    // status: 'Scheduled',
    // amount: 45.54,
    // duration: 10,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Boosted online engagement",
    action_point: "Launch social media campaigns",
    action_description: "Create targeted ad campaigns on social media platforms to reach a wider audience.",
    id: '3420',
    // patient: {
    //   name: 'Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Kristie Ziemann',
    //   email: 'kristie@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Training',
    // date: '2021-11-26T06:34:48.311Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 90,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Improved team collaboration",
    action_point: "Adopt project management tools",
    action_description: "Introduce tools like Jira or Trello to track project progress and enhance team communication.",
    id: '3421',
    // patient: {
    //   name: 'Kristie Ziemann',
    //   email: 'kristie@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Pregnant Yoga',
    // date: '2022-11-10T06:22:01.621Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 30,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Faster customer service response time",
    action_point: "Implement chatbots",
    action_description: "Deploy AI-based chatbots to handle common customer queries instantly.",
    id: '3422',
    // patient: {
    //   name: 'Omar Haag',
    //   email: 'omar@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Marcos McGlynn',
    //   email: 'marcos@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Routine Checkup',
    // date: '2023-02-06T17:46:26.713Z',
    // status: 'Scheduled',
    // amount: 45.0,
    // duration: 60,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Reduced carbon footprint",
    action_point: "Switch to renewable energy sources",
    action_description: "Install solar panels and use energy-efficient appliances in all office locations.",
    id: '3423',
    // patient: {
    //   name: 'Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Omar Haag',
    //   email: 'omar@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Routine Checkup',
    // date: '2022-03-06T05:10:57.625Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 25,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Higher employee retention rate",
    action_point: "Offer flexible work policies",
    action_description: "Introduce hybrid work options and provide better work-life balance initiatives.",
    id: '3424',
    // patient: {
    //   name: 'Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Susie Beatty',
    //   email: 'susie@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Routine Checkup',
    // date: '2021-09-27T21:47:53.304Z',
    // status: 'Waiting',
    // amount: 55.54,
    // duration: 120,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Increased website traffic",
    action_point: "Optimize SEO practices",
    action_description: "Conduct keyword research and improve on-page SEO to rank higher on search engines.",
    id: '3425',
    // patient: {
    //   name: 'Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Kristie Ziemann',
    //   email: 'kristie@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Pregnant Yoga',
    // date: '2021-11-26T06:34:48.311Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 10,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Minimized data loss",
    action_point: "Set up regular backups",
    action_description: "Implement automated daily backups for all critical business data to ensure recovery.",
    id: '3426',
    // patient: {
    //   name: 'Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Training',
    // date: '2022-11-10T06:22:01.621Z',
    // status: 'Waiting',
    // amount: 35.0,
    // duration: 35,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Improved product quality",
    action_point: "Introduce quality control checks",
    action_description: "Add a dedicated quality assurance step before shipping products to customers.",
id: '3527',
    // patient: {
    //   name: 'Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Marcos McGlynn',
    //   email: 'marcos@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Training',
    // date: '2023-02-06T17:46:26.713Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 15,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Expanded market reach",
    action_point: "Enter new geographic regions",
    action_description: "Launch products in emerging markets with localized marketing strategies.",
id: '3428',
    // patient: {
    //   name: 'Susie Beatty',
    //   email: 'susie@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Omar Haag',
    //   email: 'omar@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Training',
    // date: '2022-03-06T05:10:57.625Z',
    // status: 'Scheduled',
    // amount: 45.54,
    // duration: 25,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Increased employee engagement",
    action_point: "Organize team-building activities",
    action_description: "Host monthly team outings and recognition programs to foster a positive work environment.",
id: '3429',
    // patient: {
    //   name: 'Marcos McGlynn',
    //   email: 'marcos@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Susie Beatty',
    //   email: 'susie@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Training',
    // date: '2021-09-27T21:47:53.304Z',
    // status: 'Scheduled',
    // amount: 50.54,
    // duration: 90,
    // address: '1250 E Apache Blvd, Arkansas, USA',
  },
  {
    impact: "Enhanced customer loyalty",
    action_point: "Start a rewards program",
    action_description: "Create a points-based loyalty program to reward repeat customers for their purchases.",
id: '3430',
    // patient: {
    //   name: 'Johnnie Kassulke',
    //   email: 'johnnie.kassulke@example.com',
    // },
    // doctor: {
    //   name: 'Dr. Kristie Ziemann',
    //   email: 'kristie@example.com',
    //   avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    //     avatarIds
    //   )}.webp`,
    // },
    // type: 'Consultant',
    // date: '2021-11-26T06:34:48.311Z',
    // status: 'Waiting',
    // amount: 45.54,
    // duration: 120,
    // address: '1200 E Apache Blvd, Arkansas, USA',
  },
];
