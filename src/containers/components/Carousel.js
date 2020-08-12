import React from 'react';
import Slide from './Slide';
import Indicators from './Indicators';
import AddCourse from './AddCourse';
import NewRound from './NewRound';

function Carousel(){
  return(
    <div className="carousel">
      <AddCourse/>
      <NewRound/>
      <Indicators/>
      <Slide/>
      <div className="prev">&#10094;</div>
      <div className="next">&#10095;</div>
    </div>
  )
}

export default Carousel;
