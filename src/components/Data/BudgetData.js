import styles from './BudgetData.module.css';

const BudgetData = (props) => {

    // form the numbers of the data into a string readable form
    const budgetFormat = props.data.budget.toLocaleString();
    const totalIncomeFormat = props.data.totalIncome.toLocaleString();
    const totalExpensesFormat = props.data.totalExpenses.toLocaleString();

    const updatedPercentage = Math.round(props.data.expensesPercentages);

    const month = new Date().toLocaleString('en-US', { month: 'long'});
    

    return (
        <section className={styles.top}>
            <div className={styles.budget}>
                <div className={styles.budget__title}>
                    Available Budget in <span class="budget__title--month">{month}</span>:
                </div>

                <div className={styles.budget__value}>${budgetFormat}</div>

                <div className={styles.budget__income}>
                    <div className={styles['budget__income--text']}>Income</div>
                    <div className={styles.value}>
                        <div className={styles['budget__income--value']}>+ {totalIncomeFormat}</div>
                        <div className={styles['budget__income--percentage']}>&nbsp;</div>
                    </div>
                </div>

                <div className={styles.budget__expenses}>
                    <div className={styles['budget__expenses--text']}>Expenses</div>
                    <div className={styles.value}>
                        <div className={styles['budget__expense--value']}>- {totalExpensesFormat}</div>
                        <div className={styles['budget__expenses--percentage']}>{updatedPercentage}%</div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BudgetData;
