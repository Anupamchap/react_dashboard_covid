import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AccessibilityIcon from '@material-ui/icons/Accessibility';


const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  }
}));

const TotalRecovered = (props) => {
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
              TOTAL RECOVERED
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              { props.recoveredPercentage }%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AccessibilityIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={ parseInt(props.recoveredPercentage,10) }
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

TotalRecovered.propTypes = {
  recoveredPercentage: PropTypes.string,
};

export default TotalRecovered;
