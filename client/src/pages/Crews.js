import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper,
    // Button,
    Grid
} from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import List from '../components/Crews/List'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        margin: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

export default function Crews() {
    const classes = useStyles();
    const crews = ["Crew #1", "Crew #2", "Crew #3", "Crew #4"];

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* <MenuToolbar className="topToolbar" /> */}
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className={"crewListWrapper"}>
                    { crews.map( (crew, i) => (
                        <List crew={crew} key={i} />
                    ))}
                </div>
                <div className={"unassigned-Wrapper"}>
                    <List crew={"Unassigned Jobs"} /> 
                </div>
                <Copyright />
            </main>
        </div>
    );
};
