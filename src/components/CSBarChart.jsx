"use client";

import { BarChart } from '@tremor/react';

export default function CSBarChart({ data, index, categories, xAxisLabel, yAxisLabel }) {

  return (
    <BarChart
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