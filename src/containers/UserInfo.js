import React, { useEffect, useState } from 'react';
import { resetInputFields, resetRoundInputFields } from './components/index';

import './css/UserInfo.css';

function UserInfo(){

  const [userInfo, updateUserInfo] = useState({
    username: "Chris K.",
    handicap: "-",
    lowest: "-",
    average: "-",
    highest: "-",
    rounds: "-",
    courses: "-",
    seasons: []
  })

  const [seasonsButton, changeSeason] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001", {
      method: 'get',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })



  }, [userInfo])

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
        <h2 className="username">{userInfo.username}</h2>
        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" onMouseOver={toggleSeason} onMouseLeave={toggleSeason}>
            {seasonsButton}
          </button>
          <div className="dropdown-menu" onMouseLeave={toggleSeason}>
            {userInfo.seasons.map(season => <div className="dropdown-item">{season}</div>)}
          </div>
        </div>
      </div>
      <div className="handicap text-light">
        <div>Handicap</div>
        <div>{userInfo.handicap}</div>
      </div>
      <div className="stats text-light">
        <div>Best</div>
        <div>Average</div>
        <div>Worst</div>
        <div>{userInfo.lowest}</div>
        <div>{userInfo.average}</div>
        <div>{userInfo.highest}</div>
      </div>
      <div className="counts text-light">
        <div>Rounds</div>
        <div>Courses</div>
        <div>{userInfo.rounds}</div>
        <div>{userInfo.courses}</div>
      </div>
      <div className="functionality text-light">
        <div><button type="button" className="btn btn-block btn-outline-light btn-lg" onClick={openRoundModal}>New Round</button></div>
        <div><button type="button" className="d-inline-block btn btn-block btn-outline-light btn-lg" onClick={openModal}>Add Course</button></div>
      </div>
    </div>
  )
}

export default UserInfo;
