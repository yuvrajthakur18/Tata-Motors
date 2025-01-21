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
