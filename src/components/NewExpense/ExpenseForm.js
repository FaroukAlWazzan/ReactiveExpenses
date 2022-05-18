import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [formInput, setFormInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setFormInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value }
        // })
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = { title: enteredTitle, amount: enteredAmount, date: new Date(enteredDate) }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        props.onCancel(false);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={enteredAmount} min='.01' step='.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input type="date" value={enteredDate} min='2020-01-01' max='2024-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;