'use client';

import Table from '@core/components/table';
import { empathyDetectionColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

import rawData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

const transformData = (data: any[]) => {
  return data.map((item) => {
    const firstCall = item.calls_overview.calls[0];
    const empathyDetection = firstCall.empathy_detection;

    return {
      id: item.case_overview.case_id,
      customerName: firstCall.customer_details?.customer_name || 'N/A',
      agentName: firstCall.agent_details?.agent_name || 'N/A',
      empathyDetection: empathyDetection.empathy_detected || 'N/A',
      yes: empathyDetection.overall_score || 0,
      no: 5 - (empathyDetection.overall_score || 0), // Assuming a total scale of 5
      empathyInstances: empathyDetection.empathy_instances.map((instance: any) => ({
        instance: instance.customer_statement,
        count: 1 // Since each instance is unique
      })),
      sentimentTrend: {
        start: firstCall.sentiment_trend?.start || 'N/A',
        mid: firstCall.sentiment_trend?.mid || 'N/A',
        end: firstCall.sentiment_trend?.end || 'N/A'
      },
      callType: firstCall.call_type || 'N/A',
      caseStatus: item.case_overview.status_of_case || 'N/A'
    };
  });
};

export type EmpathyDetectionDataType = ReturnType<typeof transformData>[number];

const empathyDetectionData = transformData(rawData);
console.log(empathyDetectionData)
export default function EmpathyDetection({
  className,
}: {
  className?: string;
}) {
  const { table, setData } = useTanStackTable<EmpathyDetectionDataType>({
    tableData: empathyDetectionData,
    columnConfig: empathyDetectionColumns,
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
      title="Empathy detection of the agents"
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