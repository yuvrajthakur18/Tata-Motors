'use client';

import Table from '@core/components/table';
import { appointmentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

interface Call {
  call_id: string;
  qa_scoring: {
    markings: {
      question: string;
      customer_response: string;
      clarity_score: number;
      relevance_score: number;
      efficiency_score: number;
      empathy_score: number;
      response_management_score: number;
    }[];
  };
}

interface DummyDataType {
  calls_overview?: {
    calls: Call[];
  };
}

// Import dummy data and type it
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

const dummyDataTyped = dummyData as DummyDataType[];

export type AppointmentDataType = {
  id: string;
  question: string;
  customer_response: string;
  clarity_score: string;
  relevance_score: string;
  efficiency_score: string;
  empathy_score: string;
  response_management_score: string;
};

interface QAScoringTableProps {
  callId: string; // Pass only the caseId as a prop
  className?: string;
}

export default function QAScoringTable({
  callId,
  className,
}: QAScoringTableProps) {
  // Extract QA scoring data
  const qaScoringData =
    dummyDataTyped
      .flatMap((item) => item.calls_overview?.calls || [])
      .find((call) => call.call_id === callId)?.qa_scoring || null;

  // Map data
  const mappedData = qaScoringData?.markings.map((item, index) => ({
    id: `qa-${index}`,
    question: item.question,
    customer_response: item.customer_response,
    clarity_score: item.clarity_score.toString(),
    relevance_score: item.relevance_score.toString(),
    efficiency_score: item.efficiency_score.toString(),
    empathy_score: item.empathy_score.toString(),
    response_management_score: item.response_management_score.toString(),
  })) || [];

  // Use TanStackTable unconditionally
  const { table } = useTanStackTable<AppointmentDataType>({
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

  if (!qaScoringData) {
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="QA Scoring"
        titleClassName="whitespace-nowrap"
        headerClassName="mb-4 px-5 lg:px-7 pt-5 lg:pt-7"
      >
        <p className="text-red-500 text-center py-4">Call not found.</p>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title={`QA Scoring`}
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
