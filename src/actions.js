export const initializingUserInfo = () => (dispatch) => {
  dispatch({type: "GET_PENDING"})
  fetch("http://localhost:3001", {
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => dispatch({ type: "GET_SUCCESS", payload: data}))
  .catch(error => dispatch({ type: "GET_ERROR", payload: error}))
}


export const updateCourse = (course => ({type: "SET_COURSE", payload: course}))
export const updateHoles = (holes => ({type: "SET_HOLES", payload: holes}))
export const updateButtonClicked = (buttonClicked => ({type: "BUTTON_CLICKED", payload: buttonClicked}))
export const updateBoxChecked = (boxChecked => ({type: "BOX_CHECKED", payload: boxChecked}))
