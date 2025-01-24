'use client';

import Table from '@core/components/table';
import { custTrendsColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';
import rawData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

// Transform raw data into the desired structure for the table
const transformData = (data: typeof rawData) => {
  return data.map((item, index) => {
    const firstCall = item.calls_overview.calls[0] || {};
    const customerDetails = firstCall.customer_details || {};
    const emotionalToneInstances = customerDetails.emotional_tone?.emotional_tone_instances_of_customer || [];

    return {
      id: index + 1, // Unique ID for each row
      customerName: customerDetails.customer_name || 'N/A',
      vehicleNumber: customerDetails.vehicle_number || 'N/A',
      vehicleModel: customerDetails.vehicle_model || 'N/A',
      emotionalToneInstancesCount: customerDetails.emotional_tone?.emotional_tone_instances_count || 0,
      emotionalToneInstances: emotionalToneInstances.map((instance) => ({
        emotionalTone: instance.emotional_tone,
        timeStamp: instance.time_stamp,
        emotionalToneAnalysis: instance.emotional_tone_analysis,
      })),
      sentimentTrend: {
        start: customerDetails.sentiment_trend?.start || 'N/A',
        mid: customerDetails.sentiment_trend?.mid || 'N/A',
        end: customerDetails.sentiment_trend?.end || 'N/A',
      },
    };
  });
};

const custTrendsData = transformData(rawData);

export type CustTrendsDataType = (typeof custTrendsData)[number];

export default function CustomerTrends({ className }: { className?: string }) {
  const { table, setData } = useTanStackTable<CustTrendsDataType>({
    tableData: custTrendsData,
    columnConfig: custTrendsColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 7,
        },
      },
      meta: {
        handleDeleteRow: (row) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Customer Emotional Tone Instances and Trends"
      titleClassName="whitespace-nowrap"
      headerClassName="mb-4 items-start flex-col @[62rem]:flex-row @[62rem]:items-center px-5 lg:px-7 pt-5 lg:pt-7"
      actionClassName="grow @[62rem]:ps-11 ps-0 items-center w-full @[42rem]:w-full @[62rem]:w-auto"
      action={<Filters table={table} />}
    >
      <Table table={table} variant="modern" />
      <TablePagination table={table} className="p-4" />
    </WidgetCard>
  );
}
