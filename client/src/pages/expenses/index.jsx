import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "../../styles/expense/expensePage.scss";
import { BarChartBox, Calendar, ExpenseTable, ExpenseNavigation } from "../../components";
import moment from "moment";

export const Expenses = () => {
    const [selectedStartDate, setSelectedStartDate] = useState(moment().startOf("month").toDate());
    const [selectedEndDate, setSelectedEndDate] = useState(moment().endOf("month").toDate());

    const handleDateRangeSelect = (startDate, endDate) => {
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);
    }

    const { data: categories, loading: categoriesLoading, error: categoriesError, reFetch: categoriesRefetch } = useFetch(
        `http://localhost:5000/api/expense-category?startDate=${selectedStartDate}&endDate=${selectedEndDate}`
    );

    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const { data: expenses, loading: expensesLoading, error: expensesError, reFetch: expensesRefetch } = useFetch(
        `http://localhost:5000/api/expense?startDate=${selectedStartDate}&endDate=${selectedEndDate}`
    );
    console.log(expenses)

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    const handleRefetch = () => {
        categoriesRefetch();
        expensesRefetch();
    }

    if (expensesLoading || categoriesLoading) return "loading";
    if (expensesError || categoriesError) return "there is a problem";

    const filteredExpenses = selectedCategoryId
        ? expenses.filter((expense) => expense.ExpenseCategoryId === selectedCategoryId)
        : expenses;

    console.log(categories)

    return (
        <div className="expensePage">
            <div className="content tabMenu">
                {!categoriesError && !categoriesLoading && <ExpenseNavigation
                    categories={categories}
                    activeCategoryId={selectedCategoryId}
                    onCategoryClick={handleCategoryClick}
                />}
            </div>
            <div className="content filter">
                <Calendar onSelectDateRange={handleDateRangeSelect} />
            </div>
            <div className="content chart"><BarChartBox categories={categories} /></div>
            <div className="content action">
                <button className="refetch" onClick={handleRefetch}>Refresh data</button>
                <button className="filter">Filter data</button>
            </div>
            <div className="content table">
                {!expensesError && !expensesLoading && <ExpenseTable expenses={filteredExpenses} />}
            </div>
        </div>
    )
}
