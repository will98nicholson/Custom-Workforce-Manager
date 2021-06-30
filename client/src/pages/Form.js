import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from '../components/Invoice/Invoice'
import invoiceData from './utils/invoiceData'
// import logo from './logo.svg';
import './App.css';

class Form extends Component {
  render() {
    return (
        <Fragment>
            <PDFViewer width="1900" height="1200" className="app" >
                <Invoice invoiceData={invoiceData}/>
            </PDFViewer>
        </Fragment>
    );
  }
}

export default Form;