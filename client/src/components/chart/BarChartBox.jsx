import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';

export const BarChartBox = ({ categories }) => {

    // Selecting the top 5 categories with the highest Total_amount value.
    const topCategories = categories
        .slice()
        .sort((a, b) => b.total_amount - a.total_amount)
        .slice(0, 5);

    // Formatting the data of the selected categories.
    const chartData = topCategories.map(category => ({
        name: category.name,
        expenses: category.total_amount,
        color: category.color
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="expenses" fill="#8884d8" >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

BarChartBox.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            total_amount: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired
        })
    ).isRequired,
};
