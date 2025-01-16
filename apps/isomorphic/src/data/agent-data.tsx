export type AgentDataType = (typeof agentData)[number];

export const agentData = [
  {
    id: '201',
    agentName: 'John Smith',
    callsHandled: 50,
    duration: 3600, // In seconds (total duration of all calls handled)
    holdTime: 600, // In seconds (total hold time across all calls)
    talkToListenRatio: 1.5,
    interruptionsCount: 10,
    casesSolved: 45,
    agentEfficiency: 90, // Percentage
    brandMentions: 5, // Includes competitors
    overallPerformance: 'Excellent', // Text-based performance summary
  },
  {
    id: '202',
    agentName: 'Jane Doe',
    callsHandled: 45,
    duration: 3000, // In seconds
    holdTime: 500, // In seconds
    talkToListenRatio: 1.2,
    interruptionsCount: 8,
    casesSolved: 40,
    agentEfficiency: 88, // Percentage
    brandMentions: 3,
    overallPerformance: 'Good',
  },
  {
    id: '203',
    agentName: 'Mark Taylor',
    callsHandled: 60,
    duration: 4000, // In seconds
    holdTime: 700, // In seconds
    talkToListenRatio: 1.7,
    interruptionsCount: 12,
    casesSolved: 55,
    agentEfficiency: 92, // Percentage
    brandMentions: 4,
    overallPerformance: 'Excellent',
  },
  {
    id: '204',
    agentName: 'Lisa Ray',
    callsHandled: 40,
    duration: 2400, // In seconds
    holdTime: 400, // In seconds
    talkToListenRatio: 1.0,
    interruptionsCount: 6,
    casesSolved: 38,
    agentEfficiency: 85, // Percentage
    brandMentions: 2,
    overallPerformance: 'Good',
  },
  {
    id: '205',
    agentName: 'Tom Hanks',
    callsHandled: 55,
    duration: 3600, // In seconds
    holdTime: 650, // In seconds
    talkToListenRatio: 1.4,
    interruptionsCount: 9,
    casesSolved: 50,
    agentEfficiency: 91, // Percentage
    brandMentions: 6,
    overallPerformance: 'Very Good',
  },
];
