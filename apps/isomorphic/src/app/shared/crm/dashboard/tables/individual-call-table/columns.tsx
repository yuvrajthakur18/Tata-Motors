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
// individualCallDetails: {
//   callId: 'C003',
//   callRecording: 'recording-url-3',
//   callDirection: 'Inbound',
//   natureOfCases: 'Complaint',
//   summary: 'Customer complained about a delayed delivery.',
//   transcription: 'Customer was frustrated due to the delay.',
//   participantsNames: 'Pooja Singh, Ravi (Agent)',
//   customerType: 'Existing',
//   owner: 'Pooja Singh',
//   driver: 'Yes',
//   callDuration: '8 min',
//   holdTime: '3 min',
//   talkToListenRatio: '70: 30',
//   interruptionsCount: '3',
//   emotionalToneOfCustomer: 'Frustrated',
//   emotionalToneInstancesCount: '3',
//   emotionalToneInstances: 'Start - Frustrated, End - Neutral',
//   emotionalToneAnalysis:
//     'Customer frustration reduced after reassurance by the agent.',
//   sentimentTrend: 'Neutral',
//   brandSentiment: 'Negative',
//   empathyDetection: 'Agent showed understanding of the delay issue.',
// },
const columnHelper = createColumnHelper<AppointmentDataType>();

export const appointmentColumns = [
  columnHelper.accessor('callId', {
    size: 100,
    header: 'Call Id',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.callId}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('callRecording', {
    size: 200,
    header: 'Call Recording',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.callRecording}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('callDirection', {
    size: 200,
    header: 'Call Direction',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.callDirection}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('natureOfCases', {
    size: 200,
    header: 'Nature of Cases',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.natureOfCases}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('summary', {
    size: 300,
    header: 'Summary',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.summary}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('transcription', {
    size: 300,
    header: 'Transcription',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.transcription}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('participantsNames', {
    size: 300,
    header: 'participantsNames',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.participantsNames}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('customerType', {
    size: 300,
    header: 'customerType',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.customerType}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('owner', {
    size: 300,
    header: 'owner',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.owner}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('driver', {
    size: 300,
    header: 'driver',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.driver}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('callDuration', {
    size: 100,
    header: 'callDuration',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.callDuration}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('holdTime', {
    size: 100,
    header: 'holdTime',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.holdTime}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('talkToListenRatio', {
    size: 100,
    header: 'talkToListenRatio',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.talkToListenRatio}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('interruptionsCount', {
    size: 100,
    header: 'interruptionsCount',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.interruptionsCount}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('emotionalToneOfCustomer', {
    size: 100,
    header: 'emotionalToneOfCustomer',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.emotionalToneOfCustomer}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('emotionalToneInstancesCount', {
    size: 100,
    header: 'emotionalToneInstancesCount',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.emotionalToneInstancesCount}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('emotionalToneInstances', {
    size: 100,
    header: 'emotionalToneInstances',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.emotionalToneInstances}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('emotionalToneAnalysis', {
    size: 100,
    header: 'emotionalToneAnalysis',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.emotionalToneAnalysis}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('sentimentTrend', {
    size: 100,
    header: 'sentimentTrend',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.sentimentTrend}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('brandSentiment', {
    size: 100,
    header: 'brandSentiment',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.brandSentiment}
        </Text>
      </>
    ),
  }),
  columnHelper.accessor('empathyDetection', {
    size: 100,
    header: 'empathyDetection',
    enableSorting: false,
    cell: ({ row: { original } }) => (
      <>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {original.empathyDetection}
        </Text>
      </>
    ),
  }),
  

];
