'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { FeedbackDataType } from '@/data/feedback-data';

const columnHelper = createColumnHelper<FeedbackDataType>();

export const feedbackColumns = [
  columnHelper.accessor('focusArea', {
    size: 250,
    header: 'Focus Area',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('keyIssue', {
    size: 300,
    header: 'Key Issue',
    cell: (info) => (
      <Text className="text-sm text-gray-900">{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('coachingPoints', {
    size: 400,
    header: 'Coaching Points',
    cell: (info) => (
      <Text className="text-sm text-gray-900">{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('feedbackForAgent', {
    size: 400,
    header: 'Feedback for Agent',
    cell: (info) => (
      <Text className="text-sm text-gray-900">{info.getValue()}</Text>
    ),
  }),
];
