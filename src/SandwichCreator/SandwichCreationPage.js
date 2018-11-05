import React, { Component } from 'react';
import IngredientsSlider from './IngredientsSlider.js';

class SandwichCreationPage extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <IngredientsSlider type="breadtop"/>
        <IngredientsSlider type="meat" />
        <IngredientsSlider type="breadbot"/>
      </div>
    );
  }
}

export default SandwichCreationPage;
