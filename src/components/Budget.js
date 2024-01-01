
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        console.log('totalExpenses : ', totalExpenses)
        setNewBudgetHandler(event.target.value)
    }

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setNewBudgetHandler = (newBudgetSetting) => {
        const budget = newBudgetSetting;
        if(budget < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;