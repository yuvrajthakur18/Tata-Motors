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
      <h5 className="mb-2">Individual Call Details</h5>
      <div className="">
        {caseData.calls_overview.calls.map((call, index) => (
          <div
            key={index}
            className="mb-5 min-w-[45%] flex-1 rounded-lg border p-4 shadow-md"
          >
            {/* Heading for each table */}
            <h5 className="mb-4 text-center text-lg font-bold">
              Call {index + 1} Details:
            </h5>

            {/* Table for each call */}
            <table className="w-full table-auto border-collapse border border-gray-400 text-left">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Field</th>
                  <th className="border border-gray-300 px-4 py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Call Id</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {call.call_id}
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
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Participants Count
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {call.participants_count}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Employees Involved
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {call.employees_involved &&
                    call.employees_involved.length > 0 ? (
                      call.employees_involved.map((employee, index) => (
                        <div key={index}>
                          {employee.employee_name} ({employee.employee_role})
                        </div>
                      ))
                    ) : (
                      <span>No employees involved</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Call Meta
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {call.call_meta &&
                      Object.entries(call.call_meta).map(([key, value]) => (
                        <div key={key}>
                          <strong>{key.replace(/_/g, ' ')}:</strong> {value}
                        </div>
                      ))}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Empathy Analysis
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* Display key-value pairs of empathy_detection */}
                    {call.empathy_detection && (
                      <div>
                        <div>
                          <strong>Empathy Detected:</strong>{' '}
                          {call.empathy_detection.empathy_detected}
                        </div>
                        <div>
                          <strong>Overall Score:</strong>{' '}
                          {call.empathy_detection.overall_score}
                        </div>
                        <div className="mt-2">
                          <strong>Empathy Instances:</strong>
                        </div>
                        {/* Iterate over empathy_instances */}
                        {call.empathy_detection.empathy_instances.map(
                          (instance, index) => (
                            <div
                              key={index}
                              className="mt-2 border-t border-gray-300 pt-2"
                            >
                              <div>
                                <strong>Customer Statement:</strong>{' '}
                                {instance.customer_statement}
                              </div>
                              <div>
                                <strong>Emotion Type:</strong>{' '}
                                {instance.emotion_type}
                              </div>
                              <div>
                                <strong>Agent Response:</strong>{' '}
                                {instance.agent_response}
                              </div>
                              <div>
                                <strong>Empathy Analysis:</strong>{' '}
                                {instance.empathy_analysis}
                              </div>
                              <div>
                                <strong>Time Stamp:</strong>{' '}
                                {instance.time_stamp}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Customer Details
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* Display basic customer details */}
                    <div>
                      <strong>Customer Name:</strong>{' '}
                      {call.customer_details.customer_name}
                    </div>
                    <div>
                      <strong>Customer Type:</strong>{' '}
                      {call.customer_details.customer_type}
                    </div>
                    <div>
                      <strong>Phone Number:</strong>{' '}
                      {call.customer_details.phone_number || 'N/A'}
                    </div>
                    <div>
                      <strong>Breakdown Location:</strong>{' '}
                      {call.customer_details.breakdown_location}
                    </div>
                    <div>
                      <strong>Vehicle Number:</strong>{' '}
                      {call.customer_details.vehicle_number}
                    </div>
                    <div>
                      <strong>Vehicle Model:</strong>{' '}
                      {call.customer_details.vehicle_model}
                    </div>

                    {/* Display emotional tone analysis */}
                    {call.customer_details.emotional_tone && (
                      <div className="mt-2">
                        <strong>Emotional Tone Analysis:</strong>
                        {call.customer_details.emotional_tone.emotional_tone_instances_of_customer.map(
                          (instance, index) => (
                            <div
                              key={index}
                              className="mt-2 border-t border-gray-300 pt-2"
                            >
                              <div>
                                <strong>Emotional Tone:</strong>{' '}
                                {instance.emotional_tone}
                              </div>
                              <div>
                                <strong>Time Stamp:</strong>{' '}
                                {instance.time_stamp}
                              </div>
                              <div>
                                <strong>Analysis:</strong>{' '}
                                {instance.emotional_tone_analysis}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Display sentiment trend */}
                    {call.customer_details.sentiment_trend && (
                      <div className="mt-2">
                        <strong>Sentiment Trend:</strong>
                        <div>
                          <strong>Start:</strong>{' '}
                          {call.customer_details.sentiment_trend.start}
                        </div>
                        <div>
                          <strong>Mid:</strong>{' '}
                          {call.customer_details.sentiment_trend.mid}
                        </div>
                        <div>
                          <strong>End:</strong>{' '}
                          {call.customer_details.sentiment_trend.end}
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Agent Details
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* Display basic agent details */}
                    <div>
                      <strong>Agent Name:</strong>{' '}
                      {call.agent_details.agent_name}
                    </div>
                    <div>
                      <strong>Talk-to-Listen Ratio:</strong>{' '}
                      {call.agent_details.talk_to_listen_ratio}
                    </div>
                    <div>
                      <strong>Interruption Count:</strong>{' '}
                      {call.agent_details.interruption_count}
                    </div>

                    {/* Display probing questions */}
                    {call.agent_details.probing_questions && (
                      <div className="mt-2">
                        <strong>Probing Questions:</strong>
                        {call.agent_details.probing_questions.questions.map(
                          (questionData, index) => (
                            <div
                              key={index}
                              className="mt-2 border-t border-gray-300 pt-2"
                            >
                              <div>
                                <strong>Question:</strong>{' '}
                                {questionData.question}
                              </div>
                              <div>
                                <strong>Response:</strong>{' '}
                                {questionData.response}
                              </div>
                              <div>
                                <strong>Purpose Fulfilled:</strong>{' '}
                                {questionData.purpose_fulfilled.status
                                  ? 'Yes'
                                  : 'No'}
                              </div>
                              {questionData.purpose_fulfilled.status && (
                                <div>
                                  <strong>Explanation:</strong>{' '}
                                  {questionData.purpose_fulfilled.explanation}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Display compliance score */}
                    {call.agent_details.compliance_score && (
                      <div className="mt-2">
                        <strong>Compliance Score:</strong>
                        <div>
                          <strong>Overall Compliance Score:</strong>{' '}
                          {
                            call.agent_details.compliance_score
                              .overall_compliance_score
                          }
                        </div>
                        <div>
                          <strong>Correct Language Usage:</strong>{' '}
                          {call.agent_details.compliance_score
                            .correct_language_usage
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Objections Handled:</strong>{' '}
                          {call.agent_details.compliance_score
                            .objections_handled
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Abusive Words:</strong>{' '}
                          {call.agent_details.compliance_score.abusive_words
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Greeting Done:</strong>{' '}
                          {call.agent_details.compliance_score.greeting_done
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Noise-Free Environment:</strong>{' '}
                          {call.agent_details.compliance_score
                            .noise_free_environment
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Call Closed Properly:</strong>{' '}
                          {call.agent_details.compliance_score
                            .call_closed_properly
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Filler Words:</strong>{' '}
                          {call.agent_details.compliance_score.filler_words
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Purpose of Call Explained:</strong>{' '}
                          {call.agent_details.compliance_score
                            .purpose_of_call_explained
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Brand Name Pronunciation:</strong>{' '}
                          {call.agent_details.compliance_score
                            .brand_name_pronunciation
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Empathetic Towards Lead:</strong>{' '}
                          {call.agent_details.compliance_score
                            .empathic_towards_lead
                            ? 'Yes'
                            : 'No'}
                        </div>
                        <div>
                          <strong>Slang Usage:</strong>{' '}
                          {call.agent_details.compliance_score.slang_usage
                            ? 'Yes'
                            : 'No'}
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    NPS (Net Promoter Score)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* Display NPS type and details */}
                    <div>
                      <strong>NPS Type:</strong> {call.nps.nps_type}
                    </div>
                    <div>
                      <strong>NPS Detail:</strong> {call.nps.nps_detail}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Brand Perception
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {call.brand_perception}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Brand Loyalty Impact
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {call.brand_loyalty_impact}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Brand Trust
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {call.brand_trust}
                  </td>
                </tr>

                {call.brand_sentiment.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 align-top">
                      {item.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {/* Display sentiment details */}
                      <div>
                        <strong>Sentiment Indicator:</strong>{' '}
                        {item.sentiment_indicator}
                      </div>
                      <div>
                        <strong>Frequency of Frustration:</strong>{' '}
                        {item.frequency_of_frustration}
                      </div>
                      <div>
                        <strong>Frequency of Happiness:</strong>{' '}
                        {item.frequency_of_happiness}
                      </div>
                      <div>
                        <strong>Brand Sentiment Analysis:</strong>{' '}
                        {item.brand_sentiment_analysis}
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Brand Mentions by Customer
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">Brand Mention</th>
                          <th className="border px-4 py-2">Time Stamp</th>
                        </tr>
                      </thead>
                      <tbody>
                        {call.brand_mentions_by_customer.map(
                          (mention, index) => (
                            <tr key={index}>
                              <td className="border px-4 py-2">
                                {mention.brand_mention}
                              </td>
                              <td className="border px-4 py-2">
                                {mention.time_stamp}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Brand Mentions by Agent
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">Brand Mention</th>
                          <th className="border px-4 py-2">Time Stamp</th>
                        </tr>
                      </thead>
                      <tbody>
                        {call.brand_mentions_by_agent.map((mention, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">
                              {mention.brand_mention}
                            </td>
                            <td className="border px-4 py-2">
                              {mention.time_stamp}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Agent Threshold Mapping for Coaching
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">
                            Coaching Category
                          </th>
                          <th className="border px-4 py-2">Score</th>
                          <th className="border px-4 py-2">
                            Evidence from Transcript
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {call.agent_threshold_mapping_for_coaching.map(
                          (coaching, index) => (
                            <>
                              {Object.keys(coaching).map((category) => (
                                <tr key={index + category}>
                                  <td className="border px-4 py-2">
                                    {category}
                                  </td>
                                  <td className="border px-4 py-2">
                                    {coaching[category].score}
                                  </td>
                                  <td className="border px-4 py-2">
                                    {
                                      coaching[category]
                                        .evidence_from_transcript
                                    }
                                  </td>
                                </tr>
                              ))}
                            </>
                          )
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Agent Coaching
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">Category</th>
                          <th className="border px-4 py-2">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Executive Summary */}
                        <tr>
                          <td className="border px-4 py-2">
                            Executive Summary
                          </td>
                          <td className="border px-4 py-2">
                            <strong>Call Overview:</strong>{' '}
                            {
                              call.agent_coaching.executive_summary
                                .call_overview
                            }
                            <br />
                            <strong>Major Concerns:</strong>
                            <ul>
                              {call.agent_coaching.executive_summary.major_concerns.map(
                                (concern, idx) => (
                                  <li key={idx}>{concern}</li>
                                )
                              )}
                            </ul>
                          </td>
                        </tr>

                        {/* Framework Analysis */}
                        {Object.keys(
                          call.agent_coaching.framework_analysis
                        ).map((category, idx) => (
                          <tr key={idx}>
                            <td className="border px-4 py-2">
                              {category.replace(/_/g, ' ')}
                            </td>
                            <td className="border px-4 py-2">
                              <table className="w-full table-auto">
                                <thead>
                                  <tr>
                                    <th className="border px-4 py-2">
                                      Timestamp
                                    </th>
                                    <th className="border px-4 py-2">Issue</th>
                                    <th className="border px-4 py-2">Impact</th>
                                    <th className="border px-4 py-2">
                                      Recommended Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {call.agent_coaching.framework_analysis[
                                    category
                                  ].map((entry, entryIdx) => (
                                    <tr key={entryIdx}>
                                      <td className="border px-4 py-2">
                                        {entry.timestamp}
                                      </td>
                                      <td className="border px-4 py-2">
                                        {entry.issue}
                                      </td>
                                      <td className="border px-4 py-2">
                                        {entry.impact}
                                      </td>
                                      <td className="border px-4 py-2">
                                        {entry.recommended_action}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        ))}

                        {/* Coaching Points */}
                        <tr>
                          <td className="border px-4 py-2">Coaching Points</td>
                          <td className="border px-4 py-2">
                            <table className="w-full table-auto">
                              <thead>
                                <tr>
                                  <th className="border px-4 py-2">
                                    Framework Parameter
                                  </th>
                                  <th className="border px-4 py-2">
                                    Suggested Coaching Points
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {call.agent_coaching.coaching_points.map(
                                  (point, pointIdx) => (
                                    <tr key={pointIdx}>
                                      <td className="border px-4 py-2">
                                        {point.framework_parameter}
                                      </td>
                                      <td className="border px-4 py-2">
                                        <ul>
                                          {point.suggested_coaching_point.map(
                                            (suggestion, suggestionIdx) => (
                                              <li key={suggestionIdx}>
                                                {suggestion}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    QA Scoring
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">Question</th>
                          <th className="border px-4 py-2">
                            Customer Response
                          </th>
                          <th className="border px-4 py-2">Clarity Score</th>
                          <th className="border px-4 py-2">Relevance Score</th>
                          <th className="border px-4 py-2">Efficiency Score</th>
                          <th className="border px-4 py-2">Empathy Score</th>
                          <th className="border px-4 py-2">
                            Response Management Score
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {call.qa_scoring.markings.map((marking, idx) => (
                          <tr key={idx}>
                            <td className="border px-4 py-2">
                              {marking.question}
                            </td>
                            <td className="border px-4 py-2">
                              {marking.customer_response}
                            </td>
                            <td className="border px-4 py-2">
                              {marking.clarity_score}
                            </td>
                            <td className="border px-4 py-2">
                              {marking.relevance_score}
                            </td>
                            <td className="border px-4 py-2">
                              {marking.efficiency_score}
                            </td>
                            <td className="border px-4 py-2">
                              {marking.empathy_score}
                            </td>
                            <td className="border px-4 py-2">
                              {marking.response_management_score}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="mt-4">
                      <strong>Agent QA Rating:</strong>{' '}
                      {call.qa_scoring.agent_qa_rating}
                      <br />
                      <strong>Agent QA Score Percentage:</strong>{' '}
                      {call.qa_scoring.agent_qa_score_percentage}%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 align-top">
                    Agent Performance
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">Performance Area</th>
                          <th className="border px-4 py-2">Score</th>
                          <th className="border px-4 py-2">Description</th>
                          <th className="border px-4 py-2">Comment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(call.agent_performance).map((key, idx) => {
                          const performance = call.agent_performance[key];
                          return (
                            <tr key={idx}>
                              <td className="border px-4 py-2">
                                {key.replace(/_/g, ' ')}
                              </td>
                              <td className="border px-4 py-2">
                                {performance.score}
                              </td>
                              <td className="border px-4 py-2">
                                {performance.description}
                              </td>
                              <td className="border px-4 py-2">
                                {performance.comment}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <div className="mt-4">
                      <strong>Overall Performance Score:</strong>{' '}
                      {call.agent_performance.overall_performance_score}
                      <br />
                      <strong>Final Comment:</strong>{' '}
                      {call.agent_performance.final_comment}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Individual Call Details */}
      {/* <IndividualCallDetails callData={caseData.calls_overview.calls} /> */}

      {/* Q&A Scoring */}
      {/* <QAScoring scoringData={caseData.calls_overview.calls[0].qa_scoring} /> */}

      {/* Probing Questions */}
      {/* <ProbingQuestions probingData={caseData.calls_overview.call_meta} /> */}

      {/* Brand Sentiments Table */}
      {/* <BrandSentiments
        brandSentimentData={caseData.calls_overview.brand_sentiment}
      /> */}

      {/* Empathy Analysis Table */}
      {/* <EmpathyAnalysis
        empathyData={caseData.calls_overview.empathy_detection}
      /> */}

      {/* Agent Performance Score */}
      {/* <AgentPerformanceScore
        performanceData={caseData.calls_overview.agent_performance}
      /> */}

      {/* Agent Threshold Mapping for Coaching */}
      {/* <AgentThresholdMapping
        coachingData={
          caseData.calls_overview.agent_threshold_mapping_for_coaching
        }
      /> */}

      {/* Suggested Coaching Table */}
      {/* <SuggestedCoaching
        coachingData={caseData.calls_overview.agent_coaching}
      /> */}

      {/* Action Plan for TL/CX Manager Table */}
      {/* <ActionPlanDetails
        actionData={caseData.calls_overview.action_plan_details}
      /> */}
    </div>
  );
}
