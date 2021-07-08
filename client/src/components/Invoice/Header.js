import React, { Component } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer"
// TODO: figure out how to model, seed and then retrieve neccessary information, then style!

function Header( {data} ) {

    const styles = StyleSheet.create({
        companyInfo: {},
        invoiceHeader: {},
        billingInfo:{},
        invoiceInfo:{}
    });
    

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var invoiceId = 1234;
    // data.data._id.splice(-4)

    return(
        <View>
            <View style={styles.companyInfo}>
                <Text>Three Leaves Co.</Text>
                <Text>123 Landscaping Way</Text>
                <Text>Dublin, OH 43016</Text>
                <Text>United States</Text>
            </View>

            <View style={styles.invoiceHeader}>
                <Text>INVOICE</Text>
            </View>

            <View style={styles.billingInfo}>
                <Text>Bill To:</Text>
                <Text>{data.data.client.name}</Text>
                <Text>{data.data.client.location.streetAddress}</Text>
                <Text>{data.data.client.location.city}, {data.data.client.location.state} {data.data.client.location.zipcode}</Text>
            </View>

            <View style={styles.invoiceInfo}>
                <Text>Invoice # {invoiceId}</Text>
                <Text>Date Issued: {today}</Text>
                <Text>Due Date: {today}</Text> 
            </View>
        </View>
    )
};

export default Header;