import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";

export const topDealUsers = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.998",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Juan Harrington",
        email: "juan@gmail.com",
        amount: "2.134",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "1.932",
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Angel Thomas",
        email: "angel@gmail.com",
        amount: "1.560",
    },
];

export const userChartData = {
    color: "#8884d8",
    icon: AiOutlineUser,
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}

export const productChartData = {
    color: "skyblue",
    icon: AiOutlineShop,
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
    ],
};

export const expenseChartData = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];

export const orderChartData = [
    {
        name: "Sun",
        books: 4000,
        clothes: 2400,
        electronic: 2400,
    },
    {
        name: "Mon",
        books: 3000,
        clothes: 1398,
        electronic: 2210,
    },
    {
        name: "Tue",
        books: 2000,
        clothes: 9800,
        electronic: 2290,
    },
    {
        name: "Wed",
        books: 2780,
        clothes: 3908,
        electronic: 2000,
    },
    {
        name: "Thu",
        books: 1890,
        clothes: 4800,
        electronic: 2181,
    },
    {
        name: "Fri",
        books: 2390,
        clothes: 3800,
        electronic: 2500,
    },
    {
        name: "Sat",
        books: 3490,
        clothes: 4300,
        electronic: 2100,
    },
];

