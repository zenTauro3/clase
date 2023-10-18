import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home";
import Spiral from "./pages/Spiral"

const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/spiral", element: <Spiral/>}
]);

export default router