'use client';

import Table from '@core/components/table';
import { appointmentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import { notFound } from 'next/navigation';

import Filters from './filters';

// Define types
interface CallDetails {
  call_id: string;
  call_direction: string;
  case_type: string;
  complaint_number: string;
  issue_resolved: string;
  workshop_location: string;
  workshop_phone_number: string;
}

interface Call {
  call_id: string;
  calls_overview?: {
    calls: CallDetails[];
  };
}

interface DummyDataType {
  calls_overview?: {
    calls: CallDetails[];
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

interface QuickTagProps {
  callId: string;
  className?: string;
  callDirection: string;
  callType: string;
  complaintNumber: string;
  workshopLocation: string;
  issueResolved: string;
  workshopPhoneNumber: string;
}

export default function QuickTag({
  callId,
  callDirection,
  callType,
  complaintNumber,
  workshopLocation,
  issueResolved,
  workshopPhoneNumber,
  className,
}: QuickTagProps) {
  // Prepare table data based on props
  const tableData = [
    { parameter: 'Call Id', value: callId || 'N/A' },
    { parameter: 'Call Direction', value: callDirection || 'N/A' },
    { parameter: 'Case Type', value: callType || 'N/A' },
    { parameter: 'Complaint Number', value: complaintNumber || 'N/A' },
    { parameter: 'Issue Resolved', value: issueResolved || 'N/A' },
    { parameter: 'Workshop Location', value: workshopLocation || 'N/A' },
    { parameter: 'Workshop Phone Number', value: workshopPhoneNumber || 'N/A' },
  ];

  // Map the data to match the table structure
  const mappedData = tableData.map((item) => ({
    focus_area: item.parameter,
    row_items: item.value,
  }));

  // Move hook call before any conditional logic
  const { table } = useTanStackTable({
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

  // Validation checks
  const extractedCallIds = dummyDataTyped.flatMap(
    (item) => item.calls_overview?.calls?.map((call) => call.call_id) || []
  );

  const callData = dummyDataTyped.find((callItem) =>
    callItem.calls_overview?.calls?.some((call) => call.call_id === callId)
  );

  if (!callData) {
    console.error(`Call with ID ${callId} not found.`);
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="Quick Tag"
        titleClassName="whitespace-nowrap"
        headerClassName="mb-4 px-5 lg:px-7 pt-5 lg:pt-7"
      >
        <p className="text-red-500 text-center py-4">Call not found.</p>
      </WidgetCard>
    );
  }

  const callDetails = callData.calls_overview?.calls.find(
    (call) => call.call_id === callId
  );

  if (!callDetails) {
    console.error(`Call details for ID ${callId} not found.`);
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="Quick Tag"
        titleClassName="whitespace-nowrap"
        headerClassName="mb-4 px-5 lg:px-7 pt-5 lg:pt-7"
      >
        <p className="text-red-500 text-center py-4">Call details not found.</p>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Quick Tag"
      titleClassName="whitespace-nowrap"
      headerClassName="mb-4 items-start flex-col @[62rem]:flex-row @[62rem]:items-center px-5 lg:px-7 pt-5 lg:pt-7"
      actionClassName="grow @[62rem]:ps-11 ps-0 items-center w-full @[42rem]:w-full @[62rem]:w-auto"
    >
      <Table table={table} variant="modern" />
    </WidgetCard>
  );
}

