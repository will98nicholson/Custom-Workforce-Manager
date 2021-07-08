import React from "react";
import Header from "./Header"
import Table from "./Table"
import Notes from "./Notes"
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';



function Invoice({formObject}) { 

    const styles=StyleSheet.create({});

    return(
        <Document>
            <Page>
                {/* TODO: continue working on logo / styles */}
                {/* <Logo style="" /> */}
                <Header data={formObject}/>
                {/* <Table invoiceData={invoiceData}/>*/}
                <Notes data={formObject}/> 
            </Page>
        </Document>
    );
};

export default Invoice;