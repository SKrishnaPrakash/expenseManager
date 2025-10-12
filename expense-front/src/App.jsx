import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Category from './components/category/Category'
import Navbar from './components/navbar/Navbar'
import Sidemenu from './components/sidemenu/Sidemenu'
import Transaction from './components/transactions/Transaction'
import Dialog from './components/dialog/Dialog'

function App() {

  const [menuItem, setMenuItem] = useState("Expense")
  const [isOpen, setIsOpen] = useState(false)
  const [dialogData,setDialogData] = useState([])
  const [dialogHeader, setDialogHeader] = useState (null)
  const [transactionData, setTransactionData] = useState([])

  const openDialog = (isClosed, data, header) => {
    setIsOpen(isClosed); 
    setDialogData(data);
    setDialogHeader(header);
  }
  const handleMenuClick = (id) =>{
    setMenuItem(id)
  };
  const getTransactions = async () =>{
      try {
          const response = await axios.get("http://localhost:8085/transactions")
          setTransactionData(response.data)
          console.log(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect( () => {
        getTransactions();
    }, [])
  
  return (
    <div className='wholecontent'>
      <Navbar/>
      <div className="menucontainer">
        <Sidemenu onItemClick={handleMenuClick}/>
        <div className="container1">
          <Transaction label={menuItem} amount="0" values={transactionData} onRefresh={getTransactions}/>
          <Category onDialogOpen={openDialog}/>
        </div>
      </div>
      {isOpen && (<Dialog header={dialogHeader} dialogContent={dialogData} onDialogClose={openDialog} onRefresh={getTransactions}/>)}
    </div>
  )
}

export default App
