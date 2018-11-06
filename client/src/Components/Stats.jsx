import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Stats extends Component {
  constructor(props) {
    super();
  }

  render() {
    var dataSet = {
      red: 10,
      blue: 20,
      green: 40
    };

    var categories = Object.keys(dataSet);
    var values = Object.values(dataSet);

    var chartData = {
      labels: categories,
      datasets: [
        {
          label: 'Stats',
          borderColor: 'rgba(54, 162, 235, 1)',
          data: values
        }
      ]
    };

    return (
      <div>
        <h1>Stats</h1>
        <h3>Chart</h3>
        <Line data={chartData} />
      </div>
    );
  }
}

export default Stats;
