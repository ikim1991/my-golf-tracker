import React from 'react';

import './css/UserInfo.css';

function UserInfo(){
  return(
    <div className='userinfo bg-success border-dark'>
      <div className="user text-light">
        <h2>Player - Chris K.</h2>
      </div>
      <div className="handicap text-light">
        <div>Handicap</div>
        <div>-</div>
      </div>
      <div className="stats text-light">
        <div>Best</div>
        <div>Average</div>
        <div>Worst</div>
        <div>-</div>
        <div>-</div>
        <div>-</div>
      </div>
      <div className="counts text-light">
        <div>Rounds</div>
        <div>Courses</div>
        <div>0</div>
        <div>0</div>
      </div>
      <div className="functionality text-light">
        <div><button type="button" className="btn btn-block btn-outline-light btn-lg">New Round</button></div>
        <div><button type="button" className="d-inline-block btn btn-block btn-outline-light btn-lg">Add Course</button></div>
      </div>
    </div>
  )
}

export default UserInfo;
