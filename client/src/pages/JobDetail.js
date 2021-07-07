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
// import MenuToolbar from '../components/MenuToolbar';
import Copyright from '../components/Copyright';
import JobsForm from '../components/JobsForm';
import ClockIn from '../components/ClockIn';
import DetailInfo from '../components/DetailInfo';
import ServiceTable from '../components/ServiceTable';
import moment from 'moment';

import API from '../utils/API'
import axios from 'axios';

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
}));


// EMP JOB DETAIL: development //
export default function JobDetail(props) {
    const classes = useStyles();
    const [object, setObject] = React.useState({})

    //hook to access specific job
    const { id } = useParams();
    const time = moment().format('h:mm:ss a');

    useEffect(() => {
        API.getJobById(id)
            .then(res => setObject(res.data))
    }, [])
    //NOTES: links in menu are not hidden for employee from job details page
    //       passed props.linkHidden in menu toolbar - not sure if useState would help
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put("/api/jobs/" + id, {
            completed: true,
        });
      }

    
    return (
        <div className={classes.root} id='job-detail-page'>
            <CssBaseline />
            {/* <MenuToolbar linkHidden={props.linkHidden }/> */}
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Paper className={classes.paper}>
                        {/* props.rows.map[1] :: try to get customer name */}
                        <Typography variant='h5'>Job Detail</Typography>
                        <p className="App-clock">The time is {time}</p>
                        < ClockIn />
                        {/* <EmpJob */}
                        {/* <DetailInfo id={id} /> */}
                        <JobsForm />
                        {console.log(object.client)}
                        {/*  {...props} job={object} */}
                        {/* <ServiceTable /> */}
                        <ServiceTable />
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Mark Job Complete</Button>
                    </Paper>
                    <Copyright />
                </Container>
            </main>
        </div >
    );
}