import React, { Component } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

class Stats extends Component {
  constructor(props) {
    super();
  }

  render() {
    var dataSet = {
      Monday: 10,
      Tuesday: 20,
      Wednesday: 3,
      Thursday: 50,
      Friday: 8,
      Saturday: 80
    };

    var categories = Object.keys(dataSet);
    var values = Object.values(dataSet);

    var chartData = {
      labels: categories,
      datasets: [
        {
          label: 'Chat Messages',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }
      ]
    };

    return (
      <div>
        <h1>Stats</h1>
        <h3>Chart</h3>
        <Line data={chartData} />
        <div className="barChart">
          <Bar
            data={chartData}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <Doughnut data={chartData} />
      </div>
    );
  }
}

export default Stats;
