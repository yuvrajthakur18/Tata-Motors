'use client';

import Table from '@core/components/table';
import { sentimentColumns } from './columns';
import { sentimentData } from '@/data/sentiment-data';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';
import cn from '@core/utils/class-names';
import Filters from './filters';

export type SentimentDataType = (typeof sentimentData)[number];

export default function CustomerSentiment({
  className,
}: {
  className?: string;
}) {
  const { table, setData } = useTanStackTable<SentimentDataType>({
    tableData: sentimentData,
    columnConfig: sentimentColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 7,
        },
      },
      meta: {
        handleDeleteRow: (row) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
      <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Customer Sentiments on Brand"
      titleClassName="whitespace-nowrap"
      headerClassName="mb-4 items-start flex-col @[62rem]:flex-row @[62rem]:items-center px-5 lg:px-7 pt-5 lg:pt-7"
      actionClassName="grow @[62rem]:ps-11 ps-0 items-center w-full @[42rem]:w-full @[62rem]:w-auto"
      action={<Filters table={table} />}
    >
    
          <Table table={table} variant="modern" />
          <TablePagination table={table} className="p-4" />
  

    </WidgetCard>
    
    // <WidgetCard
    //   className={cn('p-0 lg:p-0', className)}
    //   title="Customer Sentiments on Brand"
    //   titleClassName="whitespace-nowrap"
    //   headerClassName="mb-4 items-start flex-col @[62rem]:flex-row @[62rem]:items-center px-5 lg:px-7 pt-5 lg:pt-7"
    //   actionClassName="grow @[62rem]:ps-11 ps-0 items-center w-full @[42rem]:w-full @[62rem]:w-auto"
    //   action={<Filters table={table} />}
    // >
    
    //       <Table table={table} variant="modern" />
    //       <TablePagination table={table} className="p-4" />
  

    // </WidgetCard>
  );
}
