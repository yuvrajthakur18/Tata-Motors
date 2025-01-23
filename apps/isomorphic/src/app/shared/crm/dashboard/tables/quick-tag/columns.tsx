'use client';

import Table from '@core/components/table';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

// Define the column structure
import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';

const columnHelper = createColumnHelper<{
  focus_area: string;
  row_items: string;
}>();

export const appointmentColumns = [
  columnHelper.accessor('focus_area', {
    size: 200,
    header: 'Parameters',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm p-0 font-medium text-gray-900 dark:text-gray-700">
        {original.focus_area}
      </Text>
    ),
  }),
  columnHelper.accessor('row_items', {
    size: 300,
    header: 'Value',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm p-0 font-medium text-gray-900 dark:text-gray-700">
        {original.row_items}
      </Text>
    ),
  }),
];