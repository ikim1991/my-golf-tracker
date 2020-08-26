import React from 'react';
import ScoreCard from './ScoreCard';
import moment from 'moment';
import { checkRoundInputFields, resetRoundInputFields } from './index';
import { connect } from 'react-redux';
import { updateCourse, updateHoles, updateBoxChecked, updateButtonClicked } from './../../actions';

const mapStateToProps = (state) => {
  return{
    courses: state.initializeUserInfo.courses,
    setCourse: state.updateNewRoundState.setCourse,
    holes: state.updateNewRoundState.holes,
    buttonClicked: state.updateNewRoundState.buttonClicked,
    boxChecked: state.updateNewRoundState.boxChecked
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUpdateCourse: (course) => {
      dispatch(updateCourse(course))
    },
    onUpdateHoles: (holes) => {
      dispatch(updateHoles(holes))
    },
    onUpdateBoxChecked: (boxChecked) => {
      dispatch(updateBoxChecked(boxChecked))
    },
    onUpdateButtonClicked: (buttonClicked) => {
      dispatch(updateButtonClicked(buttonClicked))
    }
  }
}

function NewRound(props){

  const { courses, setCourse, holes, buttonClicked, boxChecked, onUpdateCourse, onUpdateHoles, onUpdateBoxChecked, onUpdateButtonClicked } = props

  const closeModal = (e) => {
    e.target.parentElement.style.visibility = "hidden";
    document.querySelector("#new-round-form").reset()
    document.querySelector(".carousel-indicators").style.visibility = "visible";
    resetRoundInputFields()
    onUpdateButtonClicked(false)
    onUpdateCourse({})
    onUpdateBoxChecked(false)
    onUpdateHoles([])
  }

  const onCourseSelect = (e) => {

    onUpdateButtonClicked(false)
    onUpdateCourse({})
    onUpdateBoxChecked(false)
    onUpdateHoles([])

    if(e.target.value !== ""){
      onUpdateCourse(courses.filter(course => course.courseName === e.target.value)[0])
    } else{
      onUpdateButtonClicked(false)
      onUpdateCourse({})
    }
  }

  const limitTo18Holes = (e) => {
    const checkboxes = Array.from(document.querySelectorAll(".check")).filter(checkbox => checkbox.checked)

    if(checkboxes.length > 2){
      checkboxes.map((checkbox) => checkbox.checked = false)
    }

    if(checkboxes.length < 2){
      onUpdateBoxChecked(false)
    }

    onUpdateHoles(checkboxes.map(checkbox => checkbox.nextSibling.textContent))
  }

  const onCheck = (e) => {
    const checkboxes = Array.from(document.querySelectorAll(".check")).filter(checkbox => checkbox.checked)

    if(e.target.checked){
      if(checkboxes.length === 2){
        onUpdateBoxChecked(true)
      } else{
        onUpdateBoxChecked(false)
      }
    }
  }

  const handleOnButtonClick = () => {
    console.log(props)
    if(setCourse){
      if(!buttonClicked){
        onUpdateButtonClicked(true)
      } else{
        onUpdateButtonClicked(false)
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
        onUpdateButtonClicked(false)
        onUpdateCourse({})
        onUpdateButtonClicked(false)
        onUpdateHoles([])
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
              {courses.map((course, i) => <option key={i}>{course.courseName}</option>)}
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
                    setCourse.holes.map((hole, i) => <div className="checkbox" key={i}><input className="check" name="checkbox" type="checkbox" onChange={limitTo18Holes} onClick={onCheck}/><label className="check-label" htmlFor="checkbox">{hole}</label></div>)
                  }
                </div>
                <div>
                  {
                    (boxChecked) ? (
                      <div>
                        {
                          holes.map((hole, i) => <ScoreCard hole={hole} par={setCourse.par[hole]} key={i}/>)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewRound);
