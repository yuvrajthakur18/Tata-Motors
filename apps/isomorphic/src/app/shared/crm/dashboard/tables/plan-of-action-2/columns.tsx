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
  purpose_fulfilled: string;
  purpose_explanation: string;
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
