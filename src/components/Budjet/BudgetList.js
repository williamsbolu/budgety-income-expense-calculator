
import BudgetExpenseItem from './BudgetExpenseItem';
import BudgetIncomeItem from './BudgetIncomeItem';
import styles from './BudgetList.module.css';


const BudjetList = (props) => {
    const filteredIncome = props.data.budgetItems.filter((cur) => cur.type === 'inc');
    const filteredExpenses = props.data.budgetItems.filter((cur) => cur.type === 'exp');

    const deleteBudgetItem = (id) => {
        props.onDelete(id);
    }

    return (
      <section className={styles.container}>
        <div className={styles.income}>
          <h2 className={styles["icome__title"]}>Income</h2>

          <div class="income__list">
            {filteredIncome.map((cur) => (
              <BudgetIncomeItem
                key={cur.id}
                id={cur.id}
                description={cur.description}
                value={cur.value}
                deleteBudgetItem={deleteBudgetItem}
              />
            ))}
          </div>
        </div>

        <div className={styles.expenses}>
          <h2 class={styles["expenses__title"]}>Expenses</h2>

          <div class="expenses__list">
            {filteredExpenses.map((cur) => (
              <BudgetExpenseItem
                key={cur.id}
                id={cur.id}
                description={cur.description}
                value={cur.value}
                totalInc={props.data.totalIncome}
                deleteBudgetItem={deleteBudgetItem}
              />
            ))}
          </div>
        </div>
      </section>
    );
};

export default BudjetList;