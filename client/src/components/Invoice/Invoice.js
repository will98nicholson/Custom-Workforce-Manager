import React from "react";
import Header from "./Header"
import Table from "./Table"
import Notes from "./Notes"
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';



function Invoice({invoiceData}) { 

    const styles=StyleSheet.create({});

    return(
        <Document>
            <Page>
                {/* TODO: continue working on logo / styles */}
                {/* <Logo style="" /> */}
                <Header invoiceData={invoiceData}/>
                <Table invoiceData={invoiceData}/>
                <Notes invoiceData={invoiceData}/>
            </Page>
        </Document>
    );
};

export default Invoice;