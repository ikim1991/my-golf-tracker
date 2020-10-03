export const initializingUserInfo = () => (dispatch) => {
  dispatch({type: "GET_PENDING"})
  fetch(process.env.REACT_APP_BACKEND_URL || "https://ikim91-golf-tracker-api.herokuapp.com", {
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    dispatch({ type: "GET_SUCCESS", payload: data})
    dispatch({type: "CHANGE_DATE", payload: data})
    dispatch({type: "CHANGE_SCORE_COUNT", payload: data})
    dispatch({type: "CHANGE_LINE_PLOT_STATE", payload: data})
    dispatch({type: "CHANGE_SCORECARD_STATE", payload: data})
  })
  .catch(error => dispatch({ type: "GET_ERROR", payload: error}))
}

export const updateInputYear = (user, year) => (dispatch) => {
  dispatch({type: "GET_PENDING"})
  fetch(`${process.env.REACT_APP_BACKEND_URL || "https://ikim91-golf-tracker-api.herokuapp.com"}/season`, {
    method: 'post',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ user, year })
  })
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    dispatch({type: "GET_SUCCESS", payload: data})
    dispatch({type: "CHANGE_DATE", payload: data})
    dispatch({type: "CHANGE_SCORE_COUNT", payload: data})
    dispatch({type: "CHANGE_LINE_PLOT_STATE", payload: data})
    dispatch({type: "CHANGE_SCORECARD_STATE", payload: data})
  })
  .catch(error => dispatch({ type: "GET_ERROR", payload: error}))
}

export const updateCourse = (course => ({type: "SET_COURSE", payload: course}))
export const updateHoles = (holes => ({type: "SET_HOLES", payload: holes}))
export const updateButtonClicked = (buttonClicked => ({type: "BUTTON_CLICKED", payload: buttonClicked}))
export const updateBoxChecked = (boxChecked => ({type: "BOX_CHECKED", payload: boxChecked}))

export const updateSlide = (slide => ({type: "CHANGE_SLIDE", payload: slide}))

export const updateCount = (scoreCount => ({type: "CHANGE_SCORE_COUNT", payload: scoreCount}))

export const updateLinePlot = (linePlot => ({type: "CHANGE_LINE_PLOT_STATE", payload: linePlot}))

export const updateScorecard = (scorecard => ({type: "CHANGE_SCORECARD_STATE", payload: scorecard}))
