'use client';

import Table from '@core/components/table';
import { sentimentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';


import rawData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

const transformData = (data: typeof rawData) => {
  return data.map((item) => {
    const firstCall = item.calls_overview.calls[0]; // Assuming you want the first call details
    const sentimentTrend =
      firstCall.sentiment_trend?.start +
      ' -> ' +
      firstCall.sentiment_trend?.mid +
      ' -> ' +
      firstCall.sentiment_trend?.end;

    return {
      id: item.case_overview.case_id,
      customerName: firstCall.customer_details?.customer_name || 'N/A',
      agentAllotted: firstCall.agent_details?.agent_name || 'N/A',
      callType: firstCall.call_type || 'N/A',
      brandPerception: firstCall.brand_perception, // Example, adjust based on your logic
      brandLoyalty: firstCall.brand_loyalty_impact, // Example, adjust based on your logic
      brandTrust: firstCall.brand_trust, // Example, adjust based on your logic
      breakdownLocation:
        firstCall.customer_details?.breakdown_location || 'N/A',
      phoneNumber: firstCall.customer_details?.phone_number || 'N/A',
      vehicleModel: firstCall.customer_details?.vehicle_model || 'N/A',
      customerType: firstCall.customer_details?.customer_type || 'N/A',
      sentimentTrends: sentimentTrend || 'N/A',
      caseStatus: item.case_overview.status_of_case || 'N/A',
    };
  });
};

const sentimentData = transformData(rawData);


export type SentimentDataType = {
  id: string;
  customerName: string;
  agentAllotted: string;
  callType: string;
  brandPerception: string;
  brandLoyalty: string;
  brandTrust: string;
  breakdownLocation: string;
  phoneNumber: string;
  vehicleModel: string;
  customerType: string;
  sentimentTrends: string;
  caseStatus: string;
};

console.log(sentimentData)

export default function CustomerSentiment({
  className,
}: {
  className?: string;
}) {
  const { table, setData } = useTanStackTable<SentimentDataType>({
    tableData: sentimentData,
    columnConfig: sentimentColumns,
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
      title="Customer Sentiments on Brand"
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
