"use client";

import { BarChart } from '@tremor/react';

export default function CSBarChart ({ data, index, categories, xAxisLabel, yAxisLabel }) {

  return (
    <div className="w-full max-w-[800px]">
      <BarChart
        data={data}
        index={index}
        categories={categories}
        colors={['blue']}
        yAxisWidth={48}
        showAnimation
        showXAxis
        showYAxis
        showLegend={false}
        showGridLines={false}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
      />
    </div>
  );
}