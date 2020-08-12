import React from 'react';

function ScoreCard(props){
  console.log(props)
  return(
    <div className="scorecard">
      <h2 className="text-success">{props.hole}</h2>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Hole</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">Par</th>
            {
              props.par.map((p, i) => <td key={i}>{p}</td>)
            }
          </tr>
          <tr>
            <th scope="row">Score</th>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
            <td><input type="number" name="par" required/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScoreCard;
