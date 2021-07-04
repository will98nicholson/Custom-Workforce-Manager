import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
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

export default function AddServices() {
    const classes = useStyles();

    //used to get all services from db.services
    const [services, setServices] = useState([])
    //used to grab selected service & qty
    const [purchase, setPurchase] = useState({});

    //API call to get all services from db.services
    useEffect(() => {
        API.getServices()
            .then(res => {
                if (res.data.length > 0) {
                    setServices(res.data)
                    console.log(services)
                }
            })
            .catch((err) => console.log(err))
    }, []);

    //API call to post selected services & qty to db.purchased

    //set selected service & qty to purchase object
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPurchase({ [name]: value })
        console.log(purchase)
    }

    return (
        <>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Select Service</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <FormControl className={classes.formControl}>
                                    <InputLabel variant="outlined" id="serviceLabel">Service</InputLabel>
                                    <Select
                                        name="service"
                                        labelId="serviceLabel"
                                        id="service"
                                        value={purchase.service}
                                        onChange={handleChange}
                                    >

                                        {services.map((item) => (

                                            <MenuItem key={item._id} value={item._id}>{item._id}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="qty" type="number" variant="outlined" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button color="primary">
                    + Add another service
                </Button>
            </TableContainer>

        </>
    );
}
