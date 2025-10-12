import "./Sidemenu.css"
import incomeimage from "../../assets/income.svg"
import expenseimage from "../../assets/expense.svg"
import logo from "../../assets/logo.svg"

const Sidemenu = ({onItemClick}) => {
  const menuItems = [
    {id: 'income', label: 'Income', description: 'Rs. 5000', image: incomeimage},
    {id: 'expense', label: 'Expense', description: 'Rs. 2000', image: expenseimage},
    {id: 'balance', label: 'Balance', description: 'Rs. 3000', image: logo}
  ];
  return (
    <div className="sidemenu">
      {menuItems.map(item =>(
        <div key={item.id} className="card" id={item.id} onClick={()=> onItemClick(item.label)}>
          <img src={item.image} alt={item.id}/>
          <h2>{item.label}</h2>
          <p><span>{item.description}</span></p>
        </div>
      ))}
    </div>
  )
}

export default Sidemenu