import React from 'react';
import Indicators from './Indicators';
import AddCourse from './AddCourse';
import NewRound from './NewRound';
import AnalyticsBar from './AnalyticsBar';
import AnalyticsLine from './AnalyticsLine';
import AnalyticsScoreCard from './AnalyticsScoreCard';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { updateSlide } from './../../actions';

const mapStateToProps = (state) => {
  return{
    slide: state.updateSlideNumber.slide,
    isPending: state.initializeUserInfo.isPending
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

  const { slide, onUpdateSlide, isPending } = props

  const onNext = (e) => {
    const newSlide = (slide + parseInt(e.target.getAttribute("value")))

    if(newSlide > 3){
      return
    } else{
      onUpdateSlide(newSlide)
    }
  }

  const onPrev = (e) => {
    const newSlide = (slide + parseInt(e.target.getAttribute("value")))

    if(newSlide < 1){
      return
    } else{
      onUpdateSlide(newSlide)
    }
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

  if(isPending){
    return(
      <div className='loader-spinner'>
        <Loader
         type="Audio"
         color="#28a745"
         height={100}
         width={100}
       />
       <div className="text-success">May Take a Few Seconds to Load...</div>
      </div>
    )
  }else{
    return(
      <div className="carousel">
        <AddCourse/>
        <NewRound/>
        {renderSwitch()}
        <Indicators/>
        <div className="prev" value="-1" onClick={onPrev}>&#10094;</div>
        <div className="next" value="1" onClick={onNext}>&#10095;</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
