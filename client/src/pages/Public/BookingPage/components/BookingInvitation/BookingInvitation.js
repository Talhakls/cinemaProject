import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Paper } from '../../../../../components';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  paper: { padding: theme.spacing(4) },
  gridContainer: {
    marginTop: theme.spacing(4)
  },
  successInfo: { margin: theme.spacing(3) },
  ignoreButton: {
    marginLeft: theme.spacing(3)
  }
}));

export default function BookingInvitation(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">
          Bilet Alındı
        </Typography>
        <Typography
          className={classes.successInfo}
          variant="body1"
          align="center">
          Sinemamızı tercih ettiğiniz için teşekkür ederiz. İyi seyirler dileriz.
        </Typography>
      </Paper>
    </div>
  );
}
