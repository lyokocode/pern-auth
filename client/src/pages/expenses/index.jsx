import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "../../styles/expense/expensePage.scss";
import { BarChartBox, Calender, ExpenseTable, ExpenseNavigation } from "../../components";


export const Expenses = () => {

    const { data: categories, loading: categoriesLoading, error: categoriesError, reFetch: categoriesRefetch } = useFetch('http://localhost:5000/api/expense-category');

    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const { data: expenses, loading: expensesLoading, error: expensesError, reFetch: expensesRefetch } = useFetch('http://localhost:5000/api/expense');

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };
    const handleRefetch = () => {
        categoriesRefetch(),
            expensesRefetch()
    }

    if (expensesLoading || categoriesLoading) return "loading"
    if (expensesError || categoriesError) return "there is a problem"

    const filteredExpenses = selectedCategoryId
        ? expenses.filter((expense) => expense.ExpenseCategoryId === selectedCategoryId)
        : expenses;

    return (
        <div className="expensePage">

            <div className="content tabMenu">
                {!categoriesError && !categoriesLoading && <ExpenseNavigation
                    categories={categories}
                    activeCategoryId={selectedCategoryId}
                    onCategoryClick={handleCategoryClick}
                />}
            </div>
            <div className="content filter"><Calender /></div>
            <div className="content chart"><BarChartBox /></div>
            <div className="content action">
                <button className="refetch" onClick={handleRefetch}> Refresh data</button>
                <button className="filter"> Filter data</button>
            </div>
            <div className="content table">
                {!expensesError && !expensesLoading && <ExpenseTable expenses={filteredExpenses} />}
            </div>

        </div>

    )
}
