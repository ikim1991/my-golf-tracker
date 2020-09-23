import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = (state) => {
  return{
    scorecard: state.updateScorecardState.scorecard
  }
}

function AnalyticsScoreCard(props){

  const { scorecard } = props

  return(
    <div className="analytics">
      <div className="analytics-header text-success"><h3>{`Scorecard: 2020`}</h3></div>
      <table className="analytics-scorecard">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th colSpan="18">Hole</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Date</th>
          <th>Course</th>
          <th className="analytics-scorecard-hole">1</th>
          <th className="analytics-scorecard-hole">2</th>
          <th className="analytics-scorecard-hole">3</th>
          <th className="analytics-scorecard-hole">4</th>
          <th className="analytics-scorecard-hole">5</th>
          <th className="analytics-scorecard-hole">6</th>
          <th className="analytics-scorecard-hole">7</th>
          <th className="analytics-scorecard-hole">8</th>
          <th className="analytics-scorecard-hole">9</th>
          <th className="analytics-scorecard-hole">10</th>
          <th className="analytics-scorecard-hole">11</th>
          <th className="analytics-scorecard-hole">12</th>
          <th className="analytics-scorecard-hole">13</th>
          <th className="analytics-scorecard-hole">14</th>
          <th className="analytics-scorecard-hole">15</th>
          <th className="analytics-scorecard-hole">16</th>
          <th className="analytics-scorecard-hole">17</th>
          <th className="analytics-scorecard-hole">18</th>
          <th className="analytics-scorecard-par">Par</th>
          <th className="analytics-scorecard-total">Total</th>
          <th className="analytics-scorecard-score">Score</th>
        </tr>
      </thead>
      <tbody>
        {scorecard.map((score, index) => {
          return(
            <tr key={index}>{score.map((s, i) => {
              if(i === 0){
                return(
                  <td key={i}>{moment(s).format('L')}</td>
                )
              } else{
                return(
                  <td key={i}>{s}</td>
                )
              }
            })}</tr>
          )
        })}
      </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps)(AnalyticsScoreCard);
