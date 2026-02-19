import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Scroll } from 'lucide-react';  
import ScrollToTop from './ScrollToTop';
const MainLayout = () => {
    return (
        <>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
};
export default MainLayout;