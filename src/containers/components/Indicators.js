import React from 'react';
import { connect } from 'react-redux';
import { updateSlide } from './../../actions';

const mapStateToProps = (state) => {
  return{
    slide: state.updateSlideNumber.slide,
    slides: state.updateSlideNumber.slides
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onUpdateSlide: (e) => {
      const slideNumber = parseInt(e.target.getAttribute("value"))
      dispatch(updateSlide(slideNumber))
    }
  }
}

function Indicators(props){

  const { onUpdateSlide, slides, slide } = props

  return(
    <ol className="carousel-indicators">
      {
        slides.map(sl => {
          if(sl === slide){
            return(<li className="active" value={sl} key={sl} onClick={onUpdateSlide}></li>)
          } else{
            return(<li value={sl} key={sl} onClick={onUpdateSlide}></li>)
          }
        })
      }
    </ol>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Indicators);
