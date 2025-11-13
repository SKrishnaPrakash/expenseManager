import axios from "axios"
import Singleselect from "../singleselect/Singleselect"
import "./Dialog.css"
import { useEffect, useState } from "react"

const Dialog = ({header, dialogContent, onDialogClose, onRefresh}) => {

  const [formData, setFormData] = useState({})

  const saveCategory = async () => {
    const dialogIdElement = document.getElementById('dialogId');
    let url = "";
    if(dialogIdElement.value === 'addCategory') url = "http://localhost:8085/category";
    if(dialogIdElement.value === 'addTransaction') url = "http://localhost:8085/transaction";
    try {
      const response = await axios.post(url, formData);
      console.log("Data saved successfully:", response.data);
      if(dialogIdElement.value === 'addTransaction') onRefresh();
    }catch (error) {
      console.error("Error saving data:", error);
    }
    onDialogClose(false)
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
                      (setFormData({...formData, [item.id]: val}))
                    }}/>
                  </div>
                }
                if (item.display && item.type === 'file') {
                  return (
                    <div className="inputContainer" key={item.id}>
                      <label htmlFor={item.id}>{item.label}</label>
                      <input className="input" required={item.required} type={item.type} id={item.id} placeholder={item.label} onChange={(e) => {
                        const file = e.target.files[0];
                        // if(file) {
                        //   const formData = new FormData();
                        //   formData.append('file', file);
                        //   axios.post("http://localhost:8085/upload-image", formData, {
                        //     headers: {'Content-Type': 'multipart/form-data'}
                        //   }).then(response => {
                        //     console.log("File uploaded successfully:", response.data);
                        //   }).catch(error => {
                        //     console.error("Error uploading file:", error);
                        //   });
                        // }
                        setFormData({...formData, [item.id]: file});
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