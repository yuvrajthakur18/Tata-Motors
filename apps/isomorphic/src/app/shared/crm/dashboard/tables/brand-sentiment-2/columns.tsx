// Updated Columns File
'use client';

import { StatusSelect } from '@core/components/table-utils/status-select';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';

export interface Appointment {
  id: string;
  category: string;
  sentiment_indicator: string;
  frequency_of_frustration: string;
  frequency_of_happiness: string;
  brand_sentiment_analysis: string;
}

const columnHelper = createColumnHelper<Appointment>();

export const appointmentColumns = [
  columnHelper.accessor('category', {
    size: 150,
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
      <Text
        className={`text-sm font-medium text-white p-3 rounded ${
          original.sentiment_indicator === 'Positive'
            ? 'bg-green-600 ':
            original.sentiment_indicator === 'Negative'
            ? 'bg-red-600 ': 'bg-yellow-600'
        }`}
      >
        {original.sentiment_indicator}
      </Text>
    ),
  }),
  columnHelper.accessor('frequency_of_frustration', {
    size: 100,
    header: 'Frustrations',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.frequency_of_frustration}
      </Text>
    ),
  }),
  columnHelper.accessor('frequency_of_happiness', {
    size: 100,
    header: 'Happiness',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.frequency_of_happiness}
      </Text>
    ),
  }),
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