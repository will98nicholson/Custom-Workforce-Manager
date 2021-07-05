import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from '../components/Invoice/Invoice'
// import invoiceData from '../utils/invoiceData'
// import logo from './logo.svg';
// import './App.css';
// console.log(invoiceData)


class Form extends Component {
  render() {
    return (

        <Fragment>
            <PDFViewer className="app" >
              <Invoice invoiceData={this.props.formObject} />
            </PDFViewer>
        </Fragment>

    );
  }
}

export default Form;

//using modal would be easier bc then we don't lose the state of the form
//width="1900" height="1200"
// map form object to
