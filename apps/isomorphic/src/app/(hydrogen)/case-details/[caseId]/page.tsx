// @ts-nocheck
import React from 'react';
import { notFound } from 'next/navigation';
import { Box } from 'rizzui/box';
import Link from 'next/link';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

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
            <td className="border border-gray-300 px-4 py-2">Case Id</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.case_id}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Case Number</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.case_number || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Case Status</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.status_of_case}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Case Type</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.call_nature_of_case}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Agents Involved
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {(caseData.case_overview.participants.agents &&
                caseData.case_overview.participants.agents.join(', ')) ||
                'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Customers</td>
            <td className="border border-gray-300 px-4 py-2">
              {(caseData.case_overview.participants.customers &&
                caseData.case_overview.participants.customers.join(', ')) ||
                'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Technicians</td>
            <td className="border border-gray-300 px-4 py-2">
              {(caseData.case_overview.participants.technicians &&
                caseData.case_overview.participants.technicians.join(', ')) ||
                'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Supervisors</td>
            <td className="border border-gray-300 px-4 py-2">
              {(caseData.case_overview.participants.supervisors &&
                caseData.case_overview.participants.supervisors.join(', ')) ||
                'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Others Involved
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {(caseData.case_overview.participants.others &&
                caseData.case_overview.participants.others.join(', ')) ||
                'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Resolved By</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.resolved_by &&
                caseData.case_overview.resolved_by
                  .map((agent) => agent.agent_name) // Extract the `agent_name` property
                  .join(', ')}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Severity of Case
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.severity_of_case}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Customer Satisfaction Indicator
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.customer_satisfaction_indicator}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Overall Customer Emotional Trend
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Start:{' '}
              {caseData.case_overview.overall_customer_emotional_trend.start}{' '}
              <br />
              Mid: {
                caseData.case_overview.overall_customer_emotional_trend.mid
              }{' '}
              <br />
              End: {caseData.case_overview.overall_customer_emotional_trend.end}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Issue Bucket</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.issue_bucket}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Issue Cause</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.issue_cause}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              First Call Resolution
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.first_call_resolution || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Case Type</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.case_type.first_call || 'N/A'}
              {caseData.case_overview.case_type.second_call &&
                ` / ${caseData.case_overview.case_type.second_call}`}
              {caseData.case_overview.case_type.third_call &&
                ` / ${caseData.case_overview.case_type.third_call}`}
              {caseData.case_overview.case_type.fourth_call &&
                ` / ${caseData.case_overview.case_type.fourth_call}`}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Agent Action</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.agent_action}
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Agent Overall Performance
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.agent_overall_performance || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Agent QA Rating
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.agent_qa_rating || 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Agent QA Score</td>
            <td className="border border-gray-300 px-4 py-2">
              {caseData.case_overview.agent_qa_score || 'N/A'}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Cards  */}
      <div className="mb-8 mt-8 flex justify-evenly">
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Total Calls</p>
          <h4 className="text-center font-semibold">
            {caseData.calls_overview.total_calls_in_case || 'N/A'}
          </h4>
        </div>
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Total Case Duration</p>
          <h4 className="text-center font-semibold">
            {caseData.case_overview.total_case_duration || 'N/A'}
          </h4>
        </div>
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Total Hold Time</p>
          <h4 className="text-center font-semibold">
            {caseData.case_overview.total_hold_time || 'N/A'}
          </h4>
        </div>
        <div className="card border-black-600 flex flex-col items-center justify-center rounded-lg border p-6">
          <p className="text-center">Agent Overall Performance</p>
          <h4 className="text-center font-semibold">
            {caseData.case_overview.agent_overall_performance || 'N/A'}
          </h4>
        </div>
      </div>

      {/* Overall Case Data */}
      {/* <h5 className="mb-2">Overall Case Data</h5> */}

      {/* Individual Call Details  */}
      {/* <h5 className="mb-2">Individual Call Details</h5>
      <CallsTable
        caseId={caseId}
        className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]"
      />
      <CallWiseTable className="@3xl/crm:col-span-full @7xl/crm:col-span-8 dark:bg-[#181818]" /> */}

      {/* Individual Call Details */}
      <h5 className="mb-2">Individual Call Details</h5>
      <div className="flex flex-col gap-8">
        {Array.from(
          { length: Math.ceil(caseData.calls_overview.calls.length / 2) },
          (_, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-8">
              {caseData.calls_overview.calls
                .slice(rowIndex * 2, rowIndex * 2 + 2) // Take two items for each row
                .map((call, index) => (
                  <div
                    key={index}
                    className="mb-5 min-w-[45%] flex-1 rounded-lg border p-4 shadow-md"
                  >
                    {/* Heading for each table */}
                    <h5 className="mb-4 text-center text-lg font-bold">
                      Call {rowIndex * 2 + index + 1} Details:
                    </h5>
                    {/* Table for each call */}
                    <table className="w-full table-auto border-collapse border border-gray-400 text-left">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Field
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Call Id
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Link
                              href={`/call-details/${call.call_id}`}
                              className="text-blue-600 hover:underline"
                            >
                              {call.call_id}
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Call Direction
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {call.call_direction}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Call Type
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {call.call_type}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Complaint Number
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {call.complaint_number}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Issue Resolved
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {call.issue_resolved}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Workshop Location
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {call.workshop_location}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Workshop Phone Number
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {call.workshop_phone_number || 'N/A'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
