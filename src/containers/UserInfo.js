import React from 'react';
import { resetInputFields, resetRoundInputFields } from './components/index';
import { connect } from 'react-redux';
import { updateInputYear } from './../actions';

import './css/UserInfo.css';

const mapStateToProps = (state) => {
  return{
    user: state.initializeUserInfo.user,
    year: state.updateInputDate.year
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUpdateInputYear: (user, event) => {
      dispatch(updateInputYear(user, event.target.innerText))
    }
  }
}

function UserInfo(props){

  const { user, year, onUpdateInputYear } = props

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
        <h2 className="username">{user.username}</h2>
        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" onMouseOver={toggleSeason} onMouseLeave={toggleSeason}>
            {year}
          </button>
          <div className="dropdown-menu" onMouseLeave={toggleSeason}>
            {user.seasons.map((season, index) => <div className="dropdown-item" key={index} onClick={(e) => {onUpdateInputYear(user, e)}}>{season.season}</div>)}
          </div>
        </div>
      </div>
      <div className="handicap text-light">
        <div>Handicap</div>
        <div>{user.seasons[user.seasons.length -1].handicap}</div>
      </div>
      <div className="stats text-light">
        <div>Best</div>
        <div>Average</div>
        <div>Worst</div>
        <div>{user.seasons[user.seasons.length - 1].lowest}</div>
        <div>{user.seasons[user.seasons.length - 1].average}</div>
        <div>{user.seasons[user.seasons.length - 1].highest}</div>
      </div>
      <div className="counts text-light">
        <div>Rounds</div>
        <div>Courses</div>
        <div>{user.seasons[user.seasons.length - 1].rounds}</div>
        <div>{user.seasons[user.seasons.length - 1].courses}</div>
      </div>
      <div className="functionality text-light">
        <div><button type="button" className="func-button btn btn-block btn-outline-light btn-lg" onClick={openRoundModal}>New Round</button></div>
        <div><button type="button" className="func-button d-inline-block btn btn-block btn-outline-light btn-lg" onClick={openModal}>Add Course</button></div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
