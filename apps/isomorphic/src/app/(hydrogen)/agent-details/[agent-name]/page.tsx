// @ts-nocheck
import React from 'react';
import { notFound } from 'next/navigation';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';
import QuickTagsAgents from '@/app/shared/crm/dashboard/tables/quick-tag-agent';
import BrandSentiments from '@/app/components/BrandSentiments';
import QAScoringTable from '@/app/shared/crm/dashboard/tables/qa-scoring-table';
import ProbingQuestions from '@/app/shared/crm/dashboard/tables/probing-questions';
import BrandSentiment from '@/app/shared/crm/dashboard/brand-sentiment-2';
import EmpathyAnalysisTable from '@/app/shared/crm/dashboard/tables/empathy-analysis';
import AgentPerformanceAnalysisTable from '@/app/shared/crm/dashboard/tables/agent-performance-analysis-3';
import AgentThreshold from '@/app/shared/crm/dashboard/tables/agent-threshold-2';
import SuggestedCoachingTable from '@/app/shared/crm/dashboard/tables/suggested-coaching-table-2';

export default async function AgentDetailsPage({ params }: any) {
  // Decode and preserve spaces
  const agentName = decodeURIComponent(params['agent-name'] || '')
    .replace(/\+/g, ' ') // Replace + with space
    .trim();

  const findAgentDetails = () => {
    for (const caseItem of dummyData) {
      // Check resolved by and call agent details to match the agent name
      const resolvedByMatch = caseItem.case_overview?.resolved_by?.find(
        (resolver) => resolver.agent_name === agentName
      );

      const matchingCall = caseItem.calls_overview?.calls?.find(
        (call) => call.agent_details?.agent_name === agentName
      );

      // Only return details if both resolved by and call matches are found
      if (resolvedByMatch && matchingCall) {
        return {
          agent_name: matchingCall.agent_details.agent_name,
          agent_id: `AGT-${agentName.replace(/\s+/g, '-').toUpperCase()}`,
          team_name: resolvedByMatch.agent_role || 'Customer Support',
          performance_score:
            caseItem.case_overview.agent_overall_performance || 0,
          qa_rating: caseItem.case_overview.agent_qa_rating || 'Good',
          shift_timings: '9 AM - 6 PM',
          talk_to_listen_ratio: matchingCall.agent_details.talk_to_listen_ratio,
          interruption_count: matchingCall.call_meta?.interruptions_count,
          threshold_scores: matchingCall
            .agent_threshold_mapping_for_coaching?.[0]
            ? Object.entries(
                matchingCall.agent_threshold_mapping_for_coaching[0]
              ).reduce((scores, [key, value]) => {
                scores[key] = value.score;
                return scores;
              }, {})
            : {},
          overall_performance_score:
            matchingCall.agent_details?.compliance_score
              ?.overall_compliance_score || 0,
          final_comment:
            matchingCall.call_meta?.call_summary || 'No detailed comments',
        };
      }
    }
    return null;
  };

  const agentDetails = findAgentDetails();

  if (!agentDetails) {
    console.error('No agent details found for:', agentName);
    return notFound();
  }

  return (
    <div className="mx-10 mb-10 p-3">
      <h1 className="mb-4 text-2xl font-bold">Agent Details for {agentName}</h1>
      <QuickTagsAgents
        agentName={agentDetails.agent_name}
        agentId={agentDetails.agent_id}
        teamName={agentDetails.team_name}
        performanceScore={agentDetails.performance_score}
        qaRating={agentDetails.qa_rating}
        shiftTimings={agentDetails.shift_timings}
        className="my-5 p-3"
      />

      {/* Enhanced Cards */}
      <div className="mb-8 mt-8 flex justify-evenly gap-6">
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Total Cases</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Total Calls</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Performance Score</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {agentDetails.performance_score || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">QA Rating</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {agentDetails.qa_rating || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Shift Timings</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {agentDetails.shift_timings || 'N/A'}
          </h4>
        </div>
      </div>
    </div>
  );
}
