import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((chartPoint) => (
        <ChartBar
            key={chartPoint.label}
          value={chartPoint.value}
          maxValue={maxValue}
          label={chartPoint.label}
        />
       ))}
    </div>
  );
};

export default Chart;
