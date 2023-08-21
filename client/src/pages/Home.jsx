import { ChartBox, PieChartBox, TopBox, Widget, AreaChartBox } from "../components"
import { productChartData, userChartData } from "../data"
import moment from "moment"
import "../styles/home.scss"
import useFetch from "../hooks/useFetch"

export const Home = () => {

    const startDate = moment().startOf("month").toDate();
    const endDate = moment().endOf("month").toDate();
    const { data: categories, loading, error } = useFetch(
        `http://localhost:5000/api/expense-category?startDate=${startDate}&endDate=${endDate}`
    );

    if (loading) return "loading"
    if (error) return "error"
    console.log(categories)
    const totalExpense = categories.reduce((total, category) => total + category.total_amount, 0);

    return (
        <div className="home">

            {/* widgets */}
            <div className="box box1">
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="expense" totalExpense={totalExpense} />
                <Widget type="balance" />
            </div>

            {/* top users */}
            <div className="box box2"> <TopBox /> </div>

            {/* user chartBox */}
            <div className="box box3"> <ChartBox {...userChartData} /></div>

            {/* product chartBox */}
            <div className="box box4"> <ChartBox {...productChartData} /> </div>

            {/* expense chart */}
            <div className="box box5"> <PieChartBox categories={categories} /></div>

            {/* Revenue  chart */}
            <div className="box box6"> <AreaChartBox /></div>
        </div>
    )
}
