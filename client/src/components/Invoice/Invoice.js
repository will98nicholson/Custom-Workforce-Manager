import React from "react";
import Header from "./Header"
import Table from "./Table"
import Notes from "./Notes"
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import logo from "../../assets/icons/logo.PNG"


function Invoice({formObject}) { 

    const styles = StyleSheet.create({
        page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
        },
        logo: {
            paddingTop:20,
            width: 74,
            height: 66,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    });

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                {/* TODO: continue working on logo / styles */}
                <Image style={styles.logo} src={logo}/>
                <Header data={formObject}/>
                <Table data={formObject}/>
                <Notes data={formObject}/> 
            </Page>
        </Document>
    );
};

export default Invoice;