import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

import './NewExpense.css'
const NewExpense=(props)=>{
    const saveExpenseDataHander=enteredExpensesData=>{
        props.onSaveExpenseData(enteredExpensesData)
    }
    return(
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHander}/>            
        </Card>
    )
}

export default NewExpense;