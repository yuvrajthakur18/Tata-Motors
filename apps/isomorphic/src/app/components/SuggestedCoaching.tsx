// components/SuggestedCoaching.tsx

import React from 'react';

interface SuggestedCoachingProps {
  coachingData: {
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
}

const SuggestedCoaching: React.FC<SuggestedCoachingProps> = ({
  coachingData,
}) => {
  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">Suggested Coaching</h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Focus Area</th>
            <th className="border border-gray-300 px-4 py-2">Row Items</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(coachingData).map(([key, value]) => (
            <tr key={key}>
              <td className="border border-gray-300 px-4 py-2 font-medium capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </td>
              <td className="border border-gray-300 px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuggestedCoaching;
