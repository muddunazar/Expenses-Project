import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {
    const [bool, setBool] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expensedata = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expensedata);
        props.onAddExpense(expensedata);
        setBool(false);

    }
    const startEditingHandler = () => {
        setBool(true)
    }
    const cancelEditingHandler = () => {
        setBool(false)
    }
    return (
        <div className='new-expense'>
            {!bool && <button onClick={startEditingHandler}>Add New expense</button>}
            {bool && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler} />}



        </div>
    )
}
export default NewExpense;