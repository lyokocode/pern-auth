import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import "../../styles/chart/chartBox.scss"
import { userChartData } from '../../data';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

export const ChartBox = () => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <AiOutlineUser size={16} />
                    <span>Total Users</span>
                </div>
                <h1>11.268</h1>
                <Link to="/" style={{ color: "#a855f7" }}>
                    View all
                </Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={userChartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 50 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span
                        className="percentage"
                        style={{ color: "limegreen" }}
                    >
                        45%
                    </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}
