import React from 'react';

import './ChartBar.css';
import { IDataPoint } from '../../../models/data-point.interface';

export const ChartBar: React.FC<{ dataPoint: IDataPoint }> = (props) => {
  let barFillHeight = '0%';
  if (props.dataPoint.maxValue! > 0) {
    barFillHeight = Math.round((props.dataPoint.value / props.dataPoint.maxValue!) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.dataPoint.label}</div>
    </div>
  );
};

