import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [monthlySalaryData, setMonthlySalaryData] = useState([]);
  useEffect(() => {
    const fetchMonthlySalaryData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/monthly-salary-bar-chart`
        );
        const data = await response.json();
        setMonthlySalaryData(data);
        console.log('Full 2D Map ' + monthlySalaryData);
        console.log('Only keys ' + monthlySalaryData.keySet());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMonthlySalaryData();
  }, [setMonthlySalaryData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  // const labels = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  // ];

  // Extract keys and values from monthlySalaryData
  const keys = Object.keys(monthlySalaryData);
  const values = Object.values(monthlySalaryData);

  const labels = keys.map((key) => key); // Use keys as labels

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: values.map((value) => value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 200000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <h2>Monthly Salary Chart </h2>
      {/* <Bar data={chartData} options={options} id={chartId} /> */}
      <Line options={options} data={data} />;
    </div>
  );
};

export default LineChart;
