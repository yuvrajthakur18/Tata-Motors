'use client';

import WidgetCard from '@core/components/cards/widget-card';
import { CustomTooltip } from '@core/components/charts/custom-tooltip';
import DropdownAction from '@core/components/charts/dropdown-action';
import TrendingUpIcon from '@core/components/icons/trending-up';
import cn from '@core/utils/class-names';
import { useTheme } from 'next-themes';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Title } from 'rizzui';

const data = [
  { subject: 'Extroversion', Persona: 3, fullMark: 5 }, // Reflects moderate communication effectiveness.
  { subject: 'Agreeableness', Persona: 1, fullMark: 5 }, // Indicates limited empathy and interpersonal skills.
  { subject: 'Conscientiousness', Persona: 5, fullMark: 5 }, // Demonstrates strong ownership and accountability.
  { subject: 'Emotional Stability', Persona: 2, fullMark: 5 }, // Shows room for improvement in handling pressure and time management.
  { subject: 'Openness', Persona: 3, fullMark: 5 } // Reflects moderate adaptability and proactive behavior.
];



const viewOptions = [
  { value: 'Daily', label: 'Daily' },
  { value: 'Monthly', label: 'Monthly' },
];

const agentLegend = [{ name: 'Agent Personality' }];

interface ColorMap {
  dark: string;
  light: string;
  [key: string]: string;
}

const COLORS: ColorMap[] = [{ dark: '#2B7F75', light: '#2B7F75' }];

export default function AgentPersonality({
  className,
}: {
  className?: string;
}) {
  const { theme } = useTheme();
  function handleChange(viewType: string) {
    console.log('viewType', viewType);
  }

  return (
    <WidgetCard
      title={<h5 className="font-semibold">Agent Personality</h5>}
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
          75%
        </Title>
        <span className="flex items-center gap-1 text-green-dark">
          <TrendingUpIcon className="h-auto w-5" />
          <span className="font-semibold leading-none"> +5.20%</span>
        </span>
      </div>
      <CustomLegend className="mb-4 mt-0 inline-flex @[80rem]:hidden" />
      <div className="custom-scrollbar -mb-3 overflow-x-auto pb-3">
        <div className="h-[20rem] w-full pe-1 pt-6">
          <ResponsiveContainer width="100%" height="100%" minWidth={400}>
            <RadarChart
              outerRadius="80%"
              data={data}
              margin={{
                left: 2,
                right: 5,
                bottom: 10,
              }}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Tooltip content={<CustomTooltip />} />
              <Radar
                name="Agent Personality"
                dataKey="Persona"
                stroke={theme ? COLORS[0][theme] : COLORS[0].light} // Fallback to 'light' color if theme is undefined
                fill={theme ? COLORS[0][theme] : COLORS[0].light} // Fallback to 'light' color if theme is undefined
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-3 mt-3 rounded-lg">
        <p className="text-xs"><p className="text-xs font-semibold">Please note:</p>For now, we have threshold value as 8</p>
      </div>
      </div>
    </WidgetCard>
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
      {agentLegend.map((item, index) => (
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
