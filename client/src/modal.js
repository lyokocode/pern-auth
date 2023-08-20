import FilterData from "./modals/FilterData";
import UpdateProduct from "./modals/UpdateProduct";
import UpdateUser from "./modals/UpdateUser";
import NewProduct from "./modals/NewProduct";
import Calendar from "./modals/Calendar";

const modal = [
    {
        name: "dataFilter",
        element: FilterData
    },
    {
        name: "updateUser",
        element: UpdateUser
    },
    {
        name: "updateProduct",
        element: UpdateProduct
    },
    {
        name: "newProduct",
        element: NewProduct
    },
    {
        name: "calendar",
        element: Calendar
    },

]

export default modal