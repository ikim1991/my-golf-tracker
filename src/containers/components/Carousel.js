import React from 'react';
import Slide from './Slide';
import Indicators from './Indicators';
import AddCourse from './AddCourse';
import NewRound from './NewRound';
import AnalyticsBar from './AnalyticsBar';
import AnalyticsLine from './AnalyticsLine';
import AnalyticsScoreCard from './AnalyticsScoreCard';
import { connect } from 'react-redux';
import { updateSlide } from './../../actions';

const mapStateToProps = (state) => {
  return{
    slide: state.updateSlideNumber.slide
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUpdateSlide: (slide) => {
      dispatch(updateSlide(slide))
    }
  }
}

function Carousel(props){

  const { slide, onUpdateSlide } = props

  const onNext = (e) => {
    const newSlide = (slide + parseInt(e.target.getAttribute("value")))

    if(newSlide > 3){
      return
    } else{
      onUpdateSlide(newSlide)
    }

    console.log(slide)
  }

  const onPrev = (e) => {
    const newSlide = (slide + parseInt(e.target.getAttribute("value")))

    if(newSlide < 1){
      return
    } else{
      onUpdateSlide(newSlide)
    }

    console.log(slide)
  }

  const renderSwitch = () => {
    switch(slide){
      case 1:
        return(
          <AnalyticsLine/>
        )
      case 2:
        return(
          <AnalyticsBar/>
        )
      case 3:
        return(
          <AnalyticsScoreCard/>
        )
      default:
        return(
          <AnalyticsBar/>
        )
    }
  }

  return(
    <div className="carousel">
      <AddCourse/>
      <NewRound/>
      {renderSwitch()}
      <Indicators/>
      <Slide/>
      <div className="prev" value="-1" onClick={onPrev}>&#10094;</div>
      <div className="next" value="1" onClick={onNext}>&#10095;</div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
