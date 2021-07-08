import React from "react";
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import TableRows from "./TableRows";
import Calculator from "./Calculator";


function Table( {data} ) {
    const borderColor = '#90e5fc';
    const styles = StyleSheet.create({
        table: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 24,
            borderWidth: 1,
            borderColor: '#bff0fd',
        },
        tableWrapper: {
            flexDirection: 'row',
            borderBottomColor: '#bff0fd',
            backgroundColor: '#bff0fd',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            textAlign: 'center',
            fontStyle: 'bold',
            flexGrow: 1,
        },
        description: {
            width: '60%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        qty: {
            width: '10%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        rate: {
            width: '15%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        amount: {
            width: '15%'
        },
    });

//    console.log(invoiceData)

    return (
        <View style={styles.table}>
            <View style={styles.tableWrapper}>
                <Text style={styles.description}>Item Description</Text>
                <Text style={styles.qty}>Qty</Text>
                <Text style={styles.rate}>Rate</Text>
                <Text style={styles.amount}>Amount</Text>
            </View>
            <TableRows items={data.data.products} rows={3} />
            <Calculator />
        </View>
    )
};

export default Table;