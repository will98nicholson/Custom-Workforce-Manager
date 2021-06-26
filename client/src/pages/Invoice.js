import React from "react";
import Header from "../components/Invoice/Header"
import Table from "../components/Invoice/Table"
import Notes from "../components/Invoice/Notes"

function Invoice() { 

    return(
    <>
        <Header />
        <Table />
        <Notes />
    </>
    );
};

export default Invoice;