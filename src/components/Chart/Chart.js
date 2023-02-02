import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
