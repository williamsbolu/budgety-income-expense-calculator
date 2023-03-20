import { useState, useRef, useContext } from "react";

import BudgetDataContext from "../../store/budgetData-context";
import classes from './BudgetForm.module.css';


const BudgetForm = () => {
    const type = useRef();
    const descriptionRef = useRef();
    const valueRef = useRef();
    const [isValid, setIsValid] = useState(false);

    const budgetDataCtx = useContext(BudgetDataContext);

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseType = type.current.value;
        const description = descriptionRef.current.value;
        const value = +valueRef.current.value;
        console.log(expenseType);

        if (description.trim().length > 0 && value > 0) {
            const items =  {
                id: Math.random(),
                type: expenseType,
                description: description,
                value: value
            };
    
            budgetDataCtx.addItem(items);
            descriptionRef.current.value = "";
            valueRef.current.value = "";
            descriptionRef.current.focus();

        } else {
            return;
        };
    };

    const typeChangeHandler = (event) => {
        if (event.target.value === 'exp') {
            setIsValid(true);
        } else {
            setIsValid(false);
        };
    };

    return (
        <form className={classes['form-body']} onSubmit={submitHandler}>
            <div className={`${classes['add__container']} ${isValid ? classes.exp : classes.inc}`}>
                <select defaultValue={'inc'} className={classes['add__type']} onChange={typeChangeHandler} ref={type}>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input type="text" className={classes['add__description']} ref={descriptionRef} placeholder="Add description" />
                <input type="number" className={classes['add__value']} ref={valueRef} placeholder="Value" />
                <button className={classes.add__btn}><ion-icon name="checkmark-outline"></ion-icon></button>
            </div>
        </form>
    );
};

export default BudgetForm;