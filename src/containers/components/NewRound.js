import React, { useState } from 'react';
import ScoreCard from './ScoreCard';
import moment from 'moment';
import { rounds, courses } from '../../data';

function NewRound(){

  const [course, setCourse] = useState("")
  const [holes, selectHoles] = useState([])
  const [buttonClicked, onButtonClick] = useState(false)
  const [boxChecked, onBoxCheck] = useState(false)

  const closeModal = (e) => {
    e.target.parentElement.style.visibility = "hidden";
    document.querySelector("#new-round-form").reset()
    document.querySelector(".carousel-indicators").style.visibility = "visible";
  }

  const onCourseSelect = (e) => {
    if(e.target.value !== ""){
      setCourse(e.target.value)
    } else{
      onButtonClick(false)
      setCourse("")
    }
  }

  const limitTo18Holes = (e) => {
    const checkboxes = Array.from(document.querySelectorAll(".check")).filter(checkbox => checkbox.checked)

    if(checkboxes.length > 2){
      checkboxes.map((checkbox) => checkbox.checked = false)
    }

    if(checkboxes.length < 2){
      onBoxCheck(false)
    }

    selectHoles(checkboxes.map(checkbox => checkbox.nextSibling.textContent))
  }

  const onCheck = (e) => {
    const checkboxes = Array.from(document.querySelectorAll(".check")).filter(checkbox => checkbox.checked)

    if(e.target.checked){
      if(checkboxes.length === 2){
        onBoxCheck(true)
      } else{
        onBoxCheck(false)
      }
    }
  }

  const handleOnButtonClick = () => {
    if(course !== ""){
      if(!buttonClicked){
        onButtonClick(true)
      } else{
        onButtonClick(false)
      }
    }
  }

  return(
    <div className="new-round-modal bg-light">
      <div className="new-round-modal-exit text-success" onClick={closeModal}>X</div>
      <form id="new-round-form">
        <div className="new-round text-success">
          <h2 className="text-success">Log New Round</h2>
          <div className="add-new-round">
            <label htmlFor="course-list" type="text">Course Name:</label>
            <select className="course-list text-success" name="course-list" defaultValue = "" onChange={onCourseSelect}>
              <option></option>
              {Object.keys(courses).map((course, i) => <option key={i}>{course}</option>)}
            </select>
            <label htmlFor="date">Date: </label>
            <input className="text-success" name="date" type="date" defaultValue={moment(new Date()).format('YYYY-MM-DD')}/>
          </div>
          <button type="button" className="btn btn-success btn-lg m-1" onClick={handleOnButtonClick}>Show Course</button>
          {
            (buttonClicked) ? (
              <div className="show-scorecard">
                <h2 className="text-success mt-4">Select Holes</h2>
                <div className="checkboxes mb-4">
                  {
                    courses[course].holes.map((hole, i) => <div className="checkbox" key={i}><input className="check" name="checkbox" type="checkbox" onChange={limitTo18Holes} onClick={onCheck}/><label className="check-label" htmlFor="checkbox">{hole}</label></div>)
                  }
                </div>
                <div>
                  {
                    (boxChecked) ? (
                      <div>
                        {
                          holes.map((hole, i) => <ScoreCard hole={hole} par={courses[course].par[hole]} key={i}/>)
                        }
                        <button type="button" className="btn btn-success btn-lg m-1">Log Round</button>
                      </div>
                    ) : (
                      <div></div>
                    )
                  }
                </div>
              </div>
            ) : (
              <div></div>
            )
          }
        </div>
      </form>
    </div>
  )
}

export default NewRound;
