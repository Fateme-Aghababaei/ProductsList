import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
import Categories from "./components/Categories/Categories";
import SingleCategory from "./components/SingleCategory/SingleCategory";
import AddProduct from "./components/AddProduct/AddProduct";
import SingleProduct from "./components/SingleProduct/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
            {
                path: "/category/:category",
                element: <SingleCategory />,
            },
            {
                path: "/add-product",
                element: <AddProduct />,
            },
            {
                path: "/product/:id",
                element: <SingleProduct />,
            }
        ],
    },
]);

export default router;