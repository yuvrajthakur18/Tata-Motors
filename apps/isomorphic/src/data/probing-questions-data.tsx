export type ProbingQuestionsDataType = (typeof probingQuestionsData)[number];

export const probingQuestionsData = [
  {
    id: '501',
    agentName: 'Agent Smith',
    customerName: 'John Doe',
    questions: [
      'What issue are you facing with the product?',
      'Have you encountered this issue before?',
    ],
    purposeOfInquiry: 'To identify the root cause of the issue.',
    analysis:
      'The customer is facing a recurring technical problem that requires escalation.',
  },
  {
    id: '502',
    agentName: 'Agent Taylor',
    customerName: 'Jane Smith',
    questions: [
      'Can you describe the issue in detail?',
      'What outcome are you expecting?',
    ],
    purposeOfInquiry: 'To understand the customer’s expectations.',
    analysis:
      'Customer is concerned about the delay in service and expects a quicker resolution.',
  },
  {
    id: '503',
    agentName: 'Agent Lee',
    customerName: 'Alice Johnson',
    questions: [
      'When did the issue first occur?',
      'Has there been any recent change to your setup?',
    ],
    purposeOfInquiry: 'To gather context about the issue’s origin.',
    analysis: 'The issue is related to a recent configuration change.',
  },
  {
    id: '504',
    agentName: 'Agent Clark',
    customerName: 'Bob Brown',
    questions: [
      'Are you satisfied with the resolution provided?',
      'Is there anything else we can assist you with?',
    ],
    purposeOfInquiry: 'To ensure customer satisfaction post-resolution.',
    analysis:
      'Customer is satisfied with the solution but requires follow-up on another issue.',
  },
  {
    id: '505',
    agentName: 'Agent Miller',
    customerName: 'Chris Green',
    questions: [
      'Can you share the exact error message you’re seeing?',
      'Have you tried restarting the device?',
    ],
    purposeOfInquiry: 'To troubleshoot the technical issue.',
    analysis: 'The problem appears to be related to a temporary system error.',
  },
];
