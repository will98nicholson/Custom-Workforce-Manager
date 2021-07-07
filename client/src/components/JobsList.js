/*** ACTIVE / ASSIGNED JOBS MODULE -- MODULE 2 ***/

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DetailButton from '../assets/icons/view-details-color-vibrant.PNG';
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

function createData ( id, client, address ) {
    return {
        id,
        client,
        address
    };
};

export default function JobsList (props) {
    const classes = useStyles();
    const [ page, setPage ] = React.useState( 0 );
    const [ rowsPerPage, setRowsPerPage ] = React.useState( 10 );
    const [rows, setRows] = React.useState([])
    // const [ user, setUser ] = React.useState(null);

    useEffect(() => {
        API.getJobs()
            .then(res => {
               const formattedJobs = res.data.map((job) => {
                    return createData(job._id, job.client.name, job.client.location)
                })
                setRows(formattedJobs)
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
        <Paper className={classes.root} id='module2'>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table" id='jobslist'>
                    <TableHead>
                        <TableRow>
                        {/* columns headers go here if needed*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( row, i ) => {
                            console.log( row );

                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                    {columns.map( ( column ) => {
                                        const value = row[ column.id ];
                                        return (

                                            <TableCell className='white-text' key={column.id}>
                                                {column.label === "Client" ? row.client : row.address.streetAddress + ', ' + row.address.city}
                                            </TableCell>
                                        );
                                    } )}
                                    <TableCell>
                                        <Link to={'/jobdetail/'+ row.id}>
                                            <img alt='' src={DetailButton} className='detail-button' />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            );
                        } )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
