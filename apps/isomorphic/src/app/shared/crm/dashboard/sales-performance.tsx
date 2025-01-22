'use client';

import WidgetCard from '@core/components/cards/widget-card';
import { CustomTooltip } from '@core/components/charts/custom-tooltip';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Box, Button } from 'rizzui';

// Data for bar chart
const data = [
  { agent: 'A1', performance: 10 },
  { agent: 'A2', performance: 40 },
  { agent: 'A3', performance: 48 },
  { agent: 'A4', performance: 33 },
  { agent: 'A5', performance: 25 },
  { agent: 'A6', performance: 25 },
  { agent: 'A7', performance: 50 },
  { agent: 'A8', performance: 37 },
  { agent: 'A9', performance: 20 },
  { agent: 'A10', performance: 44 },
];

export default function SalesPerformance({
  className,
}: {
  className?: string;
}) {
  const { theme } = useTheme();
  const router = useRouter(); // Use Next.js router for navigation
  const isDark = theme === 'dark';

  return (
    <WidgetCard
      rounded="lg"
      className={className}
      title="Top Agents Performance"
    >
      <div className="custom-scrollbar w-full overflow-x-auto scroll-smooth">
        <Box className="mt-6 h-72 w-full @sm:mt-3 @lg:mt-8">
          <ResponsiveContainer width="100%" height="100%" minWidth={400}>
            <BarChart
              data={data}
              margin={{
                left: -5,
                right: 5,
                bottom: 10,
              }}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
              <XAxis
                dataKey="agent"
                axisLine={false}
                tickLine={false}
                tickMargin={20}
              />
              <YAxis axisLine={false} tickLine={false} tickMargin={20} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="performance"
                className="fill-[#29CCB1] dark:[fill-opacity:0.9]"
                name="Performance"
                barSize={16}
                radius={20}
                background={{
                  fill: isDark ? '#333333' : '#F1F1F2',
                  radius: 20,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </div>
      <Button
        className="mt-4"
        onClick={() => router.push('/agents-page')} // Redirect to /agents-page
      >
        View All
      </Button>
    </WidgetCard>
  );
}
