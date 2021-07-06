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
}));


// function handleSubmit () {
//     console.log( 'submit' );
// }


// ORIG JOB DETAIL //

// export default function JobDetail () {
//     const classes = useStyles();
//     return (
//         <div className={classes.root} id='job-detail-page'>
//             <CssBaseline />
//             <MenuToolbar />
//             <main className={classes.content}>
//                 <div className={classes.appBarSpacer} />
//                 <Container maxWidth="lg" className={classes.container}>
//                     <Paper className={classes.paper}>
//                         <Typography variant='h5'>Job Detail</Typography>
//                         <JobsForm />
//                         <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//                     </Paper>
//                     <Copyright />
//                 </Container>
//             </main>
//         </div >
//     );
// };

// add assigned crew text area


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
                        <JobsForm id={id} {...props} job={object}/>
                        {/* <ServiceTable /> */}
                        <ServiceTable />
                    </Paper>
                    <Copyright />
                </Container>
            </main>
        </div >
    );
};
