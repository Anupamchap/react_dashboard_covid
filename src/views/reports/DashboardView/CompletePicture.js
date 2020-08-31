import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const CompletePicture = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [props.totalDeceased, props.totalActive, props.totalRecovered],
        backgroundColor: [
          colors.red[500],
          colors.orange[600],
          colors.green[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Deceased', 'Active', 'Recovered']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = [
    {
      title: 'Recovered',
      value: props.recoveredPercentage,
      icon: AccessibilityIcon,
      color: colors.green[500]
    },
    {
      title: 'Deceased',
      value: props.deceasedPercentage,
      icon: AirlineSeatFlatIcon,
      color: colors.red[600]
    },
    {
      title: 'Active',
      value: props.activePercentage,
      icon: AddBoxIcon,
      color: colors.yellow[600]
    }
  ];

  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardHeader title="Complete Picture" />
      <Divider />
      <CardContent>
        <Box
          height={300}
          position="relative"
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              p={1}
              textAlign="center"
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

CompletePicture.propTypes = {
  totalRecovered: PropTypes.string,
  totalActive: PropTypes.string,
  totalDeceased: PropTypes.string,
};

export default CompletePicture;
