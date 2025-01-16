'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';

type AgentThresholdDataType = {
  metric: string;
  score: number;
  idealThreshold: string;
  evidenceFromTranscript: string;
};

const columnHelper = createColumnHelper<AgentThresholdDataType>();

export const agentThresholdColumns = [
  columnHelper.accessor('metric', {
    size: 300,
    header: 'Metric',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('score', {
    size: 150,
    header: 'Score (1-10)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('idealThreshold', {
    size: 150,
    header: 'Ideal Threshold (8/10)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('evidenceFromTranscript', {
    size: 500,
    header: 'Evidence from Transcript',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
];
