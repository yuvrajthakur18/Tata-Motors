'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { CustomerTrendsDataType } from '@/data/cust-trends-data';

const columnHelper = createColumnHelper<CustomerTrendsDataType>();

export const custTrendsColumns = [
  columnHelper.accessor('id', {
    size: 50,
    header: 'Case ID',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('customerName', {
    size: 200,
    header: 'Customer Name',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('emotionalToneOfCustomer', {
    size: 200,
    header: 'Emotional Tone of Customer',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('emotionalToneInstancesCount', {
    size: 180,
    header: 'Emotional Tone Instances Count',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('emotionalToneInstances', {
    size: 300,
    header: 'Emotional Tone Instances',
    cell: ({ row: { original } }) => (
      <div className="text-sm text-gray-900">
        {original.emotionalToneInstances.map((tone, index) => (
          <Text key={index} className="block">
            {tone.tone}: {tone.count}
          </Text>
        ))}
      </div>
    ),
  }),
  columnHelper.accessor('emotionalToneAnalysis', {
    size: 300,
    header: 'Emotional Tone Analysis',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
];
