'use client';

import Table from '@core/components/table';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';
import { performanceColumns } from './columns';

// Define types
interface PerformanceValue {
  score: number;
  description: string;
  comment: string;
}

interface AgentPerformanceData {
  [key: string]: PerformanceValue; // Dynamic keys with values of type PerformanceValue
}

interface Call {
  call_id: string;
  agent_performance: AgentPerformanceData;
}

interface DummyDataType {
  calls_overview?: {
    calls: Call[];
  };
}

// Import and type dummy data
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

// Type the dummyData explicitly
const dummyDataTyped: DummyDataType[] = dummyData as DummyDataType[];

export type AgentPerformanceDataType = {
  parameter: string;
  description: string;
  score: number;
  comment: string;
};

interface AgentPerformanceAnalysisTableProps {
  callId: string;
  className?: string;
}

export default function AgentPerformanceAnalysisTable({
  callId,
  className,
}: AgentPerformanceAnalysisTableProps) {
  const performanceData = dummyDataTyped
    .flatMap((item) => item.calls_overview?.calls || [])
    .find((call) => call.call_id === callId)?.agent_performance;

  // Prepare mapped data with empty array fallback
  const mappedData = performanceData
    ? Object.entries(performanceData)
        .filter(([_, value]) =>
          typeof value === 'object' &&
          value !== null &&
          'score' in value &&
          'description' in value &&
          'comment' in value
        )
        .map(([key, value]) => {
          const performanceValue = value as PerformanceValue;
          return {
            parameter: key.replace(/_/g, ' '),
            description: performanceValue.description,
            score: performanceValue.score,
            comment: performanceValue.comment,
          };
        })
    : [];

  // Move hook call before conditional return
  const { table } = useTanStackTable<AgentPerformanceDataType>({
    tableData: mappedData,
    columnConfig: performanceColumns,
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

  if (!performanceData) {
    return (
      <WidgetCard className={cn('p-0 lg:p-0', className)} title="QA Scoring">
        <p className="text-red-500 text-center py-4">Agent Performance Analysis Data not found.</p>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title={`Agent Performance Analysis`}
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