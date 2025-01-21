// components/AgentPerformanceScore.tsx

interface AgentPerformanceScoreProps {
  performanceData: {
    parameter: string;
    description: string;
    score: number; // Assuming score is numeric
    comments: string;
  }[];
}

const AgentPerformanceScore = ({
  performanceData,
}: AgentPerformanceScoreProps) => {
  const safePerformanceData = Array.isArray(performanceData)
    ? performanceData
    : [];
  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">Agent Performance Score</h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Parameter</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Score (1-5)</th>
            <th className="border border-gray-300 px-4 py-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {safePerformanceData.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 font-medium">
                {item.parameter}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.score}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.comments}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentPerformanceScore;
