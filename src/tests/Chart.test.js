import React from 'react';
import Chart from '../components/Chart.js'; // importing unconnected component
import {Line} from 'react-chartjs-2';
import ShallowRenderer from 'react-test-renderer/shallow';

const onChartClick = function() {
  if (this.state.boxDisplay === false) {
    this.setState({boxDisplay: true});
  } else {
    this.setState({boxDisplay: false});
  }
}

test('Chart component rendering without issues', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <Chart
      data={['1', '2', '3']}
      labels={['A', 'B', 'C']}
      type='Bitcoin'
      amount='1000'
      period='1'
      onChartClick={onChartClick}
      />
    );
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.children).toEqual([
        <div className="alert alert-info">
          <strong>Clique no gráfico para obter mais informações.</strong>
        </div>,

        <h2>Bitcoin</h2>,
        <Line
          data={{
            labels: ['A', 'B', 'C'],
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
                data: ['1', '2', '3']
              }
            ]
          }}
          />
  ]);
});
