
import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [title,setTitle]=useState('');
    const [date,setDate]=useState('');
    const [amount,setAmount]=useState('')

    const titleChangeHandler=(event)=>{
        const value =event.target.value;
        setTitle(value);
        // console.log(title)
    }
    const dateChangehandler=(event)=>{
        setDate(event.target.value);
        // console.log(date);
    }
    const amountChangeHander=(event)=>{
        setAmount(event.target.value);
        // console.log(amount);
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        
        // Storing the data.
        const expenseData={
            id:Math.random(),
            title: title,
            date:new Date(date),
            amount:Number(amount)
        }
        
        // Reseting data
        setAmount('');
        setDate('');
        setTitle('');
        
        props.onSaveExpenseData(expenseData);
    }

    
    return(
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHander} value={amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" onChange={dateChangehandler} value={date}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;