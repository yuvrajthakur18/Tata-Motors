'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import { AppointmentDataType } from '.';

const columnHelper = createColumnHelper<AppointmentDataType>();

export const appointmentColumns = [
  columnHelper.accessor('id', {
    size: 30,
    enableSorting: false,
    header: ({ table }) => (
      <input
        type="checkbox"
        className="ps-3"
        aria-label="Select all rows"
        checked={table.getIsAllPageRowsSelected()}
        onChange={() => table.toggleAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        className="ps-3"
        aria-label="Select row"
        checked={row.getIsSelected()}
        onChange={() => row.toggleSelected()}
      />
    ),
  }),
  columnHelper.accessor('category', {
    size: 100,
    header: 'Category',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.category}
      </Text>
    ),
  }),
  columnHelper.accessor('indicator', {
    size: 100,
    header: 'Indicator',
    enableSorting: false,
    cell: ({ cell }) => {
      const value = cell.getValue();
      const backgroundColor =
        value === 'Positive' ? 'lightgreen' : value === 'Negative' ? 'lightcoral' : '';
      return (
        <div
          style={{
            backgroundColor,
            padding: '4px 8px',
            borderRadius: '4px',
          }}
        >
          <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
            {value}
          </Text>
        </div>
      );
    },
  }),
  columnHelper.accessor('frequencyOfFrustration', {
    size: 100,
    header: 'Frequency of Frustration',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.frequencyOfFrustration}
      </Text>
    ),
  }),
  columnHelper.accessor('analysis', {
    size: 300,
    header: 'Analysis',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.analysis}
      </Text>
    ),
  }),
];
