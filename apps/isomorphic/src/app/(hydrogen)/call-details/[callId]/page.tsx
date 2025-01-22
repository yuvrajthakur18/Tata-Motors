// @ts-nocheck
import React from 'react';
import { notFound } from 'next/navigation';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

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
    <div>
      <h1 className="mb-4 text-2xl font-bold">Call Details for {callId}</h1>

      {/* Quick Tags Table */}
      <h5>Quick Tags</h5>
      <table className="mb-6 mt-2 w-full table-auto border-collapse rounded-lg border border-gray-400 text-center shadow-md">
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

      {/* Cards  */}
      <div className="mb-8 mt-8 flex justify-evenly">
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Call Duration</p>
          <h4 className="text-center font-semibold">
            {callDetails.call_meta.call_duration || 'N/A'}
          </h4>
        </div>
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Call Hold Time</p>
          <h4 className="text-center font-semibold">
            {callDetails.call_meta.call_hold_time || 'N/A'}
          </h4>
        </div>
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Interruptions Count</p>
          <h4 className="text-center font-semibold">
            {callDetails.call_meta.interruptions_count || 'N/A'}
          </h4>
        </div>
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Empathy Score</p>
          <h4 className="text-center font-semibold">
            {callDetails.empathy_detection.overall_score || 'N/A'}
          </h4>
        </div>
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Participants</p>
          <h4 className="text-center font-semibold">
            {callDetails.participants_count || 'N/A'}
          </h4>
        </div>
      </div>
    </div>
  );
}
