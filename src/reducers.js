const initialStateUserInfo = {
  user: {
    username: "",
    seasons: [{
      season: "",
      handicap: "-",
      lowest: "-",
      average: "-",
      highest: "-",
      rounds: "-",
      courses: "-",
    }]
  },
  courses: [{
    courseName: "",
    totalHoles: 0,
    holes: [],
    par:{},
    rating: 0,
    slope: 0
  }],
  isPending: false,
  error: ""
}

export const initializeUserInfo = (state = initialStateUserInfo, action={}) => {
  switch(action.type){
    case "GET_PENDING":
      return Object.assign({}, state, {isPending: true})
    case "GET_SUCCESS":
      return Object.assign({}, state, {user: action.payload.user, courses: action.payload.courses, isPending: false})
    case "GET_ERROR":
      return Object.assign({}, state, {error: action.payload, isPending: false})
    default:
      return state
  }
}

const initialNewRoundState = {
  setCourse: {},
  holes: [],
  buttonClicked: false,
  boxChecked: false
}

export const updateNewRoundState = (state = initialNewRoundState, action={}) => {
  switch(action.type){
    case "SET_COURSE":
      return Object.assign({}, state, { setCourse: action.payload })
    case "SET_HOLES":
      return Object.assign({}, state, { holes: action.payload })
    case "BUTTON_CLICKED":
      return Object.assign({}, state, { buttonClicked: action.payload })
    case "BOX_CHECKED":
      return Object.assign({}, state, { boxChecked: action.payload })
    default:
      return state
  }
}

const initialInputYearState = {
  year: (new Date().getFullYear())
}

export const updateInputDate = (state = initialInputYearState, action={}) => {
  switch(action.type){
    case "CHANGE_DATE":
      return Object.assign({}, state, { year: action.payload })
    default:
      return state
  }
}
