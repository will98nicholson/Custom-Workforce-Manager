import React, { useState, useEffect } from 'react';
import InvoiceModal from '../components/InvoiceModal';
import API from '../utils/API';

export default function DetailInfo ( props ) {
    const [ object, setObject ] = React.useState( {} )
    useEffect( () => {
        getJob()
        console.log(object)
    }, [] )

    const getJob = async () => {
        await API.getJobById( props.id )
            .then( res => setObject( res[0].data ) );
    }
    //set state for invoice modal
    //handleOpen + handleClose functions
    const [ open, setOpen ] = React.useState( false );

    const handleOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
    };

    return (
        <div className='detail-info-wrapper'>
            <div>
                <div>Client Name</div>
            </div>
            <div>
                <div>type</div>
                <div></div>
            </div>
            <div>
                <div>location</div>
                <div></div>
            </div>
            <div>
                <div>contact</div>
                <div></div>
            </div>
            <div>
                <div>phone</div>
                <div>Value</div>
            </div>
            <div>
                <div>email</div>
                <div>Value</div>
            </div>
            <div>
                <div>quote_date:</div>
                <div>Value</div>
            </div>
            <div>
                <div>quote_price</div>
                <div>Value</div>
            </div>
            <div>
                <div>start_date</div>
                <div>Value</div>
            </div>
            <div>
                <div>end_date</div>
                <div>Value</div>
            </div>
            <div>
                <div>description</div>
                <div>Value</div>
            </div>
            <div>
                <div>notes</div>
                <div>Value</div>
            </div>



        </div>
    );





};
