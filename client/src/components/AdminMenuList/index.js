import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import {
    Dashboard,
    People,
    AddBox,
    Notifications
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <Link to='/dashboard'>
            <ListItem button>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link to='/crews'>
            <ListItem button>
                <ListItemIcon>
                    <People />
                </ListItemIcon>
                <ListItemText primary="My Crews" />
            </ListItem>
        </Link>
        <Link to='/createjob'>
            <ListItem button>
                <ListItemIcon>
                    <AddBox />
                </ListItemIcon>
                <ListItemText primary="Create A Job" />
            </ListItem>
        </Link>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Notifications</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <Notifications />
            </ListItemIcon>
            <ListItemText primary="4 New Invoices" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Notifications />
            </ListItemIcon>
            <ListItemText primary="Crew #3 Clocked In" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Notifications />
            </ListItemIcon>
            <ListItemText primary="Crew #1 En Route" />
        </ListItem>
    </div>
);
