import React from "react"; 

const BudgetDataContext = React.createContext({
    budgetItems: [],
    budget: 0,
    totalIncome: 0,
    totalExpenses: 0,
    expensesPercentages: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default BudgetDataContext;

