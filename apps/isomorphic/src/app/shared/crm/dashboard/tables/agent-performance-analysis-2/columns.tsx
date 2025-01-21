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
  columnHelper.accessor('parameter', {
    size: 100,
    header: 'Parameter',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.parameter}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('description', {
    size: 200,
    header: 'Description',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.description}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('score', {
    size: 100,
    header: 'Score (1-5)',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.score}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('comments', {
    size: 200,
    header: 'Comments',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.comments}
        </Text>
      </>
    ),
  }),


];
