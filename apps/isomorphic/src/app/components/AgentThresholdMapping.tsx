'use client';

import { useState } from 'react';

interface AgentThresholdMappingProps {
  coachingData: {
    parameter: string;
    score: number;
    evidence: string;
  }[];
}

const AgentThresholdMapping = ({
  coachingData,
}: AgentThresholdMappingProps) => {
  const [threshold, setThreshold] = useState(1);

  const filteredData = coachingData.filter((item) => item.score >= threshold);

  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">
        Agent Threshold Mapping for Coaching
      </h2>

      {/* Dropdown for Threshold Selection */}
      <div className="mb-4">
        <label htmlFor="threshold" className="mr-2 font-medium text-gray-700">
          Ideal Threshold:
        </label>
        <select
          id="threshold"
          className="rounded border border-gray-400 px-2 py-1"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              Coaching Parameter
            </th>
            <th className="border border-gray-300 px-4 py-2">Score (1-10)</th>
            <th className="border border-gray-300 px-4 py-2">
              Evidence from Transcript
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {item.parameter}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.score}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.evidence}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border border-gray-300 px-4 py-2 text-center"
                colSpan={3}
              >
                No data available for the selected threshold.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AgentThresholdMapping;
