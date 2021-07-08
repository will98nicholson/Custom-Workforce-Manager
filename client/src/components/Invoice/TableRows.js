import React, { Fragment } from "react";
import {Text, View, StyleSheet } from '@react-pdf/renderer';

function TableRows( {items} ) {
    console.log(items)
    const styles = StyleSheet.create({
        
    })
    
    
    const rows = items.map( item => 
        <View >
            <Text>{item.desc}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.rate}</Text>
            <Text>{item.quantity * item.rate}</Text>
        </View>
    );
// {rows}
    return(<Fragment><></></Fragment>);
}

export default TableRows;