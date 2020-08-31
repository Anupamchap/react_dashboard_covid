import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Box,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  makeStyles,
  colors
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const TotalActive = (props) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL ACTIVE
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              { props.totalActive }
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AddBoxIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={ parseInt(props.activePercentage,10) }
            variant="determinate"
          />
        </Box>
      
      </CardContent>
    </Card>
  );
};

TotalActive.propTypes = {
  totalActive: PropTypes.string,
  activePercentage: PropTypes.string
};

export default TotalActive;
