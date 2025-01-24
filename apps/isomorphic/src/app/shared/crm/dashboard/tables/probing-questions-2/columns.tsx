'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import { AppointmentDataType } from './index';

const columnHelper = createColumnHelper<AppointmentDataType>();

export const appointmentColumns = [
  columnHelper.accessor('call_id', {
    size: 150,
    header: 'Call ID',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.call_id}
      </Text>
    ),
  }),
  columnHelper.accessor('question', {
    size: 200,
    header: "Agent's Question",
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.question}
      </Text>
    ),
  }),
  columnHelper.accessor('customer_response', {
    size: 200,
    header: "Customer's Response",
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.customer_response}
      </Text>
    ),
  }),
  columnHelper.accessor('purpose_fulfilled', {
    size: 100,
    header: 'Purpose Fulfilled',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text
        className={`text-sm font-medium ${
          original.purpose_fulfilled === 'Fulfilled'
            ? 'text-green-600'
            : 'text-red-600'
        }`}
      >
        {original.purpose_fulfilled}
      </Text>
    ),
  }),
  columnHelper.accessor('purpose_explanation', {
    size: 300,
    header: 'Purpose Explanation',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.purpose_explanation}
      </Text>
    ),
  }),
];