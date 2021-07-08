import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Drawer,
    AppBar,
    Toolbar,
    // List,
    Typography,
    IconButton,
    Badge,
} from '@material-ui/core'
import {
    Menu,
    ChevronLeft,
} from '@material-ui/icons';
import '../App.css';
import MenuList from './MenuList';
import moment from 'moment';
import Moment from 'react-moment';
import Logo from '../assets/icons/logo-w-name.PNG';


const drawerWidth = 135;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        display: 'flex',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function MenuToolbar(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const currentDateTime = moment();
    // NOTES: Menu is wrapped in a badge which is how the notifications were rendering
    // - badgecontent was set at 4 and is now set to 0 in order to remove notifications
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        id='menu-icon'
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <Badge badgeContent={0} color="secondary">
                            <Menu />
                        </Badge>
                    </IconButton>
                    {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    </Typography> */}
                    <Typography className='app-bar-items' id='current-date' variant='h9'><Moment format='ll'>{currentDateTime}</Moment></Typography>
                    <Typography className='app-bar-items' id='current-time' variant='h9'><Moment format='h:MMa'>{currentDateTime}</Moment></Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                id='menu-drawer'
                variant="temporary"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton id='menu-header' onClick={handleDrawerClose}>
                        <img src={Logo} alt='' id='menu-logo'></img>
                        <ChevronLeft color='primary' />
                    </IconButton>
                </div>
                <MenuList  {...props} />
            </Drawer>
        </div>
    );
}
