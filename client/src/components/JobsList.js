import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    // Box,
    // Collapse,
    // IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    // Typography,
    Paper,
    TablePagination,
    // Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { KeyboardArrowDown, KeyboardArrowUp, Edit } from '@material-ui/icons';
import DetailButton from '../assets/icons/view-details-color-vibrant.PNG';
// import JobDetail from '../pages/JobDetail';
// import EmpJobDetail from '../pages/EmpJobDetail';
import API from '../utils/API';

const columns = [
    { id: 'client', label: 'Client', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 170 }
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 400,
  },
});


const getAssignedJob = API.getJobByUser().then( response => {
    console.log(response.data)
} );
// get username from who's logged in - maybe from session
// connect crews and users in database

function createData ( id, client, address ) {
    return {
        id,
        client,
        address
    };
};

// const rows = [
//     createData( 26, "Cafe Istanbul", "123 Riverside Dr"),
//     createData( 88, "Mill Creek Cemetery", "456 Cemetary Rd"),
//     createData( 31, "Dublin Golf Club", "789 Dublic Rd")
// ];

export default function JobsList (props) {
    const classes = useStyles();
    const [ page, setPage ] = React.useState( 0 );
    const [ rowsPerPage, setRowsPerPage ] = React.useState( 10 );
    const [rows, setRows] = React.useState([])
    // const [ user, setUser ] = React.useState(null);

    useEffect(() => {
        debugger
        API.getJobs()
            .then(res => {
               const formattedJobs = res.data.map((job) => {
                    return createData(job._id, job.client.name, job.client.location)
                })
                setRows(formattedJobs)
                // console.log(formattedJobs)
            })
    }, [])

    const handleChangePage = ( event, newPage ) => {
        setPage( newPage );
    };

    const handleChangeRowsPerPage = ( event ) => {
        setRowsPerPage( +event.target.value );
        setPage( 0 );
    };

    return (
        <Paper className={classes.root} id='jobslist'>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {/* extra row - columns headers go here if needed*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( row, i ) => {
                            console.log( row );

                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                    {columns.map( ( column ) => {
                                        const value = row[ column.id ];
                                        // console.log( value ); // TESTING
                                        return (

                                            // <TableCell className='white-text' key={column.id} align={column.align}>
                                            //     {column.format && typeof value === 'number' ? column.format( value ) : value}
                                            // </TableCell>
                                            <TableCell className='white-text' key={column.id}>
                                                {column.label === "Client" ? row.client : row.address.streetAdress}
                                            </TableCell>

                                        );
                                    } )}
                                    <TableCell>
                                        <Link to={'/jobdetail/'+ row.id}>
                                            {/* {props.type === "Administrator" ? <JobDetail /> : <EmpJobDetail />} */}
                                        {/* <Link to='/empjobdetail'> */}
                                            {/* <Button variant="contained" color="primary"> */}
                                                <img alt='' src={DetailButton} className='detail-button' />
                                            {/* </Button> */}
                                            {/*TODO: pass props through detail button to render different buttons and form editing functionality */}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            );
                        } )}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination className='white-text'
                rowsPerPageOptions={[ 10, 25, 100 ]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
        </Paper>
    );
}



// function Row(props) {
//     const { row } = props;
//     const [open, setOpen] = React.useState(false);
//     const classes = useRowStyles();

//     return (
//         <React.Fragment>
//             <TableRow className={classes.root}>
//                 <TableCell>
//                     <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
//                         {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
//                     </IconButton>
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                     {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.crew}</TableCell>
//                 <TableCell align="right">{row.jobnumber}</TableCell>
//                 <TableCell component="th" scope="row">
//                     <IconButton aria-label='edit job' size='small' onClick={() => { window.location.replace('/editjob') }}>
//                         <Edit />
//                     </IconButton>
//                 </TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                     <Collapse in={open} timeout="auto" unmountOnExit>
//                         <Box margin={1}>
//                             <Typography variant="h6" gutterBottom component="div">
//                                 Job Details
//                             </Typography>
//                             <Table size="small" aria-label="job details">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Date</TableCell>
//                                         <TableCell>Crew</TableCell>
//                                         <TableCell align="right">Service</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {row.description.map((descriptionRow) => (
//                                         <TableRow key={descriptionRow.date}>
//                                             <TableCell component="th" scope="row">
//                                                 {descriptionRow.date}
//                                             </TableCell>
//                                             <TableCell>{descriptionRow.crew}</TableCell>
//                                             <TableCell align="right">{descriptionRow.service}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </Box>
//                     </Collapse>
//                 </TableCell>
//             </TableRow>
//         </React.Fragment>
//     );
// }

// Row.propTypes = {
//     row: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         jobnumber: PropTypes.number.isRequired,
//         description: PropTypes.arrayOf(
//             PropTypes.shape({
//                 task: PropTypes.string.isRequired,
//                 crew: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//     }).isRequired,
// };

// export default function ActiveJobsList() {
//     return (
//         <TableContainer component={Paper}>
//             <Table aria-label="active jobs">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell />
//                         <TableCell>Client</TableCell>
//                         {/* <TableCell /> */}
//                         <TableCell>Address</TableCell>
//                         <TableCell align="right">Details</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <Row key={row.name} row={row} />
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }
