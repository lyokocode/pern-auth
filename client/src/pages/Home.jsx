import { TopBox, Widget } from "../components"
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
            <div className="box box2">
                <TopBox />
            </div>
            <div className="box box3"> box3</div>
            <div className="box box4"> box4</div>
            <div className="box box5"> box5</div>
            <div className="box box6"> box6</div>
            <div className="box box7"> box7</div>
        </div>
    )
}
