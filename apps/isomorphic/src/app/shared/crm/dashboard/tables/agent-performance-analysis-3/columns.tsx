'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';

export interface AgentPerformance {
  parameter: string;
  description: string;
  score: number;
  comment: string;
}

const columnHelper = createColumnHelper<AgentPerformance>();

export const performanceColumns = [
  columnHelper.accessor('parameter', {
    size: 200,
    header: 'Parameter',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.parameter}
      </Text>
    ),
  }),
  columnHelper.accessor('description', {
    size: 300,
    header: 'Description',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.description}
      </Text>
    ),
  }),
  columnHelper.accessor('score', {
    size: 100,
    header: 'Score (1-5)',
    enableSorting: false,
    cell: ({ row: { original } }) => {
      const score: number = original.score;
      const getColor = (score: number): string => {
        if (score <= 2) return 'text-red-500';
        if (score === 3) return 'text-yellow-500';
        if (score >= 4) return 'text-green-500';
        return 'text-gray-700';
      };
      return (
        <Text className={`text-sm font-medium ${getColor(score)}`}>
          {score}
        </Text>
      );
    },
  }),
  columnHelper.accessor('comment', {
    size: 400,
    header: 'Comments',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
        {original.comment}
      </Text>
    ),
  }),
];
