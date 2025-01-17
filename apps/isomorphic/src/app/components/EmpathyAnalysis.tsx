// components/EmpathyAnalysis.tsx

interface EmpathyAnalysisProps {
  empathyData: Array<{
    customerStatement: string;
    agentEmpatheticResponse: string;
  }>;
}

const EmpathyAnalysis = ({ empathyData }: EmpathyAnalysisProps) => {
  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">Empathy Analysis</h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              Customer&apos;s Statement
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Agent&apos;s Empathetic Response
            </th>
          </tr>
        </thead>
        <tbody>
          {empathyData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {row.customerStatement}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.agentEmpatheticResponse}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpathyAnalysis;
