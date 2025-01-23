'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import dummyData from '@/app/shared/crm/dashboard/tables/data/dummy-data.json';
import WidgetCard from '@core/components/cards/widget-card';

interface BrandSentimentProps {
  callId: string; // The ID of the call to filter data
}

export default function BrandSentiment({ callId }: BrandSentimentProps) {
  // Find the data for the given call ID
  const BrandSentimentData = dummyData
    .flatMap((item) => item.calls_overview?.calls || [])
    .find((call) => call.call_id === callId)?.brand_sentiment;

  if (!BrandSentimentData) {
    console.error(`BrandSentiment Data not found for call ID: ${callId}`);
    return <p className="text-red-500 text-center py-4">Call not found.</p>;
  }

  // Map data to align with the required structure for the graph
  const graphData = BrandSentimentData.map((item) => ({
    category: item.category,
    frustration: parseFloat(item.frequency_of_frustration || '0'),
    happiness: parseFloat(item.frequency_of_happiness || '0'),
  }));

  return (
    <WidgetCard
      title="Brand Sentiment Analysis"
      titleClassName="whitespace-nowrap"
      headerClassName="mb-4 items-start flex-col @[62rem]:flex-row @[62rem]:items-center px-5 lg:px-7 pt-5 lg:pt-7"
      actionClassName="grow @[62rem]:ps-11 ps-0 items-center w-full @[42rem]:w-full @[62rem]:w-auto"
    >
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="frustration" fill="#f56565" name="Frustration Count" barSize={20} />
            <Bar dataKey="happiness" fill="#48bb78" name="Happiness Count" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}