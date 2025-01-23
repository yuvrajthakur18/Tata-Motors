'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';

export interface Appointment {
  id: string;
  customer_statement: string;
  emotion_type: string;
  agent_response: string;
  empathy_analysis: string;
  time_stamp: string;
}

const columnHelper = createColumnHelper<Appointment>();

export const appointmentColumns = [
  columnHelper.accessor('customer_statement', {
    size: 200,
    header: "Customer's Statement",
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm text-gray-900">{original.customer_statement}</Text>
    ),
  }),
  columnHelper.accessor('emotion_type', {
    size: 150,
    header: 'Emotion Type',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text
        className={`text-sm font-medium ${
          original.emotion_type === 'frustration'
            ? 'text-red-600'
            : original.emotion_type === 'concern'
            ? 'text-orange-600'
            : original.emotion_type === 'disappointment'
            ? 'text-yellow-600'
            : original.emotion_type === 'anger'
            ? 'text-purple-600'
            : 'text-gray-600'
        }`}
      >
        {original.emotion_type}
      </Text>
    ),
  }),
  columnHelper.accessor('agent_response', {
    size: 250,
    header: "Agent's Response",
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm text-gray-900">{original.agent_response}</Text>
    ),
  }),
  columnHelper.accessor('empathy_analysis', {
    size: 300,
    header: 'Empathy Analysis',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm text-gray-900">{original.empathy_analysis}</Text>
    ),
  }),
  columnHelper.accessor('time_stamp', {
    size: 150,
    header: 'Timestamp',
    enableSorting: true,
    cell: ({ row: { original } }) => (
      <Text className="text-sm text-gray-700">{original.time_stamp}</Text>
    ),
  }),
];
