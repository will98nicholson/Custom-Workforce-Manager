import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


import API from './client/src/utils/API'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function FormSelect(props) {
    const classes = useStyles();
    //stores services retrieved from the API
    const [services, setServices] = useState([])
    //stores user selected services
    const [selectedService, setSelectedService] = useState([]);


    useEffect(() => {
        API.getServices()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }

                if (res.data.length > 0) {
                    setServices(res.data)
                    // console.log(services)
                }
            })
            .catch((err) => console.log(err))
    }, []);

    const handleChange = (event) => {
        event.preventDefault();
        setSelectedService(event.target.value);
        console.log(selectedService)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="service-selector-label">Services</InputLabel>
                <Select
                    labelId="service-selector-label"
                    id="service-selector"
                    multiple
                    value={selectedService}
                    onChange={handleChange, props.onChange}
                    className={props.className}
                    disabled={props.disabled}
                    defaultValue={props.defaultValue}
                    variant={props.variant}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >

                    {/* {console.log(services)} */}
                    {services.map((service) => (
                        <div>
                            <MenuItem key={service._id} value={service._id}>
                                <Checkbox color="default" />
                                <ListItemText primary={service._id} />
                            </MenuItem>
                        </div>
                    ))}
                    {console.log(selectedService)}
                </Select>
            </FormControl>
        </div>
    );
}
