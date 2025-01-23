'use client';

import { Button, Flex, Input } from 'rizzui';
import { appointmentTypes } from '@/data/appointment-data';
import { type Table as ReactTableType } from '@tanstack/react-table';
import StatusField from '@core/components/controlled-table/status-field';
import { PiMagnifyingGlassBold, PiTrashDuotone } from 'react-icons/pi';

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
      <Flex align="center" className="order-2 @3xl:order-1 @3xl:max-w-[360px]">
      <Input
        type="search"
        clearable={true}
        inputClassName="h-[36px]"
        placeholder="Search by Agent's Question..."
        onClear={() => table.setGlobalFilter('')}
        value={table.getState().globalFilter ?? ''}
        prefix={<PiMagnifyingGlassBold className="size-4" />}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className=" @3xl:order-3 @3xl:ms-auto @3xl:max-w-72"
      />
        </Flex>

      
    </Flex>
  );
}
