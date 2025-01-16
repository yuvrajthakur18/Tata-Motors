'use client';

import WidgetCard from '@core/components/cards/widget-card';
import { CustomTooltip } from '@core/components/charts/custom-tooltip';
import DropdownAction from '@core/components/charts/dropdown-action';
import TrendingUpIcon from '@core/components/icons/trending-up';
import cn from '@core/utils/class-names';
import { useTheme } from 'next-themes';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Title } from 'rizzui';

const data = [
  {
    sentiments: 'Frustrated',
    customers: 570,
    returningCustomers: 290,
  },
  {
    sentiments: 'Neutral',
    customers: 500,
    returningCustomers: 300,
  },
  {
    sentiments: 'Happy',
    customers: 550,
    returningCustomers: 400,
  },
];

const viewOptions = [
  {
    value: 'Daily',
    label: 'Daily',
  },
  {
    value: 'Monthly',
    label: 'Monthly',
  },
];

const patientLegend = [
  { name: 'New Patients' },
  { name: 'Returning Patients' },
];
interface ColorMap {
  dark: string;
  light: string;
  [key: string]: string;
}
const COLORS: ColorMap[] = [
  { dark: '#2B7F75', light: '#2B7F75' },
  { dark: '#dfdfdf', light: '#dfdfdf' },
];

export default function SentimentTrend({ className }: { className?: string }) {
  const { theme } = useTheme();
  function handleChange(viewType: string) {
    console.log('viewType', viewType);
  }

  return (
    <WidgetCard
      title={<h5 className="font-semibold">Sentiment Trends</h5>}
      titleClassName="text-gray-700 font-normal sm:text-sm font-inter"
      headerClassName="items-center"
      action={
        <div className="flex items-center gap-5">
          <CustomLegend className="hidden @[80rem]:mt-0 @[80rem]:inline-flex" />
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
          2834
        </Title>
        <span className="flex items-center gap-1 text-green-dark">
          <TrendingUpIcon className="h-auto w-5" />
          <span className="font-semibold leading-none"> +32.40%</span>
        </span>
      </div>
      <CustomLegend className="mb-4 mt-0 inline-flex @[80rem]:hidden" />
      <div className="custom-scrollbar -mb-3 overflow-x-auto pb-3">
        <div className="h-[20rem] w-full pe-1 pt-6">
          <ResponsiveContainer width="100%" height="100%" minWidth={700}>
            <AreaChart
              data={data}
              margin={{
                left: 2,
                right: 5,
                bottom: 10,
              }}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
            >
              <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
              <XAxis
                dataKey="sentiments"
                axisLine={false}
                tickLine={false}
                tickMargin={20}
              />
              <YAxis axisLine={false} tickLine={false} tickMargin={20} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                dataKey="customers"
                {...(theme && {
                  stroke: COLORS[0][theme],
                })}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#amountCustomer)"
                dot={<CustomizedDot color={theme && COLORS[0][theme]} />}
                activeDot={<CustomizedDot color={theme && COLORS[0][theme]} />}
              />
              <Area
                dataKey="returningCustomers"
                {...(theme && {
                  stroke: COLORS[1][theme],
                })}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#amountCustomer)"
                dot={<CustomizedDot color={theme && COLORS[1][theme]} />}
                activeDot={<CustomizedDot color={theme && COLORS[1][theme]} />}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </WidgetCard>
  );
}

function CustomizedDot(props: any) {
  const { cx, cy, color } = props;
  return (
    <svg
      x={cx - 6}
      y={cy - 8}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className="scale-150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7"
        cy="7"
        r="5.5"
        fill={color}
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}

function CustomLegend({ className }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        'mt-2 flex flex-wrap items-start gap-3 lg:gap-5',
        className
      )}
    >
      {patientLegend.map((item, index) => (
        <div
          key={item.name}
          className="flex items-center gap-1.5 text-gray-500"
        >
          <span
            className="-mt-0.5 h-3 w-3 shrink-0 rounded-full"
            {...(theme && {
              style: {
                backgroundColor: COLORS[index][theme],
              },
            })}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
