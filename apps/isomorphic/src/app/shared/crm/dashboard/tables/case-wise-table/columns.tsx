'use client';

import { StatusSelect } from '@core/components/table-utils/status-select';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import AvatarCard from '@core/ui/avatar-card';
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Text } from 'rizzui';
import { CaseDataType } from '.';
import Link from 'next/link';

const statusOptions = [
  { label: 'Open', value: 'Open' },
  { label: 'Closed', value: 'Closed' },
  { label: 'Pending', value: 'Pending' },
];

const columnHelper = createColumnHelper<CaseDataType>();

export const caseColumns = [
  columnHelper.accessor('caseNumber', {
    size: 100,
    header: 'Case Number',
    cell: (info) => (
      <Link
        href={`/case-details/${info.getValue()}`}
        className="text-blue-600 hover:underline"
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor('caseStatus', {
    size: 120,
    header: 'Case Status',
    cell: (info) => (
      <StatusSelect selectItem={info.getValue()} options={statusOptions} />
    ),
  }),
  columnHelper.accessor('caseType', {
    size: 120,
    header: 'Case Type',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('issueBucket', {
    size: 150,
    header: 'Issue Bucket',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('issueReason', {
    size: 150,
    header: 'Issue Reason',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('vehicleNumber', {
    size: 120,
    header: 'Vehicle Number',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('breakdownLocation', {
    size: 180,
    header: 'Breakdown Location',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('customerName', {
    size: 150,
    header: 'Customer Name',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('agentsInvolved', {
    size: 200,
    header: 'Agents Involved',
    cell: (info) => <Text>{info.getValue().join(', ')}</Text>,
  }),
  columnHelper.accessor('techniciansInvolved', {
    size: 200,
    header: 'Technicians Involved',
    cell: (info) => <Text>{info.getValue().join(', ')}</Text>,
  }),
  columnHelper.accessor('totalCallDuration', {
    size: 150,
    header: 'Total Call Duration',
    cell: (info) => {
      const durationHour = Math.trunc(info.getValue() / 60);
      const minutes = info.getValue() % 60;
      return (
        <span className="font-semibold">
          {durationHour > 0 && `${durationHour}h`}{' '}
          {minutes > 0 && `${minutes}m`}
        </span>
      );
    },
  }),
  columnHelper.accessor('totalHoldTime', {
    size: 150,
    header: 'Total Hold Time',
    cell: (info) => {
      const durationHour = Math.trunc(info.getValue() / 60);
      const minutes = info.getValue() % 60;
      return (
        <span className="font-semibold">
          {durationHour > 0 && `${durationHour}h`}{' '}
          {minutes > 0 && `${minutes}m`}
        </span>
      );
    },
  }),
  columnHelper.accessor('overallCustomerEmotionalTrend', {
    size: 200,
    header: 'Customer Emotional Trend',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('totalCalls', {
    size: 120,
    header: 'Total Calls',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('frequencyOfFrustration', {
    size: 180,
    header: 'Frequency of Frustration',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('id', {
    size: 150,
    header: '',
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (
      <TableRowActionGroup
        onDelete={() => meta?.handleDeleteRow?.(row.original)}
      />
    ),
  }),
];
