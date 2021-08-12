import React from 'react';
import { Typography, AppBar } from '@material-ui/core'
import { VideoPlayer } from './components/VideoPlayer';
import { Options } from './components/Options';
import { Notifications } from './components/Notifications';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      opacity: '0.8',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

export const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h3" align="center">Video Chat por Xavier Ortega</Typography>
            </AppBar>
            <VideoPlayer/>
            <Options>
                <Notifications/>
            </Options>
        </div>
    )
}
