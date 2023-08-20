import { ChartBox, PieChartBox, TopBox, Widget, AreaChartBox } from "../components"
import { productChartData, userChartData } from "../data"
import "../styles/home.scss"

export const Home = () => {

    return (
        <div className="home">

            {/* widgets */}
            <div className="box box1">
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="expense" />
                <Widget type="balance" />
            </div>

            {/* top users */}
            <div className="box box2"> <TopBox /> </div>

            {/* user chartBox */}
            <div className="box box3"> <ChartBox {...userChartData} /></div>

            {/* product chartBox */}
            <div className="box box4"> <ChartBox {...productChartData} /> </div>

            {/* expense chart */}
            <div className="box box5"> <PieChartBox /></div>

            {/* Revenue  chart */}
            <div className="box box6"> <AreaChartBox /></div>
        </div>
    )
}
