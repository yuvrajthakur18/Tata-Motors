'use client';

import Table from '@core/components/table';
import { appointmentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

// Define types for the Agent Threshold data
interface ScoreData {
  score: string;
  evidence_from_transcript: string;
}

interface AgentThresholdMapping {
  [key: string]: ScoreData;
}

interface Call {
  call_id: string;
  agent_threshold_mapping_for_coaching: AgentThresholdMapping[];
}

interface DummyDataType {
  calls_overview?: {
    calls: Call[];
  };
}

export type AppointmentDataType = {
  category: string;
  sentiment_indicator: string;
  frequency_of_frustration: string;
  frequency_of_happiness: string;
  brand_sentiment_analysis: string;
};

// Type the dummyData explicitly
const dummyDataTyped: DummyDataType[] = dummyData as DummyDataType[];

interface AgentThresholdProps {
  callId: string;
  className?: string;
}

export default function AgentThreshold({ 
  callId, 
  className 
}: AgentThresholdProps) {
  const agentThresholdData = dummyDataTyped
    .flatMap((item) => item.calls_overview?.calls || [])
    .find((call) => call.call_id === callId)?.agent_threshold_mapping_for_coaching;

  const mappedData = agentThresholdData
    ? Object.entries(agentThresholdData[0]).map(([key, value]) => ({
        category: key.replace(/_/g, ' '),
        sentiment_indicator: value.score || 'N/A',
        frequency_of_frustration: value.score + "/10" || 'N/A',
        frequency_of_happiness: (10 - parseInt(value.score, 10)).toString() || 'N/A',
        brand_sentiment_analysis: value.evidence_from_transcript || 'N/A',
      }))
    : [];

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

  if (!agentThresholdData) {
    return (
      <WidgetCard className={cn('p-0 lg:p-0', className)} title="QA Scoring">
        <p className="text-red-500 text-center py-4">Call not found.</p>
      </WidgetCard>
    );
  }

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Agent Threshold"
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