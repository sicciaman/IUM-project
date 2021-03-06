import React, { Component } from 'react';
import Slides from './Slides.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';

import ham1 from '../images/Hamburger1.svg';
import ham2 from '../images/Hamburger2.svg';
import ham3 from '../images/Hamburger3.svg';

import breadtop1 from '../images/BreadTop.svg';
import toast from '../images/Toast.svg';
import breadbot1 from '../images/BreadBottom.svg';

import '../App.css';
import './ingredientsSlider.css';

import PropTypes from 'prop-types';

class IngredientsSlider extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentIndex: 0,
			translateValue: 0,
			meat: [{
				"name": "Hamburger di Cavallo",
				"image": ham1
			},{
				"name": "Hamburger di Manzo",
				"image": ham2
			},{
				"name": "Hamburger di Soia",
				"image": ham3
			}],

      breadtop: [{
				"name": "Panino",
				"image": breadtop1
			},{
				"name": "Toast",
				"image": toast
			}],

			breadbot: [{
				"name": "Panino",
				"image": breadbot1
			},{
				"name": "Toast",
				"image": toast
			}],

      other: [{}],
			ingredient: [{}]
		};
	}



	prevSlide = () => {
		if(this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
	}

	nextSlide = () => {
		if(this.state.currentIndex === this.state.ingredient.length - 1){
			return this.setState({
					currentIndex: 0,
					translateValue: 0
			})
		}
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -(this.slideWidth())
		}));
	}

	slideWidth = () => {
		return document.querySelector('.slides').clientWidth
	}

	render() {

    switch (this.props.type) {
      case ("breadtop"):
        this.state.ingredient = [...this.state.breadtop];break;
			case ("breadbot"):
        this.state.ingredient = [...this.state.breadbot];break;
      case ("meat"):
        this.state.ingredient = [...this.state.meat];break;
      case("other"):
        this.state.ingredient = [...this.state.other];break;
      default:
        this.state.ingredient = [{}];
    }

		return (
			<div className="ingredientsSlider content" >
				<LeftArrow prevSlide = {this.prevSlide}/>
				<div className="sliderWrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.5s'
					}}>
					<div>
		      {
		        this.state.ingredient.map((item, i) => {
		          return(
		            <Slides image={item.image} key={i} />
		          )
		        })
		      }
		      </div>
				</div>
				<p className="ingredient-label">{this.state.ingredient[this.state.currentIndex].name}</p>

				<RightArrow nextSlide = {this.nextSlide}/>

			</div>
		);
	}
}

IngredientsSlider.propTypes ={
  type: PropTypes.string.isRequired
};

export default IngredientsSlider;
