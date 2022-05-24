import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
   const [year, setYear] = useState('2020')
   const filterChangeHandler = (selectedYear) => {
      setYear(selectedYear);
      // console.log(yearValue);
      // console.log('from expenses.js');
   }
   const filteredExpenses = props.items.filter(ex => ex.date.getFullYear().toString() === year);

   return (
      <div>
         <Card className="expenses">
            <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
         </Card>
      </div>
   );
}

export default Expenses;