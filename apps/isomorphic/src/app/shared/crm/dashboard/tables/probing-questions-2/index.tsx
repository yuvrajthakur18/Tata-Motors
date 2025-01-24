'use client';

import Table from '@core/components/table';
import { appointmentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

// Import dummy data
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

export type AppointmentDataType = {
  id: string;
  question: string;
  customer_response: string;
  purpose_fulfilled: string;
  purpose_explanation: string;
  call_id: string;
};

export default function ProbingQuestions({
  className,
}: {
  className?: string;
}) {
  const mappedData = dummyData
    .flatMap((item) => 
      item.calls_overview?.calls.flatMap((call) => 
        call.agent_details.probing_questions.questions.map((question, index) => ({
          id: `qa-${call.call_id}-${index}`,
          question: question.question,
          customer_response: question.response,
          purpose_fulfilled: question.purpose_fulfilled.status ? 'Fulfilled' : 'Not Fulfilled',
          purpose_explanation: question.purpose_fulfilled.explanation,
          call_id: call.call_id
        }))
      ) || []
    );

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

  if (mappedData.length === 0) {
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="Probing Questions"
        titleClassName="whitespace-nowrap"
        headerClassName="mb-4 px-5 lg:px-7 pt-5 lg:pt-7"
      >
        <p className="text-red-500 text-center py-4">No probing questions found.</p>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title={`Probing Questions`}
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