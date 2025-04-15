import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data1, data2 }) => {
  let data11 = data1;
  let data22 = data2;
  const data = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        label: "# of Votes",
        data: [data11, data22],
        backgroundColor: ["#99B3FF", "#3366FF"],
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      width={100}
      height={50}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export default DoughnutChart;
