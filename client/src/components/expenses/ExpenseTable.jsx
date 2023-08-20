import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai"
import "../../styles/expense/list.scss"
import PropTypes from 'prop-types';

export const ExpenseTable = ({ expenses }) => {

    return (
        <section className="expenseList">
            <div className="expenseWrapper">
                <table className="expenseTable ">
                    <thead className=" head ">
                        <tr>
                            <th>
                                <span >Name</span>
                            </th>
                            <th>
                                <span>Category</span>
                            </th>
                            <th>
                                <span>date</span>
                            </th>
                            <th>
                                <span>amount</span>
                            </th>
                            <th>
                                <span>Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="body">
                        {
                            expenses && expenses.map(expense => (
                                <tr key={expense.id}>
                                    {/* expense name */}
                                    <td >
                                        <div className="detail">
                                            <div className="imageContainer">
                                                <img src={expense.image} width="40" height="40" alt="expense image" />
                                            </div>
                                            <div className="title">{expense.name}</div>
                                        </div>
                                    </td>
                                    {/* category name */}
                                    <td className="">
                                        <span>{expense.ExpenseCategory.name}</span>
                                    </td>
                                    {/* date */}
                                    <td className="">
                                        <span>{expense.date}</span>
                                    </td>
                                    {/* amount */}
                                    <td className="">
                                        <span className="amount ">${expense.amount}</span>
                                    </td>
                                    {/* actions */}
                                    <td className="p-2 whitespace-nowrap">
                                        <span className="action">
                                            <button><AiOutlineDelete size={20} /></button>
                                            <button><AiOutlineEye size={20} /></button>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section >
    )
}

ExpenseTable.propTypes = {
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            ExpenseCategory: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }).isRequired,
            amount: PropTypes.number.isRequired,
        })
    ).isRequired,
};