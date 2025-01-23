'use client';

import Table from '@core/components/table';
import { appointmentColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';

// Define types for Brand Sentiment data
interface BrandSentimentInstance {
  category: string;
  sentiment_indicator: string;
  frequency_of_frustration: string;
  frequency_of_happiness: string;
  brand_sentiment_analysis: string;
}

interface Call {
  call_id: string;
  brand_sentiment: BrandSentimentInstance[];
}

interface DummyDataType {
  calls_overview?: {
    calls: Call[];
  };
}

// Import and type dummy data
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';

// Type the dummyData explicitly
const dummyDataTyped: DummyDataType[] = dummyData as DummyDataType[];

export type AppointmentDataType = {
  id: string;
  category: string;
  sentiment_indicator: string;
  frequency_of_frustration: string;
  frequency_of_happiness: string;
  brand_sentiment_analysis: string;
};

interface BrandSentimentProps {
  callId: string; // Pass only the caseId as a prop
  className?: string;
}

export default function BrandSentiment({
  callId,
  className,
}: BrandSentimentProps) {
  const brandSentimentData =
    dummyDataTyped
      .flatMap((item) => item.calls_overview?.calls || [])
      .find((call) => call.call_id === callId)?.brand_sentiment;

  const mappedData = brandSentimentData
    ? brandSentimentData.map((item, index) => ({
        id: `qa-${index}`,
        category: item.category,
        sentiment_indicator: item.sentiment_indicator,
        frequency_of_frustration: item.frequency_of_frustration,
        frequency_of_happiness: item.frequency_of_happiness,
        brand_sentiment_analysis: item.brand_sentiment_analysis,
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

  if (!brandSentimentData) {
    return (
      <WidgetCard
        className={cn('p-0 lg:p-0', className)}
        title="QA Scoring"
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
      title={`Brand Sentiment`}
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