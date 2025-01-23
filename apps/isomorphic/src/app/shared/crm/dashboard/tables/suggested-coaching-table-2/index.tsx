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
  focus_area: string;
  row_items: string[];
};

interface SuggestedCoachingTableProps {
  callId: string; // Pass only the caseId as a prop
  className?: string;
}

export default function SuggestedCoachingTable({
  callId,
  className,
}: SuggestedCoachingTableProps) {
  // Find the data for the given callId
  const SuggestedCoachingTableData = dummyData
    .flatMap((item) => item.calls_overview?.calls || []) // Flatten all calls into a single array
    .find((call) => call.call_id === callId)?.agent_coaching.coaching_points;

  if (!SuggestedCoachingTableData) {
    console.error(`Suggested Coaching Data not found for call ID: ${callId}`);
  }

  // Map data to align with the updated JSON structure
  const mappedData =
    SuggestedCoachingTableData?.map((item) => ({
      focus_area: item.framework_parameter,
      row_items: item.suggested_coaching_point,
    })) || [];

  // Use TanStackTable to manage table data
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

  // Handle case not found
  if (!SuggestedCoachingTableData) {
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="Suggested Coaching"
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
      title="Suggested Coaching"
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
