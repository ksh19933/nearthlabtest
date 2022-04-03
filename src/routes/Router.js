import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import FileInfo from "./FileInfo";
import Main from "./Main";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:id" element={<FileInfo />} />
            </Routes>
        </BrowserRouter>
    )
} 