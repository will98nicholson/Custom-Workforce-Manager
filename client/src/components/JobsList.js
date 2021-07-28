/*** ACTIVE / ASSIGNED JOBS MODULE -- MODULE 2 ***/

import React, { useEffect } from 'react';
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
    { id: 'client', label: 'Client', minWidth: 113 },
    { id: 'address', label: 'Address', minWidth: 113 },
    { id: 'crew', label: 'Assigned Crew', minWidth: 113 }
]
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    listFont: {
        color: "#D1D9E3",
        fontSize: "0.7rem",
        [ theme.breakpoints.up( 'md' ) ]: {
                fontSize: '1rem'
            },
        [ theme.breakpoints.up( 'lg' ) ]: {
                fontSize: "2rem"
            }
    }
}));
// const getAssignedJob = API.getJobByUser().then(response => {
//     console.log(response.data)
// } );
function createData(id, client, address, crew) {
    return {
        id,
        client,
        address,
        crew
    };
};

export default function JobsList( {user} ) {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([])

    console.log(user)
    useEffect(() => {
        API.getJobs()
            .then(res => {                
                const filteredJobs = res.data.filter(jobData => jobData.crewAssignedToo === user.username)
                    .sort(function (a, b) {
                    return (+(a.dailyPosition > b.dailyPosition) || +(a.dailyPosition === b.dailyPosition) - 1) ||
                        (+(a.updatedAt < b.updatedAt) || +(a.updatedAt === b.updatedAt) - 1);
                    });
                const formattedJobs = filteredJobs.map(job => {return createData(job._id, job.client.name, job.client.location, job.crewAssignedToo)})
                
                setRows(formattedJobs)
            })
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

        <Paper className={classes.root} id='component-jobslist'>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table" id='jobslist'>
                    <TableHead>
                        <TableRow>
                            {/* columns headers go here if needed*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, i) => {
                                console.log(row);

                                return (

                                    <TableRow hover role="checkbox" tabIndex={-1} key={i} className='jobslist-row'>
                                        {columns.map((column) => {
                                            const value = row[column.id];

                                            return (

                                                <TableCell className={classes.listFont}  key={column.id}>
                                                    {column.label === "Client" ? row.client : column.label === 'Address' ? row.address.streetAddress + ', ' + row.address.city : row.crew}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell>
                                            <Link to={'/jobdetail/' + row.id}>
                                                <img alt='' src={DetailButton} className='detail-button' />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
