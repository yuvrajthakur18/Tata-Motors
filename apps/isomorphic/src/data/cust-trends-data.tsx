export type CustomerTrendsDataType = (typeof custTrendsData)[number];

export const custTrendsData = [
  {
    id: '1-195575543213',
    customerName: 'Rajendra',
    emotionalToneOfCustomer: 'Positive',
    emotionalToneInstancesCount: 23,
    emotionalToneInstances: [
      { tone: 'Happy', count: 3 },
      { tone: 'Calm', count: 2 },
    ],
    emotionalToneAnalysis: 'The customer is happy and enthusiastic about the conversation, indicating a positive tone and interest in the topic.',
  },
  {
    id: '1-195575543151',
    customerName: 'Radha',
    emotionalToneOfCustomer: 'Neutral',
    emotionalToneInstancesCount: 12,
    emotionalToneInstances: [
      { tone: 'happy', count: 2 },
      { tone: 'surprised', count: 1 },
    ],
    emotionalToneAnalysis: 'Customer has mixed feelings about the service.',
  },
  {
    id: '1-195574430450',
    customerName: 'Sachin',
    emotionalToneOfCustomer: 'Positive',
    emotionalToneInstancesCount: 12,
    emotionalToneInstances: [
      { tone: 'happy', count: 2 },
      { tone: 'sad', count: 2 },
    ],
    emotionalToneAnalysis:
      'The customer\'s question about the sari seems out of place, but it could be a distraction or a way to express frustration. However, he quickly shifts to a happy tone when asking about the car number, indicating a change in focus or mood.',
  },
  {
    id: '1-195561110277',
    customerName: 'Shashi Raqib Andama',
    emotionalToneOfCustomer: 'Positive',
    emotionalToneInstancesCount:  14,
    emotionalToneInstances: [
      { tone: 'happy', count: 4 },
      { tone: 'sad', count: 2 },
    ],
    emotionalToneAnalysis: 'The customer is expressing happiness when responding to the agent\'s question about taking a break, indicating a positive tone in the conversation.',
  },
  {
    id: '1-195562504427',
    customerName: 'Anjali',
    emotionalToneOfCustomer: 'Positive',
    emotionalToneInstancesCount: 18,
    emotionalToneInstances: [
      { tone: 'Happy', count: 5 },
      { tone: 'Calm', count: 3 },
    ],
    emotionalToneAnalysis: 'The customer displayed a consistently positive and enthusiastic tone, showing interest in the product being discussed and an eagerness to explore more options.'
  },
  {
    id: '1-195564269261',
    customerName: 'Ramesh',
    emotionalToneOfCustomer: 'Neutral',
    emotionalToneInstancesCount: 10,
    emotionalToneInstances: [
      { tone: 'Calm', count: 4 },
      { tone: 'Curious', count: 3 }
    ],
    emotionalToneAnalysis: 'Customer seemed curious about the service but maintained a neutral tone throughout, indicating cautious interest without strong emotional expression.'
  },
  {
    id: '1-195573304087',
    customerName: 'Priya',
    emotionalToneOfCustomer: 'Negative',
    emotionalToneInstancesCount: 15,
    emotionalToneInstances: [
      { tone: 'Angry', count: 5 },
      { tone: 'Frustrated', count: 4 },
    ],
    emotionalToneAnalysis: 'The customer expressed dissatisfaction with the service delays, showing frustration and disappointment. However, they remained willing to engage when reassured by the agent.'
  },
  {
    id: '1-195634039616',
    customerName: 'Vivek',
    emotionalToneOfCustomer: 'Positive',
    emotionalToneInstancesCount: 20,
    emotionalToneInstances: [
      { tone: 'Happy', count: 6 },
      { tone: 'Calm', count: 5 },
    ],
    emotionalToneAnalysis: 'The customer showed a happy and relaxed attitude, with moments of excitement when discussing the benefits of the service, indicating a strong positive perception.'
  },
  {
    id: '1-195639165787',
    customerName: 'Meera',
    emotionalToneOfCustomer: 'Neutral',
    emotionalToneInstancesCount: 8,
    emotionalToneInstances: [
      { tone: 'Calm', count: 3 },
    ],
    emotionalToneAnalysis: 'The customer maintained a calm and indifferent tone throughout the call, providing concise responses and showing minimal emotional engagement.'
  },
  {
    id: '1-195639166166',
    customerName: 'Nitin',
    emotionalToneOfCustomer: 'Negative',
    emotionalToneInstancesCount: 16,
    emotionalToneInstances: [
      { tone: 'Frustrated', count: 6 },
      { tone: 'Angry', count: 4 },
    ],
    emotionalToneAnalysis: 'The customer expressed frustration and anger due to repeated billing issues. While initially upset, they calmed down slightly after receiving assurances from the agent.'
  }
  
  
];
