import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import FilterYear from "./FilterYear/FilterYear";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

import './Expenses.css';

const Expenses=(props)=>{

    const {expenses}=props;
    
    const [year,setYear]=useState(new Date().getFullYear().toString());

    const yearSelectHandler=(changeYear)=>{
        setYear(changeYear);
    }

    // Content that should be rendered in the expenseContent.
    const filterExpenses=expenses.filter((expense)=>expense.date.getFullYear().toString()===year)
    let expenseContent = <Card className="message"><p>Found no data</p></Card>;
    if (filterExpenses.length!==0){
      expenseContent=filterExpenses.length===0 || filterExpenses.map(expense=>
        (<ExpenseItem 
          expense={expense} 
          key={expense.id}/>
        ))
    }
    
    return(
        <Card className="expenses">
        <FilterYear onYearChange={yearSelectHandler} selectedYear={year}/>
        <ExpensesChart expenses={filterExpenses} />
        {/* expenses={id:String, title: String, amount: Number(Decimal), date: Date()} */}
        {expenseContent}
        </Card>
    )
}

export default Expenses;