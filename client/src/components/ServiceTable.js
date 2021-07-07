import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    TableHead,
    Button,
    TextField,
    InputLabel,
    FormControl,
    Select,
    MenuItem

} from '@material-ui/core';

import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    table: {
        width: "60vw",
    },
    formControl: {
        margin: theme.spacing(1),
        width: "20vw"
    }
}));

var tableRowIndex = 0;

function ServiceTableRow({ row, handleDataChange, deleteRow }) {
    const classes = useStyles();

    const index = row.index
    const [service, setService] = useState(row.service);
    const [quantity, setQuantity] = useState(row.quantity);

    //used in api call to get service options
    const [options, setOptions] = useState([])

    //API call to get all services from db.services
    useEffect(() => {
        API.getServices()
            .then(res => {
                if (res.data.length > 0) {
                    setOptions(res.data)
                    console.log(options)
                }
            })
            .catch((err) => console.log(err))
    }, []);

    const updateValues = e => {
        var inputName = e.target.name
        var inputValue = e.target.value
        if (inputName == 'service') {
            setService(inputValue)
        } else if (inputName == 'quantity') {
            setQuantity(inputValue)
        }

        handleDataChange({
            index: index,
            service: service,
            quantity: quantity
        })
    }

    const removeRow = () => {
        deleteRow(index)
    }

    return (
        <TableRow component="tr">
            <TableCell component="td">
                {/* <input type="text" name="service" className="service" placeholder="Service" value={service} onChange={updateValues}></input> */}
                <FormControl className={classes.formControl}>
                    <InputLabel variant="outlined" id="serviceLabel">Service</InputLabel>
                    <Select
                        name="service"
                        labelId="serviceLabel"
                        id="service"
                        variant="outlined"
                        onChange={updateValues}
                    >

                        {options.map((item) => (

                            <MenuItem key={item._id} value={item._id}>{item._id}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell component="td">
                {/* <input type="text" name="quantity" className="quantity" placeholder="Quantity" value={quantity} onChange={updateValues}></input> */}
                <TextField
                    name="quantity"
                    id="qty"
                    placeholder="Quantity"
                    onChange={updateValues}
                    type="number"
                    align="right"
                    variant="outlined"
                />
            </TableCell>
            <TableCell variant="contained" color="secondary" component="td">
                <Button type="button" variant="contained" color="secondary" className="btn btn-remove" onClick={removeRow}>
                        &times;
                </Button>
            </TableCell>
        </TableRow>
    )
}

function ServiceTable() {
    const classes = useStyles();

    const [rows, setRows] = useState([{
        index: 0,
        service: "",
        quantity: ""
    }
    ]);

    // Receive data from TableRow 
    const handleChange = data => {
        rows[data.index] = data
    }

    // Add New Table Row
    const addNewRow = () => {
        tableRowIndex = parseFloat(tableRowIndex) + 1
        var updatedRows = [...rows]
        updatedRows[tableRowIndex] = { index: tableRowIndex, service: "", quantity: "" }
        setRows(updatedRows)
    }

    // Remove Table row if rows are count is more than 1
    const deleteRow = (index) => {
        if (rows.length > 1) {
            var updatedRows = [...rows]
            var indexToRemove = updatedRows.findIndex(x => x.index == index);
            if (indexToRemove > -1) {
                updatedRows.splice(indexToRemove, 1)
                setRows(updatedRows);
            }
        }
    }

    return (
        <TableContainer>
            <Table component="table" className={classes.table} aria-label="services rendered">
                <TableHead>
                    <TableRow>
                        <TableCell>Select Service</TableCell>
                        <TableCell>Qty.</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row, index) => {
                            if (row)
                                return (
                                    <ServiceTableRow key={index} row={row} handleDataChange={handleChange} deleteRow={deleteRow}></ServiceTableRow>
                                )
                        })
                    }
                </TableBody>
            </Table>
            <Button color="primary" onClick={addNewRow}>
                + Add another service
            </Button>

        </TableContainer>
    );
}

export default ServiceTable;