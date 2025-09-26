import{ createBrowserRouter } from "react-router-dom"
import Layout from "../pages/layout/Layout"
import Destinations from "../pages/destinations/Destinations"
import Details from "../pages/details/Details"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Destinations />
            },
            {
                path: "destination/:id",
                element: <Details />
            }
        ]
    }
])