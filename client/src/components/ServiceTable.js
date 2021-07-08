import React, { useEffect, useState, useRef } from 'react';
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
        width: "70vw",
    },
    formControl: {
        margin: theme.spacing(1),
        width: "20vw"
    }
}));

var tableRowIndex = 0;

function ServiceTableRow({ row, handleDataChange, deleteRow, serviceEl, quantityEl }) {
    const classes = useStyles();

    const index = row.index

    const [data, setData] = useState([])

    //used in api call to get service options
    const [options, setOptions] = useState([])



    //API call to get all services from db.services
    useEffect(() => {
        API.getServices()
            .then(res => {
                if (res.data.length > 0) {
                    setOptions(res.data)
                }
            })
            .catch((err) => console.log(err))
    }, []);

    const updateServiceValues = e => {
        //  console.log(quantityEl.current.children[0].children[0].value)
        // var inputName = e.target.name
        // var inputValue = e.target.value
        setData({
            ...data,
            service: e.target.value
        })
        console.log(data)
        handleDataChange({
            ...data,
            index
        })
    }

    // const updateQuantityValues = () => {
    //     setData({
    //         ...data,
    //         quantity: quantityEl.current.children[0].children[0].value
    //     })
    //     console.log(data);
    //     handleDataChange({
    //         ...data,
    //         index
    //     })
    // }

    const removeRow = () => {
        deleteRow(index)
    }

    return (
        <TableRow component="tr">
            <TableCell component="td">
                {/* <input type="text" name="service" className="service" placeholder="Service" value={service} onChange={updateValues}></input> */}
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="serviceLabel">Service</InputLabel>
                    <Select
                        ref={serviceEl}
                        name="service"
                        labelId="serviceLabel"
                        id="service"
                        variant="filled"
                        onChange={updateServiceValues}
                    >

                        {options.map((item) => (
                            <MenuItem key={item.name} value={JSON.stringify(item)}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell component="td">
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="serviceQtyLabel">Qty</InputLabel>
                    <TextField
                        ref={quantityEl}
                        name="quantity"
                        id="qty"
                        // onChange={updateValues}
                        type="number"
                        align="right"
                        variant="filled"
                    />
                </FormControl>
            </TableCell>
            <TableCell variant="contained" color="secondary" component="td">
                <Button type="button" variant="contained" color="secondary" className="btn btn-remove " onClick={removeRow}>
                    &times;
                </Button>
            </TableCell>
        </TableRow>
    )
}

function ServiceTable({ jobData }) {
    const classes = useStyles();

    const quantityEl = useRef(null)
    const serviceEl = useRef(null)

    // const [rows, setRows] = useState([]);

    const [rows, setRows] = useState([{
        index: 0,
        service: {},
        quantity: ""
    }
    ]);

    // const [dataObject, setDataObject] = useState([])



    // Receive data from TableRow
    const handleChange = data => {
        rows[data.index] = data;
        console.log(data)
    }

    // Add New Table Row
    const addNewRow = () => {
        tableRowIndex = parseFloat(tableRowIndex) + 1
        var updatedRows = [...rows]
        updatedRows[tableRowIndex] = { index: tableRowIndex, service: {}, price: 0, quantity: 0 }
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(serviceEl.current.children[1].value, quantityEl.current.children[0].children[0].value)
        console.log(jobData)
        let service = JSON.parse(serviceEl.current.children[1].value)
        let dataObject = {
            service_id: service.name,
            price: service.price,
            quantity: quantityEl.current.children[0].children[0].value,
            job_id: jobData._id
        }

        API.postPurchase(dataObject)
            .then(data => (console.log(data)))
            .catch(err => (console.log(err)))
    }


    return (
        <TableContainer>
            <Table component="table" className={classes.table} aria-label="services rendered">
                <TableHead id='service-table-head'>
                    <TableRow>
                        <TableCell className='service-table-header'>Select Service</TableCell>
                        <TableCell className='service-table-header'>Qty.</TableCell>
                        <TableCell className='service-table-header'>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row, index) => {
                            if (row)
                                return (
                                    <ServiceTableRow serviceEl={serviceEl} quantityEl={quantityEl} key={index} row={row} handleDataChange={handleChange} deleteRow={deleteRow}></ServiceTableRow>
                                )
                        })
                    }
                </TableBody>
            </Table>
            <div id='service-button-wrapper'>
                <Button id='save-btn' variant="contained" onClick={handleSubmit}>
                    Save
                </Button>
                <Button id='add-serv-btn' onClick={addNewRow}>
                    + Add Service
                </Button>
            </div>
        </TableContainer>
    );
}

export default ServiceTable;
