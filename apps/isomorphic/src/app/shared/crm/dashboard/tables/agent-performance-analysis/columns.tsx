'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Text } from 'rizzui';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { AgentPerformanceDataType } from '@/data/agent-performance-data';

const columnHelper = createColumnHelper<AgentPerformanceDataType>();

export const agentPerformanceColumns = [
  columnHelper.accessor('agentName', {
    size: 200,
    header: 'Agent Name',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('casesAllotted', {
    size: 150,
    header: 'Cases Allotted',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('casesSolved', {
    size: 150,
    header: 'Cases Solved',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('agentPerformanceScore', {
    size: 200,
    header: 'Agent Performance Score (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('communicationEffectiveness', {
    size: 250,
    header: 'Communication Effectiveness (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('empathyAndEmotionalIntelligence', {
    size: 300,
    header: 'Empathy & Emotional Intelligence (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('ownershipAndAccountability', {
    size: 250,
    header: 'Ownership & Accountability (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('timeManagementAndHoldHandling', {
    size: 300,
    header: 'Time Management & Hold Handling (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('proactiveCommunication', {
    size: 250,
    header: 'Proactive Communication (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('expertiseAndKnowledge', {
    size: 250,
    header: 'Expertise & Knowledge (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('followUpAndResolutionClosure', {
    size: 300,
    header: 'Follow-up & Resolution Closure (out of 5)',
    cell: (info) => (
      <Text className="whitespace-nowrap font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('comments', {
    size: 300,
    header: 'Comments',
    cell: (info) => (
      <Text className="text-sm font-medium text-gray-900">
        {info.getValue()}
      </Text>
    ),
  }),
];
