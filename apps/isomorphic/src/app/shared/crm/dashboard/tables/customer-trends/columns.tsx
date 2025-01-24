'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { CustomerTrendsDataType } from '@/data/cust-trends-data';

const columnHelper = createColumnHelper<CustomerTrendsDataType>();

export const custTrendsColumns = [
  // columnHelper.accessor('id', {
  //   size: 50,
  //   header: 'Case ID',
  //   cell: (info) => (
  //     <Text className="whitespace-nowrap font-medium text-gray-900">
  //       {info.getValue()}
  //     </Text>
  //   ),
  // }),
  columnHelper.accessor('customerName', {
    size: 200,
    header: 'Customer Name',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('vehicleNumber', {
    size: 150,
    header: 'Vehicle Number',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('vehicleModel', {
    size: 150,
    header: 'Vehicle Model',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('emotionalToneInstancesCount', {
    size: 180,
    header: 'Emotional Tone Instances Count',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('emotionalToneInstances', {
    size: 300,
    header: 'Emotional Tone Instances',
    cell: (info) => {
      const instances = info.getValue();
      return (
        <div className="max-h-10 overflow-y-auto text-sm text-gray-900">
          {instances.map((instance, index) => (
            <Text key={index} className="block">
              {instance.emotionalTone} at {instance.timeStamp}: {instance.emotionalToneAnalysis}
            </Text>
          ))}
        </div>
      );
    },
  }),
  columnHelper.accessor('sentimentTrend', {
    size: 150,
    header: 'Sentiment Trend',
    cell: (info) => {
      const trend = info.getValue();
      return (
        <Text className="text-sm font-medium text-gray-900">
          Start: {trend.start}, Mid: {trend.mid}, End: {trend.end}
        </Text>
      );
    },
  }),
];
