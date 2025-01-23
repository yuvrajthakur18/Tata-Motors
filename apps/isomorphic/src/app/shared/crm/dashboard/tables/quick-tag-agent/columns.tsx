'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';

const columnHelper = createColumnHelper<{
  parameter: string;
  value: string | number | boolean;
}>();

export const agentColumns = [
  columnHelper.accessor('parameter', {
    size: 200,
    header: 'Parameters',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="p-0 text-sm font-medium text-gray-900">
        {original.parameter}
      </Text>
    ),
  }),
  columnHelper.accessor('value', {
    size: 300,
    header: 'Value',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="p-0 text-sm font-medium text-gray-900">
        {original.value}
      </Text>
    ),
  }),
];
