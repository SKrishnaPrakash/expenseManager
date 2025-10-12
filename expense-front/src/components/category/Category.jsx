import "./Category.css";
import addIcon from "../../assets/addCategory.svg"
import expand from "../../assets/expand.svg"
import collapse from "../../assets/collapse.svg"
import axios from "axios";
import { useEffect, useState } from "react";

const Category = ({onDialogOpen}) => {
  const [isIncomeOpen, setIsIncomeOpen] = useState(true);
  const [isExpenseOpen, setIsExpenseOpen] = useState(true);
  const [categoryList, setCategoryList] = useState([]);

  const expenseCategoryData = [
    { id : 'categoryId', label : 'Category Id', type : 'text', display : false, required : false },
    { id : 'categoryName', label : 'Category Name', type : 'text', display : true, required : true },
    { id : 'imagePath', label : 'Image Path', type : 'file', display : true, required : false },
    { id : 'categoryType', label : 'Category Type', type : 'singleselect', display : false,
      data : { label: '', options: [ {id:'income', value: 'Income'} , {id: 'expense', value: 'Expense'}], required : true, value: 'expense' }
    }
  ]
  const incomeCategoryData = [
    { id : 'categoryId', label : 'Category Id', type : 'text', display : false, required : false },
    { id : 'categoryName', label : 'Category Name', type : 'text', display : true, required : true},
    { id : 'imagePath', label : 'Image Path', type : 'file', display : true, required : false },
    { id : 'categoryType', label : 'Category Type', type : 'singleselect', display : false,
      data : { label: '', options: [ {id: 'expense', value: 'Expense'}, {id:'income', value: 'Income'} ], required : true, value: 'income' }
    }
  ]
  const incomeData = [
    { id : 'transactionId', label : 'Transaction Id', type : 'text', display : false, required : false },
    { id : 'transactionCategory', label : 'Category', type : 'text', display : false, required : true },
    { id : 'categoryName', label : 'Category Name', type : 'text', display : true, required : false },
    { id : 'source', label : 'Source', type : 'text', display : true, required : false },
    { id : 'amount', label : 'Amount', type : 'number', display : true, required : true},
    { id : 'date', label : 'Date', type : 'date', display : true, required : true}
  ]
  const expenseData = [
    { id : 'transactionId', label : 'Transaction Id', type : 'text', display : false, required : false },
    { id : 'transactionCategory', label : 'Category', type : 'text', display : false, required : true  },
    { id : 'categoryName', label : 'Category Name', type : 'text', display : true, required : false },
    { id : 'source', label : 'Source', type : 'text', display : true, required : false },
    { id : 'amount', label : 'Amount', type : 'number', display : true, required : true},
    { id : 'date', label : 'Date', type : 'date', display : true, required : true}
  ]

  useEffect(() => {
    const getCategory = async ()=>{
      try {
        const response = await axios.get("http://localhost:8085/category");
        setCategoryList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategory();
  },[onDialogOpen])

  return (
    <div className="categorycontainer">
      <div className="container">
        <div className="header">
          <h4>Income</h4>
          <img className={`expandIcon ${isIncomeOpen ? 'open' : ''}`} src={collapse} alt="collapse" onClick={()=>{
            setIsIncomeOpen(!isIncomeOpen)
          }}/>
        </div>
        {(isIncomeOpen)&&(
          <div className="category">
            {categoryList.map(
              item => ( item.categoryType === 'income' &&
              <div key={item.categoryId}>
                <img src={`/public_images/${item.imagePath}`} id={item.categoryId} alt="" onClick={() => {
                  const updatedIncomeData = incomeData.map(field =>
                    field.id === 'transactionCategory' ? { ...field, value: item.categoryId } :
                    field.id === 'categoryName' ? { ...field, value: item.categoryName } :
                    field
                  );
                  onDialogOpen(true, updatedIncomeData, {id: 'addTransaction', label: 'Add Transaction'});
                }} />
                <label htmlFor={item.categoryId}>{item.categoryName}</label>
              </div>
            ))}
            <div>
              <img src={addIcon} id={addIcon} alt="" onClick={() => onDialogOpen(true, incomeCategoryData, {id: 'addCategory', label: 'Add Category'})} />
              <label htmlFor={addIcon}>Add Income</label>
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <div className="header">
          <h4>Expense</h4>
          <img className={`expandIcon ${isExpenseOpen ? 'open' : ''}`} src={collapse} alt="collapse" onClick={()=>{
            setIsExpenseOpen(!isExpenseOpen)
          }}/>
        </div>
        {(isExpenseOpen)&&(
          <div className="category">
            {categoryList.map(
              item => ( item.categoryType === 'expense' &&
              <div key={item.categoryId}>
                <img src={`/public_images/${item.imagePath}`} id={item.categoryId} alt="" onClick={() => {
                  const updatedExpenseData = expenseData.map(field => 
                    field.id === 'transactionCategory' ? { ...field, value: item.categoryId } :
                    field.id === 'categoryName' ? { ...field, value: item.categoryName } :
                    field
                  );
                  onDialogOpen(true, updatedExpenseData, {id: 'addTransaction', label: 'Add Transaction'})
                }} />
                <label htmlFor={item.categoryId}>{item.categoryName}</label>
              </div>
            ))}
            <div>
              <img src={addIcon} id={addIcon} alt="" onClick={() => onDialogOpen(true, expenseCategoryData, {id: 'addCategory', label: 'Add Category'})} />
              <label htmlFor={addIcon}>Add Expense</label>
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Category