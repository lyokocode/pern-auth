import "../../styles/chart/widget.scss"
import { MdOutlineKeyboardArrowUp, MdOutlineShoppingCart, MdPersonOutline, MdOutlineAccountBalanceWallet, MdFastfood } from "react-icons/md"
import { SiExpensify } from "react-icons/si"

export const Widget = ({ type }) => {


    let data;
    let amount = 100
    const diff = 20

    switch (type) {

        case "user":
            data = {
                title: "USERS",
                total: diff,
                isMoney: false,
                link: "see all users",
                icon: <MdPersonOutline className='icon user' />,
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                total: amount,
                link: "view all orders",
                icon: <MdOutlineShoppingCart className='icon shoppigCart' />,
            };
            break;
        case "expense":
            data = {
                title: "expense",
                isMoney: true,
                total: amount,
                link: "view all expense",
                icon: <SiExpensify className='icon expenseIcon' />,
            };
            break;
        case "balance":
            data = {
                title: "Balance",
                isMoney: false,
                total: amount,
                link: "see details",
                icon: <MdOutlineAccountBalanceWallet className='icon balance' />,
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget flex justify-between flex-1 h-[120px] p-5'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"}
                    {data.total}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percantage positive">
                    <MdOutlineKeyboardArrowUp />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}
