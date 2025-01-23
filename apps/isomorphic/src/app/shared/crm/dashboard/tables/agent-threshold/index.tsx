'use client';

import Table from '@core/components/table';
import { agentThresholdColumns } from './columns';
import { agentThresholdData } from '@/data/agent-threshold-data';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';
import { Row } from '@tanstack/react-table';

export type AgentThresholdDataType = (typeof agentThresholdData)[number];

export default function AgentThreshold({ className }: { className?: string }) {
  const { table, setData } = useTanStackTable<AgentThresholdDataType>({
    tableData: agentThresholdData,
    columnConfig: agentThresholdColumns,
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

  // Define threshold value
  const threshold = 8;

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Agent threshold mapping for coaching"
      titleClassName="whitespace-nowrap"
      headerClassName="mb-4 items-start flex-col @[62rem]:flex-row @[62rem]:items-center px-5 lg:px-7 pt-5 lg:pt-7"
      actionClassName="grow @[62rem]:ps-11 ps-0 items-center w-full @[42rem]:w-full @[62rem]:w-auto"
    >
      <Table
        table={table}
        variant="modern"
        rowClassName={(row: Row<AgentThresholdDataType>) =>
          cn({
            'bg-red-700': row.original.score < threshold, // Light red
            'bg-orange-600': row.original.score === threshold, // Light orange
            'bg-green-500': row.original.score > threshold, // Light green
          })
        }
      />
      <TablePagination table={table} className="p-4" />
    </WidgetCard>
  );
}
