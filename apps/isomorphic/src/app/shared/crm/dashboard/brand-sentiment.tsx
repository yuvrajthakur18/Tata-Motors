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
import { Box } from 'rizzui';

const data = [
  {
    item: 'Start',
    positive: 361,
    neutral: 94,
    negative: 131,
    unknown: 125,
  },
  {
    item: 'Mid',
    positive: 150,
    neutral: 124,
    negative: 195,
    unknown: 242,
  },
  {
    item: 'End',
    positive: 476,
    neutral: 15,
    negative: 19,
    unknown: 201,
  },
];

export default function BrandSentiment({ className }: { className?: string }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <WidgetCard
      rounded="lg"
      className={`${className} p-4`}
      title="Sentiment trends of customers"
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
                axisLine={true}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12, fill: isDark ? '#aaa' : '#555' }}
                label={{
                  value: 'Sentiment Count',
                  angle: -90,
                  position: 'insideLeft',
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
                dataKey="positive"
                fill="#29CCB1" // Orange color for positive
                name="Positive"
                barSize={18}
                radius={[10, 10, 0, 0]}
                animationBegin={700}
                animationDuration={1200}
              />
              <Bar
                dataKey="neutral"
                fill="#34B3F1" // Blue color for Neutral
                name="Neutral"
                barSize={18}
                radius={[10, 10, 0, 0]}
                animationBegin={500}
                animationDuration={1200}
              />
              <Bar
                dataKey="negative"
                fill="#FE9738" // Green color for negative
                name="Negative"
                barSize={18}
                radius={[10, 10, 0, 0]}
                animationBegin={900}
                animationDuration={1200}
              />
              <Bar
                dataKey="unknown"
                fill="#ffd701" // Green color for negative
                name="Unknown"
                barSize={18}
                radius={[10, 10, 0, 0]}
                animationBegin={900}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </div>
    </WidgetCard>
  );
}
