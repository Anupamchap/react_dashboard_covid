import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const TotalCustomers = props => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL DECEASED
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {props.totalDeceased}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AirlineSeatFlatIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            {props.totalDeceasedPercentageChange}
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since Yesterday
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

TotalCustomers.propTypes = {
  totalDeceased: PropTypes.string,
  totalDeceasedPercentageChange: PropTypes.string
};

export default TotalCustomers;
