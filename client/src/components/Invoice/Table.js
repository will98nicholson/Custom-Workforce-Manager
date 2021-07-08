import React from "react";
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import TableRows from "./TableRows";
import Calculator from "./Calculator";


function Table( {data} ) {
    const styles = StyleSheet.create({

    })

//    console.log(invoiceData)

    return (
        <>
            <View>
                <Text>Item Description</Text>
                <Text>Qty</Text>
                <Text>Rate</Text>
                <Text>Amount</Text>
            </View>
            <TableRows items={data.data.products} rows={3} />
            <Calculator />
        </>
    )
};

export default Table;