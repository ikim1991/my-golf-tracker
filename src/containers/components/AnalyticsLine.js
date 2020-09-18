import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { updateLinePlot } from './../../actions';

const mapStateToProps = (state) => {
  return{
    linePlot: state.updateLinePlotState.linePlot
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

function AnalyticsLine(props){

  const { linePlot } = props

  useEffect(() => {
    const ctx = document.querySelector('#myLineChart').getContext('2d')
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: linePlot.xAxis,
        datasets: [{
          data: linePlot.yAxis,
          backgroundColor: 'rgba(102, 255, 102, 0.8)',
          pointRadius: 5,
          pointBorderColor: 'rgba(255, 255, 255, 1)'
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              }
            }],
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 20
                }
            }]
        }
      }
    })
  }, [linePlot])

  return(
    <div className="analytics">
      <div className="analytics-header text-success"><h3>{`Golf Scores: 2020`}</h3></div>
      <div className="analytics-plots">
        <canvas id="myLineChart"></canvas>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsLine);
