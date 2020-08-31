import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Page from 'src/components/Page';
import { action } from 'src/store';
import { useNavigate } from 'react-router-dom';
import TotalConfirmed from './TotalConfirmed';
import Trends from './Trends';
import TotalRecovered from './TotalRecovered';
import TotalDeceased from './TotalDeceased';
import TotalActive from './TotalActive';
import CompletePicture from './CompletePicture';
import * as actionTypes from '../../../constants/actionTypes';

// import { store } from '../../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const totalData = useSelector((state) => state.timeSeriesData.totalData);
  const timeSeries = useSelector((state) => state.timeSeriesData.timeSeries);
  const errors = useSelector((state) => state.timeSeriesData.errors);

  useEffect(() => {
    action(actionTypes.GET_TIMESERIES_DATA);
    // action(actionTypes.GET_STATEWISE_DATA);
  }, []);

  useEffect(() => {
    if (errors.length) {
      console.log('error');
      navigate('*', { replace: true });
    }
  }, [totalData, timeSeries, errors, navigate]);

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      {totalData
            && (
            <Container maxWidth={false}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <TotalConfirmed
                    totalConfirmed={totalData.totalConfirmed}
                    totalConfirmedPercentageChange={totalData.totalConfirmedPercentageChange}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <TotalDeceased
                    totalDeceased={totalData.totalDeceased}
                    totalDeceasedPercentageChange={totalData.totalDeceasedPercentageChange}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <TotalRecovered
                    recoveredPercentage={totalData.recoveredPercentage}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <TotalActive
                    totalActive={totalData.totalActive}
                    activePercentage={totalData.activePercentage}
                  />
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
                >
                  <Trends timeSeries={timeSeries} />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
                >
                  <CompletePicture
                    totalDeceased={totalData.totalDeceased}
                    totalActive={totalData.totalActive}
                    totalRecovered={totalData.totalRecovered}
                    deceasedPercentage={totalData.deceasedPercentage}
                    activePercentage={totalData.activePercentage}
                    recoveredPercentage={totalData.recoveredPercentage}
                  />
                </Grid>
              </Grid>
            </Container>
            )}
    </Page>
  );
};

export default Dashboard;
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
