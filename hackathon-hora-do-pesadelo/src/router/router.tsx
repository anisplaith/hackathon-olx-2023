import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../pages/product";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Product/>} path=""/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;