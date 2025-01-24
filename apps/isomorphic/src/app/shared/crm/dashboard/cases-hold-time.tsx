'use client';

import { useState } from 'react';
import { Box, Flex, Text } from 'rizzui';
import cn from '@core/utils/class-names';
import WidgetCard from '@core/components/cards/widget-card';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import DropdownAction from '@core/components/charts/dropdown-action';

// Original data
const originalData = [
  { name: '0-5 Mins', value: 122 },
  { name: '5-10 Mins', value: 14 },
  { name: '>10 Mins', value: 3 },
];

const COLORS = ['#8DE3F5', '#59A7FF', '#FFA59E'];

const calculatePercentage = (part: number, total: number) =>
  ((part / total) * 100).toFixed(2);

export default function CasesHoldTime({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredData, setFilteredData] = useState(originalData);

  const valueSum = filteredData.reduce((total, item) => total + item.value, 0);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  function handleChange(viewType: string) {
    if (viewType === 'All') {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter((item) => item.name === viewType);
      setFilteredData(filtered);
    }
  }

  return (
    <WidgetCard
      title="Cases Hold Time"
      className={cn('@container', className)}
      headerClassName="mb-6 lg:mb-0"
    >
      <Box className="relative mx-auto size-[290px] @sm:size-[340px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="z-5 relative"
        >
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              dataKey="value"
              innerRadius="42%"
              outerRadius="70%"
              fill="#8884d8"
              paddingAngle={4}
              data={filteredData}
              onMouseEnter={onPieEnter}
              activeIndex={activeIndex}
              cornerRadius={6}
              label
            >
              {filteredData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <Box className="absolute inset-24 flex flex-col items-center justify-center rounded-full bg-white shadow-[0px_4px_20px_0px_#00000029] @sm:inset-28 dark:bg-gray-200">
          <Text className="text-center text-gray-500">Total Calls on Hold</Text>
          <Text className="text-xl font-semibold dark:text-white">
            {valueSum}
          </Text>
        </Box>
      </Box>

      <Flex justify="center" className="flex-wrap @lg:gap-8">
        {filteredData.map((item, index) => (
          <Box key={item.name}>
            <Flex align="center" gap="1">
              <span
                className="me-2 h-2.5 w-3.5 flex-shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <Text as="span" className="whitespace-nowrap">
                {item.name}
              </Text>
            </Flex>
            <Text as="p" className="ms-[26px] font-medium">
              {calculatePercentage(item.value, valueSum)}%
            </Text>
          </Box>
        ))}
      </Flex>
    </WidgetCard>
  );
}
