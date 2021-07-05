import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Typography,
    Paper,
    // Button
} from '@material-ui/core';
// import { Link } from 'react-router-dom';
import MenuToolbar from '../components/MenuToolbar';
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
export default function Crews(props) {
    console.log(props);
    const classes = useStyles();
    const crews = ["Crew #1", "Crew #2", "Crew #3", "Crew #4", "Unassigned Jobs"];

    const crewLists = crews.map( crew => (<>
        <Typography variant='h5'>{crew}</Typography>
        {/* <List crew={crew}/> */}
    </>
    ))

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuToolbar className="topToolbar" />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container} >
                {/* <Link to='/createjob'>
                    <Button variant="contained" color="primary">
                        Create New Job
                    </Button>
                </Link> */}

                {/* ""} */}
                {/* Active Jobs */}
                {/* <Button variant="contained" color="primary" onClick={() => { window.location.replace('/createjob') }}>
                    Create New Job
                </Button> */}



                    <Paper className={classes.paper} id='module3'>
                        {crewLists}
                    </Paper>

                    <Copyright />
                </Container>
            </main>
        </div>
    );
};
