import React, { Component } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer"

function Notes({data}) {
    const styles = StyleSheet.create({
        notes:{},
        notesBox:{}
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