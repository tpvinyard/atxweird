import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    NavLink
  } from "react-router-dom";
import WhyWeird from "./WhyWeird";
import KeepItWeird from "./KeepItWeird";
import Message from "./Message"
import styled from 'styled-components'

function Copyright() {
  return (
    <Typography variant="body2" style={{color: '#F5F5F5'}} align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const NavUnlisted = styled.nav`

  display: flex;

  a {
    text-decoration: none;
    color: black;
    margin: 0 10px 0 10px;
    font-size: 16px;
  }

  .current {
      border-bottom: 1px solid black;
  }
`

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  mainSection: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#d20f1f'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  footer: {
    marginTop: 'auto',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.mainSection}>
        <CssBaseline />
        <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <NavUnlisted>
                <NavLink activeClassName="current" exact to="/">
                    Weird?
                </NavLink>
                <NavLink activeClassName="current" exact to="/keep-it-weird">
                    Keep It Weird
                </NavLink>
            </NavUnlisted>
            </Toolbar>
        </AppBar>
        {/* Hero unit */}
        <Container maxWidth="md" component="main">
            {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
            */}
            <Switch>
                <Route exact path="/">
                    <Message />
                </Route>
                <Route path="/keep-it-weird">
                    <KeepItWeird />
                </Route>
            </Switch>
        </Container>
        {/* Footer */}
        <Container component="footer" className={classes.footer}>
            <Box mt={2} mb={2}>
                <Copyright />
            </Box>
        </Container>
        {/* End footer */}
      </div>
    </Router>
  );
}