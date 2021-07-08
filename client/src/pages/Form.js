import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from '../components/Invoice/Invoice'
// import logo from './logo.svg';
// import './App.css';



function Form( {formObject}) {
    console.log(formObject)

    return (
     
        <Fragment>
            <PDFViewer width='300vw' height='300vw' className="app" >
              <Invoice formObject={formObject} />
            </PDFViewer>
        </Fragment>

    );
}

export default Form;

//using modal would be easier bc then we don't lose the state of the form
//width="1900" height="1200"
// map form object to
// this.props.formObject