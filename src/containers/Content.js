import React from 'react';
import Carousel from './components/Carousel';
import LargeModal from './components/LargeModal';

import './css/Content.css';

function Content(){
  return(
    <div className="content bg-light border-dark">
      <LargeModal/>
      <Carousel/>
    </div>
  )
}

export default Content;
