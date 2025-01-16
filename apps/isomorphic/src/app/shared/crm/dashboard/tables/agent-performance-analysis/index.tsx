'use client';

import Table from '@core/components/table';
import { agentPerformanceColumns } from './columns';
import { agentPerformanceData } from '@/data/agent-performance-data';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

export type agentPerformanceDataType = (typeof agentPerformanceData)[number];

export default function AgentPerformanceAnalysis({
  className,
}: {
  className?: string;
}) {
  const { table, setData } = useTanStackTable<agentPerformanceDataType>({
    tableData: agentPerformanceData,
    columnConfig: agentPerformanceColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 7,
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Agent Performance Analysis"
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
