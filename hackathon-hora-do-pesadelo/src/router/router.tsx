import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../pages/product";
import Home from "../pages/home";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Product/>} path="/product"/>
                    <Route element={<Home/>} path="/"/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;