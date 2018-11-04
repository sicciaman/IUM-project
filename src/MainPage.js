import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import  Button from '@material-ui/core/Button';
import  Typography from '@material-ui/core/Typography';
import SandwichCreationPage from './SandwichCreationPage.js';
import CustomCard from './CustomCard.js';
import AutoGridLayout from './AutoGridLayout.js';


const MainPage = () => {
  return (
    <div>
      <div className="content">
       <Typography variant="h2" gutterBottom>Sit 'n Eat</Typography>
       <Typography variant="body5" gutterBottom>
         Benvenuti nel primo fast food fully customizable.
         Inserisci una descrizione più lunga altrimenti è una merda
         Inserisci una descrizione più lunga altrimenti è una merda
         Inserisci una descrizione più lunga altrimenti è una merda
         Inserisci una descrizione più lunga altrimenti è una merda
         Inserisci una descrizione più lunga altrimenti è una merda
       </Typography>
      </div>
      <div className="">
        <AutoGridLayout />
      </div>
    </div>
  );
}

export default MainPage;
