import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { updateCount } from './../../actions';

const mapStateToProps = (state) => {
  return{
    scoreCount: state.updateScoreCount.scoreCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUpdateCount: (scoreCount) => {
      dispatch(updateCount(scoreCount))
    }
  }
}

function AnalyticsBar(props){

  const { scoreCount, onUpdateCount } = props

  useEffect(() => {
    const ctx = document.querySelector('#myBarChart')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(scoreCount).map(score => {
          if(score === 'eagle'){
            return (score.charAt(0).toUpperCase() + score.slice(1)) + " or Better"
          } else if(score === 'quad'){
            return (score.charAt(0).toUpperCase() + score.slice(1)) + "riple or Worse"
          } else{
            return score.charAt(0).toUpperCase() + score.slice(1)
          }
        }),
        datasets: [{
          data: Object.values(scoreCount),
          backgroundColor: [
            '#ff0000',
            '#ff9900',
            '#ffff00',
            '#00cc00',
            '#00ff99',
            '#0000ff',
            '#6600ff'
          ],
          borderColor: [
            '#ff0000',
            '#ff9900',
            '#ffff00',
            '#00cc00',
            '#00ff99',
            '#0000ff',
            '#6600ff'
          ],
          borderWidth: 1
        }],

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
                    suggestedMax: 10
                }
            }]
        }
      }
    })
  }, [scoreCount])

  return(
    <div className="analytics">
      <div className="analytics-header text-success"><h3>{`Golf Statistics: 2020`}</h3></div>
      <div className="analytics-numbers-grid">
        <div className="analytics-numbers-items text-success border border-success">&#8804;Eagle</div>
        <div className="analytics-numbers-items text-success border border-success">Birdie</div>
        <div className="analytics-numbers-items text-success border border-success">Par</div>
        <div className="analytics-numbers-items text-success border border-success">Bogey</div>
        <div className="analytics-numbers-items text-success border border-success">Double</div>
        <div className="analytics-numbers-items text-success border border-success">Triple</div>
        <div className="analytics-numbers-items text-success border border-success">&#8805;Quadriple</div>
        <div className="analytics-numbers-items text-success border border-success">{`${scoreCount.eagle}`}</div>
        <div className="analytics-numbers-items text-success border border-success">{`${scoreCount.birdie}`}</div>
        <div className="analytics-numbers-items text-success border border-success">{`${scoreCount.par}`}</div>
        <div className="analytics-numbers-items text-success border border-success">{`${scoreCount.bogey}`}</div>
        <div className="analytics-numbers-items text-success border border-success">{`${scoreCount.double}`}</div>
        <div className="analytics-numbers-items text-success border border-success">{`${scoreCount.triple}`}</div>
        <div className="analytics-numbers-items text-success border border-success">{`${scoreCount.quad}`}</div>
      </div>
      <div className="analytics-plots">
        <canvas id="myBarChart"></canvas>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsBar);
