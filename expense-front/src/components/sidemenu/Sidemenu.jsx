import "./Sidemenu.css"
import incomeimage from "../../assets/income.svg"
import expenseimage from "../../assets/expense.svg"
import logo from "../../assets/logo.svg"
import axios from "axios"
import { useEffect, useState } from "react"

const Sidemenu = ({onItemClick}) => {
  const [selectedmenu, setSelectedMenu] = useState('Balance')

  const menuItems = [
    {id: 'income', label: 'Income', description: 'Rs. 5000', image: incomeimage},
    {id: 'expense', label: 'Expense', description: 'Rs. 2000', image: expenseimage},
    {id: 'balance', label: 'Balance', description: 'Rs. 3000', image: logo}
  ];

  const onMenuItemClick = async (id, label) => {
    setSelectedMenu(label); 
    try {
      const response = await (id === 'balance'? 
        axios.get("http://localhost:8085/transaction-category-views") 
        : axios.get(`http://localhost:8085/transaction-category-views/type/${id}`)
      )
      onItemClick(label, response.data);
    } catch (error) {
      console.error("Error handling menu item click:", error);
    }
  }

  useEffect(() => {
    onMenuItemClick('expense', 'Expense');
  },[])

  return (
    <div className="sidemenu">
      {menuItems.map(item =>(
        <div key={item.id} className="card" id={item.id} onClick={()=> onMenuItemClick(item.id, item.label)}>
          <img src={item.image} alt={item.id}/>
          <h2>{item.label}</h2>
          <p><span>{item.description}</span></p>
        </div>
      ))}
    </div>
  )
}

export default Sidemenu