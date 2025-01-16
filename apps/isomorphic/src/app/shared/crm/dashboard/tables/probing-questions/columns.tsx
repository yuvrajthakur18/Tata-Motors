'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { ProbingQuestionsDataType } from '@/data/probing-questions-data';

const columnHelper = createColumnHelper<ProbingQuestionsDataType>();

export const probingQuestionsColumns = [
  columnHelper.accessor('id', {
    size: 50,
    header: 'Case ID',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('agentName', {
    size: 200,
    header: 'Agent Name',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('customerName', {
    size: 200,
    header: 'Customer Name',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('questions', {
    size: 300,
    header: 'Questions',
    cell: ({ row: { original } }) => (
      <div className="text-sm text-gray-900">
        {original.questions.map((question, index) => (
          <Text key={index} className="block">
            {index + 1}. {question}
          </Text>
        ))}
      </div>
    ),
  }),
  columnHelper.accessor('purposeOfInquiry', {
    size: 250,
    header: 'Purpose of Inquiry',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('analysis', {
    size: 300,
    header: 'Analysis',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
];
