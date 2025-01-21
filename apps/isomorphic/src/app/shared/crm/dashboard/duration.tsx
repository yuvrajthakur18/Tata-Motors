'use client';

import WidgetCard from '@core/components/cards/widget-card';
import DropdownAction from '@core/components/charts/dropdown-action';
import cn from '@core/utils/class-names';
import Heatmap from '@core/components/charts/heatmap';
import { useTheme } from 'next-themes';
import { Title } from 'rizzui';

const data = [
  { x: 'Mon', y: '9 AM', value: 30 },
  { x: 'Tue', y: '9 AM', value: 90 },
  { x: 'Wed', y: '10 AM', value: 60 },
  { x: 'Thu', y: '10 AM', value: 50 },
  { x: 'Fri', y: '11 AM', value: 60 },
  { x: 'Sat', y: '11 AM', value: 70 },
  { x: 'Sun', y: '11 AM', value: 80 },
];

const viewOptions = [
  {
    value: 'Hourly',
    label: 'Hourly',
  },
  {
    value: 'Daily',
    label: 'Daily',
  },
];

export default function Duration({ className }: { className?: string }) {
  const { theme } = useTheme();

  function handleChange(viewType: string) {
    console.log('View Type Changed:', viewType);
  }

  return (
    <WidgetCard
      title={<h5 className="font-semibold">Duration Trends of the calls</h5>}
      titleClassName="text-gray-700 font-normal sm:text-sm font-inter"
      headerClassName="items-center"
      action={
        <div className="flex items-center gap-5">
          <DropdownAction
            className="rounded-lg border"
            options={viewOptions}
            onChange={handleChange}
            dropdownClassName="!z-0"
          />
        </div>
      }
      className={cn('min-h-[28rem]', className)}
    >
      <div className="mb-4 mt-1 flex items-center gap-2">
        <Title as="h5" className="font-inter font-semibold">
          128 Hours
        </Title>
        <span className="flex items-center gap-1 text-green-dark">
          <span className="font-semibold leading-none"> +12.50%</span>
        </span>
      </div>
      <div className="custom-scrollbar -mb-3 overflow-x-auto pb-3">
        <Heatmap data={data} xKey="x" yKey="y" valueKey="value" height={400} />
      </div>
    </WidgetCard>
  );
}
