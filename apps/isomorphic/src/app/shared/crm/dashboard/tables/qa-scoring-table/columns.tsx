'use client';

import { StatusSelect } from '@core/components/table-utils/status-select';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';

export interface Appointment {
  id: string;
  question: string;
  customer_response: string;
  clarity_score: string;
  relevance_score: string;
  efficiency_score: string;
  empathy_score: string;
  response_management_score: string;
}

const columnHelper = createColumnHelper<Appointment>();

export const appointmentColumns = [
  // columnHelper.accessor('id', {
  //   size: 30,
  //   enableSorting: false,
  //   header: ({ table }) => (
  //     <Checkbox
  //       className="ps-3"
  //       aria-label="Select all rows"
  //       checked={table.getIsAllPageRowsSelected()}
  //       onChange={() => table.toggleAllPageRowsSelected()}
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       className="ps-3"
  //       aria-label="Select row"
  //       checked={row.getIsSelected()}
  //       onChange={() => row.toggleSelected()}
  //     />
  //   ),
  // }),
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
  columnHelper.accessor('clarity_score', {
    size: 100,
    header: 'Clarity Score',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.clarity_score}
      </Text>
    ),
  }),
  columnHelper.accessor('relevance_score', {
    size: 100,
    header: 'Relevance Score',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.relevance_score}
      </Text>
    ),
  }),
  columnHelper.accessor('efficiency_score', {
    size: 100,
    header: 'Efficiency Score',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.efficiency_score}
      </Text>
    ),
  }),
  columnHelper.accessor('empathy_score', {
    size: 100,
    header: 'Empathy Score',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.empathy_score}
      </Text>
    ),
  }),
  columnHelper.accessor('response_management_score', {
    size: 100,
    header: 'Response Management Score',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.response_management_score}
      </Text>
    ),
  }),
];
