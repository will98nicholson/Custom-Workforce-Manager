import React, { Component } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer"

function Notes({data}) {
    const styles = StyleSheet.create({
        notes:{
            paddingRight: 45,
            paddingBottom:10,
            paddingTop:10,
            paddingLeft:45,
        },
        notesBox:{
            backgroundColor:'#d3d3d3',
            padding: 4,
        }
    })
    
    return (
        <>
           <View style={styles.notes}>
                <Text>Notes:</Text>
                <View style={styles.notesBox}>
                    <Text>{data.data.notes}</Text>
                </View>
            </View>
        </>
    )
};

export default Notes;