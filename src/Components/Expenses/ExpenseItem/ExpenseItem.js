import ExpenseDate from '../Date/ExpenseDate';
import Card from '../../UI/Card';

import { useState } from 'react';

import './ExpenseItem.css';

const ExpenseItem=(props)=>{
    // // Dynamic data
    // const title='Car Insurance';
    // // Date contructor;
    // const date=new Date(2021,2,28);
    // const price =256.35;
    // Props - Properties.
    const {title,date,amount}=props.expense;
    const [userTitle,setUserTitle]=useState(title);

    const titleHandler=()=>{
        const newTitle=prompt("Enter the title you want")||userTitle;
        setUserTitle(newTitle);
    }

    // Returned to the user
    return(
        <Card className='expense-item'>
            {/* date = {date: Date()} */}
            <ExpenseDate date={date}/>
            
            <div className='expense-item__description'>
                <h2>{userTitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>

            {/* We dont execute the file here we will only point it, else the JS will execute it when it is parsed. */}
            {/* <button onClick={titleHandler}>Change the title</button> */}
        </Card>
    );
}

export default ExpenseItem;