import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
// import { CategoryScale, Chart, LinearScale } from 'chart.js';
// Chart.register(CategoryScale, LinearScale, Chart);
import Chart from 'chart.js/auto';

const ChartController = () => {
  const [monthlySalaryData, setMonthlySalaryData] = useState([]);
  useEffect(() => {
    const fetchMonthlySalaryData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/monthly-salary-bar-chart`
        );
        const data = await response.json();
        setMonthlySalaryData(data);
        console.log(monthlySalaryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMonthlySalaryData();
  }, [setMonthlySalaryData]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Monthly Salary',
        backgroundColor: 'navy',
        borderColor: 'navy',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(56,165,46,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(56,165,46,1)',
        data: [],
      },
    ],
  });

  const handleShowChart = () => {
    // Replace the following lines with the logic to fetch or calculate your dynamic data
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];

    // let monthlySalaryData;
    //   /* Your dynamic data */

    // const fetchMonthlySalaryData = () =>{
    //   const response = await
    //   fetch('http://localhost:8080/monthly-salary-bar-chart');
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         return new Promise([]);
    //       }
    //     })
    //     .then((data) => setMonthlySalaryData(data))
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    setChartData({
      labels,
      datasets: [
        {
          ...chartData.datasets[0], // Preserve other dataset properties
          data: monthlySalaryData,
        },
      ],
    });
  };

  return (
    <div>
      <h1>Charts</h1>
      <button className="btn btn-success btn-lg" onClick={handleShowChart}>
        Monthly Salary Bar Chart
      </button>
      <BarChart chartData={chartData} />
    </div>
  );
};

export default ChartController;
