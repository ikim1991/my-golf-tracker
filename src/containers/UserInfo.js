import React from 'react';
import { resetInputFields, resetRoundInputFields } from './components/index';

import './css/UserInfo.css';

function UserInfo(){

  const openModal = () => {
    document.querySelector(".addcourse-modal").style.visibility = "visible";
    document.querySelector(".carousel-indicators").style.visibility = "hidden";
    document.querySelector("#course-form").reset();

    if(document.querySelector(".new-round-modal").style.visibility === "visible"){
      document.querySelector(".new-round-modal").style.visibility = "hidden";
      document.querySelector("#new-round-form").reset()
    }
    resetRoundInputFields()
  }

  const openRoundModal = () => {
    document.querySelector(".new-round-modal").style.visibility = "visible";
    document.querySelector(".carousel-indicators").style.visibility = "hidden";
    document.querySelector("#new-round-form").reset()

    if(document.querySelector(".addcourse-modal").style.visibility === "visible"){
      document.querySelector(".addcourse-modal").style.visibility = "hidden";
      document.querySelector("#course-form").reset();
    }
    resetInputFields()

  }

  const toggleSeason = () => {
    document.querySelector(".dropdown-menu").classList.toggle("show")
  }

  return(
    <div className='userinfo bg-success border-dark'>
      <div className="user text-light">
        <h2 className="username">Chris K.</h2>
        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" onMouseOver={toggleSeason} onMouseLeave={toggleSeason}>
            2020
          </button>
          <div className="dropdown-menu" onMouseLeave={toggleSeason}>
            <div className="dropdown-item">2020</div>
            <div className="dropdown-item">2019</div>
            <div className="dropdown-item">2018</div>
          </div>
        </div>
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
        <div><button type="button" className="btn btn-block btn-outline-light btn-lg" onClick={openRoundModal}>New Round</button></div>
        <div><button type="button" className="d-inline-block btn btn-block btn-outline-light btn-lg" onClick={openModal}>Add Course</button></div>
      </div>
    </div>
  )
}

export default UserInfo;
