'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { SentimentDataType } from '@/data/sentiment-data';

const columnHelper = createColumnHelper<SentimentDataType>();

export const sentimentColumns = [

  columnHelper.accessor('case_id', {
    size: 200,
    header: 'Case ID',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('call_id', {
    size: 200,
    header: 'Call ID',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
    columnHelper.accessor('quality_score', {
      size: 150,
      header: 'Quality Score',
      cell: (info) => (
        <Text className="whitespace-nowrap font-medium text-gray-900">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('quality_rating', {
      size: 150,
      header: 'Quality Rating',
      cell: (info) => (
        <Text className="whitespace-nowrap font-medium text-gray-900">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('issues.severity_summary', {
      size: 200,
      header: 'Severity Summary',
      cell: (info) => (
        <Text className="text-sm font-medium text-gray-900">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('is_valid', {
      size: 100,
      header: 'Is Valid?',
      cell: (info) => (
        <Text className="whitespace-nowrap font-medium text-gray-900">
          {info.getValue() ? 'Yes' : 'No'}
        </Text>
      ),
    }),
    columnHelper.accessor('needs_regeneration', {
      size: 150,
      header: 'Needs Regeneration?',
      cell: (info) => (
        <Text className="whitespace-nowrap font-medium text-gray-900">
          {info.getValue() ? 'Yes' : 'No'}
        </Text>
      ),
    }),
    columnHelper.accessor('issues.category_summary', {
      size: 250,
      header: 'Category Summary',
      cell: (info) => (
        <Text className="text-sm font-medium text-gray-900">
          {info.getValue()}
        </Text>
      ),
    }),
    
    columnHelper.accessor('issues.text_summary', {
      size: 300,
      header: 'Text Summary',
      cell: (info) => (
        <Text className="text-sm font-medium text-gray-900">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('issues.reason_summary', {
      size: 300,
      header: 'Reason Summary',
      cell: (info) => (
        <Text className="text-sm font-medium text-gray-900">
          {info.getValue()}
        </Text>
      ),
    }),
    

  
];
