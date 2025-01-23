'use client';

import Table from '@core/components/table';
import { appointmentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

// Define types for Empathy Analysis data
interface EmpathyInstance {
  customer_statement: string;
  emotion_type: string;
  agent_response: string;
  empathy_analysis: string;
  time_stamp: string;
}

interface Call {
  call_id: string;
  empathy_detection: {
    empathy_instances: EmpathyInstance[];
  };
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

export interface Appointment {
  id: string;
  customer_statement: string;
  emotion_type: string;
  agent_response: string;
  empathy_analysis: string;
  time_stamp: string;
}

interface EmpathyAnalysisProps {
  callId: string;
  className?: string;
}

export default function EmpathyAnalysis({
  callId,
  className,
}: EmpathyAnalysisProps) {
  const empathyAnalysisData =
    dummyDataTyped
      .flatMap((item) => item.calls_overview?.calls || [])
      .find((call) => call.call_id === callId)?.empathy_detection.empathy_instances;

  const mappedData = empathyAnalysisData
    ? empathyAnalysisData.map((item, index) => ({
        id: `empathy-${index}`,
        customer_statement: item.customer_statement,
        emotion_type: item.emotion_type,
        agent_response: item.agent_response,
        empathy_analysis: item.empathy_analysis,
        time_stamp: item.time_stamp,
      }))
    : [];

  const { table } = useTanStackTable<Appointment>({
    tableData: mappedData,
    columnConfig: appointmentColumns,
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

  if (!empathyAnalysisData || !Array.isArray(empathyAnalysisData)) {
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="Empathy Analysis"
        titleClassName="whitespace-nowrap"
        headerClassName="mb-4 px-5 lg:px-7 pt-5 lg:pt-7"
      >
        <p className="text-red-500 text-center py-4">Call not found or invalid data.</p>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Empathy Analysis"
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