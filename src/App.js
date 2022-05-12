import { Fragment, useReducer } from "react";

import BudjetList from "./components/Budjet/BudgetList";
import BudgetData from "./components/Data/BudgetData";
import BudgetForm from "./components/NewBudget/BudgetForm";


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

        return {
            budgetItems: updatedBudjetItems,
            budget: updatedTotalBudget,
            totalIncome: updatedTotalIncome,
            totalExpenses: updatedTotalExpenses,
            expensesPercentages: 0
        };
    };

    if (action.type === 'REMOVE') {

    };

    return defaultBudgetState;

};


function App() {
    const [budgetData, setBudgetData] = useReducer(budgetReducer, defaultBudgetState);

    const onUpdateBudgetItems = (items) => {
        console.log(items);
        setBudgetData({ type: 'ADD', item: items });
    };

    console.log(budgetData);

    return (
        <Fragment>
            <BudgetData data={budgetData} />
            <section>
                <BudgetForm onUpdateBudgetItems={onUpdateBudgetItems} />
            </section>
            <BudjetList />
        </Fragment>
    );
}

export default App;

































// const [budgetData, setBudgetData] = useState({
//     budgetItems: [],
//     budget: 0,
//     totalIncome: 0,
//     totalExpenses: 0,
//     expensesPercentages: 0
// });

// const onUpdateBudgetItems = (item) => {
//     setBudgetData((prevState) => {
//         return {
//             ...prevState,
//             budgetItems: [...prevState.budgetItems, item]
//         };
//     })
// };;
