import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, CssBaseline,List,ListItem,ListItemText,ListItemIcon } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import { Table } from './Table';
import {Paper,Typography} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  sidebar:{
    position:"fixed",
    left:0,
    top:0,
    width:"10%",
    height: "100%",
    borderRadius:0,
  },
  
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper component={Box} boxShadow={4} className={classes.sidebar}>
        <List>
        <ListItem button>
          <ListItemIcon>
          <AccountCircleIcon />
              
          </ListItemIcon>
            <ListItemText primary="Getting Started"/>
        </ListItem>
          <ListItem button>
            <ListItemIcon>
            <AccountCircleIcon />

            </ListItemIcon>
            <ListItemText primary="Getting Started"/>
          </ListItem>
          <ListItem button>
          <ListItemIcon>
          <AccountCircleIcon />

          </ListItemIcon>
            <ListItemText primary="Getting Started"/>
          </ListItem>
          <ListItem button>
          <ListItemIcon>
          <AccountCircleIcon />
              
          </ListItemIcon>
            <ListItemText primary="Getting Started"/>
          </ListItem>
        </List>
      </Paper>
      <CssBaseline />
      <Header />
      <Table/>
      <PlaceToVisit />
    </Container>
  );
}
