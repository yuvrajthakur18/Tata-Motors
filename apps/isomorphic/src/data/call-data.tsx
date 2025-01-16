export type CallDataType = (typeof callData)[number];

export const callData = [
  {
    id: '101',
    callRecording: 'https://example.com/call/recording1.mp3',
    typeOfCall: 'Customer Support',
    callDuration: 360, // In seconds
    holdTime: 120, // In seconds
    talkToListenRatio: 1.5,
    interruptionsCount: 3,
    emotionalToneOfCustomer: 'Positive',
    emotionalTone: 'Neutral',
    instancesCount: 5,
    sentimentTrend: 'Upward',
    brandSentiment: 'Positive',
  },
  {
    id: '102',
    callRecording: 'https://example.com/call/recording2.mp3',
    typeOfCall: 'Sales Inquiry',
    callDuration: 540, // In seconds
    holdTime: 90, // In seconds
    talkToListenRatio: 2.0,
    interruptionsCount: 2,
    emotionalToneOfCustomer: 'Neutral',
    emotionalTone: 'Positive',
    instancesCount: 7,
    sentimentTrend: 'Steady',
    brandSentiment: 'Positive',
  },
  {
    id: '103',
    callRecording: 'https://example.com/call/recording3.mp3',
    typeOfCall: 'Complaint',
    callDuration: 720, // In seconds
    holdTime: 180, // In seconds
    talkToListenRatio: 0.8,
    interruptionsCount: 5,
    emotionalToneOfCustomer: 'Negative',
    emotionalTone: 'Negative',
    instancesCount: 3,
    sentimentTrend: 'Downward',
    brandSentiment: 'Negative',
  },
  {
    id: '104',
    callRecording: 'https://example.com/call/recording4.mp3',
    typeOfCall: 'Feedback',
    callDuration: 300, // In seconds
    holdTime: 60, // In seconds
    talkToListenRatio: 1.2,
    interruptionsCount: 1,
    emotionalToneOfCustomer: 'Positive',
    emotionalTone: 'Positive',
    instancesCount: 4,
    sentimentTrend: 'Upward',
    brandSentiment: 'Positive',
  },
  {
    id: '105',
    callRecording: 'https://example.com/call/recording5.mp3',
    typeOfCall: 'Follow-Up',
    callDuration: 450, // In seconds
    holdTime: 150, // In seconds
    talkToListenRatio: 1.0,
    interruptionsCount: 0,
    emotionalToneOfCustomer: 'Neutral',
    emotionalTone: 'Neutral',
    instancesCount: 6,
    sentimentTrend: 'Steady',
    brandSentiment: 'Neutral',
  },
];
