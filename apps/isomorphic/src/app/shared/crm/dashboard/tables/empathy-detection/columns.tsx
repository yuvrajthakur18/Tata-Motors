'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import { EmpathyDetectionDataType } from './empathy-detection-data';

const columnHelper = createColumnHelper<EmpathyDetectionDataType>();

export const empathyDetectionColumns = [
  // columnHelper.accessor('id', {
  //   size: 50,
  //   header: 'Case ID',
  //   cell: (info) => (
  //     <Text className="whitespace-nowrap font-medium text-gray-900">
  //       {info.getValue()}
  //     </Text>
  //   ),
  // }),
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
  columnHelper.accessor('empathyDetection', {
    size: 150,
    header: 'Empathy Detection',
    cell: (info) => (
      <Text
        className={`whitespace-nowrap font-medium ${
          info.getValue() === 'Yes' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('yes', {
    size: 100,
    header: 'Empathy Score',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('empathyInstances', {
    size: 300,
    header: 'Empathy Instances',
    cell: (info) => (
      <div className="text-sm text-gray-900 max-h-10 overflow-y-auto text-sm text-gray-900">
        {info.getValue().map((instance, index) => (
          <Text key={index} className="block">
            {instance.instance}
          </Text>
        ))}
      </div>
    ),
  }),
  // columnHelper.display({
  //   id: 'sentimentTrend',
  //   size: 200,
  //   header: 'Sentiment Trend',
  //   cell: ({ row: { original } }) => (
  //     <Text className="text-sm text-gray-900">
  //       {`${original.sentimentTrend.start} -> ${original.sentimentTrend.mid} -> ${original.sentimentTrend.end}`}
  //     </Text>
  //   ),
  // }),
  columnHelper.accessor('callType', {
    size: 150,
    header: 'Call Type',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('caseStatus', {
    size: 150,
    header: 'Case Status',
    cell: (info) => (
      <Text 
        className={`whitespace-nowrap font-medium ${
          info.getValue() === 'Open' ? 'text-blue-600' : 'text-green-600'
        }`}
      >
        {info.getValue()}
      </Text>
    ),
  }),
];