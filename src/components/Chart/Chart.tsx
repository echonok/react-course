import React from 'react';

import './Chart.css';
import { ChartBar } from './ChartBar/ChartBar';
import { IDataPoint } from '../../models/data-point.interface';

export const Chart: React.FC<{ dataPoints: IDataPoint[] }> = (props) => {
  const totalMax = Math.max(...props.dataPoints.map((point) => point.value));
  props.dataPoints.forEach((point) => point.maxValue = totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => <ChartBar dataPoint={dataPoint} key={dataPoint.label}/>)}
    </div>
  )
}
