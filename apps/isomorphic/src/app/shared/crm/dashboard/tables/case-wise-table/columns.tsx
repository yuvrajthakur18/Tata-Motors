'use client';

import { StatusSelect } from '@core/components/table-utils/status-select';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import { CaseDataType } from '.';
import Link from 'next/link';

const statusOptions = [
  { label: 'Open', value: 'Open' },
  { label: 'Closed', value: 'Closed' },
  { label: 'Pending', value: 'Pending' },
];

const columnHelper = createColumnHelper<CaseDataType>();

export const caseColumns = [
  columnHelper.accessor((row) => row.case_overview.case_id, {
    id: 'case_id',
    size: 150,
    header: 'Case ID',
    cell: (info) => (
      <Link
        href={`/case-details/${info.getValue()}`}
        className="text-blue-600 hover:underline"
      >
        {info.getValue() || 'N/A'}
      </Link>
    ),
  }),
  // Accessing nested data: case_overview.case_number
  // columnHelper.accessor((row) => row.case_overview.case_number, {
  //   id: 'case_number',
  //   size: 150,
  //   header: 'Case Number',
  //   cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  // }),

  // Accessing nested data: case_overview.status_of_case
  columnHelper.accessor((row) => row.case_overview.status_of_case, {
    id: 'status_of_case',
    size: 100,
    header: 'Case Status',
    cell: (info) => {
      const status = info.getValue() || 'N/A';
      const statusColor = {
        Closed: 'red',
        Resolved: 'green',
        Pending: 'orange',
        Escalated: 'red',
        InProgress: 'purple',
        Open:'blue',

      };

      return (
        <Text style={{ color: statusColor[status] || 'black' }}>{status}</Text>
      );
    },
  }),

  // Accessing nested data: case_overview.call_nature_of_case
  columnHelper.accessor((row) => row.case_overview.call_nature_of_case, {
    id: 'call_nature_of_case',
    size: 120,
    header: 'Case Type',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Accessing nested data: case_overview.severity_of_case
  columnHelper.accessor((row) => row.case_overview.severity_of_case, {
    id: 'severity_of_case',
    size: 120,
    header: 'Severity of Case',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Accessing nested data: case_overview.total_case_duration
  columnHelper.accessor((row) => row.case_overview.total_case_duration, {
    id: 'total_case_duration',
    size: 140,
    header: 'Total Case Duration',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Accessing nested data: case_overview.total_hold_time
  columnHelper.accessor((row) => row.case_overview.total_hold_time, {
    id: 'total_hold_time',
    size: 120,
    header: 'Total Hold Time',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Accessing nested data: case_overview.resolution_time
  // columnHelper.accessor((row) => row.case_overview.resolution_time, {
  //   id: 'resolution_time',
  //   size: 120,
  //   header: 'Resolution Time',
  //   cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  // }),

  // // Accessing nested data: case_overview.resolved_by
  // columnHelper.accessor((row) => row.case_overview.resolved_by, {
  //   id: 'resolved_by',
  //   size: 180,
  //   header: 'Resolved By',
  //   cell: (info) => {
  //     const resolvedBy = info.getValue();
  //     return (
  //       <Text>
  //         {resolvedBy
  //           ?.map(
  //             (resolver) => `${resolver.agent_name} (${resolver.agent_role})`
  //           )
  //           .join(', ') || 'N/A'}
  //       </Text>
  //     );
  //   },
  // }),

  // Accessing nested data: case_overview.customer_satisfaction_indicator
  columnHelper.accessor(
    (row) => row.case_overview.customer_satisfaction_indicator,
    {
      id: 'customer_satisfaction_indicator',
      size: 120,
      header: 'Customer Satisfaction',
      cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
    }
  ),

  // Accessing nested data: case_overview.participants
  columnHelper.accessor((row) => row.case_overview.participants, {
    id: 'participants',
    size: 150,
    header: 'Participants',
    cell: (info) => {
      const { agents, customers, technicians, supervisors, others } =
        info.getValue() || {};
      return (
        <Text>
          {`Agents: ${agents?.length || 0}, Customers: ${
            customers?.length || 0
          }, Technicians: ${technicians?.length || 0}, Supervisors: ${
            supervisors?.length || 0
          }, Others: ${others?.length || 0}`}
        </Text>
      );
    },
  }),

  // Accessing nested data: case_overview.agent_overall_performance
  columnHelper.accessor((row) => row.case_overview.agent_overall_performance, {
    id: 'agent_overall_performance',
    size: 100,
    header: 'Agent Performance',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Accessing nested data: case_overview.agent_qa_rating
  columnHelper.accessor((row) => row.case_overview.agent_qa_rating, {
    id: 'agent_qa_rating',
    size: 120,
    header: 'Agent QA Rating',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Accessing nested data: case_overview.agent_qa_score
  columnHelper.accessor((row) => row.case_overview.agent_qa_score, {
    id: 'agent_qa_score',
    size: 120,
    header: 'Agent QA Score',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Accessing nested data: case_overview.agent_action
  columnHelper.accessor((row) => row.case_overview.agent_action, {
    id: 'agent_action',
    size: 200,
    header: 'Agent Action',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  columnHelper.accessor(
    (row) => row.case_overview.overall_customer_emotional_trend,
    {
      id: 'overall_customer_emotional_trend',
      size: 180,
      header: 'Customer Emotional Trend',
      cell: (info) => {
        const trend = info.getValue();
        return (
          <Text>
            {trend
              ? `Start: ${trend.start}, Mid: ${trend.mid}, End: ${trend.end}`
              : 'N/A'}
          </Text>
        );
      },
    }
  ),
  columnHelper.accessor((row) => row.case_overview.issue_bucket, {
    id: 'issue_bucket',
    size: 150,
    header: 'Issue Bucket',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),
  columnHelper.accessor((row) => row.case_overview.issue_cause, {
    id: 'issue_cause',
    size: 180,
    header: 'Issue Cause',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),
  columnHelper.accessor((row) => row.case_overview.first_call_resolution, {
    id: 'first_call_resolution',
    size: 180,
    header: 'First Call Resolution',
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),
];
