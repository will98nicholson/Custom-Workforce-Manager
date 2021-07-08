import React from 'react';
import {Typography, Link} from "@material-ui/core"


export default function Copyright() {
    return (
        <Typography id='copyright' variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                MKCWB Group
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
