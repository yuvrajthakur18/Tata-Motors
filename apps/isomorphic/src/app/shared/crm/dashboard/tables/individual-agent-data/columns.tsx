'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import Link from 'next/link';
import { AgentPerformanceData } from './index';

const columnHelper = createColumnHelper<AgentPerformanceData>();

export const agentColumns = [
  columnHelper.accessor((row) => row.agent_name, {
    size: 230,
    header: 'Agent Name',
    cell: (info) => (
      <Link
        href={`/agent-details/${info.getValue()}`}
        className="text-blue-600 hover:underline"
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor((row) => row.overall_performance_score, {
    size: 200,
    header: 'Overall Performance Score',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor((row) => row.agent_qa_score_percentage, {
    size: 200,
    header: 'Agent QA Score Percentage',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}%
      </Text>
    ),
  }),
  columnHelper.accessor((row) => row.agent_qa_rating, {
    size: 200,
    header: 'Agent QA Rating',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
];
