'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { EmpathyDetectionDataType } from '@/data/empathy-detection-data';

const columnHelper = createColumnHelper<EmpathyDetectionDataType>();

export const empathyDetectionColumns = [
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
  columnHelper.accessor('empathyDetection', {
    size: 150,
    header: 'Empathy Detection',
    cell: (info) => (
      <Text
        className={`whitespace-nowrap font-medium ${
          info.getValue() === 'Detected' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('yes', {
    size: 100,
    header: 'Yes',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('no', {
    size: 100,
    header: 'No',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('empathyInstances', {
    size: 300,
    header: 'Empathy Instances',
    cell: ({ row: { original } }) => (
      <div className="text-sm text-gray-900">
        {original.empathyInstances.map((instance, index) => (
          <Text key={index} className="block">
            {instance.instance}: {instance.count}
          </Text>
        ))}
      </div>
    ),
  }),
];
