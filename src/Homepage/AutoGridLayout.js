import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomCard from './CustomCard.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AutoGridLayout(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs>
          <CustomCard className={classes.paper}/>
        </Grid>
        <Grid item xs>
          <CustomCard />
        </Grid>
      </Grid>
    </div>
  );
}

AutoGridLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridLayout);
