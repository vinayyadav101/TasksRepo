import { Route, Routes } from "react-router-dom";
import Layout from "../layoutes/Home";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";


export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<HomePage />}  />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login-signup" element={<Login />}  />
            
            </Route>
        </Routes>
    )
}