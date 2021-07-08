import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import TableRows from "./TableRows";
import Calculator from "./Calculator";
import API from "../../utils/API";


function Table({ data }) {
    const [ tableData, setTableData ] = useState([])
    const styles = StyleSheet.create({

    })

    useEffect(() => {
        loadPurchases()
    }, [])

    function loadPurchases() {
        API.getPurchases()
        .then(response => {
            setTableData(response.data)
        }).catch(err => console.log(err));
    }
    console.log(tableData)

    return (
        <>
            <View>
                <Text>Item Description</Text>
                <Text>Qty</Text>
                <Text>Rate</Text>
                <Text>Amount</Text>
            </View>
            {/* <TableRows items={tableData} rows={3} /> */}
            <Calculator />
        </>
    )
};

export default Table;