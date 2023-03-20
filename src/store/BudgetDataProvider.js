import { useReducer } from "react";
import BudgetDataContext from "./budgetData-context";


const defaultBudgetState = {
    budgetItems: [],
    budget: 0,
    totalIncome: 0,
    totalExpenses: 0,
    expensesPercentages: 0
};

const budgetReducer = (prevstate, action) => {

    if (action.type === 'ADD') {
        const updatedBudjetItems = prevstate.budgetItems.concat(action.item);  // updated the budget items

        const updatedIncomeArr = updatedBudjetItems.filter(cur => cur.type === 'inc');
        const updatedTotalIncome = updatedIncomeArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.value
        }, 0);

        const updatedExpensesArr = updatedBudjetItems.filter(cur => cur.type === 'exp');
        const updatedTotalExpenses = updatedExpensesArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.value
        }, 0);

        const updatedTotalBudget = updatedTotalIncome - updatedTotalExpenses;

        let updatedPercentage;
        if (updatedTotalIncome > 0) {
            updatedPercentage = (updatedTotalExpenses / updatedTotalIncome) * 100;
        } else {
            updatedPercentage = 0;
        };

        return {
            budgetItems: updatedBudjetItems,
            budget: updatedTotalBudget,
            totalIncome: updatedTotalIncome,
            totalExpenses: updatedTotalExpenses,
            expensesPercentages: updatedPercentage
        };
    };

    if (action.type === 'REMOVE') {
        const updatedBudjetItems = prevstate.budgetItems.filter((cur) => action.id !== cur.id);

        console.log(updatedBudjetItems);

        const updatedIncomeArr = updatedBudjetItems.filter(cur => cur.type === 'inc');
        const updatedTotalIncome = updatedIncomeArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.value
        }, 0);

        const updatedExpensesArr = updatedBudjetItems.filter(cur => cur.type === 'exp');
        const updatedTotalExpenses = updatedExpensesArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.value
        }, 0);

        const updatedTotalBudget = updatedTotalIncome - updatedTotalExpenses;

        let updatedPercentage;
        if (updatedTotalIncome > 0) {
            updatedPercentage = (updatedTotalExpenses / updatedTotalIncome) * 100;
        } else {
            updatedPercentage = 0;
        };

        return {
            budgetItems: updatedBudjetItems,
            budget: updatedTotalBudget,
            totalIncome: updatedTotalIncome,
            totalExpenses: updatedTotalExpenses,
            expensesPercentages: updatedPercentage
        };
    };

    return defaultBudgetState;

};

const BudgetDataProvider = (props) => {
    const [budgetData, setBudgetData] = useReducer(budgetReducer, defaultBudgetState);

    const onUpdateBudgetItems = (item) => {
        // console.log(item);
        setBudgetData({ type: 'ADD', item: item });
    };

    const onDeleteBudgetItems = (id) => {
        // console.log(typeof id);
        // console.log(id);
        setBudgetData({ type: 'REMOVE', id: id });
    };

    const budgetValues = {
        budgetItems: budgetData.budgetItems,
        budget: budgetData.budget,
        totalIncome: budgetData.totalIncome,
        totalExpenses: budgetData.totalExpenses,
        expensesPercentages: budgetData.expensesPercentages,
        addItem: onUpdateBudgetItems,
        removeItem: onDeleteBudgetItems
    };

    return (
        <BudgetDataContext.Provider value={budgetValues}>
            {props.children}
        </BudgetDataContext.Provider>
    );
};

export default BudgetDataProvider;