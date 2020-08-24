import React, { useState } from 'react';
import ScoreCard from './ScoreCard';
import moment from 'moment';
import { checkRoundInputFields, resetRoundInputFields } from './index';
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
    resetRoundInputFields()
  }

  const onCourseSelect = (e) => {

    onButtonClick(false)
    setCourse("")
    onBoxCheck(false)
    selectHoles([])

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

  const onLogRound = () => {
    checkRoundInputFields()

    if(Array.from(document.querySelectorAll("input[name='par-fill']")).filter(input => input.value === "").length === 0){
      document.querySelector(".log-round").disabled = true
      fetch('http://localhost:3001/newround', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          playedOn: document.querySelector(".date").value,
          season: (document.querySelector(".date").value.split("-")[0]),
          course: document.querySelector(".course-list").value,
          holes: Array.from(document.querySelectorAll(".check-label")).map(input => input.innerText),
          totalScore: Array.from(document.querySelectorAll("input[name='par-fill']")).map(input => parseInt(input.value)).reduce((total, num) => total + num),
          scores: (() => {
            let holes = Array.from(document.querySelectorAll(".check-label")).map(input => input.innerText)
            let scores = Array.from(document.querySelectorAll("input[name='par-fill']")).map(input => input.value)
            let obj = {}
            let start = 0
            let finish = 9

            for(let i = 0; i < holes.length; i++){
              if(i=== 0){
                obj[holes[i]] = scores.slice(start, finish)
              } else{
                start+=9
                finish+=9
                obj[holes[i]] = scores.slice(start, finish)
              }
            }
            return obj
          })()
        })
      }).then(res => res.json())
      .then(data => {
        document.querySelector(".log-round").disabled = false
        document.querySelector("#new-round-form").reset()
        onButtonClick(false)
        setCourse("")
        onBoxCheck(false)
        selectHoles([])
      })
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
            <input className="date text-success" name="date" type="date" defaultValue={moment(new Date()).format('YYYY-MM-DD')}/>
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
                        <button type="button" className="log-round btn btn-success btn-lg m-1" onClick={onLogRound}>Log Round</button>
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
