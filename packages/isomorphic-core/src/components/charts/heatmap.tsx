"use client";

import React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Scatter,
  ScatterChart,
} from "recharts";

interface HeatmapProps {
  data: { x: string; y: string; value: number }[]; // x and y for axes, value for intensity
  xKey: string;
  yKey: string;
  valueKey: string;
  height?: number;
}

const Heatmap = ({
  data,
  xKey,
  yKey,
  valueKey,
  height = 400,
}: HeatmapProps) => {
  const getColor = (value: number) => {
    if (value > 80) return "#005f73"; // High intensity
    if (value > 50) return "#0a9396"; // Medium intensity
    if (value > 20) return "#94d2bd"; // Low intensity
    return "#e9d8a6"; // Very low intensity
  };

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <ScatterChart
          margin={{
            top: 10,
            right: 30,
            bottom: 10,
            left: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="category" dataKey={xKey} />
          <YAxis type="category" dataKey={yKey} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            data={data}
            fill="#8884d8"
            shape={(props: any) => {
              // `props` type is `any` to match the expected function signature `(props: unknown) => JSX.Element`
              const { cx, cy, payload } = props;
              const color = getColor(payload[valueKey]);
              return (
                <rect
                  x={cx - 10}
                  y={cy - 10}
                  width={20}
                  height={20}
                  fill={color}
                  stroke="#fff"
                  strokeWidth={1}
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Heatmap;
