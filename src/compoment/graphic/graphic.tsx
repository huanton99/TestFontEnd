import React, { useEffect, useRef } from "react";
import {
  Chart,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
} from "chart.js";
import { Race } from "../../const/const";

interface RaceChartProps {
  data: Race[];
  label: string;
  value: string;
}

const RaceChart: React.FC<RaceChartProps> = ({ data, value, label }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef: any = useRef<null>(null);
  console.log("????", label);
  console.log("????", value);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Đăng ký controller "bar" và element "bar"
        Chart.register(LinearScale, BarController, BarElement, CategoryScale);
        const labels = data.map((item: any) => item[label]);
        const laps = data.map((item: any) => item[value]);

        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Number of Laps",
                data: laps,
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                stepSize: 5,
              },
            },
          },
        });
      }
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default RaceChart;
