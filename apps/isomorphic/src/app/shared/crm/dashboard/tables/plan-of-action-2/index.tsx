'use client';

import Table from '@core/components/table';
import { appointmentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

// Define types
interface PurposeFulfilled {
  status: boolean;
  explanation: string;
}

interface PlanOfActionData {
  questions: {
    question: string;
    response: string;
    purpose_fulfilled: PurposeFulfilled;
  }[];
}

interface Call {
  call_id: string;
  agent_details: {
    probing_questions: PlanOfActionData;
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

export type AppointmentDataType = {
  id: string;
  question: string;
  customer_response: string;
  purpose_fulfilled: string;
  purpose_explanation: string;
};

interface PlanOfActionProps {
  callId: string;
  className?: string;
}

export default function PlanOfAction({
  callId,
  className,
}: PlanOfActionProps) {
  // Find the data for the given callId
  const PlanOfActionData =
    dummyDataTyped
      .flatMap((item) => item.calls_overview?.calls || []) // Flatten all calls into a single array
      .find((call) => call.call_id === callId)?.agent_details.probing_questions;

  if (!PlanOfActionData) {
    console.error(`Plan Of Action Data not found for call ID: ${callId}`);
  } else {
    console.log('Plan Of Action Data:', PlanOfActionData);
  }
  

  // Map data to the structure needed for the table
  const mappedData =
    PlanOfActionData.questions.map((item, index) => ({
      id: `qa-${index}`,
      question: item.question,
      customer_response: item.response,
      purpose_fulfilled: item.purpose_fulfilled.status ? 'Fulfilled' : 'Not Fulfilled',
      purpose_explanation: item.purpose_fulfilled.explanation,
    })) || [];

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
  // Handle case where data is not found
  if (!PlanOfActionData) {
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="Plan of Action"
        titleClassName="whitespace-nowrap"
        headerClassName="mb-4 px-5 lg:px-7 pt-5 lg:pt-7"
      >
        <p className="text-red-500 text-center py-4">Call not found.</p>
      </WidgetCard>
    );
  }

  
  // Use TanStackTable to manage table data
  

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Probing Questions"
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
