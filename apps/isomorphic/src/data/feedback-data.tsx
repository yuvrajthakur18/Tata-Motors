export type FeedbackDataType = {
  focusArea: string;
  keyIssue: string;
  coachingPoints: string;
  feedbackForAgent: string;
};

export const feedbackData: FeedbackDataType[] = [
  {
    focusArea: 'Effective Communication',
    keyIssue: 'Lack of clarity in explaining product features.',
    coachingPoints:
      'Simplify technical details to make them understandable for all customers.',
    feedbackForAgent:
      'Focus on improving clarity in explanations, especially for non-technical customers.',
  },
  {
    focusArea: 'Empathy',
    keyIssue: 'Limited acknowledgment of customer frustration.',
    coachingPoints:
      'Use empathetic phrases such as “I understand how you feel” or “I’m here to help.”',
    feedbackForAgent:
      'Work on acknowledging customer emotions more effectively during interactions.',
  },
  {
    focusArea: 'Ownership',
    keyIssue: 'Reluctance to take full ownership of unresolved cases.',
    coachingPoints:
      'Demonstrate accountability by following up on unresolved issues until closure.',
    feedbackForAgent:
      'Take more ownership of cases by ensuring proper follow-up and resolution.',
  },
  {
    focusArea: 'Time Management & Hold Time',
    keyIssue: 'Extended hold time during calls.',
    coachingPoints:
      'Minimize hold time by preparing necessary resources beforehand.',
    feedbackForAgent:
      'Focus on reducing hold times by organizing resources and multitasking effectively.',
  },
  {
    focusArea: 'Proactive Communication',
    keyIssue: 'Delayed responses to customer inquiries.',
    coachingPoints:
      'Provide timely updates to keep customers informed about the status of their cases.',
    feedbackForAgent:
      'Be more proactive in communicating updates and next steps with customers.',
  },
  {
    focusArea: 'Expertise & Resolution Closure',
    keyIssue: 'Inconsistent resolution of complex cases.',
    coachingPoints:
      'Enhance knowledge of advanced troubleshooting techniques through additional training.',
    feedbackForAgent:
      'Focus on expanding your product knowledge to ensure consistent case resolution.',
  },
];
