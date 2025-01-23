'use client';

import { useState } from 'react';
import Table from '@core/components/table';
import { agentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';
import agentPerformanceData from './data/agent_performance.json';

export type AgentPerformanceData = {
  agent_name: string;
  overall_performance_score: number;
  agent_qa_score_percentage: number;
  agent_qa_rating: string;
};

export default function IndividualAgentData({
  className,
}: {
  className?: string;
}) {
  const [agentData] = useState<AgentPerformanceData[]>(agentPerformanceData);

  const { table } = useTanStackTable<AgentPerformanceData>({
    tableData: agentData,
    columnConfig: agentColumns,
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
      title="Individual Agent Data"
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
