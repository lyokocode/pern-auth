import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";
import "../../styles/chart/pieChart.scss"
import PropTypes from "prop-types";

export const PieChartBox = ({ categories }) => {

    const pieChartData = categories.map(category => ({
        name: category.name,
        value: category.total_amount,
        color: category.color
    }));

    return (
        <div className="pieChartBox">
            <h1>Expenses (this month)</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={pieChartData}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                            cursor="pointer"
                        >
                            {pieChartData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {pieChartData.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

PieChartBox.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            total_amount: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired,
        })
    ).isRequired,
};