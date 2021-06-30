import React, { Component } from "react";
import { View, Text } from "@react-pdf/renderer"
// TODO: figure out how to model, seed and then retrieve neccessary information, then style!

function Header(invoiceData) {

    const styles = StyleSheet.create({
        companyInfo: {},
        invoiceHeader: {},
        billingInfo:{},
        invoiceInfo:{}
    });
    
    return(
        <View>
            <View style={styles.companyInfo}>
                <Text>ThreeLeaves Co.</Text>
                <Text>123 Landscaping Way</Text>
                <Text>Grandview Heights, OH 43212</Text>
                <Text>United States</Text>
            </View>

            <View style={styles.invoiceHeader}>
                <Text>INVOICE</Text>
            </View>

            <View style={styles.billingInfo}>
                <Text>Bill To:</Text>
                <Text>{invoiceData.client.name}</Text>
                <Text>{invoiceData.client.address.streetAddress}</Text>
                <Text>{invoiceData.client.address.city}, {invoiceData.client.address.state} {invoiceData.client.address.zipcode}</Text>
            </View>

            <View style={styles.invoiceInfo}>
                <Text>Invoice # {invoiceData.number}</Text>
                <Text>Date Issued: {invoiceData.dateCreated}</Text>
                <Text>Due Date: {invoiceData.dateDue}</Text>
            </View>
        </View>
    ) 
};

export default Header;