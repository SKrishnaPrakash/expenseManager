import React, { use, useEffect } from 'react'
import "./Inbox.css";
import {validateMaster} from "../../methods/validateMaster"

const Inbox = ({headers, values}) => {
    const [masterValues, setMasterValues] = React.useState({});

    useEffect(() => {
        const fetchMasterValues = async () => {
            const temp = {};
            for(let value of values) {
                for(let header of headers) {
                    if(header.type === 'master') {
                        const key = `${header.id}_${value[header.id]}`
                        if(!temp[key]) {
                            console.log(header.masterData, value)
                            const val = await validateMaster(header.masterData, value[header.id])
                            temp[key] = val;
                        }
                    }
                }
            }
            setMasterValues(temp);
        }
        fetchMasterValues()
    }, [headers, values])

    return (
        <div className="inbox">
            <div className="table-container">
                <table className='inboxTable'>
                    <thead>
                        <tr>
                            {headers.map((header)=>(<th id={header.id} className='inboxHeader'>{header.label}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((value, index)=>(
                            <tr id={index} key={index} className='inboxRow'>
                                {headers.map((header) => (
                                    <td key={header.id} value= {value[header.id]}>
                                        {header.type==='master'? masterValues[`${header.id}_${value[header.id]}`] : value[header.id]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Inbox