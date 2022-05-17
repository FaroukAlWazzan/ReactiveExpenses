import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../Expenses/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [year, setYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);
        // console.log(yearValue)
        // console.log('from expenses.js')
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
            </Card>
        </div>
    );
}

export default Expenses;