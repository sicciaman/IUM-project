import React, { Component } from 'react';
import arrowRight from './images/glyphicons-212-arrow-right.png';

const RightArrow = (props) => {
  return (
    <div className="rightArrow arrow">
      <img src={arrowRight} alt="Arrow Right" onClick={props.nextSlide}/>
    </div>
  );
}

export default RightArrow;
