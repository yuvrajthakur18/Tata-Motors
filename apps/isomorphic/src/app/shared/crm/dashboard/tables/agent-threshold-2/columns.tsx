'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';

export interface AgentPerformance {
  category: string;
  sentiment_indicator: string;
  frequency_of_frustration: string;
  frequency_of_happiness: string;
  brand_sentiment_analysis: string;
}
const getSentimentColor = (score: number): string => {
  if (score >= 7) return 'text-green-600';  // Positive sentiment
  if (score >= 5) return 'text-yellow-500'; // Neutral sentiment
  if (score >= 3) return 'text-orange-500'; // Caution sentiment
  return 'text-red-600';                    // Negative sentiment
};
const columnHelper = createColumnHelper<AgentPerformance>();

export const appointmentColumns = [
  columnHelper.accessor('category', {
    size: 200,
    header: 'Category',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.category}
      </Text>
    ),
  }),
  columnHelper.accessor('sentiment_indicator', {
    size: 150,
    header: 'Sentiment',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className={`text-sm font-medium ${getSentimentColor(parseInt(original.sentiment_indicator, 10))}`}>
        {original.sentiment_indicator}
      </Text>
    ),
  }),
  // columnHelper.accessor('frequency_of_frustration', {
  //   size: 150,
  //   header: 'Frustrations',
  //   enableSorting: false,
  //   cell: ({ row: { original } }) => (
  //     <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
  //       {original.frequency_of_frustration}
  //     </Text>
  //   ),
  // }),
  // columnHelper.accessor('frequency_of_happiness', {
  //   size: 150,
  //   header: 'Happiness',
  //   enableSorting: false,
  //   cell: ({ row: { original } }) => (
  //     <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
  //       {original.frequency_of_happiness}
  //     </Text>
  //   ),
  // }),
  columnHelper.accessor('brand_sentiment_analysis', {
    size: 300,
    header: 'Sentiment Analysis',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.brand_sentiment_analysis}
      </Text>
    ),
  }),
];
