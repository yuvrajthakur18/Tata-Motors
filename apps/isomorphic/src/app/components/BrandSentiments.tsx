// components/BrandSentiments.tsx

interface BrandSentimentsProps {
  brandSentimentData: {
    category: string;
    product: string;
    workshop: string;
    people: string;
    process: string;
    indicator: string;
    containsBothNegativeAndPositive: string;
    frequencyOfFrustrationRow: string;
    numberOnNegative: string;
    numberOnPositive: string;
    analysis: string;
    analysisGivenOnlyOnNegativeText: string;
  };
}

const BrandSentiments = ({ brandSentimentData }: BrandSentimentsProps) => {
  return (
    <div>
      <h2 className="mb-4 mt-6 text-xl font-bold">Brand Sentiments</h2>
      <table className="mt-4 w-full table-auto border-collapse border border-gray-400 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Row Items</th>
          </tr>
        </thead>
        <tbody>
          {/* Category Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Category
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.category}
            </td>
          </tr>

          {/* Product Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Product
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.product}
            </td>
          </tr>

          {/* Workshop Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Workshop
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.workshop}
            </td>
          </tr>

          {/* People Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              People
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.people}
            </td>
          </tr>

          {/* Process Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Process
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.process}
            </td>
          </tr>

          {/* Indicator Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Indicator
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.indicator}
            </td>
          </tr>

          {/* Contains both Negative and Positive Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Contains both Negative and Positive
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.containsBothNegativeAndPositive}
            </td>
          </tr>

          {/* Frequency of Frustration Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Frequency of Frustration
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.frequencyOfFrustrationRow}
            </td>
          </tr>

          {/* Number of Negative Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Number on Negative
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.numberOnNegative}
            </td>
          </tr>

          {/* Number of Positive Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Number on Positive
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.numberOnPositive}
            </td>
          </tr>

          {/* Analysis Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Analysis
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.analysis}
            </td>
          </tr>

          {/* Analysis Given Only on Negative Text Row */}
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Analysis Given Only on Negative Text
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {brandSentimentData.analysisGivenOnlyOnNegativeText}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BrandSentiments;
