import React from 'react'
import "./Inbox.css";

const Inbox = ({headers, values}) => {
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
                                <td key={header.id} value= {value[header.id]}>{value[header.id]}</td>
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