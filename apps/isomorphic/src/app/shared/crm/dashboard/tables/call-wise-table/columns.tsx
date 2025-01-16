'use client';

import { StatusSelect } from '@core/components/table-utils/status-select';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';
import { CallDataType } from '@/data/call-data';

const columnHelper = createColumnHelper<CallDataType>();

export const callColumns = [
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
  columnHelper.accessor('callRecording', {
    size: 200,
    header: 'Call Recording',
    cell: ({ row: { original } }) => (
      <a
        href={original.callRecording}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Play Recording
      </a>
    ),
  }),
  columnHelper.accessor('typeOfCall', {
    size: 180,
    header: 'Type of Call',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('callDuration', {
    size: 150,
    header: 'Call Duration',
    cell: ({ row: { original } }) => {
      const minutes = Math.floor(original.callDuration / 60);
      const seconds = original.callDuration % 60;
      return (
        <span className="whitespace-nowrap font-semibold">
          {minutes}m {seconds}s
        </span>
      );
    },
  }),
  columnHelper.accessor('holdTime', {
    size: 150,
    header: 'Hold Time',
    cell: ({ row: { original } }) => {
      const minutes = Math.floor(original.holdTime / 60);
      const seconds = original.holdTime % 60;
      return (
        <span className="whitespace-nowrap font-semibold">
          {minutes}m {seconds}s
        </span>
      );
    },
  }),
  columnHelper.accessor('talkToListenRatio', {
    size: 160,
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
      <span className="whitespace-nowrap font-semibold">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor('emotionalToneOfCustomer', {
    size: 200,
    header: 'Emotional Tone of Customer',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('emotionalTone', {
    size: 150,
    header: 'Emotional Tone',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('instancesCount', {
    size: 150,
    header: 'Instances Count',
    cell: (info) => (
      <span className="whitespace-nowrap font-semibold">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor('sentimentTrend', {
    size: 200,
    header: 'Sentiment Trend',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('brandSentiment', {
    size: 150,
    header: 'Brand Sentiment',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
];
