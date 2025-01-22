// @ts-nocheck
import React from 'react';
import { notFound } from 'next/navigation';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';
import IndividualCallTable from '@/app/shared/crm/dashboard/tables/individual-call-table';
import QAScoringTable from '@/app/shared/crm/dashboard/tables/qa-scoring-table';
import ProbingQuestions from '@/app/shared/crm/dashboard/tables/probing-questions';
import BrandSentiment from '@/app/shared/crm/dashboard/tables/brand-sentiment';
import EmpathyAnalysisTable from '@/app/shared/crm/dashboard/tables/empathy-analysis';
import AgentPerformanceAnalysisTable from '@/app/shared/crm/dashboard/tables/agent-performance-analysis-2';
import AgentThreshold from '@/app/shared/crm/dashboard/tables/agent-threshold';
import SuggestedCoachingTable from '@/app/shared/crm/dashboard/tables/suggested-coaching-table';
import OverAllCaseTable from '@/app/shared/crm/dashboard/tables/overall-case-table';
import { overAllCaseData } from '@/data/over-all-case-data';
import PlanOfAction from '@/app/shared/crm/dashboard/tables/plan-of-action';


export default async function CallDetailsPage({ params }: any) {
  const { callId: rawCallId } = params as { callId: string };

  // Decode the callId from the URL
  const callId = decodeURIComponent(rawCallId);

  console.log('callId from URL (decoded):', callId);

  // Extract all call IDs for debugging
  const extractedCallIds = dummyData.flatMap(
    (item) => item.calls_overview?.calls?.map((call) => call.call_id) || []
  );
  console.log('Extracted call IDs:', extractedCallIds);

  // Safely extract the specific callData
  const callData = dummyData.find((callItem) =>
    callItem.calls_overview?.calls?.some((call) => call.call_id === callId)
  );

  // Handle case where callData is not found
  if (!callData) {
    console.error(`Call with ID ${callId} not found.`);
    notFound();
  }

  // Extract the specific call details from the matched callData
  const callDetails = callData.calls_overview.calls.find(
    (call) => call.call_id === callId
  );

  // Handle case where the specific call is not found
  if (!callDetails) {
    console.error(`Call details for ID ${callId} not found.`);
    notFound();
  }

  return (
    <div className='p-3 m-10'>
      <h1 className="mb-4 text-2xl font-bold">Call Details for {callId}</h1>

      {/* Quick Tags Table */}
      <h5>Quick Tags</h5>
      <table className="mb-6 mt-2 w-full table-auto border-collapse rounded-lg border border-gray-400 text-left shadow-md">
        <thead>
          <tr className="bg-green-300">
            <th className="border border-gray-300 px-4 py-2">Parameter</th>
            <th className="border border-gray-300 px-4 py-2">Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Call Id</td>
            <td className="border border-gray-300 px-4 py-2">
              {callDetails.call_id}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Call Direction</td>
            <td className="border border-gray-300 px-4 py-2">
              {callDetails.call_direction || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Case Type</td>
            <td className="border border-gray-300 px-4 py-2">
              {callDetails.call_type || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Complaint Number
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {callDetails.complaint_number || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Issue Resolved</td>
            <td className="border border-gray-300 px-4 py-2">
              {callDetails.issue_resolved || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Workshop Location
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {callDetails.workshop_location || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Workshop Phone Number
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {callDetails.workshop_phone_number || 'N/A'}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Enhanced Cards */}
      <div className="mb-8 mt-8 flex justify-evenly gap-6">
        <div className="card w-56 shadow-lg transform rounded-lg border border-gray-300 bg-white p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Call Duration</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.call_meta.call_duration || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 shadow-lg transform rounded-lg border border-gray-300 bg-white p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Call Hold Time</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.call_meta.call_hold_time || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 shadow-lg transform rounded-lg border border-gray-300 bg-white p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Interruptions Count</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.call_meta.interruptions_count || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 shadow-lg transform rounded-lg border border-gray-300 bg-white p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Empathy Score</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.empathy_detection.overall_score || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 shadow-lg transform rounded-lg border border-gray-300 bg-white p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Participants</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.participants_count || 'N/A'}
          </h4>
        </div>
      </div>



      <QAScoringTable className='p-3 my-5'/>

     
     
     <ProbingQuestions className='p-3 my-5'/>

      
      <BrandSentiment className='p-3 my-5'/>

      
      <EmpathyAnalysisTable className='p-3 my-5'/>

      
      <AgentPerformanceAnalysisTable className='p-3 my-5'/>

      
      <AgentThreshold className='p-3 my-5'/>

      
      <SuggestedCoachingTable className='p-3 my-5'/>

      
      <PlanOfAction className='p-3 my-5'/> 

    </div>
  );
}
