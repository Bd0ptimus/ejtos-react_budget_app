
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDecreaseAllocation = (name) => {
        if (props.cost < 10) {
            alert("This department's budget is no longer enough to reduce by 10!");
            return;
        }
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="btn btn-success" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        {/* <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td> */}
        <td><button className="btn btn-danger" onClick={event=> handleDecreaseAllocation(props.name)}>-</button></td>

        </tr>
    );
};

export default ExpenseItem;