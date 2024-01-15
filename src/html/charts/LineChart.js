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
// import { faker } from '@faker-js/faker';

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
  const [month, setMonth] = useState(1);

  const fetchMonthlySalaryData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/monthly-salary-bar-chart?month=${month}`
      );
      const data = await response.json();
      setMonthlySalaryData(data);
      console.log('Full 2D Map ' + monthlySalaryData);
      console.log('Only keys ' + monthlySalaryData.keySet());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMonthlySalaryData();
  }, [month]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff',
          font: {
            size: 20, // Set the font size of x-axis ticks
          },
        },
      },
      title: {
        display: true,
        // text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 18, // Set the font size of x-axis ticks
          },
        },
      },
      y: {
        ticks: {
          color: 'white', // Set the color of y-axis ticks to white
          font: {
            size: 18,
          }, // Set the font size of y-axis ticks
        },
      },
    },
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Extract keys and values from monthlySalaryData
  const keys = Object.keys(monthlySalaryData);
  const values = Object.values(monthlySalaryData);

  const labels = keys.map((key) => key); // Use keys as labels

  const data = {
    labels,
    datasets: [
      {
        label: `${months[month - 1]}`,
        data: values.map((value) => value),
        borderColor: '£1e239e',
        backgroundColor: '#1e239e',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 200000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return (
    <div>
      <h2 className="content-title">Monthly Salary Line Chart</h2>
      {/* <Bar data={chartData} options={options} id={chartId} /> */}
      <form
        className="justify-content-md-center row col-lg-12"
        style={{ color: '#fff' }}
      >
        <div className="form-group row col-lg-6 mt-4">
          <label htmlFor="month" className="col-form-label col-lg-4">
            <b>Select Month</b>
          </label>
          <div className="col-lg-6">
            <select
              id="month"
              name="month"
              className="form-control"
              onChange={(event) => setMonth(event.target.value)}
              value={month}
            >
              <option value="0">Select One</option>
              {months.map((month, index) => (
                <option value={index + 1}> {month} </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <Line options={options} data={data} />;
    </div>
  );
};

export default LineChart;
