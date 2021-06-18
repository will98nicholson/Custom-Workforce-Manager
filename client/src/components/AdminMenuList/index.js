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

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="My Crews" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddBox />
            </ListItemIcon>
            <ListItemText primary="Create A Job" />
        </ListItem>
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

