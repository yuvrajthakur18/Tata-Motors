// @ts-nocheck
import React from 'react';
import { notFound } from 'next/navigation';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';
import IndividualCallTable from '@/app/shared/crm/dashboard/tables/individual-call-table';
import QAScoringTable from '@/app/shared/crm/dashboard/tables/qa-scoring-table';
import ProbingQuestions from '@/app/shared/crm/dashboard/tables/probing-questions';
import BrandSentiment from '@/app/shared/crm/dashboard/tables/brand-sentiment-2';
import EmpathyAnalysisTable from '@/app/shared/crm/dashboard/tables/empathy-analysis-2';
import AgentPerformanceAnalysisTable from '@/app/shared/crm/dashboard/tables/agent-performance-analysis-3';
import AgentThreshold from '@/app/shared/crm/dashboard/tables/agent-threshold-2';
import SuggestedCoachingTable from '@/app/shared/crm/dashboard/tables/suggested-coaching-table-2';
import OverAllCaseTable from '@/app/shared/crm/dashboard/tables/overall-case-table';
import { overAllCaseData } from '@/data/over-all-case-data';
import PlanOfAction from '@/app/shared/crm/dashboard/tables/plan-of-action'; 
// import quick data table 
import QuickTag from '@/app/shared/crm/dashboard/tables/quick-tag';
import BrandSentiments from '@/app/shared/crm/dashboard/brand-sentiment-2';


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
  
  const callDirection = callDetails.call_direction
  const callType = callDetails.call_type
  const complaintNumber = callDetails.complaint_number
  const workshopLocation = callDetails.workshop_location
  const issueResolved = callDetails.issue_resolved
  const workshopPhoneNumber = callDetails.workshop_phone_number



  return (
    <div className="m-10 p-3">
      <h1 className="mb-4 text-2xl font-bold">Call Details for {callId}</h1>

      {/* Quick Tags Table */}
      {/* <h5>Quick Tags</h5>
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
      </table> */}
      <QuickTag  callId={callDetails.call_id} callDirection = {callDetails.call_direction}
      callType = {callDetails.call_type}
      complaintNumber = {callDetails.complaint_number}
      workshopLocation = {callDetails.workshop_location}
      issueResolved = {callDetails.issue_resolved}
      workshopPhoneNumber = {callDetails.workshop_phone_number} className='p-3 my-5'/>

      {/* Enhanced Cards */}
      <div className="mb-8 mt-8 flex justify-evenly gap-6">
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Call Duration</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.call_meta.call_duration || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Call Hold Time</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.call_meta.call_hold_time || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Interruptions Count</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.call_meta.interruptions_count || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Empathy Score</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.empathy_detection.overall_score || 'N/A'}
          </h4>
        </div>
        <div className="card w-56 transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-center text-gray-500">Participants</p>
          <h4 className="text-center text-xl font-bold text-gray-800">
            {callDetails.participants_count || 'N/A'}
          </h4>
        </div>
      </div>


      <BrandSentiments callId={callDetails.call_id}  className='p-3 my-5'/>
     
      <QAScoringTable callId={callDetails.call_id} className='p-3 my-5'/>

     
     
     <ProbingQuestions callId={callDetails.call_id} className='p-3 my-5'/>

      
      <BrandSentiment callId={callDetails.call_id} className='p-3 my-5'/>

      
      <EmpathyAnalysisTable callId={callDetails.call_id} className='p-3 my-5'/>

      
      <AgentPerformanceAnalysisTable callId={callDetails.call_id} className='p-3 my-5'/>

      
      <AgentThreshold callId={callDetails.call_id} className='p-3 my-5'/>

      
      <SuggestedCoachingTable callId={callDetails.call_id} className='p-3 my-5'/>

      
      <PlanOfAction className='p-3 my-5'/> 

    </div>
  );
}
