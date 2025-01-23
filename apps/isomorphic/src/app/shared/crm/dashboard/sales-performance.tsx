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
  { agent: 'Anshali Bhaskar', performance: 4.05, percent: 97.6, rating: 'Excellent' },
  { agent: 'Anshali Bhaskar', performance: 4.05, percent: 92.8, rating: 'Excellent' },
  { agent: 'Parveen', performance: 4.05, percent: 87.2, rating: 'Good' },
  { agent: 'Kapil', performance: 4.05, percent: 72.0, rating: 'Needs Improvement' },
  { agent: 'Priya Bhaskar', performance: 4.05, percent: 85.6, rating: 'Good' },
  { agent: 'Bachchu Digels', performance: 4.05, percent: 94.4, rating: 'Excellent' },
  { agent: 'name1', performance: 4.05, percent: 84.0, rating: 'Good' },
  { agent: 'jayesh', performance: 4.0, percent: 91.2, rating: 'Excellent' },
  { agent: 'Bharti', performance: 4.05, percent: 87.2, rating: 'Good' },
  { agent: 'Bharti', performance: 4.05, percent: 96.0, rating: 'Excellent' },
  { agent: 'jayesh', performance: 4.05, percent: 80.0, rating: 'Good' },
  { agent: 'Mr. Neela', performance: 4.05, percent: 89.6, rating: 'Good' },
  { agent: 'Rada', performance: 4.05, percent: 88.8, rating: 'Good' },
  { agent: 'Tata Muthus', performance: 4.05, percent: 82.4, rating: 'Good' },
  { agent: 'Rajesh Lokhande', performance: 3.9, percent: 67.2, rating: 'Needs Improvement' },
  { agent: 'Rada', performance: 4.05, percent: 80.8, rating: 'Good' },
  { agent: 'Neelim', performance: 3.75, percent: 83.2, rating: 'Good' },
  { agent: 'Rajesh Lokhande', performance: 4.05, percent: 55.2, rating: 'Poor' },
  { agent: 'jayesh', performance: 4.05, percent: 80.8, rating: 'Good' },
  { agent: 'Santosh Singh', performance: 4.05, percent: 92.0, rating: 'Excellent' },
  { agent: 'Maruti Parashyambur', performance: 4.05, percent: 76.8, rating: 'Good' },
  { agent: 'Shweta Radha', performance: 4.25, percent: 84.0, rating: 'Good' },
  { agent: 'Shweta', performance: 4.05, percent: 77.6, rating: 'Good' },
  { agent: 'Shweta', performance: 4.05, percent: 52.8, rating: 'Poor' },
  { agent: 'Shweta', performance: 3.9, percent: 90.4, rating: 'Excellent' },
  { agent: 'Norman Nirmal', performance: 4.05, percent: 76.0, rating: 'Good' },
  { agent: 'Harsha', performance: 4.05, percent: 84.0, rating: 'Good' },
  { agent: 'Pintu', performance: 4.05, percent: 83.2, rating: 'Good' },
  { agent: 'jayesh', performance: 4.0, percent: 91.2, rating: 'Excellent' },
  { agent: 'Bharti', performance: 4.05, percent: 87.2, rating: 'Good' },
  { agent: 'Bharti', performance: 4.05, percent: 96.0, rating: 'Excellent' },
  { agent: 'jayesh', performance: 4.05, percent: 80.0, rating: 'Good' },
  { agent: 'Mr. Neela', performance: 4.05, percent: 89.6, rating: 'Good' },
  { agent: 'Rada', performance: 4.05, percent: 88.8, rating: 'Good' },
  { agent: 'Tata Muthus', performance: 4.05, percent: 82.4, rating: 'Good' },
  { agent: 'Rajesh Lokhande', performance: 3.9, percent: 67.2, rating: 'Needs Improvement' },
  { agent: 'Rada', performance: 4.05, percent: 80.8, rating: 'Good' },
  { agent: 'Neelim', performance: 3.75, percent: 83.2, rating: 'Good' },
  { agent: 'Rajesh Lokhande', performance: 4.05, percent: 55.2, rating: 'Poor' },
  { agent: 'jayesh', performance: 4.05, percent: 80.8, rating: 'Good' },
  { agent: 'Santosh Singh', performance: 4.05, percent: 92.0, rating: 'Excellent' },
  { agent: 'Maruti Parashyambur', performance: 4.05, percent: 76.8, rating: 'Good' },
  { agent: 'Shweta Radha', performance: 4.25, percent: 84.0, rating: 'Good' },
  { agent: 'Shweta', performance: 4.05, percent: 77.6, rating: 'Good' },
  { agent: 'Shweta', performance: 4.05, percent: 52.8, rating: 'Poor' },
  { agent: 'Shweta', performance: 3.9, percent: 90.4, rating: 'Excellent' },
  { agent: 'Norman Nirmal', performance: 4.05, percent: 76.0, rating: 'Good' },
  { agent: 'Harsha', performance: 4.05, percent: 84.0, rating: 'Good' },
  { agent: 'Pintu', performance: 4.05, percent: 83.2, rating: 'Good' },
  { agent: 'Priya', performance: 4.05, percent: 78.4, rating: 'Good' },
  { agent: 'Shruthi Radha', performance: 4.05, percent: 82.4, rating: 'Good' },
  { agent: 'Rajesh Lokhande', performance: 4.05, percent: 91.2, rating: 'Excellent' },
  { agent: 'Rada', performance: 3.45, percent: 58.4, rating: 'Poor' },
  { agent: 'Tata Mota', performance: 4.05, percent: 91.2, rating: 'Excellent' },
  { agent: 'Rajesh Lokhande', performance: 4.55, percent: 60.0, rating: 'Needs Improvement' },
  { agent: 'Rada', performance: 4.05, percent: 84.0, rating: 'Good' },
  { agent: 'jayesh', performance: 4.05, percent: 66.4, rating: 'Needs Improvement' },
  { agent: 'Rajesh Lokhande', performance: 3.75, percent: 66.4, rating: 'Needs Improvement' },
  { agent: 'jayesh', performance: 3.55, percent: 80.0, rating: 'Good' }
];

const sortedData = [...data].sort((a, b) => b.percent - a.percent);
const topPerformers = sortedData.slice(0, 10);

const CustomTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { agent, performance, percent } = payload[0].payload;
    return (
      <div className="bg-white p-2 shadow-md rounded-md">
        <p className="text-gray-700"><strong>Agent:</strong> {agent}</p>
        <p className="text-gray-700"><strong>Performance:</strong> {performance}</p>
        <p className="text-gray-700"><strong>Percent:</strong> {percent}%</p>
      </div>
    );
  }
  return null;
};

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
              data={topPerformers}
              margin={{
                left: -5,
                right: 5,
                bottom: 10,
              }}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
              <XAxis
                dataKey={(entry) => {
                  const names = entry.agent.split(' ');
                  return names.length > 1 
                    ? `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}` 
                    : names[0].charAt(0); // Handles single-name cases
                }}
                axisLine={true}
                tickLine={false}
                tickMargin={20}
              />
              <YAxis
                axisLine={true}
                tickLine={false}
                tickMargin={20}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value, name, props) => {
                  return [`${value}%`, props.payload.agent]; // Show full name in the tooltip
                }}
                labelFormatter={(label) => `Agent: ${label}`} // Optional, formats the label for better context
              />
              <Bar
                dataKey="percent"
                className="fill-[#29CCB1] dark:[fill-opacity:0.9]"
                name="Percent"
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
