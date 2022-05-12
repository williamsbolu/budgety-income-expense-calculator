import { useState, useRef } from "react";

import Button from "../UI/Button";
import classes from './BudgetForm.module.css';



const BudgetForm = (props) => {
    const type = useRef();
    const descriptionRef = useRef();
    const valueRef = useRef();
    const [isValid, setIsValid] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseType = type.current.value;
        const description = descriptionRef.current.value;
        const value = valueRef.current.value;
        console.log(expenseType);

        if (description.trim().length > 1 && value.trim().length > 1) {
            const items =  {
                id: Math.random(),
                type: expenseType,
                description: description,
                value: parseInt(value)
            };
    
            props.onUpdateBudgetItems(items);
            descriptionRef.current.value = "";
            valueRef.current.value = "";
        } else {
            return;
        }
    };

    const typeChangeHandler = (event) => {
        if (event.target.value === 'exp') {
            setIsValid(true);
        } else {
            setIsValid(false);
        };
    }

    return (
        <form className={classes['form-body']} onSubmit={submitHandler}>
            <div className={`${classes['add__container']} ${isValid ? classes.exp : classes.inc}`}>
                <select defaultValue={'inc'} className={classes['add__type']} onChange={typeChangeHandler} ref={type}>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input type="text" className={classes['add__description']} ref={descriptionRef} placeholder="Add description" />
                <input type="number" className={classes['add__value']} ref={valueRef} placeholder="Value" />
                <Button><ion-icon name="checkmark-outline"></ion-icon></Button>
            </div>
        </form>
    );

};

export default BudgetForm;