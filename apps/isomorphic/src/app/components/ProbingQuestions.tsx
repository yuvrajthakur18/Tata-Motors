// components/ProbingQuestions.tsx

interface ProbingQuestionsProps {
  probingData: {
    question: string;
    purposeOfProbing: string;
    analysis: string;
  }[];
}

const ProbingQuestions = ({ probingData }: ProbingQuestionsProps) => {
  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">Probing Questions</h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Questions</th>
            <th className="border border-gray-300 px-4 py-2">
              Purpose of Probing
            </th>
            <th className="border border-gray-300 px-4 py-2">Analysis</th>
          </tr>
        </thead>
        <tbody>
          {probingData.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {item.question}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.purposeOfProbing}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.analysis}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProbingQuestions;
