import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const options = {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
      }

export default class Chart extends Component {

  returnData(data, labels) {

    const plotData = {
      labels: labels,
      datasets: [
        {
          label: 'Bitcoin',
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data
        }
      ]
    }
    return plotData;

  }


  render() {


    return (
      <div>
        <h2>{this.props.type}</h2>
        <Line data={this.returnData(this.props.data, this.props.labels)} options={options}/>
      </div>
    );
  }
};
