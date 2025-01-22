'use client';

import WidgetCard from '@core/components/cards/widget-card';
import { CustomTooltip } from '@core/components/charts/custom-tooltip';
import { useTheme } from 'next-themes';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { Box, Button } from 'rizzui';

const data = [
  {
    item: 'Product',
    customers: 10,
    positive: 8,
    negative: 2,
  },
  {
    item: 'Workshop',
    customers: 40,
    positive: 25,
    negative: 15,
  },
  {
    item: 'People',
    customers: 48,
    positive: 35,
    negative: 13,
  },
  {
    item: 'Process',
    customers: 33,
    positive: 20,
    negative: 13,
  },
];

export default function BrandSentiment({ className }: { className?: string }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <WidgetCard
      rounded="lg"
      className={`${className} p-4`}
      title="Frequency of Frustration on Brand"
      action={
        <Button variant="outline" size="sm">
          View All
        </Button>
      }
    >
      
      <div className="custom-scrollbar w-full overflow-x-auto scroll-smooth">
        <Box className="mt-4 h-80 w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={400}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                left: 0,
                right: 20,
                bottom: 20,
              }}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <CartesianGrid
                strokeDasharray="4 4"
                strokeOpacity={0.2}
                className="stroke-current text-gray-300"
              />
              <XAxis
                dataKey="item"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12, fill: isDark ? '#aaa' : '#555' }}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12, fill: isDark ? '#aaa' : '#555' }}
                label={{
                  value: 'Customers',
                  angle: -90,
                  position: 'insideLeft',
                  fontSize: 12,
                  fill: isDark ? '#aaa' : '#555',
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12, fill: isDark ? '#aaa' : '#555' }}
                label={{
                  value: 'Sentiments',
                  angle: 90,
                  position: 'insideRight',
                  fontSize: 12,
                  fill: isDark ? '#aaa' : '#555',
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="top"
                align="center"
                wrapperStyle={{
                  fontSize: 12,
                  color: isDark ? '#aaa' : '#555',
                }}
              />
              <Bar
                yAxisId="left"
                dataKey="customers"
                fill="url(#customers-gradient)"
                name="Customers"
                barSize={18}
                radius={[10, 10, 0, 0]}
                animationBegin={500}
                animationDuration={1200}
              />
              <Bar
                yAxisId="right"
                dataKey="positive"
                fill="url(#positive-gradient)"
                name="Positive"
                barSize={18}
                radius={[10, 10, 0, 0]}
                animationBegin={700}
                animationDuration={1200}
              />
              <Bar
                yAxisId="right"
                dataKey="negative"
                fill="url(#negative-gradient)"
                name="Negative"
                barSize={18}
                radius={[10, 10, 0, 0]}
                animationBegin={900}
                animationDuration={1200}
              />
              <defs>
                <linearGradient id="customers-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#29CCB1" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#29CCB1" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="positive-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#4CAF50" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="negative-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F44336" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#F44336" stopOpacity={0.3} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </div>
    </WidgetCard>
  );
}
