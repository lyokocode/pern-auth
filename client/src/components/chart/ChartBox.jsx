import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import "../../styles/chart/chartBox.scss"
import { Link } from 'react-router-dom';


export const ChartBox = (props) => {
    console.log(props)
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <props.icon size={24} color={props.color} />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to="/" style={{ color: props.color }}>
                    View all
                </Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 50 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span
                        className="percentage"
                        style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
                    >
                        {props.percentage}%
                    </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}
