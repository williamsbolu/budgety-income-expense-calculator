import classes from './BudgetIncomeItem.module.css';


const BudgetIncomeItem = (props) => {

    const deleteItem = () => {
        props.deleteBudgetItem(props.id);
    };

    // form the numbers of the value into a string readable form
    const formatedValue = props.value.toLocaleString();

    return (
        <div className={classes.item}>
            <div className={classes['item__description']}>{props.description}</div>
            <div className={classes.box}>
                <div className={classes['item__value']}>+ {formatedValue}</div>
                <div className={classes['item__delete']}>
                    <button className={classes['item__delete--btn']} onClick={deleteItem}><ion-icon name="close-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    )
};

export default BudgetIncomeItem;
