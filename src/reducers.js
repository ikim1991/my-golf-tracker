const initialStateUserInfo = {
  user: {
    username: "N/A",
    seasons: [{
      season: "N/A",
      handicap: "N/A",
      lowest: "N/A",
      average: "N/A",
      highest: "N/A",
      rounds: "N/A",
      courses: "N/A",
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
    case "POST_SUCCESS":
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
      return Object.assign({}, state, { year: action.payload.year })
    default:
      return state
  }
}

const initialSlideState = {
  slide: 1,
  slides: [1,2,3]
}

export const updateSlideNumber = (state = initialSlideState, action={}) => {
  switch(action.type){
    case "CHANGE_SLIDE":
      return Object.assign({}, state, { slide: action.payload })
    default:
      return state
  }
}

const initialScoreCountState = {
  scoreCount: {
    "eagle": 0,
    "birdie": 0,
    "par": 0,
    "bogey": 0,
    "double": 0,
    "triple": 0,
    "quad": 0
  }
}

export const updateScoreCount = (state = initialScoreCountState, action={}) => {
  switch(action.type){
    case "CHANGE_SCORE_COUNT":
      return Object.assign({}, state, { scoreCount: action.payload.scoreCount })
    default:
      return state
  }
}

const initialLinePlotState = {
  linePlot: {
    yAxis: [],
    xAxis: []
  }
}

export const updateLinePlotState = (state = initialLinePlotState, action = {}) => {
  switch(action.type){
    case "CHANGE_LINE_PLOT_STATE":
      return Object.assign({}, state, { linePlot: action.payload.linePlot })
    default:
      return state
  }
}

const initialScorecardState = {
  scorecard: [[ (new Date()).toLocaleDateString(), "GOLF COURSE", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]],
}

export const updateScorecardState = (state = initialScorecardState, action = {}) =>{
  switch(action.type){
    case "CHANGE_SCORECARD_STATE":
      return Object.assign({}, state, { scorecard: action.payload.scorecard })
    default:
      return state
  }
}
