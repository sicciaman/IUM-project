import React, { Component } from 'react';
import { Media } from 'reactstrap';
import '../App.css';


const Slides = ({ image}) => {
  const styles = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: '50% 60%',

  }

  return (
    <Media className="slides" object src={image} width={200} height={200} alt="Generic placeholder image" />

    /*<div className='slides' style={styles} fluid>

    </div>*/
  );
}

export default Slides;
