import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {
    Dashboard,
    People,
    AddBox,
    Notifications,
    Assessment,
    EventNote,
    AttachMoney
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

        {/* <Link to='/createjob'> */}
            <ListItem button>
                <ListItemIcon>
                    <EventNote />
                </ListItemIcon>
                <ListItemText primary="Schedule" />
            </ListItem>
        {/* </Link> */}

        <ListItem button>
            <ListItemIcon>
                <ChatBubbleIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
        </ListItem>
    </div>
);

// export const secondaryListItems = (
//     <div>
//         <ListSubheader inset>Notifications</ListSubheader>
//         <ListItem button>
//             <ListItemIcon>
//                 <Notifications />
//             </ListItemIcon>
//             <ListItemText primary="4 New Invoices" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <Notifications />
//             </ListItemIcon>
//             <ListItemText primary="Crew #3 Clocked In" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <Notifications />
//             </ListItemIcon>
//             <ListItemText primary="Crew #1 En Route" />
//         </ListItem>
//     </div>
// );

export const secondaryListItems = (
    <div>
        <ListSubheader inset></ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <Assessment />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AttachMoney />
            </ListItemIcon>
            <ListItemText primary="Invoices" />
        </ListItem>

        <Link to='/crews'>
            <ListItem button>
                <ListItemIcon>
                    <People />
                </ListItemIcon>
                <ListItemText primary="Crews" />
            </ListItem>
        </Link>

        <ListItem button>
            <ListItemIcon>
                <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Jobs" />
        </ListItem>

        <Link to='/createjob'>
            <ListItem button>
                <ListItemIcon>
                    <AddBox />
                </ListItemIcon>
                <ListItemText primary="New Job" />
            </ListItem>
        </Link>
    </div>
);
