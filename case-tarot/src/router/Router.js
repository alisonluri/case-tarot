import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from '../Pages/ErrorPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/errorpage'} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}