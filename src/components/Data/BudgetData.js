import styles from './BudgetData.module.css';

const BudgetData = (props) => {

    const budgetValue = `$ ${props.data.budget.toFixed(2)}`;
    const incomeValue = `+ ${props.data.totalIncome.toFixed(2)}`;
    const expensesValue = `- ${props.data.totalExpenses.toFixed(2)}`;
    const expensesPercentage = `${props.data.expensesPercentages}%`;

    return (
        <section className={styles.top}>
            <div className={styles.budget}>
                <div className={styles.budget__title}>
                    Available Budget in <span class="budget__title--month">%Month%</span>:
                </div>

                <div className={styles.budget__value}>{budgetValue}</div>

                <div className={styles.budget__income}>
                    <div className={styles['budget__income--text']}>Income</div>
                    <div className={styles.value}>
                        <div className={styles['budget__income--value']}>{incomeValue}</div>
                        <div className={styles['budget__income--percentage']}>&nbsp;</div>
                    </div>
                </div>

                <div className={styles.budget__expenses}>
                    <div className={styles['budget__expenses--text']}>Expenses</div>
                    <div className={styles.value}>
                        <div className={styles['budget__expense--value']}>{expensesValue}</div>
                        <div className={styles['budget__expenses--percentage']}>{expensesPercentage}</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BudgetData;
