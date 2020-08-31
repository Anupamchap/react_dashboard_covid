import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Select
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Trends = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = React.useState({
    days: '7',
    parameter: 'totalconfirmed',
    datasets: [],
    data: {
      datasets: [],
      labels: []
    }
  });

  useEffect(() => {
    const ds = Object.entries(props.timeSeries)
      .splice(0, state.days)
      .map((t) => parseInt(t[1][state.parameter], 10));
    const ls = Object.entries(props.timeSeries)
      .splice(0, 7)
      .map((t) => new Date(t[1].date.seconds * 1000)
        .toUTCString()
        .split(' ')
        .slice(1, 3)
        .join(' '));
    setState({
      ...state,
      data: { datasets: ds.reverse(), labels: ls.reverse() }
    });
  }, []);

  const handleChange = (event) => {
    const { name } = event.target;
    let ds;
    let ls;
    if (name === 'days') {
      ds = Object.entries(props.timeSeries)
        .splice(0, event.target.value)
        .map((t) => parseInt(t[1][state.parameter], 10));
      ls = Object.entries(props.timeSeries)
        .splice(0, event.target.value)
        .map((t) => new Date(t[1].date.seconds * 1000)
          .toUTCString()
          .split(' ')
          .slice(1, 3)
          .join(' '));
    } else if (name === 'parameter') {
      ds = Object.entries(props.timeSeries)
        .splice(0, state.days)
        .map((t) => parseInt(t[1][event.target.value], 10));
      ls = Object.entries(props.timeSeries)
        .splice(0, state.days)
        .map((t) => new Date(t[1].date.seconds * 1000)
          .toUTCString()
          .split(' ')
          .slice(1, 3)
          .join(' '));
    }
    setState({
      ...state,
      [name]: event.target.value,
      data: { datasets: ds.reverse(), labels: ls.reverse() }
    });
  };

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: state.data.datasets,
        label: 'Number of Cases'
      }
    ],
    labels: state.data.labels
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card className={clsx(classes.root)}>
      <CardHeader
        action={(
          <div>
            <Select
              native
              value={state.days}
              onChange={handleChange}
              inputProps={{
                name: 'days',
                id: 'days-native-simple'
              }}
            >
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
              <option value={100}>Last 100 days</option>
            </Select>
            <span> </span>
            <Select
              native
              value={state.parameter}
              onChange={handleChange}
              inputProps={{
                name: 'parameter',
                id: 'parameter-native-simple'
              }}
            >
              <option value="dailyconfirmed">Daily Confirmed Cases</option>
              <option value="dailydeceased">Daily Deceased Cases</option>
              <option value="dailyrecovered">Daily Recovered Cases</option>
              <option value="totalconfirmed">Total Confirmed Cases</option>
              <option value="totaldeceased">Total Deceased Cases</option>
              <option value="totalrecovered">Total Recovered Cases</option>
            </Select>
          </div>
        )}
        title="Trends"
      />
      <Divider />
      <CardContent>
        <Box height={400} position="relative">
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

Trends.propTypes = {
  timeSeries: PropTypes.object
};

export default Trends;
