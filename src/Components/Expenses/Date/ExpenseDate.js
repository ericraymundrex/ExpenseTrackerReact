import './ExpenseDate.css'

const ExpenseDate=(props)=>{
    const {date}=props;

    const month=date.toLocaleString('en-US',{month:'long'});
    const day=date.toLocaleString('en-US',{day:'2-digit'});
    const year=date.getFullYear();
    
    return(
    <section className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </section>
    )
}

export default ExpenseDate;