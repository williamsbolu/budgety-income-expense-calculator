import BudgetDataProvider from './store/BudgetDataProvider';

import BudjetList from "./components/Budjet/BudgetList";
import BudgetData from "./components/Data/BudgetData";
import BudgetForm from "./components/NewBudget/BudgetForm";


function App() {

    return (
        <BudgetDataProvider>
            <BudgetData/>
            <section>
                <BudgetForm />
            </section>
            <BudjetList/>
        </BudgetDataProvider>
    );
}

export default App;
