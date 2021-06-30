import React, { Component } from "react";
import EditAbleTextArea from "./EditAbleTextArea"
import TableRows from "./TableRows";
import Calculator from "./Calculator";



function Table() {
    return (
        <>
            <tr>
                <th>Item Description</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td><EditAbleTextArea /></td>
                <td><EditAbleTextArea /></td>
                <td><EditAbleTextArea /></td>
                <td></td>
            </tr>
            <Calculator />
        </>
    )
};

export default Table;