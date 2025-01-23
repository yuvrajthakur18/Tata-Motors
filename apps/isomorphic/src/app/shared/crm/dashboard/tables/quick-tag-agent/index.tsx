'use client';

import { useMemo } from 'react';
import Table from '@core/components/table';
import { agentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import agentPerformanceData from './../individual-agent-data/data/agent_performance.json';

export type AgentPerformanceData = {
  parameter: string;
  value: string | number | boolean;
};

export default function QuickTagAgent({
  className,
  agentName,
}: {
  className?: string;
  agentName?: string;
}) {
  const filteredAgentData = useMemo(() => {
    return agentName
      ? agentPerformanceData
          .filter((agent) => agent.agent_name === agentName)
          .map((agent) => [
            { parameter: 'Agent Name', value: agent.agent_name },
            { parameter: 'Cases Handled', value: agent.cases_handled },
            { parameter: 'Customers Handled', value: agent.customers_handled },
            {
              parameter: 'Coaching Required',
              value: agent.coaching_required ? 'Yes' : 'No',
            },
            { parameter: 'Cases Unsolved', value: agent.cases_unsolved },
            {
              parameter: 'Performance Score',
              value: agent.overall_performance_score,
            },
            { parameter: 'QA Rating', value: agent.agent_qa_rating },
            { parameter: 'QA Score', value: `${agent.agent_qa_score}%` },
            { parameter: 'Coaching Notes', value: agent.agent_coaching },
          ])
          .flat()
      : [];
  }, [agentName]);

  const { table } = useTanStackTable<AgentPerformanceData>({
    tableData: filteredAgentData,
    columnConfig: agentColumns,
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

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Quick Tag Agent"
      titleClassName="whitespace-nowrap"
      headerClassName="mb-4 px-5 lg:px-7 pt-5 lg:pt-7"
    >
      <Table table={table} variant="modern" />
    </WidgetCard>
  );
}
