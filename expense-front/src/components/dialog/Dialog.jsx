import axios from "axios"
import Singleselect from "../singleselect/Singleselect"
import "./Dialog.css"
import { useEffect, useState } from "react"

const Dialog = ({header, dialogContent, onDialogClose, onRefresh}) => {

  const [formData, setFormData] = useState({})
  const saveCategory = async () => {
    if(dialogId.value === 'addCategory'){
      try {
        console.log(formData)
        const response = await axios.post("http://localhost:8085/category", formData)
        console.log('Transaction saved:', response.data)
      } catch (error) {
        console.log(error)
      }
    }
    if(dialogId.value === 'addTransaction'){
      try {
        console.log(formData)
        const response = await axios.post("http://localhost:8085/transaction", formData)
        console.log('Transaction saved:', response.data)
        onRefresh() // Refresh transaction data after saving
      } catch (error) {
        console.log(error)
      }
    }
    return onDialogClose(false)
  }

  useEffect(()=>{
    const initialFormData = {}
    dialogContent.forEach((item) => {
      if(item.value){
        initialFormData[item.id] = item.value
      }
    })
    setFormData(initialFormData)
  }, [dialogContent])

  return (
    <div className="dialogContainer">
        <div className="dialog">
          <form onSubmit={(e) => { e.preventDefault(); saveCategory(); }}>
            <div className="dialogHeader">
              <input id="dialogId" value={header.id} style={{display:"none"}} />
              {header.label}
            </div>
            <div className="dialogContent">
              {dialogContent.map((item) => {
                if (item.display && item.type === 'singleselect') {
                  if (item.value)
                  return <div className="inputContainer" key={item.id}>
                    <Singleselect value={item.data.value} label={item.label} data={item.data} onChange={(val) => {
                      setFormData({...formData, [item.id]: val})
                    }}/>
                  </div>
                }
                if (item.display && item.type === 'file') {
                  return (
                    <div className="inputContainer" key={item.id}>
                      <label htmlFor={item.id}>{item.label}</label>
                      <input className="input" required={item.required} type={item.type} id={item.id} placeholder={item.label} onChange={(e) => {
                        setFormData({...formData, [item.id]: e.target.files[0]?.name || ''})
                      }}>
                      </input>
                    </div>
                  )
                }
                if(item.display){
                  return (
                    <div className="inputContainer" key={item.id}>
                      <label htmlFor={item.id}>{item.label}</label>
                      <input className="input" value={item.value || undefined} required={item.required} type={item.type} id={item.id} placeholder={item.label} onChange={(e) => {
                        setFormData({...formData, [item.id]: e.target.value})
                      }}>
                      </input>
                    </div>
                  )
                }
              }
              )}
            </div>
            <div className="footer">
              <button className="cancel" type="button" onClick={() => onDialogClose(false)}>Cancel</button>
              <button className="save" type="submit">Save</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Dialog