import React, { Component } from 'react';
import arrowLeft from './images/glyphicons-211-arrow-left.png';

const LeftArrow = (props) => {
  return (
    <div className="leftArrow arrow">
      <img src={arrowLeft} alt="Arrow Left" onClick={props.prevSlide}/>
    </div>
  );
}

export default LeftArrow;
