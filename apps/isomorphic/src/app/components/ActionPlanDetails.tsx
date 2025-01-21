// components/ActionPlanDetails.tsx

interface ActionPlanDetailsProps {
  actionData: {
    actionPoint: string;
    actionDescription: string;
    impact: string;
  }[];
}

const ActionPlanDetails = ({ actionData }: ActionPlanDetailsProps) => {
  const safeActionData = Array.isArray(actionData) ? actionData : [];
  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">
        Action Plan for TL/CX Manager
      </h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Action Point</th>
            <th className="border border-gray-300 px-4 py-2">
              Action Description
            </th>
            <th className="border border-gray-300 px-4 py-2">Impact</th>
          </tr>
        </thead>
        <tbody>
          {safeActionData.map((action, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {action.actionPoint}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {action.actionDescription}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {action.impact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActionPlanDetails;
