'use client';

import { StatusSelect } from '@core/components/table-utils/status-select';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';
import { AppointmentDataType } from '.';

const statusOptions = [
  { label: 'Waiting', value: 'Waiting' },
  { label: 'Scheduled', value: 'Scheduled' },
];

const columnHelper = createColumnHelper<AppointmentDataType>();
export const appointmentColumns = [
  columnHelper.accessor('id', {
    size: 30,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        className="ps-3"
        aria-label="Select all rows"
        checked={table.getIsAllPageRowsSelected()}
        onChange={() => table.toggleAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="ps-3"
        aria-label="Select row"
        checked={row.getIsSelected()}
        onChange={() => row.toggleSelected()}
      />
    ),
  }),
  // Customer's Statement	Agent's Empathetic Response
  columnHelper.accessor('customerStatement', {
    size: 100,
    header: 'Customer\'s Statement',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.customerStatement}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('agentEmpatheticResponse', {
    size: 200,
    header: 'Agent\'s Empathetic Response',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.agentEmpatheticResponse}
        </Text>
      </>
    ),
  }),

];
