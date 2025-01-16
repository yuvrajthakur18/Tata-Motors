export type CustomerTrendsDataType = (typeof custTrendsData)[number];

export const custTrendsData = [
  {
    id: '301',
    customerName: 'John Doe',
    emotionalToneOfCustomer: 'Positive',
    emotionalToneInstancesCount: 5,
    emotionalToneInstances: [
      { tone: 'Happy', count: 3 },
      { tone: 'Calm', count: 2 },
    ],
    emotionalToneAnalysis: 'Customer is overall satisfied with the service.',
  },
  {
    id: '302',
    customerName: 'Jane Smith',
    emotionalToneOfCustomer: 'Neutral',
    emotionalToneInstancesCount: 3,
    emotionalToneInstances: [
      { tone: 'Indifferent', count: 2 },
      { tone: 'Calm', count: 1 },
    ],
    emotionalToneAnalysis: 'Customer has mixed feelings about the service.',
  },
  {
    id: '303',
    customerName: 'Alice Johnson',
    emotionalToneOfCustomer: 'Negative',
    emotionalToneInstancesCount: 4,
    emotionalToneInstances: [
      { tone: 'Frustrated', count: 2 },
      { tone: 'Angry', count: 2 },
    ],
    emotionalToneAnalysis:
      'Customer is dissatisfied and may require follow-up.',
  },
  {
    id: '304',
    customerName: 'Bob Brown',
    emotionalToneOfCustomer: 'Positive',
    emotionalToneInstancesCount: 6,
    emotionalToneInstances: [
      { tone: 'Happy', count: 4 },
      { tone: 'Excited', count: 2 },
    ],
    emotionalToneAnalysis: 'Customer is highly satisfied with the service.',
  },
  {
    id: '305',
    customerName: 'Chris Green',
    emotionalToneOfCustomer: 'Neutral',
    emotionalToneInstancesCount: 2,
    emotionalToneInstances: [
      { tone: 'Indifferent', count: 1 },
      { tone: 'Calm', count: 1 },
    ],
    emotionalToneAnalysis:
      'Customer’s response is neutral towards the service.',
  },
];
