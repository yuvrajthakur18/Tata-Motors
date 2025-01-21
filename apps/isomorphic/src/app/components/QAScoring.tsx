// components/QAScoring.tsx

interface QAScoringProps {
  scoringData: {
    agentsQuestion: string;
    customersResponse: string;
    scoreCriteria: string;
    score: number; // 1-5
    comments: string;
  }[];
}

const QAScoring = ({ scoringData }: QAScoringProps) => {
  // Safely handle scoringData to ensure it's always an array
  const safeScoringData = Array.isArray(scoringData) ? scoringData : [];

  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">Q&A Scoring</h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              Agent&apos;s Question
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Customer&apos;s Response
            </th>
            <th className="border border-gray-300 px-4 py-2">Score Criteria</th>
            <th className="border border-gray-300 px-4 py-2">Score (1-5)</th>
            <th className="border border-gray-300 px-4 py-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {safeScoringData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {row.agentsQuestion}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.customersResponse}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.scoreCriteria}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {row.score}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.comments}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QAScoring;
