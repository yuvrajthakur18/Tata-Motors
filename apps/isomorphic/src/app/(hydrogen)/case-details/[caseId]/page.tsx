// @ts-nocheck
import React from 'react';
import { notFound } from 'next/navigation';
import IndividualCallDetails from '../../../components/IndividualCallDetails'; // Import the new component
import QAScoring from '../../../components/QAScoring'; // Import the QAScoring component
import ProbingQuestions from '../../../components/ProbingQuestions'; // Import the ProbingQuestions component
import BrandSentiments from '../../../components/BrandSentiments'; // Import BrandSentiments component
import EmpathyAnalysis from '../../../components/EmpathyAnalysis'; // Import the new component
import AgentPerformanceScore from '../../../components/AgentPerformanceScore'; // Import AgentPerformanceScore
import AgentThresholdMapping from '../../../components/AgentThresholdMapping'; // Import the Agent Threshold Mapping component
import SuggestedCoaching from '../../../components/SuggestedCoaching'; // Import SuggestedCoaching
import ActionPlanDetails from '../../../components/ActionPlanDetails'; // Import the ActionPlanDetails component
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

// Define the types for case data
type CaseData = {
  caseId: string;
  caseNumber: string;
  caseStatus: string;
  agentPerformance: string;
  agentPerformanceScore: string;
  agentQaRating: string;
  agentQaScore: string;
  agentAction: string;
  caseType: string;
  severity: string;
  summary: string;
  issueBucket: string;
  issueCause: string;
  brandPerception: string;
  brandLoyalty: string;
  brandTrust: string;
  brandMentionsCustomer: string;
  brandMentionsAgent: string;
  competitorMentions: string;
  anticipatedSentiment: string;
  issuesAffectingSentiment: string;
  customerAction: string;
  customerNpsScore: string;
  vehicleNumber: string;
  vehicleModel: string;
  breakdownLocation: string;
  customerName: string;
  agentsInvolved: string;
  techniciansInvolved: string;
  totalCaseDuration: string;
  totalHoldTime: string;
  emotionalTrend: string;
  totalCalls: string;
  emotionalAnalysis: string;
  direction: string;
  transcription: string;
  participantsCount: string;
  callDuration: string;
  callHoldTime: string;
  talkToListenRatio: string;
  customerEmotionalTone: string;
  empathyDetection: string;

  // Add additional fields for call details
  individualCallDetails: {
    callId: string;
    callRecording: string;
    callDirection: string;
    natureOfCases: string;
    summary: string;
    transcription: string;
    participantsNames: string;
    customerType: string;
    owner: string;
    driver: string;
    callDuration: string;
    holdTime: string;
    talkToListenRatio: string;
    interruptionsCount: string;
    emotionalToneOfCustomer: string;
    emotionalToneInstancesCount: string;
    emotionalToneInstances: string;
    emotionalToneAnalysis: string;
    sentimentTrend: string;
    brandSentiment: string;
    empathyDetection: string;
  };

  // Add fields for Q&A scoring
  qaScoring: {
    agentsQuestion: string;
    customersResponse: string;
    scoreCriteria: string;
    score: number; // 1-5
    comments: string;
  }[];

  // Probing questions
  probingQuestions: {
    question: string;
    purposeOfProbing: string;
    analysis: string;
  }[];

  brandSentiments: {
    category: string;
    product: string;
    workshop: string;
    people: string;
    process: string;
    indicator: string;
    containsBothNegativeAndPositive: string;
    frequencyOfFrustrationRow: string;
    numberOnNegative: string;
    numberOnPositive: string;
    analysis: string;
    analysisGivenOnlyOnNegativeText: string;
  };

  // Add Empathy Analysis data
  empathyAnalysis: Array<{
    customerStatement: string;
    agentEmpatheticResponse: string;
  }>;

  // Additional fields for Agent Performance Score
  agentPerformanceScoreData: {
    parameter: string;
    description: string;
    score: number;
    comments: string;
  }[];

  // New field for coaching data
  agentThresholdMapping: {
    parameter: string;
    score: number;
    evidence: string;
  }[];

  // Suggested Coaching Data
  suggestedCoaching: {
    focusArea: string;
    effectiveCommunication: string;
    empathy: string;
    ownership: string;
    timeManagementHoldTime: string;
    proactiveCommunication: string;
    expertiseResolutionClosure: string;
    keyIssue: string;
    coachingPoints: string;
    feedbackForAgent: string;
  };

  // Action Plan Data for TL/CX Manager
  actionPlanDetails: {
    actionPoint: string;
    actionDescription: string;
    impact: string;
  }[];
};

// Define the dataset
type CaseDataSet = {
  [caseId: string]: CaseData;
};

// const data: CaseDataSet = {
//   '1-195443085176': {
//     caseNumber: '1-195443085176',
//     caseStatus: 'Resolved',
//     agentPerformance: 'Below Expectations',
//     agentPerformanceScore: '2.6/5',
//     agentQaRating: 'Needs Improvement',
//     agentQaScore: '33/50 (66%)',
//     agentAction:
//       "The agent's performance needs significant improvement, particularly in proactive communication, taking ownership, and managing the case resolution effectively. The lack of follow-up and timely updates impacted customer satisfaction.",
//     caseType: 'Support',
//     severity: 'High',
//     summary:
//       'The customer reported a vehicle breakdown due to high temperature, followed by coordination for assistance and a final inquiry about the repair status. The customer expressed dissatisfaction and confusion during the calls, but the issue was ultimately resolved.',
//     issueBucket: 'Vehicle Breakdown',
//     issueCause: 'Due to high temperature',
//     brandPerception: 'Negative',
//     brandLoyalty: 'Immediate negative impact due to poor service experience.',
//     brandTrust:
//       '1- Diminished trust in the brand.\n2- Decreased future purchases or service requests.',
//     brandMentionsCustomer: 'No',
//     brandMentionsAgent:
//       '1- Can the vehicle go to a Tata Motors workshop?\n2- Is it a Tata vehicle\n3- Is the vehicle able to go to a Tata Motors workshop?',
//     competitorMentions: 'No',
//     anticipatedSentiment:
//       '1- Frustration leading to negative word-of-mouth.\n2- Reduced brand loyalty.',
//     issuesAffectingSentiment:
//       '1- Recurring overheating issue, unresolved after previous repairs.\n2- Replaced parts did not resolve the problem, indicating poor diagnostic or repair quality.\n3- Perceived lack of actionable support or knowledgeable assistance from staff.\n4- Repeatedly asking for details (location), lack of follow-up, and ineffective communication.',
//     customerAction:
//       '1- Likely negative word-of-mouth.\n2- Possible avoidance of Tata Motors for future purchases or services.',
//     customerNpsScore: '-',
//     vehicleNumber: 'MH 15 HH 2803',
//     vehicleModel: '-',
//     breakdownLocation: 'Deshmanega, near Aurangabad Nasik Highway',
//     customerName: 'Sagar Ramesh Boradesh',
//     agentsInvolved: '1 - Bharati (Support)\n2 - Deepak (Feedback)',
//     techniciansInvolved: '1 - Shubham',
//     totalCaseDuration: '19 min 7 sec',
//     totalHoldTime: '6 min 13 sec',
//     emotionalTrend: 'Start - Frustrated\nMid - Dissapointed\nEnd - Neutral',
//     totalCalls: '3',
//     emotionalAnalysis: 'see: R42, S42',
//     direction: 'inbound / outbound',
//     transcription: '',
//     participantsCount: '',
//     callDuration: '',
//     callHoldTime: '',
//     talkToListenRatio:
//       '23: 37 (in a minute, agent is speaking 23 words and listening to 37 words)',
//     customerEmotionalTone: '',
//     empathyDetection: 'How did the agent empathise',

//     // Individual call details data
//     individualCallDetails: {
//       callId: 'C001',
//       callRecording: 'recording-url',
//       callDirection: 'Inbound',
//       natureOfCases: 'Repair',
//       summary: 'Customer explained the issue with the AC.',
//       transcription: 'Transcription of the call goes here.',
//       participantsNames: 'Rajesh Kumar, Priya (Agent)',
//       customerType: 'New',
//       owner: 'Rajesh Kumar',
//       driver: 'No',
//       callDuration: '6 min',
//       holdTime: '2 min',
//       talkToListenRatio: '50: 50',
//       interruptionsCount: '0',
//       emotionalToneOfCustomer: 'Concerned',
//       emotionalToneInstancesCount: '2',
//       emotionalToneInstances: 'Start - Concerned, End - Happy',
//       emotionalToneAnalysis:
//         'The customer was concerned initially but satisfied after resolution.',
//       sentimentTrend: 'Positive',
//       brandSentiment: 'Positive',
//       empathyDetection: 'Agent was empathetic towards the customer.',
//     },

//     // qaScoring
//     qaScoring: [
//       {
//         agentsQuestion: 'What is your main concern?',
//         customersResponse: 'The product stopped working after two days.',
//         scoreCriteria: 'Clarity of response',
//         score: 4,
//         comments: 'Response was clear and concise.',
//       },
//     ],

//     probingQuestions: [
//       {
//         question: 'Can you describe the issue in more detail?',
//         purposeOfProbing: 'To gather more context',
//         analysis:
//           'Customer provided additional details about the screen issue.',
//       },
//       {
//         question: 'How long have you been experiencing this issue?',
//         purposeOfProbing: 'To understand the timeline of the problem',
//         analysis: 'Customer mentioned the issue started 3 days ago.',
//       },
//     ],

//     brandSentiments: {
//       category: 'Product',
//       product: 'Smartphone XYZ',
//       workshop: 'N/A',
//       people: 'N/A',
//       process: 'N/A',
//       indicator: 'Contains both Negative and Positive',
//       containsBothNegativeAndPositive: 'Yes',
//       frequencyOfFrustrationRow: 'Moderate',
//       numberOnNegative: '12',
//       numberOnPositive: '18',
//       analysis:
//         'Praised for its sleek design but criticized for short battery life.',
//       analysisGivenOnlyOnNegativeText:
//         'Customers often mentioned dissatisfaction with battery performance.',
//     },

//     empathyAnalysis: [
//       {
//         customerStatement: 'I am really frustrated with this delay in service.',
//         agentEmpatheticResponse:
//           'I completely understand your frustration, and I apologize for the inconvenience caused.',
//       },
//     ],

//     agentPerformanceScoreData: [
//       {
//         parameter: 'Communication Effectiveness',
//         description: 'Clear and concise communication during the call.',
//         score: 5,
//         comments: 'Handled the conversation professionally.',
//       },
//     ],

//     agentThresholdMapping: [
//       {
//         parameter: 'Rapport Building',
//         score: 8,
//         evidence: 'Agent greeted warmly.',
//       },
//       {
//         parameter: 'Empathy',
//         score: 9,
//         evidence: "Acknowledged customer's concerns.",
//       },
//       {
//         parameter: 'Articulation and Clarity',
//         score: 7,
//         evidence: 'Explained the issue clearly.',
//       },
//       {
//         parameter: 'Product Knowledge',
//         score: 9,
//         evidence: 'Provided accurate technical details.',
//       },
//       {
//         parameter: 'Objection Handling',
//         score: 8,
//         evidence: "Addressed customer's doubts effectively.",
//       },
//       {
//         parameter: 'Appropriate Probing',
//         score: 7,
//         evidence: 'Asked relevant questions.',
//       },
//       {
//         parameter: 'Adaptability',
//         score: 8,
//         evidence: 'Adjusted approach based on customer input.',
//       },
//     ],

//     suggestedCoaching: {
//       focusArea: 'Effective Communication',
//       effectiveCommunication:
//         'Agent should ensure clearer explanations of next steps.',
//       empathy: "Acknowledged customer's frustration effectively.",
//       ownership: 'Take proactive ownership of customer issues.',
//       timeManagementHoldTime: 'Minimize hold times during calls.',
//       proactiveCommunication: 'Provide timely updates on service status.',
//       expertiseResolutionClosure:
//         'Enhance technical knowledge for faster resolutions.',
//       keyIssue: 'Engine performance issue not detected earlier.',
//       coachingPoints:
//         'Regularly monitor service intervals to avoid escalation.',
//       feedbackForAgent:
//         'Agent performed well but should improve on technical knowledge.',
//     },

//     actionPlanDetails: [
//       {
//         actionPoint: 'Review customer feedback',
//         actionDescription: 'Analyze feedback for improvement',
//         impact: 'Improved customer satisfaction',
//       },
//       {
//         actionPoint: 'Increase technician training',
//         actionDescription: 'Train technicians on quick fixes',
//         impact: 'Reduced breakdown resolution time',
//       },
//       {
//         actionPoint: 'Improve follow-up process',
//         actionDescription: 'Ensure timely follow-ups with customers',
//         impact: 'Increased customer loyalty',
//       },
//       {
//         actionPoint: 'Enhance emotional tone analysis',
//         actionDescription: 'Upgrade tools for better sentiment detection',
//         impact: 'More accurate emotional insights',
//       },
//       {
//         actionPoint: 'Optimize vehicle breakdown detection',
//         actionDescription: 'Implement predictive maintenance system',
//         impact: 'Fewer breakdown incidents',
//       },
//       {
//         actionPoint: 'Provide customer service training',
//         actionDescription: 'Enhance agent communication skills',
//         impact: 'Better customer-agent rapport',
//       },
//       {
//         actionPoint: 'Review case resolution procedures',
//         actionDescription: 'Ensure more efficient case closure',
//         impact: 'Faster resolution and reduced case backlog',
//       },
//     ],
//   },
//   'CN-002': {
//     caseNumber: 'CN-002',
//     caseStatus: 'Open',
//     agentPerformance: 'Satisfactory',
//     agentPerformanceScore: '3.8/5',
//     agentQaRating: 'Good',
//     agentQaScore: '40/50 (80%)',
//     agentAction:
//       "The agent was able to answer most of the customer's questions but failed to provide a follow-up for resolution. The case requires additional attention to meet the customer's expectations.",
//     caseType: 'Support',
//     severity: 'Medium',
//     summary:
//       'The customer inquired about the delayed shipment of a vehicle part. The case remains unresolved as the part has not yet been shipped.',
//     issueBucket: 'Delayed Shipment',
//     issueCause: 'Unavailability of stock',
//     brandPerception: 'Neutral',
//     brandLoyalty: 'No noticeable change yet.',
//     brandTrust:
//       'Customer expressed concern over delayed timelines but hasn’t lost complete trust in the brand.',
//     brandMentionsCustomer: 'No',
//     brandMentionsAgent: 'No',
//     competitorMentions: 'Yes, competitor XYZ has faster delivery times.',
//     anticipatedSentiment:
//       '1- Mild frustration leading to possible loss of trust.\n2- Continued delays could turn loyalty negative.',
//     issuesAffectingSentiment:
//       '1- Lack of proactive updates.\n2- Delays without reasonable explanation.',
//     customerAction: 'Awaiting resolution, no immediate impact on loyalty.',
//     customerNpsScore: '7',
//     vehicleNumber: 'MH 12 XY 9876',
//     vehicleModel: 'Nexon EV',
//     breakdownLocation: 'N/A',
//     customerName: 'Rajiv Mehta',
//     agentsInvolved: '1 - Karan',
//     techniciansInvolved: 'None',
//     totalCaseDuration: '3 days',
//     totalHoldTime: '2 min',
//     emotionalTrend: 'Start - Neutral\nMid - Frustrated\nEnd - Mildly Satisfied',
//     totalCalls: '1',
//     emotionalAnalysis: 'see: R45, S13',
//     direction: 'inbound',
//     transcription: '',
//     participantsCount: '',
//     callDuration: '7 min',
//     callHoldTime: '2 min',
//     talkToListenRatio:
//       '25: 75 (customer talked more due to expressing concerns)',
//     customerEmotionalTone: 'Mildly frustrated',
//     empathyDetection: 'Agent acknowledged the delays and apologized sincerely.',

//     individualCallDetails: {
//       callId: 'C002',
//       callRecording: 'recording-url-2',
//       callDirection: 'Outbound',
//       natureOfCases: 'Inquiry',
//       summary: 'Customer inquired about warranty policies.',
//       transcription: 'The agent explained the warranty details.',
//       participantsNames: 'Sunil Verma, Anjali (Agent)',
//       customerType: 'Existing',
//       owner: 'Sunil Verma',
//       driver: 'No',
//       callDuration: '10 min',
//       holdTime: '1 min',
//       talkToListenRatio: '40: 60',
//       interruptionsCount: '1',
//       emotionalToneOfCustomer: 'Neutral',
//       emotionalToneInstancesCount: '1',
//       emotionalToneInstances: 'Neutral throughout',
//       emotionalToneAnalysis: 'Customer was calm and attentive.',
//       sentimentTrend: 'Neutral',
//       brandSentiment: 'Neutral',
//       empathyDetection: 'Agent maintained a professional tone.',
//     },

//     qaScoring: [
//       {
//         agentsQuestion: 'Can you describe the issue in more detail?',
//         customersResponse:
//           'It stopped working while I was driving on the highway.',
//         scoreCriteria: 'Detail of response',
//         score: 5,
//         comments:
//           'Customer provided a detailed and clear explanation of the issue.',
//       },
//     ],

//     probingQuestions: [
//       {
//         question:
//           'Can you explain when you first noticed the incorrect charges?',
//         purposeOfProbing:
//           'To gather more information about the timing of the issue',
//         analysis:
//           'Customer mentioned noticing the charges during the last billing cycle.',
//       },
//       {
//         question: 'What specific charges are you referring to?',
//         purposeOfProbing:
//           'To clarify the exact nature of the incorrect charges',
//         analysis: 'Customer identified an extra charge for an unused service.',
//       },
//     ],

//     brandSentiments: {
//       category: 'Workshop',
//       product: 'N/A',
//       workshop: 'Car Service Center ABC',
//       people: 'N/A',
//       process: 'N/A',
//       indicator: 'Contains both Negative and Positive',
//       containsBothNegativeAndPositive: 'Yes',
//       frequencyOfFrustrationRow: 'High',
//       numberOnNegative: '15',
//       numberOnPositive: '10',
//       analysis:
//         'Customers appreciated the clean waiting area but complained about long delays.',
//       analysisGivenOnlyOnNegativeText:
//         'Most complaints focused on waiting times exceeding expectations.',
//     },

//     empathyAnalysis: [
//       {
//         customerStatement: 'Why wasn’t I informed about the delay earlier?',
//         agentEmpatheticResponse:
//           "You're absolutely right, and we should have kept you updated. I’m sorry we didn’t.",
//       },
//     ],

//     agentPerformanceScoreData: [
//       {
//         parameter: 'Empathy & Emotional Intelligence',
//         description: "Demonstrated understanding of the customer's concerns.",
//         score: 4,
//         comments: 'Could improve acknowledgment of emotions.',
//       },
//     ],

//     agentThresholdMapping: [
//       {
//         parameter: 'Rapport Building',
//         score: 7,
//         evidence: 'Agent initiated the call courteously.',
//       },
//       {
//         parameter: 'Empathy',
//         score: 6,
//         evidence: "Acknowledged the customer's frustration.",
//       },
//       {
//         parameter: 'Articulation and Clarity',
//         score: 8,
//         evidence: 'Provided clear explanations.',
//       },
//       {
//         parameter: 'Product Knowledge',
//         score: 6,
//         evidence: 'Had to verify details multiple times.',
//       },
//       {
//         parameter: 'Objection Handling',
//         score: 7,
//         evidence: 'Resolved customer concerns effectively.',
//       },
//       {
//         parameter: 'Appropriate Probing',
//         score: 8,
//         evidence: 'Asked precise follow-up questions.',
//       },
//       {
//         parameter: 'Adaptability',
//         score: 7,
//         evidence: 'Adjusted explanations based on customer input.',
//       },
//     ],

//     suggestedCoaching: {
//       focusArea: 'Empathy',
//       effectiveCommunication: 'Agent should continue providing clear guidance.',
//       empathy: 'Acknowledged customer’s confusion effectively.',
//       ownership: 'Agent demonstrated ownership of the issue.',
//       timeManagementHoldTime: 'Keep hold time to a minimum.',
//       proactiveCommunication:
//         'Proactively suggested additional features of the GPS.',
//       expertiseResolutionClosure:
//         'Keep up-to-date knowledge of system updates.',
//       keyIssue: 'Outdated GPS maps caused inconvenience.',
//       coachingPoints:
//         'Promote regular updates to customers for system efficiency.',
//       feedbackForAgent: 'Excellent performance, keep up the good work.',
//     },

//     actionPlanDetails: [
//       {
//         actionPoint: 'Review customer feedback',
//         actionDescription: 'Analyze feedback for improvement',
//         impact: 'Improved customer satisfaction',
//       },
//       {
//         actionPoint: 'Increase technician training',
//         actionDescription: 'Train technicians on quick fixes',
//         impact: 'Reduced breakdown resolution time',
//       },
//       {
//         actionPoint: 'Improve follow-up process',
//         actionDescription: 'Ensure timely follow-ups with customers',
//         impact: 'Increased customer loyalty',
//       },
//       {
//         actionPoint: 'Enhance emotional tone analysis',
//         actionDescription: 'Upgrade tools for better sentiment detection',
//         impact: 'More accurate emotional insights',
//       },
//       {
//         actionPoint: 'Optimize vehicle breakdown detection',
//         actionDescription: 'Implement predictive maintenance system',
//         impact: 'Fewer breakdown incidents',
//       },
//       {
//         actionPoint: 'Provide customer service training',
//         actionDescription: 'Enhance agent communication skills',
//         impact: 'Better customer-agent rapport',
//       },
//       {
//         actionPoint: 'Review case resolution procedures',
//         actionDescription: 'Ensure more efficient case closure',
//         impact: 'Faster resolution and reduced case backlog',
//       },
//       {
//         actionPoint: 'Improve customer interaction logs',
//         actionDescription:
//           'Ensure all interactions are properly logged and tracked',
//         impact: 'Better case tracking and transparency',
//       },
//       {
//         actionPoint: 'Strengthen internal communication',
//         actionDescription:
//           'Establish more frequent check-ins with all involved agents',
//         impact: 'Faster collaboration and problem-solving',
//       },
//       {
//         actionPoint: 'Implement root cause analysis',
//         actionDescription: 'Investigate deeper into recurring issues',
//         impact: 'Identify and prevent recurring customer complaints',
//       },
//     ],
//   },
//   'CN-003': {
//     caseNumber: 'CN-003',
//     caseStatus: 'Closed',
//     agentPerformance: 'Excellent',
//     agentPerformanceScore: '4.9/5',
//     agentQaRating: 'Outstanding',
//     agentQaScore: '49/50 (98%)',
//     agentAction:
//       'The agent demonstrated empathy, took ownership, and resolved the issue promptly.',
//     caseType: 'Repair',
//     severity: 'Low',
//     summary:
//       'The customer reported a minor issue with the infotainment system.',
//     issueBucket: 'Software Glitch',
//     issueCause: 'Outdated software version.',
//     brandPerception: 'Positive',
//     brandLoyalty: 'Improved due to excellent service.',
//     brandTrust: 'Customer praised the brand for efficient service.',
//     brandMentionsCustomer: 'No',
//     brandMentionsAgent: 'Yes',
//     competitorMentions: 'No',
//     anticipatedSentiment: 'Positive word-of-mouth.',
//     issuesAffectingSentiment: 'None.',
//     customerAction: 'Satisfied.',
//     customerNpsScore: '10',
//     vehicleNumber: 'MH 43 XX 1234',
//     vehicleModel: 'Harrier',
//     breakdownLocation: 'N/A',
//     customerName: 'Priya Kulkarni',
//     agentsInvolved: '1 - Sameer',
//     techniciansInvolved: '1 - Ramesh',
//     totalCaseDuration: '4 hours',
//     totalHoldTime: '1 min',
//     emotionalTrend: 'Start - Concerned\nMid - Neutral\nEnd - Happy',
//     totalCalls: '2',
//     emotionalAnalysis: 'see: R48, S16',
//     direction: 'inbound',
//     transcription: '',
//     participantsCount: '',
//     callDuration: '5 min',
//     callHoldTime: '1 min',
//     talkToListenRatio: '45: 55',
//     customerEmotionalTone: 'Grateful',
//     empathyDetection: 'Agent listened and responded warmly.',

//     individualCallDetails: {
//       callId: 'C003',
//       callRecording: 'recording-url-3',
//       callDirection: 'Inbound',
//       natureOfCases: 'Complaint',
//       summary: 'Customer complained about a delayed delivery.',
//       transcription: 'Customer was frustrated due to the delay.',
//       participantsNames: 'Pooja Singh, Ravi (Agent)',
//       customerType: 'Existing',
//       owner: 'Pooja Singh',
//       driver: 'Yes',
//       callDuration: '8 min',
//       holdTime: '3 min',
//       talkToListenRatio: '70: 30',
//       interruptionsCount: '3',
//       emotionalToneOfCustomer: 'Frustrated',
//       emotionalToneInstancesCount: '3',
//       emotionalToneInstances: 'Start - Frustrated, End - Neutral',
//       emotionalToneAnalysis:
//         'Customer frustration reduced after reassurance by the agent.',
//       sentimentTrend: 'Neutral',
//       brandSentiment: 'Negative',
//       empathyDetection: 'Agent showed understanding of the delay issue.',
//     },

//     qaScoring: [
//       {
//         agentsQuestion: 'What troubleshooting steps have you already taken?',
//         customersResponse: 'I tried turning it off and on, but it didn’t help.',
//         scoreCriteria: 'Clarity of response',
//         score: 3,
//         comments:
//           'Response was clear, but lacked additional details on troubleshooting steps.',
//       },
//     ],

//     probingQuestions: [
//       {
//         question:
//           'Can you explain when you first noticed the incorrect charges?',
//         purposeOfProbing:
//           'To gather more information about the timing of the issue',
//         analysis:
//           'Customer mentioned noticing the charges during the last billing cycle.',
//       },
//       {
//         question: 'What specific charges are you referring to?',
//         purposeOfProbing:
//           'To clarify the exact nature of the incorrect charges',
//         analysis: 'Customer identified an extra charge for an unused service.',
//       },
//     ],

//     brandSentiments: {
//       category: 'People',
//       product: 'N/A',
//       workshop: 'N/A',
//       people: 'Customer Support Team',
//       process: 'N/A',
//       indicator: 'Contains both Negative and Positive',
//       containsBothNegativeAndPositive: 'Yes',
//       frequencyOfFrustrationRow: 'Low',
//       numberOnNegative: '6',
//       numberOnPositive: '20',
//       analysis:
//         'Staff was friendly but lacked product knowledge during interactions.',
//       analysisGivenOnlyOnNegativeText:
//         'Negative feedback centered around unresolved technical queries.',
//     },

//     empathyAnalysis: [
//       {
//         customerStatement: 'Why wasn’t I informed about the delay earlier?',
//         agentEmpatheticResponse:
//           "You're absolutely right, and we should have kept you updated. I’m sorry we didn’t.",
//       },
//     ],

//     agentPerformanceScoreData: [
//       {
//         parameter: 'Ownership & Accountability',
//         description: 'Took full responsibility for resolving the issue.',
//         score: 5,
//         comments: 'Displayed excellent accountability.',
//       },
//     ],

//     agentThresholdMapping: [
//       {
//         parameter: 'Rapport Building',
//         score: 7,
//         evidence: 'Agent initiated the call courteously.',
//       },
//       {
//         parameter: 'Empathy',
//         score: 6,
//         evidence: "Acknowledged the customer's frustration.",
//       },
//       {
//         parameter: 'Articulation and Clarity',
//         score: 8,
//         evidence: 'Provided clear explanations.',
//       },
//       {
//         parameter: 'Product Knowledge',
//         score: 6,
//         evidence: 'Had to verify details multiple times.',
//       },
//       {
//         parameter: 'Objection Handling',
//         score: 7,
//         evidence: 'Resolved customer concerns effectively.',
//       },
//       {
//         parameter: 'Appropriate Probing',
//         score: 8,
//         evidence: 'Asked precise follow-up questions.',
//       },
//       {
//         parameter: 'Adaptability',
//         score: 7,
//         evidence: 'Adjusted explanations based on customer input.',
//       },
//     ],

//     suggestedCoaching: {
//       focusArea: 'Ownership',
//       effectiveCommunication:
//         'Agent should take more initiative in resolving customer issues.',
//       empathy:
//         'Agent needs to improve empathy in handling frustrated customers.',
//       ownership:
//         'Should own the resolution and not escalate the issue prematurely.',
//       timeManagementHoldTime:
//         'Minimize hold time and keep the customer updated.',
//       proactiveCommunication: 'Proactively offer alternative solutions.',
//       expertiseResolutionClosure:
//         'Agent should be more confident in warranty policy handling.',
//       keyIssue: 'Customer frustration due to long delays in claim resolution.',
//       coachingPoints:
//         'Provide clearer communication on claim status and ensure follow-up.',
//       feedbackForAgent:
//         'Agent needs to improve in empathy and reducing escalation times.',
//     },

//     actionPlanDetails: [
//       {
//         actionPoint: 'Review customer feedback',
//         actionDescription: 'Analyze feedback for improvement',
//         impact: 'Improved customer satisfaction',
//       },
//       {
//         actionPoint: 'Increase technician training',
//         actionDescription: 'Train technicians on quick fixes',
//         impact: 'Reduced breakdown resolution time',
//       },
//       {
//         actionPoint: 'Improve follow-up process',
//         actionDescription: 'Ensure timely follow-ups with customers',
//         impact: 'Increased customer loyalty',
//       },
//       {
//         actionPoint: 'Enhance emotional tone analysis',
//         actionDescription: 'Upgrade tools for better sentiment detection',
//         impact: 'More accurate emotional insights',
//       },
//       {
//         actionPoint: 'Optimize vehicle breakdown detection',
//         actionDescription: 'Implement predictive maintenance system',
//         impact: 'Fewer breakdown incidents',
//       },
//       {
//         actionPoint: 'Provide customer service training',
//         actionDescription: 'Enhance agent communication skills',
//         impact: 'Better customer-agent rapport',
//       },
//       {
//         actionPoint: 'Review case resolution procedures',
//         actionDescription: 'Ensure more efficient case closure',
//         impact: 'Faster resolution and reduced case backlog',
//       },
//       {
//         actionPoint: 'Improve customer interaction logs',
//         actionDescription:
//           'Ensure all interactions are properly logged and tracked',
//         impact: 'Better case tracking and transparency',
//       },
//       {
//         actionPoint: 'Strengthen internal communication',
//         actionDescription:
//           'Establish more frequent check-ins with all involved agents',
//         impact: 'Faster collaboration and problem-solving',
//       },
//     ],
//   },
//   'CN-004': {
//     caseNumber: 'CN-004',
//     caseStatus: 'Resolved',
//     agentPerformance: 'Good',
//     agentPerformanceScore: '4.2/5',
//     agentQaRating: 'Satisfactory',
//     agentQaScore: '38/50 (76%)',
//     agentAction:
//       'The agent handled the case promptly and resolved the issue, although follow-up was delayed.',
//     caseType: 'Support',
//     severity: 'Medium',
//     summary:
//       'The customer reported a malfunction with the car’s air conditioning system. The issue was identified and resolved, but the customer’s follow-up experience was delayed.',
//     issueBucket: 'Air Conditioning',
//     issueCause: 'Faulty compressor',
//     brandPerception: 'Neutral',
//     brandLoyalty: 'No immediate impact.',
//     brandTrust:
//       'Customer showed trust in the brand but expressed disappointment with the delayed follow-up.',
//     brandMentionsCustomer: 'No',
//     brandMentionsAgent: 'No',
//     competitorMentions: 'No',
//     anticipatedSentiment:
//       'Neutral with a slight possibility of mild dissatisfaction.',
//     issuesAffectingSentiment: 'Delayed follow-up and repair time.',
//     customerAction:
//       'Likely to continue using the brand with some reservations.',
//     customerNpsScore: '6',
//     vehicleNumber: 'MH 09 AD 4567',
//     vehicleModel: 'Tiago',
//     breakdownLocation: 'N/A',
//     customerName: 'Ravi Kumar',
//     agentsInvolved: '1 - Vikram',
//     techniciansInvolved: '1 - Rakesh',
//     totalCaseDuration: '5 hours',
//     totalHoldTime: '3 min',
//     emotionalTrend: 'Start - Annoyed\nMid - Neutral\nEnd - Satisfied',
//     totalCalls: '2',
//     emotionalAnalysis: 'see: R32, S27',
//     direction: 'inbound',
//     transcription: '',
//     participantsCount: '',
//     callDuration: '4 min',
//     callHoldTime: '3 min',
//     talkToListenRatio:
//       '50: 50 (Customer expressed some frustration, but agent remained calm and effective)',
//     customerEmotionalTone: 'Frustrated but calm',
//     empathyDetection:
//       'Agent acknowledged frustration and expressed understanding.',

//     individualCallDetails: {
//       callId: 'C004',
//       callRecording: 'recording-url-4',
//       callDirection: 'Outbound',
//       natureOfCases: 'Follow-up',
//       summary: 'Agent followed up on a recent complaint resolution.',
//       transcription: 'Agent checked if the issue was resolved.',
//       participantsNames: 'Meena Patel, Vijay (Agent)',
//       customerType: 'Existing',
//       owner: 'Meena Patel',
//       driver: 'No',
//       callDuration: '5 min',
//       holdTime: '0 min',
//       talkToListenRatio: '20: 80',
//       interruptionsCount: '0',
//       emotionalToneOfCustomer: 'Satisfied',
//       emotionalToneInstancesCount: '1',
//       emotionalToneInstances: 'Satisfied throughout',
//       emotionalToneAnalysis:
//         'Customer was satisfied with the resolution and appreciated the follow-up.',
//       sentimentTrend: 'Positive',
//       brandSentiment: 'Positive',
//       empathyDetection: 'Agent showed care by following up proactively.',
//     },
//     qaScoring: [
//       {
//         agentsQuestion: 'Have you noticed any other issues with the product?',
//         customersResponse:
//           'Yes, the screen has been flickering intermittently.',
//         scoreCriteria: 'Clarity and relevance',
//         score: 4,
//         comments: 'Response was relevant and easy to understand.',
//       },
//     ],

//     probingQuestions: [
//       {
//         question:
//           'Can you explain when you first noticed the incorrect charges?',
//         purposeOfProbing:
//           'To gather more information about the timing of the issue',
//         analysis:
//           'Customer mentioned noticing the charges during the last billing cycle.',
//       },
//       {
//         question: 'What specific charges are you referring to?',
//         purposeOfProbing:
//           'To clarify the exact nature of the incorrect charges',
//         analysis: 'Customer identified an extra charge for an unused service.',
//       },
//     ],

//     brandSentiments: {
//       category: 'Product',
//       product: 'Laptop Model ABC',
//       workshop: 'N/A',
//       people: 'N/A',
//       process: 'N/A',
//       indicator: 'Contains both Negative and Positive',
//       containsBothNegativeAndPositive: 'Yes',
//       frequencyOfFrustrationRow: 'Moderate',
//       numberOnNegative: '10',
//       numberOnPositive: '16',
//       analysis:
//         'Performance and display quality were praised, but overheating was a frequent issue.',
//       analysisGivenOnlyOnNegativeText:
//         'Negative mentions were focused on overheating concerns during prolonged usage.',
//     },

//     empathyAnalysis: [
//       {
//         customerStatement: 'This happens all the time with your company.',
//         agentEmpatheticResponse:
//           'I understand how repeated issues can be upsetting, and I assure you we’re working to improve.',
//       },
//     ],

//     agentPerformanceScoreData: [
//       {
//         parameter: 'Time Management & Hold Handling',
//         description: 'Managed hold time effectively and resolved promptly.',
//         score: 4,
//         comments: 'Hold time was slightly longer than expected.',
//       },
//     ],

//     agentThresholdMapping: [
//       {
//         parameter: 'Rapport Building',
//         score: 9,
//         evidence:
//           'Agent established trust with a warm tone and friendly introduction.',
//       },
//       {
//         parameter: 'Empathy',
//         score: 8,
//         evidence:
//           "Demonstrated understanding of the customer's urgency and concern.",
//       },
//       {
//         parameter: 'Articulation and Clarity',
//         score: 9,
//         evidence:
//           'Explained the steps clearly and ensured the customer understood.',
//       },
//       {
//         parameter: 'Product Knowledge',
//         score: 8,
//         evidence:
//           'Quickly provided accurate technical details without hesitation.',
//       },
//       {
//         parameter: 'Objection Handling',
//         score: 8,
//         evidence: "Handled the customer's doubts about pricing effectively.",
//       },
//       {
//         parameter: 'Appropriate Probing',
//         score: 7,
//         evidence:
//           'Asked relevant and specific questions to identify the issue.',
//       },
//       {
//         parameter: 'Adaptability',
//         score: 8,
//         evidence:
//           "Adjusted communication style based on the customer's tone and urgency.",
//       },
//     ],

//     suggestedCoaching: {
//       focusArea: 'Proactive Communication',
//       effectiveCommunication:
//         'Maintain clear and prompt communication about service times.',
//       empathy: 'Agent was empathetic and understood customer needs.',
//       ownership: 'Agent demonstrated excellent ownership of the situation.',
//       timeManagementHoldTime:
//         'Minimal hold time, service was scheduled promptly.',
//       proactiveCommunication:
//         'Provided confirmation and reminders about service.',
//       expertiseResolutionClosure:
//         'Excellent expertise in handling service requests.',
//       keyIssue: 'None, customer was fully satisfied.',
//       coachingPoints:
//         'Continue maintaining high levels of communication with customers.',
//       feedbackForAgent:
//         'Excellent performance, keep up the proactive service approach.',
//     },

//     actionPlanDetails: [
//       {
//         actionPoint: 'Review customer feedback',
//         actionDescription: 'Analyze feedback for improvement',
//         impact: 'Improved customer satisfaction',
//       },
//       {
//         actionPoint: 'Increase technician training',
//         actionDescription: 'Train technicians on quick fixes',
//         impact: 'Reduced breakdown resolution time',
//       },
//       {
//         actionPoint: 'Improve follow-up process',
//         actionDescription: 'Ensure timely follow-ups with customers',
//         impact: 'Increased customer loyalty',
//       },
//       {
//         actionPoint: 'Enhance emotional tone analysis',
//         actionDescription: 'Upgrade tools for better sentiment detection',
//         impact: 'More accurate emotional insights',
//       },
//       {
//         actionPoint: 'Optimize vehicle breakdown detection',
//         actionDescription: 'Implement predictive maintenance system',
//         impact: 'Fewer breakdown incidents',
//       },
//       {
//         actionPoint: 'Provide customer service training',
//         actionDescription: 'Enhance agent communication skills',
//         impact: 'Better customer-agent rapport',
//       },
//       {
//         actionPoint: 'Review case resolution procedures',
//         actionDescription: 'Ensure more efficient case closure',
//         impact: 'Faster resolution and reduced case backlog',
//       },
//       {
//         actionPoint: 'Improve customer interaction logs',
//         actionDescription:
//           'Ensure all interactions are properly logged and tracked',
//         impact: 'Better case tracking and transparency',
//       },
//       {
//         actionPoint: 'Strengthen internal communication',
//         actionDescription:
//           'Establish more frequent check-ins with all involved agents',
//         impact: 'Faster collaboration and problem-solving',
//       },
//     ],
//   },
//   'CN-005': {
//     caseNumber: 'CN-005',
//     caseStatus: 'Pending',
//     agentPerformance: 'Average',
//     agentPerformanceScore: '3.0/5',
//     agentQaRating: 'Needs Improvement',
//     agentQaScore: '30/50 (60%)',
//     agentAction:
//       'The agent was slow to respond and missed some key details during the case resolution process.',
//     caseType: 'Complaint',
//     severity: 'High',
//     summary:
//       'The customer had a dispute about the service charges for a recent repair.',
//     issueBucket: 'Service Charge Discrepancy',
//     issueCause: 'Confusion about pricing policy',
//     brandPerception: 'Negative',
//     brandLoyalty: 'No',
//     brandTrust:
//       'Customer is frustrated and feels that the service was overpriced.',
//     brandMentionsCustomer: 'No',
//     brandMentionsAgent: 'No',
//     competitorMentions:
//       'Yes, customer considering switching to XYZ competitor.',
//     anticipatedSentiment:
//       '1- Anger leading to negative sentiment and brand disengagement.\n2- Likely to choose a competitor based on pricing.',
//     issuesAffectingSentiment:
//       '1- Miscommunication on pricing\n2- No follow-up on the issue.',
//     customerAction: 'May look for alternative service providers.',
//     customerNpsScore: '-2',
//     vehicleNumber: 'MH 04 CR 2345',
//     vehicleModel: 'Tata Safari',
//     breakdownLocation: 'N/A',
//     customerName: 'Anil Patil',
//     agentsInvolved: '1 - Neha',
//     techniciansInvolved: '1 - Sameer',
//     totalCaseDuration: '3 hours',
//     totalHoldTime: '5 min',
//     emotionalTrend: 'Start - Frustrated\nMid - Angry\nEnd - Disappointed',
//     totalCalls: '2',
//     emotionalAnalysis: 'see: R23, S38',
//     direction: 'inbound',
//     transcription: '',
//     participantsCount: '',
//     callDuration: '7 min',
//     callHoldTime: '2 min',
//     talkToListenRatio: '30: 70 (Agent struggled to respond quickly)',
//     customerEmotionalTone: 'Angry',
//     empathyDetection:
//       'The agent made several attempts to apologize, but the customer remained upset.',

//     individualCallDetails: {
//       callId: 'C005',
//       callRecording: 'recording-url-5',
//       callDirection: 'Inbound',
//       natureOfCases: 'Technical Support',
//       summary: 'Customer faced issues with internet connectivity.',
//       transcription: 'Agent guided the customer through troubleshooting steps.',
//       participantsNames: 'Amit Sharma, Neha (Agent)',
//       customerType: 'New',
//       owner: 'Amit Sharma',
//       driver: 'No',
//       callDuration: '15 min',
//       holdTime: '4 min',
//       talkToListenRatio: '60: 40',
//       interruptionsCount: '2',
//       emotionalToneOfCustomer: 'Frustrated',
//       emotionalToneInstancesCount: '2',
//       emotionalToneInstances: 'Start - Frustrated, End - Satisfied',
//       emotionalToneAnalysis:
//         'Customer frustration turned into satisfaction after the issue was resolved.',
//       sentimentTrend: 'Positive',
//       brandSentiment: 'Positive',
//       empathyDetection: 'Agent provided step-by-step guidance with patience.',
//     },
//     qaScoring: [
//       {
//         agentsQuestion: 'When did you first notice the issue?',
//         customersResponse: 'It started happening about two weeks ago.',
//         scoreCriteria: 'Clarity of response',
//         score: 4,
//         comments: 'Clear and specific timeline provided.',
//       },
//     ],

//     probingQuestions: [
//       {
//         question: 'Can you describe the issue in more detail?',
//         purposeOfProbing: 'To gather more context',
//         analysis:
//           'Customer provided additional details about the screen issue.',
//       },
//       {
//         question: 'How long have you been experiencing this issue?',
//         purposeOfProbing: 'To understand the timeline of the problem',
//         analysis: 'Customer mentioned the issue started 3 days ago.',
//       },
//     ],

//     brandSentiments: {
//       category: 'Product',
//       product: 'Laptop Model ABC',
//       workshop: 'N/A',
//       people: 'N/A',
//       process: 'N/A',
//       indicator: 'Contains both Negative and Positive',
//       containsBothNegativeAndPositive: 'Yes',
//       frequencyOfFrustrationRow: 'Moderate',
//       numberOnNegative: '10',
//       numberOnPositive: '16',
//       analysis:
//         'Performance and display quality were praised, but overheating was a frequent issue.',
//       analysisGivenOnlyOnNegativeText:
//         'Negative mentions were focused on overheating concerns during prolonged usage.',
//     },

//     empathyAnalysis: [
//       {
//         customerStatement: 'This delay has caused me a lot of trouble.',
//         agentEmpatheticResponse:
//           'I’m really sorry for the trouble this has caused. Let me see how we can fix this immediately.',
//       },
//     ],

//     agentPerformanceScoreData: [
//       {
//         parameter: 'Proactive Communication',
//         description: 'Provided proactive updates to the customer.',
//         score: 4,
//         comments: 'Could provide more frequent updates.',
//       },
//     ],

//     agentThresholdMapping: [
//       {
//         parameter: 'Rapport Building',
//         score: 6,
//         evidence: 'Agent greeted the customer politely but lacked enthusiasm.',
//       },
//       {
//         parameter: 'Empathy',
//         score: 7,
//         evidence: "Recognized the customer's dissatisfaction and apologized.",
//       },
//       {
//         parameter: 'Articulation and Clarity',
//         score: 8,
//         evidence: 'Provided step-by-step guidance that was easy to follow.',
//       },
//       {
//         parameter: 'Product Knowledge',
//         score: 7,
//         evidence:
//           'Answered most questions accurately but referred one query to a colleague.',
//       },
//       {
//         parameter: 'Objection Handling',
//         score: 6,
//         evidence:
//           'Partially addressed customer objections but missed providing reassurance.',
//       },
//       {
//         parameter: 'Appropriate Probing',
//         score: 8,
//         evidence:
//           'Asked a series of questions to isolate the root cause effectively.',
//       },
//       {
//         parameter: 'Adaptability',
//         score: 7,
//         evidence:
//           "Showed moderate flexibility to cater to the customer's changing mood.",
//       },
//     ],

//     suggestedCoaching: {
//       focusArea: 'Ownership',
//       effectiveCommunication:
//         'Agent should have owned the resolution and provided clear communication.',
//       empathy:
//         'Agent needs to improve empathy and better acknowledge customer frustration.',
//       ownership:
//         'Ensure the issue is handled to resolution instead of escalating prematurely.',
//       timeManagementHoldTime:
//         'Reduce hold time and improve service response time.',
//       proactiveCommunication:
//         'Proactively inform the customer of the steps being taken.',
//       expertiseResolutionClosure:
//         'Agent should have offered solutions or alternatives instead of escalation.',
//       keyIssue: 'Frustration due to service delays.',
//       coachingPoints: 'Focus on reducing delays and improving communication.',
//       feedbackForAgent:
//         'Agent needs to improve ownership and communication skills.',
//     },

//     actionPlanDetails: [
//       {
//         actionPoint: 'Review customer feedback',
//         actionDescription: 'Analyze feedback for improvement',
//         impact: 'Improved customer satisfaction',
//       },
//       {
//         actionPoint: 'Increase technician training',
//         actionDescription: 'Train technicians on quick fixes',
//         impact: 'Reduced breakdown resolution time',
//       },
//       {
//         actionPoint: 'Improve follow-up process',
//         actionDescription: 'Ensure timely follow-ups with customers',
//         impact: 'Increased customer loyalty',
//       },
//       {
//         actionPoint: 'Enhance emotional tone analysis',
//         actionDescription: 'Upgrade tools for better sentiment detection',
//         impact: 'More accurate emotional insights',
//       },
//       {
//         actionPoint: 'Optimize vehicle breakdown detection',
//         actionDescription: 'Implement predictive maintenance system',
//         impact: 'Fewer breakdown incidents',
//       },
//       {
//         actionPoint: 'Provide customer service training',
//         actionDescription: 'Enhance agent communication skills',
//         impact: 'Better customer-agent rapport',
//       },
//     ],
//   },
//   'CN-006': {
//     caseNumber: 'CN-006',
//     caseStatus: 'Resolved',
//     agentPerformance: 'Excellent',
//     agentPerformanceScore: '5/5',
//     agentQaRating: 'Outstanding',
//     agentQaScore: '50/50 (100%)',
//     agentAction:
//       'The agent was prompt, empathetic, and resolved the issue efficiently.',
//     caseType: 'Repair',
//     severity: 'Medium',
//     summary: 'Customer had a malfunctioning brake system.',
//     issueBucket: 'Brake System Failure',
//     issueCause: 'Worn brake pads',
//     brandPerception: 'Positive',
//     brandLoyalty: 'Improved',
//     brandTrust:
//       'The customer expressed appreciation for the prompt and effective resolution.',
//     brandMentionsCustomer: 'No',
//     brandMentionsAgent: 'Yes',
//     competitorMentions: 'No',
//     anticipatedSentiment: 'Positive, likely to recommend.',
//     issuesAffectingSentiment: 'None.',
//     customerAction: 'Likely to remain loyal and continue using Tata services.',
//     customerNpsScore: '9',
//     vehicleNumber: 'MH 12 AB 5678',
//     vehicleModel: 'Altroz',
//     breakdownLocation: 'N/A',
//     customerName: 'Snehal Joshi',
//     agentsInvolved: '1 - Rani',
//     techniciansInvolved: '1 - Sandeep',
//     totalCaseDuration: '2 hours',
//     totalHoldTime: '1 min',
//     emotionalTrend: 'Start - Concerned\nMid - Neutral\nEnd - Happy',
//     totalCalls: '1',
//     emotionalAnalysis: 'see: R12, S18',
//     direction: 'inbound',
//     transcription: '',
//     participantsCount: '',
//     callDuration: '5 min',
//     callHoldTime: '1 min',
//     talkToListenRatio:
//       '40: 60 (Customer expressed concerns more than the agent)',
//     customerEmotionalTone: 'Relieved',
//     empathyDetection:
//       'The agent demonstrated a thorough understanding and resolved the issue quickly.',

//     individualCallDetails: {
//       callId: 'C006',
//       callRecording: 'recording-url-6',
//       callDirection: 'Outbound',
//       natureOfCases: 'Feedback Collection',
//       summary: 'Agent requested feedback on recent purchase.',
//       transcription: 'Customer shared positive feedback about the product.',
//       participantsNames: 'Kiran Desai, Anil (Agent)',
//       customerType: 'Existing',
//       owner: 'Kiran Desai',
//       driver: 'Yes',
//       callDuration: '7 min',
//       holdTime: '1 min',
//       talkToListenRatio: '30: 70',
//       interruptionsCount: '0',
//       emotionalToneOfCustomer: 'Happy',
//       emotionalToneInstancesCount: '1',
//       emotionalToneInstances: 'Happy throughout',
//       emotionalToneAnalysis:
//         'Customer expressed happiness with the product and service.',
//       sentimentTrend: 'Positive',
//       brandSentiment: 'Positive',
//       empathyDetection: 'Agent thanked the customer for their feedback.',
//     },

//     qaScoring: [
//       {
//         agentsQuestion: 'Are you able to provide any error codes or messages?',
//         customersResponse:
//           'No, there were no error codes, just a black screen.',
//         scoreCriteria: 'Clarity and completeness',
//         score: 4,
//         comments: 'Customer clearly communicated the absence of error codes.',
//       },
//     ],

//     probingQuestions: [
//       {
//         question:
//           'Can you explain when you first noticed the incorrect charges?',
//         purposeOfProbing:
//           'To gather more information about the timing of the issue',
//         analysis:
//           'Customer mentioned noticing the charges during the last billing cycle.',
//       },
//       {
//         question: 'What specific charges are you referring to?',
//         purposeOfProbing:
//           'To clarify the exact nature of the incorrect charges',
//         analysis: 'Customer identified an extra charge for an unused service.',
//       },
//     ],

//     brandSentiments: {
//       category: 'Product',
//       product: 'Laptop Model ABC',
//       workshop: 'N/A',
//       people: 'N/A',
//       process: 'N/A',
//       indicator: 'Contains both Negative and Positive',
//       containsBothNegativeAndPositive: 'Yes',
//       frequencyOfFrustrationRow: 'Moderate',
//       numberOnNegative: '10',
//       numberOnPositive: '16',
//       analysis:
//         'Performance and display quality were praised, but overheating was a frequent issue.',
//       analysisGivenOnlyOnNegativeText:
//         'Negative mentions were focused on overheating concerns during prolonged usage.',
//     },
//     empathyAnalysis: [
//       {
//         customerStatement: 'I’m losing trust in your services.',
//         agentEmpatheticResponse:
//           'I’m deeply sorry for the experience you’ve had, and I’ll do my best to restore your trust.',
//       },
//     ],

//     agentPerformanceScoreData: [
//       {
//         parameter: 'Expertise & Knowledge',
//         description: 'Demonstrated knowledge and expertise in the domain.',
//         score: 5,
//         comments: 'Handled technical queries with ease.',
//       },
//     ],

//     agentThresholdMapping: [
//       {
//         parameter: 'Rapport Building',
//         score: 9,
//         evidence:
//           'Agent established trust with a warm tone and friendly introduction.',
//       },
//       {
//         parameter: 'Empathy',
//         score: 8,
//         evidence:
//           "Demonstrated understanding of the customer's urgency and concern.",
//       },
//       {
//         parameter: 'Articulation and Clarity',
//         score: 9,
//         evidence:
//           'Explained the steps clearly and ensured the customer understood.',
//       },
//       {
//         parameter: 'Product Knowledge',
//         score: 8,
//         evidence:
//           'Quickly provided accurate technical details without hesitation.',
//       },
//       {
//         parameter: 'Objection Handling',
//         score: 8,
//         evidence: "Handled the customer's doubts about pricing effectively.",
//       },
//       {
//         parameter: 'Appropriate Probing',
//         score: 7,
//         evidence:
//           'Asked relevant and specific questions to identify the issue.',
//       },
//       {
//         parameter: 'Adaptability',
//         score: 8,
//         evidence:
//           "Adjusted communication style based on the customer's tone and urgency.",
//       },
//     ],

//     suggestedCoaching: {
//       focusArea: 'Response Time',
//       effectiveCommunication:
//         'Agent needs to improve response times and keep customers informed.',
//       empathy: 'Agent showed some empathy but needs to improve engagement.',
//       ownership: 'Agent should have provided a clear timeline for follow-up.',
//       timeManagementHoldTime:
//         'Reduce hold time and update the customer during the call.',
//       proactiveCommunication:
//         'Update customers regularly on the progress of their inquiries.',
//       expertiseResolutionClosure:
//         'Ensure a response is provided in a timely manner to maintain customer satisfaction.',
//       keyIssue: 'Lack of response and communication.',
//       coachingPoints:
//         'Work on improving response times and keeping the customer updated.',
//       feedbackForAgent:
//         'Improve communication and speed in responding to inquiries.',
//     },

//     actionPlanDetails: [
//       {
//         actionPoint: 'Optimize vehicle breakdown detection',
//         actionDescription: 'Implement predictive maintenance system',
//         impact: 'Fewer breakdown incidents',
//       },
//       {
//         actionPoint: 'Provide customer service training',
//         actionDescription: 'Enhance agent communication skills',
//         impact: 'Better customer-agent rapport',
//       },
//       {
//         actionPoint: 'Review case resolution procedures',
//         actionDescription: 'Ensure more efficient case closure',
//         impact: 'Faster resolution and reduced case backlog',
//       },
//       {
//         actionPoint: 'Improve customer interaction logs',
//         actionDescription:
//           'Ensure all interactions are properly logged and tracked',
//         impact: 'Better case tracking and transparency',
//       },
//       {
//         actionPoint: 'Strengthen internal communication',
//         actionDescription:
//           'Establish more frequent check-ins with all involved agents',
//         impact: 'Faster collaboration and problem-solving',
//       },
//     ],
//   },
//   'CN-007': {
//     caseNumber: 'CN-007',
//     caseStatus: 'Pending',
//     agentPerformance: 'Average',
//     agentPerformanceScore: '3.2/5',
//     agentQaRating: 'Needs Improvement',
//     agentQaScore: '35/50 (70%)',
//     agentAction:
//       'The agent was polite but delayed in providing a resolution and unclear in the explanation.',
//     caseType: 'Support',
//     severity: 'High',
//     summary:
//       'The customer is reporting an engine warning light issue and a loss of power.',
//     issueBucket: 'Engine Warning Light',
//     issueCause: 'Sensor malfunction',
//     brandPerception: 'Neutral',
//     brandLoyalty: 'Low',
//     brandTrust:
//       'Customer is concerned and frustrated with the delay in resolution.',
//     brandMentionsCustomer: 'No',
//     brandMentionsAgent: 'No',
//     competitorMentions: 'Yes, customer looking into alternatives.',
//     anticipatedSentiment:
//       '1- Frustration could lead to brand disengagement.\n2- Customer may switch brands if unresolved.',
//     issuesAffectingSentiment:
//       '1- Delay in troubleshooting.\n2- Lack of clear answers during initial call.',
//     customerAction: 'Customer may look into competitor brands.',
//     customerNpsScore: '3',
//     vehicleNumber: 'MH 06 DG 9876',
//     vehicleModel: 'Tata Harrier',
//     breakdownLocation: 'N/A',
//     customerName: 'Vikrant Patel',
//     agentsInvolved: '1 - Kiran',
//     techniciansInvolved: 'None',
//     totalCaseDuration: '2 days',
//     totalHoldTime: '6 min',
//     emotionalTrend: 'Start - Concerned\nMid - Frustrated\nEnd - Unsatisfied',
//     totalCalls: '3',
//     emotionalAnalysis: 'see: R20, S25',
//     direction: 'inbound',
//     transcription: '',
//     participantsCount: '',
//     callDuration: '9 min',
//     callHoldTime: '3 min',
//     talkToListenRatio: '50: 50',
//     customerEmotionalTone: 'Frustrated',
//     empathyDetection:
//       'The agent acknowledged the issue but did not take immediate action to resolve it.',

//     individualCallDetails: {
//       callId: 'C007',
//       callRecording: 'recording-url-7',
//       callDirection: 'Inbound',
//       natureOfCases: 'Billing Issue',
//       summary: 'Customer reported incorrect billing charges.',
//       transcription: 'Customer was upset and requested immediate correction.',
//       participantsNames: 'Shalini Gupta, Rohit (Agent)',
//       customerType: 'Existing',
//       owner: 'Shalini Gupta',
//       driver: 'No',
//       callDuration: '12 min',
//       holdTime: '5 min',
//       talkToListenRatio: '80: 20',
//       interruptionsCount: '5',
//       emotionalToneOfCustomer: 'Angry',
//       emotionalToneInstancesCount: '4',
//       emotionalToneInstances: 'Start - Angry, End - Neutral',
//       emotionalToneAnalysis:
//         'Customer anger reduced after the issue was escalated and resolved.',
//       sentimentTrend: 'Neutral',
//       brandSentiment: 'Neutral',
//       empathyDetection:
//         'Agent remained calm and empathetic throughout the conversation.',
//     },

//     qaScoring: [
//       {
//         agentsQuestion: 'Has the product been repaired or serviced recently?',
//         customersResponse:
//           'Yes, it was repaired last month for a different issue.',
//         scoreCriteria: 'Relevance and detail',
//         score: 5,
//         comments: 'Response provided relevant information about past repairs.',
//       },
//     ],

//     probingQuestions: [
//       {
//         question: 'Can you describe the issue in more detail?',
//         purposeOfProbing: 'To gather more context',
//         analysis:
//           'Customer provided additional details about the screen issue.',
//       },
//       {
//         question: 'How long have you been experiencing this issue?',
//         purposeOfProbing: 'To understand the timeline of the problem',
//         analysis: 'Customer mentioned the issue started 3 days ago.',
//       },
//     ],

//     brandSentiments: {
//       category: 'People',
//       product: 'N/A',
//       workshop: 'N/A',
//       people: 'Field Technicians',
//       process: 'N/A',
//       indicator: 'Contains both Negative and Positive',
//       containsBothNegativeAndPositive: 'Yes',
//       frequencyOfFrustrationRow: 'Low',
//       numberOnNegative: '5',
//       numberOnPositive: '15',
//       analysis:
//         'Technicians were punctual and efficient, but some lacked courteous behavior.',
//       analysisGivenOnlyOnNegativeText:
//         'Criticisms focused on rude or dismissive behavior by a few technicians.',
//     },

//     empathyAnalysis: [
//       {
//         customerStatement: 'I’m losing trust in your services.',
//         agentEmpatheticResponse:
//           'I’m deeply sorry for the experience you’ve had, and I’ll do my best to restore your trust.',
//       },
//     ],

//     agentPerformanceScoreData: [
//       {
//         parameter: 'Follow-up & Resolution Closure',
//         description: 'Ensured follow-up and resolution closure.',
//         score: 5,
//         comments: 'Provided a complete and satisfactory resolution.',
//       },
//     ],

//     agentThresholdMapping: [
//       {
//         parameter: 'Rapport Building',
//         score: 9,
//         evidence:
//           'Agent established trust with a warm tone and friendly introduction.',
//       },
//       {
//         parameter: 'Empathy',
//         score: 8,
//         evidence:
//           "Demonstrated understanding of the customer's urgency and concern.",
//       },
//       {
//         parameter: 'Articulation and Clarity',
//         score: 9,
//         evidence:
//           'Explained the steps clearly and ensured the customer understood.',
//       },
//       {
//         parameter: 'Product Knowledge',
//         score: 8,
//         evidence:
//           'Quickly provided accurate technical details without hesitation.',
//       },
//       {
//         parameter: 'Objection Handling',
//         score: 8,
//         evidence: "Handled the customer's doubts about pricing effectively.",
//       },
//       {
//         parameter: 'Appropriate Probing',
//         score: 7,
//         evidence:
//           'Asked relevant and specific questions to identify the issue.',
//       },
//       {
//         parameter: 'Adaptability',
//         score: 8,
//         evidence:
//           "Adjusted communication style based on the customer's tone and urgency.",
//       },
//     ],

//     suggestedCoaching: {
//       focusArea: 'Billing Accuracy',
//       effectiveCommunication:
//         'Agent handled the situation well and communicated clearly.',
//       empathy:
//         'Agent displayed high empathy and resolved the issue efficiently.',
//       ownership:
//         'Agent took ownership of the issue and ensured customer satisfaction.',
//       timeManagementHoldTime:
//         'Hold time was minimal, contributing to a smooth experience.',
//       proactiveCommunication:
//         'Ensure all customers are informed about the status of their inquiries.',
//       expertiseResolutionClosure:
//         'Agent resolved the issue quickly and efficiently.',
//       keyIssue: 'Billing error.',
//       coachingPoints:
//         'Maintain accuracy in billing and resolve issues promptly.',
//       feedbackForAgent:
//         'Excellent job in managing the case and resolving the issue.',
//     },

//     actionPlanDetails: [
//       {
//         actionPoint: 'Review customer feedback',
//         actionDescription: 'Analyze feedback for improvement',
//         impact: 'Improved customer satisfaction',
//       },
//       {
//         actionPoint: 'Increase technician training',
//         actionDescription: 'Train technicians on quick fixes',
//         impact: 'Reduced breakdown resolution time',
//       },
//       {
//         actionPoint: 'Improve follow-up process',
//         actionDescription: 'Ensure timely follow-ups with customers',
//         impact: 'Increased customer loyalty',
//       },
//       {
//         actionPoint: 'Enhance emotional tone analysis',
//         actionDescription: 'Upgrade tools for better sentiment detection',
//         impact: 'More accurate emotional insights',
//       },
//       {
//         actionPoint: 'Optimize vehicle breakdown detection',
//         actionDescription: 'Implement predictive maintenance system',
//         impact: 'Fewer breakdown incidents',
//       },
//       {
//         actionPoint: 'Provide customer service training',
//         actionDescription: 'Enhance agent communication skills',
//         impact: 'Better customer-agent rapport',
//       },
//       {
//         actionPoint: 'Review case resolution procedures',
//         actionDescription: 'Ensure more efficient case closure',
//         impact: 'Faster resolution and reduced case backlog',
//       },
//       {
//         actionPoint: 'Improve customer interaction logs',
//         actionDescription:
//           'Ensure all interactions are properly logged and tracked',
//         impact: 'Better case tracking and transparency',
//       },
//       {
//         actionPoint: 'Strengthen internal communication',
//         actionDescription:
//           'Establish more frequent check-ins with all involved agents',
//         impact: 'Faster collaboration and problem-solving',
//       },
//     ],
//   },
// };

// interface PageProps {
//   params: {
//     caseNumber: string;
//   };
// }

export default async function CaseDetailsPage({ params }: any) {
  const { caseId } = params as { caseId: string };

  // Extract data for the given caseNumber
  const caseData = dummyData.find(
    (caseItem) => caseItem.case_overview.case_id === caseId
  );

  // Handle case not found
  if (!caseData) {
    console.error(`Case with ID ${caseId} not found.`);
    notFound();
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Case Details for {caseId}</h1>
      <h5 className="mb-2">Overall Case Data</h5>
      <table className="w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Field</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {caseData.calls_overview.calls.map((call, index) => (
            <React.Fragment key={index}>
              {Object.entries(call).map(([key, value]) => (
                <tr key={key}>
                  <td className="border border-gray-300 px-4 py-2 font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {typeof value === 'string'
                      ? value
                      : JSON.stringify(value, null, 2)}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Individual Call Details */}
      <IndividualCallDetails callData={caseData.calls_overview.calls} />

      {/* Q&A Scoring */}
      <QAScoring scoringData={caseData.calls_overview.calls[0].qa_scoring} />

      {/* Probing Questions */}
      <ProbingQuestions probingData={caseData.calls_overview.call_meta} />

      {/* Brand Sentiments Table */}
      <BrandSentiments
        brandSentimentData={caseData.calls_overview.brand_sentiment}
      />

      {/* Empathy Analysis Table */}
      <EmpathyAnalysis
        empathyData={caseData.calls_overview.empathy_detection}
      />

      {/* Agent Performance Score */}
      <AgentPerformanceScore
        performanceData={caseData.calls_overview.agent_performance}
      />

      {/* Agent Threshold Mapping for Coaching */}
      <AgentThresholdMapping
        coachingData={
          caseData.calls_overview.agent_threshold_mapping_for_coaching
        }
      />

      {/* Suggested Coaching Table */}
      <SuggestedCoaching
        coachingData={caseData.calls_overview.agent_coaching}
      />

      {/* Action Plan for TL/CX Manager Table */}
      <ActionPlanDetails
        actionData={caseData.calls_overview.action_plan_details}
      />
    </div>
  );
}
