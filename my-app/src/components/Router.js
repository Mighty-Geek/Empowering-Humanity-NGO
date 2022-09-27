import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserPage from './UserPage';
import Feed from '../components/helper/Feed';
import AdminPage from './AdminPage';
import Form from './Form';
import SuperAdminPage from './SuperAdminPage';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/superadmin" element={<SuperAdminPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;