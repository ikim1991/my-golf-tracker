import React from 'react';
import Slide from './Slide';
import Indicators from './Indicators';

function Carousel(){
  return(
    <div className="carousel">
      <Indicators/>
      <Slide/>
      <div className="prev">&#10094;</div>
      <div className="next">&#10095;</div>
    </div>
  )
}

export default Carousel;
