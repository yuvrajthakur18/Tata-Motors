'use client';

import { useEffect, useState } from 'react';
import Table from '@core/components/table';
import { callColumns } from './columns';
import WidgetCard from '@core/components/cards/widget-card';
import TablePagination from '@core/components/table/pagination';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import cn from '@core/utils/class-names';
import Filters from './filters';
import dummyData from './../data/dummy-data.json';

// Define the type for CallDataType based on calls in the dummy data
export type CallDataType =
  (typeof dummyData)[number]['calls_overview']['calls'][number];

export default function CallWiseTable({ className }: { className?: string }) {
  // Extract the calls data from dummyData
  const [data, setData] = useState<CallDataType[]>(() => {
    return dummyData.flatMap((item) => item.calls_overview.calls);
  });

  const { table } = useTanStackTable<CallDataType>({
    tableData: data,
    columnConfig: callColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 7,
        },
      },
      meta: {
        handleDeleteRow: (row) => {
          setData((prev) =>
            prev.filter((call) => call.call_id !== row.call_id)
          );
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <WidgetCard
      className={cn('p-0 lg:p-0', className)}
      title="Call Wise Table"
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
