import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp, Edit } from '@material-ui/icons';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(name, jobnumber) {
    return {
        name,
        jobnumber,
        description: [
            { date: '2021-07-06', crew: '#3', service: 'mow & trim' },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                {/* <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell> */}
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.crew}</TableCell>
                <TableCell align="right">{row.jobnumber}</TableCell>
                <TableCell component="th" scope="row">
                    <IconButton aria-label='edit job' size='small' onClick={() => { window.location.replace('/editjob') }}>
                        <Edit />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Job Details
                            </Typography>
                            <Table size="small" aria-label="job details">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Crew</TableCell>
                                        <TableCell align="right">Service</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.description.map((descriptionRow) => (
                                        <TableRow key={descriptionRow.date}>
                                            <TableCell component="th" scope="row">
                                                {descriptionRow.date}
                                            </TableCell>
                                            <TableCell>{descriptionRow.crew}</TableCell>
                                            <TableCell align="right">{descriptionRow.service}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        jobnumber: PropTypes.number.isRequired,
        description: PropTypes.arrayOf(
            PropTypes.shape({
                task: PropTypes.string.isRequired,
                crew: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

const rows = [
    createData("Cafe Istanbul", 123),
    createData("Mill Creek Cemetery", 456),
    createData("Dublin Golf Club", 789),
];

export default function ActiveJobsList() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="active jobs">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Client</TableCell>
                        <TableCell align="right">Job #</TableCell>
                        <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}