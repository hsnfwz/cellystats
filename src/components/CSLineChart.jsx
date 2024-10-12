"use client";

import { LineChart } from '@tremor/react';

export default function CSLineChart({ data, index, categories, xAxisLabel, yAxisLabel }) {

  return (
    <LineChart
      data={data}
      index={index}
      categories={categories}
      colors={['blue', 'emerald']}
      yAxisWidth={48}
      showAnimation
      showXAxis
      showYAxis
      showLegend
      showGridLines={false}
      xAxisLabel={xAxisLabel}
      yAxisLabel={yAxisLabel}
    />
  );
}