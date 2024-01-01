
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelection = () => {
    const { currency, dispatch } = useContext(AppContext);
    console.log('default currency : ', currency, '-', currency === "£", '-')
    const changeCurrencyHandler = (currencyValue) => {
        const currencySet = currencyValue;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencySet
        });
    }
    return (
            <select className="custom-select btn btn-success" id="inputGroupSelect01" onChange={(event) => changeCurrencyHandler(event.target.value)}>
                <option value="$" selected={currency == "$"} name="dollar"> $ Dollar</option>
                <option value="£" selected={currency == "£"} name="pound">£ Pound</option>
                <option value="€" selected={currency == "€"} name="euro">€ Euro,</option>
                <option value="₹" selected={currency == "₹"} name="ruppee">₹ Ruppee</option>
            </select>
    );
};
export default CurrencySelection;