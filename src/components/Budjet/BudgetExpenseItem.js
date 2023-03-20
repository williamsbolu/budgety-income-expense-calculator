import { useContext } from 'react';

import BudgetDataContext from '../../store/budgetData-context';
import classes from './BudgetExpenseItem.module.css';


const BudgetExpenseItem = (props) => {
    const budgetDataCtx = useContext(BudgetDataContext);

    const deleteItem = () => {
        budgetDataCtx.removeItem(props.id);
    };
    
    let itemPercentage;
    if (props.totalInc > 0) {
        itemPercentage = Math.round((props.value / props.totalInc) * 100);
    } else {
        itemPercentage = 0
    }

    // form the numbers of the value into a string readable form
    const formatedValue = props.value.toLocaleString();

    return (
        <div className={classes.item}>
            <div class={classes['item__description']}>{props.description}</div>
            <div className={classes.box}>
                <div className={classes['item__value']}>- {formatedValue}</div>
                <div className={classes['item__percentage']}>{itemPercentage}%</div>
                <div className={classes['item__delete']}>
                    <button className={classes['item__delete--btn']} onClick={deleteItem}><ion-icon name="close-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    );

};

export default BudgetExpenseItem;