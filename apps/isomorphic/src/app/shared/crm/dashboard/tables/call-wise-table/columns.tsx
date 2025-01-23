'use client';

import Link from 'next/link';
import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import { CallDataType } from '.';

const columnHelper = createColumnHelper<CallDataType>();

export const callColumns = [
  
  
  // Call ID
  columnHelper.accessor((row) => row.call_id, {
    id: 'call_id',
    header: 'Call ID',
    size: 150,
    cell: (info) => (
      <Link
        href={`/call-details/${info.getValue()}`}
        className="text-blue-600 hover:underline"
      >
        {info.getValue() || 'N/A'}
      </Link>
    ),
  }),

  // Call Direction
  columnHelper.accessor((row) => row.call_direction, {
    id: 'call_direction',
    header: 'Direction',
    size: 120,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Call Type
  columnHelper.accessor((row) => row.call_type, {
    id: 'call_type',
    header: 'Type of Call',
    size: 180,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Complaint Number
  columnHelper.accessor((row) => row.complaint_number, {
    id: 'complaint_number',
    header: 'Complaint Number',
    size: 180,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Call Duration
  columnHelper.accessor((row) => row.call_meta.call_duration, {
    id: 'call_duration',
    header: 'Call Duration',
    size: 150,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Hold Time
  columnHelper.accessor((row) => row.call_meta.call_hold_time, {
    id: 'call_hold_time',
    header: 'Hold Time',
    size: 150,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Interruptions Count
  columnHelper.accessor((row) => row.call_meta.interruptions_count, {
    id: 'interruptions_count',
    header: 'Interruptions Count',
    size: 150,
    cell: (info) => <Text>{info.getValue() || '0'}</Text>,
  }),

  // Nature of Call
  columnHelper.accessor((row) => row.call_meta.nature_of_call, {
    id: 'nature_of_call',
    header: 'Nature of Call',
    size: 150,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Customer Name
  columnHelper.accessor((row) => row.customer_details.customer_name, {
    id: 'customer_name',
    header: 'Customer Name',
    size: 150,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),

  // Emotional Tone
  columnHelper.accessor((row) => row.customer_details.sentiment_trend.start, {
    id: 'emotional_tone_start',
    header: 'Customer Emotional Tone (Start)',
    size: 200,
    cell: (info) => <Text>{info.getValue() || 'N/A'}</Text>,
  }),
];
