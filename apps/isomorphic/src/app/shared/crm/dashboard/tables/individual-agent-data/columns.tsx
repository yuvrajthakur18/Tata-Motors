'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { AgentDataType } from '@/data/agent-data';

const columnHelper = createColumnHelper<AgentDataType>();

export const agentColumns = [
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
  columnHelper.accessor('agentName', {
    size: 230,
    header: 'Agent Name',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('callsHandled', {
    size: 120,
    header: 'Calls Handled',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('duration', {
    size: 150,
    header: 'Duration',
    cell: ({ row: { original } }) => {
      const durationHour = Math.floor(original.duration / 3600);
      const durationMinutes = Math.floor((original.duration % 3600) / 60);
      return (
        <span className="whitespace-nowrap font-semibold">
          {durationHour > 0 && `${durationHour}h `}
          {durationMinutes > 0 ? `${durationMinutes}m` : ''}
        </span>
      );
    },
  }),
  columnHelper.accessor('holdTime', {
    size: 150,
    header: 'Hold Time',
    cell: ({ row: { original } }) => {
      const holdMinutes = Math.floor(original.holdTime / 60);
      const holdSeconds = original.holdTime % 60;
      return (
        <span className="whitespace-nowrap font-semibold">
          {holdMinutes > 0 && `${holdMinutes}m `}
          {holdSeconds > 0 ? `${holdSeconds}s` : ''}
        </span>
      );
    },
  }),
  columnHelper.accessor('talkToListenRatio', {
    size: 180,
    header: 'Talk to Listen Ratio',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('interruptionsCount', {
    size: 150,
    header: 'Interruptions Count',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('casesSolved', {
    size: 150,
    header: 'Cases Solved',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('agentEfficiency', {
    size: 160,
    header: 'Agent Efficiency',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}%
      </Text>
    ),
  }),
  columnHelper.accessor('brandMentions', {
    size: 200,
    header: 'Brand Mentions',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('overallPerformance', {
    size: 200,
    header: 'Agent Overall Performance',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
];
