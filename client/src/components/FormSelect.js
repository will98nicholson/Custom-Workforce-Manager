import React, { useEffect, MenuProps } from 'react';
import {
    Select,
    Checkbox,
    Input,
    MenuItem,
    ListItemText
} from '@material-ui/core';

import API from '../utils/api'

//TODO: API.getAll for services
//function to push services from db to an array
//map array to selector

const services = [];

function getServices() {
    API.getServices()
        .then((res) => services.map(res._id))
        .catch((err) => console.log(err))
}

export default function FormSelect() {
    const [serviceName, setServiceName] = React.useState([]);

    useEffect(() => {
        // on load call API for service list
        getServices()
    });

    const handleChange = (event) => {
        setServiceName(event.target.value);
    };

    return (
        <div>
            <Select
                labelId="select-services"
                id="demo-mutiple-checkbox"
                multiple
                value={serviceName}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {services.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={serviceName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}
