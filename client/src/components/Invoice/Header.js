import React, { Component } from "react";

// TODO: figure out how to model, seed and then retrieve neccessary information, then style!

function Header() {

    companyInformation = [
        {
            "company": "",
            "name": "",
            "address": {
                "streetAddress": "",
                "city": "",
                "state": "",
                "zipcode":""
            }
        }
    ];

    billingInformation = [
       {
           "client": {
               "name": "",
               "address": {
                "streetAddress": "",
                "city": "",
                "state": "",
                "zipcode":""
            }
          }
       }
    ];

    invoiceInformation = [
        {
            "number": "",
            "dateCreated":"",
            "dateDue":""
        }
    ]

    return(
        <>
            <div className="companyInfo">
                <h2>{companyInformation.company}</h2>
                <h4>{companyInformation.address.streetAddress}</h4>
                <h4>{companyInformation.address.city}, {companyInformation.address.state} {companyInformation.address.zipcode}</h4>
                <h4>United States</h4>
            </div>

            <div className="invoiceHeader">
                <h1>INVOICE</h1>
            </div>

            <div className="billingInfo">
                <h3>Bill To:</h3>
                <h4>{billingInformation.client.name}</h4>
                <h4>{billingInformation.client.address.streetAddress}</h4>
                <h4>{billingInformation.client.address.city}, {billingInformation.client.address.state} {billingInformation.client.address.zipcode}</h4>
            </div>

            <div>
                <h4>Invoice # {invoiceInformation.number}</h4>
                <h4>Date Issued: {invoiceInformation.dateCreated}</h4>
                <h4>Due Date: {invoiceInformation.dateDue}</h4>
            </div>
        </>
   ) 
};

export default Header;