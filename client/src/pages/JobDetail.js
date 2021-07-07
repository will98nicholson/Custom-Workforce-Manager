import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
    Paper,
    Typography,
    Button
} from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import Copyright from '../components/Copyright';
import JobsForm from '../components/JobsForm';
import ClockIn from '../components/ClockIn';
import ServiceTable from '../components/ServiceTable';
import moment from 'moment';
import API from '../utils/API'

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
        margin: theme.spacing(2),
        width: '7rem'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
} ) );

export default function JobDetail(props) {
    const classes = useStyles();
    const [object, setObject] = React.useState({})

    //hook to access specific job
    const { id } = useParams();
    const time = moment().format('h:mm a');

    useEffect(() => {
        API.getJobById(id)
            .then(res => setObject(res.data))
    }, [])

    return (
        <div className={classes.root} id='job-detail-page'>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Job Detail</Typography>
                        <p className="App-clock">The time is {time}</p>
                        < ClockIn />
                        <JobsForm id={id} {...props} job={object} />
                        <ServiceTable />
                    </Paper>
                    <Copyright />
                </Container>
            </main>
        </div >
    );
};
