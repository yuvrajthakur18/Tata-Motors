'use client';

import { StatusSelect } from '@core/components/table-utils/status-select';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';
import { AppointmentDataType } from '.';

const statusOptions = [
  { label: 'Waiting', value: 'Waiting' },
  { label: 'Scheduled', value: 'Scheduled' },
];

const columnHelper = createColumnHelper<AppointmentDataType>();
//   suggestedCoaching: {
//   focusArea: string;
//   effectiveCommunication: string;
//   empathy: string;
//   ownership: string;
//   timeManagementHoldTime: string;
//   proactiveCommunication: string;
//   expertiseResolutionClosure: string;
//    rowItems: string;
//   keyIssue: string;
//   coachingPoints: string;
//   feedbackForAgent: string;
// };
export const appointmentColumns = [
  columnHelper.accessor('focusArea', {
    size: 100,
    header: 'Focus Area',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.focusArea}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('rowItems', {
    size: 200,
    header: 'Row Items',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.rowItems}
        </Text>
      </>
    ),
  }),
  

];
