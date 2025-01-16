export type AgentThresholdData = {
  metric: string;
  score: number;
  idealThreshold: string;
  evidenceFromTranscript: string;
};

export const agentThresholdData: AgentThresholdData[] = [
  {
    metric: 'Rapport Building (out of 10)',
    score: 8,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Agent demonstrated excellent rapport by acknowledging the customer’s concerns and building trust.',
  },
  {
    metric: 'Empathy (out of 10)',
    score: 9,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Agent expressed empathy multiple times, using phrases like “I understand how frustrating this must be for you.”',
  },
  {
    metric: 'Articulation and Clarity (out of 10)',
    score: 7,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Some explanations were clear, but technical details could have been simplified further for the customer.',
  },
  {
    metric: 'Product Knowledge (out of 10)',
    score: 9,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Agent displayed strong knowledge by accurately explaining product features and troubleshooting steps.',
  },
  {
    metric: 'Objection Handling (out of 10)',
    score: 8,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Handled objections effectively, addressing the customer’s hesitations with logical reasoning and reassurance.',
  },
  {
    metric: 'Appropriate Probing (out of 10)',
    score: 9,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Asked relevant follow-up questions to identify the root cause of the customer’s issue.',
  },
  {
    metric: 'Adaptability (out of 10)',
    score: 8,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Adapted well to the changing tone of the conversation and adjusted responses accordingly.',
  },
  {
    metric: 'Problem Identification (out of 10)',
    score: 10,
    idealThreshold: '8/10',
    evidenceFromTranscript:
      'Quickly identified the core issue by carefully listening to the customer’s explanation.',
  },
];
