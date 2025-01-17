// components/IndividualCallDetails.tsx

interface IndividualCallDetailsProps {
  callData: {
    callId: string;
    callRecording: string;
    callDirection: string;
    natureOfCases: string;
    summary: string;
    transcription: string;
    participantsNames: string;
    customerType: string;
    owner: string;
    driver: string;
    callDuration: string;
    holdTime: string;
    talkToListenRatio: string;
    interruptionsCount: string;
    emotionalToneOfCustomer: string;
    emotionalToneInstancesCount: string;
    emotionalToneInstances: string;
    emotionalToneAnalysis: string;
    sentimentTrend: string;
    brandSentiment: string;
    empathyDetection: string;
  };
}

const IndividualCallDetails = ({ callData }: IndividualCallDetailsProps) => {
  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">Individual Call Details</h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Field</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(callData).map(([key, value]) => (
            <tr key={key}>
              <td className="border border-gray-300 px-4 py-2 font-medium capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {typeof value === 'string' ? value : JSON.stringify(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndividualCallDetails;
