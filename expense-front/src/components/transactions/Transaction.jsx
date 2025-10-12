import { useEffect, useState } from "react";
import "./Transaction.css";
import "../inbox/Inbox";
import Singleselect from "../singleselect/Singleselect";
import Inbox from "../inbox/Inbox";
import axios from "axios";

const Transaction = ({amount, label, values, onRefresh}) => {

    const data = {
        label : 'Select Month',
        options : [ 
            { id: 1, value: "January" },
            { id: 2, value: "February" },
            { id: 3, value: "March" },
            { id: 4, value: "April" },
            { id: 5, value: "May" },
            { id: 6, value: "June" },
            { id: 7, value: "July" },
            { id: 8, value: "August" },
            { id: 9, value: "September" },
            { id: 10, value: "October" },
            { id: 11, value: "November" },
            { id: 12, value: "December" }
        ],
        required : false
    }

    return (
        <div className="transactioncontainer"> 
            <div className="header">
                <Singleselect data={data}/>
                {(label) && (<label>{label} : {amount}</label>)}
            </div>
            <Inbox 
                headers={[
                    {id:'transactionId', label:'Transaction Id'}, 
                    {id:'transactionCategory', label:'Category'}, 
                    {id:'source', label:'Source'}, 
                    {id:'amount', label:'Amount'}, 
                    {id:'date', label:'Date'}
                ]}
                values={values}
            />
        </div>
    )
}

export default Transaction