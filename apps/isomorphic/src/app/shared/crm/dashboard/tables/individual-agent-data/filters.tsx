'use client';

import { Button, Flex, Input } from 'rizzui';
import { appointmentTypes } from '@/data/appointment-data';
import { type Table as ReactTableType } from '@tanstack/react-table';
import StatusField from '@core/components/controlled-table/status-field';
import { PiMagnifyingGlassBold, PiTrashDuotone } from 'react-icons/pi';
import Link from 'next/link'; // Import Link for navigation

const appointmentTypesOptions = Object.entries(appointmentTypes).map(
  ([value, label]) => ({ label, value })
);

const statusOptions = [
  {
    value: 'scheduled',
    label: 'Scheduled',
  },
  {
    value: 'waiting',
    label: 'Waiting',
  },
];

interface TableToolbarProps<T extends Record<string, any>> {
  table: ReactTableType<T>;
}

export default function Filters<TData extends Record<string, any>>({
  table,
}: TableToolbarProps<TData>) {
  const isFiltered =
    table.getState().globalFilter || table.getState().columnFilters.length > 0;

  return (
    <Flex
      align="center"
      direction="col"
      className="mt-6 @3xl:flex-row @[62rem]:mt-0"
    >
      {isFiltered ? (
        <Button
          variant="flat"
          onClick={() => {
            table.resetGlobalFilter();
            table.resetColumnFilters();
          }}
          className="order-3 h-9 w-full bg-gray-200/70 @3xl:order-2 @3xl:w-24"
        >
          <PiTrashDuotone className="me-1.5 size-4" /> Clear
        </Button>
      ) : null}

      <Input
        type="search"
        clearable={true}
        inputClassName="h-[36px]"
        placeholder="Search for the Agent Name..."
        onClear={() => table.setGlobalFilter('')}
        value={table.getState().globalFilter ?? ''}
        prefix={<PiMagnifyingGlassBold className="size-4" />}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className="w-full @3xl:order-3 @3xl:ms-auto @3xl:max-w-72"
      />

      {/* Add View All Link */}
      <Link
        href="/agents-page"
        className="order-4 mt-4 text-sm font-medium text-blue-600 hover:underline @3xl:ms-6 @3xl:mt-0"
      >
        View All
      </Link>
    </Flex>
  );
}
