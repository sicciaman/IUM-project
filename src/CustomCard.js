import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FastFoodImg from './images/FastFood.png';
import { Link } from 'react-router-dom';
import './App.css';

const styles = {
  card: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },

  buttonCenter: {
    background: '#000'
  }
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          //height="140"
          image={FastFoodImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Crea il tuo panino
          </Typography>
          <Typography component="p">
            Inizia a creare il tuo panino! Aggiungi testo sample fuffa Aggiungi testo sample fuffa Aggiungi testo sample fuffa Aggiungi testo sample fuffa Aggiungi testo sample fuffa Aggiungi testo sample fuffa
          </Typography>
        </CardContent>
        <Link to="/SandwichCreationPage" style={{textDecoration: "none"}}>
        <CardActionArea className="cardButton" style={{width: '100%', background: 'Tomato'}} >
      <CardActions style={{justifyContent: 'center'}}>

        <Typography style={{color: 'white', textDecoration: 'none'}} component="p" variant="body-1">
          Inizia a creare
        </Typography>

      </CardActions>
    </CardActionArea>
    </Link>
    </Card>
  </React.Fragment>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
