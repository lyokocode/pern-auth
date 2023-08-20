import PropTypes from 'prop-types';

export const ExpenseNavigation = ({ categories, activeCategoryId, onCategoryClick }) => {
    return (
        <div className="navigation">
            <button
                className={activeCategoryId === null ? "active" : ""}
                onClick={() => onCategoryClick(null)}
            >
                All
            </button>
            {
                categories.map((category) => (
                    <button
                        key={category.id}
                        className={activeCategoryId === category.id ? "active" : ""}
                        onClick={() => onCategoryClick(category.id)}
                    >
                        {category.name}
                    </button>
                ))
            }
        </div >
    );
};

ExpenseNavigation.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            total_amount: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
            Expenses: PropTypes.arrayOf(
                PropTypes.shape({
                    amount: PropTypes.number.isRequired,
                })
            ),
        })
    ).isRequired,
    activeCategoryId: PropTypes.number,
    onCategoryClick: PropTypes.func.isRequired,
};