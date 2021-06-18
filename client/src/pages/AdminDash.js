import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Container} from '@material-ui/core';

import MenuToolbar from '../components/MenuToolbar';

const drawerWidth = 240;

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
}));

export default function AdminDash() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuToolbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                </Container>
            </main>
        </div>
    );
}
